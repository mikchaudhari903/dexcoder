import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/user/pages/Home';
import About from '../components/user/pages/About';
import Contact from '../components/user/pages/Contact';
import Protfolio from '../components/user/pages/Portfolio';
import Services from '../components/user/pages/Services';
import Login from '../components/user/pages/Login';  
import Register from '../components/user/pages/Register';

const UserRoutes = () => {
    return (
      <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/protfolio" element={<Protfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    );
  };
  
  export default UserRoutes;