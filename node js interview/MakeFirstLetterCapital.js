let s=  "vijay Kumar Gupta";

console.log("Original String--->", s);
console.log("At zero index--->", s.charAt(0));
console.log("Length of string--->", s.length);
console.log("At last index at 16 position--->", s.charAt(16));


console.log("First letter make capital---> ", s.charAt(0).toUpperCase() + s.slice(1, 17));
console.log("Last letter make capital---> ", s.slice(0, 16) + s.charAt(16).toUpperCase());
console.log("First & Last letter make capital---> ", s.charAt(0).toUpperCase() + s.slice(1, 16) + s.charAt(16).toUpperCase());

