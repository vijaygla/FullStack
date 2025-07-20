const person = {
  name: "Vijay",
  age: 20
};

function greet(greeting, age) {
  console.log(`${greeting}, ${this.name} your age is ${age}`);
}

greet.call(person, "Hello", person.age); // Output: Hello, Vijay your age is 20

greet.apply(person, ["Hi", person.age]); // Output: Hi, Vijay your age is 20

const boundGreet = greet.bind(person, "Namaste", person.age);
boundGreet(); // Output: Namaste, Vijay your age is 20
