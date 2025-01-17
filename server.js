const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');

//Uncommon Error: Server crashes silently without any error message in console
//This might happen due to unhandled exceptions in request handlers. For example: 
//In the requestListener function above, if there was an error in res.end, the server might crash without providing any helpful logs.