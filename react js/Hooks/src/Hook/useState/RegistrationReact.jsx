//* Using Object State with Spread Operator
//todo  Tasks:
//? Refactor the registration form to use a single object (formData) as the initial state.
//? Update input fields to use object properties.
//? Use the spread operator to update the form data state efficiently.
//? Discuss the benefits of using object state over multiple state variables.

import "./index.css";
import { useState } from "react";

export const RegistrationReact = () => {
    // State with initial form data
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });

    // Handle input changes with spread operator for form state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user); // Output form data in console
    };

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>

                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        required
                        value={user.firstName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        required
                        value={user.lastName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        required
                        value={user.email}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        required
                        value={user.password}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="phone">
                        <b>Phone Number</b>
                    </label>
                    <br />
                    <input 
                        type="phone"
                        name="phoneNumber"
                        placeholder="9876543211"
                        required
                        value={user.phoneNumber}
                        onChange={handleInputChange}
                    />

                    <p>
                        By creating an account you agree to our{" "}
                        <a href="#" style={{ color: "dodgerblue" }}>
                            Terms & Privacy
                        </a>
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="btn">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>

            <section
                className="summary"
                style={{ textAlign: "center", marginTop: "30px" }}
            >
                <p>
                    Hello, my name is{" "}
                    <span>
                        {user.firstName} {user.lastName}
                    </span>
                    . My email address is <span>{user.email}</span> and my phone number is{" "}
                    <span>{user.phoneNumber}</span>.
                </p>
            </section>
        </>
    );
};
