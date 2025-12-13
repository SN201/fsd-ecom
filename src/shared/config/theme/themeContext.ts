import { createContext } from "react";

export const Theme = {
  PINK: "pink-theme",
  BLUE: "blue-theme",
} as const;
export type ThemeType = (typeof Theme)[keyof typeof Theme]; // but to create a union of specific string literal values
//By creating this union type, you force any variable declared as ThemeType to be exactly one of those two specific strings, preventing typos or invalid theme names from being passed through your application
interface ThemeContextProps {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
}
export const LOCAL_STORAGE_THEME_KEY = "theme";
export const ThemeContext = createContext<ThemeContextProps>({});
