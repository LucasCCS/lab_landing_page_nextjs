"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, MapPin, Wrench, Search, Filter } from "lucide-react"

export default function AdminAgendamentos() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("todos")

  // Dados simulados de agendamentos
  const agendamentos = [
    {
      id: "AGD001",
      cliente: "Maria Silva",
      telefone: "(11) 99999-1111",
      servico: "Reparo de Lavadora",
      marca: "Brastemp",
      data: "2024-01-15",
      periodo: "Manhã (8h às 12h)",
      endereco: "Rua das Flores, 123 - Vila Mariana",
      status: "agendado",
      tecnico: "João Santos",
      observacoes: "Lavadora não centrifuga",
    },
    {
      id: "AGD002",
      cliente: "Carlos Oliveira",
      telefone: "(11) 99999-2222",
      servico: "Manutenção de Refrigerador",
      marca: "Electrolux",
      data: "2024-01-15",
      periodo: "Tarde (13h às 17h)",
      endereco: "Av. Paulista, 456 - Bela Vista",
      status: "em_andamento",
      tecnico: "Pedro Lima",
      observacoes: "Troca de filtro",
    },
    {
      id: "AGD003",
      cliente: "Ana Costa",
      telefone: "(11) 99999-3333",
      servico: "Reparo de Secadora",
      marca: "LG",
      data: "2024-01-14",
      periodo: "Manhã (8h às 12h)",
      endereco: "Rua Augusta, 789 - Consolação",
      status: "concluido",
      tecnico: "Roberto Silva",
      observacoes: "Problema no aquecimento",
    },
    {
      id: "AGD004",
      cliente: "Roberto Mendes",
      telefone: "(11) 99999-4444",
      servico: "Reparo de Lavadora",
      marca: "Samsung",
      data: "2024-01-16",
      periodo: "Noite (18h às 22h)",
      endereco: "Rua da Consolação, 321 - Centro",
      status: "cancelado",
      tecnico: "-",
      observacoes: "Cliente cancelou",
    },
  ]

  const statusOptions = [
    { value: "todos", label: "Todos os Status" },
    { value: "agendado", label: "Agendado" },
    { value: "em_andamento", label: "Em Andamento" },
    { value: "concluido", label: "Concluído" },
    { value: "cancelado", label: "Cancelado" },
  ]

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      agendado: { label: "Agendado", className: "bg-blue-100 text-blue-800" },
      em_andamento: { label: "Em Andamento", className: "bg-yellow-100 text-yellow-800" },
      concluido: { label: "Concluído", className: "bg-green-100 text-green-800" },
      cancelado: { label: "Cancelado", className: "bg-red-100 text-red-800" },
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    return <Badge className={config.className}>{config.label}</Badge>
  }

  const filteredAgendamentos = agendamentos.filter((agendamento) => {
    const matchesSearch =
      agendamento.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agendamento.servico.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agendamento.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "todos" || agendamento.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Agendamentos</CardTitle>
          <CardDescription>Visualize e gerencie todos os agendamentos de serviços</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar agendamentos..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Badge variant="outline" className="ml-auto">
              {filteredAgendamentos.length} agendamentos
            </Badge>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID / Cliente</TableHead>
                  <TableHead>Serviço</TableHead>
                  <TableHead>Data / Período</TableHead>
                  <TableHead>Endereço</TableHead>
                  <TableHead>Técnico</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAgendamentos.map((agendamento) => (
                  <TableRow key={agendamento.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{agendamento.id}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {agendamento.cliente}
                        </div>
                        <div className="text-sm text-gray-500">{agendamento.telefone}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium flex items-center">
                          <Wrench className="w-4 h-4 mr-1 text-blue-500" />
                          {agendamento.servico}
                        </div>
                        <div className="text-sm text-gray-500">{agendamento.marca}</div>
                        {agendamento.observacoes && (
                          <div className="text-xs text-gray-400 mt-1">{agendamento.observacoes}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                          {new Date(agendamento.data).toLocaleDateString("pt-BR")}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {agendamento.periodo}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-1 text-gray-400 mt-0.5" />
                        <span className="text-sm">{agendamento.endereco}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {agendamento.tecnico !== "-" ? (
                          <Badge variant="outline">{agendamento.tecnico}</Badge>
                        ) : (
                          <span className="text-gray-400">Não atribuído</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(agendamento.status)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          Editar
                        </Button>
                        <Button variant="outline" size="sm">
                          Detalhes
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
