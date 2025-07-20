async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        const data = await response.json();
        console.log("Data fetch Successfully:\n", data);
        
    } catch (error) {
        console.log(error);
    }
}

fetchData();

`
// A function that returns a Promise after 2 seconds
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
}

// Async function using await
async function showData() {
  console.log("Fetching...");
  const result = await fetchData(); // Waits for fetchData to complete
  console.log(result);
}

showData();
`

