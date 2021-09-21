const http = require('http');
const fs = require('fs')

http.createServer((request, response) => {
  console.log('request come', request.url)
  const html = fs.readFileSync('connection/test.html', 'utf8');
  const image = fs.readFileSync('connection/wallhaven-x8eydz.jpg')
  if(request.url === '/') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Connection': 'close'
    })
    response.end(html);
  } else {
    response.writeHead(200, {
      'Content-Type': 'image/jpg',
      // Connection默认为keep-alive
      'Connection': 'close'
    })
    response.end(image);
  }
}).listen(8888)

console.log('server listening on 8888');