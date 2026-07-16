const PORT = process.env.PORT;
import http from "http";

console.log(PORT);


const logger = (req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    next();
}

const postHandler = (req, res) => {
    res.end("This is POST");
}
const getHandler = (req, res) => {
    res.end("This is GET");
}
const endHander = (req, res) => {
    res.end("Invalid Parameters");
}
const server = http.createServer((req, res) => {
    logger(req, res, () => {
        
    })
    if(req.method === 'POST' && req.url === '/POST'){
        postHandler(req, res);
    }
    else if(req.url === '/GET' && req.method === 'GET'){
        getHandler(req, res);
    }
    else{
        endHander(req, res);
    }
})
server.listen(PORT, () => {
    console.log("Server is live");
})
