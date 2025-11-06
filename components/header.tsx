"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { config } from "@/data/config"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={'themes/samsung/logo.svg'} alt={config.title || ""} width={100} height={100} />
            <span className="font-bold text-xl text-gray-900">{config.title}</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/servicos" className="text-gray-600 hover:text-blue-600 transition-colors">
              Serviços
            </Link>
            <Link href="#como-funciona" className="text-gray-600 hover:text-blue-600 transition-colors">
              Como Funciona
            </Link>
            <Link href="/unidades" className="text-gray-600 hover:text-blue-600 transition-colors">
              Unidades
            </Link>
            <Link href="/avaliacoes" className="text-gray-600 hover:text-blue-600 transition-colors">
              Avaliações
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>(11) 3000-0000</span>
            </div>
            <Button asChild>
              <Link href="/agendamento">Agendar Serviço</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
