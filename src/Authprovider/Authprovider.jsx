import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';

export const AuthContext=createContext(null);
const auth=getAuth(app)
const Authprovider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading] =useState(true)
    const createUser=(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn=(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe= onAuthStateChanged(auth,currentuser => {
            console.log(currentuser)
            setUser(currentuser)
            setLoading(false)
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
        logOut,
    }
    return (
        <AuthContext.Provider value={info}>
         {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;