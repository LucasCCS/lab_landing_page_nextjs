"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Star, Search, Eye, Trash2, User, Calendar } from "lucide-react"

export default function AdminAvaliacoes() {
  const [searchTerm, setSearchTerm] = useState("")

  // Dados simulados de avaliações
  const avaliacoes = [
    {
      id: "AVL001",
      cliente: "Maria Silva",
      servico: "Reparo de Lavadora",
      unidade: "AssistTech Vila Mariana",
      rating: 5,
      comentario:
        "Excelente atendimento! O técnico chegou no horário marcado, foi muito educado e resolveu o problema da minha lavadora rapidamente. Preço justo e serviço de qualidade.",
      data: "2024-01-10",
      status: "aprovada",
    },
    {
      id: "AVL002",
      cliente: "João Santos",
      servico: "Manutenção de Refrigerador",
      unidade: "AssistTech Moema",
      rating: 5,
      comentario:
        "Profissional muito competente! Trocou o filtro do meu refrigerador e ainda fez uma limpeza completa. Explicou tudo detalhadamente e deu dicas de manutenção.",
      data: "2024-01-08",
      status: "aprovada",
    },
    {
      id: "AVL003",
      cliente: "Ana Costa",
      servico: "Reparo de Secadora",
      unidade: "AssistTech Pinheiros",
      rating: 4,
      comentario:
        "Bom atendimento e preço justo. O técnico foi educado e resolveu o problema. Única observação é que demorou um pouco mais que o esperado.",
      data: "2024-01-05",
      status: "pendente",
    },
    {
      id: "AVL004",
      cliente: "Carlos Oliveira",
      servico: "Reparo de Lavadora",
      unidade: "AssistTech Santana",
      rating: 2,
      comentario:
        "Serviço demorou muito e o técnico não foi muito educado. O problema foi resolvido mas a experiência não foi boa.",
      data: "2024-01-03",
      status: "pendente",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      aprovada: { label: "Aprovada", className: "bg-green-100 text-green-800" },
      pendente: { label: "Pendente", className: "bg-yellow-100 text-yellow-800" },
      rejeitada: { label: "Rejeitada", className: "bg-red-100 text-red-800" },
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    return <Badge className={config.className}>{config.label}</Badge>
  }

  const filteredAvaliacoes = avaliacoes.filter(
    (avaliacao) =>
      avaliacao.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      avaliacao.servico.toLowerCase().includes(searchTerm.toLowerCase()) ||
      avaliacao.unidade.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Avaliações</CardTitle>
          <CardDescription>Modere e gerencie as avaliações dos clientes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar avaliações..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Badge variant="outline" className="ml-auto">
              {filteredAvaliacoes.length} avaliações
            </Badge>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cliente / Serviço</TableHead>
                  <TableHead>Unidade</TableHead>
                  <TableHead>Avaliação</TableHead>
                  <TableHead>Comentário</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAvaliacoes.map((avaliacao) => (
                  <TableRow key={avaliacao.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium flex items-center">
                          <User className="w-4 h-4 mr-1 text-gray-400" />
                          {avaliacao.cliente}
                        </div>
                        <div className="text-sm text-gray-500">{avaliacao.servico}</div>
                        <div className="text-xs text-gray-400">{avaliacao.id}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{avaliacao.unidade}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">{renderStars(avaliacao.rating)}</div>
                        <span className="font-medium">{avaliacao.rating}.0</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-xs">
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {avaliacao.comentario.length > 100
                            ? `${avaliacao.comentario.substring(0, 100)}...`
                            : avaliacao.comentario}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(avaliacao.data).toLocaleDateString("pt-BR")}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(avaliacao.status)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        {avaliacao.status === "pendente" && (
                          <>
                            <Button variant="outline" size="sm" className="text-green-600">
                              Aprovar
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600">
                              Rejeitar
                            </Button>
                          </>
                        )}
                        <Button variant="outline" size="sm" className="text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
