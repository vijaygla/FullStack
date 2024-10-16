import "./EV.css";

export const EventPropgation = () => {
    const handleGrandParent = () => {
        console.log("GrandParent clicked");
    }

    const handleParentClick = () => {
        console.log("parent clicked");
    }

    const handleChildClick = () => {
        console.log("Child clicked");
    }

    return (
        <>
            <section className="main-div">
                <div className="g-div" onClick={handleGrandParent}>
                    <div className="p-div" onClick={handleParentClick}>
                        <button className="c-div" onClick={handleChildClick}>Child Div</button>
                    </div>
                </div>
            </section>
        </>
    )
}
