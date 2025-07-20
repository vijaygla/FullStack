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
