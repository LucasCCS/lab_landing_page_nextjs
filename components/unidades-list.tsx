"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Search, MapIcon, ListFilter } from "lucide-react"
import UnidadeMap from "@/components/unidade-map"
import UnidadeCard from "@/components/unidade-card"
import { unidades } from "@/data/unidades"
import { getTheme } from "@/lib/get-theme"

export default function UnidadesList() {
  const theme = getTheme();
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("todas")
  const [selectedSpecialty, setSelectedSpecialty] = useState("todas")

  // Extrair regiões únicas
  const regions = ["todas", ...Array.from(new Set(unidades.map((unidade) => unidade.regiao)))]

  // Extrair especialidades únicas
  const specialties = ["todas", ...Array.from(new Set(unidades.flatMap((unidade) => unidade.especialidades)))]

  // Filtrar unidades
  const filteredUnidades = unidades.filter((unidade) => {
    const matchesSearch =
      searchTerm === "" ||
      unidade.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unidade.endereco.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unidade.bairro.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRegion = selectedRegion === "todas" || unidade.regiao === selectedRegion

    const matchesSpecialty = selectedSpecialty === "todas" || unidade.especialidades.includes(selectedSpecialty)

    return matchesSearch && matchesRegion && matchesSpecialty
  })

  return (
    <div className={theme.unidadesList.container}>
      {/* Filtros */}
      <div className={theme.unidadesList.filters.container}>
        <div className={theme.unidadesList.filters.glow}></div>
        <Card className={theme.unidadesList.filters.card}>
          <CardContent className={theme.unidadesList.filters.content}>
            <div className={theme.unidadesList.filters.grid}>
              <div className={theme.unidadesList.filters.input.container}>
                <Search className={theme.unidadesList.filters.input.icon} />
                <Input
                  placeholder="Buscar por nome ou endereço..."
                  className={theme.unidadesList.filters.input.field}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className={theme.unidadesList.filters.select.container}>
                <MapPin className={theme.unidadesList.filters.select.icon} />
                <select
                  className={theme.unidadesList.filters.select.field}
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

              <div className={theme.unidadesList.filters.select.container}>
                <ListFilter className={theme.unidadesList.filters.select.icon} />
                <select
                  className={theme.unidadesList.filters.select.field}
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                >
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty === "todas" ? "Todas as especialidades" : specialty}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resultados */}
      <div>
        <div className={theme.unidadesList.results.container}>
          <p className={theme.unidadesList.results.count}>
            {filteredUnidades.length} {filteredUnidades.length === 1 ? "unidade encontrada" : "unidades encontradas"}
          </p>
          <Tabs defaultValue="lista" className={theme.unidadesList.results.tabs.container}>
            <TabsList className={theme.unidadesList.results.tabs.list}>
              <TabsTrigger
                value="lista"
                className={`${theme.unidadesList.results.tabs.trigger.base} ${theme.unidadesList.results.tabs.trigger.active}`}
              >
                <ListFilter className={theme.unidadesList.results.tabs.trigger.icon} />
                Lista
              </TabsTrigger>
              <TabsTrigger
                value="mapa"
                className={`${theme.unidadesList.results.tabs.trigger.base} ${theme.unidadesList.results.tabs.trigger.active}`}
              >
                <MapIcon className={theme.unidadesList.results.tabs.trigger.icon} />
                Mapa
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <Tabs defaultValue="lista" className="w-full">
          <TabsContent value="lista" className={theme.unidadesList.results.content.lista}>
            <div className={theme.unidadesList.results.content.grid}>
              {filteredUnidades.map((unidade) => (
                <UnidadeCard key={unidade.id} unidade={unidade} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mapa" className={theme.unidadesList.results.content.mapa.container}>
            <div className={theme.unidadesList.results.content.mapa.wrapper}>
              <div className={theme.unidadesList.results.content.mapa.glow}></div>
              <div className={theme.unidadesList.results.content.mapa.map}>
                <UnidadeMap unidades={filteredUnidades} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
