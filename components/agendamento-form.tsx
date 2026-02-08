"use client"

import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, ChevronLeft, ChevronRight, MapPin, CheckCircle, Sparkles } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { ptBR as ptBRCalendar } from "react-day-picker/locale"
import { getTheme } from "@/lib/get-theme"
import LavaSeca from "@/asset/icons/lava-seca.svg?component"
import Secadora from "@/asset/icons/secadora.svg?component"
import Lavadora from "@/asset/icons/lavadora.svg?component"
import MaquinaDeLavar from "@/asset/icons/maquina-de-lavar.svg?component"
import { createSchedule, updateSchedule } from "@/services/schedule.service"

export interface ScheduleDataToSave {
  nome: string
  telefone: string
  email: string
  produto: string
  marca: string
  origem: string
  id_empresa: string
}
export interface ScheduleUpdateData {
  agendamento_id?: number | null
  defeito: string
  cep: string
  endereco: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  estado: string
  data: Date | undefined
  periodo: string
  garantia: string
}
export interface ScheduleData extends ScheduleDataToSave, ScheduleUpdateData {}

/** Zod por etapa (validação incremental) */
const schemaStep1 = z.object({
  nome: z.string().min(3, "Informe seu nome completo"),
  telefone: z.string().min(10, "Telefone inválido"),
  email: z.string().email("E-mail inválido"),
})

const schemaStep2 = z.object({
  produto: z.string().min(1, "Selecione um produto"),
  defeito: z.string().min(1, "Selecione o defeito"),
  garantia: z.string().min(1, "Selecione uma opção"),
})

const schemaStep3 = z.object({
  cep: z.string().regex(/^\d{8}$/, "CEP deve ter 8 dígitos"),
  endereco: z.string().min(3, "Endereço obrigatório"),
  numero: z.string().min(1, "Número obrigatório"),
  complemento: z.string().min(2, "Complemento obrigatório"),
  bairro: z.string().min(2, "Bairro obrigatório"),
  cidade: z.string().min(2, "Cidade obrigatória"),
  estado: z.string().length(2, "UF inválida"),
})

const schemaStep4 = z.object({
  data: z.coerce
    .date()
    .refine((d) => !isNaN(d.getTime()), {
      message: "Selecione uma data",
    }),
  periodo: z.string().min(1, "Selecione um período"),
})

export default function AgendamentoForm() {
  const theme = getTheme()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoadingCep, setIsLoadingCep] = useState(false)

  const steps = useMemo(
    () => [
      { number: 1, title: "Dados de Contato", description: "Informações de contato" },
      { number: 2, title: "Produto", description: "Dados do Produto" },
      { number: 3, title: "Localização", description: "Endereço do atendimento" },
      { number: 4, title: "Agendamento", description: "Data e horário" },
      { number: 5, title: "Agendamento Confirmado", description: "Confirmação do agendamento" },
    ],
    []
  )

  const products = useMemo(
    () => [
      { name: "Lava e Seca", image: LavaSeca },
      { name: "Secadora", image: Secadora },
      { name: "Lavadora", image: Lavadora },
      { name: "Máquina de Lavar", image: MaquinaDeLavar },
    ],
    []
  )

  const {
    register,
    setValue,
    getValues,
    watch,
    trigger,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<ScheduleData>({
    mode: "onBlur",
    defaultValues: {
      defeito: "",
      produto: "",
      cep: "",
      endereco: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      data: undefined,
      periodo: "",
      nome: "",
      telefone: "",
      email: "",
      garantia: "",
      marca: process.env.NEXT_PUBLIC_BRAND ?? "",
      origem: "",
      id_empresa: process.env.NEXT_PUBLIC_ID_EMPRESA ?? "",
      agendamento_id: null,
    },
  })

  // watch do form todo (pra render e resumo)
  const form = watch()

  useEffect(() => {
    if (typeof window !== "undefined") {
      setValue("origem", window.location.href, { shouldDirty: false })
    }
  }, [setValue])

  async function buscarCep(cep: string) {
    if (cep.length !== 8) return
    setIsLoadingCep(true)
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()
      if (!data.erro) {
        setValue("endereco", data.logradouro || "", { shouldValidate: true })
        setValue("bairro", data.bairro || "", { shouldValidate: true })
        setValue("cidade", data.localidade || "", { shouldValidate: true })
        setValue("estado", data.uf || "", { shouldValidate: true })
      }
    } catch (e) {
      console.error("Erro ao buscar CEP:", e)
    } finally {
      setIsLoadingCep(false)
    }
  }

  function applyZodErrors(issues: z.ZodIssue[]) {
    issues.forEach((issue) => {
      const field = issue.path?.[0] as keyof ScheduleData | undefined
      if (!field) return
  
      setError(field, {
        type: "manual",
        message: issue.message,
      })
    })
  }

  async function validateCurrentStep(step: number) {
    clearErrors()
    const values = getValues()
  
    const r =
      step === 1 ? schemaStep1.safeParse(values)
      : step === 2 ? schemaStep2.safeParse(values)
      : step === 3 ? schemaStep3.safeParse(values)
      : step === 4 ? schemaStep4.safeParse(values)
      : { success: true as const }
  
    if (!r.success) {
      applyZodErrors(r.error.issues)
      return false
    }
  
    return true
  }
  

  const nextStep = async () => {
    if (currentStep >= 5) return

    const ok = await validateCurrentStep(currentStep)
    if (!ok) return

    // cria o agendamento ao sair do step 2 (mantendo seu comportamento)
    if (currentStep === 2 && !getValues("agendamento_id")) {
      const values = getValues()
      const response = await createSchedule({
        nome: values.nome,
        telefone: values.telefone,
        email: values.email,
        produto: values.produto,
        id_empresa: values.id_empresa,
        origem: values.origem,
        marca: values.marca,
      })

      if (response.status) {
        setValue("agendamento_id", response.agendamento_id, { shouldDirty: false })
        setCurrentStep(3)
      }
      return
    }

    setCurrentStep((s) => s + 1)
  }

  const prevStep = () => {
    setCurrentStep((s) => Math.max(1, s - 1))
  }

  const onConfirm = async () => {
    const ok = await validateCurrentStep(4)
    if (!ok) return

    const values = getValues()

    const response = await updateSchedule({
      ...values,
      agendamento_id: values.agendamento_id,
    })

    if (response.status) {
      setCurrentStep(5)
    }
  }

  return (
    <div className="space-y-8">
      {/* Progress Steps */}
      <div className="flex items-center justify-between">
        {steps.filter((s) => s.number !== 5).map((step) => (
          <div key={step.number} className="flex items-center">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                currentStep >= step.number ? theme.agendamentoForm.step.active : theme.agendamentoForm.step.inactive
              }`}
            >
              {currentStep > step.number ? <CheckCircle className="w-6 h-6" /> : step.number}
            </div>
            <div className="ml-3 hidden sm:block">
              <p
                className={`text-sm font-medium transition-colors ${
                  currentStep >= step.number ? theme.agendamentoForm.step.activeLabel : theme.agendamentoForm.step.inactiveLabel
                }`}
              >
                {step.title}
              </p>
              <p className={theme.agendamentoForm.step.description}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Form Steps */}
      <div className="relative">
        <div className={theme.agendamentoForm.formCard.glow}></div>
        <Card className={theme.agendamentoForm.formCard.container}>
          <CardHeader className={theme.agendamentoForm.formCard.header}>
            <CardTitle className={theme.agendamentoForm.formCard.title}>{steps[currentStep - 1].title}</CardTitle>
            <CardDescription className={theme.agendamentoForm.formCard.description}>{steps[currentStep - 1].description}</CardDescription>
          </CardHeader>

          <CardContent className="p-8 space-y-6">
            {/* Step 1 */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className={theme.agendamentoForm.input.label}>
                    Nome Completo
                  </Label>
                  <Input
                    id="nome"
                    {...register("nome")}
                    placeholder="Seu nome completo"
                    className={
                      theme.agendamentoForm.input.field
                      + " " + (errors.nome ? "border-red-500" : "")
                    }
                  />
                  {errors.nome && <p className="text-sm text-red-500">{errors.nome.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className={theme.agendamentoForm.input.label}>
                      Telefone
                    </Label>
                    <Input
                      id="telefone"
                      {...register("telefone")}
                      placeholder="(11) 99999-9999"
                      className={
                        theme.agendamentoForm.input.field
                        + " " + (errors.telefone ? "border-red-500" : "")
                      }
                    />
                    {errors.telefone && <p className="text-sm text-red-500">{errors.telefone.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className={theme.agendamentoForm.input.label}>
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="seu@email.com"
                      className={
                        theme.agendamentoForm.input.field
                        + " " + (errors.email ? "border-red-500" : "")
                      }
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-gray-400 font-medium mb-5">Selecione um produto</Label>

                  <div className="grid grid-cols-2 md:flex gap-4">
                    {products.map((product, index) => {
                      const Icon = product.image
                      const isSelected = form.produto === product.name
                      return (
                        <div
                          key={"key-" + index}
                          onClick={() => setValue("produto", product.name, { shouldValidate: true })}
                          className={`w-full md:w-50 cursor-pointer transition-all duration-300 shadow rounded-xl p-4 
                          text-center align-middle justify-center items-center flex flex-col gap-2
                          ${isSelected ? theme.agendamentoForm.productCard.selected : theme.agendamentoForm.productCard.unselected}`}
                        >
                          <Icon className="w-15" />
                          <Label className={
                            "font-medium mt-2 cursor-pointer"
                            + " " + (errors.produto ? "text-red-500" : "")
                          }>{product.name}</Label>
                        </div>
                      )
                    })}
                  </div>

                  {errors.produto && <p className="text-sm text-red-500">{errors.produto.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-400 font-medium mb-5">Defeito apresentado</Label>
                  <Select value={form.defeito} onValueChange={(v) => setValue("defeito", v, { shouldValidate: true })}>
                    <SelectTrigger className={
                      "w-full"
                      + " " + (errors.defeito ? "border-red-500" : "")
                    }>
                      <SelectValue placeholder="Selecione o defeito" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                          {
                            value: 'Não liga',
                            label: 'Não liga'
                          },
                          {
                            value: 'Está Trepidando',
                            label: 'Está Trepidando'
                          },
                          {
                            value: 'Porta quebrada',
                            label: 'Porta quebrada'
                          },
                          {
                            value: 'Vaza agua',
                            label: 'Vaza agua'
                          },
                          {
                            value: 'Mangueira rasgada ou furada',
                            label: 'Mangueira rasgada ou furada'
                          },
                          {
                            value: 'Não Centrifuga',
                            label: 'Não Centrifuga'
                          },
                          {
                            value: 'Não solta água',
                            label: 'Não solta água'
                          },
                          {
                            value: 'Não faz o processo',
                            label: 'Não faz o processo'
                          },
                          {
                            value: 'Instalação',
                            label: 'Instalação'
                          },
                          {
                            value: 'Rasga roupas',
                            label: 'Rasga roupas'
                          },
                          {
                            value: 'Barulho ao Centrifugar',
                            label: 'Barulho ao Centrifugar'
                          },
                          {
                            value: 'Barulho na Secagem',
                            label: 'Barulho na Secagem'
                          },
                          {
                            value: 'Apresenta Erro na Secagem',
                            label: 'Apresenta Erro na Secagem'
                          },
                      ].map((d) => (
                        <SelectItem value={d.value}>{d.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.defeito && <p className="text-sm text-red-500">{errors.defeito.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-400 font-medium mb-5">Seu produto possui mais de 1 ano de uso?</Label>
                  <RadioGroup
                    value={form.garantia}
                    onValueChange={(v) => setValue("garantia", v, { shouldValidate: true })}
                    className="grid grid-cols-2"
                  >
                    {[
                      { value: "sim", label: "Sim", id: "sim" },
                      { value: "nao", label: "Não", id: "nao" },
                    ].map((g) => (
                      <div key={g.value} className={theme.agendamentoForm.periodYearOption}>
                        <RadioGroupItem value={g.value} id={g.id} />
                        <Label htmlFor={g.id} className="flex-1 py-4 cursor-pointer font-medium text-gray-700">
                          {g.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  {errors.garantia && <p className="text-sm text-red-500">{errors.garantia.message}</p>}
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="cep" className={theme.agendamentoForm.input.label}>
                    CEP
                  </Label>

                  <div className="flex space-x-3">
                    <Input
                      id="cep"
                      value={form.cep ?? ""}
                      onChange={(e) => {
                        const cep = e.target.value.replace(/\D/g, "").slice(0, 8)
                        setValue("cep", cep, { shouldValidate: true })
                        if (cep.length === 8) buscarCep(cep)
                      }}
                      placeholder="00000-000"
                      maxLength={8}
                      className={theme.agendamentoForm.input.field}
                    />

                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => buscarCep(form.cep ?? "")}
                      disabled={isLoadingCep || (form.cep?.length ?? 0) !== 8}
                      className={theme.agendamentoForm.input.button}
                    >
                      <MapPin className="w-5 h-5" />
                    </Button>
                  </div>

                  {errors.cep && <p className="text-sm text-red-500">{errors.cep.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endereco" className={theme.agendamentoForm.input.label}>
                    Endereço
                  </Label>
                  <Input id="endereco" {...register("endereco")} placeholder="Rua, Avenida..." className={theme.agendamentoForm.input.field} />
                  {errors.endereco && <p className="text-sm text-red-500">{errors.endereco.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="numero" className={theme.agendamentoForm.input.label}>
                      Número
                    </Label>
                    <Input id="numero" {...register("numero")} placeholder="123" className={theme.agendamentoForm.input.field} />
                    {errors.numero && <p className="text-sm text-red-500">{errors.numero.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="complemento" className={theme.agendamentoForm.input.label}>
                      Complemento
                    </Label>
                    <Input id="complemento" {...register("complemento")} placeholder="Apto, Bloco..."
                     className={theme.agendamentoForm.input.field
                      + " " + (errors.complemento ? "border-red-500" : "")
                     } />
                    {errors.complemento && <p className="text-sm text-red-500">{errors.complemento.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bairro" className={theme.agendamentoForm.input.label}>
                      Bairro
                    </Label>
                    <Input id="bairro" {...register("bairro")} placeholder="Bairro" className={theme.agendamentoForm.input.field} />
                    {errors.bairro && <p className="text-sm text-red-500">{errors.bairro.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cidade" className={theme.agendamentoForm.input.label}>
                      Cidade
                    </Label>
                    <Input id="cidade" {...register("cidade")} placeholder="Cidade" className={theme.agendamentoForm.input.field} />
                    {errors.cidade && <p className="text-sm text-red-500">{errors.cidade.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estado" className={theme.agendamentoForm.input.label}>
                    Estado (UF)
                  </Label>
                  <Input id="estado" {...register("estado")} placeholder="SP" className={theme.agendamentoForm.input.field} />
                  {errors.estado && <p className="text-sm text-red-500">{errors.estado.message}</p>}
                </div>
              </div>
            )}

            {/* Step 4 */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className={theme.agendamentoForm.input.label}>Data do Atendimento</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={theme.agendamentoForm.button.calendar}>
                        <CalendarIcon className="mr-3 h-5 w-5" />
                        {form.data ? format(form.data, "dd/MM/yyyy", { locale: ptBR }) : "Selecione uma data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={form.data}
                        onSelect={(date) => setValue("data", date, { shouldValidate: true })}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        locale={ptBRCalendar}
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.data && <p className="text-sm text-red-500">{String(errors.data.message)}</p>}
                </div>

                <div className="space-y-4">
                  <Label className={theme.agendamentoForm.input.label}>Período Preferencial</Label>
                  <RadioGroup value={form.periodo} onValueChange={(v) => setValue("periodo", v, { shouldValidate: true })} className="space-y-3">
                    {[
                      { value: "Manhã (09h às 12h)", label: "Manhã (09h às 12h)", id: "manha" },
                      { value: "Tarde (13h às 17h)", label: "Tarde (13h às 17h)", id: "tarde" },
                      { value: "Comercial (09h às 17h)", label: "Comercial (09h às 17h)", id: "comercial" },
                    ].map((p) => (
                      <div key={p.value} className={theme.agendamentoForm.periodOption}>
                        <RadioGroupItem value={p.value} id={p.id} />
                        <Label htmlFor={p.id} className="flex-1 py-4 cursor-pointer font-medium text-gray-700">
                          {p.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  {errors.periodo && <p className="text-sm text-red-500">{errors.periodo.message}</p>}
                </div>
              </div>
            )}

            {/* Step 5 */}
            {currentStep === 5 && (
              <div className="space-y-8">
                <div className={theme.agendamentoForm.confirmation.successBox}>
                  <h3 className={theme.agendamentoForm.confirmation.successTitle}>Resumo do Agendamento</h3>
                  <div className={`space-y-3 ${theme.agendamentoForm.confirmation.successText}`}>
                    <p className="flex justify-between">
                      <strong>Código do Agendamento:</strong>
                      <span className={theme.agendamentoForm.confirmation.scheduleCode}>
                        {form.agendamento_id}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <strong>Serviço:</strong>
                      <span>
                        {form.produto} - {form.marca}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <strong>Defeito:</strong>
                      <span>
                        {form.defeito}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <strong>Data:</strong>
                      <span>{form.data ? format(form.data, "dd/MM/yyyy", { locale: ptBR }) : ""}</span>
                    </p>
                    <p className="flex justify-between">
                      <strong>Período:</strong>
                      <span>{form.periodo}</span>
                    </p>
                    <p className="flex justify-between">
                      <strong>Endereço:</strong>
                      <span>
                        {form.endereco}, {form.numero} - {form.bairro}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <strong>Contato:</strong>
                      <span>
                        {form.nome} - {form.telefone}
                      </span>
                    </p>
                  </div>
                </div>

                <div className={theme.agendamentoForm.confirmation.infoBox}>
                  <h4 className={theme.agendamentoForm.confirmation.infoTitle}>Próximos Passos</h4>
                  <ul className={`${theme.agendamentoForm.confirmation.infoText} space-y-2`}>
                    {/* <li className="flex items-start">
                      <CheckCircle className={theme.agendamentoForm.confirmation.checkIcon} />
                      Você receberá uma confirmação por WhatsApp em até 30 minutos
                    </li> */}
                    <li className="flex items-start">
                      <CheckCircle className={theme.agendamentoForm.confirmation.checkIcon} />
                      Nosso técnico entrará em contato 1 hora antes do atendimento
                    </li>
                    {/* <li className="flex items-start">
                      <CheckCircle className={theme.agendamentoForm.confirmation.checkIcon} />
                      Tenha em mãos um documento com foto
                    </li> */}
                    <li className="flex items-start">
                      <CheckCircle className={theme.agendamentoForm.confirmation.checkIcon} />
                      O diagnóstico é gratuito
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        {currentStep > 1 && currentStep !== 5 ? (
          <Button variant="outline" onClick={prevStep} className={theme.agendamentoForm.button.prev}>
            <ChevronLeft className="w-5 h-5 mr-2" />
            Anterior
          </Button>
        ) : null}

        {currentStep < 4 ? (
          <Button onClick={nextStep} className={theme.agendamentoForm.button.next}>
            Próximo
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        ) : currentStep === 4 ? (
          <Button onClick={onConfirm} className={theme.agendamentoForm.button.confirm}>
            Confirmar Agendamento
            <Sparkles className="w-5 h-5 ml-2" />
          </Button>
        ) : null}
      </div>

      {/* Hidden fields pra manter no form */}
      <input type="hidden" {...register("marca")} />
      <input type="hidden" {...register("origem")} />
      <input type="hidden" {...register("id_empresa")} />
      <input type="hidden" {...register("agendamento_id")} />
      <input type="hidden" {...register("produto")} />
      <input type="hidden" {...register("defeito")} />
      <input type="hidden" {...register("garantia")} />
      <input type="hidden" {...register("data")} />
      <input type="hidden" {...register("periodo")} />
    </div>
  )
}
