# JavaScript复习笔记-DOM高级

## 1 事件监听与删除

```
注册事件两种方式

传统注册方式 唯一性：只能处理一个处理函数 后面会把前面覆盖
方法监听注册方式 addEventListener()

EventTarget.addEventListener(type, listener[, useCapture])

type 事件类型字符串
listener 事件处理函数
useCapture 可选参数， 布尔值， 默认false

```



```javascript
 var btns = document.querySelector('button')
 btns.addEventListener('click', function() {
     alert(22)
 })
 btns.addEventListener('click', function() {
     alert(33)
 })

```



```
删除事件（解绑事件）

传统 element.onclick = null
监听 removeEventListener(type,listener)
```



```javascript
div.addEventListener('click', fn)
 function fn() {
     alert(22)
     div.removeEventListener('click', fn)
 }

```





## 2.DOM事件流



```
按照特定的顺序 传播过程

捕获阶段（上到下）
当前目标阶段
冒泡阶段（下到上）

捕获阶段 addEventListener 第三个参数是true 则处于捕获阶段
冒泡阶段 addEventListener 第三个阶段为false或省略 则处于冒泡阶段
onclick 只能得到冒泡阶段
onblur onfoucus onmouseenter 等没有冒泡阶段

```



## 3 事件对象



```
事件处理程序 () 里面的就是事件对象 当形参看

只有有了事件才会存在 系统创建 不需要传参
是事件一系列相关数据的集合 鼠标点击就关于鼠标信息

事件对象常见的属性和方法

e.target 返回的是触发事件的对象（点击的对象） (this返回的是绑定事件的对象)

e.type 返回事件类型

阻止默认行为（事件） 让链接不跳转 不让按钮点击
e.preventDefault() return false(后面代码不执行 只限于传统方式)

e.stopPropagation() 阻止事件冒泡

```





## 4 事件委托



```
原理：不是每个子节点单独设置事件监听器，而是设置到其父节点上，然后利用冒泡原理影响每个子节点
```





```javascript
<ul>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
</ul>

 var ul=document.querySelector('ul')
  ul.addEventListener('click',function(){
     alert('111')									//点击li会冒泡到ul
 })

```





## 5 常用的鼠标、键盘事件



```
contextmenu 菜单 通常可以禁用菜单
```



```javascript
 document.addEventListener('contextmenu', function(e) {
     e.preventDefault()
 })

```



```
selectstart 开始选中 可以禁止选中
```



```javascript
 document.addEventListener('selectstart', function(e) {
     e.preventDefault()
 })

```





```
获得鼠标在页面中的坐标

clientX和clientY 可视区x和y坐标
pageX和pageY 文档页面的x和y坐标
```



```
键盘事件 顺序keydown – keypress – keyup
onkeyup 按键弹起时
```



```javascript
 document.onkeyup = function() {
     console.log('我弹起了');
 }

```



```
onkeydown 按键按下时
```

```javascript
 document.addEventListener('keydown', function() {
     console.log('我按下了');
 })
```

```javascript
onkeypress（区分字母大小写） 按键按下时 不能识别功能键

 document.addEventListener('keypress', function() {
     console.log('我按下了press');
 })
```













