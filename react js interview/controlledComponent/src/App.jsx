import { useState } from "react"


function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = () => {
        if (!name || !email || !password) {
            alert("Please fill all fields");
            return;
        }
        alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
    }

  return (
    <>
        <form action="" method="get">   
            <input type="text" placeholder="enter your name" onChange={(event) => setName(event.target.value)}/>
            <br /><br />

            <input type="text" placeholder="enter your email" onChange={(event) => setEmail(event.target.value)}/>
            <br /> <br />

            <input type="text" placeholder="enter your password" onChange={(event) => setPassword(event.target.value )}/>
            <br /> <br />

            <button onClick={handleSubmit}>Submit form</button>
        </form>

        <h2>Detail of user</h2>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <h3>{password}</h3>
    </>
  )
}

export default App
