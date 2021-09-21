# HTTP 协议原理

## CORS跨域
-  Access-Control-Allow-Origin是浏览器的字段, 跨域时浏览器收到服务器返回的response时会看Access-Control-Allow-Origin是否有值或知否满足跨域条件

-  curl请求不受跨域影响

-  像src, img等标签中的资源跨域请求, 也可以正常跨域
---

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

---
## 缓存Cache-Control
### 可缓存性
public: http的任何地方都可以进行缓存(包括中途的各种代理服务器)

private: 只有发起请求的这个浏览器可以进行缓存

no-cache: 可以在本地缓存, 但每次要去服务器请求验证, 验证成功才允许使用缓存

### 到期

max-age=\<seconds>

s-maxage=\<seconds>
  - 只有在代理服务器才会生效, 专门为代理服务器设置

max-stale=\<seconds>
  - 在发起端设置, 在这个时间内, 就算max-age过期了也用过期的缓存资源

### 重新验证

must-revalidate
  - 如果max-age过期后要重新去原服务器请求

proxy-revalidate

### 其他头

no-store
  - 不可以缓存, 每次都要去服务端请求新的资源

## 缓存验证

- last-modified和Etag

当no-cache时, 首先要请求服务器进行缓存验证, 当第一次请求服务器时, 服务器会返回一个last-modifed或Etag字段, 下次请求时, 浏览器携带对应字段: if-modified-since和if-none-match. 比较如果匹配, 则返回304, 用本地缓存, 否则返回新的文件

## cookie和session

### cookie
- 通过Set-Cookie设置
- 下次请求会自动带上
- 键值对, 可以设置多个
#### Cookie属性
- max-age和expires设置过期时间
- Secure只在https的时候发送
- 设置HttpOnly后无法通过document.cookie访问
> 可以通过给cookie设置domain让二级域名可以访问到一级域名下设置的cookie

## HTTP长链接
- 浏览器最多允许对同一个 Host 建立六个 TCP 连接(并发数为6)
- 一个Connection Id对应一个TCP连接
- http2.0后一个tcp可以并发的请求多个http连接(同域), 可以看google的connection id
- connection默认为keep-alive

## 数据协商
- 客户端请求
  - Accept指定客户端想要的数据类型
  - Accept-Encoding 指定数据以什么编码方式传输
  - Accept-Language 指定语言
  - User-Agent 表示浏览器的相关信息
- 服务端返回
  - Content-Type 
  - Content-Encoding
  - Content-Language
- DevTools中size上面的大小是传输过程中整个数据的大小(包括首行, header和body), 下面的是body解压后的实际大小. 下面的body是上面的body解压后的结果

- Content-Type字段中的boundary=----WebKitFormBoundaryjoKYZmbOBjlNzg6s是Form-data项之间的分隔
- multipart/form-data 多数据表单提交
