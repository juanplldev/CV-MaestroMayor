// Dependencies
import React, {useContext, useEffect, useState} from "react";
import {BiMap} from "react-icons/bi";
import {FiMail} from "react-icons/fi";
import {FaWhatsapp} from "react-icons/fa";
import {BsLinkedin} from "react-icons/bs";
import {CgFileDocument} from "react-icons/cg";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import lightStyles from "./LightContact.module.css";
import darkStyles from "./DarkContact.module.css";


function Contact()
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
                    language === "English" ? "CONTACT"
                    :
                    "CONTACTO"
                }
            </h3>
            
            <ul>
                <li>
                    <span className={styles.Icon}>
                        <a href="https://goo.gl/maps/9MGzKshhYSS3L7977" target="_blank" rel="noopener noreferrer"><BiMap/></a>
                    </span>
                    <span className={styles.Text}>
                        <a href="https://goo.gl/maps/9MGzKshhYSS3L7977" target="_blank" rel="noopener noreferrer">Buenos Aires, Argentina</a>
                    </span>
                </li>
                
                <li>
                    <span className={styles.Icon}>
                        <a href="mailto:juanpablollorentej@gmail.com" target="_blank" rel="noopener noreferrer"><FiMail/></a>
                    </span>
                    <span className={styles.Text}>
                        <a href="mailto:juanpablollorentej@gmail.com" target="_blank" rel="noopener noreferrer">juanpablollorentej@gmail.com</a>
                    </span>
                </li>
                
                <li>
                    <span className={styles.Icon}>
                        <a href="https://wa.me/541133365620" target="_blank" rel="noopener noreferrer"><FaWhatsapp/></a>
                    </span>
                    <span className={styles.Text}>
                        <a href="https://wa.me/541133365620" target="_blank" rel="noopener noreferrer">+54 11 3336-5620</a>
                    </span>
                </li>
                
                <li>
                    <span className={styles.Icon}>
                        <a href="https://www.linkedin.com/in/juanpll" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
                    </span>
                    <span className={styles.Text}>
                        <a href="https://www.linkedin.com/in/juanpll" target="_blank" rel="noopener noreferrer">JuanPll</a>
                    </span>
                </li>
                
                <li>
                    <span className={styles.Icon}>
                        <a href="https://juanpll-cv.vercel.app" target="_blank" rel="noopener noreferrer"><CgFileDocument/></a>
                    </span>
                    <span className={styles.Text}>
                        <a href="https://juanpll-cv.vercel.app" target="_blank" rel="noopener noreferrer">
                        {
                            language === "English" ? "Programming resume"
                            :
                            "CV de programación"
                        }
                        </a>
                    </span>
                </li>
            </ul>
        </div>
    );
};


export default Contact;