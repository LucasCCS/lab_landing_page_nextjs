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
import { Plus, Edit, Trash2, MapPin, Phone, Clock, Star, Search } from "lucide-react"
import { unidades } from "@/data/unidades"

export default function AdminUnidades() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingUnidade, setEditingUnidade] = useState<any>(null)

  const filteredUnidades = unidades.filter(
    (unidade) =>
      unidade.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unidade.bairro.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unidade.regiao.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEdit = (unidade: any) => {
    setEditingUnidade(unidade)
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta unidade?")) {
      // Implementar lógica de exclusão
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Gerenciar Unidades</CardTitle>
              <CardDescription>Adicione, edite ou remova unidades de assistência técnica</CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Nova Unidade
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{editingUnidade ? "Editar Unidade" : "Nova Unidade"}</DialogTitle>
                  <DialogDescription>Preencha as informações da unidade de assistência técnica</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome da Unidade</Label>
                      <Input id="nome" placeholder="AssistTech Vila Mariana" defaultValue={editingUnidade?.nome} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input id="telefone" placeholder="(11) 3456-7890" defaultValue={editingUnidade?.telefone} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endereco">Endereço</Label>
                    <Input
                      id="endereco"
                      placeholder="Rua Domingos de Morais, 1234"
                      defaultValue={editingUnidade?.endereco}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bairro">Bairro</Label>
                      <Input id="bairro" placeholder="Vila Mariana" defaultValue={editingUnidade?.bairro} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="regiao">Região</Label>
                      <Input id="regiao" placeholder="Zona Sul" defaultValue={editingUnidade?.regiao} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cep">CEP</Label>
                      <Input id="cep" placeholder="04010-000" defaultValue={editingUnidade?.cep} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="especialidades">Especialidades (separadas por vírgula)</Label>
                    <Input
                      id="especialidades"
                      placeholder="Lavadora, Secadora, Refrigerador"
                      defaultValue={editingUnidade?.especialidades?.join(", ")}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="horario-semana">Horário Dias Úteis</Label>
                      <Input
                        id="horario-semana"
                        placeholder="Segunda a Sexta: 8h às 18h"
                        defaultValue={editingUnidade?.horario?.diasUteis}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="horario-sabado">Horário Sábado</Label>
                      <Input
                        id="horario-sabado"
                        placeholder="Sábado: 8h às 14h"
                        defaultValue={editingUnidade?.horario?.sabado}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="como-chegar">Como Chegar</Label>
                    <Textarea
                      id="como-chegar"
                      placeholder="Próximo à estação de metrô..."
                      defaultValue={editingUnidade?.comoChegar}
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    {editingUnidade ? "Salvar Alterações" : "Criar Unidade"}
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
                placeholder="Buscar unidades..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Badge variant="outline" className="ml-auto">
              {filteredUnidades.length} unidades
            </Badge>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Unidade</TableHead>
                  <TableHead>Localização</TableHead>
                  <TableHead>Contato</TableHead>
                  <TableHead>Avaliação</TableHead>
                  <TableHead>Especialidades</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUnidades.map((unidade) => (
                  <TableRow key={unidade.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{unidade.nome}</div>
                        <div className="text-sm text-gray-500">{unidade.endereco}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                        <span className="text-sm">
                          {unidade.bairro}, {unidade.regiao}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Phone className="w-4 h-4 mr-1 text-gray-400" />
                          {unidade.telefone}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {unidade.horario.diasUteis.split(":")[1]?.trim() || "8h às 18h"}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        {renderStars(Math.round(unidade.avaliacao))}
                        <span className="text-sm font-medium ml-1">{unidade.avaliacao.toFixed(1)}</span>
                        <span className="text-xs text-gray-500">({unidade.avaliacoes.length})</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {unidade.especialidades.slice(0, 2).map((esp) => (
                          <Badge key={esp} variant="outline" className="text-xs">
                            {esp}
                          </Badge>
                        ))}
                        {unidade.especialidades.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{unidade.especialidades.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm" onClick={() => handleEdit(unidade)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(unidade.id)}
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
