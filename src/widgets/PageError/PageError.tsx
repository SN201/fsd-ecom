import { useTranslation } from "react-i18next";
import styles from "./PageError.module.scss"
import PageErrorIcon from "@/shared/assets/icons/PageError.svg?react"
import { Button } from "@/shared/ui";
export const PageError = () => {
    const {t} = useTranslation();
    const handelReloadClick = () =>{
        location.reload();
    }
    return (
        <div className = {styles.wrapper}>
            <div className={styles.content}>
              <PageErrorIcon  className={styles.icon}/>
              <h3 className={styles.title}>{t('pageError.title')}</h3>
              <p className={styles.description}>{t('pageError.description')}</p>
              <Button theme="primary" form="rounded" onClick={handelReloadClick} className={styles.button}>
                {t('pageError.reload')}
                </Button>
            </div>
        </div>
    );
}