import { useState } from "react";
import api from './axios';
import "./App.css";

const RegistrationForm = () => {
    const [message, setMessage] = useState(null);
    const [data, setData] = useState({
        username: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState(null);

    const updateData = (type, value) => {
        setData({ ...data, [type]: value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/register", data);
            console.log(data);
            const result = response.data;
            console.log('result: ', result);
            setMessage("Registration successful!");
            setError(null);
        } catch (err) {
            console.error('Error during registration:', err);
            setError("Registration failed. Please try again.");
            setMessage(null);
        }
    };

    return (
        <div className="form-container">
            <h1>Register Form</h1>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label>
                        Username:
                        <input
                            type="text"
                            value={data.username}
                            onChange={(e) => updateData("username", e.target.value)}
                            required
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Email:
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => updateData("email", e.target.value)}
                            required
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Phone Number:
                        <input
                            type="number"
                            value={data.phonenumber}
                            onChange={(e) => updateData("phonenumber", e.target.value)}
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Password:
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) => updateData("password", e.target.value)}
                            required
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Confirm Password:
                        <input
                            type="password"
                            value={data.confirmPassword}
                            onChange={(e) => updateData("confirmPassword", e.target.value)}
                            required
                        />
                    </label>
                </div>

                {error && <p className="error-message">{error}</p>}
                {message && <p className="success-message">{message}</p>}

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
