import React,{useContext} from "react";
import {AuthContext} from "./context/AppWithProvider"
import Header from "./header";
import Main from "./main";

export default function App() {  
    const authContext=useContext(AuthContext)
    return (    
        <div className="container  position-relative ">
            {authContext.auth.token? 
                <> 
                    <Header page={'successful login'}/> 
                    <Main page={'successful login'} /> 
                </>
                :
                <> 
                    <Header/> 
                    <Main/> 
                </>
            }
        </div> 
    );
}

