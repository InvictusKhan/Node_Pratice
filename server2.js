import http from "http";
const PORT = process.env.PORT;



const games = [
    {ID: 1, Name: "Lies of P", Genre:"Soulslike"},
    {ID: 2, Name: "Metro Exodus", Genre:"Fallout"},
    {ID: 3, Name: "RE8", Genre:"Action"}
]


const logger = (req, res, next) => {
    console.log(`${req.method}, ${req.url}`);
    next();
}

function getGames(req, res) {
    res.end(JSON.stringify(games));
}

const createGameHander = (req, res) => {
    let body = '';

    req.on('data', (chunk) =>{
        body += chunk.toString();
    })
    req.on('end', () => {
        const newGame = JSON.parse(body);
        games.push(newGame);
        res.statusCode = 201;
        res.end(JSON.stringify(newGame));
    
    })}

const server = http.createServer(function(req, res){
    logger(req, res, () => {
        if(req.url === '/api/games' && req.method === 'GET'){
            getGames(req, res);
        }else if(req.url === '/api/games' && req.method === 'POST'){
            createGameHander(req, res);
        }
         else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: "Invalid Page" }));
        }

    });
});
server.listen(PORT, function(){
    console.log('Server is UP!');
});

