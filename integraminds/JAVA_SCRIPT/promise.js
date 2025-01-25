// async and await 

async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    console.log(response);
    const data = await response.json();
    console.log(data);
}
fetchData();

try {
    throw new error("Vijay");
}
catch(error) {
    console.log(error.name);
}

