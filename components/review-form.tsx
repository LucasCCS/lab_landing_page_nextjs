"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Send } from "lucide-react"

interface ReviewFormData {
  name: string
  email: string
  service: string
  rating: number
  comment: string
}

export default function ReviewForm() {
  const [formData, setFormData] = useState<ReviewFormData>({
    name: "",
    email: "",
    service: "",
    rating: 0,
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field: keyof ReviewFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio da avaliação
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  const renderStars = (rating: number, interactive = false) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-6 h-6 cursor-pointer transition-colors ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300 hover:text-yellow-200"
        }`}
        onClick={interactive ? () => handleInputChange("rating", index + 1) : undefined}
      />
    ))
  }

  if (submitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-green-600 fill-current" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Obrigado pela sua avaliação!</h3>
          <p className="text-gray-600">
            Sua opinião é muito importante para nós e nos ajuda a melhorar nossos serviços.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Deixe sua Avaliação</CardTitle>
        <CardDescription>Conte-nos sobre sua experiência com nossos serviços</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Seu nome"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="service">Serviço Utilizado</Label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o serviço" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lavadora">Reparo de Lavadora</SelectItem>
                <SelectItem value="secadora">Reparo de Secadora</SelectItem>
                <SelectItem value="refrigerador">Manutenção de Refrigerador</SelectItem>
                <SelectItem value="filtro">Troca de Filtro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Avaliação</Label>
            <div className="flex items-center space-x-1 mt-2">{renderStars(formData.rating, true)}</div>
            <p className="text-sm text-gray-600 mt-1">
              {formData.rating === 0 && "Clique nas estrelas para avaliar"}
              {formData.rating === 1 && "Muito insatisfeito"}
              {formData.rating === 2 && "Insatisfeito"}
              {formData.rating === 3 && "Neutro"}
              {formData.rating === 4 && "Satisfeito"}
              {formData.rating === 5 && "Muito satisfeito"}
            </p>
          </div>

          <div>
            <Label htmlFor="comment">Comentário</Label>
            <Textarea
              id="comment"
              value={formData.comment}
              onChange={(e) => handleInputChange("comment", e.target.value)}
              placeholder="Conte-nos sobre sua experiência..."
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting || formData.rating === 0}>
            {isSubmitting ? (
              "Enviando..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Enviar Avaliação
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
