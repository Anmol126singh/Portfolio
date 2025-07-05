import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext= createContext()
export const ThemeProvider = ({children})=>{
    const[DarkMode,setDarkMode]=useState(()=>JSON.parse(localStorage.getItem('DarkMode'))||false);
   
    useEffect(()=>{
        const root = document.documentElement;
        DarkMode?root.classList.add('dark'):root.classList.remove('dark');
    },[DarkMode])
    const ToggleDarkMode  = ()=>setDarkMode(prev=>!prev)
    localStorage.setItem('DarkMode',JSON.stringify(DarkMode));
    return(
        <ThemeContext.Provider value={{DarkMode,ToggleDarkMode}}>{children}</ThemeContext.Provider>
    )
}
export const UseTheme = ()=>useContext(ThemeContext);