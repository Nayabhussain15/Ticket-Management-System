import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

const Create = () => {
const [name , setname]=useState()
const [email , setemail]=useState()
const [product , setproduct]=useState()
const [description , setdescription]=useState()

const navigate = useNavigate()

const handlecreate= async(e)=>{
  e.preventDefault();
try{
  const userdata = {name ,email , product , description}
  const response = await axios.post("http://localhost:7000/createticket" , userdata)
  
  if(response.data){
    localStorage.setItem("createddata" , JSON.stringify(response.data))
    console.log("user added sucessfully" , response.data)
    navigate('/AfterLogin')
  }
}
catch(error){
  console.log(error)
  toast.error("data is already exist")
}
}

    const handleBackbtn=()=>{
        navigate('/AfterLogin')
    }
  return (
    <div className="container w-50" style={{justifyItems:'center',marginTop:'20px' }}>
      <ToastContainer></ToastContainer>
              <nav className="navbar">
  <div className="container-fluid ">
  <button onClick={handleBackbtn}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className=" bi bi-skip-backward-fill" viewBox="0 0 16 16">
  <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5"/>
</svg> Back</button>
  </div>
</nav>
    <form onSubmit={handlecreate}>
            <h1 className="text-center mb-4">Create New Ticket</h1>
            <h4 className="text-center mb-5">Please fill out te form below</h4>
            <div className="mb-3">
              <label  className="form-label">Customer Name</label>
              <input type="text" className="form-control" value={name} onChange={(e)=>setname(e.target.value)} id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Customer Email</label>
              <input type="email" className="form-control" value={email} onChange={(e)=>setemail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label  className="form-label">Product</label>
              <input type="text" className="form-control" value={product} onChange={(e)=>setproduct(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Description of the issue</label>
              <input type="text" className="form-control" value={description} onChange={(e)=>setdescription(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>             
        
      </div>

  )
}

export default Create
