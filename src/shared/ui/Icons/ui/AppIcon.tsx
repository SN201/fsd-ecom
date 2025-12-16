import type { FunctionComponent ,   SVGProps } from "react";

import { cn } from "@/shared/config/lib/classNames";

import styles from "./AppIcon.module.scss"

 type AppIconThem = "clean" | "background"
interface AppIconProps {
Icon : FunctionComponent<SVGProps<SVGSVGElement>> ;
them? : AppIconThem ; 
className? : string
filled?: boolean ; 
size?:number 
}
export const AppIcon  = (props : AppIconProps) =>{
const {Icon , them = "clean" , className ,filled =false  , size = 23 } = props
const AppIcon = (
<Icon
width={size}
height={size}
 className={cn(styles.icon , className  , {[styles.filled] : filled} )}/>
)
 if(them === "background"){
 return <div className={styles.wrapper}>{AppIcon}</div>
}
return AppIcon
};