import React from 'react';

const OrderDetails = () => {
    // Placeholder data
    const order = {
        id: 'ORD123456',
        date: '2024-06-10',
        status: 'Shipped',
        items: [
            {
                name: 'Blue Denim Jacket',
                quantity: 1,
                price: 59.99,
            },
            {
                name: 'White T-Shirt',
                quantity: 2,
                price: 19.99,
            },
        ],
        total: 99.97,
        shippingAddress: '123 Main St, Springfield, USA',
    };

    return (
        <div style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
            <h2>Order Details</h2>
            <div>
                <strong>Order ID:</strong> {order.id}
            </div>
            <div>
                <strong>Date:</strong> {order.date}
            </div>
            <div>
                <strong>Status:</strong> {order.status}
            </div>
            <div>
                <strong>Shipping Address:</strong> {order.shippingAddress}
            </div>
            <h3>Items</h3>
            <ul>
                {order.items.map((item, idx) => (
                    <li key={idx}>
                        {item.name} &times; {item.quantity} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <div>
                <strong>Total:</strong> ${order.total.toFixed(2)}
            </div>
        </div>
    );
};

export default OrderDetails;