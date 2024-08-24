import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Counter = () => {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(count + 1);
        console.log("Clicked:", count);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Update</button>
        </div>
    );
};
export default App


