import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

export default function User() {
  // Initialize user state as an empty array to avoid undefined issues with .map
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/user/fetch");
        console.log(res);
        setUser(res.data); // Ensure `res.data` matches the expected format
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/user/delete/${id}`);
      console.log("User deleted successfully");
      //fetchUser(); // Refresh the user list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/update/${id}`); // Navigate to the update page with the user ID
  };
  

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
              <td className='bg-primary'>
              <button
                    onClick={() => handleEdit(users.id)} // Navigate with ID
                    className="bg-primary bg-blue-500 px-2 rounded"
                  >
                    Edit
                  </button>
              <button
                    onClick={() => deleteUser(users.id)} // Call deleteUser function
                    className="ml-4 text-white"
                  >
                    Delete
                  </button>
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
