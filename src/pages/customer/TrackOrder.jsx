import React from 'react';

const TrackOrder = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Track Your Order</h1>
            <form style={{ maxWidth: 400, marginTop: '2rem' }}>
                <label htmlFor="orderId" style={{ display: 'block', marginBottom: 8 }}>
                    Enter your Order ID:
                </label>
                <input
                    type="text"
                    id="orderId"
                    name="orderId"
                    placeholder="e.g. #123456"
                    style={{
                        width: '100%',
                        padding: '0.5rem',
                        marginBottom: '1rem',
                        borderRadius: 4,
                        border: '1px solid #ccc',
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '0.5rem 1.5rem',
                        borderRadius: 4,
                        border: 'none',
                        background: '#222',
                        color: '#fff',
                        cursor: 'pointer',
                    }}
                >
                    Track Order
                </button>
            </form>
        </div>
    );
};

export default TrackOrder;