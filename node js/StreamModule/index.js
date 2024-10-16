const fs = require("fs");
const http = require("http");
const server = http.createServer();

// // Normal Methd
// server.on("request" , (req, res) => {
//     var fs = require ("fs");
//     fs.readFile("input.txt" , (err, data) => {
//         if(err) return console.log(err);
//         res.end(data.toString);
//     });
// });
// server.listen(9000, "127.0.0.1");



// // Streaming method of data in a file 
// server.on("request" , (req, res) => {
//     const rstream =  fs.createReadStream("input.txt");
//     rstream.on('data' , (chunkData) => {
//         res.write(chunkData);
//     });
//     rstream.on("end" , () => {
//         res.end();
//     })
// });

// server.listen(9000, "127.0.0.1");


// #rd way to streaming the data without downloading 

server.on("request" , (req, res) => {
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res); //response
});

server.listen(8000, "127.0.0.1");
