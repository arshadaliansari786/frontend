import React, {useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const UpdateUsers = () =>{
    const{id}=useParams()
    const[name, setName] = useState();
    const [email, setEmail] = useState();   
    const [age, setAge] = useState()
   

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('https://backend-for-crud.onrender.com/getuser/'+id)
        .then(result=>{
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err => console.log(err))
    },[])

    const handleUpdate=(e)=>{
        console.log(name)
             e.preventDefault();
             axios.put(`https://backend-for-crud.onrender.com/update/${id}`,{name:name,email: email})
             .then(result=>
                 console.log(result),
                 alert("Updated Successfully"),
                 navigate('/dashboard')
             )
             .catch(err=>console.log(err.message))
         }
    return(
        <>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
           <div className="mx-auto w-50 bg-white rounded p-3 align-items-center ">
            <form onSubmit={handleUpdate}>
                <h3>Update User</h3>
                <div className="form-group">
                <label htmlForfor="name">Name:</label>
                <input type="text" className="form-control" id="name" required placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="form-group">
                <label htmlForfor="email">Email:</label>
                <input type="email" className="form-control" id="email" readOnly placeholder="Enter your email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
               
                <button type="submit" className="btn btn-success my-3 float-end">Update</button>
            </form>
            </div>
        </div>
        </>
    )
}


export default UpdateUsers