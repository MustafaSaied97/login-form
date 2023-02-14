import React,{useState,useEffect} from "react";
import App from "../App";

export const AuthContext=React.createContext()

export function AppWithProvider() {
    const[auth,setAuth]=useState('')
    useEffect(()=>{
        const token =localStorage.getItem('token')
        const user =localStorage.getItem('user')
        const email =localStorage.getItem('email')
        const password =localStorage.getItem('password')
        setAuth({token,user,email,password})
    },[])

    return (  
        <AuthContext.Provider value={{auth,setAuth}}>
            <App/>
        </AuthContext.Provider>
    );
}

