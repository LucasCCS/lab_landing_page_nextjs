"use client";

import { searchRegion, searchZipcode } from "@/services/region.service";
import { Unidade } from "@/types/unidade";
import { config } from "@/data/config";
import { createContext, useContext, useEffect, useState } from "react";
import { calcularMediaAvaliacoes, gerarAvaliacoesAleatorias } from "@/data/reviews";

interface SearchParams {
    zipcode?: string;
    cidade?: string;
    bairro?: string;
    estado?: string;
}

interface RegionContextProps {
    unities: Unidade[];
    loading: boolean;
    error: string | null;
    selectedUnity: Unidade | null;
    setSelectedUnity: (unity: Unidade) => void;
    search: (params: SearchParams) => Promise<Unidade[]>;
}

const RegionContext = createContext<RegionContextProps>({
    unities: [],
    loading: false,
    error: null,
    selectedUnity: null, 
    setSelectedUnity: () => {},
    search: () => Promise.resolve([]),
});

interface RegionProviderProps {
    children: React.ReactNode;
    zipcode: string;
}

const slugify = (text?: string): string => {
    if (!text) return "";
    return text
        .normalize("NFD") // separa acentos
        .replace(/[\u0300-\u036f]/g, "") // remove acentos
        .replace(/[^a-zA-Z0-9\s-]/g, "") // remove caracteres especiais
        .trim()
        .replace(/\s+/g, "-") // espaços -> hífen
        .replace(/-+/g, "-") // múltiplos hífens -> um só
        .toLowerCase();
};

// aceita só o que precisa pra url
const makeUrl = (u: { estado?: string; cidade?: string; bairro?: string }): string => {
    const estadoSlug = slugify(u.estado);
    const cidadeSlug = slugify(u.cidade);
    const bairroSlug = slugify(u.bairro);

    return `/unidades/${cidadeSlug}/${bairroSlug}`;
}

export const RegionProvider = ({ children, zipcode }: RegionProviderProps) => {
    const [unities, setUnities] = useState<Unidade[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedUnity, setSelectedUnity] = useState<Unidade | null>(null);

    const search = async (params: SearchParams): Promise<Unidade[]> => {
        const { zipcode, cidade, bairro, estado } = params;

        setLoading(true);
        setError(null);

        try {
            let result: any[] = [];

            if (zipcode) {
                result = (await searchZipcode(zipcode)) ?? [];
            } else if (cidade && bairro && estado) {
                result = (await searchRegion(cidade, bairro, estado)) ?? [];
            }

            // resultado vindo da API (ViaCEP ou similar)
            const unitiesList: Unidade[] = result.map((u: any): Unidade => {
                // ViaCEP costuma ter: cep, uf, localidade, bairro
                const bairro = u.bairro ?? u.localidade ?? "";
                const cidade = u.cidade ?? u.localidade ?? "";
                const estado = u.estado ?? u.uf ?? "";

                const url = makeUrl({ estado, cidade, bairro });

                const avaliacoes = gerarAvaliacoesAleatorias(3, 7);

                const media = calcularMediaAvaliacoes(avaliacoes);

                return {
                    id: u.cep,
                    nome: `${config.companyName} ${config.brand} ${bairro}`,
                    bairro,
                    cidade,
                    estado,
                    cep: u.cep,
                    telefone: config.companyPhone,
                    horario: {
                        diasUteis: config.workingHours[0],
                        sabado: config.workingHours[1],
                    },
                    especialidades: ["Lavadora", "Secadora", "Refrigerador"],
                    avaliacao: media,
                    avaliacoes: avaliacoes,
                    url, // agora usa a URL gerada
                };
            });

            setUnities(unitiesList);
            return unitiesList;
        } catch (err: any) {
            console.error(err);
            setError(err?.message ?? "Erro ao buscar região.");
            setUnities([]);
            return [];
        } finally {
            setLoading(false);
        }
    };

    // primeira carga pelo zipcode vindo de fora
    useEffect(() => {
        if (!zipcode) return;

        search({ zipcode }).catch((err) => {
            console.error(err);
            setError(err?.message ?? "Erro ao buscar região inicial.");
        });
    }, [zipcode]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <RegionContext.Provider value={{ unities, loading, error, search, selectedUnity, setSelectedUnity }}>
            {children}
        </RegionContext.Provider>
    );
};
export const useRegion = () => useContext(RegionContext);
