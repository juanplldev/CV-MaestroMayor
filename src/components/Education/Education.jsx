// Dependencies
import React, {useContext, useEffect, useState} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import lightStyles from "./LightEducation.module.css";
import darkStyles from "./DarkEducation.module.css";


function Education()
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
                    language === "English" ? "EDUCATION"
                    :
                    "EDUCACIÓN"
                }
            </h3>
            
            <ul>
                <li>
                    <h4>
                        <a href="https://www.soyhenry.com" target="_blank" rel="noopener noreferrer">
                            {
                                language === "English" ? "Henry Bootcamp"
                                :
                                "Bootcamp Henry"
                            }
                        </a>
                    </h4>
                    <h4>
                        {
                            language === "English" ? "Full Stack Web Developer"
                            :
                            "Desarrollador Web Full Stack"
                        }
                    </h4>
                    <h5>2021 - 2022</h5>
                </li>
                
                <li>
                    <h4>
                        <a href="https://edutin.com" target="_blank" rel="noopener noreferrer">
                            {
                                language === "English" ? "Edutin Academy"
                                :
                                "Academia Edutin"
                            }
                        </a>
                    </h4>
                    <h4>
                        {
                            language === "English" ? "Some IT related courses"
                            :
                            "Algunos cursos de informática"
                        }
                    </h4>
                    <h5>2021 - 2022</h5>
                </li>
                
                <li>
                    <h4>
                        <a href="http://www.escuelaraggio.edu.ar" target="_blank" rel="noopener noreferrer">
                            {
                                language === "English" ? "Raggio Technical School"
                                :
                                "Escuela Técnica Raggio"
                            }
                        </a>
                    </h4>
                    <h4>
                        {
                            language === "English" ? "Master Builder"
                            :
                            "Maestro Mayor de Obras"
                        }
                    </h4>
                    <h5>2015 - 2020</h5>
                </li>
            </ul>
        </div>
    );
};


export default Education;