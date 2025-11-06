import { Snowflake, Wind, Waves, Wrench, Clock, Shield } from "lucide-react";

export const services = {	
    products: [
        {
            icon: Waves,
            title: "Lavadoras",
            description: "Reparo completo de lavadoras de todas as marcas",
            features: ["Troca de peças", "Limpeza interna", "Calibração", "Teste de funcionamento"],
            price: "Orçamento sem taxa de visita",
          },
          {
            icon: Wind,
            title: "Secadoras",
            description: "Manutenção e reparo de secadoras residenciais",
            features: ["Sistema de aquecimento", "Filtros e dutos", "Sensores", "Motor e correias"],
            price: "Orçamento sem taxa de visita",
          },
          {
            icon: Snowflake,
            title: "Refrigeradores",
            description: "Troca de filtros e manutenção preventiva",
            features: ["Troca de filtro", "Limpeza do sistema", "Verificação de vedação", "Teste de temperatura"],
            price: "Orçamento sem taxa de visita",
          },
    ],
    features: [
        {
          icon: Wrench,
          title: "Técnicos Especializados",
          description: "Profissionais certificados com experiência em todas as marcas",
        },
        {
          icon: Clock,
          title: "Atendimento Rápido",
          description: "Agendamento flexível e atendimento no mesmo dia quando possível",
        },
        {
          icon: Shield,
          title: "Garantia Estendida",
          description: "Todos os serviços com garantia de 90 dias para sua tranquilidade",
        },
    ]
}