// // src/app/providers/LanguageProvider/languageContext.ts

// import { createContext } from "react";

// // 1. Single Source of Truth for Supported Languages
// // Note: We map the language code (key) to the same code (value) for simplicity.
// // We include the directionality logic in the state update function later.

// export const Languages = {
//   EN: "en", // English (LTR)
//   AR: "ar", // Arabic (RTL)
//   // Add other languages here if needed
// } as const;

// // 2. Create the Union Type from the object's values
// export type LanguageType = (typeof Languages)[keyof typeof Languages]; // 'en' | 'ar'

// // 3. Define the derived Direction type
// export type DirectionType = 'ltr' | 'rtl';

// interface LanguageContextProps {
//   language?: LanguageType;
//   direction?: DirectionType; // Include directionality in the state
//   setLanguage?: (language: LanguageType) => void;
// }

// // 4. Define the context key for localStorage
// export const LOCAL_STORAGE_LANGUAGE_KEY = "language";

// // 5. Create the Context
// export const LanguageContext = createContext<LanguageContextProps>({});
// src/app/providers/LanguageProvider/language.context.ts

import { createContext } from "react";
import {type  LanguageContextProps } from "./language.types";

export const LanguageContext =
  createContext<LanguageContextProps>({});
