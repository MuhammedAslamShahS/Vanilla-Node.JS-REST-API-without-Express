const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer(async(req, res) =>{
    if(req.url === '/api' && req.method === 'GET' ){
        res.writeHead(200, {'content-type' : 'application/json'});

        res.write("This is Vanilla node js API");
        res.end();
    }else{
        res.writeHead(404, {'content-type': 'application/json'});
        res.end(JSON.stringify({message: "Route is not found"}));
    }
});

server.listen(PORT, ()=>console.log`server running.... ${PORT}`);