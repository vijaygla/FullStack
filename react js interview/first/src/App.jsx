function Hello() {
  return <h1>Hello, World!</h1>;
}

function App() {
    function Hello() {
        return <h1>Hello, World!  from 2nd function</h1>;
    }

  return (
    <>
      <Hello />
    </>
  )
}

export default App
