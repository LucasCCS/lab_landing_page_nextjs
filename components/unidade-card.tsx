import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Phone, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"
import type { Unidade } from "@/types/unidade"
import { getTheme } from "@/lib/get-theme"
import { useRegion } from "@/context/RegionContext"

interface UnidadeCardProps {
  unidade: Unidade
}

export default function UnidadeCard({ unidade }: UnidadeCardProps) {
  const theme = getTheme();
  const { setSelectedUnity } = useRegion();
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? theme.unidadeCard.star.filled : theme.unidadeCard.star.empty}`} />
    ))
  }
  return (
    <div className={theme.unidadeCard.container}>
      <div className={theme.unidadeCard.glow}></div>
      <Card className={theme.unidadeCard.card}>
        <div className={theme.unidadeCard.topBar}></div>
        <CardHeader className={theme.unidadeCard.header.container}>
          <div className={theme.unidadeCard.header.titleRow}>
            <CardTitle className={theme.unidadeCard.header.title}>{unidade.nome}</CardTitle>
            <div className={theme.unidadeCard.header.rating.container}>
              {renderStars(unidade.avaliacao)}
              <span className={theme.unidadeCard.header.rating.text}>{unidade.avaliacao.toFixed(1)}</span>
            </div>
          </div>
          <div className={theme.unidadeCard.header.location.container}>
            <MapPin className={theme.unidadeCard.header.location.icon} />
            <span>
              {unidade.bairro}, {unidade.cidade}
            </span>
          </div>
        </CardHeader>

        <CardContent className={theme.unidadeCard.content}>
          <div className="space-y-4">
            {/* <div className={theme.unidadeCard.addressBox.container}>
              <p className={theme.unidadeCard.addressBox.label}>Endereço:</p>
              <p className={theme.unidadeCard.addressBox.value}>{unidade.endereco}</p>
            </div> */}

            <div className={theme.unidadeCard.scheduleBox.container}>
              <div className={theme.unidadeCard.scheduleBox.wrapper}>
                <Clock className={theme.unidadeCard.scheduleBox.icon} />
                <div className="text-sm">
                  <p className={theme.unidadeCard.scheduleBox.time}>{unidade.horario.diasUteis}</p>
                  <p className={theme.unidadeCard.scheduleBox.saturday}>{unidade.horario.sabado}</p>
                  {unidade.horario.domingo && <p className={theme.unidadeCard.scheduleBox.domingo}>{unidade.horario.domingo}</p>}
                </div>
              </div>
            </div>

            <div>
              <p className={theme.unidadeCard.specialties.label}>Especialidades:</p>
              <div className={theme.unidadeCard.specialties.container}>
                {unidade.especialidades.map((especialidade) => (
                  <Badge key={especialidade} variant="outline" className={theme.unidadeCard.specialties.badge}>
                    {especialidade}
                  </Badge>
                ))}
              </div>
            </div>

            <div className={theme.unidadeCard.phoneBox.container}>
              <div className={theme.unidadeCard.phoneBox.wrapper}>
                <Phone className={theme.unidadeCard.phoneBox.icon} />
                <a href={`tel:${unidade.telefone}`} className="flex items-center space-x-2">
                  <span className={theme.unidadeCard.phoneBox.text}>{unidade.telefone}</span>
                </a>
              </div>
            </div>
          </div>

          <div className={theme.unidadeCard.footer.container}>
            <div className={theme.unidadeCard.footer.reviews}>
              <span>{unidade.avaliacoes.length} avaliações</span>
            </div>
            <Button asChild size="sm" variant="outline" className={theme.unidadeCard.footer.button}>
              <Link href={unidade.url ?? ""} onClick={() => setSelectedUnity(unidade)}>
                Ver Detalhes
                <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
