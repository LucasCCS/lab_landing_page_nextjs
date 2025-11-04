"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Edit, Trash2, Wrench, DollarSign, Clock, Search } from "lucide-react"

export default function AdminServicos() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingServico, setEditingServico] = useState<any>(null)

  // Dados simulados de serviços
  const servicos = [
    {
      id: "SRV001",
      nome: "Reparo de Lavadora",
      categoria: "Eletrodomésticos",
      descricao: "Reparo completo de lavadoras de todas as marcas",
      precoMinimo: 80,
      duracaoMedia: "1-2 horas",
      garantia: "90 dias",
      ativo: true,
      marcas: ["Brastemp", "Electrolux", "LG", "Samsung"],
      problemas: ["Não liga", "Não centrifuga", "Vazamento", "Ruído excessivo"],
    },
    {
      id: "SRV002",
      nome: "Manutenção de Refrigerador",
      categoria: "Eletrodomésticos",
      descricao: "Troca de filtros e manutenção completa",
      precoMinimo: 100,
      duracaoMedia: "30min - 2 horas",
      garantia: "90 dias",
      ativo: true,
      marcas: ["Brastemp", "Electrolux", "LG", "Samsung", "Consul"],
      problemas: ["Não gela", "Vazamento", "Ruído", "Gelo em excesso"],
    },
    {
      id: "SRV003",
      nome: "Reparo de Secadora",
      categoria: "Eletrodomésticos",
      descricao: "Manutenção e reparo especializado",
      precoMinimo: 90,
      duracaoMedia: "1-3 horas",
      garantia: "90 dias",
      ativo: true,
      marcas: ["Brastemp", "Electrolux", "LG", "Samsung", "Bosch"],
      problemas: ["Não aquece", "Demora para secar", "Ruído anormal"],
    },
    {
      id: "SRV004",
      nome: "Instalação de Ar Condicionado",
      categoria: "Climatização",
      descricao: "Instalação completa de sistemas de climatização",
      precoMinimo: 120,
      duracaoMedia: "2-4 horas",
      garantia: "90 dias",
      ativo: false,
      marcas: ["LG", "Samsung", "Electrolux", "Midea"],
      problemas: ["Instalação nova", "Reinstalação", "Manutenção"],
    },
  ]

  const handleEdit = (servico: any) => {
    setEditingServico(servico)
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este serviço?")) {
      console.log("Excluindo serviço:", id)
    }
  }

  const filteredServicos = servicos.filter(
    (servico) =>
      servico.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      servico.categoria.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Gerenciar Serviços</CardTitle>
              <CardDescription>Configure os serviços oferecidos pela empresa</CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Serviço
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{editingServico ? "Editar Serviço" : "Novo Serviço"}</DialogTitle>
                  <DialogDescription>Configure as informações do serviço oferecido</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome do Serviço</Label>
                      <Input id="nome" placeholder="Reparo de Lavadora" defaultValue={editingServico?.nome} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="categoria">Categoria</Label>
                      <Input id="categoria" placeholder="Eletrodomésticos" defaultValue={editingServico?.categoria} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="descricao">Descrição</Label>
                    <Textarea
                      id="descricao"
                      placeholder="Descrição detalhada do serviço..."
                      defaultValue={editingServico?.descricao}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preco">Preço Mínimo (R$)</Label>
                      <Input id="preco" type="number" placeholder="80" defaultValue={editingServico?.precoMinimo} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duracao">Duração Média</Label>
                      <Input id="duracao" placeholder="1-2 horas" defaultValue={editingServico?.duracaoMedia} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="garantia">Garantia</Label>
                      <Input id="garantia" placeholder="90 dias" defaultValue={editingServico?.garantia} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="marcas">Marcas Atendidas (separadas por vírgula)</Label>
                    <Input
                      id="marcas"
                      placeholder="Brastemp, Electrolux, LG, Samsung"
                      defaultValue={editingServico?.marcas?.join(", ")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="problemas">Problemas Comuns (separados por vírgula)</Label>
                    <Textarea
                      id="problemas"
                      placeholder="Não liga, Não centrifuga, Vazamento..."
                      defaultValue={editingServico?.problemas?.join(", ")}
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    {editingServico ? "Salvar Alterações" : "Criar Serviço"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar serviços..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Badge variant="outline" className="ml-auto">
              {filteredServicos.length} serviços
            </Badge>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Serviço</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Preço / Duração</TableHead>
                  <TableHead>Marcas</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredServicos.map((servico) => (
                  <TableRow key={servico.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium flex items-center">
                          <Wrench className="w-4 h-4 mr-2 text-blue-500" />
                          {servico.nome}
                        </div>
                        <div className="text-sm text-gray-500">{servico.descricao}</div>
                        <div className="text-xs text-gray-400">{servico.id}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{servico.categoria}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <DollarSign className="w-4 h-4 mr-1 text-green-500" />A partir de R$ {servico.precoMinimo}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {servico.duracaoMedia}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {servico.marcas.slice(0, 3).map((marca) => (
                          <Badge key={marca} variant="outline" className="text-xs">
                            {marca}
                          </Badge>
                        ))}
                        {servico.marcas.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{servico.marcas.length - 3}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={servico.ativo ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                        {servico.ativo ? "Ativo" : "Inativo"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm" onClick={() => handleEdit(servico)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(servico.id)}
                          className="text-red-600 hover:text-red-700"
                        >
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
