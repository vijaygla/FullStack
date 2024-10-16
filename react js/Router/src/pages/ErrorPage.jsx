import "../component/layout/Header.css";
import { useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1);
    }

    return (
        <>
            <h1>error 404 page not found</h1>
            <button className="errorbtn" onClick={handleNavigate} >Go Back</button>
        </>
    )
}

