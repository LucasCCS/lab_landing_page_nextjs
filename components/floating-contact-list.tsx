"use client";

import { Phone } from "lucide-react";
import Whatsapp from "@/asset/icons/whatsapp-icon.svg?component";
import { getTheme } from "@/lib/get-theme";
import { config } from "@/data/config";
import { useRegion } from "@/context/RegionContext";

export default function FloatingContactList() {
    const theme = getTheme();
    const { phone, whatsapp } = useRegion();
    console.log(phone);
    return (
        <>
        <div className="fixed bottom-5 right-5 z-50">
            <a href={`tel:${phone}`} className="flex items-center space-x-2">
                <div className={`${theme.floatingContactList.button} ${theme.floatingContactList.phone}`}>
                    <div className="flex items-center gap-2 text-white">
                        <Phone className="w-6 h-6" />
                    </div>
                </div>
            </a>
            <a target="_blank" href={`https://api.whatsapp.com/send?phone=${whatsapp}&text=Olá, preciso de suporte!`} className="flex items-center space-x-2">
                <div className="relative flex items-center justify-center">
                    <div className={`absolute p-5 w-10 h-10 animate-ping ${theme.floatingContactList.whatsapp} ${theme.floatingContactList.button} mt-4`}></div>
                    <div className={`${theme.floatingContactList.button} ${theme.floatingContactList.whatsapp} mt-4`}>
                        <div className="flex items-center gap-2 fill-white">
                            <Whatsapp className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </>
    )
}