import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

const auth = getAuth(app)
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    console.log(user)
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth , email, password)
    }
    const userLogin =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin =() => {
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } 
          });
    }, [])
    const authInfo = {createUser, userLogin, googleLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;