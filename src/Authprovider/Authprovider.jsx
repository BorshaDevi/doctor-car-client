import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';

export const AuthContext=createContext(null);
const auth=getAuth(app)
const Authprovider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading] =useState(true)
    const createUser=(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn=(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
        const unsubscribe= onAuthStateChanged(auth,currentuser => {
            console.log(currentuser)
            setUser(currentuser)
        })
        return () =>{
            return unsubscribe();
        } 

    },[])
   

    const info={
        user,
        loading,
        createUser,
        signIn,
    }
    return (
        <AuthContext.Provider value={info}>
         {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;