import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/customer/Dashboard';
import BookService from '../pages/customer/BookService';
import OrderDetails from '../pages/customer/OrderDetails';
import TrackOrder from '../pages/customer/TrackOrder';
import Profile from '../pages/customer/Profile';
import Addresses from '../pages/customer/Addresses';
import LoginRegister from '../pages/customer/LoginRegister';
import AllOrder from '../pages/customer/AllOrders';
import React from 'react';

const CustomerRoutes = ({ setIsLoggedIn }) => (
  <Routes>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="book" element={<BookService />} />
    <Route path="order/:id" element={<OrderDetails />} />
    <Route path="order" element={<AllOrder />} />
    <Route path="track" element={<TrackOrder />} />
    <Route path="profile" element={<Profile />} />
    <Route path="addresses" element={<Addresses />} />
    <Route path="login" element={<LoginRegister setIsLoggedIn={setIsLoggedIn} />} />
  </Routes>
);

export default CustomerRoutes;
