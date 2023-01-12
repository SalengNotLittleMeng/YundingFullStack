# DOM基础

#### DOM简介

###### 1.1  DOM    处理可扩展标记语言的标准编程接口

###### 1.2  DOM树

![image-20230103092943387](https://aaaaaabc.oss-cn-beijing.aliyuncs.com/image-20230103092943387.png)

***DOM把以上内容都看成对象***

#### 获取元素

###### 2.1   如何获取页面元素

   根据ID获取    1.document.getElementById(' id名')     2.get 获得   element  元素  by  通过   驼峰命名法    3.返回的是一个元素对象

​                           console.dir     打印我们返回的元素对象  更好的查看里面的属性和方法

​     根据标签名获取    1.document.getElementsByTagName('  ')   2.返回的是  获取过来元素对象的集合  以伪数组的形式存储的    3.我们要想依次打印里面的元素对象我们可以采取遍历的方式

![image-20230103100518426](https://aaaaaabc.oss-cn-beijing.aliyuncs.com/image-20230103100518426.png)

   通过HTML5新增的方法获取    1.getElementsByClassName( )  根据类名获得某些元素集合

​                                                       2.querySelector( )  返回指定选择器的第一个元素对象   切记  里面的选择器需要加符号   

​                                                       3.querySelectorAll( )  返回指定选择器的所有元素对象集合

![image-20230103101612374](https://aaaaaabc.oss-cn-beijing.aliyuncs.com/image-20230103101612374.png)

  特殊元素获取        1.获取body元素   document.body    2.获取html元素  document.documentElement 

#### 事件基础

###### 3.1  事件三要素

![image-20230103102511706](https://aaaaaabc.oss-cn-beijing.aliyuncs.com/image-20230103102511706.png)

###### 3.2  执行事件步骤  

1.获取事件源   

2.绑定事件 注册事件

3.添加事件处理程序

![image-20230103102854044](https://aaaaaabc.oss-cn-beijing.aliyuncs.com/image-20230103102854044.png)

#### 操作元素

###### 4.1  改变元素内容

element.innerText     从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉

element.innerHTML     起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行

***两者的区别***：前者不可识别html标签，非标准，去除空格和换行。后者可以。

###### 4.2 常用元素的属性操作

1.innerText，innerHTML改变元素内容

2.src，href

3.id，alt，title

###### 4.3 表单元素的属性操作

利用DOM可以操作如下表单元素的属性：type，value，checked，selected，disabled

如果想要某个表单被禁用 不能再点击 disabled 如这个按钮被禁用：btn.disabled = true;

###### 4.4  样式属性操作

1.element.style     行内样式操作

2.element.className         类名样式操作

注意：1.JS里面的样式采取驼峰命名法   如   fontSize    backgroundColor

​            2.JS修改style 样式操作，产生的是行内样式，css权重比较高

​            3.如果样式修改比较多，可以采取操作类名方式(element.className)更改元素样式。

​            4.class因为是个保留字，因此使用className来操作元素类名属性

​            5.className  会直接更改元素的类名，会覆盖原先的类名

​			6.如果想保留原来的，直接两个类写一块

![image-20230103150227994](https://aaaaaabc.oss-cn-beijing.aliyuncs.com/image-20230103150227994.png)

![image-20230103152033987](https://aaaaaabc.oss-cn-beijing.aliyuncs.com/image-20230103152033987.png)

![image-20230103152059194](https://aaaaaabc.oss-cn-beijing.aliyuncs.com/image-20230103152059194.png)

![image-20230109150515371](C:\Users\1\AppData\Roaming\Typora\typora-user-images\image-20230109150515371.png)

***获得焦点事件:  .onfocus     失去焦点事件： .onblur***

###### 4.5  排他思想

如果有同一组元素，我们想要某一个元素实现某种样式，需要用到循环的排他思想算法：

1.所有元素全部清除样式（干掉其他人）

2.给当前元素设置样式（留下我自己）

3.注意顺序不能颠倒，首先干掉其他人，再设置自己

###### 4.6  自定义属性的操作

1.获取属性值

element.属性   获取属性值

element.getAttribute('属性')；

区别：element.属性   获取内置属性值（元素本身自带的属性）

​            element.getAttribute('属性')；  主要获得自定义的属性（标准）我们程序员自定义的属性

2.设置属性值

element.属性 = ‘值’     设置内置属性值

element.setAttribute('属性','值')；

3.移除属性

removeAttribute(属性)

###### 4.7 H5自定义属性

***自定义属性目的：是为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中。***

1.设置H5自定义属性    H5规定自定义属性data-开头做为属性名并且赋值。

比如 <div data-index = " "></div>或者使用JS设置 element.setAttribute（‘data-index’，2）

2.获取

1）element.getAttribute('属性')；

#### 节点操作

###### 5.1 利用节点的层级关系来获取元素

1.利用父子兄节点关系获取元素

2.逻辑性强，但是兼容性稍差

###### 5.2字点操作

1.父节点  parentNode   得到的是离元素最近的父级节点（亲爸爸）如果找不到父节点则返回Null

2.子节点  childNodes  得到所有子节点 包含元素节点 文本节点等等  一般不提倡使用

使用 children 获取所有的子元素节点  使用数组的方法获取到第一个 最后一个就是数组的长度减一

firstChild 第一个节点      firstElementChild第一个文本节点

3.兄弟节点  

nextSibling   下一个兄弟节点

nextElementSibling  下一个文本兄弟节点

###### 5.3创建节点

document.createElement('tagName')

###### 5.4 添加节点

1.node.appendChild（child）将一个节点添加到指定父节点的子节点列表末尾。   node 父级   child  子级 后面追加元素

2.node.insertBefore(child,指定元素)；  前面追加元素

***页面添加一个新的元素：1.创建元素 2.添加元素***

###### 5.5 删除节点

node.removeChild(child)

###### 5.6 复制节点

node.cloneNode（）方法返回调用该方法的节点的一个副本。

（）括号里面为空或者里面是false 浅拷贝 只复制标签不复制里面的内容

node.cloneNode（true）深拷贝 全部复制

#### DOM  重点核心

###### 6.1 创建

1.document.write

2.innerHTML

3.createElement

###### 6.2  增

1.appendChild

2.insertBefore

###### 6.3 删

1.removeChild

###### 6.4  改

![image-20230111105740507](C:\Users\1\AppData\Roaming\Typora\typora-user-images\image-20230111105740507.png)

###### 6.5 查

![image-20230111105927385](C:\Users\1\AppData\Roaming\Typora\typora-user-images\image-20230111105927385.png)

###### 6.6 属性操作

1.setAttribute：设置DOM属性

2.getAttribute：得到DOM属性

3.removeAttribute移除属性

###### 6.7  事件操作

![image-20230111110325148](C:\Users\1\AppData\Roaming\Typora\typora-user-images\image-20230111110325148.png)

#### BOM 

#### 注册事件（绑定事件）

###### 1.1  注册事件概述

给元素添加事件，称为注册时间或者绑定事件。注册事件有两种方式：传统方式和方法监听注册事件。

###### 1.2 addEventListener  事件监听方式

eventTarget.addEventListener(type, listener, [useCapture])

type :事件类型字符串，比如click，mouseover，注意这里不要带on

listener：事件处理函数，事件发生时，会调用该监听函数

useCapture：可选参数，是一个布尔值，默认时false。

#### 删除事件 （解绑事件）

###### 2.1  删除事件的方式

1. eventTarget.removeEventListener(type, listener, [useCapture])；
2. eventTarget.detachEvent(eventNameWithOn，callback)；

#### DOM事件流

事件流描述的是从页面中接收事件的顺序。事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流

addEventListener(type, listener, [useCapture])第三个参数如果是true，表示在事件捕获阶段调用事件处理程序；如果是false（或者不写）表示在事件冒泡阶段调用事件处理程序

![image-20230111152605558](https://aaaaaabc.oss-cn-beijing.aliyuncs.com/image-20230111152605558.png)

#### 事件对象

eventTarget.onclick = function(event) {

}

常见事件对象的属性和方法

1. e.target  返回的是触发事件的对象（元素）  this  返回的是绑定事件的对象（元素）    区别e.target 点击了那个元素，就返回那个元素       this那个元素绑定了这个点击事件，那么就返回谁。

###### 阻止默认行为

让链接不跳转 让按钮不提交

var a =  document.querySelector('a')

a.onclick = function(e){

return false;

}

#### 阻止事件冒泡

e .stopPropagation( )

e .cancelBubble = true;

#### 事件委托（代理 委派）

###### 事件委托原理

不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点。

#### 常用的鼠标事件

###### 7.1  禁止

1.contextmenu 我们可以禁用右键菜单

document.addEventListener（‘contextmenu’，function（e）{

e.preventDefault();

}）

2.selectatart  禁止选中文字

document.addEventListener（‘selectatart‘，function（e）{

e.preventDefault();

}）

###### 7.2  鼠标事件对象

1.client  鼠标在可视区域的X和Y坐标

2.page 鼠标在页面文档的X和Y坐标

3.screen  鼠标在电脑屏幕的X和Y坐标

鼠标移动事件：mousemove

#### 常用的键盘事件

###### 常用键盘事件

1.onkeyup   某个键盘按键被松开时触发

2.onkeydown  某个键盘按键被按下时触发

3.onkeypress  某个键盘按键被按下时   触发  但是它不识别功能键  比如  ctrl shift 箭头等   ***1.2不区分大小写 3区分***     

如果使用addEventListener不需要加on        三个事件的执行顺序是：keydown -- keypress  --  keyup

4.keyCode可以得到相应键的ASCII码值

#         BOM浏览器对象模型

#### BOM概述

它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是window。

![image-20230112145012618](https://aaaaaabc.oss-cn-beijing.aliyuncs.com/image-20230112145012618.png)

###### 1.2  BOM 的构成

window 对象是浏览器的顶级对象，它具有双重角色。

1.它是JS访问浏览器窗口的一个接口。

2.它是一个全局对象，定义在全局作用域中的变量，函数都会变成window对象的属性和方法。

#### window对象的常见事件

###### 2.1  窗口加载事件

***window . onload*** 是窗口（页面）加载事件，当文档内容完全加载完会触发该事件（包括图像，脚本文件，CSS文件等），就调用的处理函数。

这种注册事件方式只能写一次，如果有多个，会以最后一个window.onload为准。但是***如果使用addEventListener则没有限制。***

document.addEventListener（’DOMContentLoaded‘，function（）{

}）这个加载快。

###### 2.2  调整窗口大小事件

window.onresize = function（）{}

window.addEventListener（“resize”，function（）{}）

window.onresize是调整窗口大小加载事件，当触发时就调用的处理函数。

注意：

1.只要窗口大小发生像素变化，就会触发这个事件。

2.我们经常利用这个事件完成响应式布局。window.innerWidth当前屏幕的宽度。

#### 定时器

###### 3.1  两种定时器

1.setTimeout（）

2.setInterval（）

###### 3.2  setTimeout

window.setTimeout（调用函数，延迟时间）；

单位是毫秒，可以直接写函数，还可以写函数名  因为定时器很多，我们经常给定时器赋值一个标识符。

###### 3.3  停止 setTimeout（）定时器

window.clearTimeout（timeoutID） window可以省略

###### 3.4 setInterval（）定时器

setInterval（）方法重复调用一个函数，每隔这个时间，就去调用一次回调函数。

###### 3.5  this

1.全局作用域或者普通函数中this指向全局对象window（定时器里面也是）

2.方法中调用谁this就指谁

3.构造函数中this指向构造函数的实例

#### JS执行机制

###### 4.1 JS是单线程

###### 4.2同步和异步

1.先执行执行线中的同步任务

2.异步任务（回调函数）放入任务队列中

一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行线，开始执行。
