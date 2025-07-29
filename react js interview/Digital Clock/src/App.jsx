import { useState } from 'react'
import { Clock } from './Clock'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Current Time</h1>
            <Clock />
        </>
    )
}

export default App
