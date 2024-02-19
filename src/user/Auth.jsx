import React ,{useEffect, useState}from 'react'
import Login from './Component/login'
import Register from './Component/register'
import { Link } from 'react-router-dom';

const Auth = ()=>{
    const [isLoginVisible, setLoginVisible] = useState(true);
    

    const toggleComponent = () => {
      setLoginVisible((prevValue) => !prevValue);
    };
    return(
        <>
           {isLoginVisible ? 
           (<div><h5>Don't have an Account.<Link className='btn btn-outline-info mx-2' to={'/'}>Sign Up</Link></h5></div>) 
           : (<div><h5>Already have an Account.<Link className='btn btn-outline-info mx-2'  to={'/signin'}>Sign In</Link></h5></div>) }
            {isLoginVisible ? <Login /> : <Register />}
        </>
    )
}

export default Auth