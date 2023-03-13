# JavaScript的DOM，BOM操作笔记

## 获取元素

### 1.利用document.方法('')获取

```html
<!--通过ID获取  getElementById -->
<div id="time">123</div>
<script>
    //只能获取一个对象元素
    var abc=document.getElementById('time');
</script>

<!--通过name属性获取   getElementByName-->

<!--通过标签名获取   getElementByTagName-->
<ul>
    <li>啦啦啦</li>
    <li>啦啦啦</li>
    <li>啦啦啦</li>
</ul>
<script>
    //可以获取到所有的li,以伪数组方式储存
    var lis=document.getElementByTagName('li');
    //可以遍历数组依次打印里面的元素对象
    for(var i=0;i<lis.length;i++){
        console.log(lis[i]);
    }
    
    //还可以获取某个父元素内部所有指定的子元素
    //element.getElementByTagName('标签名')
    var ol=document.getElementByTagName('ol');//先获取ol
    console.log(ol[0].getElementByTagName('li'))//获取到的ol是个伪数组，所以要打印第一个ol中的li
</script>

<!--通过类名获取   getElementByClassName-->
<div class="box">盒子</div>
<div class="box">盒子</div>
<script>
    //可以获取所有box
    var boxs=document.getElementByClassName('box');
</script>

<!--通过选择器获取一个元素   querySelector-->
<div class="box">盒子</div>
<div class="box">盒子</div>
<div id="lll">盒子</div>
<div id="lll">盒子</div>
<script>
    //获取指定选择器的第一个元素对象
    var box=document.querySelector('.box');
    var lll=document.querySelector('#lll');
    var div=document.querySelector('div');
</script>

<!--通过选择器获取一组元素   querySelectorAll-->
<div class="box">盒子</div>
<div class="box">盒子</div>
<script>
    //可以获取所有box
    var allbox=document.querySelectorAll('.box');
</script>

<!--获取html的方法   document.documentElement-->

<!--获取body的方法   document.body-->
```

### 2.利用层级关系获取（节点）

```html
<!--父节点parentNode-->
<div class="lll">
    <div class="www"></div>
</div>
<script>
    var abc=document.querySlector('.www');
    console.log(abc.parentNode);//获得的是离元素最近的父级元素,即lll
</script>

<!--子节点childNodes-->
返回的子节点包括元素节点和文本节点等
<!--子节点children-->
返回的子节点只有元素节点
<div class="lll">
    <div class="www"></div>
    <div class="www"></div>
    <div class="www"></div>
</div>
<script>
    var lll=document.querySlector('.lll');
    console.log(lll.children);//获得的是所有的子元素节点，即所有的www
</script>

<!--返回第一个子元素节点firstElementChild-->
<!--返回最后一个子元素节点lastElementChild-->
```

### 3.节点操作

```html
创建节点 document.creatElement('tagName')
添加节点 1.node.appendChild(child) 将一个节点添加到指定父节点的子节点列表末尾
       2.node.insertBefore(child,指定元素) 将一个节点添加到指定父节点的子节点前面
删除节点 node.removeChild(child)
复制节点 1.node.cloneNode();括号里面为空或是false，是浅拷贝，只复制标签，不复制里面的内容
       2.node.cloneNode(true);括号里面为true,是深拷贝，复制标签里面的内容
<ul></ul>
<script>
    var li=document.creatElement('li');
    var ul=document.querySelector('ul');
    ul.appendChild(li);
    var lili=document.creatElement('li');
    ul.insertBefore(lili,ul.children[0]);
    var lis=ul.children[0].cloneNode();
</script>
```



## 事件基础

### 执行事件的步骤

1. 获取事件源
2. 注册事件（绑定事件）
3. 添加事件处理程序（采用函数赋值形式）

### 常见的鼠标事件

![屏幕截图 2023-01-10 145541](https://liangjia.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-10%20145541.png)

## 操作元素

### 改变元素内容

```html
element.innerText
element.innerHTML

<div></div>
<script>
    var div=document.querySelector('div');
    div.innerHTML='啦啦啦';
</script>
```

### DOM可以操作的属性

```html
type、value、checked、selected、disabled

<!--案例-->
<button>按钮</button>
<input type="text" value="输入内容">
<script>
    //1.获取元素
    var btn=document.querySelector('button');
    var input=document.querySelector('input');
    //2.注册事件  处理程序
    btn.onclick=function(){
        input.valut='点击';
    }
</script>
```

### 样式属性操作

```html
element.style   行内样式操作
element.className   类名样式操作
注：JS里面的样式采取驼峰命名法  比如fontSize、backgroundColor
    className会直接更改元素的类名，会覆盖原先的类名
<!--案例-->
<style>
    .change{
        
    }
</style>
<div class="first">文本</div>
<script>
    var div=document.querySelector('div');
    div.onclick=function(){
        this.style.backgroundColor='purple';
        this.style.width='250px';
        //可以通过修改元素的className更改元素的样式，适合于样式较多或功能复杂的情况
        this.className='change'//不保留原来的类名
        this.className='first change'//可以保留原先的类名
    }
</script>
```

### 自定义属性操作

#### 1.获取属性值

- element.属性    获取属性值     获取内置属性值（元素本身自带的属性）
- element.getAttribute('属性')      主要用于获得自定义属性，程序员自定义的属性

```html
<div id="lll" abc="123"></div>
<script>
    var div=document.querySelector('div');
    //获取元素的属性值elment.属性值
    console.log(div.id);
    //获取自定义属性值
    console.log(div.getAttribute('abc'));
</script>
```

#### 2.设置属性值

- element.属性 = ’值‘
- element.getAttribute('属性'，’值‘)

```html
<div id="lll" abc="123"></div>
<script>
    var div=document.querySelector('div');
    //设置元素的属性值elment.属性值
    div.id='text';
    //设置自定义属性值
    div.getAttribute('abc',456);
</script>
```

#### 3.移除属性

- removeAttribute(属性)

## 注册事件

### addEventListerner 事件监听方式

```javascript
eventTarget.addEventListerner(type,listener,useCapture)
eventTarget.addEventListerner()方法将指定监听器注册到eventTarget（目标对象）上，当该对象触发指定事件时，就会执行事件处理函数
type:事件类型字符串，比如click、mouseover，注意这里不要带on
listener:事件处理函数，事件发生时，就会调用该监听函数
useCapture:可选参数，是一个布尔值，默认是false
```

案例：

```html
<button>按钮</button>
<script>
    var btn=document.querySelector('button');
    //同一个元素可以添加多个事件处理程序，且都会依次执行
    btn.addEventListerner('click',function(){
        alert(11);
    })
    btn.addEventListerner('click',function(){
        alert(22);
    })
</script>
```

### attachEvent 事件监听方式(ie9以前的版本)

```html
eventTarget.attachEvent(eventNameWithOn,calllback)
eventTarget.attachEvent()方法将指定的监听器注册到eventTarget（目标对象）上，当该对象触发指定事件时，指定的回调函数就会被执行
eventNameWithOn:事件类型字符串，比如onclick、onmouseover,这里要带on
calllback:事件处理函数，当目标触发事件时回调函数被调用
```

## 删除事件

```javascript
eventTarget.onclick=null
```

案例：

```html
<div>123</div>
<script>
    var div=document.querySelector('div');
    div.onclick=function(){
        alert(11);
        div.onclick=null;
    }
</script>
```

## DOM事件流

3个阶段

1. 捕获阶段
2. 当前目标阶段
3. 冒泡阶段

```html
<div class="father">
    <div class="son">盒子</div>
</div>
<script>
    //JS代码中只能执行捕获或者冒泡其中的一个阶段
    //onclick和attachEvent(ie)只能得到冒泡阶段
    
    //如果addEventListener第三个参数是true,则处于捕获阶段  捕获顺序document->html->body->father->son
    var son=document.querySelector('.son');
    son.addEventListener('click',function(){
        alert("son");  
    },true);
    var father=document.querySelector('.father');
    father.addEventListener('click',function(){
        alert("father");  
    },true); //先弹出father再弹出son
    
    //如果addEventListener第三个参数是false或是省略，则处于冒泡阶段  冒泡顺序son->father->body->html->document
    var son=document.querySelector('.son');
    son.addEventListener('click',function(){
        alert("son");  
    },false);
    var father=document.querySelector('.father');
    father.addEventListener('click',function(){
        alert("father");  
    },false);//先弹出son再弹出father
    
    //有些事件是没有冒泡的，如onblur、onfocus、onmouseenter、onmouseleave
</script>
```

## 事件对象

### 事件对象

```html
eventTarget.onclick=function(event){}
eventTarget.addEventListener('click',function(event){})
这个event就是事件对象还可以写成e或evt
event对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态

<ul>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
</ul>
<script>
    var ul=document.querySelector('ul');
    ul.addEventListener('click',function(e){
        //this指向ul,所以无论点击哪，都返回ul
        console.log(this);
        //e.target指向我们点击的那个对象，我们点击li,e.target指向的就是li,返回li
        console.log(e.target);
    })
</script>
```

### 事件对象阻止默认行为

![屏幕截图 2023-01-12 112155](https://liangjia.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-12%20112155.png)

### 事件委托

不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点，只操作一次DOM,提高程序性能

```html
<ul>
    <li>123</li>
    <li>123</li>
    <li>123</li>
</ul>
<script>
    var ul=document.querySelector('ul');
    ul.addEventListener('click',function(e){
        //e.target可以得到我们点击的对象
        e.target.style.backgroundColor='pink';
    })
</script>
```

### 常用鼠标事件

#### 常用鼠标事件

```html
<!--禁止鼠标右键菜单-->
<!--contextmenu主要控制何时显示上下文菜单-->
啦啦啦
<script>
    document.addEventListener('contextmenu',function(e){
        e.preventDefault();
    })
</script>

<!--禁止鼠标选中-->
<!--selectstart开始选中-->
啦啦啦
<script>
    document.addEventListener('selectstart',function(e){
        e.preventDefault();
    })
</script>
```

#### 鼠标事件对象

![屏幕截图 2023-01-12 124928](https://liangjia.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-12%20124928.png)

### 常用键盘事件

```html
onkeyup  某个键盘松开时触发
onkeydown  某个键盘按键被按下时触发
onkeypress  某个键盘按键被按下时触发  但是不识别功能键ctrl shift 箭头等
执行顺序：keydown  keypress  keyup
```

案例：

```javascript
document.addEventListener('keyup',function(){
    console.log("弹起");
})
```

## window对象常见事件

### 窗口加载事件

```html
window.onload=function(){}
或者
window.addEventListener("load",function(){})
有了window.onload就可以把JS代码写到页面元素的上方，因为onload时等页面内容全部加载完，再执行处理函数
document.addEventListener('DOMContentLoaded',function(){})
DOMContentLoaded事件触发时，仅当DOM加载完毕，不包括样式表，图片等
```

### 调整窗口大小事件

```html
window.onresize=function(){}
window.addEventListener("resize",function(){})
只要窗口大小发生变化，就会触发这个事件
window.innerWidth当前屏幕的宽度
```

### 定时器

setTimeout()

```js
window.setTimeout(调用函数，[延迟的毫秒数])
```

setInterval()  用于设置一个定时器，该定时器到期后执行调用函数















