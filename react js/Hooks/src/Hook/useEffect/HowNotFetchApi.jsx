import { useEffect, useState } from "react"

export const HowNotFetchApi = () => {
    const [apiData, setApiData] = useState([]);

    // useEffect handle the sideeffect of the react
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
            .then((data) => {
                setApiData(data);
            })
        .catch((error) => console.log(error));
    }, [])

    return (
        <>
            <div className="container effect-container">
                <ol>
                    API DATA:-----
                    {
                        apiData.map((currdata) => {
                            return <li key={currdata.id}> { currdata.title } </li>
                        })
                    }
                </ol>
            </div>
        </>
    )
}
