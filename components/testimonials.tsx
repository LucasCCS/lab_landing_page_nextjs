"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"
import { getTheme } from "@/lib/get-theme"

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
  const theme = getTheme();
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
      <Star key={index} className={`w-4 h-4 ${index < rating ? theme.testimonials.star.filled : theme.testimonials.star.empty}`} />
    ))
  }

  const getVisibleTestimonials = () => {
    const start = currentIndex * 3
    return testimonials.slice(start, start + 3)
  }

  const averageRating = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / testimonials.length
  const totalReviews = testimonials.length

  return (
    <section className={theme.testimonials.section}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={theme.testimonials.header.container}>
          <h2 className={theme.testimonials.header.title}>O que nossos clientes dizem</h2>
          <p className={theme.testimonials.header.description}>
            Mais de 1.000 clientes satisfeitos confiam em nossos serviços de assistência técnica
          </p>

          {/* Rating Summary */}
          <div className={theme.testimonials.ratingSummary.container}>
            <div className={theme.testimonials.ratingSummary.item}>
              <div className={theme.testimonials.ratingSummary.stars}>
                {renderStars(Math.round(averageRating))}
              </div>
              <p className={theme.testimonials.ratingSummary.value}>{averageRating.toFixed(1)}</p>
              <p className={theme.testimonials.ratingSummary.label}>Avaliação média</p>
            </div>
            <div className={theme.testimonials.ratingSummary.divider}></div>
            <div className={theme.testimonials.ratingSummary.item}>
              <p className={theme.testimonials.ratingSummary.value}>{totalReviews}+</p>
              <p className={theme.testimonials.ratingSummary.label}>Avaliações</p>
            </div>
            <div className={theme.testimonials.ratingSummary.divider}></div>
            <div className={theme.testimonials.ratingSummary.item}>
              <p className={theme.testimonials.ratingSummary.value}>98%</p>
              <p className={theme.testimonials.ratingSummary.label}>Recomendação</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className={theme.testimonials.grid}>
          {getVisibleTestimonials().map((testimonial) => (
            <Card key={testimonial.id} className={theme.testimonials.card.container}>
              <CardContent className={theme.testimonials.card.content}>
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className={theme.testimonials.card.quoteIcon} />
                  <div className="flex items-center space-x-1">{renderStars(testimonial.rating)}</div>
                </div>

                {/* Comment */}
                <p className={theme.testimonials.card.comment}>"{testimonial.comment}"</p>

                {/* Service Badge */}
                <div className={theme.testimonials.card.serviceBadge}>
                  {testimonial.service}
                </div>

                {/* Customer Info */}
                <div className={theme.testimonials.card.customerInfo.container}>
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className={theme.testimonials.card.customerInfo.avatarFallback}>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className={theme.testimonials.card.customerInfo.name}>{testimonial.name}</p>
                    <p className={theme.testimonials.card.customerInfo.location}>{testimonial.location}</p>
                    <p className={theme.testimonials.card.customerInfo.date}>{testimonial.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className={theme.testimonials.navigation.container}>
          {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${theme.testimonials.navigation.dot.base} ${
                currentIndex === index ? theme.testimonials.navigation.dot.active : theme.testimonials.navigation.dot.inactive
              }`}
            />
          ))}
        </div>

        {/* Rating Breakdown */}
        <div className={theme.testimonials.ratingBreakdown.container}>
          <h3 className={theme.testimonials.ratingBreakdown.title}>Distribuição das Avaliações</h3>
          <div className={theme.testimonials.ratingBreakdown.content}>
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = testimonials.filter((t) => t.rating === stars).length
              const percentage = (count / totalReviews) * 100

              return (
                <div key={stars} className={theme.testimonials.ratingBreakdown.row}>
                  <div className={theme.testimonials.ratingBreakdown.starLabel.container}>
                    <span className={theme.testimonials.ratingBreakdown.starLabel.text}>{stars}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                  <div className={theme.testimonials.ratingBreakdown.bar.container}>
                    <div
                      className={theme.testimonials.ratingBreakdown.bar.fill}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className={theme.testimonials.ratingBreakdown.count}>{count}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className={theme.testimonials.cta.container}>
          <p className={theme.testimonials.cta.description}>Junte-se aos nossos clientes satisfeitos</p>
          <div className={theme.testimonials.cta.buttons}>
            <a
              href="/agendamento"
              className={theme.testimonials.cta.primary}
            >
              Agendar Serviço
            </a>
            <a
              href="#servicos"
              className={theme.testimonials.cta.secondary}
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
