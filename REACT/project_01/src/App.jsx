import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState({
    rem:""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCount((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(count); // Output form data in console
  };

  return (
    <>
      <form>
        <label htmlFor="text">
          Email:
        </label>
        <input
          type="text"
          name='email'
          placeholder='holder'
          value={count.rem}
          onClick={handleInputChange}
        />
      </form>
    </>
  )
}

export default App
