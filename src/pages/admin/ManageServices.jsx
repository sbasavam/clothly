import React, { useState, useEffect } from "react";

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    // Example fetch function (replace with your API)
    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setServices([
                { id: 1, name: "Dry Cleaning", price: 10 },
                { id: 2, name: "Laundry", price: 5 },
            ]);
            setLoading(false);
        }, 500);
    }, []);

    const handleDelete = (id) => {
        setServices((prev) => prev.filter((service) => service.id !== id));
    };

    return (
        <div>
            <h2>Manage Services</h2>
            {loading ? (
                <p>Loading services...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Price ($)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr key={service.id}>
                                <td>{service.name}</td>
                                <td>{service.price}</td>
                                <td>
                                    <button>Edit</button>
                                    <button onClick={() => handleDelete(service.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ManageServices;