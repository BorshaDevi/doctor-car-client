import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
import axios from 'axios';

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
            // const loggingUser=currentuser?.email || user?.email
            console.log(currentuser)
            setUser(currentuser)
            setLoading(false)
        if(user){
            axios.post('http://localhost:5000/token',{exist:user?.email},{withCredentials:true})
            .then(res => {
                console.log(res.data)
            })
        }
        else{
            axios.post('http://localhost:5000/logout',{exist:user?.email},{withCredentials:true})
            .then(res => {
                console.log(res.data)
            })
        }
        })
        return () =>{
            return unsubscribe();
        } 

    },[user])
   

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