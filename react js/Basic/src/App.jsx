function App() {
  let name = "Vijay Kumar";
  let branch = "CS";
  let age = prompt("Please enter your age:");
  // // Method 1
  // if (age < 18) {
  //   return (
  //     <>
  //       <h1>Name: {name}</h1>
  //       <h2>Age: {age}</h2>
  //       <p>My branch is {branch}</p>
  //       <button>Not Watch Video</button>
  //     </>
  //   )
  // }
  // return (
  //   <>
  //     <h1>Name: {name}</h1>
  //     <h2>Age: {age}</h2>
  //     <p>My branch is {branch}</p>
  //     <button>Watch Video</button>
  //   </>
  // )


  // // Method 2
  // return (
  //   <>
  //     Name: {name}
  //     <br />
  //     Age: {age}
  //     <br />
  //     My branch is {branch}
  //     <br />
  //     <button>{age >= 18 ? "Watch" : "NOT Watch"}</button>
  //     <br />
  //   </>
  // )



  // // Method 3
  // let canWatch = "not watch";
  // if (age >= 18) {
  //   canWatch = "Watch";
  // }

  // return (
  //   <>
  //     Name: {name}
  //     <br />
  //     Age: {age}
  //     <br />
  //     My branch is {branch}
  //     <br />
  //     <button>{canWatch}</button>
  //     <br />
  //   </>
  // )


  // Method 4
  const canWatch = () => {
    if (age >= 18) {
      return "Watch Now";
    }
    else {
      return "Dont Watch";
    }
  }

  return (
    <>
      Name: {name}
      <br />
      Age: {age}
      <br />
      My branch is {branch}
      <br />
      <button>{canWatch()}</button>
      <br />
    </>
  )
}


export default App