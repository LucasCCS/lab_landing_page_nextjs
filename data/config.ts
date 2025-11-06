export const config = {
  title: process.env.SITE_NAME,
  companyName: process.env.COMPANY_NAME || "Assistência Técnica",
  companyPhone: process.env.COMPANY_PHONE || "(11) 3000-0000",
  companyEmail: process.env.COMPANY_EMAIL || "contato@assisttech.com.br",
  companyAddress: process.env.COMPANY_ADDRESS || "São Paulo - SP",
  description: process.env.SITE_DESCRIPTION,
  theme: process.env.THEME,
  brand: process.env.BRAND,
  product: process.env.PRODUCT,
  workingHours: [
    'Segunda a Sexta: 8h às 18h',
    'Sábado: 8h às 14h',
  ],
}