import { createContext, useContext, useEffect, useState } from "react"
import {GoogleAuthProvider, signInWithRedirect , onAuthStateChanged , signOut} from  'firebase/auth'
import { auth } from "../Firebase";
//create context
const Authcontext = createContext();
 
//Provide Context
export const AuthProvider = ({children}) => {
    const [currentuser , setcurrentuser] = useState(null);
    const [loading , setloading] = useState(true)

    //signin with google
    const signinwithgoogle = () =>{
    const provider  = new GoogleAuthProvider()
    signInWithRedirect(auth , provider)
}

const signoutwithgoogle = () => {
    signOut(auth);
}


   
    useEffect(()=>{
        const unsub = onAuthStateChanged(auth , (user)=>{
            setcurrentuser(user)
            setloading(false)
        })
        console.log(currentuser);
        return unsub;
    },[]);

    const value ={
        currentuser,
        signinwithgoogle,
        signoutwithgoogle
    }

    return(
        <Authcontext.Provider value={value}>
            { !loading && children}
        </Authcontext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(Authcontext);
}