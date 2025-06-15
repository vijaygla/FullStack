const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello Vijay Kumar from server side");
});

const port = 9000;

server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

