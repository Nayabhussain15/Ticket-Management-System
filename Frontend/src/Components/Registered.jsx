import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registered = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rewritePassword, setRewritePassword] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== rewritePassword) {
      toast.error("Passwords do not match!");
      return;
    }
    //debugger;
    try {
      const adduser = { name, email, password, rewritePassword };
      const response = await axios.post("http://localhost:7000/register", adduser);
      toast.success("Submited Sucessfully")
      
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log("User added successfully:", response.data);
        navigate('/')
      }
      
    } catch (error) {

        toast.error("already existing data");
      
      console.error("Error adding user:", error);
    }
  };


  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className='container w-50'>
        <nav className="navbar">
          <div className="container-fluid">
            <h4 className='mt-2'>
              TicketSystem
            </h4>
            <div className='d-flex'>
              <button className='me-2 text-center' onClick={() => navigate('/')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-in-right mb-1" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                  <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                </svg>
                Login
              </button>
            </div>
          </div>
        </nav>
        <form className='mt-5' onSubmit={handleSubmit}>
          <h1 className='text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="mb-1 bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
            Register
          </h1>
          <h3 className='text-center'>Please login to get support</h3>
          <div className="mb-3 mt-5">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder='Please enter your name' required />
          </div>
          <div className="mb-3">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder='Please enter your email' required />
          </div>
          <div className="mb-3">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder='Enter password' required />
          </div>
          <div className="mb-3">
            <input type="password" value={rewritePassword} onChange={(e) => setRewritePassword(e.target.value)} className="form-control" placeholder='Confirm password' required />
          </div>
          <button type="submit" className="btn btn-outline-success w-100" > Register  </button>
        </form>
      </div>
    </div>
  );
}

export default Registered;
