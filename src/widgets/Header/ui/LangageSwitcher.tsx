import { useTranslation } from "react-i18next"

import { langageIconList, type supportedLngsType } from "@/shared/config";
import { Button } from '@/shared/ui/Button';
import { AppIcon } from '@/shared/ui/Icons';

export const LangageSwitcher = () =>{
    const { i18n} = useTranslation();
     const currentLanguage = i18n.language as supportedLngsType ; 
     const toggelLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')
    }
return (
            <Button onClick={toggelLanguage} theme="ghost">
                {/* {i18n.language === 'en' ?( <AppIcon Icon={English} /> ):( <AppIcon Icon={Arabic}/>)} */}
            <AppIcon Icon={langageIconList[currentLanguage]}/>
        </Button>
)

}