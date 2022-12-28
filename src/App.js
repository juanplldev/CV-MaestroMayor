// Dependencies
import React from "react";
import {Route, Routes} from "react-router-dom";
// Files
import Home from "./components/Home/Home.jsx";
import {ThemeContext} from "./contexts/ThemeContext.jsx";
import {LanguageContext} from "./contexts/LanguageContext.jsx";
import {DownloadContext} from "./contexts/DownloadContext.jsx";
import "./App.css";


function App()
{
    return (
        <React.Fragment>
            <ThemeContext>
                <LanguageContext>
                    <DownloadContext>
                        <Routes>
                            <Route exact path="/" element={<Home/>} />
                        </Routes>
                    </DownloadContext>
                </LanguageContext>
            </ThemeContext>
        </React.Fragment>
    );
};


export default App;