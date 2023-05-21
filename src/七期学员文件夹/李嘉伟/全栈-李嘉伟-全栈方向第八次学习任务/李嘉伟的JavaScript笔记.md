# 李嘉伟的JavaScript笔记

## 目录

## 正文

### 简介

网景公司的一位程序员“布兰登艾克”为实现浏览器上网页的动态交互功能，决定开发一种新的编程语言。

网景公司为了促进JavaScript的标准化，将JavaScript捐献给欧洲计算机制造商协会，

Jscript成为JavaScript的事实标准。

chrome浏览器推出，并于2009年制定了ES5标准，此后网页标准每年6月份更新。

### 特性

- JavaScript是一门脚本语言，也就是解释性语言，在ES（ECMAScript）标准每年的更新过程中，JavaScript还要兼容之前老版本的代码，所以学习JavaScript就相当于学习了一门编程语言的发展历史。
- 我们把JS的解释器叫做JS引擎。（比如浏览器和node.js）
- 函数式编程（函数是一等公民）
- 单线程（降低语言复杂程度）
- 异步编程方式
- 面向对象编程

### 应用

- 书写位置

> 可以写在标签里 

$$
<script></script>
$$



> 可以使用外部式
>

步骤如下：

1.新建目录script

2.新建文件xxx.js

3.写标签，实现外部式
$$
<script src="./script/xxx.js"></script>
$$

> button标签的JS效果

$$
<button onclick="alert(‘你点我干嘛！’)">点我一下</button>
$$

$$
<button onmousemove="alert('你点我干嘛')">点我一下</button>
$$

> 超链接的Js效果

$$
<a href="JavaScript:alert(123);">超链接</a>
$$



- 输出语句

  - alert("哈哈哈哈")            弹出警告框

  - console.log('你猜我在哪？')    在控制台上输出一条日志

  - document.write('你猜我在哪？')     在网页中输出内容

- 基本语法

  略

- 字面量和变量

> 字面量

1 2 3 “hello”  true  null

> 变量

声明变量用let，有块作用域，没有数据类型。

var没有块作用域。

- 变量的内存结构

  代码-硬盘-内存-cpu

  变量存储的是字面量的地址

> 常量

声明常量用const

常量标识符要大写

> 标识符

1.字母数字下划线，数字不打头

2.尽量不使用JS的关键字和语句名

3.驼峰下划线

> 数据

1.当数据超过一定范围时会自动显示近似值

2.不同进制数的创建

0b二进制数

0o八进制数

0x十六进制数

输出时仍以十进制数输出。

3.infinity无穷

NAN非法数字

4.分类，可分为BigInt（以n结尾）和Number

> 数据类型的检查

检查typeof a

检查变量中所储存的值的类型

输出console.log(typeof a);

> 字符串

概念

表示：在JS中，我们使用单引号或双引号来表示字符串。

输出

转义字符：/“代表普通的双引号，/t制表符，/n换行符。

模板字符串（长字符串）用反单引号表示，可以任意换行。可以嵌入变量${name}

> 其他数据类型

1，布尔值（进行逻辑判断）Boolean

true false

2，空值（用来表示空对象）Null

3.未定义Undefined

4,符号 (创建唯一的标识) Symbol

七种原始值，一旦创建就不可以改变。

> 数据类型转换

将其他数据类型转换为数值，字符串和布尔值。

转换为字符串：

1，调用值的toString方法，将其他数据类型转换为字符串。

null和undefined没有toString（）方法，所以调用时会报错。

2，调用String（）函数，将其他数据类型转换为字符串。

转换为数值：

- 调用Number（）函数，将其他数据类型转换为数值。

情况：

1，字符串：

如果字符串不是合法数值，则直接转换成NaN

如果字符串是空串，则直接转换成0

2，布尔值

true1  false0

3，null0

4，undefined  NaN

- 调用parseInt（），parseFloat（）函数，从左至右解析字符串，转换为数值。

（parseint还可以用来做取整）

转换为布尔值：

只有一种方法，使用Boolean()函数，将其他数据类型转换为布尔值。

转换情况：

数值，表示错误（NaN），没有（0）的为false，其他为true。

字符串，空串为false，其余的为true

null 和undefined转换为false

对象，对象都会转换为true

> 运算符

> 基础语法
>

1. 变量声明 var let const的区别

- var可以重复声明，且具有变量提升，作用域为函数级。
- let不可以重复声明，没有变量提升，作用域为块级。
- const不可以重复声明，定义后不可修改，作用域为块级。

2. 数据类型

- 基本数据类型：undefined, null, boolean, number, string
- 引用数据类型：object, function, array

3. 操作符

- 算数操作符：加、减、乘、除、求余等。
- 比较操作符：大于、小于、等于、不等于、大于等于、小于等于等。
- 逻辑操作符：与、或、非、等等。
- 赋值操作符：=、+=、-=、*=、/=等。

4. 控制流

- if-else语句：用来进行条件判断。
- switch语句：对多个不同条件分别进行判断。
- for循环：用来重复执行一段代码块。
- while循环：不断重复执行一个代码块，直到条件不再满足。

> 高级语法
>

1. 函数

函数是一段可重复运行的代码块，它有参数和返回值。

函数的声明方式有三种：

- 函数声明：function fnName(){// fnBody};
- 函数表达式：let fnName = function(){// fnBody};
- 箭头函数：let fnName = () => {// fnBody};

函数的调用方式有两种：

- 直接调用：fnName();
- 间接调用：fnName.call(this, arg1, arg2,...)或者fnName.apply(this,[arg1, arg2,...])

2. 对象

对象用{}包含，包含多个属性和值。

对象访问有两种方式：

- 点语法：object.property
- 中括号语法： object[property]

3. 数组

数组用[]包含，可以存储多个值，通过下标访问。

数组常用方法：

- push/pop：末尾添加/删除元素
- shift/unshift：开头添加/删除元素
- splice：删除，插入，替换元素
- concat：合并数组
- slice：截取数组

4. 类

ES6引入了类，用于创建对象的蓝图。通过class关键字声明，可以继承其他类。

5. 正则表达式

正则表达式（RegExp）是一种用于匹配字符串的模式。在JavaScript中，可以建立一个RegExp对象，并调用其方法。

6. 异步编程

异步编程指的是不按代码的顺序执行。在JavaScript中，异步编程使用回调函数、Promise、Generator、async/await等机制来完成。

> DOM操作
>

DOM指的是文档对象模型，是W3C标准。DOM是用于管理HTML、XML文档的编程接口。

常见的DOM操作：

1. 获取元素

- 通过ID：document.getElementById('id')
- 通过标签名：document.getElementsByTagName('tagname')
- 通过class名：document.getElementsByClassName('classname')
- 通过CSS选择器：document.querySelector(’selector‘) 或者document.querySelectorAll(‘selector’)

2. 属性操作

- 获取属性：element.getAttribute('attribute')。
- 修改属性：element.setAttribute('attribute', 'value')。
- 删除属性：element.removeAttribute('attribute')。

3. 样式操作

- 获取样式：element.style.styleName。
- 设置样式：element.style.styleName = ’value‘。

4. 节点操作

- 获取子节点：element.childNodes。
- 获取父节点：element.parentNode。
- 获取兄弟节点：element.previousSibling 和 element.nextSibling。
- 增加节点：parent.appendChild(newnode)。
- 删除节点：parent.removeChild(node)。

> JSON
>

JSON是JavaScript Object Notation的缩写，一种轻量级的数据交换格式。它基于JavaScript语法，但是文本格式更简单易读，与语言无关。

JSON的常用方法：

- JSON.stringify(obj)：将一个JavaScript对象转化为JSON格式的字符串。
- JSON.parse(jsonstring)：将一个JSON格式的字符串转化为JavaScript对象。

> 面向对象

在 JavaScript 中，对象是一个拥有属性和方法的实体。属性是对象的状态，而方法是定义对象行为的函数。

JavaScript 的面向对象编程主要涉及以下五个方面：

1. 对象创建：在 JavaScript 中，可以使用构造函数或对象字面量创建对象。构造函数是用来创建新对象的函数模板，而对象字面量是用于创建新对象的方便的语法。

2. 继承：继承是面向对象编程中的一个重要概念，它允许你创建一个类，该类具有从其父类继承的一些属性和方法。在 JavaScript 中，可以使用原型链来实现继承。

3. 封装：封装是一种将数据和功能封装在一个对象中的技术。JavaScript 中，可以使用属性和方法来实现封装。

4. 多态：多态是一种允许不同对象存储在同一个数组或变量中的技术。在 JavaScript 中，由于它是一种弱类型语言，因此多态性是自然的。

5. 类与实例：类是一个对象的抽象，它描述了对象的属性和行为。类的实例是一个具体的对象，它具有与类相同的属性和方法。

> JavaScript内置对象

JavaScript内置对象是指在JavaScript语言中提供的一个预定义对象，在开发过程中经常用于处理各种数据类型和操作。

1. Number对象

Number对象用于表示数字，包括整数和浮点数。它还提供了许多方法，用于操作数字，例如toFixed()方法可以将数字保留指定位小数。

2. String对象

String对象用于表示文本，可以包含任何字符。它提供了许多方法，用于操作字符串，例如concat()方法用于将字符串连接起来。

3. Array对象

Array对象用于表示数组，可以存储任何类型的数据。它提供了许多方法，用于操作数组，例如push()方法可以将元素添加到数组的末尾。

4. Date对象

Date对象用于表示日期和时间。它可以用于获取当前日期和时间，也可以用于计算日期和时间之间的差异。

5. RegExp对象

RegExp对象用于表示正则表达式。它可以用于匹配字符串中的模式，并提供一些方法，例如test()方法用于检查一个字符串是否匹配正则表达式。

6. Math对象

Math对象用于执行数学运算，例如计算平方根或圆周率等。

7. Function对象

Function对象用于表示函数，可以定义自己的函数并调用它们。它还提供了一些内置函数，例如setTimeout()函数可以延迟执行代码。



