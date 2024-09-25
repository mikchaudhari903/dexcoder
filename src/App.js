import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  return (
    <Router>
      <Routes>
         {/* Define a base path for user routes */}
         <Route path="/*" element={<UserRoutes />} />

        {/* Define a base path for admin routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
        
      </Routes>
    </Router>
  );
}

export default App;
