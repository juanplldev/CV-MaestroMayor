// Dependencies
import React, {useState} from "react";

const Context = React.createContext({});

export function DownloadContext({children})
{
    const [download, setDownload] = useState(false);
    
    return(
        <Context.Provider value={{download, setDownload}}>
            {children}
        </Context.Provider>
    );
};


export default Context;