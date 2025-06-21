import { Routes, Route } from 'react-router-dom';
import Home from '../pages/shared/Home';
import NotFound from '../pages/shared/NotFound';
import CustomerRoutes from './CustomerRoutes';
import AdminRoutes from './AdminRoutes';
import React from 'react';


const AppRoutes = ({ setIsLoggedIn }) => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user/*" element={<CustomerRoutes setIsLoggedIn={setIsLoggedIn} />} />
    <Route path="/admin/*" element={<AdminRoutes />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;