import { useState, type ChangeEvent, type InputHTMLAttributes, type ReactNode } from "react";

import { Button } from '@/shared/ui/Button';

import HideIcon from "../../../assets/icons/Hide.svg?react"
import ShowIcon from "../../../assets/icons/Show.svg?react"
import { cn } from "../../../config/lib/classNames";

import styles from "./Input.module.scss"

type HTMLInputType = Omit<InputHTMLAttributes<HTMLInputElement> , "onChange">

interface InputProps extends HTMLInputType {
  className?:string;
  value? : string;
  Icon?:ReactNode;
  rounded?: boolean , 
  disabled?: boolean, 
 onChange? : (value : string) => void
}

export const  Input = (props:InputProps) => {
const [showPassword , setShowPassword] = useState<boolean>(false);
const [focus , setFocus] = useState<boolean>(false);

    const {
        className , 
        value ,
        type = "text" ,
        Icon,
        rounded = false , 
        onChange , 
        disabled = false, 
        ...rest } = props
        const toggleShowPassword=()=>{
            setShowPassword((prev)=>!prev);
        };
        const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
            onChange?.(e.target.value);
        }
        const handleFocus  = () =>{
          setFocus(true);
        }
       const handleBlur  = () =>{
          setFocus(false);
        }
  return (
    <div
    className={cn(styles.inputContainer, className ,{[styles.disabled]:disabled , [styles.rounded]:rounded , [styles.focus]: focus})}
    >
        {Icon}
    <input 
    {...rest}
     disabled={disabled}
     value={value}
     onFocus={handleFocus}
     onBlur={handleBlur}
     type={showPassword && type === "password" ? "text" : type}
     className={cn(styles.input , {[styles.disabled]:disabled} , {[styles.focus]:focus})}
     onChange={handleChange} 
      />
      {type === "password" && (
     <Button
     className={styles.toggleVisibility}
     theme="ghost"
     type="button"
     onClick={toggleShowPassword}
     >
      {
      showPassword  ? <HideIcon/> : <ShowIcon/>
      }
      
      </Button>
      )}

    </div>
    
  );
}