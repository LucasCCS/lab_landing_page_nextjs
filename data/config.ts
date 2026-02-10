export const config = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || "Assistência Técnica",
  keywords: process.env.NEXT_PUBLIC_KEYWORDS || "Assistência Técnica, Lavadoras, Secadoras, Refrigeradores",
  author: process.env.NEXT_PUBLIC_AUTHOR || "Assistência Técnica",
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || "Assistência Técnica",
  companyPhone: process.env.NEXT_PUBLIC_COMPANY_PHONE?.split(',')?.map(phone => phone.trim()) || ["(11) 3000-0000"],
  companyWhatsapp: process.env.NEXT_PUBLIC_COMPANY_WHATSAPP?.split(',')?.map(whatsapp => whatsapp.trim()) || ["(11) 99999-9999"],
  companyEmail: process.env.NEXT_PUBLIC_COMPANY_EMAIL || null,
  companyAddress: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "São Paulo - SP",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  theme: process.env.NEXT_PUBLIC_THEME,
  brand: process.env.NEXT_PUBLIC_BRAND,
  product: process.env.NEXT_PUBLIC_PRODUCT,
  googleTagManagerId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
  workingHours: [
    'Atendimento 24 horas',
  ],
  region: {
    zipcode: process.env.NEXT_PUBLIC_REGION_ZIPCODE ?? "",
    name: process.env.NEXT_PUBLIC_REGION_NAME ?? "",
  },
}