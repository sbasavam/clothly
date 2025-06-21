import React, { useEffect, useState } from "react";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Dummy fetch function, replace with your API call
    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setUsers([
                { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
                { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
                { id: 3, name: "Charlie", email: "charlie@example.com", role: "User" },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) return <div>Loading users...</div>;

    return (
        <div>
            <h2>Users List</h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Email</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.id}</td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.name}</td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.email}</td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;