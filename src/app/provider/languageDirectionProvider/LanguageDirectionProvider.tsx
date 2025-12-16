// src/app/providers/LanguageProvider/LanguageProvider.tsx

import { useState, useEffect, useMemo } from "react";
import {  type FC } from 'react';

import { 
  LOCAL_STORAGE_LANGUAGE_KEY, 
  LanguageContext, 
  Languages,  
  type DirectionType,
  type LanguageType
} from "@/shared/config/index";

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  
  // Get initial language from localStorage or default to English (LTR)
  const defaultLang = (localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) as LanguageType) || Languages.EN;
  const defaultDir = defaultLang === Languages.AR ? 'rtl' : 'ltr';

  const [language, setLanguageState] = useState<LanguageType>(defaultLang);
  const [direction, setDirectionState] = useState<DirectionType>(defaultDir);

  // Function to set both language state and derived direction state
  const setLanguage = (lang: LanguageType) => {
    const newDirection = lang === Languages.AR ? 'rtl' : 'ltr';
    
    setLanguageState(lang);
    setDirectionState(newDirection);
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, lang);
  };

  // GLOBAL SIDE EFFECT: Apply the dir and lang attributes to the root HTML element
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [direction, language]);

  const contextValue = useMemo(() => ({
    language,
    direction,
    setLanguage
  }), [language, direction]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};