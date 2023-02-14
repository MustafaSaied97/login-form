import React,{useState,useContext,useEffect} from "react";
import {AuthContext} from "./context/AppWithProvider"
import Alert from "./alert";

export default  function Main(props) {
    const[user,setUser]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[visbleIcon,setVisbleIcon]=useState(false)
    const authContext=useContext(AuthContext)
    
    const[validUser,setValidUser]=useState('default')
    const[validEmail,setValidEmail]=useState('default')
    const[validPassword,setValidPassword]=useState('default')

    function toggleVisbleIcon(){
        if(visbleIcon==false){
            setVisbleIcon(true)
        }
        else{
            setVisbleIcon(false)
        }   
    }
    function getVisibility(change){
        if(change=='input'){
           return visbleIcon?  "text":"password"
        }else if(change=='icon'){
            return visbleIcon?  "fa-solid fa-eye":"fa-solid fa-eye-slash"
        }   
    }
    
    
  



    
    function handleLogin(e){
        e.preventDefault();
        //validation  
        valiationForm()          
    }

    useEffect(()=>{
        if(validUser=='default' &&validEmail=='default' && validPassword=='default'){
            return;
        } 
        
        if(validUser=='no error' &&validEmail=='no error' && validPassword=='no error'){
            // console.log('hi')
            const token='key' //this token should get from api request
            //store data in local storage
            localStorage.setItem('token',token)
            localStorage.setItem('user',user)
            localStorage.setItem('email',email)
            localStorage.setItem('password',password)

            //store data in context
            authContext.setAuth({token,user,email,password})
        }
    },[validUser,validEmail,validPassword])

    function valiationForm(){
        //user validation
        if(user ==''){
            setValidUser('empty user')
        }else{
            setValidUser('no error')
        }
        //email validation
        let regEmail=/^([a-zA-Z0-9\.-]+)@([a-z0-9]+)[.]([a-z]{2,10})(.[a-z]{2,10})?$/
        if(email ==''){
            setValidEmail('empty email')
        }else if (!regEmail.test(email)){
            setValidEmail('your email must have this pattern example@gmail.com')
        }else{
            setValidEmail('no error')
        }
        //password validation
        let regPass=/[a-zA-Z]+/
        if(password ==''){
            setValidPassword('empty password')
        }else if(password.length <5){
            setValidPassword('minmum password must contains 5 characters')
        }else if(!regPass.test(password)){
            setValidPassword('password must contain letters')
        }else{
            setValidPassword('no error') 
        }
    }








    return ( 
        <>
        { props.page=='successful login'?

            <div className="badge bg-success fs-5 position-absolute  start-50 translate-middle text-wrap placeholder-wave" style={{width:"50%",marginTop:"20%"}}>
                welcom {authContext.auth.user} 
                <i className="fa-solid fa-hand  ms-1"></i>
            </div>

            :

            <div className="d-flex flex-column justify-content-center align-items-center">
                <form className="col-10  col-sm-6" > 
                    <input 
                    type="text"
                    required
                    className="form-control mt-3"
                    placeholder="user name" 
                    value={user}
                    onInput={e=> setUser(e.target.value)}
                    
                    />
                    {validUser=='default'||validUser=='no error'?  '' : <Alert message={validUser}/>}

                    <input
                    type="email" 
                    required
                    className="form-control mt-3" 
                    placeholder="email"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                    />
                    {validEmail=='default'||validEmail=='no error'?  '' : <Alert message={validEmail}/>}

                    <div className="position-relative mt-3">
                        <span className="btn me-1 p-0 position-absolute top-0 end-0  " onClick={toggleVisbleIcon}>
                            <i className={getVisibility("icon")}></i>
                        </span>
                        <input 
                            type={getVisibility("input")}
                            required
                            className="form-control" 
                            placeholder="password" 
                            value={password}
                            onChange={e=> setPassword(e.target.value)}
                        />
                    </div>
                    {validPassword=='default'||validPassword=='no error'?  '' : <Alert message={validPassword}/>}
                    
                    <br/>
                    <button
                    type="submit"
                    className="btn btn-outline-primary mt-3"
                    onClick={handleLogin}
                    >
                    Log In
                    </button>
                </form>
            </div>
        }
        </>
     );
}


