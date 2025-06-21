// Profile.jsx
import React from 'react';

const Profile = () => (
  <div className="min-h-screen p-6 bg-gray-50">
    <h2 className="text-xl font-bold text-indigo-700 mb-4">Your Profile</h2>
    <div className="bg-white p-4 rounded shadow">
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Email:</strong> john@example.com</p>
      <p><strong>Phone:</strong> +91 9876543210</p>
    </div>
  </div>
);

export default Profile;