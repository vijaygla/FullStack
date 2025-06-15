const { log } = require('node:console');
const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('tank full', () => {
    console.log('Please turn of the motor!');
    setTimeout(() => {
        console.log("Remainder to stop the moter after 5 second using setTimeOut");
    }, 5000);
});


myEmitter.emit('tank full');
