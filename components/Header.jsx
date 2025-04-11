import { useState,useEffect } from "react";
import React from "react";

function Header(){
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() =>{
        const body = document.body;
        if(darkMode){
            body.classList.add("dark-mode");
        }else{
            body.classList.remove("dark-mode");
        };
    });

    const handleClick = () => {
        setDarkMode(!darkMode);
    };
    return(
        <div className="header">
            <div className="header-title">
                Where in the world?
            </div>

            <button className="header-color-switch" onClick={handleClick}>
                 <img src="/images/night-mode.png" style={{width: "25px",height: "25px"}} alt=""  />
                 <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
            </button>
        </div>
    )
};

export default Header;