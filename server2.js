const http = require('http');

http.createServer((request, response) => {
  console.log('request come', request.url)
  response.writeHead(200, {
    // '*'表示所有域都可以请求到该服务器的资源
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Test-Cors',
    'Access-Control-Allow-Methods': 'POTS, PUT, Delete',
    // 表示1000秒内对于上面的请求不需要再通过OPTIONS预请求来进行验证了
    'Access-Control-Max-Age': '1000',
  })
  response.end('helloworld');
}).listen(8887)

console.log('server listening on 8887');