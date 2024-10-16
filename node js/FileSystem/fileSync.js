const fs = require("fs");

// fs.writeFileSync("readme.txt","Welcome to my channel on firts blog");

fs.writeFileSync("read.txt","Hello World\n");

fs.appendFileSync("read.txt","My name is Vijay Kumar")

// It will provide the buffer data in terminal l
const bufferData = fs.readFileSync("read.txt");
console.log(bufferData);

// It will privide the original data in the terminal 

const orgData = bufferData.toString();
console.log(orgData);


fs.renameSync("read.txt","readWriteSync.txt");



// Note --- Buffer is a data types in Node JS Data_Value store in Node js in form of buffer not in binary we can get original data to convert it int string  



