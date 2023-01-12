# DOM笔记

文档对象模型(Document Object Model,简称DOM)，是处理可扩展标记语言的标准编程接口。通过DOM接口可以改变网页的内容、结构和样式

## DOM树

![DOM树](https://typora-image-mrz.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE(72).png)

- 文档(document)：一个页面就是一个文档

- 元素(element)：页面中的所有标签都是元素，DOM中使用element表示

- 节点(node)：网页中的所有内容都是节点（标签、属性、文本、注释等）

## 获取元素

### 根据ID获取

```js
getElementById('id')
```

- 网页从上往下加载，所以要先有标签，\<script>标签应该写在标签的下面
- 参数id是大小写敏感的字符串
- 返回的是一个元素对象
- console.dir打印返回的元素对象，更好的查看里面的属性和方法

### 根据标签名

```js
getElementsByTagName('标签名')
```

- 得到的元素内容是动态的
- 以为数组的形式返回带有指定标签名的对象的集合 
- 伪数组：并不是真正意义上的数组，但是具有数组的长度属性，也通过索引进行储存，但是不具备数组其他方法

```js
//还可以获取某个父元素内部所有指定标签名的子元素
element.getElementsByTagName('标签名')
```

- 使用这种方法一定要指明父元素是哪一个元素对象，一般写为：

```js
var ol = document.getElementById('ol')
console.log(ol.getElementsByTagName('li'))
```

### H5新增方法

#### 根据类名获取

```js
document.getElementByClassName('类名')
//根据类名返回元素对象集合
```

#### 根据选择器获取

```js
document,getSelector('选择器');
//根据指定选择器获取第一个元素对象
document,getSelectorAll('选择器');
//根据指定选择器返回所有元素对象
```

- 选择器要加符号

### 特殊元素(html,body)

#### 获取body标签

```js
var bodyEle = document.body;
```

- 返回的是元素对象

#### 获取HTML标签

```js
var htmlEle = document.documentElement;
```

## 事件基础

### 事件

事件三要素：事件源	事件类型	事件处理程序

### 执行事件的步骤

1. 获取事件源
2. 注册（绑定）事件
3. 添加事件处理程序（函数赋值）

```js
var div = document.querySelector('div')
div.onclick =function(){
	console.log();
}
```

### 常见的鼠标事件

1、常用鼠标事件
名称	描述

| 鼠标事件    | 触发条件     |
| ----------- | ------------ |
| onclick     | 鼠标点击左键 |
| onmouseover | 鼠标经过     |
| onmouseout  | 鼠标离开     |
| onfocus     | 获得鼠标焦点 |
| onblur      | 失去鼠标焦点 |
| onmousemove | 鼠标移动     |
| onmouseup   | 鼠标弹起     |
| onmousedown | 鼠标按下     |

### 操作元素

#### 改变元素内容

```js
element.innerText
```

从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉

```js
element.innerHTML
```

从起始位置到终止位置的全部内容，包括html标签，同时空格和换行也会保留

##### innerText和innerHTML的区别

1. innerText不识别HTML标签
2. 这两个属性是可读写的

#### 修改元素属性

以第三次学习任务的\<script>代码为例

```js
<script>
// 1.获取元素
var eye = document.getElementById('eye');
var pwd = document.getElementById('pwd');
// 2.注册事件 处理程序
var flag = 0;
eye.onclick = function () {
	// 点击一次之后，flag变化
	if (flag == 0) {
		pwd.type = 'text';
		eye.src = 'img/Hide.png';
		flag = 1; 
		//赋值操作
	} else {
		pwd.type = 'password';
		eye.src = 'img/Show.png';
		flag = 0;
	}
}
</script>
```

#### 表单元素的属性操作

DOM可以操作如下表单元素的属性

```js
type、value、checked、selected、disabled
```

#### 样式属性操作

```js
element.style
//行内样式操作
element.className
//类名样式操作
```

- JS中div.style属性使用驼峰命名法，比如fontSize,backgroundColor
- className会直接更改元素的类名，会覆盖原先的类名

#### 自定义属性

##### 获取自定义属性

```js
element,getAttribute(`属性`);
//主要获得自定义的属性
```

##### 设置属性值

```js
element.setAttribute('属性','值');
div.setAttribute('index',2);
dic.setAttribute('class','footer')
//直接写class
```

#### H5自定义属性

H5规定自定义属性data-开头作为属性名并且赋值

```js
element.dataset.index
element.dataset['index']
```

## 节点

### 节点获取

#### 父节点(parentNode)

```js
node.parentNode
```

- 得到的是最近的父级节点
- 如果找不到父节点，则返回为空

#### 子节点(childNodes)

##### 获取子节点

```js
parentNode.childNodes
```

- 子节点包含所有元素节点和文本节点等等

- 元素节点与文本节点可以通过nodeType来判断

##### 获取所有元素子节点

```js
parentNode.children
```

- 返回所有的子元素节点

##### 获取第一个/最后一个子节点

```js
parentNode.first/lastChild
```

- 第一个/最后一个子节点，不管是文本节点还是元素节点

```js
parentNode.first/lastElementChild
```

- 返回第一个/最后一个子元素节点

```js
parentNode.children[0]
parentNode.children[parentNode.children.length-1]
```

- 实际开发的写法，既没有兼容性问题又返回第一个/最后一个子元素

#### 兄弟节点()

```js
node.nextSibling
node.previousSibling
```

- 得到的是下一个/上一个兄弟节点，包含元素节点和文本节点

- 找不到则返回null

```js
node.nextElementSibling
node.previousElementSibling
```

- 只获取元素节点

### 操作节点

#### 创建节点

```js
document.creatElement('tagName')
/*---------------------*/
var li = doocument.creatElement('li')
```

#### 添加节点

```js
node.appendChild(child)
/*---------------------*/
var ul = document.querySelector('ul')
ul.appendChild(li)
```

- 后面追加元素，类似于数组中的push

```js
node.insertBrfore(child,，指定元素);
```

#### 删除节点

```js
node.removeChild(child)
/*---------------------*/
ul.removeChild(ul.children[0]);
```

- 从DOM中删除一个子节点，返回删除的节点

#### 复制节点

```js
node.cloneNode()
```

- 括号为空或者里面是false，进行浅拷贝，只复制标签不复制里面的内容

- 括号里为true进行深拷贝

### 创建元素的三种方法

#### docum.write

直接将内容写入页面的内容流，**但是文档流执行完毕，则会导致页面重绘**

#### element.inner HTML

```js
var inner = document.querySelector('.inner');
inner.innerHTML = '<a href='#'>百度</a>'
```

#### document.createElement()

```js
var create = document.querySelector('.create');
var a = document.createElement('a');
create.appendChild(a);
```

## 事件高级

### 注册（绑定）事件

#### 传统方式

- 利用on开头的事件
- 特点：注册事件有唯一性
- 同一个元素同一个事件只能设置一个处理函数

#### 方法监听注册方式

```js
eventTarget.addEventListener(type,listener[,useCapture])
/*---------------------*/
var btns = document.querySelectorAll('button');
btns[1].addEventListener('click',function(){
    alert(22);
})
```

- type：事件类型字符串，比如click、mouseover
- listener：事件处理函数，事件发生时，会调用改监听函数
- useCapture：可选参数，是一个布尔值，默认是flase。
- 同一个元素同一个事件可以注册多个监听器
- 按注册顺序依次执行

#### attachEvent 事件监听方式

```js
eventTarget.attachEvent(eventNameQithOn,callback)
/*---------------------*/
btns[2].attachEvent('onclick',function(){
	alert(11);
})
```

eventNameWithOn：事件类型字符串，比如onclick、onmouseover

callback：事件处理函数，当目标除法事件是回调函数被调用

### 删除（解绑）事件

#### 传统注册方式

```js
eventTarget.onclick = null;
/*---------------------*/
var div = document.querySelector('div')
divs[0].onclick = function(){
	alert(11);
    div[0].onclick = null;
}
```

#### 方法监听注册方式

```js
eventTarget.removeEventListener(type,listener[,useCapture])
/*---------------------*/
function(){
	alert(22);
}
divs[1].addEventListener('click',fn)
divs[1].removeEventListener('click',fn)
```

### DOM事件流

##### DOM事件流理论

事件发生时会在元素节点之间按照特定的顺序传播

DOM时间里分为3个阶段

- 捕获阶段

- 当前目标阶段

- 冒泡阶段

注意：

onclick和attachEvent只能到冒泡阶段

有些事件是没有冒泡的，比如onblur、onfocus、onmouseenter、onmouseleave

##### DOM代码验证

如果addEventListener第三个参数是true，则处于捕获阶段

document->html->body->father->son

```js
var son = document.querySelector('.son')
son.addEventListener('click',function({),true})
/*---------------------*/
var father = document.querySelector('.father')
father.addEventListener('click',function({),true})
```

如果add Event Listener第三个参数是false或者省略，那么处于冒泡阶段

son->father->body->html->document

### 事件对象

#### 概述

```js
div.onclick = function(event){}
```

event就是一个事件对象，写道侦听函数的小括号里面，当形参来看

事件对象只有有了事件才会存在，他是系统给我们自动创建的，不需要我们传递参数

事件对象是我们事件的一系列相关数据的集合

#### 常见事件对象的属性和方法

| 事件对象属性方法    | 说明                                                         |
| ------------------- | ------------------------------------------------------------ |
| e.target            | 返回触发事件对象 标准                                        |
| e.srcElement        | 返回触发事件对象 非标准                                      |
| e.type              | 返回事件类型 比如click mouseover 不带on                      |
| e.cancleBubble      | 该属性阻止冒泡 非标准 ie6-8使用                              |
| e.returnValue       | 该属性阻止默认事件（默认行为） 非标准 ie6-8使用 例如不让链接跳转 |
| e.preventDefault()  | 该属性阻止默认事件（默认行为） 标准 例如不让链接跳转         |
| e.stopPropagation() | 阻止冒泡 标准                                                |

##### 返回事件类型

1. e.target返回的是触发事件的对象（元素）
2. this返回的是绑定事件的对象

```js
var ul = document.querySelector('ul')
ul.addEventListener('click',function(e){
    console.log(this)
    console.log(e.target)
})
```

- 如果点击ul中的li，因为给ul绑定了事件，this就指向ul
- 而e.target指向我们点击的那个对象

##### 阻止默认行为（事件）

让链接不跳转，或者让提交按钮不提交

```js
var a = document.querySelector('a');
a.addEventListener('click',function(e){
	e.preventDefault();
})
```

### 阻止事件冒泡

```
son.addEventListener('click',function(e){
	alert('son');
	e.stopPropagation();
})
```

点击了son不会冒泡触发father的点击事件

### 事件委托（代理、委派）

#### 原理

不给每个子节点单独设置事件监听器，而是将事件监听器设置在其父节点上，然后利用冒泡原理影响设置的每个子节点

```js
var ul = document.querySelector('ul');
ul.addEventListener('click',function(){
	alert('11111');
    e.target.style.backgroundColor = 'pink';
    //精确到点击的那个元素
})
```



### 鼠标事件

#### 常用的鼠标事件

##### 禁止鼠标右键菜单

contextmenu主要控制应该合适显示上下文菜单，主要用于程序员取消默认的上下文菜单

```js
document.addEventListener('contextmenu',function(e){
	e.preventDefault();
})
```

##### 禁止鼠标选中（selectstart 开始选中）

```js
document.addEventListener('selecestart',function(e){
	e.preventDefault();
})
```

#### 鼠标事件对象(MouseEvent)

| 鼠标事件对象 | 说明                                  |
| ------------ | ------------------------------------- |
| e.clientX    | 返回鼠标相对于浏览器窗口可视区的X坐标 |
| e.clientY    | 返回鼠标相对于浏览器窗口可视区的Y坐标 |
| e.pageX      | 返回鼠标相对于文档页面的X坐标         |
| e.pageY      | 返回鼠标相对于文档页面的Y坐标         |
| e.screenX    | 返回鼠标相对于电脑屏幕的X坐标         |
| e.screenY    | 返回鼠标相对于电脑屏幕的Y坐标         |

### 键盘事件	

#### 常用的键盘事件

| 键盘事件   | 触发条件                   |
| ---------- | -------------------------- |
| onkeyup    | 某个按键松开时触发         |
| onkeydown  | 某个按键按下时触发         |
| onkeypress | 某个非功能按键被按下时触发 |

执行顺序：down>press

#### keyCode判断用户按下哪个键

键盘事件对象中的keyCode属性可以得到相应键的ASCII码值

```js
document.addEventListener('keyup',function(e){
	console.log(e.keycode)
})
```

- keyup和keydown不区分大小写，a和A得到的都是65
- kerpress区分大小写
