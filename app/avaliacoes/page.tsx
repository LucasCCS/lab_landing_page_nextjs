import Header from "@/components/header"
import ReviewForm from "@/components/review-form"
import Testimonials from "@/components/testimonials"

export default function AvaliacoesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">

      <Header />

      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="text-white/90 text-sm font-medium">Avaliações dos Clientes</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">O que nossos clientes dizem</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Veja o que nossos clientes falam sobre nossos serviços de assistência técnica
            </p>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 p-8">
                <Testimonials />
              </div>
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
