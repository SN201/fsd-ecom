import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss"
import Logo from "@/shared/assets/icons/Logo.svg?react"
import { Link } from "react-router-dom";
import { routePaths } from "@/shared/config";
export const Footer = () => {
    const {t} = useTranslation() ; 
    return (
        <footer>
            <div className={styles.container}>
            <div className={styles.logo}>
             <Logo className={styles.icon}/>
             {/* Links */}</div>
             <div className={styles.links}>
                {/* Column #1 */}
             <div className={styles.column}>
             <h3 className={styles.columnTitle}>
             {t(`footer.about`)}
             </h3>
             <ul className={styles.linkList}>
                <li>
                <Link className={styles.Link} to={routePaths.home}>{t(`footer.aboutUs`)}</Link>
                </li>
                <li>
                <Link className={styles.Link} to={routePaths.home}>{t(`footer.ourBranches`)}</Link>
                </li>
                  <li>
                <Link className={styles.Link} to={routePaths.home}>{t(`footer.changelog`)}</Link>
                </li>
             </ul>
             </div>
             {/* End OF Column #1 */}
               {/* Column #2 */}
             <div className={styles.column}>
             <h3 className={styles.columnTitle}>
             {t(`footer.quickLinks`)}
             </h3>
             <ul className={styles.linkList}>
                <li>
                <Link className={styles.Link} to={routePaths.home}>{t(`footer.faqs`)}</Link>
                </li>
                <li>
                <Link className={styles.Link} to={routePaths.home}>{t(`footer.recipes`)}</Link>
                </li>
                  <li>
                <Link className={styles.Link} to={routePaths.home}>{t(`footer.contactUs`)}</Link>
                </li>
             </ul>
             </div>
             {/* End OF Column #2 */}
               {/* Column #3 */}
             <div className={styles.column}>
             <h3 className={styles.columnTitle}>
             {t(`footer.helpSupport`)}
             </h3>
             <ul className={styles.linkList}>
                <li>
                <Link className={styles.Link} to={routePaths.home}>{t(`footer.termsOfService`)}</Link>
                </li>
                <li>
                <Link className={styles.Link} to={routePaths.home}>{t(`footer.privacyPolicy`)}</Link>
                </li>
                  <li>
                <Link className={styles.Link} to={routePaths.home}>{t(`footer.security`)}</Link>
                </li>
             </ul>
             </div>
             {/* End OF Column #3 */}
              {/* Column #4 */}
             <div className={styles.column}>
             <h3 className={styles.columnTitle}>
             {t(`footer.company`)}
             </h3>
             <ul className={styles.linkList}>
                <li>
                <Link className={styles.Link} to={routePaths.home}>{t(`footer.blog`)}</Link>
                </li>
                <li>
                <Link className={styles.Link} to={routePaths.home}>{t(`footer.contact`)}</Link>
                </li>
             </ul>
             </div>
             {/* End OF Column #4 */}
              {/* Column #5 */}
             <div className={styles.column}>
             <h3 className={styles.columnTitle}>
             {t(`footer.social`)}
             </h3>
             <ul className={styles.linkList}>
                <li>
                <Link className={styles.Link} to={routePaths.home}>{t(`footer.facebook`)}</Link>
                </li>
                <li>
                <Link className={styles.Link} to={routePaths.home}>{t(`footer.instagram`)}</Link>
                </li>
                  <li>
                <Link className={styles.Link} to={routePaths.home}>{t(`footer.X`)}</Link>
                </li>
             </ul>
             </div>
             {/* End OF Column #5 */}
             </div>
            </div>
            {/* </div> */}
            <div className={styles.copyright}>
          {  t(`footer.copyright`  ,  {year : "2024" , company:"SN201"})}
            </div>
        </footer>
    );
}