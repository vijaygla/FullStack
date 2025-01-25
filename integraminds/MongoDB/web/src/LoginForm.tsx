import React from "react";
import axios from "axios";

const g_url = "http://127.0.0.1:5000/";
const LoginForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [serverMsg, setServerMsg] = React.useState("");
  const [className, setClassName] = React.useState("");
  const [email, setEmail] = React.useState("s1@gmail.com");
  const [password, setPassword] = React.useState("p1");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);

    const response = await axios({
      method: "post",
      url: `${g_url}/login`,
      data: {
        email,
        password,
      },
    });
    console.log("Handle Submit Response:", response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
