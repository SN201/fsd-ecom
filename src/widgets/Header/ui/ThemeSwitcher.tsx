import { useTheme } from "@/shared/config";
import { AppIcon } from "@/shared/ui/Icons";
import { Button } from "@/shared/ui/Button";
import Circle from "@/shared/assets//icons/Circle.svg?react"

export const ThemeSwitcher =  () =>{ 
      const {toggelTheme} = useTheme();
    return (
        <Button onClick={toggelTheme}  theme="ghost">
        <AppIcon Icon={Circle} filled />
        </Button>
    );
}