const arr = ["Vijay", "Kumar", "Sagar", "Kumar", "HelloWorld"];
console.log(arr[4]);
console.log(arr[arr.length-1]);
console.log(arr[arr.length/2]);


const arrr = [1,2,3,4,5,6,56];
console.log(arrr[5]);
const l = arrr.length;
console.log("Length:",l);




// create the new array 
const arr3 = [1,2,3,3,45,2,8,98,6];
console.log("arr3",arr3);
console.log("last integer:",arr3[Math.floor(arr3.length-1)]);
console.log("Middle integer:",arr3[Math.floor(arr3.length-1)/2]);


for(let i=0;i<arr3.length;i++){
    console.log("Index:",i , "Value:",arr3[i]);
}

// map function 
const e1 = arr3.map((arr3 , index)=> {
    return `Index: ${index} --> Value:${arr3}`;
})
console.log("Map the array using Map Function:\n",e1);


// filter 
const evenNumber = arr3.filter((arr3) => arr3 %2 == 0);
console.log("Even Number:",evenNumber);



// Join
const emoji = ["😊","😍","🤗"];
console.log("Join Some thing in arrays element:",emoji.join("--->"));


// concat
const emoji2 = ["😊","😍"];
console.log("Concat Both Array:",emoji.concat(emoji2));



// push and Pop
const arr1 = [10,1,2];

console.log("Length after Push element:",arr1.push(999));
console.log("Pop element:",arr1.pop(999));

// shift
console.log("Shifted->delected from start:",arr1.shift());

// flat 
const arr2 = [1, 2, [3, [4, [5] , 6], 7], 8];
console.log("Flat arr in 1 row:",arr2.flat(1));
console.log("Flat arr in 2 row :",arr2.flat(2));

// sort 
const arr5 =  [2,6,8,9,2,5];
console.log("Sorted array:",arr5.sort());

// slice
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);



// crreate a array with size
// ---- Fill method
const students = new Array(75).fill("Vijay");
console.log(students);


// fill
const arrfill = [1,2,3,5,67,8];
// fill(value, start, end)
arrfill.fill(4,1,3);
console.log("Value fill in Fruits arrfil:",arrfill);


// find
const arrfind = [1,2,3,4,6,89];
console.log("Element by find method:",arrfind.find((element) => element >= 3));
console.log("Element by find method:",arrfind.find((element) => element == 89));


// findIndex
const arr4 = [34,6,8,23,45,6];
console.log("Index of 5:",arrfind.findIndex((element) => element == 5));
console.log("Index of 3:",arrfind.findIndex((element) => element == 3));

// some --> return bollean value
function isBiggerThan10(element, index, array) {
    return element > 10;
}
console.log([2, 5, 8, 1, 4].some(isBiggerThan10));
console.log([12, 5, 8, 1, 4].some(isBiggerThan10));


// only 0 consider as false in remaing all number consider as true
let x = 0;
let y = 0;
let z = 0;
if(++x && ++y && z++ || ++z) {
    console.log("Value after:",x,y,z);
}

if(++x && ++y && z++ && y-- && --y && y-- || ++z){
    console.log("Value after:",x,y,z);
}

