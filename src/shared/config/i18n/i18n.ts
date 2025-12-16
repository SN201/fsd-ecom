import i18n from "i18next";
import languageDetector from 'i18next-browser-languagedetector'
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const supportedLngs = [ "en" , "ar"];
i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en", 
    debug:true , 
    supportedLngs ,
    interpolation : {
        escapeValue: false , 
    } , 
  });

export default i18n;