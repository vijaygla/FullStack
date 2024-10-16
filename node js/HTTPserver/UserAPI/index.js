const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("Hello from the server side");
    }
    else if (req.url == "/userAPI"){
        fs.readFile(`${__dirname} /USERAPI/userAPI.json`,"utf-8",(err, data) => {
            console.log(data);
        });
        res.end("Hello from the userAPI side");
    }
    else {
        res.writeHead(404, {"Content-type" : "text.html"});
        res.end("<h1> 404 error pages does not found</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listen from the port no 8000");
});

