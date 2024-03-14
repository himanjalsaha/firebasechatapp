import { createContext, useContext, useState } from "react"
import {GoogleAuthProvider, signInWithRedirect} from  'firebase/auth'
import { auth } from "../../Firebase";
//create context
const Authcontext = createContext();
 
//Provide Context
export const AuthProvider = ({children}) => {
    const [currentuser , setcurrentuser] = useState(null);

    //signin with google
    const signinwithgoogle  = new GoogleAuthProvider()
    signInWithRedirect(auth,provider)

    const value = {
        currentuser,
        setcurrentuser
    }
    return(
        <Authcontext.Provider value={value}>
            {children}
        </Authcontext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(Authcontext);
}