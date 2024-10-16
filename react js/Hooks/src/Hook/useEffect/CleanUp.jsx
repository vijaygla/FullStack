import { useEffect, useState } from "react";
import "./index.css";

export const CleanUp = () => {
    const [count, setCount] = useState(0);

    // useEfect is use to make the changes in vision
    useEffect(() => {
        // use to set the value after a fixed gap
        setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
        // prev will take current value
        return (timer) => clearInterval(timer);
    }, [])


    return (
        <>
            <div className="container">
                <div className="counter">
                    <p>My Subscriber</p>
                    <div className="odometer" id="odometer">
                        {count}
                    </div>
                    <h3 className="tittle">
                        Subscribers <br /> RealTime Counter
                    </h3>
                </div>
            </div>
        </>
    )
}
