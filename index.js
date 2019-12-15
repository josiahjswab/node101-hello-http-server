// write your code here
const http = require('http');

const server = http.createServer(function(req, res) {

  console.log(`received ${req.method} request for: ${req.url}`);
  
  res.writeHead(200, {'content-type': 'text/html'});
  res.end("<h1>Hello World</h1>");
});

server.listen(8080, 'localhost', null, function(req, res) {

  console.log(`Server is listening on port 8080`);
});

