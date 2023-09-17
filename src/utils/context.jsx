import { createContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Context=createContext();


const AppContextProvider=({children})=>{
    
    const { user, isAuthenticated, isLoading ,logout,loginWithRedirect} = useAuth0();


    return(
        <Context.Provider 
        value={
        {user,
        isAuthenticated,
        isLoading,
        logout,
        loginWithRedirect,
        
        }
        }
        >
            {children}
        </Context.Provider>

    )
}

export default AppContextProvider