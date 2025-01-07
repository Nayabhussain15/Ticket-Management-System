import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AllTickets from "./AllTickets";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams, useSearchParams } from "react-router-dom";

const SingleTicket = () => {
  const [ticket, setTicket] = useState([]);
  const ticketId ="";
  //debugger;
  
  //console.log(response);

  const navigate = useNavigate();

  const btv = () => {
    navigate("/AllTickets");
  };
  const btl = () => {
    navigate("/");
  };
  
  const onTicketClose = (e) => {
    e.preventDefault();
   // dispatch(closeTicket(ticketId));
    toast.success("Ticket Closed Successfully");
    navigate("/AllTickets");
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
  const token = query.get('ticketId')
  const ticketId =token;
  const response = axios.get("http://localhost:7000/createticket?id=" + token).then(res=>{
    console.log(res.data[0]);
    setTicket(res.data[0]);
  })
   
  }, [ticketId]);

  const handleLogout=()=>{
    navigate('/')
  }
  const handleBackbtn=()=>{
    navigate("/AllTickets");
  }
  const handleCreateTickets=()=>{
    navigate("/AllTickets");
  }

  return (
    <div className="container">
     <nav className="navbar mt-2">
        <div className="container-fluid">
          <h4 className="mt-2" >
            TicketSystem
          </h4>
          <div className='display-flex'>
            <button onClick={handleLogout} className='me-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mb-1 bi bi-door-closed-fill" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
              Log out
            </button>
          </div>
        </div>
      </nav>
      <hr />
      <div className="container-fluid mt-5">
  <button className="mt-3 mb-3 ps-3 pe-3 " onClick={handleBackbtn}> <svg xmlns="http://www.w3.org/2000/svg" width="17" height="30" fill="currentColor" className=" bi bi-skip-backward-fill" viewBox="0 0 16 16">
  <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5"/>
</svg> Back</button>
  </div>
  <div>
    <div>
      <h2 className="mb-3">Ticket ID: {ticket._id}</h2>
      <h5 className="mb-3">Date submitted: {new Date(ticket.createdAt).toLocaleDateString()}</h5>
      <h5 className="mb-1">Product: {ticket.product}</h5>
    </div>
    <hr />
    <div className="p-3 mb-2 bg-secondary text-white rounded">
      <h5>Description of issue</h5>
      <h6>{ticket.description}</h6>
    </div>
    <div>
    <button onClick={handleCreateTickets} class=" btn btn-outline-danger w-100 mt-3" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class=" mb-1 bi bi-ticket-detailed" viewBox="0 0 16 16">
  <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z"/>
  <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z"/>
</svg> Create New Ticket</button>
    </div>

  </div>
    </div>
  );
};

export default SingleTicket;