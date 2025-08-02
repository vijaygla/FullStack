import { Counter } from "./Counter"
import React, { useState } from 'react'

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Counter count = {count} />
            <button onClick={() => setCount(count+1)}>Counter</button>
        </>
    )
}

export default App
