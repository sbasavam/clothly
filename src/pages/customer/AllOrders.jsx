import React, { useEffect, useState } from "react";

const PreviousOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching order history from backend
    const fetchOrders = async () => {
      // Replace this with your API call
      const dummyOrders = [
        {
          id: "ORD001",
          service: "Dry Cleaning",
          date: "2024-06-10",
          status: "Delivered",
          total: "₹350",
        },
        {
          id: "ORD002",
          service: "Laundry",
          date: "2024-06-01",
          status: "Delivered",
          total: "₹500",
        },
        {
          id: "ORD003",
          service: "Steam Ironing",
          date: "2024-05-20",
          status: "Cancelled",
          total: "₹150",
        },
      ];
      setOrders(dummyOrders);
    };

    fetchOrders();
  }, []);

  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">Previous Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">No past orders found.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-100 text-indigo-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase">Service</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.service}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PreviousOrders;
