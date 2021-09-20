const http = require('http');
const fs = require('fs')

http.createServer((request, response) => {
  console.log('request come', request.url)
  if(request.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8');
    response.writeHead(200, {
      'Content-Type': 'text/html',
    })
    response.end(html);
    
  }
  // 如果js文件的内容改变了, 那么在缓存时间内, 客户端的js依然没有变
  // 要解决这个问题可以通过把这种静态文件生成hash值附在文件名后面,
  // 这样当文件内容改变时, hash变了, url就变了, 客户端就会再次请求服务器不使用缓存
  if (request.url === '/script.js') {
    const modified = request.headers['if-modified-since'];
    const etag = request.headers['if-none-match'];
    console.log(modified, etag);
    if (modified === '123123' && etag === '888') {
      response.writeHead(304, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=1000000, no-cache',
        'Last-Modified': '123123',
        'Etag': '888'
      });
      response.end('');
    } else {
      response.writeHead(200, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=1000000, no-cache',
        'Last-Modified': '123123',
        'Etag': '888'
      });
      response.end("console.log('这个是js文件中打印的')");
    }
    
  }
}).listen(8888)

console.log('server listening on 8888');