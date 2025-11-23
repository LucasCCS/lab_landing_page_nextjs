// lib/get-theme.ts
import { themes } from "@/data/themes";
import { config } from "@/data/config";

export function getTheme() {
  const themeName = config.theme;

  if (!themeName || !(themeName in themes)) {
    return themes.samsung;
  }

  return themes[themeName as keyof typeof themes];
}
