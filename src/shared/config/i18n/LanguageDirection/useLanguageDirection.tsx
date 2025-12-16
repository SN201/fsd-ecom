// src/shared/lib/hooks/useLanguage/useLanguage.ts

import { useContext } from "react";

import {
  LanguageContext, 
  Languages, 
 type LanguageType,
  type DirectionType
} from "@/shared/config/index";

interface useLanguageReturn {
  language?: LanguageType;
  direction?: DirectionType;
  toggleLanguage: () => void;
}

export const useLanguage = (): useLanguageReturn => {
  // Destructure the context values (language, direction, setter)
  const { language, direction, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    if (setLanguage) {
      // Logic to toggle between the two main languages
      const newLang = language === Languages.EN ? Languages.AR : Languages.EN;
      
      // Call the setter provided by the Context Provider
      setLanguage(newLang);
    }
  };

  return { language, direction, toggleLanguage };
};