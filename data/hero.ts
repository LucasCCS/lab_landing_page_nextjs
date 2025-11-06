import { CheckCircle, Clock, Shield } from "lucide-react";
import { config } from "./config";

export const hero = {
  subtitle: "Assistência Técnica Samsung",
  title: `Assistência Técnica`,
  description: `Serviços de reparo e manutenção para lavadoras, secadoras e refrigeradores ${config.brand}. Técnicos qualificados, peças originais e garantia estendida.`,
  features: [
    { icon: CheckCircle, text: "Técnicos Certificados", color: "text-green-300" },
    { icon: Clock, text: "Atendimento 24h", color: "text-blue-300" },
    { icon: Shield, text: "Garantia Estendida", color: "text-blue-200" },
  ],
  services: [
    { service: "Lavadoras"},
    { service: "Secadoras"},
    { service: "Refrigeradores"},
  ]
}