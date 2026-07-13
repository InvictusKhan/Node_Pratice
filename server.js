// import http from "http";

// const server = http.createServer(function(req, res){

//     res.end(`Hello World`);
// });

// server.listen(3000, function(){
//     console.log("The server is running on port 3000")
// });




// import http from "http";

// const server = http.createServer(function(req, res){
//     res.end(`Server is live`);
// });

// server.listen(9000, function(){
//     console.log("Server is live");
// });


import http from "http";

const server = http.createServer(function(req, res){
    
    res.end("Your Form has been submitted successfully✅");
});

server.listen(5000, function(){
    console.log("Server is up!")
})
