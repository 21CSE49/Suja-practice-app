const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello, your Node App is running inside Docker & Kubernetes!");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
