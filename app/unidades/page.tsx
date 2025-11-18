import Header from "@/components/header"
import Footer from "@/components/footer"
import UnidadesList from "@/components/unidades-list"
import { getTheme } from "@/lib/get-theme"

export default function UnidadesPage() {
  const theme = getTheme();
  return (
    <div className={theme.page.hero.container}>

      <Header />

      <div className={theme.page.content.container}>
        <div className={theme.page.content.wrapperXLarge}>
          <div className={theme.page.header.container}>
            <div className={theme.page.header.badge}>
              <span className={theme.page.header.badgeText}>Nossas Unidades</span>
            </div>
            <h1 className={theme.page.header.title}>Encontre a Unidade Mais Próxima</h1>
            <p className={theme.page.header.description}>
              Encontre a assistência técnica mais próxima de você e confira as avaliações dos clientes
            </p>
          </div>

          <div className={theme.page.card.container}>
            <div className={theme.page.card.glow}></div>
            <div className={theme.page.card.card}>
              <UnidadesList />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
