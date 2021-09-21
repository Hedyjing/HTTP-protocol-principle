const http = require('http');
const fs = require('fs')
const zlib = require('zlib');

http.createServer((request, response) => {
  console.log('request come', request.url)
  if(request.url === '/') {
    const html = fs.readFileSync('accept/test.html');
    response.writeHead(200, {
      'Content-Type': 'text/html',
      // 原443B, 使用gzip后  398B
      'Content-Encoding': 'gzip'
    })
    response.end(zlib.gzipSync(html));
  }
}).listen(8888)

console.log('server listening on 8888');