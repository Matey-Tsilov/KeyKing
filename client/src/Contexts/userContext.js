import useSessionStorage from "../Hooks/useSessionStorage";
import { createContext } from "react";

const UserContext = createContext()

const UserContextProvider = ({children}) => {
  const [user, setUser] = useSessionStorage({});

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserContext,
    UserContextProvider
}