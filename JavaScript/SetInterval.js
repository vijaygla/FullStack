const timer = setInterval(() => {
    console.log(`Hello after every 2 seconds`);
}, 2000);

setTimeout(() => {
    clearInterval(timer);
}, 10100);

