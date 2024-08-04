import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null)
    const [loading, SetLoading] = useState(true)

    const signupUser=(email, password)=>{
        SetLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const signinUser=(email, password)=>{
        SetLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleUser=(aut, googleProvider)=>{
        SetLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut=()=>{
        SetLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            SetLoading(false)
            
        })
        return()=>{
            unSubscribe();
        }
    },[])


    const contactInfo = {user,signupUser,signinUser,logOut,loading,googleUser}
    
    return(
    <>
    <AuthContext.Provider value={contactInfo}>
        {children}
    </AuthContext.Provider>
    </>
    )

}
export default AuthProvider;