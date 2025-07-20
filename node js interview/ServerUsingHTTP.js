import http from 'http';
const PORT = 9000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("this is home page");
    }
    else if (req.url === "/about") {
        res.end("this is about page");
    }
    else {
        res.end("Page not found error 404");
    }
})

server.listen(PORT, () => {
    console.log(`Server is listing at port ${PORT}`);
})

