function counter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },

        decrement: function() {
            count--;
            return count;
        },

        displayCount: function() {
            let message =  `Current count = ${count}`
            return message;
        }
    }
}

const myCounter = counter();

console.log(myCounter.displayCount());
console.log(myCounter.increment());
console.log(myCounter.displayCount());
