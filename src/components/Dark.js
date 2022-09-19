import React, { useState , useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
const DarkModeToggles = () => { 
    const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark" ? true : false); 
    useEffect(() => { document .getElementsByTagName("HTML")[0] .setAttribute("data-theme", localStorage.getItem("theme")); 
  },[]);



  const toggleThemeChange = () => { 
    if (isDark === false) { 
      localStorage.setItem("theme", "dark"); 
      document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme")); 
      setIsDark(true); 
      } else { 
        localStorage.setItem("theme", "light"); 
        document .getElementsByTagName("HTML")[0] .setAttribute("data-theme",localStorage.getItem("theme")); 
        setIsDark(false); 
      } 
    }
    return ( 
          <DarkModeToggle
          onChange={() =>toggleThemeChange()}
          checked={isDark}
          size={50} />
       
       )
    }

  export default DarkModeToggles;