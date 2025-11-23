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
import { getTheme } from "@/lib/get-theme"
import { useRegion } from "@/context/RegionContext"

export default function UnidadesHome() {
  const theme = getTheme();
  const { unities, loading, error, search } = useRegion();
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("todas")

  const regions = ["todas", ...Array.from(new Set(unidades.map((unidade) => unidade.cidade)))]

  const filteredUnidades = unidades.filter((unidade) => {
    const matchesSearch =
      searchTerm === "" || unidade.cep.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRegion = selectedRegion === "todas" || unidade.cidade === selectedRegion

    return matchesSearch && matchesRegion
  })

  const displayedUnidades = unities.slice(0, 6)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-3 h-3 ${index < rating ? theme.unidadesHome.unitCard.rating.star.filled : theme.unidadesHome.unitCard.rating.star.empty}`} />
    ))
  }

  return (
    <section className={theme.unidadesHome.section}>
      {/* Background Pattern */}
      <div className={theme.unidadesHome.backgroundPattern}>
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
          <div className={theme.unidadesHome.badge.container}>
            <MapPin className={theme.unidadesHome.badge.icon} />
            <span className={theme.unidadesHome.badge.text}>Nossas Unidades</span>
          </div>

          <h2 className={theme.unidadesHome.title.container}>
            <span className={theme.unidadesHome.title.part1}>Encontre a Unidade</span>
            <br />
            <span className={theme.unidadesHome.title.part2}>Mais Próxima</span>
          </h2>
          <p className={theme.unidadesHome.description}>
            Assistência técnica especializada em todas as nossas unidades
          </p>
        </div>

        {/* Modern Search Card */}
        <div className="relative mb-12">
          <div className={theme.unidadesHome.searchCard.glow}></div>
          <Card className={theme.unidadesHome.searchCard.container}>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className={theme.unidadesHome.searchCard.input.container}>
                    <Search className={theme.unidadesHome.searchCard.input.icon} />
                    <Input
                      placeholder="Buscar por CEP"
                      className={theme.unidadesHome.searchCard.input.field}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {(searchTerm || selectedRegion !== "todas") && (
                <div className="mt-6 pt-6 border-t border-gray-200/50">
                  <div className="flex items-center space-x-2">
                    <div className={theme.unidadesHome.searchCard.resultIndicator}></div>
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
              <div className={theme.unidadesHome.unitCard.glow}></div>

              <Card className={theme.unidadesHome.unitCard.container}>
                {/* Top Gradient Bar */}
                <div className={theme.unidadesHome.unitCard.topBar}></div>

                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <CardTitle className={theme.unidadesHome.unitCard.title}>
                        {unidade.nome}
                      </CardTitle>
                      <div className={theme.unidadesHome.unitCard.location.container}>
                        <MapPin className={theme.unidadesHome.unitCard.location.icon} />
                        <span>
                          {unidade.bairro}, {unidade.cidade}
                        </span>
                      </div>
                    </div>
                    <div className={theme.unidadesHome.unitCard.rating.container}>
                      {renderStars(Math.round(unidade.avaliacao))}
                      <span className={theme.unidadesHome.unitCard.rating.text}>{unidade.avaliacao.toFixed(1)}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* <div className={theme.unidadesHome.unitCard.addressBox.container}>
                    <p className={theme.unidadesHome.unitCard.addressBox.label}>Endereço:</p>
                    <p className={theme.unidadesHome.unitCard.addressBox.value}>{unidade.endereco}</p>
                  </div> */}

                  <div className={theme.unidadesHome.unitCard.scheduleBox.container}>
                    <Clock className={theme.unidadesHome.unitCard.scheduleBox.icon} />
                    <div className="text-sm">
                      <p className={theme.unidadesHome.unitCard.scheduleBox.time}>{unidade.horario.diasUteis}</p>
                      <p className={theme.unidadesHome.unitCard.scheduleBox.saturday}>{unidade.horario.sabado}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {unidade.especialidades.slice(0, 3).map((especialidade, idx) => (
                        <Badge
                          key={especialidade}
                          variant="outline"
                          className={theme.unidadesHome.unitCard.specialtyBadge.active}
                        >
                          {especialidade}
                        </Badge>
                      ))}
                      {unidade.especialidades.length > 3 && (
                        <Badge variant="outline" className={theme.unidadesHome.unitCard.specialtyBadge.more}>
                          +{unidade.especialidades.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <Phone className={theme.unidadesHome.unitCard.contact.icon} />
                      <span className={theme.unidadesHome.unitCard.contact.text}>{unidade.telefone}</span>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Users className={theme.unidadesHome.unitCard.reviewIcon} />
                      {unidade.avaliacoes.length} avaliações
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button
                      asChild
                      size="sm"
                      className={theme.unidadesHome.unitCard.button.primary}
                    >
                      <Link href={`/agendamento?unidade=${unidade.id}`}>Agendar</Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className={theme.unidadesHome.unitCard.button.outline}
                    >
                      <Link href={`/unidades/${unidade.estado}/${unidade.cidade}/${unidade.bairro}`}>
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
            <div className={theme.unidadesHome.noResults.glow}></div>
            <Card className={theme.unidadesHome.noResults.container}>
              <CardContent className="text-center py-16">
                <div className={theme.unidadesHome.noResults.iconContainer}>
                  <MapPin className={theme.unidadesHome.noResults.icon} />
                </div>
                <h3 className={theme.unidadesHome.noResults.title}>Nenhuma unidade encontrada</h3>
                <p className={theme.unidadesHome.noResults.description}>
                  Não encontramos unidades que correspondam aos seus critérios de busca. Tente ajustar os filtros.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedRegion("todas")
                  }}
                  className={theme.unidadesHome.noResults.button}
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
              value: Array.from(new Set(unidades.map((u) => u.cidade))).length,
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
              <div className={theme.unidadesHome.statsCard.glow}></div>
              <Card className={theme.unidadesHome.statsCard.container}>
                <CardContent className="text-center p-8">
                  <div className={theme.unidadesHome.statsCard.iconContainer}>
                    <stat.icon className={theme.unidadesHome.statsCard.icon} />
                  </div>
                  <div className={theme.unidadesHome.statsCard.value}>{stat.value}</div>
                  <p className={theme.unidadesHome.statsCard.label}>{stat.label}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Modern CTA Section */}
        <div className="mt-20">
          <div className="relative">
            <div className={theme.unidadesHome.cta.glow}></div>
            <div className={theme.unidadesHome.cta.container}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className={`${theme.unidadesHome.cta.patternDot} top-10 left-10`}></div>
                <div className={`${theme.unidadesHome.cta.patternDot} top-20 right-20 w-1 h-1`}></div>
                <div className={`${theme.unidadesHome.cta.patternDot} bottom-20 left-20 w-1.5 h-1.5`}></div>
                <div className={`${theme.unidadesHome.cta.patternDot} bottom-10 right-10`}></div>
                <div className={`${theme.unidadesHome.cta.patternDot} top-1/2 left-1/4 w-1 h-1`}></div>
                <div className={`${theme.unidadesHome.cta.patternDot} top-1/3 right-1/3 w-1.5 h-1.5`}></div>
              </div>

              <div className="relative">
                <h3 className={theme.unidadesHome.cta.title}>Não encontrou a unidade ideal?</h3>
                <p className={theme.unidadesHome.cta.description}>
                  Entre em contato conosco e encontraremos a melhor solução para seu atendimento
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className={theme.unidadesHome.cta.button.primary}
                  >
                    <Link href="/agendamento">Agendar Atendimento</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className={theme.unidadesHome.cta.button.outline}
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
