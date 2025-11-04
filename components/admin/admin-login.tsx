"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Shield, Eye, EyeOff } from "lucide-react"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação de login - em produção, usar autenticação real
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (email === "admin@assisttech.com" && password === "admin123") {
      router.push("/admin")
    } else {
      alert("Credenciais inválidas")
    }

    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl"></div>
        <Card className="relative bg-white/95 backdrop-blur-xl border-0 shadow-2xl shadow-blue-500/10 rounded-3xl">
          <CardHeader className="text-center pb-2">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Admin CMS</CardTitle>
            <CardDescription className="text-gray-600">Acesse o painel administrativo do AssistTech</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@assisttech.com"
                  className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl pr-12"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
            </form>

            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-800 font-medium mb-2">Credenciais de demonstração:</p>
              <p className="text-xs text-blue-700">E-mail: admin@assisttech.com</p>
              <p className="text-xs text-blue-700">Senha: admin123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
