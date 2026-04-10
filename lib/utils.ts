import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPhone = (phone: string) => {
  return '+55' + phone.replace(/[^a-zA-Z0-9]/g, "");
}

export const formatWhatsapp = (whatsapp: string) => {
  return 'https://api.whatsapp.com/send?phone=' + formatPhone(whatsapp) + '&text=Olá, preciso de suporte!';
}