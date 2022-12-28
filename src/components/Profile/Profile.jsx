// Dependencies
import React, {useContext, useEffect, useState} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import lightStyles from "./LightProfile.module.css";
import darkStyles from "./DarkProfile.module.css";


function Profile()
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
                    language === "English" ? "PROFILE"
                    :
                    "PERFIL"
                }
            </h2>
            
            <p>
                {
                    language === "English" ? `I'm a 20 years old Full Stack Web Developer and Master Builder from Buenos Aires, Argentina.`
                    :
                    `Soy un Desarrollador Web Full Stack y Maestro Mayor de Obras. Tengo 20 años y soy de Buenos Aires, Argentina.`
                }
            </p>
        </div>
    );
};


export default Profile;