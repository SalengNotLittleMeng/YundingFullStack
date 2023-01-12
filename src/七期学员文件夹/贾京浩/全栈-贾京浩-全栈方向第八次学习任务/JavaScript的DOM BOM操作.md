# JavaScript的DOM BOM操作

## API和Web API

API是给成与原提供一种工具，以便能更轻松的实现想要完成的功能——会用就行

Web API是浏览器提供的一套操作浏览器功能和页面元素的API（如：alert）

## DOM

DOM（文档对象模型）是W3C组织推荐的处理可扩展标记语言的标准编程接口，通过W3C定义的一系列DOM接口，可以改变网页的内容，结构和样式

### 1.DOM树

1.1 文档：一个页面就是一个文档DOM中使用document表示

1.2 元素：页面中的所有标签都是元素，DOM中使用element表示

1.3 节点：网页中的所有内容都是节点（标签，属性，文本，注释等），DOM中使用node表示

**DOM把以上东西都看作是对象**

### 2.获取元素

#### 2.1 根据ID获取

使用getElementById()方法可获取带有ID的元素对象（注意getElementById()返回的是一个元素对象object）

```js
var timer = document.getElementById('time'); //参数id是大小写敏感的字符串（字符串所以要加''）
console.log(typeof timer); //typeof用来查看类型
console.dir(timer); //comsole.dir可以打印我们返回的元素对象，更好的查看里面的属性和方法
```

#### 2.2 根据标签名获取

使用getElementsByTagName()方法可以返回带有指定标签名的对象的集合（以伪数组的形式存储—即使页面中只有一个标签）（如果页面中没有该元素，则返回空的伪数组）

```html
<ul>
    <li>知否知否，应是绿肥红瘦</li>
    <li>知否知否，应是绿肥红瘦</li>
    <li>知否知否，应是绿肥红瘦</li>
    <li>知否知否，应是绿肥红瘦</li>
</ul>
<ol id="ol">
    <li>知否知否，应是蓝瘦香菇</li>
    <li>知否知否，应是蓝瘦香菇</li>
    <li>知否知否，应是蓝瘦香菇</li>
    <li>知否知否，应是蓝瘦香菇</li>
</ol>
<script>
	var lis = document.getElementsByTagName('li');
    console.log(lis);
    console.log(lis[0]);
    //可以采取遍历的方式依次打印里面的元素对象
    for(var i = 0; i < lis.length; i++){
        console.log(lis[i]);
    } //得到元素对象是动态的，即改变上边信息不需要改变js
    //也可以获取某个元素（父元素）内部所有指定标签名的子元素
    //element.getElementsByTagName('标签名'); 注意父元素必须是单个对象（必须声明是哪一个元素对象），获取的时候不包括父元素自己
    var ol = document.getElementsByTagName('ol');
    console.log(ol[0].getElementsByTagName('li')); //由于该方法返回的是伪数组，而父元素必须是单个对象，所以用ol[0]
    //或者
    var ol = document.getElementsById('ol');
    console.log(ol.getElementByTagName('li'));
</script>
```

#### 2.3 通过HTML5新增的方法获取

2.3.1 通过getElementsByClassName()根据类名返回元素对象集合

```html
<div class="box">盒子1</div>
<div class="box">盒子2</div>
<ul id="nav">
    <li>首页</li>
    <li>产品</li>
</ul>
<script>
    var boxs = document.getElementsByClassName('box')；
    console.log(boxs);
</script>
```

2.3.2 通过querySelector()根据指定选择器返回第一个元素对象（返回指定选择器的第一个元素对象）

```js
var firstBox = document.querySelector('.box');
console.log(firstBox); //<div class="box">盒子1</div>
var nav = document.querySelector('#nav');
console.log(nav); //<ul id="nav">...</ul>
var li = document.querySelector('li');
console.log(li); //<li>首页</li>
```

2.3.3 通过querySelectorAll()根据指定选择器返回所有元素对象

```js
var allBox = document.querySelectorAll('.box');
console.log(allBox);
```

#### 2.4 特殊元素获取

2.4.1 获取<body>标签

```js
var bodyEle = document.body;
console.log(bodyEle);
```

2.4.2 获取<html>标签

```js
var htmlEle = document.documentElement;
console.log(htmlEle);
```

### 3.事件基础

#### 3.1 事件：可以被JS侦测到的行为       触发——响应机制

**网页中的每个元素都可以产生某些可以出发js的事件**

#### 3.2 事件由三部分组成：事件源  事件类型  事件处理程序

3.2.1 事件源：事件被触发的对象（按钮）

3.2.2 事件类型：如何触发  什么事件（如：鼠标点击onclick/鼠标经过/键盘按下）

3.2.3 事件处理程序：通过一个函数赋值的方式完成

```js
var btn = document.getElementById('btn');
btn.onclick = function() {
    alert('点秋香')
}
```

#### 3.3 执行时事件的步骤

3.3.1 获取事件源

3.3.2 注册事件（绑定事件）        **可以不添加事件，即一打开页面即开始事件处理程序**

3.3.3 添加事件处理程序（采用函数赋值的形式）

```html
<div>123</div>
<script>
	var div = document.querySelector('div');
    div.onclick = function() {
        console.log('我被选中了');
    }
</script>
```

##### 常见的鼠标事件：

| 鼠标事件    | 触发条件         |
| ----------- | ---------------- |
| onclick     | 鼠标点击左键触发 |
| onmouseover | 鼠标经过触发     |
| onmouseout  | 鼠标离开触发     |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动触发     |
| onmouseup   | 鼠标弹起触发     |
| onmousedown | 鼠标按下触发     |

### 4.操作元素

可以利用DOM操作元素来改变元素里面的内容，属性等

#### 4.1 改变元素内容

4.1.1 elemrnt.innerText：从起始位置到终止位置的内容，但他去除html标签，同时空格和换行也会去掉（只变文字）

```html
<button>显示当前系统时间</button>
<div>某个时间</div>
<script>
	var btn = document.querySelector('button');
    var div = document.querySelector('div');
    btn.onclick = function() {
        div.innerText = '<strong>2019-6-6</strong>'; //其中若添加html标签则不会被识别，会直接打印出来-<strong>2019-6-6</strong>
    }
</script>
```

4.1.2 element.innerHTML：起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行

```html
<div>123</div>
<script>
	var div = document.querySelector('div');
    div.innerHTML = '<strong>2019-6-6</strong>'; //2019-6-6会加粗
</script>
```

**这两个属性是可以读写的：**

```html
<div>
	我是文字
    <span>123</span>
</div>
<script>
	var div = document.querySelector('div');
    console.log(span.innerText); //我是文字  123
    console.log(span.innerHTML); //保留空格和换行且识别HTML
    /*
    我是文字
    <span>123</span>
    */
</script>
```

***一般情况下就直接使用innerHTML***

#### 4.2 常见元素的属性操作

```html
<button id="ldh">刘德华</button>
<button id="zxy">张学友</button> <br>
<img src="images/ldh.jpg" alt="" title="刘德华">
<script>
	var ldh = document.getElementById('ldh');
    var zxy = document.getElementById('zxy');
    var img = document.querySelector('img');
    zxy.onclick = function() {
        img.src = 'images/zxy.jpg';
        img.title = '张学友';
    }
    ldh.onclick = function() {
        img.src = 'images/ldh.jpg';
        img.title = '刘德华';
    }
</script>
```

#### 4.3 表单元素的属性操作

type   value   checked   selected   disabled

```html
<button>按钮</button>
<input type="text" value="输入内容">
<script>
    var btn = document.querySelector('button');
    var input = document.querySelector('input');
    btn.onclick = function() {
        input.value = '被点击了';
        input.disabled = 'true'; //表示button按钮被点击一次之后禁用
        //this.disabled = 'true';
    }
</script>
```

***要使密码从“星号”变成可视文本，将type中的password改为text就可以，但是写代码的时候发现：密码文本框在输入完密码之后自己就会在后边显示一个小眼睛，所以不写了***

#### 4.4 样式属性（元素的大小，颜色，位置等）操作

```html
<style>
    div {
        width: 200px;
    	height: 200px;
    	background-color: pink;
    }
</style>
<body>
    <div></div>
    <script>
    	var div = document.querySelector('div');
        div.onclick = function() {
            div.style.backgroundColor = 'purple'; //style中的属性采取驼峰命名法
            this.style.width = '20px';
        }
    </script>
</body>
```

***JS 修改 style 样式操作，产生的是行内样式，css权重比较高***

**点击❌关闭某个东西：**

```html
<div class="box">
    <img src="image/tao.png" alt="">
    <i class="close-btn">x</i>
</div>
<script>
	var btn = document.querySelector('.close-btn');
    var box = document.querySelector('.box');
    btn.onclick = function() {
        box.style.display = 'none'; //隐藏盒子   默认display是block
    }
</script>
```

