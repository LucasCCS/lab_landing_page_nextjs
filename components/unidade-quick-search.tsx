"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Star } from "lucide-react"
import Link from "next/link"
import { useRegion } from "@/context/RegionContext"
import { Unidade } from "@/types/unidade"

export default function UnidadeQuickSearch() {
  const { unities, loading, error, search, setSelectedUnity } = useRegion();
  const [filteredUnidades, setFilteredUnidades] = useState<Unidade[]>([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [isSearching, setIsSearching] = useState(false)


  // const filteredUnidades = unidades.filter((unidade) => {
  //   if (!searchTerm) return false
  //   return (
  //     unidade.cep.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  // })

  const handleSearch = (value: string) => {
    search({ zipcode: value }).then((unities: Unidade[]) => {

      const result = unities.slice(0, 2);

      setFilteredUnidades(result);
    });
    setSearchTerm(value)
    setIsSearching(value.length > 0)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-3 h-3 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="relative">
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-blue-500 transition-colors" />
        <Input
          placeholder="Buscar undiade por CEP"
          className="pl-12 pr-4 h-14 text-lg border-0 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 rounded-2xl transition-all duration-300"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsSearching(searchTerm.length > 0)}
        />
      </div>

      {/* Modern Dropdown */}
      {isSearching && (
        <div className="absolute top-full left-0 right-0 mt-3 z-50">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl"></div>
            <Card className="relative bg-white/95 backdrop-blur-xl border-0 shadow-2xl shadow-blue-500/10 rounded-2xl max-h-96 overflow-hidden">
              <CardContent className="p-0">
                {filteredUnidades.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {filteredUnidades.slice(0, 5).map((unidade, index) => (
                      <Link
                        key={unidade.id}
                        href={unidade.url ?? ""}
                        className="block p-4 hover:bg-blue-50 transition-all duration-300 group"
                        onClick={() => {
                          setIsSearching(false)
                          setSelectedUnity(unidade)
                        }}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {unidade.nome}
                            </h4>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                              <MapPin className="w-3 h-3 mr-1 text-blue-500" />
                              <span>
                                {unidade.bairro}, {unidade.cidade}
                              </span>
                            </div>
                            {/* <p className="text-xs text-gray-500 mt-1">{unidade.endereco}</p> */}
                          </div>
                          <div className="flex items-center space-x-1 ml-4 bg-yellow-50 px-2 py-1 rounded-full">
                            {renderStars(Math.round(unidade.avaliacao))}
                            <span className="text-xs font-bold text-yellow-600">{unidade.avaliacao.toFixed(1)}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {filteredUnidades.length > 5 && (
                      <div className="p-4 bg-gray-50">
                        <Button asChild variant="outline" size="sm" className="w-full border-blue-200 hover:bg-blue-50">
                          <Link href="/unidades" onClick={() => setIsSearching(false)}>
                            Ver todas as {filteredUnidades.length} unidades encontradas
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Search className="w-6 h-6 text-gray-400" />
                    </div>
                    <p className="text-gray-600 mb-3">Nenhuma unidade encontrada para "{searchTerm}"</p>
                    <Button asChild variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50">
                      <Link href="/unidades" onClick={() => setIsSearching(false)}>
                        Ver todas as unidades
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isSearching && <div className="fixed inset-0 z-40" onClick={() => setIsSearching(false)} />}
    </div>
  )
}
