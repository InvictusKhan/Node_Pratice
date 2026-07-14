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


// import http from "http";

// const server = http.createServer(function(req, res){
    
//     res.end("Your Form has been submitted successfully✅");
// });

// server.listen(5000, function(){
//     console.log("Server is up!")
// })


import { error } from "console";
import http from "http";
const PORT = process.env.PORT;




const server = http.createServer(function(req, res){
    try {
        if (req.method === 'GET') {
            if (req.url === '/') {
                console.log(req.method);
                console.log(req.url);
                res.end("Homepage");
            } else if (req.url === '/about') {
                console.log(req.method);
                console.log(req.url);
                res.end("About Page");
            } else {
                console.log(req.method);
                console.log(req.url);
                res.end('Page Not Found');
            }
        } else {
            throw new Error("Method not Allowed");
        }
    } catch (err) {
        console.log(req.method);
        console.log(req.url);
        console.error(err);
        res.end('Server Error');
    }
});
server.listen(PORT, function(){
    console.log(`Server is live on ${PORT}`);
});
