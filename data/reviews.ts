// 📌 Lista de serviços possíveis
export const SERVICOS = [
    "Reparo de Lavadora",
    "Troca de Filtro",
    "Reparo de Secadora",
    "Instalação de Ar Condicionado",
    "Manutenção de Geladeira",
    "Troca de Placa Eletrônica",
    "Limpeza de Máquina de Lavar",
    "Conserto de Microondas",
    "Reparo de Fogão",
    "Troca de Mangueira",
    "Reparo de Motor",
    "Regulagem de Centrifugação",
    "Substituição de Borracha",
    "Manutenção Preventiva",
    "Troca de Termostato",
];

// 📌 Comentários reais simulados
export const COMENTARIOS = [
    "Excelente atendimento, muito rápido e profissional. Recomendo!",
    "O técnico chegou no horário e resolveu o problema sem complicação.",
    "Serviço impecável, muito educado e prestativo.",
    "Fiquei impressionado com a agilidade, meu aparelho voltou a funcionar no mesmo dia.",
    "Ótimo serviço, preço justo e atendimento cordial.",
    "O técnico explicou tudo com paciência e deixou tudo funcionando perfeitamente.",
    "Serviço de alta qualidade, muito satisfeito com o resultado.",
    "Atendimento nota 10! Voltaria a contratar com certeza.",
    "Profissional competente e pontual.",
    "O reparo foi rápido e eficiente. Recomendo demais!",
    "Muito atencioso e cuidadoso no serviço.",
    "Técnico super educado e rápido. Excelente experiência!",
    "Serviço de confiança, recomendo para todos.",
    "Muito satisfeito! Minha máquina ficou perfeita.",
    "Atendimento excelente do início ao fim.",
    "Gostei muito do profissionalismo, recomendo!",
    "O serviço foi mais rápido do que eu esperava.",
    "Muito bom, resolveu meu problema sem enrolação.",
    "Educado, ágil e eficiente. Muito bom!",
    "Ótima experiência, recomendo muito a empresa.",
];

// 📌 Nomes brasileiros
export const NOMES = [
    "Carlos Oliveira", "Ana Silva", "Roberto Santos", "Fernanda Lima", "Paulo Mendes",
    "Juliana Costa", "Rafael Oliveira", "Patrícia Almeida", "Mariana Costa", "João Pereira",
    "Luciana Alves", "Ricardo Souza", "Marcelo Santos", "Cristina Oliveira", "Renata Lima",
    "André Ferreira", "Camila Rodrigues", "Juliano Mendes", "Aline Souza", "Beatriz Castro",
    "Larissa Moraes", "Gustavo Martins", "Danilo Freitas", "Fabiana Azevedo", "Eduardo Ramos",
    "Letícia Barbosa", "Marcos Vinícius", "Felipe Saraiva", "Tatiane Lopes", "Renan Moreira",
    "Jéssica Rocha", "Natália Ferreira", "Caio Cardoso", "Bianca Nunes", "Thiago Ribeiro",
    "Vanessa Duarte", "Gabriel Souza", "Lucas Ribeiro", "Samuel Rocha", "Helena Martins",
    "Sérgio Almeida", "Bruno Carvalho", "Rafaela Santos", "Alice Nogueira", "Pedro Araújo",
    "Sofia Batista", "Miguel Santana", "Isabel Fernandes", "Eduarda Moreira", "Enzo Lima",
    "Rebeca Duarte", "Joana Pinheiro", "Leonardo Franco", "Daniela Teixeira", "Douglas Moraes",
    "Elisa Torres", "Henrique Faria", "Tatiana Monteiro", "Mauro Silva", "Viviane Correia",
    "Priscila Mendes", "Robson Ferreira", "Carolina Ribeiro", "Tânia Gomes", "Igor Tavares",
    "Emanuel Freitas", "Arthur Andrade", "Mirella Santos", "Hugo Bastos", "Daniel Moretti",
    "Clara Monteiro", "Adriana Silva", "Breno Rocha", "Vítor Sampaio", "Bruna Faria",
    "Catarina Matos", "Ivan Ribeiro", "Simone Alves", "Marcela Cardoso", "Diego Martins",
    "Tatiane Prado", "Alexandre Duarte", "Sabrina Torres", "Murilo Albuquerque", "Nathalia Campos",
    "Carla Mendes", "Gilberto Lima", "Patrícia Ramos", "Amanda Moraes", "Vinícius Amaral",
    "Giovana Freitas", "Maristela Lima", "Luciano Almeida", "Yasmin Duarte", "Rodrigo Lira",
    "Claudia Teixeira", "Otávio Rocha", "Fernanda Gomes", "Arthur Pinheiro", "Julia Cardoso",
];

// 📅 Data aleatória dos últimos 12 meses
export function randomDate(): string {
    const now = new Date();
    const past = new Date();
    past.setMonth(now.getMonth() - 12);

    const time =
        past.getTime() + Math.random() * (now.getTime() - past.getTime());
    const d = new Date(time);

    return d.toLocaleDateString("pt-BR");
}

// 🔁 Função auxiliar para pegar item aleatório
export const rand = <T,>(arr: T[]): T =>
    arr[Math.floor(Math.random() * arr.length)];

// 📌 Tipo da avaliação
export interface Avaliacao {
    nome: string;
    data: string;
    rating: number;
    servico: string;
    comentario: string;
}

// 🧾 Gerar UMA avaliação aleatória
export function gerarAvaliacao(): Avaliacao {
    return {
        nome: rand(NOMES),
        data: randomDate(),
        rating: Math.random() > 0.2 ? 5 : 4, // 80% chance 5 estrelas
        servico: rand(SERVICOS),
        comentario: rand(COMENTARIOS),
    };
}

// 📌 Calcular média das avaliações
export function calcularMediaAvaliacoes(avaliacoes: Avaliacao[]): number {
    if (!avaliacoes || avaliacoes.length === 0) return 0;

    const total = avaliacoes.reduce((acc, a) => {
        const rating = Number(a.rating);
        return acc + (isNaN(rating) ? 0 : rating);
    }, 0);

    return Number((total / avaliacoes.length).toFixed(1));
}


// 🔥 Gerar N avaliações com quantidade aleatória
export function gerarAvaliacoesAleatorias(
    min: number = 3,
    max: number = 7
): Avaliacao[] {
    const qtd = Math.floor(Math.random() * (max - min + 1)) + min;
    return Array.from({ length: qtd }, () => gerarAvaliacao());
}
