import samsung from "./samsung";

export const themes = {
  samsung,
} as const;

export type ThemeName = keyof typeof themes;
