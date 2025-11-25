const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello! Your Node App is Running Successfully!");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
