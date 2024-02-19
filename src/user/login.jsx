import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login=()=>{
    const [email,setEmail]=useState();
    const[password, setPassword] = useState();
    const navigate = useNavigate()
    const handleLogin=(e)=>{
        if(!email){
            alert("Please enter Email-Id.")
        }
        else if(!password){
            alert("Please enter Password.")
        }
        else{
            console.log(email)
            e.preventDefault();
            axios.post(`https://backend-for-crud.onrender.com/login`,{email,password})
            .then(result=>
              {  console.log(result)
               if(result.status==200 && result.data==="Success"){
                   navigate('/dashboard')
               }
               else{
                   alert(result.data)
               }
              }
            )
            .catch(err=>console.log(err.message))
        }
    }
    
    return(
        <>
             <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
           <div className="mx-auto w-50 bg-white rounded p-3 align-items-center " style={{transform: "translate3d('799.6px','437.5px', '0px')"}}>
            <form>
               <h5>Don't have an Account.<Link className='btn btn-outline-info mx-2' to={'/'}>Sign Up</Link></h5>
                <h3>Sign In</h3>
                <div className="form-group">
                <label htmlForfor="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                <label htmlForfor="age">Password:</label>
                <input type="password" className="form-control"  id="age" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button type="button" onClick={handleLogin} className="btn btn-success my-3 float-end">Sign In</button>
            </form>
            </div>
            </div>
        </>
    )
}


export default Login