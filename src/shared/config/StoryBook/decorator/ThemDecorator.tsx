import type { Decorator } from "@storybook/react-vite"

export const ThemDecorator : Decorator = (Story ,context) => {
    const {theme} = context.globals;
return(

    <div className={theme}>
        <Story {...context}/>
    </div>
    );
}