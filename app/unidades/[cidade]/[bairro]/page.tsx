"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import UnidadeDetalhes from "@/components/unidade-detalhes"
import { unidades } from "@/data/unidades"
import { notFound } from "next/navigation"
import { getTheme } from "@/lib/get-theme"
import { useRegion } from "@/context/RegionContext"

interface UnidadePageProps {
  params: Promise<{
    id: string
  }>
}

export default function UnidadePage({ params }: UnidadePageProps) {
  const theme = getTheme();
  const { selectedUnity } = useRegion();

  if (!selectedUnity) {
    notFound()
  }

  // params.then((params) => {
  //   search()
  // });

  // if (!unidade) {
  //   notFound()
  // }

  return (
    <div className={theme.page.hero.container}>
      {/* Background Effects */}
      <div className={theme.page.hero.backgroundEffects.container}>
        <div className={theme.page.hero.backgroundEffects.effect1}></div>
        <div className={theme.page.hero.backgroundEffects.effect2}></div>
      </div>

      {/* Grid Pattern */}
      <div className={theme.page.hero.gridPattern.container}>
        <svg width="60" height="60" viewBox="0 0 60 60" className={theme.page.hero.gridPattern.svg}>
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="white" fillOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Header />

      <div className={theme.page.content.container}>
        <div className={theme.page.content.wrapperXLarge}>
          <div className={theme.page.card.container}>
            <div className={theme.page.card.glow}></div>
            <div className={theme.page.card.card}>
              <UnidadeDetalhes unidade={selectedUnity} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
