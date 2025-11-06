import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Phone, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"
import type { Unidade } from "@/types/unidade"

interface UnidadeCardProps {
  unidade: Unidade
}

export default function UnidadeCard({ unidade }: UnidadeCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <Card className="relative h-full flex flex-col bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 pt-0">
        <div className="h-1 bg-blue-600"></div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{unidade.nome}</CardTitle>
            <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full">
              {renderStars(unidade.avaliacao)}
              <span className="text-sm font-medium ml-1 text-yellow-600">{unidade.avaliacao.toFixed(1)}</span>
            </div>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-1 text-blue-500" />
            <span>
              {unidade.bairro}, {unidade.regiao}
            </span>
          </div>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-sm text-gray-600 mb-1 font-medium">Endereço:</p>
              <p className="text-sm text-gray-800">{unidade.endereco}</p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-4">
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-blue-500 mt-0.5" />
                <div className="text-sm">
                  <p className="text-gray-800 font-medium">{unidade.horario.diasUteis}</p>
                  <p className="text-gray-600">{unidade.horario.sabado}</p>
                  {unidade.horario.domingo && <p className="text-gray-600">{unidade.horario.domingo}</p>}
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2 font-medium">Especialidades:</p>
              <div className="flex flex-wrap gap-2">
                {unidade.especialidades.map((especialidade) => (
                  <Badge key={especialidade} variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">
                    {especialidade}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-gray-800">{unidade.telefone}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <div className="text-sm text-gray-600">
              <span>{unidade.avaliacoes.length} avaliações</span>
            </div>
            <Button asChild size="sm" variant="outline" className="border-blue-200 hover:bg-blue-50 rounded-xl">
              <Link href={`/unidades/${unidade.id}`}>
                Ver Detalhes
                <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
