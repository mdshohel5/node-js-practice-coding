const http = require('http');
const server = http.createServer(function(req, res){
    res.end("hello world!");
})
console.log("Server Run Successfully");
server.listen(5050);