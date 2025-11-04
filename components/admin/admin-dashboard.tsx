"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Users, Calendar, MapPin, Star, TrendingUp, TrendingDown, Plus, BarChart3 } from "lucide-react"
import AdminUnidades from "@/components/admin/admin-unidades"
import AdminAgendamentos from "@/components/admin/admin-agendamentos"
import AdminAvaliacoes from "@/components/admin/admin-avaliacoes"
import AdminServicos from "@/components/admin/admin-servicos"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  // Dados simulados para o dashboard
  const stats = [
    {
      title: "Total de Agendamentos",
      value: "1,234",
      change: "+12%",
      trend: "up",
      icon: Calendar,
      color: "blue",
    },
    {
      title: "Unidades Ativas",
      value: "6",
      change: "0%",
      trend: "stable",
      icon: MapPin,
      color: "green",
    },
    {
      title: "Avaliação Média",
      value: "4.8",
      change: "+0.2",
      trend: "up",
      icon: Star,
      color: "yellow",
    },
    {
      title: "Clientes Ativos",
      value: "892",
      change: "+8%",
      trend: "up",
      icon: Users,
      color: "purple",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "agendamento",
      message: "Novo agendamento para lavadora - Maria Silva",
      time: "2 min atrás",
      status: "pending",
    },
    {
      id: 2,
      type: "avaliacao",
      message: "Nova avaliação 5 estrelas - João Santos",
      time: "15 min atrás",
      status: "completed",
    },
    {
      id: 3,
      type: "unidade",
      message: "Unidade Pinheiros atualizada",
      time: "1 hora atrás",
      status: "updated",
    },
    {
      id: 4,
      type: "agendamento",
      message: "Agendamento cancelado - Ana Costa",
      time: "2 horas atrás",
      status: "cancelled",
    },
  ]

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Gerencie o conteúdo e monitore as atividades do site</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Novo Item
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-gray-100">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="agendamentos">Agendamentos</TabsTrigger>
            <TabsTrigger value="unidades">Unidades</TabsTrigger>
            <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
            <TabsTrigger value="servicos">Serviços</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        <div className="flex items-center mt-2">
                          {stat.trend === "up" ? (
                            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                          ) : stat.trend === "down" ? (
                            <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                          ) : (
                            <BarChart3 className="w-4 h-4 text-gray-500 mr-1" />
                          )}
                          <span
                            className={`text-sm font-medium ${
                              stat.trend === "up"
                                ? "text-green-600"
                                : stat.trend === "down"
                                  ? "text-red-600"
                                  : "text-gray-600"
                            }`}
                          >
                            {stat.change}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          stat.color === "blue"
                            ? "bg-blue-100 text-blue-600"
                            : stat.color === "green"
                              ? "bg-green-100 text-green-600"
                              : stat.color === "yellow"
                                ? "bg-yellow-100 text-yellow-600"
                                : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        <stat.icon className="w-6 h-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Atividades Recentes</CardTitle>
                  <CardDescription>Últimas ações realizadas no sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activity.status === "pending"
                              ? "bg-yellow-500"
                              : activity.status === "completed"
                                ? "bg-green-500"
                                : activity.status === "updated"
                                  ? "bg-blue-500"
                                  : "bg-red-500"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ações Rápidas</CardTitle>
                  <CardDescription>Acesso rápido às principais funcionalidades</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                      <Plus className="w-6 h-6 mb-2" />
                      <span className="text-sm">Nova Unidade</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                      <Calendar className="w-6 h-6 mb-2" />
                      <span className="text-sm">Ver Agendamentos</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                      <Star className="w-6 h-6 mb-2" />
                      <span className="text-sm">Gerenciar Avaliações</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                      <BarChart3 className="w-6 h-6 mb-2" />
                      <span className="text-sm">Relatórios</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="agendamentos">
            <AdminAgendamentos />
          </TabsContent>

          <TabsContent value="unidades">
            <AdminUnidades />
          </TabsContent>

          <TabsContent value="avaliacoes">
            <AdminAvaliacoes />
          </TabsContent>

          <TabsContent value="servicos">
            <AdminServicos />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
