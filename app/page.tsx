import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import HowItWorks from "@/components/how-it-works"
import Footer from "@/components/footer"
import UnidadesHome from "@/components/unidades-home"
import { getTheme } from "@/lib/get-theme"

export default function Home() {
  const theme = getTheme();
  return (
    <div className={theme.page.home}>
      <Header />
      <Hero />
      <Services />
      <UnidadesHome />
      <Testimonials />
      <HowItWorks />
      <Footer />
    </div>
  )
}
