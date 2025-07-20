let a = 20;
let b = 0;

let waitData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30)
    }, 2000);
})

waitData.then((data) => {
    b = data;
    console.log("🚀 ~ a+b:", a+b);
})

