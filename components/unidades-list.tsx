"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Search, MapIcon, ListFilter } from "lucide-react"
import UnidadeMap from "@/components/unidade-map"
import UnidadeCard from "@/components/unidade-card"
import { unidades } from "@/data/unidades"

export default function UnidadesList() {
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
    <div className="space-y-8">
      {/* Filtros */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-xl"></div>
        <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Buscar por nome ou endereço..."
                  className="pl-12 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="text-gray-400 h-5 w-5" />
                <select
                  className="flex h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500/20 focus:outline-none"
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

              <div className="flex items-center space-x-2">
                <ListFilter className="text-gray-400 h-5 w-5" />
                <select
                  className="flex h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500/20 focus:outline-none"
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
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-700 font-medium">
            {filteredUnidades.length} {filteredUnidades.length === 1 ? "unidade encontrada" : "unidades encontradas"}
          </p>
          <Tabs defaultValue="lista" className="w-[300px]">
            <TabsList className="bg-blue-50 border border-blue-200">
              <TabsTrigger
                value="lista"
                className="flex items-center data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <ListFilter className="mr-2 h-4 w-4" />
                Lista
              </TabsTrigger>
              <TabsTrigger
                value="mapa"
                className="flex items-center data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <MapIcon className="mr-2 h-4 w-4" />
                Mapa
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <Tabs defaultValue="lista" className="w-full">
          <TabsContent value="lista" className="mt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredUnidades.map((unidade) => (
                <UnidadeCard key={unidade.id} unidade={unidade} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mapa" className="mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-xl"></div>
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl">
                <UnidadeMap unidades={filteredUnidades} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
