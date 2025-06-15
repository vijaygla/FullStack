// Importing both named and default exports
import printAge, { printHello, simple } from "./firstModule.mjs";

// Using the functions
console.log("Hello",printHello("Vijay Kumar Gupta"));
console.log("Your age is",printAge(20));
simple();
