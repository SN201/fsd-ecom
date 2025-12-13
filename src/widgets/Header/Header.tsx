import { AppIcon, Button, Input } from "@/shared/ui"
import styles from"./Header.module.scss"
import LogoIcon from "@/shared/assets//icons/Logo.svg?react"
import MapPin from "@/shared/assets//icons/MapPin.svg?react"
import SearchIcon from "@/shared/assets//icons/Search.svg?react"
import User from "@/shared/assets//icons/Users.svg?react"
import ShoppingCart from "@/shared/assets//icons/ShoppingCart.svg?react"

// import Circle from "@/shared/assets//icons/Circle.svg?react"
// import English from "@/shared/assets//icons/English.svg?react"
// import Arabic from "@/shared/assets//icons/Arab(UAE).svg?react"
// import { useTheme } from "@/shared/config"
import { useTranslation } from "react-i18next"
import { LangageSwitcher } from "./LangageSwitcher"
import { ThemeSwitcher } from "./ThemeSwitcher"
export const Header = () => {
      const { t} = useTranslation();
    //   const {toggelTheme} = useTheme();
    // const toggelLanguage = () => {
    //     i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')
    // }
return(
<header className={styles.header}>

    <div className={styles.section}>
        <LogoIcon className={styles.logo}/>
        <Button theme="ghost">
            <AppIcon Icon={MapPin}/>
            <span>10115 New York</span>
        </Button>
    </div>

    <div className={styles.section}>
   
     <Input
      placeholder={t(`header.searchBy`)}
      rounded
      size={18}
      Icon={<AppIcon
      Icon={SearchIcon}
      filled
      // them="background"
      />}
      />

    </div>

    <div className={styles.section}>
        <Button theme="secondary">
         <AppIcon Icon={ShoppingCart}/>
           <span> {t(`header.cart`)}</span>
        </Button>

        <Button theme="outline">
        <AppIcon Icon={User}/>
        <span>{t(`header.login`)}</span>
        </Button>

        {/* <Button onClick={toggelTheme}  theme="ghost">
        <AppIcon Icon={Circle} filled />
        </Button> */}
        <ThemeSwitcher/>

        <LangageSwitcher/>
    </div>

</header>
) }