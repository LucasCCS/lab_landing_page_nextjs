import AgendamentoForm from "@/components/agendamento-form"
import Header from "@/components/header"
import { getTheme } from "@/lib/get-theme"

export default function AgendamentoPage() {
  const theme = getTheme();
  return (
    <div className={theme.page.hero.container}>
      <Header />

      <div className={theme.page.content.container}>
        <div className={theme.page.content.wrapper}>
          <div className={theme.page.header.container}>
            <div className={theme.page.header.badge}>
              <span className={theme.page.header.badgeText}>Agendamento Online</span>
            </div>
            <h1 className={theme.page.header.title}>Agende Seu Atendimento</h1>
            <p className={theme.page.header.description}>
              Preencha as informações abaixo para agendar seu atendimento técnico especializado
            </p>
          </div>

          <div className={theme.page.card.container}>
            <div className={theme.page.card.glow}></div>
            <div className={theme.page.card.card}>
              <AgendamentoForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
