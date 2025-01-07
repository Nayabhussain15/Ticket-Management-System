import React from 'react'
import { useNavigate } from 'react-router-dom'

const AfterLogin = () => {



const navigate = useNavigate()
const handleCreateTickets=()=>{
navigate('/Create')
}
const handleViewTickets=()=>{
navigate('/AllTickets')
}
const handleLogout=()=>{
    navigate('/')
}

  return (
    <div className='container w-50 pt-2' >
            <nav class="navbar mt-2 ">
  <div class="container-fluid">
  <h4 className='text-center mt-2'>TicketSystem</h4>

    <div className='display-flex '>
    <button  onClick={handleLogout} className='me-2 '><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mb-1 bi bi-door-closed-fill" viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>Log out</button>
    </div>
  </div>
</nav>
<h1 className='text-center mt-5'>What do you need help with?</h1>
<h5 className='text-center'>Please choose from an option below</h5>
    <div class="d-grid gap-2 mt-5">
  <button onClick={handleCreateTickets} class="btn btn-outline-success w-" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class=" mb-1 bi bi-ticket-detailed" viewBox="0 0 16 16">
  <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z"/>
  <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z"/>
</svg> Create New Ticket</button>
  <button onClick={handleViewTickets} class="btn btn-outline-success w-100" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="mb-1 bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
</svg> View Your Ticket </button>
</div>
    </div>
  )
}

export default AfterLogin
