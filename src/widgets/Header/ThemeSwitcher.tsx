import { useTheme } from "@/shared/config";
import { AppIcon, Button } from "@/shared/ui";
import Circle from "@/shared/assets//icons/Circle.svg?react"

export const ThemeSwitcher =  () =>{ 
      const {toggelTheme} = useTheme();
    return (
        <Button onClick={toggelTheme}  theme="ghost">
        <AppIcon Icon={Circle} filled />
        </Button>
    );
}