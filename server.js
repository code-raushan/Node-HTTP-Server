//importing the HTTP module from the Node.
//install http via "npm i http"
const http = require('http');

//writing the request listener function

const requestListener = function(req, res){
    //writing the header with status code 200 and status message OK
    res.writeHead(200, "OK");
    res.end('I welcome you!');
}

const server = http.createServer(requestListener);
server.listen(8080);