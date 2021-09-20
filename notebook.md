# HTTP 协议原理

## CORS跨域
> Access-Control-Allow-Origin是浏览器的字段, 跨域时浏览器收到服务器返回的response时会看Access-Control-Allow-Origin是否有值或知否满足跨域条件
> curl请求不受跨域影响
> 像src, img等标签中的资源跨域请求, 也可以正常跨域