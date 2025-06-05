'use client'
import { Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'


const ThemeButton = () => {
    
const themeStart = typeof window !== "undefined" ? localStorage.getItem("theme") || undefined : undefined;
  const [theme, setTheme] = useState<string>(themeStart || "dark")
  
  const themeHandler = () => {
    if(theme === "dark"){
        setTheme("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
    }
    else{
        setTheme("dark")
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
    }
  }

  return (
    <div onClick={themeHandler} className='cursor-pointer hover:bg-foreground/20 rounded-full p-1 transition-all duration-300 '>
      {theme === "dark" ? <Moon /> : <Sun />}
    </div>
  )
}

export default ThemeButton
