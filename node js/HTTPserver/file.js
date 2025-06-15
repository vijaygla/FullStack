const { log } = require("console");
const http = require("http");

const port = 9000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is http server </h1> <p>running at 9000</p>');
})

server.listen(port, ()=> {
    console.log("Server is running at port", port);
});

