import React from 'react';

const TrackOrder = () => {
  return (
    <div className="min-h-screen pt-24 pb-10 px-4 bg-gray-50">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
          Track Your Order
        </h1>
        <form className="space-y-5">
          <div>
            <label
              htmlFor="orderId"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Enter your Order ID:
            </label>
            <input
              type="text"
              id="orderId"
              name="orderId"
              placeholder="e.g. #123456"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-all shadow"
          >
            Track Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrackOrder;
