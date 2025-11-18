import Header from "@/components/header"
import Testimonials from "@/components/testimonials"
import { getTheme } from "@/lib/get-theme"

export default function AvaliacoesPage() {
  const theme = getTheme();
  return (
    <div className={theme.page.hero.container}>

      <Header />

      <div className={theme.page.content.container}>
        <div className={theme.page.content.wrapperLarge}>
          <div className={theme.page.header.container}>
            <div className={theme.page.header.badge}>
              <span className={theme.page.header.badgeText}>Avaliações dos Clientes</span>
            </div>
            <h1 className={theme.page.header.title}>O que nossos clientes dizem</h1>
            <p className={theme.page.header.description}>
              Veja o que nossos clientes falam sobre nossos serviços de assistência técnica
            </p>
          </div>

          {/* Testimonials Section */}
          <div className={theme.page.card.containerWithMargin}>
            <div className={theme.page.card.glow}></div>
            <div className={theme.page.card.card}>
              <Testimonials />
            </div>
          </div>

          {/* Review Form Section */}
          {/* <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Deixe sua Avaliação</h2>
                <p className="text-gray-600 text-lg">Utilizou nossos serviços? Compartilhe sua experiência conosco!</p>
              </div>
              <ReviewForm />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
