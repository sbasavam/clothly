import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/admin/AdminDashboard';
import ManageOrders from '../pages/admin/ManageOrders';
import ManageServices from '../pages/admin/ManageServices';
import PaymentsOverview from '../pages/admin/PaymentsOverview';
import UsersList from '../pages/admin/UsersList';

const AdminRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<AdminDashboard />} />
    <Route path="orders" element={<ManageOrders />} />
    <Route path="services" element={<ManageServices />} />
    <Route path="payments" element={<PaymentsOverview />} />
    <Route path="users" element={<UsersList />} />
  </Routes>
);

export default AdminRoutes;