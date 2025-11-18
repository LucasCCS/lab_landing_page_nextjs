import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Wrench, CheckCircle } from "lucide-react"
import Link from "next/link"
import { config } from "@/data/config"
import { getTheme } from "@/lib/get-theme"

export default function HowItWorks() {
  const theme = getTheme();
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
    <section id="como-funciona" className={theme.howItWorks.section}>
      <div className="container mx-auto px-4">
        <div className={theme.howItWorks.header.container}>
          <h2 className={theme.howItWorks.header.title}>Como Funciona?</h2>
          <p className={theme.howItWorks.header.description}>
            Processo simples e transparente para resolver o problema do seu aparelho {config.product} {config.brand}
          </p>
        </div>

        <div className={theme.howItWorks.steps.container}>
          {steps.map((step, index) => (
            <div key={index} className={theme.howItWorks.steps.item}>
              <div className={theme.howItWorks.steps.iconContainer}>
                <step.icon className={theme.howItWorks.steps.icon} />
              </div> 
              <h3 className={theme.howItWorks.steps.title}>{step.title}</h3>
              <p className={theme.howItWorks.steps.description}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={theme.howItWorks.buttonContainer}>
          <Button size="lg" asChild>
            <Link href="/agendamento">Começar Agendamento</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
