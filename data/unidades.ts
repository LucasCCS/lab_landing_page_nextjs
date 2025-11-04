import type { Unidade } from "@/types/unidade"

export const unidades: Unidade[] = [
  {
    id: "unidade-1",
    nome: "AssistTech Vila Mariana",
    endereco: "Rua Domingos de Morais, 1234",
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
    comoChegar: "Próximo à estação de metrô Vila Mariana, a 200m da Av. Domingos de Morais.",
  },
  {
    id: "unidade-2",
    nome: "AssistTech Moema",
    endereco: "Av. Ibirapuera, 2345",
    bairro: "Moema",
    regiao: "Zona Sul",
    cep: "04029-200",
    telefone: "(11) 3456-7891",
    horario: {
      diasUteis: "Segunda a Sexta: 8h às 18h",
      sabado: "Sábado: 9h às 15h",
    },
    especialidades: ["Lavadora", "Refrigerador"],
    avaliacao: 4.7,
    avaliacoes: [
      {
        nome: "Fernanda Lima",
        data: "18/05/2024",
        rating: 5,
        servico: "Reparo de Refrigerador",
        comentario:
          "Ótimo serviço! Meu refrigerador estava com problema no sistema de refrigeração e foi consertado no mesmo dia. Técnico muito atencioso.",
      },
      {
        nome: "Paulo Mendes",
        data: "12/05/2024",
        rating: 4,
        servico: "Reparo de Lavadora",
        comentario: "Serviço bem feito, resolveram o problema da minha lavadora. Preço justo e atendimento cordial.",
      },
    ],
  },
  {
    id: "unidade-3",
    nome: "AssistTech Pinheiros",
    endereco: "Rua dos Pinheiros, 987",
    bairro: "Pinheiros",
    regiao: "Zona Oeste",
    cep: "05422-030",
    telefone: "(11) 3456-7892",
    horario: {
      diasUteis: "Segunda a Sexta: 8h às 19h",
      sabado: "Sábado: 9h às 16h",
      domingo: "Plantão de emergência",
    },
    especialidades: ["Lavadora", "Secadora", "Refrigerador", "Ar Condicionado"],
    avaliacao: 4.9,
    avaliacoes: [
      {
        nome: "Mariana Costa",
        data: "20/05/2024",
        rating: 5,
        servico: "Instalação de Ar Condicionado",
        comentario:
          "Serviço impecável! Instalação rápida e limpa, técnico muito profissional e educado. Super recomendo!",
      },
      {
        nome: "João Pereira",
        data: "15/05/2024",
        rating: 5,
        servico: "Reparo de Secadora",
        comentario:
          "Excelente atendimento! Minha secadora estava com problema no aquecimento e foi resolvido na hora. Técnico muito competente.",
      },
      {
        nome: "Luciana Alves",
        data: "10/05/2024",
        rating: 5,
        servico: "Manutenção de Refrigerador",
        comentario:
          "Serviço de primeira qualidade! Técnico chegou no horário, fez uma limpeza completa no meu refrigerador e ainda deu dicas de manutenção.",
      },
      {
        nome: "Ricardo Souza",
        data: "05/05/2024",
        rating: 4,
        servico: "Reparo de Lavadora",
        comentario: "Bom atendimento, resolveram o problema da minha lavadora rapidamente. Preço justo.",
      },
    ],
    comoChegar: "A 500m da estação Faria Lima do metrô, próximo ao Largo da Batata.",
  },
  {
    id: "unidade-4",
    nome: "AssistTech Santana",
    endereco: "Rua Voluntários da Pátria, 1543",
    bairro: "Santana",
    regiao: "Zona Norte",
    cep: "02011-100",
    telefone: "(11) 3456-7893",
    horario: {
      diasUteis: "Segunda a Sexta: 8h às 18h",
      sabado: "Sábado: 8h às 13h",
    },
    especialidades: ["Lavadora", "Secadora", "Refrigerador"],
    avaliacao: 4.6,
    avaliacoes: [
      {
        nome: "Marcelo Santos",
        data: "17/05/2024",
        rating: 5,
        servico: "Reparo de Lavadora",
        comentario: "Muito bom! Técnico chegou no horário marcado e resolveu o problema da minha lavadora rapidamente.",
      },
      {
        nome: "Cristina Oliveira",
        data: "10/05/2024",
        rating: 4,
        servico: "Troca de Filtro",
        comentario: "Serviço bem feito, técnico educado e prestativo. Preço dentro do esperado.",
      },
    ],
  },
  {
    id: "unidade-5",
    nome: "AssistTech Tatuapé",
    endereco: "Rua Tuiuti, 2567",
    bairro: "Tatuapé",
    regiao: "Zona Leste",
    cep: "03307-000",
    telefone: "(11) 3456-7894",
    horario: {
      diasUteis: "Segunda a Sexta: 8h às 18h",
      sabado: "Sábado: 8h às 14h",
    },
    especialidades: ["Lavadora", "Secadora", "Refrigerador", "Fogão"],
    avaliacao: 4.7,
    avaliacoes: [
      {
        nome: "Renata Lima",
        data: "19/05/2024",
        rating: 5,
        servico: "Reparo de Fogão",
        comentario:
          "Excelente serviço! Técnico muito competente, resolveu o problema do meu fogão rapidamente. Preço justo.",
      },
      {
        nome: "André Ferreira",
        data: "15/05/2024",
        rating: 4,
        servico: "Reparo de Lavadora",
        comentario: "Bom atendimento, resolveram o problema da minha lavadora. Técnico educado e prestativo.",
      },
      {
        nome: "Camila Rodrigues",
        data: "10/05/2024",
        rating: 5,
        servico: "Manutenção de Refrigerador",
        comentario:
          "Serviço de qualidade! Técnico chegou no horário, fez a manutenção do meu refrigerador e ainda deu dicas de uso.",
      },
    ],
  },
  {
    id: "unidade-6",
    nome: "AssistTech Santo Amaro",
    endereco: "Av. Santo Amaro, 3456",
    bairro: "Santo Amaro",
    regiao: "Zona Sul",
    cep: "04506-001",
    telefone: "(11) 3456-7895",
    horario: {
      diasUteis: "Segunda a Sexta: 8h às 19h",
      sabado: "Sábado: 9h às 15h",
    },
    especialidades: ["Lavadora", "Secadora", "Refrigerador", "Microondas"],
    avaliacao: 4.8,
    avaliacoes: [
      {
        nome: "Juliana Costa",
        data: "20/05/2024",
        rating: 5,
        servico: "Reparo de Microondas",
        comentario:
          "Excelente atendimento! Técnico muito profissional, resolveu o problema do meu microondas rapidamente.",
      },
      {
        nome: "Rafael Oliveira",
        data: "15/05/2024",
        rating: 5,
        servico: "Reparo de Lavadora",
        comentario:
          "Serviço de primeira! Minha lavadora estava com problema no motor e foi resolvido no mesmo dia. Recomendo!",
      },
      {
        nome: "Patrícia Almeida",
        data: "10/05/2024",
        rating: 4,
        servico: "Troca de Filtro",
        comentario:
          "Bom serviço, técnico educado e prestativo. Fez a troca do filtro do meu refrigerador com eficiência.",
      },
    ],
    comoChegar: "Próximo ao Shopping Ibirapuera, a 300m da Av. Santo Amaro.",
  },
]
