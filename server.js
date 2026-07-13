import http from "http";

const server = http.createServer(function(req, res){

    res.end(`Hello World`);
});

server.listen(3000, function(){
    console.log("The server is running on port 3000")
});