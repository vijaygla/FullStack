import { useState } from "react"

export const Practice = () => {
    const [user] = useState([
        { name: "Alice", age: 20 },
        { name: "bon", age: 23 },
        { name: "bon", age: 23 },
        { name: "bon", age: 23 },
    ])

    return (
        <>
            <div className="main-div">
                <h1>User List</h1>
                <ul>
                    {user.map((currElem, index) => {
                        return (
                            <li key={index}>
                                {currElem.name} - {currElem.age} year old
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

