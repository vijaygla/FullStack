import { NavLink } from "react-router-dom"
import "./Header.css";

export const Header = () => {

    return (
        <>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/home" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movie" activeClassName="active">
                            Movie
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="sign-in-up">
                    <NavLink to="#" id="in">Sign In</NavLink>
                    <NavLink to="#" id="up">Sign Up</NavLink>
                </div>
            </nav>
        </>
    )
}

