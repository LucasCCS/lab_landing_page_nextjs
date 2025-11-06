"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Search,
  Star,
  Phone,
  Clock,
  ChevronRight,
  ExternalLink,
  Users,
  Award,
  TrendingUp,
  Wrench,
} from "lucide-react"
import Link from "next/link"
import { unidades } from "@/data/unidades"

export default function UnidadesHome() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("todas")

  const regions = ["todas", ...Array.from(new Set(unidades.map((unidade) => unidade.regiao)))]

  const filteredUnidades = unidades.filter((unidade) => {
    const matchesSearch =
      searchTerm === "" ||
      unidade.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unidade.endereco.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unidade.bairro.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRegion = selectedRegion === "todas" || unidade.regiao === selectedRegion

    return matchesSearch && matchesRegion
  })

  const displayedUnidades = filteredUnidades.slice(0, 6)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-3 h-3 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100" height="100" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="dots" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="11" cy="18" r="7" fill="currentColor" fillOpacity="0.02" />
              <circle cx="59" cy="43" r="7" fill="currentColor" fillOpacity="0.02" />
              <circle cx="16" cy="36" r="3" fill="currentColor" fillOpacity="0.02" />
              <circle cx="79" cy="67" r="3" fill="currentColor" fillOpacity="0.02" />
              <circle cx="34" cy="90" r="3" fill="currentColor" fillOpacity="0.02" />
              <circle cx="90" cy="14" r="3" fill="currentColor" fillOpacity="0.02" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-800 text-sm font-semibold">Nossas Unidades</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Encontre a Unidade</span>
            <br />
            <span className="text-blue-600">Mais Próxima</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Assistência técnica especializada em todas as nossas unidades
          </p>
        </div>

        {/* Modern Search Card */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl"></div>
          <Card className="relative bg-white/80 backdrop-blur-xl border-0 shadow-2xl shadow-blue-500/10 rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="relative group">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-blue-500 transition-colors" />
                    <Input
                      placeholder="Buscar por nome, bairro ou endereço..."
                      className="pl-12 h-14 text-lg border-0 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 rounded-2xl transition-all duration-300"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-blue-500 transition-colors z-10" />
                  <select
                    className="w-full h-14 pl-12 pr-4 text-lg border-0 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 rounded-2xl transition-all duration-300 appearance-none cursor-pointer"
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                  >
                    {regions.map((region) => (
                      <option key={region} value={region}>
                        {region === "todas" ? "Todas as regiões" : region}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {(searchTerm || selectedRegion !== "todas") && (
                <div className="mt-6 pt-6 border-t border-gray-200/50">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-gray-600 font-medium">
                      {filteredUnidades.length}{" "}
                      {filteredUnidades.length === 1 ? "unidade encontrada" : "unidades encontradas"}
                      {searchTerm && ` para "${searchTerm}"`}
                      {selectedRegion !== "todas" && ` na ${selectedRegion}`}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Modern Units Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedUnidades.map((unidade, index) => (
            <div key={unidade.id} className="group relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-xl shadow-gray-900/5 rounded-3xl overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 pt-0">
                {/* Top Gradient Bar */}
                <div className="h-1 bg-blue-600"></div>

                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                        {unidade.nome}
                      </CardTitle>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                        <span>
                          {unidade.bairro}, {unidade.regiao}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 bg-yellow-50 px-3 py-1 rounded-full">
                      {renderStars(Math.round(unidade.avaliacao))}
                      <span className="text-sm font-bold ml-1 text-yellow-600">{unidade.avaliacao.toFixed(1)}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <p className="text-sm text-gray-600 mb-1 font-medium">Endereço:</p>
                    <p className="text-sm text-gray-800">{unidade.endereco}</p>
                  </div>

                  <div className="flex items-start space-x-3 bg-blue-50 rounded-2xl p-4">
                    <Clock className="w-4 h-4 text-blue-500 mt-0.5" />
                    <div className="text-sm">
                      <p className="text-gray-800 font-medium">{unidade.horario.diasUteis}</p>
                      <p className="text-gray-600">{unidade.horario.sabado}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {unidade.especialidades.slice(0, 3).map((especialidade, idx) => (
                        <Badge
                          key={especialidade}
                          variant="outline"
                          className="text-xs border-blue-200 bg-blue-50 text-blue-700"
                        >
                          {especialidade}
                        </Badge>
                      ))}
                      {unidade.especialidades.length > 3 && (
                        <Badge variant="outline" className="text-xs bg-gray-100 text-gray-700 border-gray-200">
                          +{unidade.especialidades.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 font-medium">{unidade.telefone}</span>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {unidade.avaliacoes.length} avaliações
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300"
                    >
                      <Link href={`/agendamento?unidade=${unidade.id}`}>Agendar</Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-gray-200 hover:bg-gray-50 transition-all duration-300"
                    >
                      <Link href={`/unidades/${unidade.id}`}>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* No Results State */}
        {filteredUnidades.length === 0 && (searchTerm || selectedRegion !== "todas") && (
          <div className="relative">
            <div className="absolute inset-0 bg-gray-500/10 rounded-3xl blur-xl"></div>
            <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl">
              <CardContent className="text-center py-16">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nenhuma unidade encontrada</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Não encontramos unidades que correspondam aos seus critérios de busca. Tente ajustar os filtros.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedRegion("todas")
                  }}
                  className="bg-blue-50 border-blue-200 hover:bg-blue-100"
                >
                  Limpar Filtros
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Show More Button */}
        {filteredUnidades.length > 6 && (
          <div className="text-center mb-16">
            <p className="text-gray-600 mb-6 text-lg">Mostrando 6 de {filteredUnidades.length} unidades encontradas</p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <Link href="/unidades">
                Ver Todas as Unidades
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        )}

        {/* Modern Statistics */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: MapPin,
              value: unidades.length,
              label: "Unidades",
            },
            {
              icon: Wrench,
              value: Array.from(new Set(unidades.map((u) => u.regiao))).length,
              label: "Regiões Atendidas",
            },
            {
              icon: Award,
              value: (unidades.reduce((sum, u) => sum + u.avaliacao, 0) / unidades.length).toFixed(1),
              label: "Avaliação Média",
            },
            {
              icon: TrendingUp,
              value: `${unidades.reduce((sum, u) => sum + u.avaliacoes.length, 0)}+`,
              label: "Clientes Atendidos",
            },
          ].map((stat, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl group-hover:opacity-20 transition-all duration-500"></div>
              <Card className="relative bg-blue-50 border-0 shadow-xl shadow-gray-900/5 rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="text-center p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-blue-600">{stat.value}</div>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Modern CTA Section */}
        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-blue-600 rounded-3xl p-12 text-center overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>

              <div className="relative">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Não encontrou a unidade ideal?</h3>
                <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
                  Entre em contato conosco e encontraremos a melhor solução para seu atendimento
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/agendamento">Agendar Atendimento</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/30 bg-white/10 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                  >
                    <Link href="/unidades">Ver Todas as Unidades</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
