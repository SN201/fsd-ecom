// src/app/providers/LanguageProvider/language.types.ts

import { Languages } from "./language.constants";

export type LanguageType = (typeof Languages)[keyof typeof Languages]; // 'en' | 'ar'

export type DirectionType = "ltr" | "rtl";

export interface LanguageContextProps {
  language?: LanguageType;
  direction?: DirectionType;
  setLanguage?: (language: LanguageType) => void;
}
