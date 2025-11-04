import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import HowItWorks from "@/components/how-it-works"
import Footer from "@/components/footer"
import UnidadesHome from "@/components/unidades-home"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
