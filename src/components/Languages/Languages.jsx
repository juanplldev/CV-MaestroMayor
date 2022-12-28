// Dependencies
import React, {useContext, useEffect, useState} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import lightStyles from "./LightLanguages.module.css";
import darkStyles from "./DarkLanguages.module.css";


function Languages()
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
            <h3 className={styles.Title}>
                {
                    language === "English" ? "LANGUAGES"
                    :
                    "IDIOMAS"
                }
            </h3>
            
            <ul>
                <li>
                    <span className={styles.Language}>
                        {
                            language === "English" ? "Spanish: "
                            :
                            "Español: "
                        }
                    </span>
                    <span className={styles.Level}>
                        {
                            language === "English" ? "Native."
                            :
                            "Nativo."
                        }
                    </span>
                </li>
                
                <li>
                    <span className={styles.Language}>
                        {
                            language === "English" ? "English: "
                            :
                            "Inglés: "
                        }
                    </span>
                    <span className={styles.Level}>
                        {
                            language === "English" ? "C1 Advanced."
                            :
                            "C1 Avanzado."
                        }
                    </span>
                </li>
            </ul>
        </div>
    );
};


export default Languages;