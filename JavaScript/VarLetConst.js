console.log(num); // undefined
var num = 10;

`
console.log(num1); // ReferenceError: Cannot access 'num1' before initialization
let num1 = 10; 

console.log(num2); // ReferenceError: Cannot access 'num2' before initialization
const num2 = 10; 
`


/* var has function scope so it can not be excess out side the function also
const print = () => {
    var num3 = 10;
    console.log(`value of num3 inside the function = ${num3}`);
}
print(); // 10 

console.log(`value of num3 outside the function = ${num3}`);//ReferenceError: a is not defined
*/

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
    console.log (a);
    console.log(b);
    console.log(c);
}
console.log(a);  // 10 having functional scope as in above function declare and exceessible globally but when we declare in the function we cant excess it outside the function

`
// Let and const has block scope that can be excessible with in the block
console.log(b); // ReferenceError:b is not defined
console.log(c); // ReferenceError: c is not defined
`

// cant update const variable
// const variable = 20;
// variable = 10; 
// console.log(variable); // TypeError: Assignment to constant variable.


// can update the value of let variable
let variable = 10;
variable = 20; 
console.log(variable);


const s1 = Symbol("id");
const s2 = Symbol("id");
console.log(s1 == s2);   // false 
console.log(s1 === s2);  // false


console.log("Output using NAN");
console.log(isNaN('Hello'));
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(typeof(NaN));
