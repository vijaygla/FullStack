let weakMap = new WeakMap();

let key1 = {};
let key2 = {};

weakMap.set(key1, "Private data 1");
weakMap.set(key2, "Private data 2");

console.log(weakMap.get(key1)); // "Private data 1"

console.log(weakMap.get(key2));
