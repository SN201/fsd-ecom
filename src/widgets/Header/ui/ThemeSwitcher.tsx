import Circle from "@/shared/assets//icons/Circle.svg?react"
import { useTheme } from "@/shared/config";
import { Button } from "@/shared/ui/Button";
import { AppIcon } from "@/shared/ui/Icons";

export const ThemeSwitcher =  () =>{ 
      const {toggelTheme} = useTheme();
    return (
        <Button onClick={toggelTheme}  theme="ghost">
        <AppIcon Icon={Circle} filled />
        </Button>
    );
}