import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useLocation,Link } from 'react-router-dom';

const AllTickets = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [lastViewedTicket, setLastViewedTicket] = useState(null);

  // Extract last search (ticketId) from URL parameters if available
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lastTicketId = params.get('ticketId');
    if (lastTicketId) {
      setLastViewedTicket(lastTicketId);
    }
  }, [location.search]);

  useEffect(() => {
    axios.get("http://localhost:7000/createticket")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleLogout = () => {
    navigate('/');
  };



  return (
    <div className='container'>
      <nav className="navbar mt-2">
        <div className="container-fluid">
          <h4 className="mt-4">
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

      <div className='container mt-5'>
        {lastViewedTicket && (
          <div className="alert alert-info">
            Last viewed ticket ID: {lastViewedTicket}
          </div>
        )}

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Product</th>
              <th scope="col"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
  <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.product}</td>
                <td>
                  <Link
                  to={`/SingleTicket?ticketId=${user._id}`}
                    className='ps-5 pe-5 pt-1 btn btn-outline-primary pb-1' >
                    View
                  </Link>
                </td>
              </tr>
            ))}









          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTickets;
