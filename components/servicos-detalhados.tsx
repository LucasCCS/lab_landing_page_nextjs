"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Waves,
  Wind,
  Snowflake,
  Wrench,
  Clock,
  Shield,
  CheckCircle,
  Star,
  Phone,
  Calendar,
  Zap,
  Settings,
  Award,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function ServicosDetalhados() {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const servicos = [
    {
      id: "lavadoras",
      icon: Waves,
      title: "Lavadoras",
      description: "Reparo completo e manutenção de lavadoras de todas as marcas",
      category: "eletrodomesticos",
      price: "A partir de R$ 80",
      duration: "1-2 horas",
      warranty: "90 dias",
      rating: 4.9,
      reviews: 245,
      features: [
        "Diagnóstico gratuito",
        "Troca de peças originais",
        "Limpeza interna completa",
        "Calibração e teste",
        "Garantia estendida",
      ],
      problems: [
        "Não liga ou não funciona",
        "Não centrifuga",
        "Vazamento de água",
        "Ruído excessivo",
        "Não drena a água",
        "Problemas no painel",
      ],
      brands: ["Brastemp", "Electrolux", "LG", "Samsung", "Consul", "Whirlpool"],
    },
    {
      id: "secadoras",
      icon: Wind,
      title: "Secadoras",
      description: "Manutenção e reparo especializado em secadoras residenciais",
      category: "eletrodomesticos",
      price: "A partir de R$ 90",
      duration: "1-3 horas",
      warranty: "90 dias",
      rating: 4.8,
      reviews: 189,
      features: [
        "Limpeza do sistema de ventilação",
        "Troca de filtros",
        "Reparo do sistema de aquecimento",
        "Verificação de sensores",
        "Manutenção preventiva",
      ],
      problems: [
        "Não aquece",
        "Demora para secar",
        "Ruído anormal",
        "Não liga",
        "Superaquecimento",
        "Problemas no tambor",
      ],
      brands: ["Brastemp", "Electrolux", "LG", "Samsung", "Bosch", "Whirlpool"],
    },
    {
      id: "refrigeradores",
      icon: Snowflake,
      title: "Refrigeradores",
      description: "Troca de filtros e manutenção completa de refrigeradores",
      category: "eletrodomesticos",
      price: "A partir de R$ 100",
      duration: "30min - 2 horas",
      warranty: "90 dias",
      rating: 4.9,
      reviews: 312,
      features: [
        "Troca de filtro de água",
        "Limpeza do sistema",
        "Verificação de vedação",
        "Teste de temperatura",
        "Manutenção do compressor",
      ],
      problems: [
        "Não gela adequadamente",
        "Vazamento de água",
        "Ruído excessivo",
        "Gelo em excesso",
        "Problemas no display",
        "Porta não veda",
      ],
      brands: ["Brastemp", "Electrolux", "LG", "Samsung", "Consul", "Bosch"],
    },
    {
      id: "ar-condicionado",
      icon: Wind,
      title: "Ar Condicionado",
      description: "Instalação, manutenção e reparo de sistemas de climatização",
      category: "climatizacao",
      price: "A partir de R$ 120",
      duration: "2-4 horas",
      warranty: "90 dias",
      rating: 4.7,
      reviews: 156,
      features: [
        "Instalação completa",
        "Limpeza de filtros",
        "Carga de gás refrigerante",
        "Manutenção preventiva",
        "Reparo de vazamentos",
      ],
      problems: [
        "Não gela",
        "Vazamento de água",
        "Ruído excessivo",
        "Não liga",
        "Gelo no evaporador",
        "Consumo alto de energia",
      ],
      brands: ["LG", "Samsung", "Electrolux", "Midea", "Springer", "Carrier"],
    },
    {
      id: "fogoes",
      icon: Zap,
      title: "Fogões",
      description: "Reparo e manutenção de fogões convencionais e cooktops",
      category: "cozinha",
      price: "A partir de R$ 70",
      duration: "1-2 horas",
      warranty: "90 dias",
      rating: 4.8,
      reviews: 98,
      features: [
        "Troca de queimadores",
        "Ajuste de chamas",
        "Limpeza interna",
        "Verificação de segurança",
        "Calibração do forno",
      ],
      problems: [
        "Queimador não acende",
        "Chama irregular",
        "Vazamento de gás",
        "Forno não aquece",
        "Problemas no acendedor",
        "Válvulas com defeito",
      ],
      brands: ["Brastemp", "Electrolux", "Consul", "Atlas", "Continental", "Dako"],
    },
    {
      id: "microondas",
      icon: Zap,
      title: "Microondas",
      description: "Reparo e manutenção de fornos microondas",
      category: "cozinha",
      price: "A partir de R$ 85",
      duration: "1-2 horas",
      warranty: "90 dias",
      rating: 4.6,
      reviews: 67,
      features: [
        "Troca de magnetron",
        "Reparo do painel",
        "Limpeza interna",
        "Verificação de segurança",
        "Calibração de potência",
      ],
      problems: [
        "Não aquece",
        "Não liga",
        "Prato não gira",
        "Ruído excessivo",
        "Display com defeito",
        "Porta não trava",
      ],
      brands: ["Brastemp", "Electrolux", "LG", "Samsung", "Panasonic", "Consul"],
    },
  ]

  const categories = [
    { id: "todos", label: "Todos os Serviços", icon: Settings },
    { id: "eletrodomesticos", label: "Eletrodomésticos", icon: Waves },
    { id: "climatizacao", label: "Climatização", icon: Wind },
    { id: "cozinha", label: "Cozinha", icon: Zap },
  ]

  const filteredServicos =
    selectedCategory === "todos" ? servicos : servicos.filter((servico) => servico.category === selectedCategory)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="space-y-12">
      {/* Header Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { icon: Wrench, value: "6+", label: "Tipos de Serviços", color: "blue" },
          { icon: Award, value: "1000+", label: "Clientes Atendidos", color: "green" },
          { icon: Clock, value: "24h", label: "Atendimento", color: "purple" },
          { icon: Shield, value: "90 dias", label: "Garantia", color: "orange" },
        ].map((stat, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl group-hover:opacity-20 transition-all duration-500"></div>
            <Card className="relative bg-blue-50 border-0 shadow-xl rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="text-center p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <p className="text-gray-700 text-sm font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Category Filter */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-xl"></div>
        <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`h-12 px-6 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                      : "border-gray-200 hover:bg-blue-50 hover:border-blue-300"
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServicos.map((servico) => (
          <div key={servico.id} className="group relative">
            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 h-full flex flex-col">
              <div className="h-1 bg-blue-600"></div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <servico.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center space-x-1 bg-yellow-50 px-3 py-1 rounded-full">
                    {renderStars(Math.round(servico.rating))}
                    <span className="text-sm font-bold ml-1 text-yellow-600">{servico.rating}</span>
                  </div>
                </div>

                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">{servico.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base">{servico.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Price and Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-xl p-3">
                      <p className="text-xs text-blue-600 font-medium mb-1">Preço</p>
                      <p className="text-sm font-bold text-blue-800">{servico.price}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3">
                      <p className="text-xs text-green-600 font-medium mb-1">Duração</p>
                      <p className="text-sm font-bold text-green-800">{servico.duration}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Serviços Inclusos:</p>
                    <ul className="space-y-1">
                      {servico.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {servico.features.length > 3 && (
                        <li className="text-xs text-blue-600 font-medium">
                          +{servico.features.length - 3} serviços adicionais
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Brands */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Marcas Atendidas:</p>
                    <div className="flex flex-wrap gap-1">
                      {servico.brands.slice(0, 4).map((brand) => (
                        <Badge
                          key={brand}
                          variant="outline"
                          className="text-xs border-blue-200 bg-blue-50 text-blue-700"
                        >
                          {brand}
                        </Badge>
                      ))}
                      {servico.brands.length > 4 && (
                        <Badge variant="outline" className="text-xs bg-gray-100 text-gray-700">
                          +{servico.brands.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {servico.reviews} avaliações
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-1 text-green-500" />
                      {servico.warranty} garantia
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      asChild
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300"
                    >
                      <Link href={`/agendamento?servico=${servico.id}`}>
                        <Calendar className="w-4 h-4 mr-2" />
                        Agendar
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-blue-200 hover:bg-blue-50">
                      <Link href={`/servicos/${servico.id}`}>Detalhes</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Emergency Service */}
      <div className="relative">
        <div className="absolute inset-0 bg-red-500/20 rounded-3xl blur-2xl"></div>
        <div className="relative bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-2 h-2 bg-white rounded-full"></div>
          </div>

          <div className="relative">
            <h3 className="text-3xl font-bold text-white mb-4">Atendimento de Emergência</h3>
            <p className="text-white/90 mb-6 text-lg max-w-2xl mx-auto">
              Problemas urgentes? Oferecemos atendimento 24 horas para emergências
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50 shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Link href="tel:(11)3000-0000">
                  <Phone className="w-5 h-5 mr-2" />
                  Ligar Agora: (11) 3000-0000
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <Link href="/agendamento?urgente=true">Agendar Emergência</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-xl"></div>
        <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Perguntas Frequentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "Qual é o prazo para atendimento?",
                  answer: "Atendemos no mesmo dia ou em até 24 horas, dependendo da disponibilidade e urgência.",
                },
                {
                  question: "Vocês trabalham com peças originais?",
                  answer: "Sim, utilizamos apenas peças originais ou de primeira linha com garantia do fabricante.",
                },
                {
                  question: "Como funciona a garantia?",
                  answer: "Oferecemos 90 dias de garantia para todos os serviços realizados e peças trocadas.",
                },
                {
                  question: "Atendem todas as marcas?",
                  answer: "Sim, nossos técnicos são capacitados para atender todas as principais marcas do mercado.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
