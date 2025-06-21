import React from 'react';

const AdminDashboard = () => {
    return (
        <div className="max-w-2xl mx-auto mt-16 p-8 bg-gradient-to-br from-gray-50 to-indigo-100 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-indigo-800 mb-4">Admin Dashboard</h1>
            <p className="text-gray-600 mb-6">Welcome to the admin dashboard. Here you can manage users, products, and view analytics.</p>
            {/* Add dashboard widgets or navigation here */}
        </div>
    );
};

export default AdminDashboard;