const http = require('http');
const fs = require('fs')

http.createServer((request, response) => {
  console.log('request come', request.url)
  if(request.url === '/') {
    // 302是临时跳转每次都要通过/域名转发, 301是永久跳转, 只有第一次需要, 后面都从缓存读取
    response.writeHead(302, {
      'location': '/new'
    })
    response.end('')
  }
  if (request.url === '/new') {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    response.end('<div>this is a content</div>')
  }
}).listen(8888)

console.log('server listening on 8888');