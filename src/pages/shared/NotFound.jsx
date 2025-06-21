import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-100 to-pink-200">
        <h1 className="text-7xl font-extrabold text-red-500 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-4">The page you are looking for does not exist.</p>
        <Link to="/" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded shadow transition-all">
            Go to Home
        </Link>
    </div>
);

export default NotFound;