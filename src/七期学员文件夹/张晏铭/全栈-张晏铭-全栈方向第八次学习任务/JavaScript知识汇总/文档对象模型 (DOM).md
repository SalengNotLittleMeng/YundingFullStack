# 文档对象模型 (DOM)

 它定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。通俗的来说：它会将 web 页面和脚本或程序语言**连接**起来；DOM 并不是一个编程语言，**但如果没有 DOM**，JavaScript 语言**也不会有**任何网页，XML 页面以及涉及到的元素的概念或模型。

#### 1.Document对象：

- document对象的原型链：

 HTMLDocument -> Document -> Node -> EventTarget -> Object. prototype -> null

- document对象表示的是**整个网页**

- **凡是在原型链上存在的对象**的属性和方法都可以通过Document去调用

- 部分属性:

  document . documentElement --> html根元素

  document.head --> head元素

  document. title --> title元素

  document.body --> body元素

  document.links --> 获取页面中所有的超链接

  …

#### 2.通过document来获取已有的元素节点:

```javascript
document.getElementById( )
document.getElementsByClassName( )
document.getElementsByTagName( )
document.getElementsByName( )
//以上四个获取元素节点的方式均会【实时更新】。
document.querySelectorAll( )
document.querySelector( )
//以上两种方式【不会实时更新】。

//除“ID”外其余方式返回的都是一个"{类数组对象}"。

document.createElement( )
//创建一个元素节点
//eg:document.createElement("li") 相当于创建了一个<li></li>
```

#### 3.直接获取元素相关属性：

```javascript
元素.clientHeight
元素.clientWidth
//获取元素内部的宽度和高度(包括内容区和内边距)

元素.offsetHeight
元素.offsetWidth
//获取元素的可见框的大小(包括内容区、内边距和边框)

元素.scrollHeight
元素.scrollWidth
//获取元素滚动区域的大小

元素.offsetParent
//获取元素的定位父元素
//定位父元素:离当前元素最近的开启了定位的祖先元素, 
//如果所有的元素都没有开启定位则返回body

元素.offsetTop
元素.offsetLeft
//获取元素相对于其定位父元素的偏移量

元素.scrollTop
元素.scrollLeft
//获取或设置元素滚动条的偏移量
```

#### 4.直接获取与某元素相关的元素：

```javascript
element.children //获取当前元素的子元素

element.firstElementChild //获取当前元素的第一个子元素

element.lastElementChild  //获取当前元素的最后一个子元素

element.nextElementSibling  //获取当前元素的下一个兄弟元素

element.previousElementSibling  //获取当前元素的前一个兄弟 元素

element.parentNode //获取当前元素的父节点

element.tagName //获取当前元素的标签名
```

#### 5.直接通过元素去修改其中的文本：

```javascript
element.textContent
//获取的是标签中的内容，不会考虑css样式

element.innerText
//innerText获取内容时， 会考虑css样式
//通过innerText去读取CSS样式，会触发网页的重排(计算CSS样式)|

element.innerHTML
//获取或修改元素中的html代码
//可以直接向元素中添加html代码
//innerHTML插入内容时，有被xss注入的风险
```

#### 6.修改元素属性：

```javascript
//方式一:

//读取:
元素.属性名   //(注意，class属性 需要使用className来读取)

//修改:
元素.属性名 = 属性值

//方式二:

//读取:
元素.getAttribute("属性名")

//修改:
元素.setAttribute("属性名","属性值")

//删除:
元素.removeAttribute("属性名")
```

#### 7.解决script因页面加载问题而出现的bug：

 **(1).将script标签编 写到body的最后**
​ (2).将代码编写到window.onload的回调函数中
​ (3).将代码编写到document对象的DOMContentLoaded的回调函数中(执行时机更早)
​ (4).将代码编写到外部的js文件中，然后以defer的形式进行引入(执行时机更早，早于DOMContentLoaded

```javascript
window.onload = function () {}
 
window.addEventListener("load", function () {})

document.addEventListener(" DOMContentLoaded", function () {})
```

#### 8.定时器相关内容：

```javascript
setTimeout() //(间隔一段时间后只执行一次)
-参数:
1.回调函数(要执行的代码)
2.间隔的时间(毫秒)
-关闭定时器
clearTimeout()

setInterval()  //(每间隔一段时间代码就会执行一次)
-参数:
1.回调函数(要执行的代码)
2.间隔的时间(毫秒)
-关闭定时器
clearInterval()

//写法eg:
const timer = setTimeout(() => {
      alert("123")	
},3000)
      clearTimeout(timer)
```

#### 9.CSS样式的修改(两种方法)：

```javascript
//方式一：
//修改样式的方式:元素.style.样式名=样式值
//如果样式名中含有'—'，则需要将样式表修改为“驼峰命名法”
box1.style.width = "400px"
box1.style.height = " 400px"
box1.style.backgroundColor = "yellow"

//方式二：
//除了直接修改样式外，也可以通过修改class属性来间接的修改样式（可以一次性修改多个样式；对JS和CSS进行解耦）
//元素.classList是一个对象，对象中提供了对当前元素的类的各种操作方法
元素.classList.add() //向元素中添加一个或多个class
元素.classList.remove() //移除元素中的一个或多个class
元素.classList.toggle() //切换元素中的class  "类似于一个开关"
元素.classList.replace() //替换class
元素.classList.contains() //检查class

//eg:
box1.classList.add("box2","box3","box4") //在box1中添加box2，3，4的样式（属性）
box1.classList.add("box1")
box1.classList.replace("box1","box2") //让box2的样式取代box1
let result = box1.classList.contains("box3")
```

#### 10.元素剩余内容：

```javascript
//对节点的复制
元素.cloneNode()
//使用cloneNode() 方法对节点进行复制时，它会复制节点的所有特点包括各种属性
/*这个方法默认只会复制当前节点，而不会复制节点的子节点
(但当你在括号内加入true时，它会将元素子节点一起复制)*/

元素.getComputedStyle()
//它会返回一个一个对象，这个对象中包含了当前元素所有的生效的样式
```

#### 11.event事件相关内容：

-事件对象是有浏览器在事件触发时所创建的对象，
**这个对象中封装了事件相关的各种信息**
-通过事件对象可以获取到事件的详细信息
比如:鼠标的坐标、键盘的按键. .
-浏览器在创建事件对象后，会将事件对象作为响应函数的参数传递，
所以我们可以在事件的回调函数中定义一个形参来接收事件对象

```javascript
//多种事件对象有一个共同的祖先Event

event.target    //触发事件的对象

event.currentTarget    //绑定事件的对象(同this)

event.stopPropagation()   //停止事件的传导

event.preventDefault()   //取消默认行为
```

-**事件传导将会引发“冒泡”**：

(1)事件的冒泡就是指事件的向上传导

 **事件的传播机制:**
​ 在DOM中， 事件的传播可以分为三个阶段:
​ 1.**捕获阶段**( 由**祖先元素向目标元素**进行事件的捕获)

 (事件的捕获，指事件从外向内的传导，当前元素触发事件以后，会先从当前元素最大的祖先元素开始 向当前元素进行事件的捕获)

 2.**目标阶段(** 触发事件的对象)
​ 3.**冒泡阶段**

(2)当元素上的**某个事件被触发后**，其祖先元素上的相同事件**也会同时被触发**
(3)冒泡的存在大大的简化了代码的编写，但是在一些场景 下我们并不希望冒泡存在
不希望事件冒泡时，可以**通过事件对象来取消冒泡**（stopPropagation）