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
import { getTheme } from "@/lib/get-theme"

export default function ServicosDetalhados() {
  const theme = getTheme();
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const servicos = [
    {
      id: "lavadoras",
      icon: Waves,
      title: "Lavadoras",
      description: "Reparo completo e manutenção de lavadoras de todas as marcas",
      category: "eletrodomesticos",
      price: "Grátis",
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
      price: "Grátis",
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
      price: "Grátis",
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
  ]

  const categories = [
    { id: "todos", label: "Todos os Serviços", icon: Settings },
    { id: "eletrodomesticos", label: "Eletrodomésticos", icon: Waves },
    // { id: "climatizacao", label: "Climatização", icon: Wind },
    // { id: "cozinha", label: "Cozinha", icon: Zap },
  ]

  const filteredServicos =
    selectedCategory === "todos" ? servicos : servicos.filter((servico) => servico.category === selectedCategory)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? theme.servicosDetalhados.serviceCard.star.filled : theme.servicosDetalhados.serviceCard.star.empty}`} />
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
            <div className={theme.servicosDetalhados.statsCard.glow}></div>
            <Card className={theme.servicosDetalhados.statsCard.container}>
              <CardContent className="text-center p-6">
                <div className={theme.servicosDetalhados.statsCard.iconContainer}>
                  <stat.icon className={theme.servicosDetalhados.statsCard.icon} />
                </div>
                <div className={theme.servicosDetalhados.statsCard.value}>{stat.value}</div>
                <p className={theme.servicosDetalhados.statsCard.label}>{stat.label}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Category Filter */}
      <div className="relative">
        <div className={theme.servicosDetalhados.filterCard.glow}></div>
        <Card className={theme.servicosDetalhados.filterCard.container}>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`h-12 px-6 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? theme.servicosDetalhados.filterCard.button.active
                      : theme.servicosDetalhados.filterCard.button.inactive
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
            <div className={theme.servicosDetalhados.serviceCard.glow}></div>
            <Card className={theme.servicosDetalhados.serviceCard.container}>
              <div className={theme.servicosDetalhados.serviceCard.topBar}></div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={theme.servicosDetalhados.serviceCard.iconContainer}>
                    <servico.icon className={theme.servicosDetalhados.serviceCard.icon} />
                  </div>
                  <div className={theme.servicosDetalhados.serviceCard.ratingContainer}>
                    {renderStars(Math.round(servico.rating))}
                    <span className={theme.servicosDetalhados.serviceCard.ratingText}>{servico.rating}</span>
                  </div>
                </div>

                <CardTitle className={theme.servicosDetalhados.serviceCard.title}>{servico.title}</CardTitle>
                <CardDescription className={theme.servicosDetalhados.serviceCard.description}>{servico.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Price and Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className={theme.servicosDetalhados.serviceCard.priceBox.container}>
                      <p className={theme.servicosDetalhados.serviceCard.priceBox.label}>Taxa de Visita</p>
                      <p className={theme.servicosDetalhados.serviceCard.priceBox.value}>{servico.price}</p>
                    </div>
                    <div className={theme.servicosDetalhados.serviceCard.durationBox.container}>
                      <p className={theme.servicosDetalhados.serviceCard.durationBox.label}>Duração</p>
                      <p className={theme.servicosDetalhados.serviceCard.durationBox.value}>{servico.duration}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Serviços Inclusos:</p>
                    <ul className="space-y-1">
                      {servico.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className={theme.servicosDetalhados.serviceCard.featureItem.container}>
                          <CheckCircle className={theme.servicosDetalhados.serviceCard.featureItem.icon} />
                          {feature}
                        </li>
                      ))}
                      {servico.features.length > 3 && (
                        <li className={theme.servicosDetalhados.serviceCard.featureItem.moreText}>
                          +{servico.features.length - 3} serviços adicionais
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Brands */}
                  {/* <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Marcas Atendidas:</p>
                    <div className="flex flex-wrap gap-1">
                      {servico.brands.slice(0, 4).map((brand) => (
                        <Badge
                          key={brand}
                          variant="outline"
                          className={theme.servicosDetalhados.serviceCard.brandBadge.active}
                        >
                          {brand}
                        </Badge>
                      ))}
                      {servico.brands.length > 4 && (
                        <Badge variant="outline" className={theme.servicosDetalhados.serviceCard.brandBadge.more}>
                          +{servico.brands.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div> */}
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {servico.reviews} avaliações
                    </div>
                    <div className="flex items-center">
                      <Shield className={theme.servicosDetalhados.serviceCard.reviewIcon} />
                      {servico.warranty} garantia
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      asChild
                      className={theme.servicosDetalhados.serviceCard.button.primary}
                    >
                      <Link href={`/agendamento?servico=${servico.id}`}>
                        <Calendar className="w-4 h-4 mr-2" />
                        Agendar
                      </Link>
                    </Button>
                    {/* <Button asChild variant="outline" className={theme.servicosDetalhados.serviceCard.button.outline}>
                      <Link href={`/servicos/${servico.id}`}>Detalhes</Link>
                    </Button> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Emergency Service */}
      <div className="relative">
        <div className={theme.servicosDetalhados.emergency.glow}></div>
        <div className={theme.servicosDetalhados.emergency.container}>
          <div className="absolute inset-0 opacity-10">
            <div className={`${theme.servicosDetalhados.emergency.patternDot} top-10 left-10`}></div>
            <div className={`${theme.servicosDetalhados.emergency.patternDot} top-20 right-20 w-1 h-1`}></div>
            <div className={`${theme.servicosDetalhados.emergency.patternDot} bottom-20 left-20 w-1.5 h-1.5`}></div>
            <div className={`${theme.servicosDetalhados.emergency.patternDot} bottom-10 right-10`}></div>
          </div>

          <div className="relative">
            <h3 className={theme.servicosDetalhados.emergency.title}>Atendimento de Emergência</h3>
            <p className={theme.servicosDetalhados.emergency.description}>
              Problemas urgentes? Oferecemos atendimento 24 horas para emergências
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className={theme.servicosDetalhados.emergency.button.primary}
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
                className={theme.servicosDetalhados.emergency.button.outline}
              >
                <Link href="/agendamento?urgente=true">Agendar Emergência</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative">
        <div className={theme.servicosDetalhados.faq.glow}></div>
        <Card className={theme.servicosDetalhados.faq.container}>
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
                <div key={index} className={theme.servicosDetalhados.faq.card}>
                  <h4 className={theme.servicosDetalhados.faq.question}>{faq.question}</h4>
                  <p className={theme.servicosDetalhados.faq.answer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
