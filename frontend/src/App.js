// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Createuser from './component/Createuser.jsx'
import User from './component/User.jsx'
import Update from './component/Update.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/createuser" element={<Createuser />} />
          <Route path="/" element={<User />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    
  );
}

export default App;
