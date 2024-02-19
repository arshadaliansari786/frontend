
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from "../Component/Navbar";
const Dashboard = () =>{
    const [users,setUsers]=useState([]);
    const [IsLoading,setIsLoading]=useState(true)
    const navigate = useNavigate();
    const handleDelete=(id) =>{
    
        axios.delete(`https://backend-for-crud.onrender.com/deleteUser/${id}`)
        .then(result=>{console.log(result)
        alert("deleted");
        navigate('/dashboard')
    
    })
        .catch(err=>alert("Error"))
    }

    useEffect(()=>{
        axios.get('https://backend-for-crud.onrender.com/')
        .then(result=>{
            setUsers(result.data)
            console.log(result.data)
            setIsLoading(false)
        }
        )
        .catch(err => console.log(err))
    },[])

    return(
        <>
        <Navbar/>
        {!IsLoading &&  (<div className="loader">
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
           <div className="mx-auto w-75 bg-white rounded-3 p-3 align-items-center ">
            {/* <Link to={'/create'} className="btn btn-success rounded-3">Add +</Link> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{
                              return  <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                 
                                    <td className="">
                                    <Link to={`/update/${user._id}`} className="btn btn-success rounded-3 mx-1" >Edit</Link>
                                    <button className="btn btn-danger rounded-3" onClick={(e)=>handleDelete(user._id)} >Delete</button>&nbsp; &nbsp;
                                    </td>

                                </tr>
                            })
                        }
                    </tbody>

                </table>
           </div>
        </div>
        </div>)}
    
        </>
    )
}


export default Dashboard