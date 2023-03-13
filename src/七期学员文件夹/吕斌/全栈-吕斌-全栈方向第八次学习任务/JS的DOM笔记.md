# JS的复习笔记之----JS的DOM

#### 一、DOM简介：文档对象模型，时html的标准编程接口，可以改变网页的内容，结构样式。

#### 二、DOM的主要内容：

##### 1.文档：一个页面就是一个文档，一般用document表示

##### 2.元素：页面中所有标签都是元素，用element表示

##### 3.节点：网页中所有内容都是节点，用node表示

#### 三、DOM获取元素

##### 1.通过ID属性获取

```html
<body>
    <div id="time">2019-9-1</div>
    <script>
        var timer=document.getElementById('time');
        console.log(timer);   //返回ID属性
    </script>
</body>
```

##### 2.通过标签名获取：使用getElementsByTagName()方法可以返回带有指定标签名的对象的集合

```html
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <script>
        var lis=document.getElementsByTagName('li');
        console.log(lis);
        console.log(lis[0]);    //获取第一个元素，通过索引的方式获取
    </script>
</body>
```

##### 3.通过类名获取：getElementsByClassName

```html
    <body>
		<div class="c1"></div>
		<div class="c1"></div>
		<div class="c2"></div>
	</body>
	<script type="text/javascript">
		console.log(document.getElementsByClassName("c1"));
		console.log(document.getElementsByClassName("c2"));
	</script>
```

##### 4.获取特殊元素（body,html）

1>获取body标签：document.body                           //返回body元素对象

2>获取html标签：document.documentElement       //返回html对象

##### 5.根据name属性的值获取元素：getElementsByName

```js
document.getElementsByName("name属性的值")；
```

##### 6.根据选择器获取元素

1>document.querySelector();

语法：document.querySelector(“选择器”);

返回文档中匹配指定的选择器组的第一个元素

2>document.querySelectorAll();

语法：document.querySelectorAll(“选择器”)；

返回文档中匹配指定的选择器组的所有元素

```html
<body>
	<div class="c1"></div>
	<div class="c1"></div>
</body>
	<script type="text/javascript">
		console.log(document.querySelector(".c1"));
		console.log(document.querySelectorAll(".c1"));
	</script>
```

#### 四、DOM事件基础

##### 1.简介：JavaScript使我们有能力创建动态页面，而事件是可以被其侦测到的行为，例如，我们点击一个按钮，执行其操作，解决事件。

##### 2.事件三要素：事件源，事件类型，事件处理程序

##### 3.执行事件过程：首先获取事件源，然后注册事件，最后添加事件处理程序（采用函数处理程序）

##### 4.常用的鼠标处理事件：

onclick-------->鼠标点击左键触发

onmouseover-------->鼠标经过触发

onmouseout-------->鼠标离开触发

onfocus-------->获得鼠标焦点触发

onblur-------->失去鼠标焦点触发

onmousemove-------->鼠标移动触发

onmouseup-------->鼠标弹起触发

onmousedown-------->鼠标按下触发

```html
<div>123</div>
    <script>
        // 执行事件步骤
        // 点击div 控制台输出 我被选中了
        // 1. 获取事件源
        var div = document.querySelector('div');
        // 2.绑定事件 注册事件
        // div.onclick 
        // 3.添加事件处理程序 
        div.onclick = function() {
            console.log('我被选中了');
        }
    </script>
```

#### 五、操作元素

##### 1.简介：JavaScript的DOM操作可以改变网页内容，结构和样式，我们可以利用DOM操作元素来改变元素里面的内容

##### 2.修改元素内容：

1>element.innerText;    从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去除

2>element.innerHTML;   从起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行

##### 3.常用元素的属性操作

eg:      src,      href   ------>图片

​           id     alt    title   ------->内容

##### 4.表单元素的属性操作

eg:     type   value   checked    selected   disabled

***ps：表单里面的值，文字内容可以通过value值进行修改；如果想要某个表单被禁用，不可再点击，则可以使用disabled；遇到按钮操作，如果想要它点击多次，则可以使用Flag算法。***

##### 5.样式属性的操作：我们可以通过JS修改元素的大小，颜色，位置等样式

1>element.style    ------>行内样式操作

2>element.className   -------->类名样式操作

***ps：JS里面的样式采取驼峰命名法，eg：fontSize,backgroundColor；JS修改style样式属性，产生的时行内样式，CSS权重较高***

3>onfous    ------>获得焦点                      onblur    ------->失去焦点

4>我们可以通过修改元素的className属性，更改元素的样式，eg：this.className="change"       change在CSS中写

```html
<style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
<div></div>
    <script>
        // 1. 获取元素
        var div = document.querySelector('div');
        // 2. 注册事件 处理程序
        div.onclick = function() {
            // div.style里面的属性 采取驼峰命名法 
            this.style.backgroundColor = 'purple';
            this.style.width = '250px';
        }
    </script>
```

##### 5.排他思想

有同一组元素我们想要某一种元素实现某种样式，需要用循环的排他思想算法

​    i>例如所有元素清除样式

​    ii>给当前元素设置样式

```html
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>
    <button>按钮4</button>
    <button>按钮5</button>
    <script>
        var btns = document.getElementsByTagName('button');
        for (var i = 0; i < btns.length; i++) {
            btns[i].onclick = function() {
                for (var i = 0; i < btns.length; i++) {
                    btns[i].style.backgroundColor = '';
                }
                this.style.backgroundColor = 'pink';

            }
        }
    </script>
```

##### 6.自定义属性的操作

1>获取属性名：element.属性          ------->获取内置属性值，元素本身自带的属性

​                            element.getAttribute("属性")    ------>主要获得自定义的属性

2>设置属性值：element.属性=”值“      ------>设置内置属性值

​                            element.setAttribute("属性"，"值")     ------>获得自定义属性值

3>移除属性  removeAttribute(属性)

4>自定义属性目的：为了保存并使用数据，有些数据可以保存到页面，而不用保存到数据库中，自定义属性获取是通过getAttribute('属性')获取

#### 六、节点操作

##### 1.简介：获取元素通常使用两种方式，一种是利用 DOM 提供的方法获取元素，另一种是利用节点层级关系获取元素（利用父子兄节点关系获取元素），其中节点操作更简单。\n网页中的所有内容都是节点（标签、属性、文本、注释等），在DOM 中，节点使用 node 来表示，所有 HTML 元素（节点）均可被修改，也可以创建或删除。\n一般地，节点至少拥有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）这三个基本属性。

##### 2.父节点

1>语法：node.parentNode\nparentNode 

2>属性可返回某节点的父节点，注意是最近的一个父节点，如果指定的节点没有父节点则返回 null

```html
        <div class="box">
            <span class="erweima">×</span>
        </div>
         <script>
        var erweima = document.querySelector('.erweima');
        console.log(erweima.parentNode);
    </script>
```

##### 3.子节点

1>childNodes(标准)：返回所有的子节点（包含元素节点，文本节点）

2>children(非标准)：返回子元素节点

3>children[0]：返回第一个子元素节点

##### 4.兄弟节点

1>nextSibling ：返回所有的兄弟节点 包含元素节点 文本节点

2>nextElementSibling ：得到下一个兄弟元素节点

3>previousElementSibling ：得到上一个兄弟元素节点

##### 5.创建节点

语法：document.createElement("tagName")

创建由tagName指定的HTML元素

***ps：node.appendchild(child)该方法将一个节点添加到指定父节点的子节点列表末尾***

​         ***node.insertBefore(child,指定元素)该方法将一个节点添加到父节点的指定子节点前面*****

##### 6.删除节点

语法：node.removeChild(child)    删除父节点中的一个子节点，返回删除的节点

```html
<button>删除</button>
    <ul>
        <li>德玛西亚</li>
        <li>艾欧尼亚</li>
        <li>扭曲丛林</li>
    </ul>
<script>
    var btn = document.querySelector('button')
    var ul = document.querySelector('ul')
    btn.onclick = function () {
            if (ul.children.length == 0) {  //获取ui里面的长度
                this.disabled = true           //若已近全部删除就禁用按钮
            } else {
                ul.removeChild(ul.children[0])   // 将li从前往后删除
            }
        }
</script>
```

##### 7.复制节点

语法：node.cloneNode()可以将node复制，且返回调用该方法的节点

***ps：如果括号参数为空或为false，则是浅拷贝，即只复制到节点本身，不复制里面的子节点，如果为true，则是深拷贝，都会复制***

```html
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
    <script>
        var ul = document.querySelector('ul')
      //.cloneNode() 参数为空 或者是false 则是浅拷贝 即 只克隆复制节点本身 不克隆里面的子节点
        var lis = ul.children[0].cloneNode(true)
        ul.appendChild(lis)
    </script>
</body>
```

#### 七、事件高级（DOM的重点核心）

##### 1.注册事件：有两种方式-->传统方式和方法监听注册方式

1>传统方式：利用on开头的事件onclick

​           特点：注册事件的唯一性

​           同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数

2>方法监听注册方式：addEventListener()   这是一个方法，同一个元素，同一个事件可以有多个方式

​            语法：eventTarget.addEventListener(type, listener[, useCapture])

​            该方法接收三个参数：（1）type：事件类型字符串，比如 click 、mouseover ，注意这里不要带 on

​                                                   （2）listener：事件处理函数，事件发生时，会调用该监听函数

​                                                  （3）useCapture：可选参数，是一个布尔值，默认是 false。

##### 2.删除事件

1>传统注册方式：eventTarget.onclick=null;

2>方法监听注册方式（1）eventTarget.removeEventListener(type, listener[, useCapture]);

​                                   （2）eventTarget.detachEvent(eventNameWithOn, callback);

##### 3.常见事件对象属性和方法

e.target----->点击哪个元素返回哪个元素               e.type-------->返回事件的类型 click，mouse over，不带on

e.srcElement------->返回触发事件的对象                e.cancelBubble----->该属性阻止冒泡

e.returnValue------>该属性阻止默认事件，不让链接跳转          e.preventDefault------>该属性阻止默认事件

e.stopPropagation()------>阻止冒泡

##### 4.事件委托

原理：不是每一个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，利用冒泡原理影响设置每一个子节点

##### 5.常用鼠标事件

鼠标事件对象：

event   ----->代表对象的状态，跟事件相关的一系列信息的集合

e.clientX    e.clientY     鼠标可视区的x和y坐标，返回鼠标相对于浏览器窗口可视区的x和y坐标

e.screenX     e.screenY    返回鼠标相对于电脑屏幕的x和y坐标

e.pageX   e.pageY     返回鼠标相对于文档页面的x和y坐标

***ps：一定要加px像素单位***

##### 6.常用的键盘事件

1>onkeyup     ----->某个键盘按键被松开时触发

​    onkeydown   ----->某个键盘按键被按下时触发

​    onkeypress    ------>某个键盘按键被按下时触发，但是它不识别功能键，eg：ctrl，shift，箭头等

2>键盘事件对象：键盘事件对象的keyCode属性可以得到相应键的ASCII码值

​    ***ps：我们的keyup和keydown事件不区分大小写，不论按下a或A都返回65；keypress区分大小写；我们可以根据keyCode返回的ASCII码值判断用户按下了哪个键***

​    ***ps：keydown和keypress在文本框里面的特点，他们两个事件触发的时候文字还没有落入到文本框中，keyup事件触发时，文字已经落入文本框中***

