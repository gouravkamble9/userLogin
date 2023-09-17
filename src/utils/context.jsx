import { createContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Context=createContext();


const AppContextProvider=({children})=>{
    
    const { user, isAuthenticated, isLoading ,logout,loginWithRedirect} = useAuth0();
    const [mobileMenu,SetMobileMenu]=useState(false)

    return(
        <Context.Provider 
        value={
        {user,
        isAuthenticated,
        isLoading,
        logout,
        loginWithRedirect,
        mobileMenu,
        SetMobileMenu,
        
        }
        }
        >
            {children}
        </Context.Provider>

    )
}

export default AppContextProvider