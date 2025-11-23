import { config } from "@/data/config"
import { content } from "@/data/content"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { getTheme } from "@/lib/get-theme"
import Image from "next/image"

export default function Footer() {
  const theme = getTheme();
  return (
    <footer id="contato" className={theme.footer.container}>
      <div className="container mx-auto px-4">
        <div className={theme.footer.grid}>
          <div>
            <div className={theme.footer.logo.container}>
              <Image src={`/themes/${theme.name}/${theme.logoFooter}`} alt={config.title || ""} width={150} height={150} />
            </div>
            <p className={theme.footer.logo.description}>
              Assistência técnica {config.product} {config.brand} com qualidade e garantia.
            </p>
          </div>

          <div>
            <h3 className={theme.footer.section.title}>Contato</h3>
            <div className={theme.footer.section.content}>
              <div className={theme.footer.contact.item}>
                <Phone className={theme.footer.contact.icon} />
                <span className={theme.footer.contact.text}>{config.companyPhone}</span>
              </div>
              <div className={theme.footer.contact.item}>
                <Mail className={theme.footer.contact.icon} />
                <span className={theme.footer.contact.text}>{config.companyEmail}</span>
              </div>
              <div className={theme.footer.contact.item}>
                <MapPin className={theme.footer.contact.icon} />
                <span className={theme.footer.contact.text}>{config.companyAddress}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className={theme.footer.section.title}>Horário de Funcionamento</h3>
            <div className={theme.footer.section.hours}>
              {config.workingHours.map((hour, index) => (
                <div key={index} className={theme.footer.contact.item}>
                  <Clock className={theme.footer.contact.icon} />
                  <span className={theme.footer.contact.text}>{hour}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={theme.footer.section.title}>Serviços</h3>
            <ul className={theme.footer.services.list}>
              {content.services.products.map((product, index) => (
                <li key={index}>{product.title}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={theme.footer.copyright.container}>
          <p className={theme.footer.copyright.text}>© 2024 {config.companyName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
