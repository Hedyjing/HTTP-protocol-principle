const http = require('http');

http.createServer((request, Response) => {
  console.log('request come', request.url)

  Response.end('123');
}).listen(8888)

console.log('server listening on 8888');