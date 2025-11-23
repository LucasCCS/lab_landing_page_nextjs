export interface Avaliacao {
  nome: string
  data: string
  rating: number
  servico: string
  comentario: string
}

export interface Unidade {
  id: string
  nome: string
  bairro: string
  estado: string
  cidade: string
  cep: string
  telefone: string
  horario: {
  diasUteis: string
    sabado: string
    domingo?: string
  }
  especialidades: string[]
  avaliacao: number
  avaliacoes: Avaliacao[]
}
