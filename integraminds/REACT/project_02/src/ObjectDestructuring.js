const profile = {
    age: {
        month: "july",
        year: 2024,
    },
    fullName: "Vijay",
    email:"vijay@gmail.com",
    hobbies:["reading", "coding", "playing"],
    address : {
      country: {
        state: "Bihar",
        distic: "Siwan",
        city: "Mathura",
        code: "IN",
      },
    },
};

// Destructuring 
const {
    email,
    fullName,
    hobbies,
    address,
} = profile;

console.log(fullName);
console.log(email);
console.log(hobbies);
console.log(address);


const {
    hobbies: [firstHobby, secondHobby, ThirdHobby, forthHobby= "Not found hobby"],
} = profile;

console.log(firstHobby);
console.log(secondHobby);
console.log(ThirdHobby);
console.log(forthHobby);



const {address: {country : {code: countryCode}}} = profile;
console.log(countryCode);


const {age: {year}} = profile;
console.log(year);

