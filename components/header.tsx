"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, MapPin, Phone, Wrench } from "lucide-react"
import { config } from "@/data/config"
import { getTheme } from "@/lib/get-theme"
import Image from "next/image"

export default function Header() {
  const theme = getTheme();
  return (
    <>
      <div className="bg-gray-200 text-gray-300 md:text-left text-center text-xs flex flex-col">
        <div className="container mx-auto md:p-0 px-4">
          <span className="text-gray-400 md:text-left text-center text-xs p-3 flex flex-col">Central de Atendimento: Atendimento 24 horas disponível para agendamento de visita de forma grátis.</span>
        </div>
      </div>
      <header className={theme.header.container + ' md:relative sticky top-0 z-50 transition-all duration-300'}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={`/themes/${theme.name}/${theme.logo.image}`} alt={config.title || ""} width={theme.logo?.width ?? 150} height={theme.logo?.height ?? 150} />
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
                <a href={`tel:${config.companyPhone}`} className="flex items-center space-x-2">
                  <Phone className={theme.header.phone.icon} />
                  <span>{config.companyPhone}</span>
                </a>
              </div>
              <Button asChild className={theme.header.button}>
                <Link href="/agendamento">Agendar visita grátis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
        <div className="flex md:hidden bg-white shadow-md border-t border-gray-200 text-gray-500 text-xs flex flex-col py-4">
          <div className="container mx-auto md:p-0 px-4">
            <ul className="flex items-center space-x-5">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors flex items-center font-medium">
                  <Home className="w-4 h-4 mr-2" />
                  Início
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-blue-600 transition-colors flex items-center font-medium">
                  <Wrench className="w-4 h-4 mr-2" />
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/unidades" className="hover:text-blue-600 transition-colors flex items-center font-medium">
                  <MapPin className="w-4 h-4 mr-2" />
                  Nossas unidades
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
