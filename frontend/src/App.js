import React from 'react';
import './App.css';

import User from './pages/UserDaskboard.jsx'
import Side from './admin/components/Sidebar/Side.js'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx';
import Appoinmentform from './pages/Appointmentform.jsx';
import About from './admin/pages/About.jsx';
import Home from './pages/Home.jsx';



const App = () => {
  return (
    <>
    <Home/>
    {/* <About/> */}

    {/* <Home/> */}

    {/* <Side/> */}
    <Login/>
    {/* <Register/> */}
    
    </>
  );
};

export default App;