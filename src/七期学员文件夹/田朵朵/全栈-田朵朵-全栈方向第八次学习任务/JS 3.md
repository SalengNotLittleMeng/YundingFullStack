# BOM和DOM

## Web APls

### 能够说出Web APls阶段与JavaScript语法阶段的关联性

#### Web APls和JS基础关联性

##### 1.1	JS的组成

![](https://derrrrrrr.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20230105_203810.png)

##### 1.2	JS基础阶段以及Web APls阶段

###### JS基础阶段

ECMAScript基础语法为后面做铺垫

###### Web APls阶段

是JS的应用，大量使用JS基础语法做交互效果

##### 2.1	API

API（Application Promgramming Interface,应用程序编程接口）是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节

简单理解：**API是给程序员提供的一种工具，以便能更轻松的实现想要完成的功能**

##### 2.2	Web API

**Web API是浏览器**提供的一套操作**浏览器功能**和**页面元素**的**API**（BOM和DOM）

现阶段我们主要针对于浏览器讲解常用的API，主要针对浏览器做交互效果

[MDN详细API]: https://developer.mozilla.org/zh-CN/docs/Web/API

因为Web API很多，所以我们将这个阶段成为Web APls

##### 2.3	API和Web API总结

1.API是为我们程序员提供的一个接口，帮助我们实现某种功能，我们会使用就可以了，不必纠结内部如何实现

2.Web API主要是针对于浏览器提供的接口，主要针对于浏览器做交互效果

3.Web API一般都有输入和输出（函数的传参和返回值），Web API很多都是方法（函数）

4.学习Web API可以结合前面学习内置对象方法的思路学习

------

# DOM

## 1.DOM简介

### 1.1	什么是DOM

文档对象模型(Doucment Object Model,简称DOM),是W3C组织推荐的处理可扩展标记语言(HTML或者XML)的标准编程接口

W3C已经定义了一系列的DOM接口,通过这些DOM接口可以改变网页的内容,结构和样式

### 1.2	DOM树

![](https://derrrrrrr.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20230105_210122.png)

#### 文档

一个页面就是一个文档,DOM中使用document表示

#### 元素

页面中的所有标签都是元素,DOM中使用element表示

#### 节点

网页中的所有内容都是节点(标签,属性,文本,注释等),DOM中使用node表示

***DOM把以上内容都看作是对象***

## 2.获取元素

###  2.1	如何获取页面元素

DOM在我们实际开发中主要用来操作元素

获取页面中的元素可以使用以下几种方式:

1.根据ID获取

2.根据标签名获取

3.通过HTML 5新增的方法获取

4.特殊元素获取

### 2.2	根据ID获取

使用 `getElementById()` 方法可以获取带有ID的元素对象

1.因为我们文档页面从上往下加载,所以先得有标签,所以我们script写到标签的下面

2.get获得	element元素	by通过	驼峰命名法

3.参数id是大小写敏感的字符串

4.返回的是一个元素对象

5.`console.dir` 打印我们返回的元素对象,更好的查看里面的属性和方法

```
<body>
    <div id="time">2019-9-9</div>
    <script>
        var timer = document.getElementById('time');
        console.log(timer);
        console.log(typeof timer);
        console.log(timer);
    </script>
</body>
```

### 2.3	根据标签名获取

使用 `getElementsByTagName()` 方法可以返回带有指定标签名的**对象的集合**

1.返回的是 获取过来元素对象的集合 以伪数组的形式存储的

2.我们想要依次打印里面的元素对象我们可以采取遍历的方式

3.如果页面中只有一个 `li` ,返回的还是伪数组的形式

4.如果页面中没有这个元素,返回的是空的伪数组的形式

5.`document.getElementsByTagName('标签名');`

```
<ul>
	<li>知否知否应是等你好久</li>
    <li>知否知否应是等你好久</li>
    <li>知否知否应是等你好久</li>
    <li>知否知否应是等你好久</li>
    <li>知否知否应是等你好久</li>
</ul>
<ol>
	<li>生僻字</li>
	<li>生僻字</li>
	<li>生僻字</li>
	<li>生僻字</li>
</ol>
<script>
	var lis = document.getElementsByTagName('li');
    console.log(lis);
    console.log(lis[0]);
    for(var i = 0; i < lis.length; i++) {
    	console.log(lis[i])
    }
    
    var ol = document.getElementsByTagName('ol');//[ol]
    console.log(ol[0].getElementsByTagName('li'));
</script>
```

`document.getElementsByTagName('标签名');`

###### 注意

1.因为得到的是一个对象的集合,所以我们想要操作里面的元素就需要遍历

2.得到元素对象是动态的

3.父元素必须是**单个对象(必须指明是哪一个元素对象)**,获取的时候不包括父元素自己

### 2.4	通过HTML5新增的方法获取

1.`document.getElementsByClassName('类名');`

根据类名返回元素对象集合

2.`document.querySelector('选择器');`

根据指定选择器返回第一个元素对象

切记里面的选择器要加符号  `.box`	`#nav`

3.`document.querySelectorAll('选择器');`

根据指定选择器返回  返回指定选择器的所有元素对象集合

```
<body>
    <div class="box">盒子</div>
    <div class="box">盒子</div>
    <div id="nav">
        <ul>
            <li>首页</li>
            <li>产品</li>
        </ul>
    </div>
    <script>
        var boxs = document.getElementsByClassName('box');
        console.log(boxs);
        var firstBox = document.querySelector('.box');
        console.log(firstBox);
        var nav = document.querySelector('#nav');
        console.log(nav);
        var li = document.querySelector('li');
        console.log(li);
        var allBox = document.querySelectorAll('.box');
        console.log(allBox);
        var lis = document.querySelectorAll('li');
        console.log(lis);
    </script>
</body>
```

### 2.5	获取特殊元素(body,html)

#### 获取body元素

`document.body`

返回body元素对象

#### 获取html元素

`document.documentElement`

返回html元素对象

```
<body>
    <script>
        var bodyEle = document.body;
        console.log(bodyEle);
        console.dir(bodyEle);
        //var htmlEle = document.html;
        var htmlEle = document.documentElement;
        console.log(htmlEle);
    </script>
</body>
```

## 3.事件基础

### 3.1	事件概述

JavaScript使我们有能力创建动态页面,而时间是可以被JavaScript侦测到的行为

简单理解:触发--响应机制

网页中的每个元素都可以产生某些可以触发JavaScript的事件,例如:我们可以在用户点击某按钮时产生一个事件,然后去执行某些操作

1.事件是由三部分组成,事件源,事件类型,事件处理程序,我们也称为事件三要素

(1)事件源

事件被触发的对象	谁	按钮

(2)事件类型

如何触发	什么事件	比如鼠标点击(onclick)还是鼠标经过还是键盘按下

(3)事件处理程序

通过一个函数赋值的方式完成

```
<body>
	//点击一个按钮,弹出对话框
    <button id="btn">唐伯虎</button>
    <script>
        var btn = document.getElementById('btn');
        btn.onclick = function() {
            alert('点秋香');
        }
    </script>
</body>
```

### 3.2	执行事件的步骤

1.获取事件源

2.注册事件(绑定事件)

3.添加事件处理程序(采取函数赋值形式)

```
<body>
    <div>123</div>
    <script>
        //点击div，控制台输出  我被选中了
        var div = document.querySelector('div');
        div.onclick = function() {
                console.log('我被选中了');
        }
    </script>
</body>
```

### 3.3	常见的鼠标事件

| 鼠标事件    | 触发事件         |
| ----------- | ---------------- |
| onclick     | 鼠标点击左键触发 |
| onmouseover | 鼠标经过触发     |
| onmouseout  | 鼠标离开触发     |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动触发     |
| onmouseup   | 鼠标弹起触发     |
| onmousedown | 鼠标按下触发     |

### 3.4	分析事件三要素

下拉菜单三要素

关闭广告三要素

## 4.操作元素

JavaScript的DOM操作可以改变网页内容,结构和样式,我们可以利用DOM操作元素来改变元素里面的内容,属性等,注意一下都是属性

### 4.1	改变元素的内容

`element.innerText`

从起始位置到终止位置的内容,但他去除html标签,同时空格和换行也会去掉

`element.innerHTML`

起始位置到终止位置的全部内容,包括html标签,同时保留空格和换行

```
<body>
    <button>显示当前系统时间</button>
    <div>某个时间</div>
    <script>
        //当我们点击了按钮，div里面的文字会发生变化
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        btn.onclick = function() {
            div.innerText = '2019-6-6';
        }
    </script>
</body>
```

```
<body>
    <button>显示当前系统时间</button>
    <div>某个时间</div>
    <script>
        //当我们点击了按钮，div里面的文字会发生变化
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        btn.onclick = function() {
            div.innerText = getDate();
        }
        function getDate() {
            var date = new Date();
            //我们写一个2019年5月1日星期三
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var dates = date.getDate();
            var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
            var day = date.getDate();
            return '今天是：' + year + '年' + month + '月' + dates + '日' + arr[day];
        }
    </script>
</body>
```

我们元素可以不用添加事件

```
<body>
    <button>显示当前系统时间</button>
    <div>某个时间</div>
    <p>1123</p>
    <script>
        //当我们点击了按钮，div里面的文字会发生变化
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        btn.onclick = function() {
            div.innerText = getDate();
        }
        function getDate() {
            var date = new Date();
            //我们写一个2019年5月1日星期三
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var dates = date.getDate();
            var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
            var day = date.getDate();
            return '今天是：' + year + '年' + month + '月' + dates + '日' + arr[day];
        }
        var p = document.querySelector('p');
        p.innerText = getDate();
    </script>
</body>
```

##### `innerText` 和 `innerHTML` 的区别

1. `innerText`不识别html标签,非标准,去除空格和换行
2. `innerHTML`识别html标签,W3C标准,保留空格和换行
3. 这两个属性是可读写的,可以获取元素里面的内容

### 4.2	常用元素的属性操作

```
1.innerText,innerHTML改变元素内容
2.src,herf
3.id,alt,title
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230105223549899.png)

##### 练习

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230105223747084.png)

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230105223819190.png)

```
<body>
    <img src="../01. 高数上 【蜂考速成课】.pdf" alt="">
    <div>上午好</div>
    <script>
        var img = document.querySelector('img');
        var div = document.querySelector('div');
        //得到当前小时数
        var date = new Date();
        var h = date.getHours();
        //判断小时数改变图片和文字信息
        if(h < 12) {
            img.src = '../1 高数上【蜂考系统课】.pdf'
            div.innerHTML = '上午好';
        } else if (h < 18) {
            img.src = '../QQ图片20221230090433.jpg';
            div.innerHTML = '下午好';
        } else{
            img.src = '../不定积分的解题思路及技巧总结v1_by零蛋大(1).pdf'
            div.innerHTML = '晚上好';
        }
    </script>
</body>
```

### 4.3	表单元素的属性操作

利用DOM可以操作如下表单元素的属性:

`type、value、checked、selected、disabled`

```
<body>
    <button>按钮</button>
    <input type="text" value="输入内容">
    <script>
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        btn.onclick = function() {
            //input.innerHTML = '点击了';  这个是普通盒子比如div标签里面的内容
            //表单里面的值 文字内容是通过value来修改的
            input.value = '被点击了';
            //如果想要某个表单被禁用 不能再点击 disabled 我们想要这个按钮 button禁用
            // btn.disabled = true;
            this.disabled = true;
            //this指向的是事件函数的调用者btn
        }
    </script>
</body>
```

##### 练习

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230105230253255.png)

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230105230353356.png)

参考

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=17&vd_source=90829399ed2e00a55de466b3215c30a2

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=18&vd_source=90829399ed2e00a55de466b3215c30a2

### 4.4	样式属性操作

我们可以通过JS修改元素的大小,颜色,位置等样式

```
1.element.style	行内样式操作
2.element.className	类名样式操作
```

注意:

1.JS里面的样式采取驼峰命名法,比如fontsize,backgroundcolor

2.JS修改style样式操作,产生的是行内样式,css权重比较高

3.如果样式修改较多,可以采取操作类名方式更改元素样式

4.class因为是个保留字,因此使用 `className`来操作元素类名属性

5.`className`会直接更改元素的类名,会覆盖原先的类名

```
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <div></div>
    <script>
        var div = document.querySelector('div');
        div.onclick = function() {
            this.style.backgroundColor = 'purple';
            this.style.width = '250px';
        }
    </script>
</body>
```

##### 练习一

参考:

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=20&vd_source=90829399ed2e00a55de466b3215c30a2

##### 练习二

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230105232032541.png)

参考:

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=21&vd_source=90829399ed2e00a55de466b3215c30a2

##### 练习三

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230105232217791.png)

参考:

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=22&vd_source=90829399ed2e00a55de466b3215c30a2

##### 通过className更改元素样式

1.使用 `element.style` 获得修改元素样式,如果样式比较少或者功能简单的情况下使用

```
<div>文本<div>
<script>
	var test = document.querySelector('div');
	test.onclick = function() {
		this.style.backgroundColor = 'purple';
		this.style.color = '#fff';
		this.style.fontsize = '25px';
		this.style.marginTop = '100px';
	}
</script>
```

2.我们可以通过修改元素的`className`更改元素的样式,适合于样式较多或者功能复杂的情况

```
//给div设置一个类名change
//在css中用类名设置div的属性
//以下为HTML
<div>文本<div>
<script>
	var test = document.querySelector('div');
	test.onclick = function() {
		//this.className = 'change';
		//如果想要保留原先的类名,我们可以这么做,多类名选择器
		this.className = 'first change';
	}
</script>
```

##### 练习四

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230105234227482.png)

参考:

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=24&vd_source=90829399ed2e00a55de466b3215c30a2

#### 操作元素总结

![](https://derrrrrrr.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20230105_234423.png)

##### 练习五

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230105234527473.png)

### 4.5	排他思想

如果有同一组元素,我们想要某一个元素实现某种样式,需要用到循环的排他思想算法:

1.所有元素全部清除样式(干掉其他人)

2.给当前元素设置样式(留下我自己)

3.注意顺序不能颠倒,首先干掉其他人,再设置自己

```
<body>
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>
    <button>按钮4</button>
    <button>按钮5</button>
    <script>
        //1.获取所有按钮元素
        var btns = document.getElementsByTagName('button');
        //btns得到的是伪数组，里面的每一个元素btns[i]
        for(var i = 0; i < btns.length; i++) {
            //(1)我们先把所有的按钮背景颜色去掉
            for(var i = 0; i < btns.length; i++) {
                    btns[i].style.backgroundColor = '';
            }
            //(2)然后才让当前的元素背景颜色为pink
            this.style.backgroundColor = 'pink';
        }
    </script>
</body>
```

##### 练习一

百度换肤

参考:

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=27&vd_source=90829399ed2e00a55de466b3215c30a2

##### 练习二

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230105235732126.png)

参考:

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=28&vd_source=90829399ed2e00a55de466b3215c30a2

##### 练习三

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230105235822644.png)

参考:

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=29&vd_source=90829399ed2e00a55de466b3215c30a2

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=30&vd_source=90829399ed2e00a55de466b3215c30a2

### 4.6	自定义属性的操作

##### 1.获取属性值

`element.属性`获取属性值

`element.getAttribute('属性');`

区别:

`element.属性`获取内置属性值(元素本身自带的属性)

`element.getAttribute('属性');`主要获得自定义的属性(标准)我们程序员自定义的属性

```
<body>
    <div id="demo" index="1"></div>
    <script>
        var div = document.querySelector('div');
        //1.获取元素的属性值
        console.log(div.id);
        console.log(div.getAttribute('id'));
        console.log(div.getAttribute('index'));
    </script>
</body>
```

##### 2.设置属性值

`element.属性='值'`设置内置属性值

`element.setAttribute('属性','值');`

区别:

`element.属性='值'`设置内置属性值

`element.setAttribute('属性','值');`主要设置自定义的属性(标准)

```
<body>
    <div id="demo" index="1" class="nav"></div>
    <script>
        var div = document.querySelector('div');
        //1.获取元素的属性值
        console.log(div.id);
        console.log(div.getAttribute('id'));
        console.log(div.getAttribute('index'));
        //2.设置元素属性值
        div.id = 'test';
        div.className = 'navs';
        //主要针对自定义属性
        div.setAttribute('inde',2);
        div.setAttribute('class','footer');//class特殊，不写className
    </script>
</body>
```

##### 3.移除属性

`element.removeAttribute('属性');`

```
//接上面还是在script中写
div.removeAttribute('index');
```

##### 练习

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230106001454742.png)

参考:

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=33&vd_source=90829399ed2e00a55de466b3215c30a2

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=34&vd_source=90829399ed2e00a55de466b3215c30a2

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=35&vd_source=90829399ed2e00a55de466b3215c30a2

### 4.7	H5自定义属性

自定义属性目的:是为了保存并使用数据,有些数据可以保存到页面中而不用保存到数据库中

自定义属性获取是通过 `getAttribute('属性');` 获取

但是有些自定义属性很容易引起歧义,不容易判断是元素的内置属性还是自定义属性

```
<body>
    <div getTime="20"></div>
    <script>
        var div = document.querySelector('div');
        // console.log(div.getTime);
        console.log(div.getAttribute('getTime'));
    </script>
</body>
```

H5给我们新增了自定义属性

##### 1.设置H5自定义属性

H5规定自定义属性 `data-`开头作为属性名并且赋值

比如 `<div data-index= "1"></div>`

```
<body>
    <div getTime="20" data-index="2" data-list-name="andy"></div>
    <script>
        var div = document.querySelector('div');
        // console.log(div.getTime);
        console.log(div.getAttribute('getTime'));
        div.setAttribute('data-time',20);
        console.log(div.getAttribute('data-index'));
        console.log(div.getAttribute('data-list-name'));
    </script>
</body>
```

##### 2.获取H5自定义属性

1.兼容性获取 `element.getAttribute('data-index');`

2.H5新增 `element.dataset.index`或者 `element.dataset['index']` ie 11才开始支持

他只能获取data-开头的

```
//接上面在script中

//dataset是一个集合里面存放了所有以data开头的自定义属性
console.log(div.dataset);
console.log(div.dataset.inde);
console.log(div.dataset['index']);

//如果自定义属性里面有多个-链接的单词,我们获取的时候采取驼峰命名法
console.log(div.dataset.listName);
console.log(div.dataset['listName']);
```

## 5.节点操作

### 5.1	为什么学节点操作

获取元素通常使用两种方式:

#### 1.利用DOM提供的方法获取元素

`document.getElementById()`

`document.getElementsByTagName()`

`document.querySelector`等

逻辑性不强,繁琐

#### 2.利用节点层级关系获取元素

利用符字兄节点关系获取元素

逻辑性强,但是兼容性稍差

这两种方式都可以获取元素节点,我们后面都会使用,但是节点操作更简单

### 5.2	节点概述

网页中的所有内容都是节点(标签,属性,文本,注释等),在DOM中,节点使用node来表示

HTML,DOM树中所有的节点均可通过JavaScript进行访问,所有HTML元素(节点)均可被修改,也可以创建或删除

![](https://derrrrrrr.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20230105_210122.png)

一般的,节点至少拥有nodeType(节点类型),nodeName(节点名称)和nodeValue(节点值)这三个基本属性

元素节点	nodeType	为1

属性节点	nodeType	为2

文本节点	nodeType	为3	(文本节点包含文字,空格,换行等)

我们在实际开发中,节点操作主要操作的是**元素节点**

### 5.3	节点层级

利用DOM树可以把节点划分为不同的层级关系,常见的是**符字兄层级关系**

![](https://derrrrrrr.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20230105_210122.png)

#### 1.父级节点

`node.parentNode`

`parentNode`属性可返回某节点的父节点,注意是**最近的一个父节点**

如果指定的节点没有父节点则返回null

```
<body>
    <!-- 节点的优点 -->
    <div>我是div</div>
    <span>我是span</span>
    <ul>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
    </ul>
    <div class="demo">
        <div class="box">
            <span class="erweima">×</span>
        </div>
    </div>

    <script>
        //1.父节点parentNode
        var erweima = document.querySelector('.erweima');
        // var box = document.querySelector('.box');
        //得到的是离元素最近的父级节点(亲爸爸)，如果找不到父级节点就返回null
        console.log(erweima.parentNode);
    </script>
</body>
```

#### 2.子节点

1.`parentNode.childNodes(标准)`

`parentNode.childNodes` 返回包含指定节点的子节点的集合,该集合为即时更新的集合

**注意:**

返回值里面包含了所有的子节点,包括元素节点,文本节点等

如果只想要获得里面的元素节点,则需要专门处理,所以我们一般不提倡使用childNodes

```
var ul = document.querySelector('ul');
for(var i = 0; i < ul.childNodes.length; i++) {
	if(ul.childNodes[i].nodeType === 1) {
		//ul.childNodes[i]是元素节点
		console.log(ul.childNodes[i]);
	}
}
```

```
<body>
    <!-- 节点的优点 -->
    <div>我是div</div>
    <span>我是span</span>
    <ul>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
    </ul>
    <ol>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
    </ol>

    <div class="demo">
        <div class="box">
            <span class="erweima">×</span>
        </div>
    </div>

    <script>
        ///DOM提供的方法(API)获取
        var ul = document.querySelector('ul');
        var lis = ul.querySelectorAll('li');
        //1.子节点 childNodes 所有的子节点包含元素节点，文本节点等等
        console.log(ul.childNodes);
        console.log(ul.childNodes[0].nodeType);
    </script>
</body>
```

2.`parentNode.children(非标准)`

`parentNode.children`是一个只读属性,返回所有的子元素节点,他只返回子元素节点,其余节点不返回(**这个是我们重点掌握的**)

虽然children是一个非标准,但是得到了各个浏览器的支持,因此我们可以放心使用

```
//接上面script中
//2.children获取所有的子元素节点,也是我们实际开发常用的 
console.log(ul.children);
```

3.`parentNode.firstChild`

firstChild返回第一个子节点,找不到则要返回null.同样,也是包含所有的节点

4.`parentNode.lastChild`

5.`parentNode.firstElementChild`

`parentNode.firstElementChild`返回第一个子元素节点,找不到则返回null

6.`parentNode.lastElementChild`

`parentNode.lastElementChild`返回最后一个子元素节点,找不到则返回null

**注意:**

这两个方法有兼容性问题,IE9以上才支持

实际开发中, `firstChild`和 `lastChild`包含其他节点,操作不方便,而 `firstElementChild`和 `lastElementChild`又有兼容性问题,那么我们如何获取第一个子元素节点或最后一个子元素节点呢

*解决方案:*

1.如果想要第一个子元素节点,可以使用`parentNode.children[0]`

```
<body>
    <ol>
        <li>我是li1</li>
        <li>我是li2</li>
        <li>我是li3</li>
        <li>我是li4</li>
    </ol>
    <script>
        var ol = document.querySelector('ol');
        //firstChild第一个子节点，不管是文本节点还是元素节点
        console.log(ol.firstChild);
        console.log(ol.lastChild);
        // firstElementChild返回第一个子元素节点
        console.log(ol.firstElementChild);
        console.log(ol.lastElementChild);
        // 3.实际开发的写法，既没有兼容性问题又返回第一个子元素
        console.log(ol.children[0]);
        console.log(ol.children[3]);
        // 等价于console.log(ol.children[ol.children.length - 1]);
    </script>
</body>
```

##### 练习

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230106012932952.png)

参考:

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=41&vd_source=90829399ed2e00a55de466b3215c30a2

#### 3.兄弟节点

1.`node.nextSibling`

`nextSibling`返回当前元素的下一个兄弟节点,找不到则返回null,同样,也包含所有的节点

2.`node.previousSibling`

`preciousSibling`返回当前元素的上一个兄弟节点,找不到则返回null,同样,也是包含所有的节点

3.`node.nextElementSibling`

`nextElementSibling`返回当前元素的下一个兄弟元素节点,找不到则返回null

4.`node.previousElementSibling`

`previousElementSibling`返回当前元素的上一个兄弟节点,找不到则返回null

注意:

这两个方法有兼容性问题,IE9以上才支持

问:如何解决兼容性问题?

答:自己封装一个兼容性的函数

```
function getNextElementSibling(element) {
	var el = element;
	while(el = el.nextSibling) {
		if(el.nodeType === 1) {
			return el;
		}
	}
	return null;
}
```

```
<body>
    <div>我是div</div>
    <span>我是span</span>
    <script>
        var div = document.querySelector('div');
        console.log(div.nextSibling);
    </script>
</body>
```

### 5.4	创建节点

`document.createElement('tagName')`

`document.createElement()`方法创建由 `tagName`指定的 HTML元素,因为这些元素原先不存在,是根据我们的需求动态生成的,座椅我们也称为**动态创建元素节点**

1.`node.appendChild(child)`

`node.appendChild()`方法将一个节点添加到指定父节点的子节点列表**末尾**,类似于css里面的after伪元素

2.`node.insertBefore(child,指定元素)`

`node.insertBefore()`方法将一个节点添加到父节点的指定子节点前面,类似于css里面的before伪元素

```
<body>
    <ul></ul>
    <script>
        //1.创建节点元素节点
        var li = document.createElement('li');
        //2.添加节点 node.appendChild(child) node父级 child子级 后面追加元素，类似于数组中的push
        var ul = document.querySelector('ul');
        ul.appendChild(li);
        //3.添加节点 node.insertBefore(child,指定元素)
        var lili = document.createElement('li');
        ul.insertBefore(lili,ul.children[0]);
        //4.我们想要页面添加一个新的元素：1.创建元素2.添加元素
    </script>
</body>
```

##### 练习

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230106015235968.png)

参考:

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=44&vd_source=90829399ed2e00a55de466b3215c30a2

### 5.5	删除节点

`node.removeChild(child)`

`node.removeChild()`方法从DOM中删除一个子节点,返回删除的节点

```
<body>
    <button>删除</button>
    <ul>
        <li>熊大</li>
        <li>熊二</li>
        <li>光头强</li>
    </ul>
    <script>
        //1.获取元素
        var ul = document.querySelector('ul');
        var btn = document.querySelector('button');
        //2.删除元素 node.removeChild(child)
        // ul.removeChild(ul.children[0]);
        //3.点击按钮依次删除里面的孩子
        btn.onclick = function() {
            if(ul.children.length == 0) {
                this.disabled = true;
            } else {
                ul.removeChild(ul.children[0]);
            }
        }
    </script>
</body>
```

##### 练习

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230106020117989.png)

参考:

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=46&vd_source=90829399ed2e00a55de466b3215c30a2

### 5.6	复制节点(克隆节点)

`node.cloneNode()`

`node.cloneNode()`方法返回调用该方法的节点的一个副本,也称为克隆节点/拷贝节点

**注意:**

1.如果括号参数为**空或者为false**,则是**浅拷贝**,即只克隆复制节点本身,不克隆里面的子节点

2.如果括号参数为**true**,则是**深度拷贝**,会复制节点本身以及里面所有的子节点

```
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <script>
        var ul = document.querySelector('ul');
        //1. node.cloneNode(); 括号为空或者里面是false，浅拷贝，只赋值标签不复制里面的内容
        //2. node.cloneNode(true); 括号为true，深拷贝，复制标签复制里面的内容
        var lili = ul.children[0].cloneNode(true);
        ul.appendChild(lili);
        ul.children
    </script>
</body>
```

##### 练习

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230106021014988.png)

参考:

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=48&vd_source=90829399ed2e00a55de466b3215c30a2

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=49&vd_source=90829399ed2e00a55de466b3215c30a2

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=50&vd_source=90829399ed2e00a55de466b3215c30a2

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=51&vd_source=90829399ed2e00a55de466b3215c30a2

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=52&vd_source=90829399ed2e00a55de466b3215c30a2

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=53&vd_source=90829399ed2e00a55de466b3215c30a2

### 5.8	三种动态创建元素的区别

`document.wirte()`

`element.innerHTML`

`document.createElement()`

区别：

1.`document.write`是直接将内容写入页面的内容，**但是文档流执行完毕，则它会导致页面全部重绘**

2.`innerHTML`是将内容写入某个DOM节点，不会导致页面全部重绘

3.`innerHTML`创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂

4.`createElement()`创建多个元素效率稍微低一点点，但是结构更清晰

**总结：不同浏览器下，`innerHTML`效率要比 `createElement`**高

```
<body>
    <button>点击</button>
    <p>abc</p>
    <script>
        window.onload = function() {
            document.write('<div>123</div>');
        }
        //三种创建元素方式区别 
        // 1.document.write()  创建元素  如果页面文档流加载完毕，在调用这句话会导致页面重绘
        // document.write('<div>123</div>');
        // var btn = document.querySelector('button');
        // btn.onclick = function() {
            // document.write('<div>123</div>');
        // }
        // 2. innerHTML 创建元素
        var inner = document.querySelector('.inner');
        // for(var i = 0; i <= 100; i++) {
        //     inner.innerHTML += '<a herf="#">百度</a>'
        // }
        var arr = [];
        for(var i = 0; i <= 100; i++) {
            arr.push('<a href="#">百度</a>');
        }
        inner.innerHTML = arr.join('');
        //3. document.createElement() 创建元素
        var create = document.querySelector('.create');
        for(var i = 0; i <= 100; i++) {
            var a = document.createElement('a');
            create.appendChild(a);
        }
    </script>
</body>
```

## 6.DOM核心

文档对象模型（Document Object Model，简称DOM）是W3C组织推荐的处理可扩展标记语言（HTML或者XML）的标准**编程接口**

W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容，结构和样式

1.对于JavaScript,为了能够使JavaScript操作HTML,JavaScript就有了一套自己的dom编程接口

2.对于HTML,dom使得html形成一颗dom树,包含文档,元素,节点

![](https://derrrrrrr.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20230105_210122.png)

我们获取过来的DOM元素是一个对象(object),所以称为文档对象模型

关于DOM操作,我们主要针对于元素的操作,主要有创建,增,删,改,查,属性操作,事件操作

### 6.1	创建

1.`document.write`

2.`innerHTML`

3.`createElement`

### 6.2	增

1.`appendChild`

2.`insertBefore`

### 6.3	删

1.`removeChild`

### 6.4	改

主要修改dom的元素属性,dom的元素内容,属性,表单的值等

1.修改元素属性: `src` ,`href` ,`title`等

2.修改普通元素内容: `innerHTML`,`innerText`

3.修改表单元素: `value`, `type` ,`disabled`等

4.修改元素样式: `style`, `className`

### 6.5	查

主要获取查询dom的元素

1.DOM提供的API方法: `getElementById`, `getElementByTagName`古老用法不太推荐

2.H5提供的新方法: `querySelector`,`querySelectorAll`提倡

3.利用节点操作获取元素: 父(`parentNode`),子(`children`),兄(`previousElementSibling`,`nextElementSibling`)提倡

### 6.6	属性操作

主要针对于自定义属性

1.`setAttribute`:设置dom的属性值

2.`getAttribute`:得到dom的属性值

3.`removeAttribute`:移除属性

### 6.7	事件操作

给元素注册事件,采取`事件源.事件类型 = 事件处理程序`

| 鼠标事件    | 触发事件         |
| ----------- | ---------------- |
| onclick     | 鼠标点击左键触发 |
| onmouseover | 鼠标经过触发     |
| onmouseout  | 鼠标离开触发     |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动触发     |
| onmouseup   | 鼠标弹起触发     |
| onmousedown | 鼠标按下触发     |

------

## 事件高级

### 1.注册事件(绑定事件)

#### 1.1	注册事件概述

给元素添加事件,称为**注册事件**或者**绑定事件**

注册事件有两种方式:**传统方式和方法监听注册方式**

##### 传统注册方式

利用on开头的事件onclick

`<button onclick= "alert(hi~)"></button>`

`btn.onclick = function(){}`

特点:注册事件的**唯一性**

同一个元素同一个事件只能设置同一个处理函数,最后注册的处理函数将会覆盖前面注册的处理函数

```
<body>
    <button>传统注册事件</button>
    <button>方法监听注册事件</button>
    <script>
        var btns = document.querySelectorAll('button');
        btns[0].onclick = function() {
            alert('hi');
        }
        btns[0].onclick = function() {
            alert('hao a u');
        }
    </script>
</body>
```

##### 方法监听注册方式

W3C标准推荐方式

`addEventListener()`他是一个方法

IE9之前的IE不支持此方法,可使用 `attachEvent()`代替

特点:同一个元素同一个事件可以注册多个监听器

按注册顺序依次执行

#### 1.2	`addEventListener`事件监听方式

`eventTarget.addEventListener(type,listener[,useCapture])`

`eventTarget.addEventListener()`方法将指定的监听器注册到eventTarget(目标对象)上,当该对象触发指定的事件时,就会执行事件处理函数

该方法接收三个参数:

**type**:事件类型字符串,比如click,mouseover,注意这里不要带on

**listener**:事件处理函数,事件发生时,会调用该监听函数

**useCapture**:可选参数,是一个布尔值,默认是false,学完DOM事件流后,我们在进一步学习

```
<body>
    <button>传统注册事件</button>
    <button>方法监听注册事件</button>
    <script>
        var btns = document.querySelectorAll('button');
        //1.传统方式注册事件
        btns[0].onclick = function() {
            alert('hi');
        }
        btns[0].onclick = function() {
            alert('hao a u');
        }
        //2.事件侦听注册事件  addEventListener 
        // (1)里面的事件类型是字符串，必定加引号，而且不带on
        // (2)同一个元素，同一个事件可以添加多个侦听器(事件处理程序）
        btns[1].addEventListener('click',function() {
            alert(22);
        })
        btns[1].addEventListener('click',function() {
            alert(33);
        })
    </script>
</body>
```

#### 1.3	`attachEvent`事件监听方式

`eventTarget.attachEvent(eventNameWithOn,callback)`

`eventTarget.attachEvent()`方法将指定的监听器注册到 overTarget(目标对象)上,当该对象触发指定的事件时,指定的回调函数就会被执行

该方法接收两个参数:

**eventNameWithOn**:事件类型字符串,比如onclik,onmouseover,这里要带on

**calllback**:事件处理函数,当目标触发事件时回调函数被调用

```
<body>
    <button>传统注册事件</button>
    <button>方法监听注册事件</button>
    <button>ie9 attchEvent</button>
    <script>
        var btns = document.querySelectorAll('button');
        //1.传统方式注册事件
        btns[0].onclick = function() {
            alert('hi');
        }
        btns[0].onclick = function() {
            alert('hao a u');
        }
        //2.事件侦听注册事件  addEventListener 
        // (1)里面的事件类型是字符串，必定加引号，而且不带on
        // (2)同一个元素，同一个事件可以添加多个侦听器(事件处理程序）
        btns[1].addEventListener('click',function() {
            alert(22);
        })
        btns[1].addEventListener('click',function() {
            alert(33);
        })
        //3.attachEvent   ie9以前的版本支持
        btns[2].attachEvent('onclick',function() {
            alert(11);
        })
    </script>
</body>
```

#### 1.4	注册事件兼容性解决方案

```
function addEventListener(element,eventName,fn) {
	//判断当前浏览器是否支持addEventListener方法
	if(element.addEventListener) {
		element.addEventListener(eventName,fn);
		//第三个参数,默认是false
	} else if(element.attachEvent) {
		element.attachEvent('on' + eventName,fn);
	} else {
		//相当于element.onclick = fn;
		element['on' + eventName] = fn;
	}
}
```

兼容性处理的原则:首先照顾大多数浏览器,再处理特殊浏览器

### 2.删除事件(解绑事件)

#### 2.1	删除事件的方式

##### 1.传统注册方式

`eventTarget.onclick = null;`

#####  2.方法监听注册方式

① `eventTarget.removeEventListener(type,listener[,useCapture])`

② `eventTarget.detachEvent(eventNameWithOn,callback);`

```
<body>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <script>
        var divs = document.querySelectorAll('div');
        divs[0].onclick = function() {
            alert(11);
            //1.传统方式删除事件
            divs[0].onclick = null;
        }
        //2.removeEventListener 删除事件
        divs[1].addEventListener('click',fn)
        //里面的fn不需要调用加小括号
        function fn() {
            alert(22);
            divs[1].removeEventListener('click',fn);
        }
        //3.
        divs[2].attachEvent('onclick',fn1);
        function fn1() {
            alert(33);
            divs[2].detachEvernt('onclick',fn1);
        }
    </script>
</body>
```

#### 2.2	删除事件兼容性解决方案

```
function removeEventListener(element,eventName,fn) {
	//判断但钱浏览器是否支持removeEventListener方法
	if(element.removeEventListener) {
		element.removeEventListener(eventName,fn);
		//第三个参数 默认是false
	} else if(element.detachEvent) {
		element.detachEvent('on' + eventName,fn);
	} else {
		element[on' + eventName] = null;
	}
}
```

### 3.DOM事件流

**事件流**描述的是从页面中接收事件的顺序

**事件**发生时会在元素节点之间按照特定的顺序传播,这个**传播过程**即**DOM事件流**

比如我们给一个div注册了点击事件:

![](https://derrrrrrr.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20230106_143729.png)

DOM事件流分为三个阶段

1.捕获阶段

2.当前目标阶段

3.冒泡阶段

**事件冒泡**:IE最早提出,事件开始时由最具体的元素接收,然后逐级向上传播到DOM最顶层节点的过程

**事件捕获**:网景最早提出,由DOM最顶层节点开始,然后逐级向下传播到具体的元素接收过程

我们向水里面扔一块石头,首先他会有一个下降的过程,这个过程就可以理解为从最顶层向事件发生的最具体元素(目标点)的捕获过程;之后会产生泡泡,会在最低点(最具体元素)之后漂浮到水面上,这个过程相当于事件冒泡

![](https://derrrrrrr.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20230106_144135.png)

##### 注意

1.JS代码中只能执行捕获或者冒泡其中的一个阶段

2.`onclick`和 `attachEvent`只能得到冒泡阶段

3.`addEventListener(type,listener[,useCapture])`第三个参数如果是true,表示在事件捕获阶段调用事件处理程序,如果是false(不写默认就是false),表示在事件冒泡阶段呢调用事件处理程序

4.实际开发中我们很少使用事件捕获,我们更关注事件冒泡

5.有些事件是没有冒泡的,比如`onblur`,`onfocus`,`onmouseover`,`onmouseleave`

6.事件冒泡有时候会带来麻烦,有时候又会帮助很巧妙的做某些事情,后面讲解

```
<body>
    <div>123</div>
    <script>
        //事件对象
        var div = document.querySelector('div');
        // div.onclick = function(event) {
        //     console.log(event);
        // }
        div.addEventListener('click',function(e) {
            console.log(e);
            console.log(window.event);
            e = e || window.event;
            console.log(e);
        })
        //1.event就是一个事件对象，写到我们侦听函数的小括号里面，当形参来看
        //2.事件对象只有有了事件才会存在，它是系统给我们自动创建的，不需要我们传递参数
        //3.事件对象是我们事件的一系列相关数据的集合，跟事件相关的，比如鼠标点击里面就包含了鼠标的相关信息，鼠标坐标啊，如果是键盘事件里面就包含的键盘事件的信息，比如判断用户按下了哪个键
        //4.这个事件对象我们可以自己命名，比如event,evt,e
        //5.事件对象也有兼容性问题，ie678通过window.event兼容性的写法  e = e || window.event;
    </script>
</body>
```

### 4.事件对象

#### 4.1	什么是事件对象

```
eventTarget.onclick = function(event) {}
eventTarget.addEventListener('click',function(event) {})
//这个event就是事件对象,我们还喜欢写成e或者evt
```

官方解释:event对象代表事件的状态,比如键盘按键的状态,鼠标的位置,鼠标按键的状态

简单理解:事件发生后,**跟事件相关的一系列信息数据的集合**都放到这个对象里面,这个对象就是**事件对象event**,他有很多属性和方法

比如:

1.谁绑定了这个事件

2.鼠标触发事件的话,会得到鼠标的相关信息,如鼠标位置

3.键盘触发事件的话,会得到键盘的相关信息,如按了哪个键

#### 4.2	事件对象的使用方法

```
eventTarget.onclick = function(event) {
	//这个event就是事件对象,我们还喜欢写成e或者evt
}
eventTarget.addEventListener('click',function(event) {
	//这个event就是事件对象,我们还喜欢写成e或者evt
})
```

这个event是个形参,系统帮我们设定为事件对象,不需要传递实参过去

当我们注册事件时,event对象就会被系统自动创建,并依次传递给事件监听器(事件处理函数)

#### 4.3	事件对象的兼容性方案

事件对象本身的获取存在兼容问题

1.标准浏览器中是浏览器给方法传递的参数,只需要定义形参e就可以获取到

2.在IE6-8中,浏览器不会给方法传递参数,如果需要的话,需要到window.event中获取查找

**解决**:

`e = e || window.event;`

#### 4.4	事件对象的常见属性和方法(p64)

| 事件对象属性方法    | 说明                                                         |
| ------------------- | ------------------------------------------------------------ |
| e.target            | 返回**触发**事件的对象    标准                               |
| e.srcElement        | 返回**触发**事件的对象     非标准                            |
| e.type              | 返回事件的类型 比如click,mouseover,不带on                    |
| e.cancelBubble      | 该属性阻止冒泡 非标准 ie6-8使用                              |
| e.returnValue       | 该属性阻止默认事件(默认行为) 非标准 ie6-8使用 比如不让链接跳转 |
| e.preventDefault()  | 该属性阻止默认事件(默认行为) 标准 比如不让链接跳转           |
| e.stopPropagation() | 阻止冒泡 标准                                                |

```
<body>
    <div>123</div>
    <ul>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
    </ul>
    <script>
        //常见事件对象的属性和方法
        //1.e.target返回的是触发事件的对象（元素） this返回的是绑定事件的对象（元素）
        //区别：e.target点击了那个元素，就返回那个元素 this 那个元素绑定了这个点击事件，那么就返回谁
        var div = document.querySelector('div');
        div.addEventListener('click',function(e) {
            console.log(e.target);
            console.log(this);
        })
        var ul = document.querySelector('ul');
        ul.addEventListener('click',function(e) {
            //我们给ul绑定了事件，那么this就指向ul
            console.log(this);
            console.log(e.currentTarget);
            //e.target指向我们点击的那个对象，谁触发了这个事件，我们点击的是li e.target指向的就是li
            console.log(e.target);
        })
        //了解兼容性
        //div.onclick = function(e) {
            // e = e || window.event;
            // var target = e.target || e.srcElement;
            // console.log(target);
        // }
        //2.了解跟this有个非常相似的属性 currentTarget   ie678不认识
    </script>
</body>
```

```
<body>
    <div>123</div>
    <a href="http://www.baidu.com">百度</a>
    <form action="http://www.baidu.com">
        <input type="submit" value="提交" name="sub">
    </form>
    <script>
        //常见事件对象的属性和方法
        //1.返回事件类型
        var div = document.querySelector('div');
        div.addEventListener('click',fn);
        function fn() {
            console.log(e.type);
        }
        //2.阻止默认行为（事件）让链接不跳转 或者让提交按钮不提交
        var a = document.querySelector('a');
        a.addEventListener('click',function(e) {
            e.preventDefault();//dom标准写法
        })
        //3.传统的注册方式
        a.onclick = function(e) {
            //普通浏览器 e.preventDefault(); 方法
            e.preventDefault();
            //低版本浏览器 ie678 returnValue 属性
            e.returnValue;
            //我们可以利用return false也能阻止默认行为，没有兼容性问题 特点：return后面的代码执行不了，而且只限于传统的注册方式
            return false;
            alert(11);
        }
    </script>
</body>
```

### 5.阻止事件冒泡

#### 5.1	阻止事件冒泡的两种方式

事件冒泡:开始时由最具体的元素接收,然后逐级向上传播到DOM最顶层节点

事件冒泡本身的特性,会带来的坏处,也会带来的好处,需要我们灵活掌握

##### 阻止事件冒泡

标准写法:利用事件对象里面的`stopPropagation()`方法

`e.stopPropagation()`

非标准写法:IE 6-8 利用事件对象cancelBubble属性

```
<body>
    <div class="father">
        <div class="son">son儿子</div>
    </div>
    <script>
        //常见事件对象的属性和方法
        //阻止冒泡dom推荐的标准stopPropagation()
        var son = document.querySelector('.son');
        son.addEventListener('click',function(e) {
            alert('son');
            e.stopPropagation();//stop停止Propagation传播
            e.cancelBubble = true;//非标准cancel取消 bubble泡泡
        },false);

        var father = document.querySelector('.father');
        father.addEventListener('click',function(e) {
            alert('father');
            e.stopPropagation();//stop停止Propagation传播
        },false);
        document.addEventListener('click',function() {
            alert('document');
        })
    </script>
</body>
```

#### 5.2	阻止事件冒泡的兼容性解决方案

```
if(e && e.stopPropagation) {
	e.stopPropagation();
} else {
	window.event.cancelBubble = true;
}
```

### 6.事件委托(代理,委派)

生活中有如下场景:

咱们班有100个学生,快递员有100个快递,如果一个个的送花费时间较长,同时每个学生领取的时候,也需要排队领取,也花费时间较长,怎么办?

**解决方法**:快递员把100个快递**委托**给班主任,班主任把这些快递放到办公室,同学们下课自行领取即可

**优势**:快递员省事,委托给班主任就可以走了,同学们领取也方便,因为相信班主任

```
   <ul>
        <li>知否知否应有弹框在手</li>
        <li>知否知否应有弹框在手</li>
        <li>知否知否应有弹框在手</li>
        <li>知否知否应有弹框在手</li>
        <li>知否知否应有弹框在手</li>
    </ul>
```

点击每个li都会弹出对话框,以嵌需要给每个li注册事件,是非常辛苦的,而且访问DOM的次数越多,这就会延长整个页面的交互就绪时间

##### 事件委托

事件委托也称为事件代理,在JQuery里面称为事件委派

##### 事件委托的原理

**不是每个子节点单独设置事件监听器,而是事件监听器设置在其父节点上,然后利用冒泡原理影响设置每个子节点**

以上案例给ul注册点击事件,然后利用事件对象的target来找到当前点击的li,因为点击li,事件会冒泡到ul上,ul有注册事件,就会触发事件监听器

##### 事件委托的作用

我们只操作了一次DOM,提高了程序的性能

```
<body>
    <ul>
        <li>知否知否应有弹框在手</li>
        <li>知否知否应有弹框在手</li>
        <li>知否知否应有弹框在手</li>
        <li>知否知否应有弹框在手</li>
        <li>知否知否应有弹框在手</li>
    </ul>
    <script>
        //事件委托的核心原理：给父节点添加侦听器，利用事件冒泡影响每一个子节点
        var ul = document.querySelector('ul');
        ul.addEventListener('click',function(e) {
            // alert('知否知否应有弹窗在手');
            // e.target这个可以得到我们点击的对象
            e.target.style.backgroundColor = 'pink';
        })
    </script>
</body>
```

### 7.常用的鼠标事件

#### 7.1	常用的鼠标事件

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

##### 1.禁止鼠标右键菜单

`contextmenu`主要控制应该何时显示上下文菜单，主要用于程序员取消默认的上下文菜单

```
document.addEventListener('contextmenu',function(e) {
	e.preventDefault();
})
```

##### 2.禁止鼠标选中（ selectstart 开始选中）

```
document.addEventListener('selectstart',function(e) {
	e.preventDefault();
})
```

```
<body>
    我是一段不愿意分享的文字
    <script>
        //1.contextmenu我们可以禁用右键菜单
        document.addEventListener('contextmenu',function(e) {
            e.preventDefault();
        })
        //2.禁止选中文字selectstart
        document.addEventListener('selectstart',function(e) {
            e.preventDefault();
        })
    </script>
</body>
```

#### 7.2	鼠标事件对象

**event**对象代表事件的状态，跟事件相关的一系列信息的集合，现阶段我们主要是用鼠标事件对象**MouseEvent**和键盘事件对象**KeyboardEvent**

| 鼠标事件对象 | 说明                                   |
| ------------ | -------------------------------------- |
| e.clientX    | 返回鼠标相对于浏览器窗口可视区的X坐标  |
| e.clientY    | 返回鼠标相对于浏览器窗口可视区的Y坐标  |
| e.pageX      | 返回鼠标相对于文档页面的X坐标 IE9+支持 |
| e.pageY      | 返回鼠标相对于文档页面的Y坐标 IE9+支持 |
| e.screenX    | 返回鼠标相对于电脑屏幕的X坐标          |
| e.screenY    | 返回鼠标相对于电脑屏幕的X坐标          |

```
 	<style>
        body {
            height: 300px;
        }
    </style>
<body>
    <script>
        //鼠标事件对象
        document.addEventListener('click',function(e) {
            //1.client鼠标在可视区的x和y坐标
            console.log(e.clientX);
            console.log(e.clientY);
            console.log('...........');
            //2.page鼠标在页面文档的x和y坐标
            console.log(e.pageX);
            console.log(e.pageY);
            //3.screen鼠标在电脑屏幕的x和y坐标
            console.log(e.screenX);
            console.log(e.screenY);
        })
    </script>
</body>
```

#### 练习

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230111150256944.png)

参考：

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=70&vd_source=90829399ed2e00a55de466b3215c30a2

### 8.常用的键盘事件

#### 8.1	常用键盘事件

事件除了使用鼠标触发，还可以使用键盘触发

| 键盘事件   | 触发条件                                                     |
| ---------- | ------------------------------------------------------------ |
| onkeyup    | 某个键盘按键被松开时触发                                     |
| onkeydown  | 某个键盘按键被按下时触发                                     |
| onkeypress | 某个键盘按键被按下时触发   **但他不能识别功能键，比如ctrl shift箭头等** |

**注意：**

1.如果使用 `addEventListener` 不需要加 `on`

2.`onkeypress` 和前面两个的区别是，它不识别功能键，比如左右箭头,shift等

3.三个事件的执行顺序是： keydown -- keypress -- keyup

   <script>
        //常用的键盘事件
        //1.keyup按键弹起的时候触发
        // document.onkeyup = function() {
        //     console.log('我弹起了');
        // }
        document.addEventListener('keyup',function() {
            console.log('我弹起了');
        })
        //2.keydown按键按下的时候触发   能识别功能键  比如 ctrl  shift  左右箭头等
        document.addEventListener('keydown',function() {
            console.log('我按下了down');
        })
        //3.keypress按键按下的时候触发  不能识别功能键  比如 ctrl  shift  左右箭头等
        document.addEventListener('keypress',function() {
            console.log('我按下了press');
        })
        //4.三个事件的执行顺序 keydown --> keypress --> keyup
    </script>

#### 8.2	键盘事件对象

| 键盘事件对象**属性** | 说明                  |
| -------------------- | --------------------- |
| keyCode              | 返回**该**键的ASCII值 |

**注意：** `onkeydown` 和 `onkeyup` 不区分字母大小写，`onkeypress`区分字母大小写

在我们实际开发中，我们更多的使用 `keydown` 和 `keyup` ，他能识别所有的键（包括功能键）

`Keypress` 不识别功能键，但是 `keyCode` 属性能区分大小写，返回不同的ASCII值

#### 8.3	ASCII表

![](https://derrrrrrr.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20230111_161310.png)

#### 练习一

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230111163333020.png)

参考：

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=73&vd_source=90829399ed2e00a55de466b3215c30a2

#### 练习二

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230111163428419.png)

参考：

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=74&vd_source=90829399ed2e00a55de466b3215c30a2

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=75&vd_source=90829399ed2e00a55de466b3215c30a2

------

# BOM

## BOM浏览器对象模型

### 1.BOM概述

#### 1.1	什么是BOM

BOM（Browser Object Model）即**浏览器对象模型**，它提供了独立于内容而与**浏览器窗口进行交互的对象**，其核心对象是window

BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性

BOM缺乏标准，JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C，BOM最初是Nestscape浏览器标准的一部分

##### DOM 

文档对象模型

DOM就是把 [**文档**] 当作一个 [**对象**] 来看待

DOM的顶级对象是**document**

DOM主要学习的是操作页面元素

DOM是W3C标准规范

##### BOM

浏览器对象模型

把 [**浏览器**] 当作一个 [**对象**] 来看待

BOM的顶级对象是**window**

BOM学习的是浏览器窗口交互的一些对象

BOM是浏览器厂商在各自浏览器上定义的,兼容性较差

#### 1.2	BOM的构成

BOM比DOM更大，它包含DOM

![](https://derrrrrrr.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20230111_165821.png)

**window对象是浏览器的顶级对象**,它具有双重角色

1.他是JS访问浏览器窗口的一个接口

2.他是一个全局对象,定义在全局作用域中的变量,函数都会变成window对象的属性和方法

在调用的时候可以省略window,前面学习的对话框都属于window对象方法,如 `alert()`, `prompt()` 等

**注意:window下的一个特殊属性 `window.name`**

```html
    <script>
        // window.document.querySelector()
        var num = 10;
        console.log(num);
        console.log(window.num);
        function fn() {
            console.log(11);
        }
        fn();
        window.fn();
        // alert(11);
        // window.alert(11);
        console.dir(window);
        // var name = 10;
        console.log(window.name);
    </script>
```

### 2.window对象的常见事件

#### 2.1	窗口加载事件

```javascript
window.onload = function() {}
或者
window.addEventListener("load",function() {});
```

`window.onload` 是窗口(页面)加载事件,当文档内容完全加载完成会触发该事件(包括图像,脚本文件,CSS文件等),就调用的处理函数

**注意**:

1.有了 `window.onload` 就可以把JS代码写到页面元素的上方,因为onload是等页面内容全部加载完毕,再去执行处理函数

2.`window.onload`传统注册事件方式只能写一次,如果有多个,会以最后一个 `window.onload` 为准

3.如果使用 `addEventListener` 则没有限制

```javascript
document.addEventListener('DOMContentLoaded',function() {})
```

`DOMContentLoaded`事件触发时,仅当DOM加载完成,不包括样式表,图片,flash等等

IE9以上才支持

如果页面的图片很多的话,从用户访问到`onload`触发可能需要较长的时间,交互效果就不能实现,必然影响用户的体验,此时用`DOMContentLoaded`事件比较合适

```
<body>
    <script>
        // window.onload = function() {
        //     var btn = document.querySelector('button');
        //     btn.addEventListener('click',function() {
        //         alert('点击我');
        //     })
        // }
        // window.onload = function() {
        //     alert(22);
        // }
        window.addEventListener('load',function() {
            var btn = document.querySelector('button');
            btn.addEventListener('click',function() {
                alert('点击我');
            })
        })
        window.addEventListener('load',function() {
            alert(22);
        })
        document.addEventListener('DOMContentLoaded',function() {
            alert(33);
        })
        //load等页面内容全部加载完毕，包含页面dom元素，图片，flash，css等等
        //DOMContentLoaded是DOM加载完毕，不包含图片，flash,css等就可以执行，加载速度比load更快一些
    </script>
    <button>点击</button>
</body>
```

#### 2.2	调整窗口大小事件

```
window.onresize = function() {}
window.addEventListener("resize",function() {});
```

`window.onresize`是调整窗口大小加载事件,当触发时就调用的处理函数

**注意**:

1.只要窗口大小发生像素变化,就会触发这个事件

2.我们经常利用这个事件完成响应式布局, `window.innerWidth` 当前屏幕的宽度

```
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
<body>
    <script>
        window.addEventListener('load',function() {
            var div = document.querySelector('div');
            window.addEventListener('resize',function() {
                console.log(window.innerWidth);
                console.log('变化了');
                if(window.innerWidth <= 800) {
                    div.style.display = 'none';
                } else {
                    div.style.display = 'block';
                }
            })
        })
    </script>
    <div></div>
</body>
```

### 3.定时器

#### 3.1	两种定时器

window对象给我们提供了两个非常好用的方法-**定时器**

##### `setTimeout()`

##### `setInterval()`

#### 3.2	`setTimeout()`定时器

```
window.setTimeout(调用函数,[延迟的毫秒数]);
```

`setTimeout()`方法用于设置一个定时器,该定时器在定时器到期后执行调用函数

**注意**:

1.window可以省略

2.这个调用函数可以**直接写函数,或者写函数名**或者采取字符串 '函数名()' 三种形式,第三种不推荐

3.延迟的毫秒数默认省略是0,如果写,必须是毫秒

4.因为定时器可能有很多,所以我们经常给定时器赋值一个标识符

```
    <script>
        //1.setTimeout
        //语法规范：window.setTimeout(调用函数,延时时间);
        //1.这个window在调用的时候可以省略
        //2.这个延时时间单位是毫秒，但是也可以省略，如果省略默认是0
        //3.这个调用函数可以直接写函数，还可以写函数名,还有一个写法 '函数名()'
        //4.页面中可能有很多的定时器，我们经常给定时器加标识符  (名字)
        // setTimeout(function() {
        //     console.log('时间到了');
        // },2000);
        function callback() {
            console.log('爆炸了');
        }
        var timer1 = setTimeout(callback,3000);
        var timer2 = setTimeout(callback,5000);
        setTimeout('callback()',3000);//我们不提倡这个写法
    </script>
```

`setTimeout()`这个调用函数我们也称为**回调函数callback**

普通函数就是按照代码顺序直接调用

而这个函数,**需要等待**时间,时间到了采取调用这个函数,因此称为回调函数

简单理解:回调,就是回头调用的意思,上一件事干不完,再**回**头再**调**用这个**函数**

以前我们讲的 `element.onclick = function(){}`或者 `element.addEventListener("click",fn);`里面的函数也是回调函数

#### 练习

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230111213859977.png)

参考:

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=81&vd_source=90829399ed2e00a55de466b3215c30a2

#### 3.3	停止 `setTimeout()`定时器

```
window.clearTimeout(tineoutID)
```

`clearTimeout()`方法取消了先前通过调用 `setTimeout()`建立的定时器

**注意**:

1.window可以省略

2.里面的参数就是定时器的标识符

```
<body>
    <button>点击停止定时器</button>
    <script>
        var btn = document.querySelector('button');
        var timer = setTimeout(function() {
            console.log('爆炸了');
        },5000);
        btn.addEventListener('click',function() {
            clearTimeout(timer);
        })
    </script>
</body>
```

#### 3.4	`setInterval()`定时器

```
window.setInterval(回调函数,[间隔的毫秒数]);
```

`setInterval()`方法是重复调用一个函数,每隔这个时间,就去调用一次回调函数

**注意**:

1.window可以省略

2.这个调用函数可以**直接写函数,或者写函数名**或者采取字符串 '函数名()' 三种形式,第三种不推荐

3.延迟的毫秒数默认省略是0,如果写,必须是毫秒

4.因为定时器可能有很多,所以我们经常给定时器赋值一个标识符

```
<script>
    //1.setInterval
    //语法规范：window.setInterval(调用函数,延时时间);
    setInterval(function() {
        console.log('继续输出');
    },1000);
    //2.setTimeout 延时时间到了，就去调用这个回调函数，只调用一次，就结束了这个定时器
    //3.setInterval 每隔这个延时时间，就去调用这个回调函数，会调用很多次，重复调用这个函数
</script>
```

#### 练习

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230111215202973.png)

参考:

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=84&vd_source=90829399ed2e00a55de466b3215c30a2

#### 3.5	停止 `setInterval()`定时器

```
window.clearInterval(intervalID);
```

`clearInterval()`方法取消了先前通过调用 `setInterval()`建立的定时器

**注意**:

1.window可以省略

2.里面的参数就是定时器的标识符

```
<body>
    <button class="begin">开启定时器</button>
    <button class="stop">停止定时器</button>
    <script>
        var begin = document.querySelector('.begin');
        var stop = document.querySelector('.stop');
        var timer = null;//全局变量，null是一个空对象
        begin.addEventListener('click',function() {
            timer = setInterval(function() {
                console.log('ni hao ma');
            },1000);
        })
        stop.addEventListener('click',function() {
            clearInterval(timer);
        })
    </script>
</body>
```

####  练习

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230111220131013.png)

参考:

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=86&vd_source=90829399ed2e00a55de466b3215c30a2

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=87&vd_source=90829399ed2e00a55de466b3215c30a2

#### 3.6	this

this的指向在函数定义的时候是确定不了的,只有函数执行的时候才能确定this到底指向谁,一般情况下this的最终指向的是那个调用它的对象

现阶段,我们先了解一下几个this指向

1.全局作用域或者普通函数中this指向全局对象window(注意定时器里面的this指向window)

```
<body>
    <button>点击</button>
    <script>
        //this指向问题 一般情况下this的最终指向是那个调用它的对象
        //1.全局作用域或者普通函数中this指向全局对象window（注意定时器里面的this指向window）
        console.log(this);
        function fn() {
            console.log(this);
        }
        window.fn();
        window.setTimeout(function() {
            console.log(this);
        },1000);
        //2.方法调用中谁调用this指向谁
        var o = {
            sayHi: function() {
                console.log(this);//this指向的是o这个对象
            }
        }
        o.sayHi();
        var btn = document.querySelector('button');
        btn.onclick = function() {
            console.log(this);//this指向的是btn这个按钮对象
        }
        //3.构造函数中this指向构造函数的实例
        function Fun() {
            console.log(this);//this指向的是Fun这个实例对象
        }
        var fun = new Fun();
    </script>
</body>
```

### 4.JS执行机制

#### 4.1	JS是单线程

JavaScript语言的一大特点就是**单线程**,也就是说,**同一个时间只能做一件事**,这是因为JavaScript这门脚本语言诞生的使命所致--JavaScript是为处理页面中用户的交互,以及操作DOM而诞生的,比如我们对某个DOM元素进行添加和删除操作,不能同时进行,应该先进行添加,之后再删除

单线程就意味着,所有任务需要排队,前一个任务结束,才会执行后一个任务,这样所导致的问题是:如果JS执行的时间过长,这样就会造成页面的渲染不连贯,导致页面渲染加载阻塞的感觉

####	4.2	问题

##### 问题一

代码执行结果

```
console.log(1);
setTimeout(function() {            
	console.log(3);
},1000);
console.log(2);
```

//1   2   3

##### 问题二

代码执行结果

```
console.log(1);
setTimeout(function() {
	console.log(3);
},0);
console.log(2);
```

//1	2	3

#### 4.3	同步和异步

为了解决这个问题,利用多喝CPU的计算能力，HTML５提出Web　Worker标准，允许JavaScript脚本创建多个线程，于是，JS中出现了**同步**和**异步**

##### 同步

前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的，同步的，比如做饭的同步做法：我们要烧水煮饭，等水开了（10分钟之后），再去切菜，炒菜

##### 异步

你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事情，比如做饭的异步做法，我们在烧水的同时，利用10分钟，去切菜，炒菜

**他们的本质区别：这条流水线上各个流程的执行顺序不同**

##### 同步任务

同步任务都在主线程上执行，形成一个**执行栈**

##### 异步任务

JS的异步是通过回调函数实现的

一般而言，异步任务有以下三种类型

1.普通事件，如`click`,`resize`等

2.资源加载，如`load`,`error`等

3.定时器，包括`setInterval`,`setTimeout`等

异步任务相关**回调函数**添加到**任务队列**中（任务队列也称为消息队列）

![](https://derrrrrrr.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20230111_224303.png)

#### 4.4	JS执行机制

1.先执行**执行栈中的同步任务**

2.异步任务（回调函数）放入任务队列中

3.一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取**任务队列**中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行

![](https://derrrrrrr.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20230111_224601.png)

![](https://derrrrrrr.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20230111_224850.png)

![](https://derrrrrrr.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20230111_225033.png)

由于主线程不断的重复获得任务，执行任务，再获取任务，再执行，所以这种机制称为**事件循环（event loop）**

### 5.location对象

#### 5.1	什么是location对象

window对象给我们提供了一个**location属性**用于**获取或设置窗体的URL**，并且可以用于**解析URL**，因为这个属性返回的是一个对象，所以我们将这个属性也称为**location对象**

#### 5.2	URL

**统一资源定位符（Uniform Resource Locator，URL）**是互联网上标准资源的地址，互联网上的每个文件都有一个唯一的URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它

URL的一般语法格式为：

```
protocol://host[:port]/path/[?query]#fragment
http://www.itcast.cn/index.html?name=andy&age=18#link
```

| 组成     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| protocol | 通信协议 常用的http,ftp,maito等                              |
| host     | 主机（域名） www.itheima.com                                 |
| port     | 端口号 可选，省略时使用方案的默认端口 如http的默认端口为80   |
| path     | 路径 由零或多个'/'符合隔开的字符串，一般用来表示主机上的一个目录或者文件地址 |
| query    | 参数 以键值对的形式，通过&符号分割开来                       |
| fragment | 片段 #后面内容常见于链接 锚点                                |

#### 5.3	location对象的属性

| location对象属性  | 返回值                             |
| ----------------- | ---------------------------------- |
| location.href     | 获取或者设置整个URL                |
| location.host     | 返回主机（域名）www.itheima.com    |
| location.port     | 返回端口号 如果未写返回 空字符串   |
| location.pathname | 返回路径                           |
| location.search   | 返回参数                           |
| location.hash     | 返回片段 #后面内容 常见于链接 锚点 |

**重点记住：href和search**

```
<body>
    <button>点击</button>
    <script>
        var btn = document.querySelector('button');
        btn.addEventListener('click',function() {
            // console.log(location.href);
            location.href = 'http://www.itheima.cn';
        })
    </script>
</body>
```

#### 练习一

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230111231220568.png)

参考：

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=92&vd_source=90829399ed2e00a55de466b3215c30a2

#### 练习二

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230111231309457.png)

参考：

【黑马程序员JavaScript核心教程，前端基础教程，JS的DOM BOM操作教程】https://www.bilibili.com/video/BV1k4411w7sV?p=93&vd_source=90829399ed2e00a55de466b3215c30a2

#### 5.4	location对象的方法

| location对象方法   | 返回值                                                       |
| ------------------ | ------------------------------------------------------------ |
| location.assign()  | 跟href一样，可以跳转页面（也称为重定向页面）                 |
| location.replace() | 替换当前页面，因为不记录历史，所以不能后退页面               |
| location.reload()  | 重新加载页面，相当于刷新按钮或者f5 如果参数为true强制刷新ctrl+f5 |

```
<body>
    <button>点击</button>
    <script>
        var btn = document.querySelector('button');
        btn.addEventListener('click',function() {
            //记录浏览历史，所以可以实现后退功能
            // location.assign('http://www.itheima.cn');
            //不记录浏览历史，所以不可以实现后退功能
            // location.replace('http://www.itheima.cn');
            location.reload(true);
        })
    </script>
</body>
```

### 6.navigator对象

navigator对象包含有关浏览器的信息，他有很多属性，我们最常用的是userAgent，该属性可以返回有客户机发送服务器的user-agent头部的值

下面前端代码可以判断用户那个终端打开页面，实现跳转

```
if(navigator.userAgent.match(/(phone|pad|pod|iphone|ipad|ios|ipad|Android|Mobile|BlackBerry|IEMobile|MQQBrpwser|JUC|Fennec|WOSBrowser|WebOS|Symbian|Windows Phone)/i)) {
	window.location.href="";	//手机
} else {
	window.location.href="";	//电脑
}
```

### 7.history对象

window对象给我们提供了一个history对象，与浏览器历史记录进行交互，该对象包含用户（再浏览器窗口中）访问过的URL

| history对象方法 | 作用                                                      |
| --------------- | --------------------------------------------------------- |
| back()          | 可以后退功能                                              |
| forward()       | 前进功能                                                  |
| go(参数)        | 前进后退功能 参数如果是1 前进1个页面 如果是-1 后退1个页面 |

```
<body>
    <a href="index.html">点击我去往首页</a>
    <button>后退</button>
    <script>
        var btn = document.querySelector('button');
        btn.addEventListener('click',function() {
            // history.back();
            history.go(-1);
        })
    </script>
</body>
```

history对象一般在实际开发中比较少用，但是会在一些OA办公系统中见到

------

# PC端网页特效



#### API和Web API

### 能够说出什么是API

### 能够说出什么是Web API

