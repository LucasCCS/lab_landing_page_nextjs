import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicosDetalhados from "@/components/servicos-detalhados"

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">

      <Header />

      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="text-white/90 text-sm font-medium">Nossos Serviços</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Serviços Especializados</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Oferecemos assistência técnica completa para seus eletrodomésticos com garantia e qualidade
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 p-8">
              <ServicosDetalhados />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
