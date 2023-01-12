# javascript学习笔记（2）

## new类

当使用new去调用一个函数时， 这个函数将会作为构造函数调用，
**使用new调用函数**时，将会发生:
1.创建一个普通的JS对象(0bject对象 {})，为了方便，称其为新对象
2.将构造函数的prototype属性设置为新对象的原型
3.使用实参来执行构造函数，并且将新对象设置为函数中的this
4.如果构造函数返回的是一个非原始值，则该值会作为new运算的返回值返回，如果构造函数的返回值是一个原始值或者没有指定返回值，则新的对象将会作为返回值返回



```jsjs

```

## 数组(Array)

-数组也是一种复合数据类型，在数组可以存储多个不同类型的数据
-数组中存储的是有序的数据，数组中的每个数据都有一个唯一 的索 引
可以通过索引来操作获取数据
-数组中存储的数据叫做元素
-索引(index)是一组大于等于0的整数
-创建数组
通过Array( )来创建数组，也可以通过[]来创建数组

```js
const arr = new Array()
const arr2 = []
arr[arr.length]=...
```

向数组中添加元素

```js
//数组[索引] =元素
```

读取数组中的元素

```js
//数组[索引]
```

-如果读取了一个不存在的元素，不好报错而是返回undefined

- length
-获取数组的长度
-获取的实际值就是数组的最大索引+ 1
-向数组最后添加元素:
数组[数组.length] =元素
- length是可以修改的

#### 遍历数组（for-of语句）

for-of语句可以用来遍历可迭代对象

```js
for( 变量 of 可迭代的对象){
	语句...
}
```

执行流程:
for-of的循环体会执行多次，数组中有几个元素就会执行几次，
每次执行时都会将一个元素赋值给变量

### 数组方法

#### 1.Array. isArray( )

-用来检查一个对象是否是数组

#### 2.at()

-可以根据索引获取数组中的指定元素

at可以接收负索引作为参数

#### 3.concat( )

-用来连接两个或多个数组
-非破坏性方法，不会影响愿数组，而是返回一个新的数组

#### 4.indexOf()

-获取元素在数组中第一次出现的索引
**参数**:
1.要查询的元素
2.查询的其实位置

#### 5.lastIndex0f( )

-获取元素在数组中最后一次出现的位置
-返回值:
找到了则返回元素的索引，.
没有找到返回-1

#### 6.join( )

-将一个数组中的元素连接为一个字符串

["孙悟空"，"猪八戒"，"沙和尚"，"唐僧"， "沙和尚"] -> "孙悟空,猪八戒,沙和尚,唐僧,沙和尚"
**参数**:
指定一个字符串作为连接符

#### 7.slice()

-用来截取数组(非破坏性方法)
-参数:
1.截取的起始位置(包括该位置)
2.截取的结束位置(不包括该位置)
-第二个参数可以省略不写，如果省略则会一直截取到最后
**索引可以是负值**
如果将两个参数全都省略，则可以对数组进行**浅拷贝(浅复制)**

```js
const arr = ["孙悟空","猪八戒"]
const arr2 = arr//不是复制，变量当中存的值为同一个对象的地址
arr2[0] = "唐僧"//改变arr2后arr也发生改变
如何去复制一个对象复制必须要产生新的对象
当调用slice时，会产生一个新的数组对象，从而完成对数组的复制

```

#### a.push( )

-向数组的末尾添加一个或多个元素，并返回新的长度

#### b.pop( )

-删除并返回数组的最后一个元素

#### c.unshift( )

向数组的开头添加一个或多个元素，并返回新的长度

#### d.shift( ) 

刪除并返回数组的第一个元素

#### e.splice()

-可以删除、 添加、插入、替换数组中的元素

## 深拷贝和浅拷贝

**浅拷贝(shallow copy)**
-通常对对象的拷贝都是浅拷贝
-浅拷贝顾名思义，只对对象的浅层进行复制(只复制一层)
-如果对象中存储的数据是原始值，那么拷贝的深浅是不重要
-浅拷贝只会对对象本身进行复制，不会复制对象中的属性(或元素)

```js
const arr = [{name:"孙悟空"},{name:"猪八戒"}]
const arr2 =arr.slice()
arr === arr2 //false
arr[0] === arr2[0] //true
const arr3 = structuredClone(arr) //专门深拷贝的方法
```

**深拷贝(deep copy)**
-深拷贝指不仅复制对象本身，还复制对象中的属性和元素
-因为性能问题，通常情况不太使用深拷贝

##### ...(展开运算符)

-可以将一个数组中的元素展开到另一个数组中或者作为函数的参数传递

-通过它也可以对数组进行浅复制

```js
const arr = [1,2,3]
const arr3 = [arr[0]， arr[1], arr[2]]
const arr3 = [...arr]
```

##### 对象的复制0bject.assign

- 0bject.assign(目标对象， 被复制的对象)
-将被复制对象中的属性复制到目标对象里，并将目标对象返回
-也可以使用展开运算符对对象进行复制I

```js
const obj = {name:"孙悟空"，age：18}
const obj2 = {address:"花果山"，age：28}
Object.assign(obj2,obj)
console.log(obj2) //{address:"花果山",name:"孙悟空"，age：18}
```

### arguments

- arguments是函数中又一 个隐含参数
- arguments是 一个类数组对象(伪数组)和数组相似，可以通过索引来读取元素，也可以通过for循环变量，但是它不是一个 数组对象，不能调用娄
- arguments用来存储函数的实参，无论用户是否定义形参，实参都会存储到arguments对象中可以通过该对象直接访问实参

```js
// console. log( arguments[2])
console. log(Array. isArray( arguments)) //false
// for (let i = 0; i < arguments.length; i++) {
//console.log( arguments[i])
// }
//读取元素
for(let V of arguments){
	console.log(v) 
}
arguments. forEach(ele => console. log(ele))
```

### 可变参数

在定义函数时可以将参数指定为可变参数

可变参数可以接收任意数量实参，并将他们统一 存储到一个数组中返回

可变参数的作用和arguments基本是一 致，但是也具有一些不同点: .
1.可变参数的名字可以自己指定
2.可变参数就是一个数组，可以直接使用数组的方法
3.可变参数可以配合其他参数一 起使用

```js
function fn2(...abc) {
	console. log( abc )
}
function sum2(.. .num) {
	return num. reduce((a, b) => a + b, 0)
}
//当可变参数和普通参数一起使用时， 需要将可变参数写到最后
function fn3(a, b，...args) {
	for (let V of arguments) { 
	console.log(v)
}
```

## this

根据函数调用方式的不同，this的值也不同:
1.以函数形式调用，this是window
2.以方法形式调用，this是调用方法的对象
3.构造函数中，this是新建的对象
4.箭头函数没有自己的this，由外层作用域决定
5.通过call和apply调用的函数，它们的第- - 个参数就是函数的this
6.通过bind返回的函数，this由bind第一 个参 数决定(无法修改)

### call( )和apply( )

调用函数除了通过函数()这种形式外，还可以通过其他的方式来调用函数
比如，我们可以通过调用函数的call( )和apply( )来个方法来调用函数

```js
函数.call( )
函数. apply( )
```

call和apply除了可以调用函数，还可以用来指定函数中的this

call和apply的第1个参数，将会成为函数的this

**区别:**

-通过call方法调用函数，函数的实参直接在第一个参数后 一个一个的列出来
-通过apply方法调用函数，函数的实参需要通过一个数组传递

### bind()

bind()是函数的方法，可以用来创建一- 个新的函数

bind可以为新函数绑定this

bind可以为新函数绑定参数

**箭头函数没有自身的this，它的this由外层作用域决定，也无法通过call apply 和bind修改它的this**

**箭头函数中没有arguments**

## 正则表达式

正则表达式
-正则表达式用来定义一个规则
-通过这个规则计算机可以检查-个字符串是否符合规则或者将字符串中符合规则的内容提取出来
-正则表达式也是JS中的1个对象，
所以要使用正则表达式，需要先创建正则表达式的对象

```js
//new RegExp() 可以接收两个参数(字符串) 1. 正则表达式2. 匹配模式
let reg = new RegExp("a"， "i") //通过构造函数来创建一 个正则表达式的对象
//使用字面量来创建正则表达式: /正则/匹配模式
reg = /a/i
reg = /\w/
reg = new RegExp("\\w" )
```

<img src="https://typora-dream.oss-cn-beijing.aliyuncs.com/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.png" style="zoom:80%;" />

```
量词
{m}正好m个
{m,}至少m个
{m,n} m-n个
+一个以上，相当于{1,}
*任意数量的a
? 0-1次{0,1}
```

## JSON

#### 对象的序列化

JS中的对象使用时都是存在于计算机的内存中的
-序列化指将对象转换为- -个可以存储的格式
在JS中对象的序列化通常是将一个对 象转换为字符串( JSON字符串)
-序列化的用途(对象转换为字符串有什么用) :
-对象转换为字符串后，可以将字符串在不同的语言之间进行传递
甚至人可以直接对字符串进行读写操作，使得JS对象可以不同的语言之间传递

#### 用途:

1.作为数据交换的格式
2.用来编写配置文字

#### 如何进行序列化:

-在JS中有一个工具类JSON (JavaScript Object Notation) JS对象表示法

JS对象序列化后会换一个字符串，这个字符串我们称其为JSON字符串
-也可以手动的编写JSON字符串，在很多程序的配置文件就是使用JSON编写的

#### 编写JSON的注意事项:

1. JSON字符串有两种类型:
JSON对象{ }
JSON数组[]
2. JSON字 符串的属性名必须使用双引号引起来
3. JSON中 可以使用的属性值(元素)
-数字(Number)
-字符串(String) 必须使用双引号
布尔值(Boolean)
空值(Null)
对象(Object {})
数组(Array [])
4. JSON的格式和JS对象的格式基本上一致的，
注意: JSON字 符串如果属性是最后-一个， 则不要再加，

## DOM

### document对象

document对象表示的是整个网页

document对象的原型链HTMLDocument -> Document -> Node -> EventTarget -> Object.prototype -> null

凡是在原型链上存在的对象的属性和方法都可以通过Document去调用部分属性:

- document.documentElement --> html根元素
- document.head --> head元素
- document.title --> title元素
- document.body --> body元素
- document.links --> 获取页面中所有的超链接

### 获取元素节点对象（element）

**通过document对象来获取元素节点**

**通过document对象来创建元素节点通过document来获取已有的元素节点:**

- document .getElementById()

  根据id获取**一个元素节点对像**

- document.getElementsByClassName()
  根据元素的class属性值获取一组元素节点对象
  返回的是一个**类数组对象**

  该方法返回的结果是一个实时更新的集合当网页中新添加元素时，集合也会实时的刷新

- document.getElementsByTagName()

  根据标签名获取**一组**元素节点对象（类数组）
  返回的结果是可以实时更新的集合

  document.getElementsByTagName("*"）

  获取页面中所有的元素

- document.getElementsByName( )
  根据name属性获取一组元素节点对象
  返回一个实时更新的集合
  主要用于表单项

  ```js
  <form>
  <input type="text" name= "username">
  <input type="radio" name=" gender" value= "male">男
  <input type="radio" name= "gender" value="female">女
  </form>
  ```

- document .querySelectorAll()

  根据选择器去页面中查询元素会

  返回一个类数组 (不会实时更新)

- document .querySelector()

  根据选择器去页面中查询第一个符合条件的元素

**div元素的原型链**

HTMLDivElement -> HTMLElement -> ELement -> Node -> . . .

**通过元素节点对象获取其他节点的方法**

- element . childNodes获取当前元素的子节点(**会包含空白的子节点**)

- element . children获取当前元素的子元素

- element. firstElementChild获取当前元素的第一个 子元素

- element. lastElementChild获取当前元素的最后个子元素

- element . nextElementSibling获取当前元素的下一个兄弟元素

- element . previousElementSibling获取当前元素的前一个兄弟元素

- element . parentNode获取当前元素的父节点

- element. tagName获取当前元素的标签名

  ```html
  <body>
  <div id="box1">
  我是box1
  <span class="s1">我是s1</span>
  <span class="s1">我是s1</span>
  </div>
  <span class="s1">我是s1</span>
  <script>
  const box1 = document. getElementById( "box1")
  const spans = box1.getElementsByTagName(”span")
  console. log(spans.length) //box1中的s1为2
  </script>
  </body>
  
  ```

### 获取文本节点

在DOM中，网页中所有的文本内容都是文本节点对象，
可以通过元素来获取其中的文本节点对象，但是我们通常不会这么做
我们可以直接通过元素去修改其中的文本
修改文本的三个属性；

- element. textContent

  获取或修改元素中的文本内容

  获取的是标签中的内容，不会考虑css样式

- element. innerText

  获取或修改元素中的文本内容

  innerText获取内容时， 会考虑css样式：

  -通过innerText去读取CSS样式，会触发网页的重排(计算CSS样式)

  -当字符串中有标签时，会自动对标签进行转义

- element. innerHTML获取或修改元素中的html代码

  -可以直接向元素中添加html代码

  innerHTML插入内容时，有被xss注入的风险

### 属性节点

属性节点(Attr) 
-在DOM也是一个对象，通常不需要获取对象而是直接通过元素即可完成对其的各种操作
-如何操作属性节点:
方式一:
读取:元素.属性名(注意，class属性需要使用className来读取)
读取一个布尔值时，会返回true或false
修改:元素.属性名=属性值
方式二:
读取:元素. getAttribute(属性名)
修改:元素.setAttribute(属性名，属性值)
删除:元素. removeAttribute(属性名)

```js
const input = document . getElementsByName( " username" )[0]
const input = document . querySelec tor(" [ name=username ]" )
// console.log(input.type)
// console. log(input.getAttribute("type"))
// input . setAttribute("value", " 孙悟空")
input . setAttribute("disabled"，"disabled") //设置布尔值
```

### 创建节点

三种动态创建元素
●document . write()
●element . innerHTM
●document. createElement()

```js
// 2. innerHTML 创建元素
var inner = document . querySelector('.inner');
//for(vari=0;i<=100;i++){
//
//	inner.innerHTML += '<a href="#">百度</a>'
// }
var arr = [];
for(vari=0;i<=100;i++){
	arr .push('<a href="#">百度</a>');
}
	inner.innerHTML = arr.join('');

// 3. document . createElement() 创建元素
var create = document . querySelector( ' .create' );
for(vari=0;i<=100;i++){
	var a = document . createElement('a' );
	create，appendChild(a);
}

```

区别

1. document .write是直接将内容写入页面的内容流,但是文档流执行完毕,则它会导致页面全部重绘
2. innerHTML 是将内容写入某个DOM节点,不会导致页面全部重绘
3. innerHTMI 创建多个元素效率更高(不要拼接字符串,采取数组形式拼接) . 结构稍微复杂
4. createElement() 创建多个元素效率稍低-点点,但是结构更清晰

```js
// appendChild() 用于给一个 节点添加子节点
list. appendChild(li)
//insertAdjacentElement( )可以向元素的任意位置添加元素
//两个参数: 1. 要添加的位置2. 要添加的元素
// beforeend标签的最后afterbegin 标签的开始
// beforebegin 在元素的前边插入元素(兄弟元素) afterend 在元素的后边插入元素(兄弟元素)
// list. insertAdjacentElement("afterend", li)
list. insertAdjacentHTML("beforeend", "<li id= 'bgj'>白骨精</li>")
}
const btn02 = document . getElementById( "btn02")
btn02.onclick = function( ){
//创建一个蜘蛛精替换孙悟空
const li = document . createElement("li")
li. textContent = "蜘蛛精"
li.id = "zzj"
//获取swk 
const swk = document . getElementById(" swk")
// replaceWith() 使用一个元素替换当前元素
// swk. replaceWith(li)
// remove( )方法用来删除当前元素
swk. remove( )

```



### 事件(event)

事件就是用户和页面之间发生的交互行为
比如:点击按钮、鼠标移动、双击按钮、敲击键盘、松开按键...

可以通过为事件绑定响应函数(回调函数)，来完成和用户之间的交互
绑定响应函数的方式:
1.可以直接在元素的属性中设置
2.可以通过为元素的指定属性设置回调函数的形式来绑定事件(一个事件只能绑定一个响应函数)
3.可以通过元素addEventListener( )方法来绑定事件（同时绑定多个事件）

```html
<body>
    <button>
        点我一下
    </button>
    <script>
        //获取到按钮对象
		const btn = document. getElementById("btn" )
		//为按钮对象的事件属性设置响应函数
		 btn.onclick = function( ){
		 	alert("我又被点了一 下~~")
            btn.onclick = null //传统事件解绑 /垃圾回收
		 }
		 //btn. addEventListener("click"，function( ){
		 //alert("哈哈哈")
		 //})
		btn. addEventListener("click"，fn）
		function fn(){
			alert("大咩")
			btn.removeEventListener('click' , fn)
		}
    </script>
</body>
```

####  addEventListener事件监听方式

eventTarget . addEventListener (type, listener [useCapture] )
eventTarget . addEventListener ()方法将指定的监听器注册到eventTarget (目标对象)上,当该对象触发指定的事件时,就会执行事件处理函数。
该方法接收三个参数:
●type :事件类型字符串,比如click、mouseover ,注意这里不要带on
●listener :事件处理函数,事件发生时,会调用该监听函数
●useCapture :可选参数, 是-一个布尔值,默认是false。 第三个参数如果是true ,表示在事件捕
获阶段调用事件处理程序;如果是false (不写默认就是false ) , 表示在事件冒泡阶段调用事件处理
程序。.

#### 鼠标事件对象

| 鼠标事件对象 |                                        |
| ------------ | -------------------------------------- |
| e,clientX/Y  | 返回鼠标相对于浏览器窗口可视区的XY坐标 |
| e.pageX/Y    | 返回鼠标相对于文档页面的XY坐标IE9+支持 |
| e.screenX/Y  | 返回鼠标相对于电脑屏幕的XY坐标         |

```js
//常用的鼠标事件
//1.禁止鼠标右键菜单
//contextmenu主要控制应该何时显示上下文菜单,主要用于程序员取消默认的上下文菜单
document . addEventListener ( 'contextmenu', function(e) {
	e. preventDefault () ;
})
//2.禁止鼠标选中( selectstart开始选中)
document. addEventLi stener (' selectstart', function(e) {
	e. preventDefault() ;
})

```

#### 常用键盘事件

事件除了使用鼠标触发,还可以使用键盘触发。
键盘事件  触发条件
onkeyup
某个键盘按键被松开时触发
onkeydown
某个键盘按键被按下时触发
onkeypress
某个键盘按键被按下时触发但是它不识别功能键 比如ctrl shift箭头等
合
注意:

1. 如果使用addEventListener不需要加on
2. onkeypress和前面2个的区别是,它不识别功能键,比如左右箭头, shift 等。
3. 三个事件的执行顺序是: keydown-- keypress --- keyup

#### 事件对象

1. event 就是一个事件对象写到我们侦听函数的小括号里面当形参来看
2. 事件对象只有有了事件才会存在，它是系统给我们自动创建的，不需要我们传递参数
3. 事件对象是我们事件的一系列相关数据的集合跟事件相关的比如鼠标点击里面就包含了鼠标的相关信息，鼠标坐标啊，如果是键盘事件里面就包含的键盘事件的信息比如判断用户按下了那个键
4. 这个事件对象我们可以自己命名比如event、evt、e
5. 事件对象也有兼容性问题ie678通过window. event兼容性的写法e = e||window.event;

##### 常见事件对象的属性和方法

```js
//1.e.target 返回的是触发事件的对象(元素)
//	this返回的是绑定事件的对象(元素)
//区别; e.target 点击了那个元素，就返回那个元素this 那个元素绑定了这个点击事件，那么就返回谁
var div = document . querySelector( 'div');
div. addEventListener('click', function(e) {
	console .1og(e. target);
	console.log(this); //div
})
var ul = document . querySelector('ul' );
ul. addEventListener('click', function(e) {
//我们给u1绑定了事件那么this就指向ul
	console.log(this);
// e.target指向我们点击的那个对象谁触发了这个事件我们点击的是1i e. target指向的就是1i 
	console.1og(e. target); 
})
//2.e.type 返回事件类型
var div = document . querySelector( 'div' );
div . addEventListener('click', fn);
div . addEventL istener( ' mouseover', fn);
div . addEventListener( ' mouseout'，fn);
function fn(e) {
	console.log(e.type);
}
// 2.e. preventDefault() 阻止默认行为(事件) 让链接不跳转或者让提交按钮不提交
var a = document . querySelector('a');
a. addEventListener( 'click', function(e) {
e. preventDefault(); // dom标准写法
})
//3.e.stopPropagation 阻止冒泡
var son = document . querySelector('.son');
son. addEventListener( 'click', function(e) {
	alert('son' );
	e. stopPropagation(); // stop 停止 Propagation传播
}, false);
var father = document . querySelector('.father');
father . addEventListener('click'，function() {
	alert('father');
}, false);
document . addEventListener('click',function() {
	alert('document');
})


```



#### DOM事件流

![image-20230110220911081](C:\Users\14948\AppData\Roaming\Typora\typora-user-images\image-20230110220911081.png)

事件发生时会在元素节点之间按照特定的顺序传播,这个传播过程即DOM事件流。
注意
1. JS代码中只能执行捕获或者冒泡其中的一个阶段。
2. onclick和attachEvent只能得到冒泡阶段。
3. addEventListener (type, listener[, useCapture])第三个参数如果是true ,表示在事件捕
    获阶段调用事件处理程序;如果是false (不写默认就是false ) , 表示在事件冒泡阶段调用事件处理
    程序。.
4. 实际开发中我们很少使用事件捕获,我们更关注事件冒泡。
5. 有些事件是没有冒泡的，比如onblur、onfocus、 onmouseenter. onmouseleave

## 内建对象

#### Map

Map用来存储键值对结构的数据(key-value)

Object与Map的区别

- 0bject中存储的数据就可以认为是一种键值对结构

- Map和Object的主要区别:

- 0bject中的属性名只能是字符串或符号，如果传递了一个其他类型的属性名，
  JS解释器会自动将其转换为字符串

- Map中任何类型的值都可以称为数据的key

  ```js
  const obj2 = {}
  const obj = {
      "name":"孙悟空"，
      'age':18,
      [Symbol()]:"hhh"
  	[obj2]:"xxx"
  }
  console.log(obj(obj2) === obj({})) //true
  const map = new Map()
  map.set(obj2,"www")//obj2成为key
  ```

  ```js
  //创建一个Map
  const map2 = new Map([
      ['name','猪八戒']，
  	['age',18],
  	[{},() => {}],     
  ])//map转为数组可以用Array.from(map)或[...map],结果为二维数组
  //遍历
  map2.forEach(key,value)=>{}
  for(const [key,value] of map2){}
  ```

  

属性和方法:
map.size()获取map中键值对的数量
map. set(key，value) 向map中 添加键值对
map. get(key)根据key 获取值
map . delete(key)删除指定数据
map.has(key)检查map中是否包含指定键
map.clear()删除全部的键值对

#### Set

用来创建一个**集合**（可以用[...xxx]改为数组），它的功能与数组类似，不同点在于Set中不能有重复的数据

理解：set是一种key和value相同的map，所以当添加相同的数据，不会有相同的key同时向集合中add，所以自然不会产生相同的数据

#### Math

一个工具类（但是实际是个对象，不能用new创建）

-常量:
Math.PI圆周率
-方法:
Math.abs()求一个数的绝对值
Math.min()求多个值中的最小值
Math.max()求多个值中的最大值
Math. pow()求x的y次幂
Math.sqrt()求一个数的平方根
Math. floor()向下取整
Math.ceil()向上取整
Math. round()四舍五入取整
Math. trunc()直接去除小数位
Math. random()生成一个0-1之间的随机数

#### Date

|- 在JS中所有 的和时间相关的数据都由Date对象来表示
-对象的方法:
getFullYear()获取4位年份
getMonth()返当前日期的月份(0-11)
getDate()返回当前是几日
getDay()返回当前日期是周几(0-6) 0表示周日
getTime()返回当前日期对象的时间戳
时间戳:自1970年1月1日0时0分0秒到当前时间所经历的毫秒数
计算机底层存储时间时，使用都是时间戳
Date. now()获取当前的时间戳

## BOM

#### 文档加载window.onload

_网页是自上向下加载的，如果将js代码编写到网页的上边，
js代码在执行时，网页还没有加载完毕，这时会出现无法获取到DOM对象的情况window. onload事件会在窗口中的内容加载完毕之后才触发_

**如何解决这个问题:**
1.将script标签编写到body的最后
2.将代码编写到window. onload的回调函数中
3.將代码编写到document对象的DOMContentLoaded的回调函数中(执行时机更早)

#### 调整窗口大小事件window. onresize

window. onresize是调整窗口大小加载事件,当触发时就调用的处理函数。

```js
window. onresize = function() {} 
window. addEventListener ("resize", function() {});
```

注意;
1.只要窗口大小发生像素变化,就会触发这个事件。
2.我们经常利用这个事件完成响应式布局。window.innerWidth 当前屏幕的宽度

### js执行机制

#### 同步任务

同步任务都在主线程上执行，形成-个执行栈。

#### 异步任务

JS的异步是通过回调函数实现的。
-般而言,异步任务有以下三种类型:
1、普通事件,如click、resize等
2、资源加载,如load、error等
3、定时器，包括setlnterval. setTimeout 等
异步任务相关回调函数添加到任务队列中(任务队列也称为消息队列)。

由于主线程不断的重复获得任务、执行任务、再获取任务、再执行,所以这种机制被称为事件循环( event loop )。事件循环(由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为事件循环)。

<img src="https://typora-dream.oss-cn-beijing.aliyuncs.com/28~A@$_YL)21FZ%5ZC8$I}R.png"/>

##### 事件循环(event loop)

-函数在每次执行时，都会产生一个执行环境
-执行环境负责存储函数执行时产生的一切数据
-问题:函数的执行环境要存储到哪里呢?
-函数的执行环境存储到了一个叫做调用栈的地方
-栈，是一种数据结构，特点后进先出.
-队列，是一种数据结构，特点先进先出

##### 调用栈(call stack)

-调用栈负责存储函数的执行环境
-当一个函数被调用时，它的执行环境会作为一 个栈帧
插入到调用栈的栈项，函数执行完毕其栈帧会自动从栈中弹出

##### 消息队列

-消息队列负责存储将要执行的函数
-当我们触发一个事件时，其响应函数并不是直接就添加到调用栈中的
-因为调用栈中有可能会存在一些还没有执行完的代码
-事件触发后，JS引擎是将事件响应函数插入到消息队列中排队



#### 定时器

定时器的本质就是在指定时间后将函数添加到消息队列中

##### setTimeout()/setInterval()定时器

window. setTimeout (调用函数，[ 延迟的毫秒数]) ;
setTimeout(方法用于设置一个定时器,该定时器在定时器到期后执行调用函数。

区别:

setTimeout延时时间到了，就去调用这个回调函数，只调用一次就结束了这个定时器
setInterval每隔这个延时时间，就去调用这个回调函数，会调用很多次，重复调用这个函数**但如果当中函数执行速度比较慢，他是无法确保每次执行间隔是语言的**

```js
// console. time( "间隔")
// setInterval( function(){
// console. timeEnd( "间隔")
//
// console.log("定时器执行了~~")
//
//	alert("定时器执行~" )
// console. time( "间隔" )
// }，3000)

//希望可以确保函数每次执行都有相同间隔
console. time( "间隔" )
setTimeout( function fn() {
	console. timeEnd("间隔" )
	alert( "哈哈")
	console. time( "间隔" )
//在setTimeout的回调 函数的最后，在调用一个setTimeout
	setTimeout(fn，3000)
}，3000) .

```

**在使用setInterval()时会出现延迟时间空白,所以在使用时在使用开始提前调用一次回调函数**

注意:

1. window可以省略。
2. 这个调用函数可以直接写函数,或者写函数名或者采取字符串‘函数名0'三种形式。 第三种不推荐
3. 延迟的毫秒数省略默认是0 ,如果写,必须是毫秒。
4. **因为定时器很多,所以经常给定时器赋值一个标识符,便于删除定时器或其他操作**

```html
<body>
<button>点击停止定时器</ button>
<script>
var btn = document . querySelector( ' button' );
var timer = setTimeout (function() {
	console.1og('爆炸了');
},
5000);
btn. addEventListener( 'click', function() {
	//清除计时器clearTimeout(IDname)
    clearTimeout(timer);|
})
</script>
</body> 
```



### location

####  location对象的方法

| location对象方法   | 返回值                                                       |
| ------------------ | ------------------------------------------------------------ |
| location.assign()  | 跟href一样,可以跳转页面(也称为重定向页面)                    |
| location.replace() | 替换当前页面，因为不记录历史，所以不能后退页面               |
| location.reload()  | 重新加载页面，相当于刷新按钮或者f5如果参数为true强制刷新ctrl+f5 |

##### URL

<img src="https://typora-dream.oss-cn-beijing.aliyuncs.com/URLpng.png"/>

#### location对象属性

| location对象属性  | 返回值                          |
| ----------------- | ------------------------------- |
| location.href     | 获取或者设置整个URL             |
| location. host    | 返回主机(域名) www.itheima.com  |
| location.port     | 返回端口号如果未写返回空字符串  |
| location.pathname | 返回路径                        |
| location. search  | 返回参数                        |
| location. hash    | 返回片段#后面内容常见于链接锚点 |

### navigator

navigator对象包含有关浏览器的信息,它有很多属性,我们最常用的是userAgent ,该属性可以返回由客户机发送服务器的user- agent头部的值。
下面前端代码可以判断用户那个终端打开页面,实现跳转

```js
if ( (navigator . userAgent . maltsch (/ (phone I pad | pod| iPhone I iPod I ios I iPad |Android |
Mobile |BlackBerryI IEMobile |MQQBrowser | JUC | Fennec IwOSBrowser I Browse rNG I Webos
I Symbian |Windows Phone)/i))) {
window. location.href = "";
//手机
} else {
window. location.href = "";
//电脑
}
```

### history

| history对象方法 | 作用                                                  |
| --------------- | ----------------------------------------------------- |
| back()          | 可以后退功能                                          |
| forward()       | 前进功能                                              |
| g0(参数)        | 前进后退功能参数如果是1前进1个页面如果是-1后退1个页面 |






## 其他

#### [JavaScript中throw的错误异常处理]

[(33条消息) JavaScript中throw的错误异常处理_学全栈的灌汤包的博客-CSDN博客_js throw](https://blog.csdn.net/m0_71485750/article/details/125525248)

#### JavaScript实现字符串转数组的6种方法总结

[JavaScript实现字符串转数组的6种方法总结_javascript技巧_脚本之家 (jb51.net)](https://www.jb51.net/article/263429.htm)

#### js实现字符串数组转换成数字数组的几种方式

[(33条消息) js实现字符串数组转换成数字数组的几种方式_春风姐姐的博客-CSDN博客_js字符串数组转数字数组](https://blog.csdn.net/sumimg/article/details/114314438)

[(33条消息) ▲什么是迭代器？迭代器有什么作用？_K.t.P.T.的博客-CSDN博客_迭代器](https://blog.csdn.net/phantomthief1412/article/details/122119673)
