import React from 'react';

const Dashboard = () => {
    return (
        <div className="max-w-2xl mx-auto mt-16 p-8 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-indigo-700 mb-4">Customer Dashboard</h1>
            <p className="text-gray-600 mb-6">Welcome to your dashboard. Here you can view your orders, manage your profile, and explore new products.</p>
            {/* Add more dashboard features here */}
        </div>
    );
};

export default Dashboard;