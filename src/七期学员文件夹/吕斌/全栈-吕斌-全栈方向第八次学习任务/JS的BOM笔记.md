# JS的复习笔记之----JS的BOM

#### 一、BOM的简介

​        BOM是指浏览器对象模型，浏览器对象模型提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。BOM由多个对象组成，其中代表浏览器窗口的Window对象是BOM的顶层对象，其他对象都是该对象的子对象。\n我们在浏览器中的一些操作都可以使用BOM的方式进行编程处理，比如：刷新浏览器、后退、前进、在浏览器中输入URL等

​        **BOM的顶级对象window**，window是浏览器的顶级对象，当调用window下的属性和方法时，可以省略window；注意：window下一个特殊的属性

#### 二、window对象的常见事件

##### 1.窗口加载事件

1>简介：window.load是窗口（页面）加载事件，当文档内容完全加载完成会触发该事件（包括图像、脚本文件、CSS文件等），就调用的处理函数。

```js
window.onload = function(){}
或者
window.addEventListener('load',function(){})
或者
document.addEventListener('DOMContentLoaded',function(){})
```

*2>**ps：①有了window.onload就可以把JS代码写到页面元素的上方，因为onload是等页面内容全部加载完毕，再去执行处理函数。***    

​             ***②window.onload传统注册事件方式只能写一次，如果有多个，会以最后一个window.onload为准。如果使用addEventListener***   

***              ***就没有限制。**

​             ***③DOMContentLoaded是DOM加载完毕（不包含图片、flash、CSS等）就可以执行，加载速度要比load快。***

##### 2.调整窗口大小事件

1>语法：window.onresize=function(){}

​                window.addEventListener("resize",function(){});

2>调整大小窗口加载事件，当触发时就调用的处理函数；只要窗口大小像素发生变化，就会触发这个事件，我们经常利用这个事件完成响应式布局          window.innerWidth      ------->当前屏幕的宽度

##### 3.定时器之setTimeout

1>语法：window.setTimeout(调用函数，[延迟的毫秒数])；

​           该方法用于设置一个定时器，该定时器在定时器到期后执行调用函数

```js
window.onload = function(){
	setTimeout(function(){
	alert("setTimeout...")
	},1000)//毫秒数
}
```

***PS：①window可以省略；***

***②这个调用可以直接写函数，或者写函数名；***

***③延迟的毫秒数省略默认是0；***

***④定时器可能有很多，可以给定时器赋值一个标识符***

2>停止clearTimeout()定时器：

​             window.clearTimeout(定时器名字)，用于取消先前通过调用setTimeout()建立的定时器。

```js
<button id="clear">清除定时器</button>
 
<script>
window.onload = function(){
	var time = setTimeout(function(){
	alert("setTimeout...")
	},2000)//毫秒数
 
	document.getElementById('clear').onclick = function(){
	window.clearTimeout(time)
	}
}
</script>
```

3>setInterval()定时器：

​             window.setInterval(回调函数，[间隔毫秒数])，用于重复调用一个函数，每隔这个时间，就去调用一次回调函数。

```js
window.onload = function(){
	window,setInterval(function(){
	alert('Interval...')
	},1000)
}
```

**<u>两者区别：</u>**

setTimeout：延时时间到了，就去调用回调函数，只调用一次就会结束定时器。

setInterval：每隔指定延时时间，就回去调用回调函数，会一直调用下去，知道清除定时器。

4>停止setInterval()定时器：

​             window.clearInetrval(定时器名字)

##### 4.this指向问题

一般情况下，this的最终指向的是那个调用它的对象。

##### 5.同步和异步

1>同步任务都在主线程上执行，形成一个执行线

2>异步任务：JS的异步任务是通过回调函数实现的

​        i>普通事件：click，resize

​        ii>资源加载：load，error

​        iii>定时器：setTimeout，setInterval

3>JS的执行机制：先执行同步任务，若遇到异步任务，先回调函数放入任务队列中，一旦同步执行完毕，再执行任务队列中的异步任务。

#### 三、location对象

##### 1.简介

window对象给我们提供了一个location属性用于获取或设置窗体的URL,并且可以用于解析URL。因为这个属性返回的是一个对象，所以我们将这个属性也称为location对象。

##### 2.location对象的属性

1>location.href     获取或设置整个URL

2>location.host      返回主机(域名)

3>location.port      返回端口号,若未写则返回空字符串

4>location.pathname      返回路径

5>location.search      返回参数

6>location.hash    返回片段,#后面内容,常见于链接,锚点

##### 3.location对象的方法

1>location.assign()      跟href一样可以跳转页面

2>location.replace()    替换当前页面,因为不记录历史,所以不可后退页面

3>location.reload()     重新加载页面,相当于刷新按钮

##### 4.history对象

1>back()     实现后退功能

2>forward()    实现前进功能

3>go(参数)     实现前进后退功能,参数若为1,则前进1,若为-1,则后退1