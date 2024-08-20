// Part 1

import React, { useState } from "react";

const App = () => {
  const profile = {
    name: "Vijay",
    age: 20,
    email: "",
    hobbies: ["reading", "coding", "playing"],
    address: {
      state: "Bihar",
      district: "Siwan",
      city: "Mathura",
    },
  };

  
  const [value, setValue] = useState(0);
  const inc = () => {
    setValue(value + 1);
    console.log(value + 1);
  };

  const dec = () => {
      setValue(value - 1);
      console.log(value - 1);
  }

  const reset = () => {
    setValue(0);
    console.log(value);
  }

  return (
    <div>
      <h1>Hello, {profile.name}</h1>
      <p>{profile.email || "No Email Provided"}</p>
      <p>{profile.age} years old</p>
      <h2>Hobbies</h2>
      Hobbies: {profile.hobbies[1]}
      <h2>Address</h2>
      <p>City: {profile.address.city}</p>
      <p>District: {profile.address.district}</p>
      <p>State: {profile.address.state}</p>
      <ul>
        <h2>Array Element into Unordered list</h2>
        {profile.hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
      <h2>Value: {value}</h2>
      <button onClick={inc}>Incrementer</button>
      <button onClick={dec}>Decrementer</button>
      <button onClick={reset}>Reset Button</button>
    </div>
  );
};

export default App;
