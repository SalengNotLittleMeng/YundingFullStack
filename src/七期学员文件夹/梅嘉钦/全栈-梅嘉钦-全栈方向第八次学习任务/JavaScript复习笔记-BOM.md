# JavaScript复习笔记-BOM



```
浏览器对象模型 内容与浏览器窗口进行交互
window（ 包含document location navigation screen history）
window对象也是接口

DOM 把文档看作一个对象（顶级是document）
BOM 把浏览器当作一个对象（顶级是window）
BOM 比 DOM大

全局对象 定义在全局作用域中的变量， 函数都会变成window对象的属性和方法

```



## 1 window对象常见事件

### 1.1 窗口加载事件

```javascript
 window.onload=function(){}                          //重复的话只执行最后一个

 window.addEventListener('load',function(){})        //则没有限制  图片 css等所有加载完
 
 document.addEventListener('DOMContentLoaded',function(){})    //DOM加载完就可以

```

### 1.2 调整窗口大小事件



```
 window.onresize=function() {}    //是调整窗口大小加载事件
 
 window.addEventListener('resize',function(){})

```

### 1.3 两种定时器 （window可以省略）



```
window.setTimeout (调用函数,[延时毫秒数])
window.setInterval (调用函数,[延时毫秒数]) 反复调用这个函数
```



```javascript
 setTimeout(function() {
     console.log('时间到了');
 }, 2000)

 setIntervsl(function() {
     console.log('时间到了');       //每两秒输出一次，重复操作
 }, 2000)

```



```
回调函数：就是上一件事作完，回头调用这个函数 例如：监听事件里的函数 定时器里面函数

停止定时器
window.clearTimeout(名字)
window.clearInterval(名字)
```





### 1.3 其他窗口方法



```
window.open(URL,name,specs,replace); 打开新的窗口
```



## 2 this指向问题

### 2.1 全局作用域下或普通函数中



```
this指向全局对象window 还有定时器里的window
```



```javascript
 console.log(this);
 function fn() {
     console.log(this);
 }
 fn()
 setTimeout(function() {
     console.log(this);
 })

```



### 2.2 方法调用中谁调用this指向谁



```
 var o = {
     sayHi: function() {
         console.log(this); //this指向的是o这个对象
     }
 }
 o.sayHi()

```





### 2.3 构造函数中的this指向构造函数的实例



```javascript
function Fun() {
     console.log(this);   //this 指向的是fun  实例对象
 }
 var fun = new Fun()

```





### 3 js执行队列



```
（同步） 单线程 同一时间只能做一件事
（异步） 多线程 同时做多个任务
同步任务：都在主线程上执行，形成一个执行栈
异步任务：是通过回调函数实现的

1.普通事件：click resize
2.资源加载：load error
3.定时器：setinterval settimeout

执行过程

先执行执行栈里的同步任务
遇到异步任务（回调函数）放到任务队列中
执行栈里同步任务执行完毕，系统会读取任务队列的异步任务，解除等待状态，放到执行栈里执行
执行栈相当于 主车道， 任务队列相当于 应急车道

```





```
 执行栈        -->当有异步任务时，提交给异步进程处理-->        异步API
    \                                                  /
      主线程执行                               异步任务完毕
       完毕，查询                             推入到任务
        任务队列，                           队列中   
         取出任务  
                \                           /
                         任务队列
   事件循环：主线程不断重复获得任务，执行，再获取，再执行

```





![在这里插入图片描述](https://meijiaqin.oss-cn-beijing.aliyuncs.com/d68dd204b81341b99d712f2c5794b669.jpeg)



## 4 location对象





```
console.log(location);                 //输出location对象
console.log(location.href);            //输出当前地址的全路径地址
console.log(location.origin);          //输出当前地址的来源
console.log(location.protocol);        //输出当前地址的协议
console.log(location.hostname);        //输出当前地址的主机名
console.log(location.host);            //输出当前地址的主机
console.log(location.port);            //输出当前地址的端口号
console.log(location.pathname);        //输出当前地址的路径部分
console.log(location.search);          //输出当前地址的?后边的参数部分

```



```
属性：herf（整个URL地址） 和search（返回参数）
```



```
document.addEventListener('click', function() {
     console.log(location.href);
     location.href = 'http://www.baidu.com'
 })

```



```
location对象中方法

location.assign(地址) 页面跳转 记住浏览历史，可以实现页面跳转
location.replace(地址) 页面跳转 不记住浏览历史
location.reload() 页面刷新 空或false 直接刷新 true 强制刷新
```





```javascript
document.addEventListener('click', function() {
     location.assign('http://www.baidu.com')
 })

```



## 5 navigator对象



```
包含浏览器信息 常用userAgent判断哪个页面打开
```



## 6 history对象



```
浏览器历史记录

history.forward() 前进
history.back() 后退
history.go() 1前进 -1后退
```











### 



### 







### 



























































































































