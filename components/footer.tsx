import { config } from "@/data/config"
import { content } from "@/data/content"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src={`themes/${config.theme}/logo.svg`} alt={config.title || ""} width={100} height={100} />
            </div>
            <p className="text-gray-400 mb-4">
              Assistência técnica {config.product} {config.brand} com qualidade e garantia.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">{config.companyPhone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">{config.companyEmail}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">{config.companyAddress}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Horário de Funcionamento</h3>
            <div className="space-y-2">
              {config.workingHours.map((hour, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">{hour}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              {content.services.products.map((product, index) => (
                <li key={index}>{product.title}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 {config.companyName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
