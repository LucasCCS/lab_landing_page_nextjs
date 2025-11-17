"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"

interface Testimonial {
  id: number
  name: string
  location: string
  service: string
  rating: number
  comment: string
  date: string
  avatar?: string
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maria Silva",
      location: "Vila Madalena, SP",
      service: "Reparo de Lavadora",
      rating: 5,
      comment:
        "Excelente atendimento! O técnico chegou no horário marcado, foi muito educado e resolveu o problema da minha lavadora rapidamente. Preço justo e serviço de qualidade.",
      date: "15/12/2024",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "João Santos",
      location: "Moema, SP",
      service: "Manutenção de Refrigerador",
      rating: 5,
      comment:
        "Profissional muito competente! Trocou o filtro do meu refrigerador e ainda fez uma limpeza completa. Explicou tudo detalhadamente e deu dicas de manutenção.",
      date: "10/12/2024",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Ana Costa",
      location: "Pinheiros, SP",
      service: "Reparo de Secadora",
      rating: 5,
      comment:
        "Serviço impecável! A secadora estava com problema no aquecimento e foi resolvido no mesmo dia. Técnico experiente e preço dentro do orçamento.",
      date: "08/12/2024",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Carlos Oliveira",
      location: "Itaim Bibi, SP",
      service: "Reparo de Lavadora",
      rating: 5,
      comment:
        "Recomendo! Agendamento fácil pelo site, técnico pontual e problema resolvido com garantia. Já é a segunda vez que uso o serviço e sempre satisfeito.",
      date: "05/12/2024",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Fernanda Lima",
      location: "Jardins, SP",
      service: "Manutenção de Refrigerador",
      rating: 4,
      comment:
        "Bom atendimento e preço justo. O técnico foi educado e resolveu o problema. Única observação é que demorou um pouco mais que o esperado, mas o resultado foi satisfatório.",
      date: "02/12/2024",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Roberto Mendes",
      location: "Vila Olímpia, SP",
      service: "Reparo de Secadora",
      rating: 5,
      comment:
        "Excelente experiência! Desde o agendamento até a conclusão do serviço, tudo perfeito. Técnico qualificado, peças originais e garantia estendida. Super recomendo!",
      date: "28/11/2024",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3))
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  const getVisibleTestimonials = () => {
    const start = currentIndex * 3
    return testimonials.slice(start, start + 3)
  }

  const averageRating = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / testimonials.length
  const totalReviews = testimonials.length

  return (
    <section className="py-20 bg-white rounded-md">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Mais de 1.000 clientes satisfeitos confiam em nossos serviços de assistência técnica
          </p>

          {/* Rating Summary */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {renderStars(Math.round(averageRating))}
              </div>
              <p className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</p>
              <p className="text-sm text-gray-600">Avaliação média</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{totalReviews}+</p>
              <p className="text-sm text-gray-600">Avaliações</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">98%</p>
              <p className="text-sm text-gray-600">Recomendação</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {getVisibleTestimonials().map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-blue-600 opacity-20" />
                  <div className="flex items-center space-x-1">{renderStars(testimonial.rating)}</div>
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.comment}"</p>

                {/* Service Badge */}
                <div className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
                  {testimonial.service}
                </div>

                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Rating Breakdown */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Distribuição das Avaliações</h3>
          <div className="max-w-md mx-auto space-y-3">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = testimonials.filter((t) => t.rating === stars).length
              const percentage = (count / totalReviews) * 100

              return (
                <div key={stars} className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 w-16">
                    <span className="text-sm font-medium">{stars}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">{count}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Junte-se aos nossos clientes satisfeitos</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/agendamento"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Agendar Serviço
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
