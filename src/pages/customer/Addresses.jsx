import React from 'react';

const Addresses = () => {
    return (
        <div className="max-w-xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center">
            <h1 className="text-2xl font-bold text-indigo-700 mb-2">Your Addresses</h1>
            <p className="text-gray-500 mb-4">You have not added any addresses yet.</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded transition-all shadow">
                + Add New Address
            </button>
            {/* Future: List addresses and add/edit/delete functionality */}
        </div>
    );
};

export default Addresses;