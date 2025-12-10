import samsung from "./samsung";
import lg from "./lg";
import midea from "./midea";

export const themes = {
  samsung,
  lg,
  midea,
} as const;

export type ThemeName = keyof typeof themes;
