import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Shield, Sparkles } from "lucide-react"
import Link from "next/link"
import UnidadeQuickSearch from "@/components/unidade-quick-search"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-40">
        <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="white" fillOpacity="0.03" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-blue-200 mr-2" />
              <span className="text-white/90 text-sm font-medium">Assistência Técnica Premium</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Assistência
                <span className="block text-blue-200">Técnica</span>
                <span className="block text-blue-100">Especializada</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                Serviços de reparo e manutenção para lavadoras, secadoras e refrigeradores. Técnicos qualificados, peças
                originais e garantia estendida.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 border-0 shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <Link href="/agendamento" className="flex items-center">
                  Agendar Agora
                  <Sparkles className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Ver Serviços
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: CheckCircle, text: "Técnicos Certificados", color: "text-green-300" },
                { icon: Clock, text: "Atendimento 24h", color: "text-blue-300" },
                { icon: Shield, text: "Garantia Estendida", color: "text-blue-200" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-white/90 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Floating Card */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-black/20 p-8 transform hover:scale-105 transition-all duration-500">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl"></div>

              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Encontre uma Unidade</h3>
                </div>

                <p className="text-gray-600 mb-8">Busque a assistência técnica mais próxima de você</p>

                <div className="mb-8">
                  <UnidadeQuickSearch />
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    { service: "Lavadoras", price: "R$ 80" },
                    { service: "Secadoras", price: "R$ 90" },
                    { service: "Refrigeradores", price: "R$ 100" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl bg-gray-50 hover:bg-blue-50 p-4 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative flex items-center justify-between">
                        <span className="font-semibold text-gray-900">{item.service}</span>
                        <span className="font-bold text-blue-600">A partir de {item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg transition-all duration-300 hover:scale-105"
                    size="lg"
                    asChild
                  >
                    <Link href="/agendamento">
                      Começar Agendamento
                      <Sparkles className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-gray-200 hover:bg-gray-50 transition-all duration-300"
                    size="lg"
                    asChild
                  >
                    <Link href="/unidades">Ver Todas as Unidades</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400/60 rounded-full blur-xl opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300/40 rounded-full blur-xl opacity-40 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
