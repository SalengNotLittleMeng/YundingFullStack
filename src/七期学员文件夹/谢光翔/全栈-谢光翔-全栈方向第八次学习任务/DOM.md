# DOM

### 1.元素节点

在网页中，每一个标签都是一个元素节点。可以通过document对象来获取或创建元素节点。

通过document对象来获取已有元素节点：

- document.getElementById() 根据id获取一个元素节点对象
- document.getElementByClassName() 根据元素的class属性获取一组元素节点对象，其返回的是一个类数组对象，且是一个实时更新的集合。
- document.getElementByTagName() 根据标签名获取一组元素节点对象，返回的结果是可以实时更新的集合。document.getElementByTagName("*")获取页面中的所有元素。
- document.getElementByName() 根据name属性获取一组元素节点对象，返回一个实时更新的集合。
- document.querySelectorAll() 根据选择器去页面中查询元素，会返回一个类数组，不会实时更新。
- document.querySelector() 根据选择器去页面中查询第一个符合条件的元素。

通过document创建一个元素节点：

document.createElement() 根据标签名创建一个元素节点对象。

<hr>
### 2.文本节点

DOM中修改文本的三个属性：

1. element.textContent 获取或修改元素中的文本内容，获取的是标签中的内容，不会考虑css样式。
1. element.innerText 获取或修改元素中的文本内容，innerText获取内容时，会考虑css样式，但是读取css样式时会触发网页重排。当字符串中有标签时，会自动对标签进行转义。
1. element.innerHTML 可以直接向元素中添加代码。

<hr>

### 3.属性节点：

读取：

元素.属性名

元素.getAttribute(属性名)

修改：

元素.属性名=属性值

元素.setAttribute(属性名,属性值)

删除：

元素.removeAttribute(属性名)

<hr>

### 4.event事件

事件就是用户和页面之间发生的交互行为，比如：点击按钮、鼠标移动、双击按钮、敲击键盘、松开按键……可以通过为事件绑定响应函数，来完成和用户之间的交互。

```html
<body>
    <button id="btn">
        点我一下
    </button>
    <script>
    	const btn=document.getElementById("btn");
        btn.onclick=function(){
            console.log("111")
        }
        /*
        也可以写成：
        btn.addEventListener("click",(event)=>{console.log("111")});
        */
    </script>
</body>
```

事件对象：

事件对象是浏览器在事件出发时所创建的对象，这个对象封装了事件相关的各种信息。浏览器在创建事件对象后，会将事件对象作为响应函数的参数传递。

event.target 触发事件的对象

event.currentTarget 绑定事件的对象

event.stopPropagation() 停止事件传导



事件的冒泡：

事件的冒泡就是指事件向上传导，当元素的事件被触发后，其祖先元素的相同事件也会触发。

事件的捕获：

与冒泡的顺序相反，由当前元素的最大祖先元素传到当前元素，捕获会在冒泡之前执行。默认情况下事件不会在捕获阶段触发。如果希望在捕获阶段触发事件可以在addEventListener()的第三个参数传入true。

<hr>

### 5.DOM的修改

```html
<body>
    <button id="btn">添加</button>
    <button id="btn1">删除</button>
    <ul id=list>
        <li id="swk">孙悟空</li>
        <li id="zbj">猪八戒</li>
        <li id="shs">沙和尚</li>
    </ul>
    <script>
    	const list=document.getElementById("list");
        const btn=document.getElementById("btn");
        const btn1=document.getElementById("btn1");
        btn.onclick=function(){
			const li=document.createElement("li");
            li.textContent="唐僧"
            li.id="ts"
            list.appendChild(li);
            
            list.insertAdjacentHTML("beforeend","<li id='bgj'>白骨精</li>");
        }
        btn1.onclick=function(){
            const swk=document.getElementById("swk");
            swk.remove();
        }
    </script>
</body>
```

<hr>

### 6.读取css样式

元素.style.属性 读取的内容不一定是最终展现在网页上的结果，可以使用getComputedStyle()方法获取计算过后的样式。

其它方法：

元素.clientHeight

元素.clientWidth

获取元素内部宽高（包括内容区和内边距）

元素.offsetHeight

元素.offsetWidth

获取元素可见框大小（包括内容区、内边距和边框）

元素.scrollHeight

元素.scrollWidth

获取元素滚动区域大小

元素.offsetParent

获取元素的定位父元素

元素.offsetTop

元素.offsetLeft

获取元素相对于其定位父元素的偏移量

元素.scrollTop

元素.scrollLeft

获取或设置元素滚动条的偏移量



使用class来修改元素css样式：

元素.classList.add() 向元素中添加class

元素.classList.remove() 移除元素中的一个或多个class

元素.classList.toggle() 切换元素中的class

元素.classList.replace() 替换class

元素.classList.contains() 检查class
