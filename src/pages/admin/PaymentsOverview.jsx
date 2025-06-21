const PaymentsOverview = () => {
    // Placeholder data
    const payments = [
        { id: 1, user: 'Alice', amount: 120.00, date: '2024-06-01', status: 'Completed' },
        { id: 2, user: 'Bob', amount: 75.50, date: '2024-06-02', status: 'Pending' },
        { id: 3, user: 'Charlie', amount: 200.00, date: '2024-06-03', status: 'Failed' },
    ];

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Payments Overview</h1>
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginTop: '1rem'
            }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>User</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Amount</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map(payment => (
                        <tr key={payment.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{payment.id}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{payment.user}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>${payment.amount.toFixed(2)}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{payment.date}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{payment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentsOverview;