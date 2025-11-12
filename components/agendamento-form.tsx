"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, ChevronLeft, ChevronRight, MapPin, CheckCircle, Sparkles } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import LavaSeca from "@/asset/icons/lava-seca.svg?component";
import Secadora from "@/asset/icons/secadora.svg?component";
import Lavadora from "@/asset/icons/lavadora.svg?component";
import MaquinaDeLavar from "@/asset/icons/maquina-de-lavar.svg?component";


interface FormData {
  // Etapa 1 - Serviço
  servico: string
  problema: string
  marca: string
  modelo: string

  // Etapa 2 - Localização
  cep: string
  endereco: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  estado: string

  // Etapa 3 - Agendamento
  data: Date | undefined
  periodo: string

  // Etapa 4 - Dados Pessoais
  nome: string
  telefone: string
  email: string
  observacoes: string
}

export default function AgendamentoForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoadingCep, setIsLoadingCep] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    servico: "",
    problema: "",
    marca: "",
    modelo: "",
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
    observacoes: "",
  })

  const steps = [
    { number: 1, title: "Dados de Contato", description: "Informações de contato" },
    { number: 2, title: "Produto", description: "Dados do Produto" },
    { number: 3, title: "Localização", description: "Endereço do atendimento" },
    { number: 4, title: "Agendamento", description: "Data e horário" },
    { number: 5, title: "Confirmação", description: "Confirmação do agendamento" },
  ]

  const products = [
    {
      name: "Lava e Seca",
      image: LavaSeca,
    },
    {
      name: "Secadora",
      image: Secadora,
    },
    {
      name: "Lavadora",
      image: Lavadora,
    },
    {
      name: "Máquina de Lavar",
      image: MaquinaDeLavar,
    }
  ];

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const buscarCep = async (cep: string) => {
    if (cep.length !== 8) return

    setIsLoadingCep(true)
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()

      if (!data.erro) {
        setFormData((prev) => ({
          ...prev,
          endereco: data.logradouro || "",
          bairro: data.bairro || "",
          cidade: data.localidade || "",
          estado: data.uf || "",
        }))
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error)
    } finally {
      setIsLoadingCep(false)
    }
  }

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Aqui você implementaria o envio dos dados
    console.log("Dados do agendamento:", formData)
    alert("Agendamento realizado com sucesso!")
    setCurrentStep(5)
  }

  return (
    <div className="space-y-8">
      {/* Progress Steps */}
      <div className="flex items-center justify-between">
        {steps.filter((step) => step.number !== 5).map((step, index) => (

          <div key={step.number} className="flex items-center">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                currentStep >= step.number
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "border-gray-300 text-gray-400 bg-white"
              }`}
            >
              {currentStep > step.number ? <CheckCircle className="w-6 h-6" /> : step.number}
            </div>
            <div className="ml-3 hidden sm:block">
              <p
                className={`text-sm font-medium transition-colors ${currentStep >= step.number ? "text-blue-600" : "text-gray-400"}`}
              >
                {step.title}
              </p>
              <p className="text-xs text-gray-500">{step.description}</p>
            </div>
            {/* {index < steps.length - 1 && (
              <div
                className={`w-12 h-0.5 mx-5 transition-colors ${currentStep > step.number ? "bg-blue-600" : "bg-gray-300"}`}
              />
            )} */}
          </div>
        ))}
      </div>

      {/* Form Steps */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-xl"></div>
        <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden pt-0">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 pt-3">
            <CardTitle className="text-2xl text-blue-900">{steps[currentStep - 1].title}</CardTitle>
            <CardDescription className="text-blue-700">{steps[currentStep - 1].description}</CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            {/* Etapa 1 - Serviço */}
            {currentStep === 1 && (
              <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-gray-700 font-medium">
                  Nome Completo
                </Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => handleInputChange("nome", e.target.value)}
                  placeholder="Seu nome completo"
                  className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-gray-700 font-medium">
                    Telefone
                  </Label>
                  <Input
                    id="telefone"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange("telefone", e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                  />
                </div>
              </div>
            </div>
              
            )}

            {/* Etapa 2 - Produto */}
            {currentStep === 2 && (
              <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="servico" className="text-gray-400 font-medium mb-5">
                  Selecione um produto
                </Label>
                <div className="flex gap-4">
                  {products.map((product, index) => {
                    const Icon = product.image;
                    const isSelected = formData.servico === product.name;
                    return (
                      <div 
                        onClick={() => handleInputChange("servico", product.name)}
                        className={`w-50 cursor-pointer transition-all duration-300 shadow rounded-xl p-4 
                        text-center align-middle justify-center items-center flex flex-col gap-2
                        ${isSelected 
                          ? "opacity-100 shadow-lg border-2 border-blue-500 bg-blue-50 text-blue-600 fill-blue-600" 
                          : "opacity-80 hover:opacity-100 shadow-sm hover:shadow-lg border-2 border-transparent text-gray-400 hover:text-blue-400 fill-gray-400 hover:fill-blue-400"
                        }`}
                        key={'key-' + index}
                      >
                        <Icon className="w-15" />
                        <Label htmlFor={product.name} className="font-medium mt-2 cursor-pointer">{product.name}</Label>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            )}

            {/* Etapa 3 - Localização */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="cep" className="text-gray-700 font-medium">
                    CEP
                  </Label>
                  <div className="flex space-x-3">
                    <Input
                      id="cep"
                      value={formData.cep}
                      onChange={(e) => {
                        const cep = e.target.value.replace(/\D/g, "")
                        handleInputChange("cep", cep)
                        if (cep.length === 8) {
                          buscarCep(cep)
                        }
                      }}
                      placeholder="00000-000"
                      maxLength={8}
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => buscarCep(formData.cep)}
                      disabled={isLoadingCep || formData.cep.length !== 8}
                      className="h-12 px-4 border-blue-200 hover:bg-blue-50 rounded-xl"
                    >
                      <MapPin className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endereco" className="text-gray-700 font-medium">
                    Endereço
                  </Label>
                  <Input
                    id="endereco"
                    value={formData.endereco}
                    onChange={(e) => handleInputChange("endereco", e.target.value)}
                    placeholder="Rua, Avenida..."
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="numero" className="text-gray-700 font-medium">
                      Número
                    </Label>
                    <Input
                      id="numero"
                      value={formData.numero}
                      onChange={(e) => handleInputChange("numero", e.target.value)}
                      placeholder="123"
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="complemento" className="text-gray-700 font-medium">
                      Complemento
                    </Label>
                    <Input
                      id="complemento"
                      value={formData.complemento}
                      onChange={(e) => handleInputChange("complemento", e.target.value)}
                      placeholder="Apto, Bloco..."
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bairro" className="text-gray-700 font-medium">
                      Bairro
                    </Label>
                    <Input
                      id="bairro"
                      value={formData.bairro}
                      onChange={(e) => handleInputChange("bairro", e.target.value)}
                      placeholder="Bairro"
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cidade" className="text-gray-700 font-medium">
                      Cidade
                    </Label>
                    <Input
                      id="cidade"
                      value={formData.cidade}
                      onChange={(e) => handleInputChange("cidade", e.target.value)}
                      placeholder="Cidade"
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Etapa 4 - Agendamento */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-gray-700 font-medium">Data do Atendimento</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-12 justify-start text-left font-normal border-gray-200 hover:bg-blue-50 rounded-xl"
                      >
                        <CalendarIcon className="mr-3 h-5 w-5" />
                        {formData.data ? format(formData.data, "PPP", { locale: ptBR }) : "Selecione uma data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.data}
                        onSelect={(date) => handleInputChange("data", date)}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-4">
                  <Label className="text-gray-700 font-medium">Período Preferencial</Label>
                  <RadioGroup
                    value={formData.periodo}
                    onValueChange={(value) => handleInputChange("periodo", value)}
                    className="space-y-3"
                  >
                    {[
                      { value: "manha", label: "Manhã (8h às 12h)", id: "manha" },
                      { value: "tarde", label: "Tarde (13h às 17h)", id: "tarde" },
                      { value: "noite", label: "Noite (18h às 22h)", id: "noite" },
                    ].map((periodo) => (
                      <div
                        key={periodo.value}
                        className="flex items-center pl-4 space-x-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                      >
                        <RadioGroupItem value={periodo.value} id={periodo.id} />
                        <Label htmlFor={periodo.id} className="flex-1 py-4 cursor-pointer font-medium text-gray-700">
                          {periodo.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Etapa 5 - Confirmação */}
            {currentStep === 5 && (
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                  <h3 className="font-bold text-green-800 mb-4 text-xl">Resumo do Agendamento</h3>
                  <div className="space-y-3 text-green-700">
                    <p className="flex justify-between">
                      <strong>Serviço:</strong>
                      <span>
                        {formData.servico} - {formData.marca}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <strong>Data:</strong>
                      <span>{formData.data ? format(formData.data, "PPP", { locale: ptBR }) : ""}</span>
                    </p>
                    <p className="flex justify-between">
                      <strong>Período:</strong>
                      <span>{formData.periodo}</span>
                    </p>
                    <p className="flex justify-between">
                      <strong>Endereço:</strong>
                      <span>
                        {formData.endereco}, {formData.numero} - {formData.bairro}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <strong>Contato:</strong>
                      <span>
                        {formData.nome} - {formData.telefone}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6">
                  <h4 className="font-bold text-blue-800 mb-4 text-lg">Próximos Passos</h4>
                  <ul className="text-blue-700 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
                      Você receberá uma confirmação por WhatsApp em até 30 minutos
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
                      Nosso técnico entrará em contato 1 hora antes do atendimento
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
                      Tenha em mãos um documento com foto
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />O diagnóstico é gratuito
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
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="h-12 px-6 border-gray-200 hover:bg-gray-50 rounded-xl transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Anterior
        </Button>
        ) : null}
        {currentStep < 4  ? (
          <Button
            onClick={nextStep}
            className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
          >
            Próximo
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        ) : currentStep === 4 ? (
          <Button
            onClick={handleSubmit}
            className="h-12 px-6 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
          >
            Confirmar Agendamento
            <Sparkles className="w-5 h-5 ml-2" />
          </Button>
        ) : null}
      </div>
    </div>
  )
}
