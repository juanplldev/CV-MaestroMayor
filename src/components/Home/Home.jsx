// Dependencies
import React, {useContext, useEffect, useState} from "react";
// Files
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Languages from "../Languages/Languages";
import Profile from "../Profile/Profile";
import Experience from "../Experience/Experience";
import Certificates from "../Certificates/Certificates";
import JobsView from "../JobsView/JobsView";
import ThemeContext from "../../contexts/ThemeContext";
import DownloadContext from "../../contexts/DownloadContext";
import {scrollToTop} from "../../handlers/handlers";
import {AiOutlineArrowUp} from "react-icons/ai";
import lightStyles from "./LightHome.module.css";
import darkStyles from "./DarkHome.module.css";


function Home()
{
    const {theme} = useContext(ThemeContext);
    const {download} = useContext(DownloadContext);
    const [styles, setStyles] = useState(theme === "Light" ? lightStyles : darkStyles);
    
    useEffect(() => {
        if(theme === "Light")
        {
            setStyles(lightStyles);
            document.body.classList.remove("BodyDarkTheme");
        }
        else if(theme === "Dark")
        {
            setStyles(darkStyles);
            document.body.classList.add("BodyDarkTheme");
        };
    }, [theme]);
    
    return (
        <div className={download ? styles.DownloadContainer : styles.Container} id="HomeContainer">
            <div className={styles.LeftSide}>
                <Header/>
                <Contact/>
                <Education/>
                <Languages/>
            </div>
            
            <div className={styles.RightSide}>
                <Profile/>
                <Experience/>
                <Certificates/>
                <JobsView/>
            </div>
            
            <button onClick={scrollToTop} className={download ? styles.DownloadArrowButton : styles.ArrowButton}>
                <AiOutlineArrowUp/>
            </button>
        </div>
    );
};


export default Home;