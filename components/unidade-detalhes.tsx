"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, Clock, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Unidade } from "@/types/unidade"
import UnidadeMap from "@/components/unidade-map"
import ReviewForm from "@/components/review-form"

interface UnidadeDetalhesProps {
  unidade: Unidade
}

export default function UnidadeDetalhes({ unidade }: UnidadeDetalhesProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2 mb-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/unidades">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Voltar para unidades
          </Link>
        </Button>
      </div>

      {/* Cabeçalho da unidade */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <CardTitle className="text-2xl">{unidade.nome}</CardTitle>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                <span>
                  {unidade.endereco} - {unidade.bairro}, {unidade.regiao}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <div className="flex items-center space-x-1 mb-1">
                {renderStars(unidade.avaliacao)}
                <span className="text-lg font-medium ml-1">{unidade.avaliacao.toFixed(1)}</span>
              </div>
              <span className="text-sm text-gray-600">{unidade.avaliacoes.length} avaliações</span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">Horário de Funcionamento</h3>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                <div className="text-sm">
                  <p>{unidade.horario.diasUteis}</p>
                  <p>{unidade.horario.sabado}</p>
                  {unidade.horario.domingo && <p>{unidade.horario.domingo}</p>}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Contato</h3>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm">{unidade.telefone}</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Especialidades</h3>
              <div className="flex flex-wrap gap-2">
                {unidade.especialidades.map((especialidade) => (
                  <Badge key={especialidade} variant="outline">
                    {especialidade}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button asChild>
              <Link href={`/agendamento?unidade=${unidade.id}`}>
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Serviço nesta Unidade
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs de conteúdo */}
      <Tabs defaultValue="avaliacoes">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
          {/* <TabsTrigger value="localizacao">Localização</TabsTrigger>  */}
        </TabsList>

        <TabsContent value="avaliacoes" className="mt-6">
          <div className="space-y-8">
            {/* Resumo das avaliações */}
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold text-blue-600">{unidade.avaliacao.toFixed(1)}</div>
                    <div className="flex items-center space-x-1 my-2">{renderStars(Math.round(unidade.avaliacao))}</div>
                    <div className="text-sm text-gray-600">{unidade.avaliacoes.length} avaliações</div>
                  </div>

                  <div className="col-span-2">
                    <h3 className="font-medium mb-3">Distribuição das Avaliações</h3>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => {
                        const count = unidade.avaliacoes.filter((a) => a.rating === stars).length
                        const percentage = (count / unidade.avaliacoes.length) * 100

                        return (
                          <div key={stars} className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1 w-16">
                              <span className="text-sm font-medium">{stars}</span>
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            </div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-600 w-12 text-right">{count}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lista de avaliações */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Avaliações dos Clientes</h3>

              {unidade.avaliacoes.map((avaliacao, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="font-medium">{avaliacao.nome}</div>
                        <div className="text-sm text-gray-600">{avaliacao.data}</div>
                      </div>
                      <div className="flex items-center space-x-1">{renderStars(avaliacao.rating)}</div>
                    </div>

                    <div className="mb-3">
                      <Badge variant="outline">{avaliacao.servico}</Badge>
                    </div>

                    <p className="text-gray-700">{avaliacao.comentario}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Formulário de avaliação */}
            {/* <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-medium mb-4">Deixe sua Avaliação</h3>
              <ReviewForm />
            </div> */}
          </div>
        </TabsContent>

        <TabsContent value="localizacao" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="h-[400px] rounded-lg overflow-hidden mb-4">
                <UnidadeMap unidades={[unidade]} />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Endereço Completo</h3>
                  <p>{unidade.endereco}</p>
                  <p>
                    {unidade.bairro} - {unidade.regiao}
                  </p>
                  <p>CEP: {unidade.cep}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Como Chegar</h3>
                  <p className="text-sm text-gray-600">
                    {unidade.comoChegar || "Informações sobre como chegar serão adicionadas em breve."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
