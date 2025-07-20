const detail = {name: "Vijay Kumar", age: "20", email: "pmdhrs@gmail.com"};

`Method 1 for destructuring`
// const name = detail.name;
// const age = detail.age;
// const email = detail.email;


// Method 2 for desturing
const {name, age, email, city= "Patna"} = detail;

console.log(name);
console.log(age);
console.log(email);
console.log(city);
