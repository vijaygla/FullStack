import { useState } from 'react'

function App() {
    const users = [
        {
            name: "vijay",
            age: 20,
            email: "vijay@gmail.com"
        },
        {
            name: "vijay kumar",
            age: 'tweenty-five',
            email: "vijaykumar@gmail.com"
        },
        {
            name: "vijay kumar gupta",
            age: 20,
            email: "vijaykumargupta@gmail.com"
        }
    ]

    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default App
