# js的一些基础知识之基本类型

 基本类型有七种：数字(number)

​					字符串(string)

​					布尔(boolean )

​					符号(symbol)

​					对象(object)	 Function Array Date RegExp

​					空(null)

​					未定义(undefined)

### 一数字

1.根据语言规范，JavaScript 采用“遵循 IEEE 754 标准的双精度 64 位格式”（"double-precision 64-bit format IEEE 754 values"）表示数字。——在 JavaScript（除了[`BigInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)）当中，**并不存在整数/整型 (Integer)。

一切看上去像整形的，其实都是浮点数

`console.log(9/2) 结果是4.5而不是4`

2. 一些内置函数isFinite()  isNaN（）可以用来判断。

​	parseInt用来将字符串转化为整型，parseInt("a",b);

​    a是要转化的字符串，b表示字符串的进制

​     JavaScript 还有一个类似的内置函数 [`parseFloat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)，用以解析浮点数字符串，与[`parseInt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)不同的地方是，`parseFloat()` 只应用于解析十进制数字。

​	3.一元运算符 + 也可以把数字字符串转换成数值：

​		+"40"  =40(number)



### 二字符串

1.可以通过直接访问length得到字符串的长度



### 三布尔值

1.boolean（）函数

false、0、空字符串（""）、NaN、null 和 undefined 被转换为 false`



### 四对象

### 4.1object对象

1. object对象的创建方式：（a是这个对象的名称)

【1】通过let a={}          

【2】通过let a=object()



### .面向对象的三个特点：

 5.1 封装

​        1.对象还要负责安全，实例属性使用#开头成为私有属性，只能在类里面使用。

​		2.对于#的如果我们想要去修改的话我们需要使用到的有getter和setter

​			外部怎么读呢：在类里面加上getName(){return this.#name}

​			外部怎么改呢：在类里面加上setName(){this.#name=name}

​		修改时就使用  a.setName 

​		读取时就使用 a.getName  当然后面这个属性可以自己自定义     

​         3.这么写好处在哪里：（1）可以选择是否修改，保证安全性。

​											（2）可以在方法中对属性的值进行验证.

  5.2多态：只要有这个属性就能使用

​             好处：提供了灵活性

  5.3 继承：extends

​        1.在子类中可以重名来写父类的方法

​       2.重写构造函数时构造函数的第一行代码必须为super()，它的意思为重新继承父类的super。

​		3.可以在不修改的前提下对代码进行拓展，遵循OCP开闭原则。

  6.对象中存储属性

​    1.对象自身

​    2.原型对象（prototype）:

​           在对象中就是__proto__

​     3.怎么添加原型对象有两种方法

​          （1）在类中通过***(){}的方式添加

​          （2）主动添加

​     4.怎么访问原型对象：

​         1.直接a.__proto__

​         2.使用长的Object.getPrototypepf(a)来进行访问    

​         5.原型对象中的数据：1对象中的数据 2constructor

  7.原型对象的原型对象的原型对象为null，构成了一条原型链。而且根据对象的不同，原型链的长度是不同的。

8..原型对象的末尾是obj.__proto__ 再之后就是Null了。

9.原型的作用：

​	（1）原型是一个公共区域，创建一个即可被所有的实例所访问。

​    （2 )重复的部分避免了重复的创建，省去不必要的麻烦。

### 4.2Date对象

1.let a=new Date()  记录执行时的时间。

2.newDate()里面可以指定时间：月/日/年 时间

3.一些方法：

​	getTime（）获得时间戳 ：从1970年开始到现在的毫秒

​	getDay()返回周几 返回0是周末

​	getFullYear()获得年份

​	getMonth()月

4.直接传的话传的是一个时间戳，结果是从1970年1月1日经历你所传的时间戳之后的时间。

5.时间的格式化：

time.toLocalString(a,b)

a:语言所在地。

b:其他很多格式，自己在网上查。



### 4.3RegExp对象：

1.定义或解释：就是设立一个规则，判断你符不符合规则

2.创建正则表达式：、

​		正则表达式可以接收两个参数：1.正则表达式 2.匹配模式

​		（1）let reg=new RegExp("",")

​			（2）reg=/a/i 

3.正则表达式的一些常用的方法：

[`RegExp.prototype.exec()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)

在该字符串中执行匹配项的搜索。	

[`RegExp.prototype.test()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

该正则在字符串里是否有匹配。

[`RegExp.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString)

返回表示指定对象的字符串。重写[`Object.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)方法。

[`RegExp.prototype[@@match]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match)

对给定字符串执行匹配并返回匹配结果。

[`RegExp.prototype[@@matchAll]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)

对给定字符串执行匹配，返回所有匹配结果。

[`RegExp.prototype[@@replace]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)

给定新的子串，替换所有匹配结果。

[`RegExp.prototype[@@search]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search)

在给定字符串中搜索匹配项，并返回在字符串中找到字符索引。

[`RegExp.prototype[@@split]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split)

通过将给定字符串拆分为子字符串，并返回字符串形成的数组。

