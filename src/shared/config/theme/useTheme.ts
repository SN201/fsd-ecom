import { useContext } from "react";
import  {
     LOCAL_STORAGE_THEME_KEY ,
     ThemeContext , 
     Theme  ,
    type ThemeType 
} from "./themeContext";

interface useThemeReturn{
    theme ? : ThemeType
    toggelTheme : ()=>void
}
export const useTheme = (): useThemeReturn  => {
const {theme  , setTheme} = useContext(ThemeContext);
const toggelTheme = () => {
    const newTheme = theme === Theme.PINK ? Theme.BLUE : Theme.PINK
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY , newTheme)
};
return{theme , toggelTheme};
};