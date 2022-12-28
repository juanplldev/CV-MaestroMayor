// Dependencies
import React, {useContext, useEffect, useState} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import QR from "../../img/QR Trabajos y Certificados.png";
import lightStyles from "./LightJobsView.module.css";
import darkStyles from "./DarkJobsView.module.css";


function JobsView()
{
    const {language} = useContext(LanguageContext);
    const {theme} = useContext(ThemeContext);
    
    const [styles, setStyles] = useState(theme === "Light" ? lightStyles : darkStyles);
    
    useEffect(() => {
        if(theme === "Light")
        {
            setStyles(lightStyles);
        }
        else if(theme === "Dark")
        {
            setStyles(darkStyles);
        };
    }, [theme]);
    
    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>
                {
                    language === "English" ? "SAMPLE OF WORKS"
                    :
                    "MUESTRA DE TRABAJOS"
                }
            </h2>
            
            <div className={styles.QRContainer}>
                <img src={QR} alt="QR" />
            </div>
        </div>
    );
};


export default JobsView;