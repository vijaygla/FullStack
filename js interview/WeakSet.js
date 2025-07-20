let weakSet = new WeakSet();

let obj1 = { name: "Vijay" };
let obj2 = { name: "Copilot" };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true

