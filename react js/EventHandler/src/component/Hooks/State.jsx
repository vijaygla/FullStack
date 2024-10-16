import { useState } from "react";

export const State = () => {
    // // NOT WORKING BY REACT wrong way to update any values on ui
    // let value = 0;
    // const handleButtonClick = () => {
    //     value++;
    //     console.log("Value:",value);
    // }


    const [count, setCount] = useState(0);

    const incrementer = () => {
        setCount(() => count + 1)
    }

    const decrementer = () => {
        setCount(() => count - 1);
    }

    const reseter = () => {
        setCount(0);
    }

    return (
        <>
            <section className="main-div">
                <h1>{count}</h1>
                <button onClick={incrementer}>Increment Button</button>
                <button onClick={decrementer}>Decrement Button</button>
                <button onClick={reseter}>Reset Button</button>
            </section>
        </>
    )
}
