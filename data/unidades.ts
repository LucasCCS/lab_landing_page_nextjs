import type { Unidade } from "@/types/unidade"
import { config } from "./config"

export const unidades: Unidade[] = [
  {
    id: "unidade-1",
    nome: `${config.companyName} ${config.brand} Vila Mariana`,
    bairro: "Vila Mariana",
    regiao: "Zona Sul",
    cep: "04010-000",
    telefone: "(11) 3456-7890",
    horario: {
      diasUteis: "Segunda a Sexta: 8h às 18h",
      sabado: "Sábado: 8h às 14h",
    },
    especialidades: ["Lavadora", "Secadora", "Refrigerador"],
    avaliacao: 4.8,
    avaliacoes: [
      {
        nome: "Carlos Oliveira",
        data: "15/05/2024",
        rating: 5,
        servico: "Reparo de Lavadora",
        comentario:
          "Excelente atendimento! O técnico foi muito profissional e resolveu o problema da minha lavadora rapidamente. Recomendo!",
      },
      {
        nome: "Ana Silva",
        data: "10/05/2024",
        rating: 5,
        servico: "Troca de Filtro",
        comentario:
          "Serviço rápido e eficiente. O técnico chegou no horário marcado e fez a troca do filtro do meu refrigerador com muita competência.",
      },
      {
        nome: "Roberto Santos",
        data: "02/05/2024",
        rating: 4,
        servico: "Reparo de Secadora",
        comentario:
          "Bom atendimento, resolveram o problema da minha secadora. Só demorou um pouco mais do que o previsto, mas o resultado foi satisfatório.",
      },
    ],
  },
]
