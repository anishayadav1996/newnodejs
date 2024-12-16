import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Update() {
  const location = useLocation(); // Get data passed from User component
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: location.state?.id || "",
    name: location.state?.name || "",
    email: location.state?.email || "",
    phone: location.state?.phone || "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/user/update/${user.id}`, user);
      alert("User updated successfully!");
      navigate("/"); // Redirect back to User list
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
        <button type="submit" className="bg-primary text-white px-4 py-2">
          Update User
        </button>
      </form>
    </div>
  );
}
