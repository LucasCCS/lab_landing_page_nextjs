"use client"

import { useEffect, useRef } from "react"
import type { Unidade } from "@/types/unidade"

interface UnidadeMapProps {
  unidades: Unidade[]
}

export default function UnidadeMap({ unidades }: UnidadeMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Esta é uma implementação simulada de um mapa
    // Em um cenário real, você usaria uma biblioteca como Google Maps, Leaflet, etc.
    if (mapRef.current) {
      const mapContainer = mapRef.current
      mapContainer.innerHTML = ""

      // Criar um mapa simulado
      const mapElement = document.createElement("div")
      mapElement.className = "w-full h-full bg-blue-50 relative"
      mapElement.style.backgroundImage = "url('/placeholder.svg?height=600&width=1200')"
      mapElement.style.backgroundSize = "cover"
      mapElement.style.backgroundPosition = "center"

      // Adicionar marcadores para cada unidade
      unidades.forEach((unidade, index) => {
        const marker = document.createElement("div")
        marker.className =
          "absolute w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:bg-blue-700 transition-colors"

        // Posicionar os marcadores de forma distribuída no mapa simulado
        const left = 10 + (index % 5) * 20 + Math.random() * 5
        const top = 10 + Math.floor(index / 5) * 20 + Math.random() * 5

        marker.style.left = `${left}%`
        marker.style.top = `${top}%`
        marker.textContent = (index + 1).toString()

        // Tooltip com nome da unidade
        const tooltip = document.createElement("div")
        tooltip.className =
          "absolute bottom-full mb-2 bg-white px-2 py-1 rounded shadow-md text-xs whitespace-nowrap opacity-0 transition-opacity pointer-events-none"
        tooltip.textContent = unidade.nome
        marker.appendChild(tooltip)

        // Mostrar tooltip ao passar o mouse
        marker.addEventListener("mouseenter", () => {
          tooltip.classList.remove("opacity-0")
          tooltip.classList.add("opacity-100")
        })

        marker.addEventListener("mouseleave", () => {
          tooltip.classList.add("opacity-0")
          tooltip.classList.remove("opacity-100")
        })

        mapElement.appendChild(marker)
      })

      // Adicionar legenda
      const legend = document.createElement("div")
      legend.className = "absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-md"
      legend.innerHTML = `
        <p class="text-sm font-medium mb-2">Legenda</p>
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-blue-600 rounded-full"></div>
          <span class="text-xs">Unidade de Assistência Técnica</span>
        </div>
      `
      mapElement.appendChild(legend)

      // Adicionar aviso
      const notice = document.createElement("div")
      notice.className = "absolute top-4 left-4 bg-white/80 p-3 rounded-lg shadow-md"
      notice.innerHTML = `
        <p class="text-sm">Este é um mapa ilustrativo. Em uma implementação real, seria integrado com Google Maps ou similar.</p>
      `
      mapElement.appendChild(notice)

      mapContainer.appendChild(mapElement)
    }
  }, [unidades])

  return <div ref={mapRef} className="w-full h-full"></div>
}
