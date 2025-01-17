const http = require('http');

const requestListener = function (req, res) {
  try {
    res.writeHead(200);
    res.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//This solution uses try...catch to handle potential errors within the requestListener function.  Any exceptions are caught, logged to the console, and a 500 error is returned to the client preventing the server from crashing.