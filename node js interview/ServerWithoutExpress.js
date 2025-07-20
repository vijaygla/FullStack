import http from "http";
const PORT = 9000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Hello World from node js server");
    } 
    else if (req.url === "/about") {
        res.end("This is about page");
    } 
    else if (req.url === "/menu") {
        res.end("This is menu page");
    }
    else {
        res.statusCode = 404;
        res.end("Page not found");
    }
})

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

