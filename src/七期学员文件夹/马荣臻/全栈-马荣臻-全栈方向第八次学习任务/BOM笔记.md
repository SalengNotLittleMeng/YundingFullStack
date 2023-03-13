# BOM

## BOM概述

BOM（浏览器对象模型），把浏览器当作是一个对象来看待。BOM的顶级对象是window，主要学习浏览器窗口交互的一些对象

BOM比DOM更大，它包含DOM。

![](https://typora-image-mrz.oss-cn-beijing.aliyuncs.com/BOM%E6%A0%91.png)

## window对象的常见对象

### 窗口加载事件

#### onload

```js
window.onload = function(){}
window.addEventListener('load',function(){});
```

- window.onload是窗口（页面）加载事件，当文档内容完全加载完成会触发该事件（包括图像、脚本、CSS文件等）

- 例如：

```html
<script>
	window.onload = function(){
		var btn = document.querySelector('button');
        btn.addEventListener('click',function(){
            alert('点击我');
        })
    }
</script>
<button>点击</button>
```

- 有了window.onload就可以把JS代码写道页面元素上方
- 但window.onload传统注册事件方式只能写一次，如果有多个，会以最后一个为准
- 通过add Event Listener就不会有任何限制

```js
window.addEventListener('load',function(){
		var btn = document.querySelector('button');
		btn.addEventListener('click',function(){
		alert('点击我');
    })
})
window.addEventListener('load',function(){
		var btn = document.querySelector('button');
		btn.addEventListener('click',function(){
		alert('123');
    })
})
```

#### DOMContentLoaded

```js
document.addEventListener('DOMContentLoaded',funztion(){
	alert('123')
                          })
```

- load事件是等页面内容全部加载完毕再执行
- DOMContentLoaded是DOM全部加载完毕

### 调整窗口大小事件

```js
window.onresize = function(){}
window.addEventListener('resize',funztion(){});
```

- windoe.resize是调整窗口大小加载事件，当触发时就调用的处理函数

- 可以利用这个事件完成响应式布局
- window.innerWidth为当前屏幕的宽度

## 定时器

### setTimeout()

```js
window.setTimeout(调用函数,[延迟的毫秒数]);
```

- 延时时间单位是毫秒，可以省略

- 调用函数可以直接写函数，也可以写函数名

- 页面中可能有很多定时器，我们经常给定时器加标识符

##### 回调函数

普通函数是按照代码顺序直接调用

回调函数需要等待时间，时间到了才去调用这个函数

##### 停止定时器

window.clearTimeout(timeoutID)

timeoutID:定时器名字

```js
var btn = document.querySelector('button');
var timer = setTimeout(funztion(){
	console.loa('123');
},5000)
btn.addEventListener('click',function(){
	clearTimeout(timer);
})
```

### setInterval()

setInterval()方法重复调用一个函数，每个这个时间，就去调用一次回调函数

```js
window.setInterval(回调函数,[间隔的毫秒数]);
```

##### 停止定时器

```js
clearInterval(intervalID);
```

clearInterval()方法取消了先前通过调用setInterval()建立的定时器

```js
var begin = document.querySelector('.begin');
var stop = document.querySelector('.stop');
var tiime = null;
begin.addEventListener('click',function(){
    time = setTimeout(function(){
        console.log('123');
    },1000);
})
stop.addEventListener('click',function(){
	clearInterval(timer);
})
```

### this指向问题

一般情况下this的最终指向是哪个调用它的对象

1. 全局作用域或者普通函数中this指向全局对象window（定时器里面的this指向window）
2. 方法调用中谁调用this指向谁
3. 构造函数中this指向构造函数的实例

## JS执行队列

### 同步与异步

#### 概念

##### 同步

前一个任务结束后再执行另一个任务，程序的执行顺序与任务的排列顺序是一致的

##### 异步

同时运行几个任务

### 同步任务与异步任务

#### 同步任务

同步任务同步任务都在主线程上执行，形成一个执行栈

异步任务

JS的异步任务是通过回调函数实现的

- 普通事件：click、resize……
- 资源加载：load、error……
- 定时器：setInterval\setTimeout……

#### 事件循环

由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为**事件循环(event loop)**

## location对象

window对象给我们提供了一个location属性用于获取或设置窗体的URL，并且可以用来解析URL，这个属性的返回值是一个对象，所以我们将这个对象称之为location对象

### URL（统一资源定位符）

URL是互联网上标准资源的网址。互联网上的每个文件都有一个唯一的URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。

```js
protocol:host[:port]/path/[?query]#fragment
http://www.itcast.cn/index.html?name=andy&age=18#link
```

| 组成     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| protocol | 通信协议 常用的http,ftp,maito等                              |
| host     | 主机（域名）  www.itheima.com                                |
| port     | 端口号 可选，省略是使用方案的默认端口，如http的默认端口是90  |
| path     | 路径 由 零或多个'/'符号隔开的字符串，一般用来表示主机上的一个目录或文件地址 |
| query    | 参数 以键值对的形式,通过&符号分隔开来                        |
| fragment | 片段 #后面内容 常见于链接 锚点                               |

### location对象的属性

| location对象属性  | 返回值                             |
| ----------------- | ---------------------------------- |
| location.href     | 获取或者设置整个URL                |
| location.host     | 返回主机（域名） www.itcheima.com  |
| location.port     | 返回端口号 如果未写返回 空字符串   |
| location.pathname | 返回路径                           |
| location.search   | 返回参数                           |
| location.hash     | 返回片段 #后面内容 常见于链接 锚点 |

### location常见的方法

| location对象方法   | 返回值                                         |
| ------------------ | ---------------------------------------------- |
| location.assign()  | 跟href一样，可以跳转页面（也成为重定向页面）   |
| location.replace() | 替换当前页面，因为不记录历史，所以不能后退页面 |
| location.reload()  | 重新加载页面，相当于刷新按钮或者f5             |

## navigator对象

包含了浏览器的相关信息

### useAgent

该属性可以返回由客户机发送服务器的user-agent头部的值

## history对象

与浏览器历史记录进行交互

| historty对象方法 | 作用                                                      |
| ---------------- | --------------------------------------------------------- |
| back()           | 可以后退功能                                              |
| forward()        | 前进功能                                                  |
| go(参数)         | 前进后退功能 参数如果是1 前进1个页面 如果是-1 后退1个页面 |

