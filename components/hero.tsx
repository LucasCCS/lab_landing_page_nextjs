import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import UnidadeQuickSearch from "@/components/unidade-quick-search"
import { content } from "@/data/content"
import { config } from "@/data/config"
import { getTheme } from "@/lib/get-theme"
import Image from "next/image"

export default function Hero() {
  const theme = getTheme();
  return (
    <section style={{ backgroundImage: `url(${theme.hero.background.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <section className={`relative min-h-screen bg-gradient-to-br bg-opacity-40 overflow-hidden ${theme.hero.background.color}`}>
        {/* Background Effects */}
        <div className="absolute inset-0">
          {theme.hero.background.effects.map((effect, index) => (
            <div key={index} className={effect}></div>
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-40">
          <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="white" fillOpacity="0.03" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative container mx-auto px-4 md:py-20 py-10">
          <div className="grid lg:grid-cols-2 md:gap-16 gap-2 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className={theme.hero.subtitle.background}>
                <Sparkles className={theme.hero.subtitle.icon} />
                <span className={theme.hero.subtitle.text}>{content.hero.subtitle}</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  {content.hero.title}
                  {config.product && <span className={theme.hero.title.product}>{config.product}</span>}
                  {config.brand && <span className={theme.hero.title.brand}>{config.brand}</span>}
                </h1>
                <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                  {content.hero.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className={theme.button.default + ' hover:scale-105'}
                >
                  <Link href="/agendamento" className="flex items-center">
                    Agendar Agora
                    <Sparkles className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className={theme.button.secondary}
                >
                  Ver Serviços
                </Button>
              </div>

              {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {content.hero.features.map((item, index) => (
                  <div
                    key={index}
                    className={theme.hero.features.background}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className={theme.hero.features.text}>{item.text}</span>
                  </div>
                ))}
              </div> */}
            </div>

            <div className="relative">
              <div className=" block md:hidden flex justify-center items-center">
                <Image src={ `/themes/${theme.name}/hero-washing-machine.png`} alt={config.title || ""} width={300} height={300} />
              </div>
              {/* Floating Card */}
              <div className={theme.hero.schedule.floatingBorder + ' -mt-15'}>
                {/* Gradient Border Effect */}
                <div className={theme.hero.schedule.borderEffect}></div>

                <div className={theme.hero.schedule.content.background}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={theme.hero.schedule.content.header.titleIcon}></div>
                    <h3 className={theme.hero.schedule.content.header.title}>Encontre uma Unidade</h3>
                  </div>

                  <p className={theme.hero.schedule.content.description}>Busque a assistência técnica mais próxima de você</p>

                  <div className="mb-8">
                    <UnidadeQuickSearch />
                  </div>

                  <div className="space-y-3">
                    <Button
                      className={theme.button.primary + ' w-full hover:scale-105'}
                      size="lg"
                      asChild
                    >
                      <Link href="/agendamento">
                        Começar Agendamento
                        <Sparkles className={theme.hero.schedule.content.search.icon} />
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      className={theme.button.outline + ' w-full'}
                      size="lg"
                      asChild
                    >
                      <Link href="/unidades">Ver Todas as Unidades</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              {theme.hero.schedule.effects.map((effect, index) => (
                <div key={index} className={effect}></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
