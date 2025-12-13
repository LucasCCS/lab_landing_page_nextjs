export const config = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || "Assistência Técnica",
  keywords: process.env.NEXT_PUBLIC_KEYWORDS || "Assistência Técnica, Lavadoras, Secadoras, Refrigeradores",
  author: process.env.NEXT_PUBLIC_AUTHOR || "Assistência Técnica",
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || "Assistência Técnica",
  companyPhone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "(11) 3000-0000",
  companyWhatsapp: process.env.NEXT_PUBLIC_COMPANY_WHATSAPP || "(11) 99999-9999",
  companyEmail: process.env.NEXT_PUBLIC_COMPANY_EMAIL || null,
  companyAddress: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "São Paulo - SP",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  theme: process.env.NEXT_PUBLIC_THEME,
  brand: process.env.NEXT_PUBLIC_BRAND,
  product: process.env.NEXT_PUBLIC_PRODUCT,
  workingHours: [
    'Segunda a Sexta: 8h às 18h',
    'Sábado: 8h às 14h',
  ],
  region: {
    zipcode: process.env.NEXT_PUBLIC_REGION_ZIPCODE ?? "",
    name: process.env.NEXT_PUBLIC_REGION_NAME ?? "",
  },
}