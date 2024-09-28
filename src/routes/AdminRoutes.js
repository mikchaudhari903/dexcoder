import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/admin/pages/dashboard/Dashboard';
import Login from '../components/admin/pages/Login';
import ContactUs from '../components/admin/pages/contact/contact-us';

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Admin login route */}
      <Route path="/" element={<Login />} />
      
      {/* Admin dashboard route */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default AdminRoutes;
