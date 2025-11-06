import Header from "@/components/header"
import Footer from "@/components/footer"
import UnidadeDetalhes from "@/components/unidade-detalhes"
import { unidades } from "@/data/unidades"
import { notFound } from "next/navigation"

interface UnidadePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function UnidadePage({ params }: UnidadePageProps) {
  const { id } = await params
  const unidade = unidades.find((u) => u.id === id)

  if (!unidade) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="white" fillOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Header />

      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 p-8">
              <UnidadeDetalhes unidade={unidade} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
