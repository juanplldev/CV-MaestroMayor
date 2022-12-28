// Dependencies
import React, {useContext, useEffect, useState} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import {BsArrowRightShort} from "react-icons/bs"
import lightStyles from "./LightCertificates.module.css";
import darkStyles from "./DarkCertificates.module.css";


function Certificates()
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
                    language === "English" ? "CERTIFICATES"
                    :
                    "CERTIFICADOS"
                }
            </h2>
            
            <ul>
                <li>
                    <a className={styles.Link} href="https://www.efset.org/cert/PzicRi" target="_blank" rel="noopener noreferrer">
                        <span>
                            {
                                language === "English" ? "EF SET English Certificate"
                                :
                                "Certificado de Inglés EF SET"
                            }
                            <span className={styles.Month}>
                                {
                                    language === "English" ? " - August 2022"
                                    :
                                    " - Agosto 2022"
                                }
                            </span>
                        </span>
                        <BsArrowRightShort/>
                    </a>
                </li>
                
                <li>
                    <a className={styles.Link} href="https://certificates.soyhenry.com/cert?id=22f61cd9-03ee-4444-8822-53a5c289cd60" target="_blank" rel="noopener noreferrer">
                        <span>
                            {
                                language === "English" ? "Full Stack Web Developer"
                                :
                                "Desarrollador Web Full Stack"
                            }
                            <span className={styles.Month}>
                                {
                                    language === "English" ? " - June 2022"
                                    :
                                    " - Junio 2022"
                                }
                            </span>
                        </span>
                        <BsArrowRightShort/>
                    </a>
                </li>
                
                <li>
                    <a className={styles.Link} href="https://edutin.com/certifications/view/4490855" target="_blank" rel="noopener noreferrer">
                        <span>
                            {
                                language === "English" ? "Computer Security"
                                :
                                "Seguridad Informática"
                            }
                            <span className={styles.Month}>
                                {
                                    language === "English" ? " - May 2022"
                                    :
                                    " - Mayo 2022"
                                }
                            </span>
                        </span>
                        <BsArrowRightShort/>
                    </a>
                </li>
                <li>
                    <a className={styles.Link} href="https://edutin.com/certifications/view/3955381" target="_blank" rel="noopener noreferrer">
                        <span>
                            {
                                language === "English" ? "Mobile Phone Repair and Maintenance"
                                :
                                "Reparación y Mantenimiento de Telefonía Móvil"
                            }
                            <span className={styles.Month}>
                                {
                                    language === "English" ? " - May 2022"
                                    :
                                    " - Mayo 2022"
                                }
                            </span>
                        </span>
                        <BsArrowRightShort/>
                    </a>
                </li>
                <li>
                    <a className={styles.Link} href="https://edutin.com/certifications/view/3955352" target="_blank" rel="noopener noreferrer">
                        <span>
                            {
                                language === "English" ? "Fundamentals in Computer Science"
                                :
                                "Fundamentos en Ciencias de la Computación"
                            }
                            <span className={styles.Month}>
                                {
                                    language === "English" ? " - May 2022"
                                    :
                                    " - Mayo 2022"
                                }
                            </span>
                        </span>
                        <BsArrowRightShort/>
                    </a>
                </li>
                <li>
                    <a className={styles.Link} href="https://edutin.com/certifications/view/3874632" target="_blank" rel="noopener noreferrer">
                        <span>
                            {
                                language === "English" ? "Introduction to C"
                                :
                                "Introducción a C"
                            }
                            <span className={styles.Month}>
                                {
                                    language === "English" ? " - July 2021"
                                    :
                                    " - Julio 2021"
                                }
                            </span>
                        </span>
                        <BsArrowRightShort/>
                    </a>
                </li>
            </ul>
        </div>
    );
};


export default Certificates;