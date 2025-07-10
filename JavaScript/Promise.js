const data = { name: "Vijay Kumar", age: 20 };

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })
}

fetchData().then(data => {
    console.log("Data: ", data);
}).catch(error => {
    console.log(error);
})

