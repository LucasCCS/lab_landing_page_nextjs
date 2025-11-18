// lib/get-theme.ts
import { themes } from "@/data/themes";
import { config } from "@/data/config";

export function getTheme() {
  const themeName = config.theme;

  console.log("[getTheme] themeName =", themeName);
  console.log("[getTheme] themes keys =", Object.keys(themes));

  if (!themeName || !(themeName in themes)) {
    console.warn(
      `[getTheme] Tema "${themeName}" não encontrado. Usando fallback "samsung".`
    );
    return themes.samsung; // ou qualquer tema default que você quiser
  }

  return themes[themeName as keyof typeof themes];
}
