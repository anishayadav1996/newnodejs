import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'; 

export default function User() {
  // Initialize user state as an empty array to avoid undefined issues with .map
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/user/fetch");
        console.log(res);
        setUser(res.data); // Ensure `res.data` matches the expected format
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <table className='table-auto'>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
        </tr>
        
     
      <div className="user">
        {/* Check if user array is empty */}
        {user.length > 0 ? (
            
          user.map((users) => (
            <tr className='px-12'>
                <td>{users.id}</td>
              <td> {users.name}</td>
              <td>{users.email}</td>
              <td>{users.phone}</td>
              <td className='bg-primary'><Link to ="">Edit</Link><Link to ="">Delete</Link>
              </td>
              </tr>
          ))
        ) : (
          <p>No users found.</p>
        )
        }
        
      </div>
      
      </table>
      <button className='bg-primary rounded-full px-6 text-h3 text-white'><Link to = "/createuser">Add User</Link></button>
    </div>
  );
}
