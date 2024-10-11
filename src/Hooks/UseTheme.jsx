import { useState } from "react";

export function useTheme(){
    
    const [isDark, setisDark] = useState(false)
  
    if(isDark==true){
       document.querySelector(".countries-container").classList.add("dark")
    }
    else{
        document.querySelector(".countries-container").classList.remove("dark")
    }
    localStorage.setItem(isDark)
     return {setisDark}
}