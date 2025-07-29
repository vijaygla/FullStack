import { useState } from "react";

function App() {
    const [name, changeName] = useState("Vijay Kumar");

    const changeNameHandler = (name) => {
        changeName(name);
    };

  return (
    <>
        <h1>Name: {name}</h1>
      <button onClick={() => changeNameHandler("Vijay Kumar Gupta")}>change name</button>
    </>
  );
}

export default App;
