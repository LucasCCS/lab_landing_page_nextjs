
const ZIPCODE_API_URL = process.env.NEXT_PUBLIC_ZIPCODE_API_URL ?? "";
const CURRENT_REGION = "CURRENT_REGION";

export async function searchZipcode(zipcode: string): Promise<any[] | null> {
  // Garante só dígitos
  const cleanZip = zipcode.replace(/\D/g, "");

  if (cleanZip.length < 8) {
    return null;
  }

  const regions: any[] = [];

  try {
    // 1ª chamada: seu endpoint principal
    const res1 = await fetch(`${ZIPCODE_API_URL}${cleanZip}/json/`);

    if (!res1.ok) {
      console.error("Erro ao acessar a API de CEP:", res1.statusText);
      return null;
    }

    const dados1: any = await res1.json();

    if (dados1?.erro) {
      console.error("CEP inválido");
      return null;
    }

    regions.push(dados1);

    // 2ª chamada: ViaCEP por UF + localidade
    const res2 = await fetch(
      `${ZIPCODE_API_URL}${dados1.uf}/${dados1.localidade}/${dados1.localidade}/json/`
    );

    if (res2.ok) {
      const dados2: any = await res2.json();

      if (Array.isArray(dados2)) {
        regions.push(...dados2.slice(0, 5));
      }
    }

    // Salva região atual no localStorage (apenas no client)
    if (typeof window !== "undefined" && regions[0]) {
      localStorage.setItem(CURRENT_REGION, JSON.stringify(regions[0]));
    }

    return regions;
  } catch (error) {
    console.error("Erro ao acessar a API:", error);
    return null;
  }
}