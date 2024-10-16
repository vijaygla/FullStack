const bioData = {
    name: "Vijay Kumar",
    age: 18 ,
    channel: "Jai Shree Ram",
};

console.log("Normal Object:",bioData);

// To convert the object into json
const jsondata = JSON.stringify(bioData);
console.log("JSON Object:",jsondata);

// To convert the JSON into data object 
const objData = JSON.parse(jsondata);
console.log("JSON to Object:",objData);

