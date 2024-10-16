const fs = require("fs");

// // create file and write somethings in this file
fs.writeFile("read.txt","Hello This is the Read file of Asyncronous file System.\n" , (err) => {
    console.log("file is created");
    console.log("Error:",err);
});


// append in created file
fs.appendFile("read.txt","This is from Thappa Technical" , (err) =>{
    console.log("file is appended");
    console.log("Error:",err);
});



// read the file and rename 
fs.readFile("read.txt","UTF-8",
(err , data) => {
    console.log(data);
    console.log("Error:",err);
});



fs.rename("read.txt","readWriteAsync",
    // This is call back function
    (err) => {
        console.log("File is Renamed");
        console.log("Error:",err);
    }
);



