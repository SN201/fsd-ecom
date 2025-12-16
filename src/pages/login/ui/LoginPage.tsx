import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
// import { LangageSwitcher } from "@/widgets/Header/LangageSwitcher";
function Login() {
    const {t } = useTranslation("login");
    // const changeLanguage = () =>{
    // i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")}
  return (
    <div>
         <h1>{t("login")}</h1>
      <Link to={"/"}>Home Page</Link>
      {/* <button onClick={changeLanguage}>Change Language <LangageSwitcher/></button> */}
    </div>
  )
}

export default Login
