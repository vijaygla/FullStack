import { useState } from "react";
import "./App.css";

const LoginForm = () => {
    const [message, setMessage] = useState(null);
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);

    const updateData = (type, value) => {
        setData({ ...data, [type]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }

            const result = await response.json();
            setMessage(result.msg || "Login successful");
            setError(null);
        } catch (err) {
            console.error("Error during login:", err);
            setError("Login failed. Please check your credentials.");
            setMessage(null);
        }
    };

    return (
        <div className="form-container">
            <h1>Login Form</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Email:
                        <input
                            type="email"
                            onChange={(e) => updateData("email", e.target.value)}
                            value={data.email}
                            required
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Password:
                        <input
                            type="password"
                            onChange={(e) => updateData("password", e.target.value)}
                            value={data.password}
                            required
                        />
                    </label>
                </div>

                <button type="submit">Submit</button>

                {error && <p className="error-message">{error}</p>}
                {message && <p className="success-message">{message}</p>}
            </form>
        </div>
    );
};

export default LoginForm;
