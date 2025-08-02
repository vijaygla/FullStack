import React, { useEffect } from 'react'

export const Counter = ({count}) => {

    const handleCounter = () =>  {
        console.log("Counter clicked");
    }

    useEffect(() => {
        handleCounter();
    }, []);

    return (
        <>
            <h1>Count: {count}</h1>
        </>
    )
}

