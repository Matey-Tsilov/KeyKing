import { createContext, useState } from "react";

const TextContext = createContext();

const TextContextProvider = ({ children }) => {
  
  const [passedText, setPassedText] = useState({})
  
    return (<TextContext.Provider value={{passedText, setPassedText}}>
        {children}
        </TextContext.Provider>)
};

export {
    TextContext,
    TextContextProvider
}
