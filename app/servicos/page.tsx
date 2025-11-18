import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicosDetalhados from "@/components/servicos-detalhados"
import { getTheme } from "@/lib/get-theme"

export default function ServicosPage() {
  const theme = getTheme();
  return (
    <div className={theme.page.hero.container}>

      <Header />

      <div className={theme.page.content.container}>
        <div className={theme.page.content.wrapperXLarge}>
          <div className={theme.page.header.container}>
            <div className={theme.page.header.badge}>
              <span className={theme.page.header.badgeText}>Nossos Serviços</span>
            </div>
            <h1 className={theme.page.header.title}>Serviços Especializados</h1>
            <p className={theme.page.header.description}>
              Oferecemos assistência técnica completa para seus eletrodomésticos com garantia e qualidade
            </p>
          </div>

          <div className={theme.page.card.container}>
            <div className={theme.page.card.glow}></div>
            <div className={theme.page.card.card}>
              <ServicosDetalhados />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
