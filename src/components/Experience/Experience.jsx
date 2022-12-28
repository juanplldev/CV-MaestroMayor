// Dependencies
import React, {useContext, useEffect, useState} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import lightStyles from "./LightExperience.module.css";
import darkStyles from "./DarkExperience.module.css";


function Experience()
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
                    language === "English" ? "EXPERIENCE"
                    :
                    "EXPERIENCIA"
                }
            </h2>
            
            <div className={styles.Job}>
                <h3>
                    {
                        language === "English" ? "AutoCAD Draftsman"
                        :
                        "Dibujante de AutoCAD"
                    }
                </h3>
                
                <div className={styles.Details}>
                    <h4>MT Arquitectura</h4>
                    <h5>
                        {
                            language === "English" ? "Sept. 2020 - August 2021"
                            :
                            "Sept. 2020 - Agosto 2021"
                        }
                    </h5>
                </div>
                
                <p>
                    {
                        language === "English" ? "Drawing of municipal plans."
                        :
                        "Dibujado de planos municipales."
                    }
                </p>
            </div>
            
            <div className={styles.Job}>
                <h3>
                    {
                        language === "English" ? "Professional Practice"
                        :
                        "Práctica Profesional"
                    }
                </h3>
                
                <div className={styles.Details}>
                    <h4>Escuela Técnica Raggio</h4>
                    <h5>
                        {
                            language === "English" ? "May 2020 - Nov. 2020"
                            :
                            "Mayo 2020 - Nov. 2020"
                        }
                    </h5>
                </div>
                
                <p>
                    {
                        language === "English" ? "Design of a new workshop dedicated to construction, seeking a resolution adapted to the anticipated requirements."
                        :
                        "Diseño de un nuevo taller dedicado a la construcción, buscando una resolución adaptada a los requisitos previstos."
                    }
                    <br />
                    {
                        language === "English" ? "Made with three more co-workers, taking into account our professional responsibilities."
                        :
                        "Realizado con tres compañeros más, teniendo en cuenta nuestras responsabilidades profesionales."
                    }
                </p>
            </div>
        </div>
    );
};


export default Experience;