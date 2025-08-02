import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null); 

  const inputHandler = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow';
    inputRef.current.style.color = 'red';
  };

  return (
    <>
      <h1>useRef Hook</h1>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        ref={inputRef}
      />
      <button onClick={inputHandler}>Handle input using useRef</button>
    </>
  );
}

export default App;
