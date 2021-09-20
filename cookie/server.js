const http = require('http');
const fs = require('fs')

http.createServer((request, response) => {
  console.log('request come', request.url)
  if(request.url === '/') {
    const html = fs.readFileSync('cookie/test.html', 'utf8');
    response.writeHead(200, {
      'Content-Type': 'text/html',
      // id=123 2秒后过期, 浏览器request请求头不会携带此cookie
      'Set-Cookie': ['id=123;max-age=2','ab=445;HttpOnly','cd=212','ef=333;domain=test.com']
    })
    response.end(html);
  }
}).listen(8888)

console.log('server listening on 8888');