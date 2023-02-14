import React,{useContext} from "react";
import {AuthContext} from "./context/AppWithProvider"

export default function Header(props) {
    const authContext=useContext(AuthContext)
    function handleLogout(){
        //remove data from local storage
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('email')
        localStorage.removeItem('password')
    
        //remove data from in context
        authContext.setAuth("")
    }
    return (  
        <>
        {props.page=='successful login'? 
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{transform:'rotateZ(180deg)'}}><i className="fa-solid fa-arrow-right-to-bracket" ></i></a>
                    <span className="badge bg-success fs-6 text-wrap" style={{opacity: ".6"}}>Email: {authContext.auth.email}</span>
                    <button className="btn btn-outline-danger p-1 mt-1" onClick={handleLogout}>Log Out</button>
                </div>
             </nav> 
            :
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand"><i className="fa-solid fa-arrow-right-to-bracket" ></i></a>
                </div>
            </nav>
        }
        </>       
    );
}
