import React from 'react';
import { FiPackage, FiTruck, FiCalendar, FiMapPin, FiStar, FiClock } from 'react-icons/fi';

const Dashboard = () => {
  // Sample data - replace with real API calls
  const activeOrders = [
    { id: '#CL-2468', status: 'Processing', progress: 40, pickupTime: 'Today, 3-5 PM' },
    { id: '#CL-2469', status: 'In Transit', progress: 75, pickupTime: 'Tomorrow, 10-12 AM' }
  ];

  const recentServices = [
    { type: 'Wash & Fold', date: '15 May 2024', rating: 4 },
    { type: 'Premium Ironing', date: '10 May 2024', rating: 5 }
  ];

  return (
    <div className="max mx-auto">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white shadow-lg mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
        <p className="opacity-90">You've completed 12 services this quarter</p>
        <div className="flex gap-4 mt-4">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Loyalty: Gold Tier</span>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Wallet: ₹1,250</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
            <FiCalendar className="text-indigo-600" /> New Service
          </h2>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
            Book Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
            <FiTruck className="text-indigo-600" /> Track Order
          </h2>
          <button className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-3 px-4 rounded-lg font-medium transition-colors">
            View Status
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
            <FiMapPin className="text-indigo-600" /> My Address
          </h2>
          <p className="text-sm text-gray-600 mb-3">Office 22, Tech Park, Bangalore</p>
          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            Manage Addresses →
          </button>
        </div>
      </div>

      {/* Active Orders */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="flex items-center gap-2 text-xl font-semibold mb-6">
          <FiPackage className="text-indigo-600" /> Active Orders
        </h2>
        
        {activeOrders.map(order => (
          <div key={order.id} className="mb-6 last:mb-0">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{order.id}</span>
              <span className={`px-2 py-1 text-xs rounded-full ${
                order.progress < 50 ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'
              }`}>
                {order.status}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
              <FiClock size={14} />
              <span>Pickup: {order.pickupTime}</span>
            </div>
            <progress 
              value={order.progress} 
              max="100" 
              className="w-full h-2 rounded-full [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-indigo-600"
            />
          </div>
        ))}
      </div>

      {/* Recent Services */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="flex items-center gap-2 text-xl font-semibold mb-6">
          <FiStar className="text-indigo-600" /> Recent Services
        </h2>
        <div className="space-y-4">
          {recentServices.map((service, index) => (
            <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0">
              <div>
                <p className="font-medium">{service.type}</p>
                <p className="text-sm text-gray-500">{service.date}</p>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    size={16} 
                    className={i < service.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;