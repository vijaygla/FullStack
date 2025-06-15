const fs = require("fs");

// fs.writeFileSync("readme.txt","Welcome to my channel on firts blog");

fs.writeFileSync("file.txt","Hello World\n");

fs.appendFileSync("file.txt","My name is Vijay Kumar")

// It will provide the buffer data in terminal l
const bufferData = fs.readFileSync("file.txt");
console.log(bufferData);

// It will privide the original data in the terminal 

const orgData = bufferData.toString();
console.log(orgData);


fs.renameSync("file.txt","newFileSync.txt");



// Note --- Buffer is a data types in Node JS Data_Value store in Node js in form of buffer not in binary we can get original data to convert it int string  


