import {
  langageIconList,
  type supportedLngsType,
} from "./i18n/LanguageIconList";
import {
  LOCAL_STORAGE_LANGUAGE_KEY,
  Languages,
} from "./languageDirection/language.constants";
import {
  type LanguageType,
  type LanguageContextProps,
  type DirectionType,
} from "./languageDirection/language.types";
import { LanguageContext } from "./languageDirection/LanguageDirectionContext";
import { routePaths, AppRoutes } from "./router/routePaths";
import {
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  type ThemeType,
} from "./theme/themeContext";
import { useTheme } from "./theme/useTheme";

export {
  routePaths,
  AppRoutes,
  Theme,
  ThemeContext,
  useTheme,
  LOCAL_STORAGE_THEME_KEY,
  type ThemeType,
  type supportedLngsType,
  langageIconList,
  LOCAL_STORAGE_LANGUAGE_KEY,
  Languages,
  type LanguageContextProps,
  type LanguageType,
  type DirectionType,
  LanguageContext,
};
