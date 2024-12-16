import axios from 'axios';
import React, { useState } from 'react';

export default function Createuser() {
  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:""
});
const handleChange = (e)=>{
  setUser(prev=>({...prev,[e.target.name] : e.target.value}))
}
console.log(user)
const handleClick = async (e)=>{
  e.preventDefault();
  try {
    await axios.post("http://localhost:8080/api/user/adduser", user)
  } catch (error) {
    
  }
}
  return (
    <>
    <div className='text-center'>
     create User
    </div>
    <div>
      <input type="text"className='' placeholder='Enter your name' onChange ={handleChange} name="name"/>
      <input type="text"className='' placeholder='Enter your email'onChange ={handleChange}  name="email"/>
      <input type="text"className='' placeholder='Enter your phone'onChange ={handleChange}  name="phone"/>
      <button onClick={handleClick} className='text-primary'>Submit</button>
    </div>
    </>
  )
}
