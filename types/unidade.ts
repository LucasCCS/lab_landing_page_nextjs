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
  endereco: string
  bairro: string
  regiao: string
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
  comoChegar?: string
  coordenadas?: {
    lat: number
    lng: number
  }
}
