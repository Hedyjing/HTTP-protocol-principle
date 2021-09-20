const http = require('http');

http.createServer((request, response) => {
  console.log('request come', request.url)
  response.writeHead(200, {
    // '*'表示所有域都可以请求到该服务器的资源
    'Access-Control-Allow-Origin': 'http://127.0.0.1:8888'
  })
  response.end('helloworld');
}).listen(8887)

console.log('server listening on 8887');