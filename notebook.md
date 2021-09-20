# HTTP 协议原理

## CORS跨域
-  Access-Control-Allow-Origin是浏览器的字段, 跨域时浏览器收到服务器返回的response时会看Access-Control-Allow-Origin是否有值或知否满足跨域条件

-  curl请求不受跨域影响

-  像src, img等标签中的资源跨域请求, 也可以正常跨域

## CORS跨域限制以及域请求验证
- 跨域时默认允许的方法

  GET, HEAD, POST
- 其他方法默认不允许, 需要预请求来验证
- 允许的Content-Type, 其他的需要预请求
  1. text/plain
  2. multipart/form-data
  3. application/x-www-form-urlencoded
- 请求头的限制
  1. 自定义的请求头
  2. 以及其他的一些请求头
- 其他限制
  1. XMLHttpRequestUpload对象均没有注册任何事件监听器
  2. 请求中没有使用ReadableStream对象

### 预请求
通过OPTIONS预请求方法来
