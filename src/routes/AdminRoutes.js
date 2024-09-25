import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/admin/pages/dashboard/Dashboard';
import Login from '../components/admin/pages/Login';

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Admin login route */}
      <Route path="/" element={<Login />} />
      
      {/* Admin dashboard route */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AdminRoutes;
