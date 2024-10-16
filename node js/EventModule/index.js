// Event Module
const eventEmiter = require("events");
const { emit } = require("process");
const { EventEmitter } = require("stream");
const event = new EventEmitter();

event.on("sayName" , () => {
    console.log("Your Name is Vijay");
});

event.emit("sayName");

event.on("sayCourse" , () => {
    console.log("Your are learning the Node js");
});

event.emit("sayCourse");

