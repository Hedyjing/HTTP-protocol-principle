const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  const html = fs.readFileSync('CSP/test.html', 'utf-8');
  if(request.url === '/') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
      // default-src 全局资源的限制
      //'Content-Security-Policy': 'default-src http: https:'

      // \'self\'表示本域
      //'Content-Security-Policy': 'default-src \'self\' https://cdn.bootcdn.net/'
      
      // 这样图片的src就不会被限制了
      'Content-Security-Policy': 'script-src \'self\' https://cdn.bootcdn.net/; report-uri /report'
    })
    response.end(html);
  }else {
    response.writeHead(200, {
      'Content-Type': 'application/javascript'
    })
    response.end('console.log(`this is host script`)')
  }
}).listen(8888)

console.log('Listening 8888 port')