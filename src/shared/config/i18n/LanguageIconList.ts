import type { FunctionComponent, SVGProps } from "react";

import ArabicListIcon from "@/shared/assets//icons/Arab(UAE).svg?react";
import EnglishListIcon from "@/shared/assets//icons/English.svg?react";

import { supportedLngs } from "./i18n";

export type supportedLngsType = (typeof supportedLngs)[number];
export type langageIconListType = Record<
  supportedLngsType,
  FunctionComponent<SVGProps<SVGSVGElement>>
>;
export const langageIconList: langageIconListType = {
  en: EnglishListIcon,
  ar: ArabicListIcon,
};
