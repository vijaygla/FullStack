import React, { useEffect, useState } from 'react'

export const Clock = () => {

    const [time, setTime] = useState(0);
    const [date, setDate] = useState();

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, [])


    useEffect(() => {
        setInterval(() => {
            setDate(new Date().toLocaleDateString());
        }, 1);
    }, [])

    return (
        <>
            <h2>Time: {time}</h2>
            <h2>Date: {date}</h2>
        </>
    )
}
