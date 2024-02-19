import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


const Register=()=>{
    const [email,setEmail]=useState();
    // const[image, setImage] = useState();
    const [password,setPassword]=useState();
    const[name, setName] = useState();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
      
        if (!name) {
          alert("Please enter Name.");
        } else if (!email) {
          alert("Please enter Email-Id.");
        } else if (!password) {
          alert("Please enter Password.");
        }
       else {
          // Create a FormData object
          const formData = new FormData();
      
          // Append fields to FormData
          formData.append("name", name);
          formData.append("email", email);
          formData.append("password", password);
        //   formData.append("image", image.files);
      
          // Send FormData using axios
          axios.post(`https://backend-for-crud.onrender.com/register`, formData)
            .then(result => {
              console.log(result);
              if (result.status === 200) {
                alert("Registered Successfully!");
                navigate('/signin');
              }
            })
            .catch(err => console.log(err.message));
        }
      };
    
    return(
        <>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
           <div className="mx-auto w-50 bg-white rounded p-3 align-items-center ">
           <form>
                <div><h5>Already have an Account.<Link className='btn btn-outline-info mx-2'  to={'/signin'}>Sign In</Link></h5></div>
                <h3>Sign Up</h3>
                <div className="form-group">
                <label htmlForfor="email">Name:</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-group">
                <label htmlForfor="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                <label htmlForfor="age">Password:</label>
                <input type="password" className="form-control"  id="password" placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                {/* <div className="form-group">
                <label htmlForfor="age">Image:</label>
                <input type="file" className="form-control"  id="img" placeholder="Select image" onChange={(e)=>setImage(e.target.files[0])} />
                </div> */}
                <button type="button" onClick={handleRegister} className="btn btn-success my-3 float-end">Submit</button>
            </form>
            </div>
            </div>
        </>
    )
}

 export default Register