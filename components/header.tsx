"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { config } from "@/data/config"
import { getTheme } from "@/lib/get-theme"
import Image from "next/image"

export default function Header() {
  const theme = getTheme();
  return (
    <header className={theme.header.container}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={'themes/samsung/logo.svg'} alt={config.title || ""} width={100} height={100} />
            <span className={theme.header.logoText}>{config.title}</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/servicos" className={theme.header.nav.link}>
              Serviços
            </Link>
            <Link href="/#como-funciona" className={theme.header.nav.link}>
              Como Funciona
            </Link>
            <Link href="/unidades" className={theme.header.nav.link}>
              Unidades
            </Link>
            <Link href="/avaliacoes" className={theme.header.nav.link}>
              Avaliações
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className={theme.header.phone.container}>
              <Phone className={theme.header.phone.icon} />
              <span>(11) 3000-0000</span>
            </div>
            <Button asChild className={theme.header.button}>
              <Link href="/agendamento">Agendar Serviço</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
