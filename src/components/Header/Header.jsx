// Dependencies
import React, {useContext, useEffect, useState} from "react";
import html2pdf from "html2pdf.js";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import DownloadContext from "../../contexts/DownloadContext";
import {IoLanguageOutline, IoMoonOutline, IoSunnyOutline} from "react-icons/io5";
import profileImg from "../../img/Profile Photo.jpeg";
import lightStyles from "./LightHeader.module.css";
import darkStyles from "./DarkHeader.module.css";


function Header()
{
    const {language, setLanguage} = useContext(LanguageContext);
    const {theme, setTheme} = useContext(ThemeContext);
    const {download, setDownload} = useContext(DownloadContext);
    
    const [styles, setStyles] = useState(theme === "Light" ? lightStyles : darkStyles);
    
    const titles =
    {
        language: language === "English" ? "Change language" : "Cambiar idioma",
        theme: language === "English" ? "Change theme" : "Cambiar tema",
        download: language === "English" ? "Download a PDF version" : "Descargar una versión en PDF",
    };
    
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
    
    function handleChangeTheme()
    {
        if(theme === "Dark")
        {
            setTheme("Light");
            window.localStorage.setItem("Theme", "Light");
        }
        else if(theme === "Light")
        {
            setTheme("Dark");
            window.localStorage.setItem("Theme", "Dark");
        };
    };
    
    function handleChangeLanguage()
    {
        if(language === "English")
        {
            setLanguage("Español");
            window.localStorage.setItem("Language", "Español");
        }
        else if(language === "Español")
        {
            setLanguage("English");
            window.localStorage.setItem("Language", "English");
        };
    };
    
    async function handleDownloadPDF()
    {
        await setDownload(true);
        
        const element = document.getElementById("HomeContainer");
        const optitons =
        {
            margin: 0,
            filename: "CV - Juan Pablo Llorente",
            image:
            {
                type: "jpeg",
                quality: 0.98,
            },
            html2canvas:
            {
                scale: 2,
            },
            hotfixes:
            [
                "px_scaling",
            ],
            jsPDF:
            {
                unit: "px",
                format: language === "English" ? [1000, 1152] : [1000, 1152],
                orientation: "portrait",
            },
        };
        
        await html2pdf(element, optitons);
        await setDownload(false);
    };
    
    return (
        <div className={styles.Container}>
            {
                download === false ?
                <div className={styles.ButtonsContainer}>
                    <button onClick={handleChangeLanguage} className={styles.Button} title={titles.language}>
                        <IoLanguageOutline/>
                    </button>
                    <button onClick={handleChangeTheme} className={styles.Button} title={titles.theme}>
                        {
                            theme === "Light" ? <IoMoonOutline/>
                            :
                            <IoSunnyOutline/>
                        }
                    </button>
                </div>
                :
                null
            }
            
            <img src={profileImg} alt=""/>
            <h2>Juan Pablo Llorente</h2>
            
            <h4>
                {
                    language === "English" ? "Master Builder"
                    :
                    "Maestro Mayor de Obras"
                }
            </h4>
            
            {
                download === false ?
                <button onClick={handleDownloadPDF} className={styles.DownloadButton} title={titles.download}>
                {
                    language === "English" ? "Download"
                    :
                    "Descargar"
                }
                </button>
                :
                null
            }
        </div>
    );
};


export default Header;