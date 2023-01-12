# JavaScript复习笔记-DOM初步



```
API是一种工具接口 会使用就行

Web API（函数或方法）是浏览器提供的一套操作浏览器功能和页面元素的API（ DOM BOM）
DOM 一个页面就是一个文档，DOM中用document表示

所有标签都是元素，elemen
所有的内容都是节点（标签，属性，文本，注释），node

```



## 1 获取元素



```
通过id 获取元素
getElementById()
```



```javascript
 <div id="time">2022-5-3</div>
 
 var timer = document.getElementById('time')    //必须是字符串  返回元素对象
 console.log(timer);
 console.dir(timer)                             //更好查看里面属性和方法

```



```
getElementsByTagName()
如果页面只有一个li 返回还是伪数组 如果没有返回空的伪数组
```



```javascript
 <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
 </ul>

 var lis = document.getElementsByTagName('li')     //元素对象的集合，为数组形式存储
 console.log(lis);
 console.log(lis[0]);

```



```
指定父元素 必须指明哪一个元素对象
```



```javascript
var ol = document.getElementsByTagName('ol')
console.log(ol[0].getElementsByTagName('li'));

```



```
根据类名获取某些元素
getElementsByClassName()
```



```javascript
<div class="box">2022-5-3</div>

var boxs = document.getElementsByClassName('box')
console.log(boxs);

```



```
querySelector() 万能获取
只能获取第一个元素对象
class用 . id用#
```



```
var firstBox = document.querySelector('.box')      
console.log(firstBox);

```



```
querySelectorAll()
指定选择器的所有元素对象集合
```



```javascript
var allBox = document.querySelectorAll('.box')
console.log(allBox);

```





```
获取body和html元素
```



```javascript
      body
var bodyEle = document.body
console.log(bodyEle);

```





```javascript
      html
var htmlEle = document.documentElement
console.log(htmlEle);

```



## 2 事件 触发响应机制



```
事件源 事件类型 事件处理程序

事件源： 被触发的对象 谁 按钮
var btn = document.getElementById(‘btn’)

事件类型 如何触发 鼠标点击等

事件处理程序 通过一个函数赋值方法
btn.onclick = function() {
alert(‘点秋香’) }

```



## 3 操作元素



### 3.1 获取元素



```javascript
var btn = document.querySelector('button')
var div = document.querySelector('div')

```



### 3.2 注册事件



```javascript
btn.onclick = function() {
    div.innerText = '2019-6-6'
}

```





### 3.3 不添加事件直接操作



```javascript
<p> 11 </p>

var p = document.querySelector('p')
p.innerHTML = '1111'

<p> 1111 </p>

```



### 3.4 innerHTML和innerText



```
都可以获取元素里面内容（可读写）

innerText 不识别html标签 去除空格和换行
innerHTML 识别html 不去除保留
```





### 3.5 修改元素属性



```javascript

var ldh = document.querySelector('ldh')
var zxy = document.querySelector('zxy')
var img = document.querySelector('img')
ldh.onclick = function() {
    img.src = '1'
}
zxy.onclick = function() {
    img.src = '2'
}

```





### 3.6 修改表单属性



```javascript
var btn = document.querySelector('button')
var input = document.querySelector('input')
btn.onclick = function() {
    input.value = '被点击了'
    btn.disabled = true
    this.disabled = true                           //this 指向事件函数调用者  btn
}

```



```
隐藏密码
```



```javascript
var eye = document.getElementById('eye')
var pwd = document.getElementById('pwd')
var flag = 0
eye.onclick = function() {
    if (flag == 0) {
        pwd.type = 'text'
        flag = 1
        this.innerHTML = '关'
    } else {
        pwd.type = 'password'
        flag = 0
        this.innerHTML = '开'
    }
}

```



### 3.7 修改样式属性 在行内 权重高



```
var div = document.getElementById('eye')
div.onclick = function() {
    this.style.backgroundColor = 'pink'
}

```



### 3.8 className修改样式属性



```
样式多的情况 会覆盖以前的类名（可以加上之前的类名加空格）
```



```
 this.className='chang'

```





### 3.9 总结

```
元素内容 innerText和innerHTML
元素属性 src href title alt
表单元素属性 type value disabled
元素样式属性 element.style. className
```



## 4 排他思想



```
先循环所有元素清除样式 再给自己设置元素
```





## 5.获取、设置、移除属性值



```
获取自定义属性值
第一种 element.属性（内置属性）
第二种 element.getAttribute(‘属性’) (自己添加的)

设置元素属性值
第一种 element.属性=‘值’
第二种 element.setAttribute(‘属性’, 值)

移除元素属性 removeAttribute(属性)

```





## 6 节点操作 利用父子集



```
nodeType（节点类型）
nodeName（节点名称）
nodeValue（节点值）
元素节点nodeType为1 属性为2 文本为3（文字 空格 换行）
```



### 6.1 父子节点



```
父节点
parentNode 得到离元素最近的父级节点 找不到返回空
子节点
childNodes（不提倡） 包含所有的子节点 包含换行
```



```
子节点
children
ul.children

第一 和 最后一个节点
firstElementChild lastElementChild
实际开发常用
children[0]
```





### 6.2 兄弟节点



```
nextSibling（下一个） previousSibling（上一个） 包含文本节点
nextElementSibling previousElementSibling 下一个上一个元素节点
```



### 6.3 创建、添加、删除节点(动态)



```
创建节点
document.creatElement(‘tagName’)

添加节点
node.appendChild(child) node父级 child 子级 （后面追加）
node.insertBefore(child, 指定元素) （前面追加）
删除节点
 node.removeChild(child)
```



### 6.4 复制节点



```
node.cloneNode(true)
如果括号里面为空或flase 则只是浅拷贝 只复制节点本身，不复制子节点

innerHTML（不采用字符串拼接，采用数组拼接） 效率高于 creatElement()
```



## 7 DOM核心总结



```
返回的是一个对象，所以叫文档对象模型
```



```
   创建         innerHTML  creatElement()
   增           appenfChild      insertBefore
   删           removeChild
   改           修改dom元素属性，元素内容 样式 属性 表单值
   查           id tagname    querySelector   节点  父子兄
   属性         setAttribute 设置属性   getAttribute  得到属性  removeAttribute 移除属性
   事件         事件源.事件类型=事件处理程序

```













































































