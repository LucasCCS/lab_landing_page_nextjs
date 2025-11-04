import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Wrench, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      title: "1. Agende Online",
      description: "Escolha o serviço, data e horário que melhor se adequa à sua rotina",
    },
    {
      icon: MapPin,
      title: "2. Confirmamos o Endereço",
      description: "Verificamos sua localização via CEP para otimizar o atendimento",
    },
    {
      icon: Wrench,
      title: "3. Técnico Especializado",
      description: "Nosso profissional vai até você com todas as ferramentas necessárias",
    },
    {
      icon: CheckCircle,
      title: "4. Serviço Concluído",
      description: "Problema resolvido com garantia e relatório detalhado do serviço",
    },
  ]

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Como Funciona</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Processo simples e transparente para resolver o problema do seu eletrodoméstico
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/agendamento">Começar Agendamento</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
