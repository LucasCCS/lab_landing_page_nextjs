"use client";

import { searchZipcode } from "@/services/region.service";
import { Unidade } from "@/types/unidade";
import { config } from "@/data/config";
import { createContext, useContext, useEffect, useState } from "react";

interface RegionContextProps {
    unities: Unidade[];
    loading: boolean;
    error: string | null;
    search: (zipcode: string) => Promise<Unidade[]>;
}

const RegionContext = createContext<RegionContextProps>({
    unities: [],
    loading: false,
    error: null,
    search: () => Promise.resolve([]),
});

interface RegionProviderProps {
    children: React.ReactNode;
    zipcode: string;
}

export const RegionProvider = ({ children, zipcode }: RegionProviderProps) => {
    const [unities, setUnities] = useState<Unidade[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const search = async (zipcode: string): Promise<Unidade[]> => {

        if (zipcode.length < 8) {
            return [];
        }

        setLoading(true);
        setError(null);
        try {
            const result = (await searchZipcode(zipcode)) ?? [];

            return result?.map((unidade: any): Unidade => {
                return {
                    id: unidade.cep,
                    nome: `${config.companyName} ${config.brand} ${unidade.bairro ?? unidade.localidade ?? ""}`,
                    bairro: unidade.bairro,
                    cidade: unidade.localidade,
                    estado: unidade.estado,
                    cep: unidade.cep,
                    telefone: config.companyPhone,
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
                }
            }) ?? [];

        } catch (error) {
            setError(error as string);
            return [];
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        search(zipcode).then((unities: Unidade[]) => {
            setUnities(unities);
        }).catch((error: any) => {
            setError(error);
        });
    }, [zipcode]);

    return (
        <RegionContext.Provider value={{ unities, loading, error, search }}>
            {children}
        </RegionContext.Provider>
    )
}

export const useRegion = () => {
    return useContext(RegionContext);
}