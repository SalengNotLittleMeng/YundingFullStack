### 三条输出语句

```
alert("Hello World!");在浏览器中谈出一个警告框
document.write("我的第一行JS代码！");直接在网页中输出一个内容
console.log("写入到开发者控制台"); 向控制台输出某句话
```

### 代码编写位置

JS代码编写位置
1.`<script></script>`标签中，可写多个；
2.外部文件.js中,`<script src="外部文件的路径"></script>`引入，标签内不能再编写代码，不执行；

过程：

（1）创建外部文件：script.js

（2）`<script type="text/javascript" src="js/script.js"></script>`

3.可以将js代码编写到指定属性中去

可以将JS代码编写到标签的onclick属性中，当我们点击代码的时候JS代码就会执行，例如如下代码会在点击的时候弹出"讨厌，你点我干嘛~"（如下代码在 body里写）

```javascript
<button onclick="alert('讨厌，你点我干嘛~')">点我一下</button>
```

4.超链接<a>的href属性中,点击超链接将执行代码，href=”javascript: “;

```javascript
<a href="javascript:alert(123)"超链接</a>
```

(位置3、4 结构与行为耦合，不方便维护，不推荐）

###  基本语法

1.注释 （查看、维护、合作、简单调试）

```
单行注释  //
多行注释  /*

           */
或
/*
*
*
*/
```

2.严格区分大小
3.每一条语句以分号 ; 结尾，可不用但会浪费系统资源甚至可能出错，不推荐
4.自动忽略多个空格和换行，以此对代码进行格式化，美观

### 字面量和变量

1.字面量：
一些不可改变的值，如1，2，1693587469695等
可以直接使用，但一般不会直接使用，麻烦
2.变量 ：
可以用来保存字面量，其值可以任意改变，通过变量名对字面量进行描述，方便使用

```javascript
var a;//(variable)声明变量
a = 0226;//赋值
var a = 0226;
```

### 变量的内存结构

定义：内存是用于存储数据的地方，程序要执行一段代码，要先从硬盘加载到内存当中，再由内存发送给CPU,CUP才能对代码进行执行。

> **注：变量并不存储任何值，而是存储值的内存地址**

1.JS定义变量 let a = '哈哈'
2.内存中开辟出一个空间用于存储变量名和值
3.在java中存储变量会根据变量类型 例如 int a 那么就开辟一个int大小的空间来存储值
4.JS不同的是所有的变量都是用let 来定义的 例如 let a，那么就无法确定a的类型和大小，如果存放值得空间太大，会导致资源的浪费，太小又无法存储值
5.这时候就采取再内存中再开辟一个专门存储值的空间来存储值，例如这里的例子就开辟了0x11这个内存地址来存储值，
6.然后存储变量和值的而那个空间中，值的部分存储的就是指向这个值的内存

![img](https://healerzq.oss-cn-beijing.aliyuncs.com/f4c7eae8a36c457d9d4b2eafc6419c55.png)

-  变量a 和变量 b 的值均为 哈哈
-  在往内存开辟空间存储变量的时候，会首先搜索内存中是否已经存储了这个变量，如果已经存储了，就不重复开辟空间存储变量、
-  因此变量a 和 变量 b指向了同一内存地址

### 标识符

标识符：js中所有可以自主命名的都可以称为标识(zhi)符，例如变量名，函数名，属性名……

命名规则：
1.标识符中可以含有字母、数字、下划线、$
2.不能以数字开头
3.不能是ES中的关键字或保留字，如var,if…
4.一般采用驼峰命名法-首字母小写，每个单词开头字母大写，其余字母小写-
5.JS底层保存标识符时采用Unicode编码即utf-8，理论上可用utf-8中所有内容命名，包括中文，但一般不用

## 数据类型

### 原始值

数据类型，指那些可以赋值给变量的值，JS中的数据类型由原始值和对象共同组成。对象我们会稍微晚点介绍，先来介绍原始值。

JavaScript中一共有七种原始值：

1. 数值（Number）
2. 大整数（BigInt）
3. 字符串（String）
4. 布尔值（Boolean）
5. 空值（Null）
6. 未定义（Undefined）
7. 符号（Symbol）

##### 数值（number）

-在js中所有的整数和浮点数都是number类型

-js中的数值并不是无限大的，当数值超过一定范围后会显示近似值

-infinity 是一个特殊的值表示无穷

-所以在js中进行一些精度比较高的运算时要十分主义

-NAN 也是一个特殊的数值，表示非法的数值

其他进制数字的表示方法：

```
let a = 0b1010 // 二进制
let b = 0o77 // 八进制
let c = 0xff // 十六进制
```

##### 大整数(BigJnt)

​	-大整数用来表示一些比较大的整数

​	-大整数使用n结尾，它可以表示的数字范围是无限大

##### typeof运算符

​	-typeof用来检查不同的值的类型

​	-它会根据不同的值返回不同的结果

注：typeof检查的是**值**的类型而不是变量的类型，js中的变量没有类型，值才有类型。

```javascript
var a=123;
var b="123"
console.log(a);
console.log(b);
console.log(typeof(a));
console.log(typeof(b));
```

输出结果：

```javascript
123
123
number
string
```

##### 字符串(string )

JavaScript中字符串需要使用引号引起来，单引号和双引号都是可以的，没有本质区别。使用typeof运算符检查一个字符串时会返回`"string"`。

```
let a = "今天天气真不错"
let b = '昨天天气也挺好'
```

​	-转义字符\

JavaScript中使用`/`作为转义字符，转义字符用以表示一些特殊的符号，比如：

| 转义字符 | 字符串      |
| -------- | ----------- |
| \’       | ‘           |
| \”       | “           |
| \\\      | \           |
| \n       | 换行        |
| \t       | 制表符      |
| \uxxxx   | Unicode编码 |

###### 	模板字符串\`${变量}\`

模板字符串可以用来表示一些比较长的字符串（跨行），且可以直接向字符串中嵌入变量，使用\`表示模板字符串，在模板字符串中使用\`${变量}\`来嵌入变量：

```
let str = `锄禾日当午
汗滴禾下土
谁知盘中餐
粒粒皆辛苦
`
let name = "孙悟空"
let str = `大家好，我是${name}`
```

##### 布尔值(Boolean)

​	-布尔值用来进行逻辑判断

​	-只有两个`true`和`false`

​	-使用typeof检查时会返回`"boolean"`

true —— 真

false —— 假

```
let a = true
let b = false
```

##### 空值(Null)

空值表示空对象

只有一个值`null`

使用typeof检查时会返回`"object"`

```
let a = null
```

##### 未定义(Undefined)

未定义，作用和空值类似，同样只有一个值`undefined`。当声明一个变量而没有赋值时，它的值就是undifined。我们一般不会主动使用undefined。使用typeof检查时会返回`"undefined"`

```
let a // 此时a的值就是undefined
```

##### 符号(symbol)

符号比较特殊，用以创建一个唯一标识。使用typeof检查一个符号时会返回`"symbol"`

```
let a = Symbol()//调用symbol()函数创建了一个符号
```

##### 原始值都是不可变的

上边所有的原始值都是不可变的类型，值一旦创建就无法修改！

### 强制类型转换

指的是将一种数据类型转化为String,Number,Boolean。

转化为String:
	1.调用toString()方法将其它类型转换为字符串:

​			-调用xxx的yyy方法-->xxx.yyy()

​			 (XXX.toString())

​			-null,undefined 的toString会报错因为这两个类型没有toString

## 对象

数据类型:
	-原始值
1.数值Number
2.大整数BigInt
3.字符串String
4.布尔值Boolean
5.空值Null
6.未定义Undefined
7.符号Symbol

​	-对象

- 对象是JS中的一种复合数据类型，
  它相当于一个容器，在对象中可以存储各种不同类型数据
  原始值只能用来表示一些简单的数据，不能表示复杂数据

对象中可以存储多个各种类型的数据
	对象中存储的数据，我们称为属性
	
向对象中添加属性:
对象.属性名=属性值

读取对象中的属性
	对象.属性名
	如果读取的是一个对象中没有的属性不会报错而是undefined

```js
比如:现在需要在程序中表示一个人的信息

//创建对象
let obj = 0bject()
/*
letname="孙悟空"
let age = 18
let gender = "男"

对象中可以存储多个各种类型的数据
	对象中存储的数据，我们称为属性
	
向对象中添加属性:
对象.属性名=属性值

读取对象中的属性
	对象.属性名
	如果读取的是一个对象中没有的属性不会报错而是undefined
*/

obj. name = "孙悟空”.
obj.age = 18
obj . gender = "男"

//修改属性
obj.name = "Tom sun"

//删除属性
delete obj . name

console. log( obj . name)

```

### 对象的属性

属性名

- 通常属性名就是一个字符串，所以属性名可以是任何值，没有什么特殊要求
  但是如果你的属性名太**特殊**了，不能直接使用，需要使**用[" " ]来设置**
  虽然如此，但是我们还是强烈建议属性名也按照标识符的规范命名

- 也可以使用符号(symbol)作为属性名，来添加属性（不常用）
  获取这种属性时，也必须使用symbol
  使用symboL添加的属性，通常是那些不希望被外界访问的属性
- 使用[]去操作属性时，可以使用变量(变量中括号不要加引号)

属性值

- 对象的属性值可以是任意的数据类型，也可以是一个对象

使用typeof检查一个对象时，会返回object



```
理解：
通过点添加属性 点后写什么属性名就是什么
通过中括号加的时候就看变量的值 变量指向什么 添加的就是什么 变量不要加引号 加上就是字符串
```


in运算符

- 来检查对象中是否含有某个属性
- 语法属性名in obj
- 如果有返回true,没有返回falsel

```js
obj.name = "孙悟空 "
// obj.if = "哈哈”//不建议
// obj.let = "嘻嘻"//不建议
// obj["1231312a#!#!#!"] = "呵呵"// 不建议

// let mySymbol = Symbol()
// let newSymbol = Symbol( )
// //使用symbol作为属性名
// obj[mySymbol] = " 通过symbol添加的属性"
// console.log( obj [mySymbol] )

obj.age = 18
obj["gender"] = "男"

let str = "address"
obj[str] = "花果山”//等价于obj[" address"] =”花果山”

obj.str = "哈哈”//使用.的形式添加属性时，不能使用变量

obj.a = 123
obj.b = 'hello '
obj.c = true
obj.d = 123n
obj.f = 0bject( )
obj.f.name = "猪八戒"
obj.f.age = 28

// console.log(obj.f . name )

// console.log( obj. gender)
// console.log( obj[" gender"])
// console.log(typeof obj)

/*
in运算符
-用来检查对象中是否含有某个属性
-语法属性名in obj
-如果有返回true,没有返回falsel
*/

console.log("name" in obj)


console.log( obj. gender )
console. log(obj["gender"])
```

### 对象字面量

对象字面量

- 可以直接使用{}来创建对象
- 使用{}所创建的对象，可以直接向对象中添加属性
- 语法:

{

​	属性名:属性值，

​	[属性名]：属性值，

}

```js
let obj = 0bject( )

let mySymbol = Symbol()

let obj2 = {
name: "孙悟空" ,
age:18,
[ "gender"]:"男"，
[ mySymbol]: "特殊的属性"，
hello:{
	a:1,
	b: true
	}
}

console.log(obj)

```

### 枚举对象中的属性

枚举属性，指将对象中的所有的属性全部获取

for- in语句

- 语法:

  ```js
  	for(let propName in对象){
    	语句...
    	}
  ```

  

- for- in的循环体会执行多次，有几个属性就会执行几次，
  每次执行时，都会将一个属性名赋值给我们所定义的变量

- 注意:并不是所有的属性都可以枚举，比如使用符号添加的属性

```js
letobj={
name: ' 孙悟空'，
age:18,
gender:"男"，
address:"花果山"，
[Symbol()]:"测试的属性" //符号添加的属性是不能枚举
}

for(let propName in obj){
console.' log( propName, obj[ propName ] )
}
```

### 可变类型

- 原始值都属于不可变类型，一旦创建就无法修改
- 在内存中不会创建重复的原始值

```js
let a=10
let b=10
a=12 //当我们为一个变量重新赋值时，绝对不会影响其他变量
// console.log("a ="， a)
// console.log("b ="，b)
```



- **对象属于可变类型**
- 对象创建完成后，可以任意的添加删除修改对象中的属性
- 注意:
  - 当对两个对象进行相等或全等比较时，比较的是对象的内存地址
  - **如果有两个变量同时指向一个对象，**
    **通过一 个变量修改对象时，对另外一个变量也会产生影响**

```js
// let obj = {name: "孙悟空" }
let obj = 0bject( )
obj.name = " 孙悟空"
obj.age = 18

let obj2 = Object()
let obj3 = 0bject( )

// console.log(obj2 == obj3) // false


let obj4 = obj

obj4.name =“猪八戒" //当修改一个对象时，所有指向该对象的变量都会收到影响
console.log("obj", obj )
console.log("obj4"，obj4)
console.log(obj=== obj4)
```



当我们为一个变量重新赋值时，绝对不会影响其他变量

当修改一个对象时，所有指向该对象的变量都会受到影响

### 变量和对象

修改对象

- 修改对象时，如果有其他变量指向该对象

  则所有指向该对象的变量都会收到影响

修改变量

- 修改变量时，只会影响当前的变量

在使用变量存储对象时，很容易因为改变变量指向的对象，提高代码的复杂度
所以通常情况下，声明存储对象的变量时会使用const

注意:
const只是禁止变量被重新赋值，对对象的修改没有任何影响

```js
const obj = {
name: " 孙悟空" ,
}
const obj2 = obj
// obj2 = {}
obj2.name = "猪八戒”//修改对象
// obj2 = null //修改变量
console. log(obj)
console. log(obj2)
const obj3 = {
	name:"猪八戒”
}

obj3.name =“沙和尚"

console. log(obj3)

```

### 方法

补充内容
方法(method)

- 当一个对象的属性指向一个函数，
  那么我们就称这个函数是该对象的方法
  调用函数就称为调用对象的方法

```js
let obj = {}

obj.name = "孙悟空"
obj.age = 18

//函数也可以成为一个对象的属性
obj.sayHello = function( ){
	alert("hello")
}

console .log(obj)

obj. sayHello()

// document . write( )
// String()
```

面向对象本质就是，编写代码时所有的操作都是通过对象来进行的。
面向对象的编程的步骤:
	1.找对象
	2.搞对象.

学习对象:
	1.明确这个对象代表什么，有什么用
	2.如何获取到这个对象
	3.如何使用这个对象(对象中的属性和方法)

对象的分类:
	内建对象

- 由ES标准所定义的对象
- 比如0bject Function String Number .. ..

宿主对象

- 由浏览器提供的对象

- BOM、DOM

自定义对象

- 由开发人员自己创建的对象

### 简介

数组(Array)

- 数组也是一种复合数据类型，在数组可以存储多个不同类型的数据
- 数组中存储的是有序的数据，数组中的每个数据都有一 个唯一的索引，可以通过索引来操作获取数据
- 数组中存储的数据叫做元素
- 索引(index)是一组大于0的整数
- 创建数组
  通过Array( )来创建数组，也可以通过[ ]来创建数组



- 向数组中添加元素
  语法:
  数组[索引] =元素



- 读取数组中的元素
  语法:
  数组[索引]
  - 如果读取了一个不存在的元素，不会报错而是返回undefined

- length
  - 获取数组的长度
  - 获取的实际值就是数组的最大索引+ 1
  - 向数组最后添加元素:
    数组[数组.length] =元素
  - length是可以修改的

```js
const obj = { name:“孙悟空"，age: 18 }
             
const arr = new Array( )
const arr2 = [1, 2, 3，4，5] //数组字面量

arr[0] = 10
arr[1] = 22
arr[2]= 44
arr[3]= 88
arr[4] = 99

//使用数组时，应该避免非连续数组，因为它性能不好
// arr[100] = 99

// console. log(arr[1])

// console.log(typeof arr) // object

// console. log(arr .length)

arr[arr.length] = 33
arr[arr.length] = 55

arr.length = 5

console. log(arr)

```

## 数组

### 数组的遍历

```js
//任何类型的值都可以成为数组中的元素
let arr = [1, "hello", true, null,{name:"孙悟空"}， ()=>{}]

//创建数组时尽量要确保数组中存储的数据的类型是相同
arr = ["孙悟空"，"猪八戒"，“沙和尚"]
       
// console.log(arr)
/*
遍历数组
-遍历数组简单理解，就是获取到数组中的每一个元素
*/  
       
arr = ["孙悟空”，“猪八戒”，“沙和尚"， "唐僧"，"白骨精"]
for(let i=0; i<arr.length; i++){
 	console.log(arr[i])
}

for(let i=arr.length-1; i>=0; i--){
	console.log(arr[i])
}

/*
定义一个Person类，类中有两个属性name和age
然后创建几个Person对象， 将其添加到一个数组中
*/

class Person{
	constructor(name, age){
		this.name = name
		this.age = age
	}
}

const personArr =[
	new Person( "孙悟空" ,18),
	new Person( "沙和尚" , 38),
	new Person("红孩儿”，8),
 ]

```

### for-of语句

for-of语句可以用来遍历可迭代对象

语法:
for(变量of可迭代的对象){
	语句...
}

执行流程:
for-of的循环体会执行多次，数组中有几个元素就会执行几次，每次执行时都会将一个元素赋值给变量

```js
const arr = ["孙悟空"，"猪八戒"， “沙和尚"， "唐僧"]
             
for(let value of arr){
	console.log( value)
}

//只要是可迭代对象都能遍历
// for(let value of  "hello"){
// 	console. log(value)
// }
```

### 数组方法介绍(非破坏性)

Array. isArray()

- 用来检查一个对象是否是数组

at( )

- 可以根据索引获取数组中的指定元素

- at可以接收负索引作为参数

concat( )

- 用来连接两个或多个数组
- 非破坏性方法，不会影响原数组，而是返回一个新的数组

```js
// console. log(Array. isArray({ name: "孙悟空”})) // false
// console. log( Array. isArray([1, 2, 3])) // true 

const arr = ["孙悟空"，"猪八戒"， "沙和尚"， "唐僧"]

// console.log(arr.at(-2))|
// console. log( arr[arr.length - 2])

const arr2 = ["白骨精"， "蜘蛛精"， "玉兔精"]

let result = arr.concat(arr2， ["牛魔王"，"铁扇公主"])

console. log(result)

```

let arr=["孙悟空", "猪八戒"，"沙和尚"，"唐僧"，"沙和尚" ]

index0f( )

- 获取元素在数组中第- 次出现的素索引
- 参数:
  1.要查询的元素
  2.查询的起始位置

lastIndex0f( )

- 获取元素在数组中最后一次出现的位置

- 返回值:
  找到了则返回元素的索引，
  没有找到返回-1

join( )

- 将一个数组中的元素连接为一个字符串
- "孙悟空"， "猪八戒"，“沙和尚"， “"唐僧"， "沙和尚"] ——> "孙悟空, 猪八戒,沙和尚,唐僧,沙和尚"
- 参数:
  指定一个字符串作为连接符，默认是逗号

slice( )

- 用来截取数组(非破坏性方法)
- 参数

1.截取的起始位置(包括该位置)
2.截取的结束位置(不包括该位置)

- 第二个参数可以省略不写，如果省略则会一 直截取到最后
- 索引可以是负值
- 如果将两个参数全都省略，则可以对数组进行浅拷贝(浅复制）

```js
let result = arr. index0f("沙和尚"， 3)
result = arr.lastIndex0f("沙和尚"，3)
result = arr. index0f("白骨精")

result = arr. join()//默认为逗号
result = arr. join("@@@")
result = arr. join("")

arr = ["孙悟空"，"猪八戒"，"沙和尚"， "唐僧"]
result = arr.slice(0, 2)
result = arr.slice(1, 3)
result = arr.slice(1, -1)

result = arr.slice( )

console.log(result)


```

### 对象的复制

```js
const arr = ["孙悟空"，"猪八戒"， "沙和尚"]

// const arr2 = arr //不是复制
// arr2[0] = "唐僧"

//如何去复制一个对象 复制必须要产生新的对象
//当调用slice时，会产生一个新的数组对象，从而完成对数组的复制
const arr3 = arr.slice( )

// console.log(arr === arr2)
// console.log(arr2)

arr3[0] = "唐僧"

console.log(arr)
console. log(arr3)

```

### 浅拷贝和深拷贝

 浅拷贝(shallow copy)

- 通常对对象的拷贝都是浅拷贝
- 浅拷贝顾名思义，只对对象的浅层进行复制(只复制一层)
- 如果对象中存储的数据是原始值，那么拷贝的深浅是不重要
- 浅拷贝只会对对象本身进行复制，不会复制对象中的属性(或元素)



深拷贝(deep copy)

- 深拷贝指不仅复制对象本身，还复制对象中的属性和元素
- 因为性能问题，通常情况不太使用深拷贝

```js
//创建一个数组
const arr = [{name:"孙悟空"}， {name:"猪八戒"}]
const arr2 = arr.slice() //浅拷贝
const arr3 = structuredClone(arr) //专门用来深拷贝的方法
console.log(arr )
console.log(arr3) 
```

###  复制的方式

```js
const arr = ["孙悟空"，"猪八戒","沙和尚"]
const arr2 = arr.slice( )

// console.log(arr === arr2)
/*
...(展开运算符)
	-可以将一个数组中的元素展开到另一个数组中或者作为函数的参数传递
	-通过它也可以对数组进行浅复制
*/

// const arr3 = [arr[0], arr[1], arr[2]]
const arr3 = [...arr] 
// const arr3 = ["唐僧"， ...arr, "白骨精"]

// console. log(arr)
// console. log(arr3)

function sum(a, b, c) {
	return a+b+c
}

const arr4 = [10，20，30]

let result = sum(arr4[0], arr4[1]，arr4[2])
result = sum(...arr4)

// console. log(result)
```

```js
// console. log( result)

/*
对象的复制
	- object.assign(目标对象， 被复制的对象)
	-将被复制对象中的属性复制到目标对象里，并将目标对象返回
-也可以使用展开运算符对对象进行复制
*/

const obj = { name:"孙悟空"，age: 18 }

// const obj2 = object.assign({}, obj)
const obj2 = { address: "花果山"， age: 28 }

object.assign(obj2, obj)
// console. log( obj2)

const obj3 = { address: "高老庄"，...obj, age: 48}//将obj中的属性在新对象中展开

```

### 数组的方法(破坏性)


push( )

- 向数组的末尾添加一个或多个元素，并返回新的长度

pop( )

- 删除并返回数组的最后一个元素

unshift()

- 向数组的开头添加一个或多个元素，并返回新的长度

shift( )

- 删除并返回数组的第一个元素

splice() 

- 可以删除、插入、替换数组中的元素
- 参数
  1.删除的起始位置
  2.删除的数量
  3.要插入的元素
- 返回值:返回被删除的元素			

reverse( )

- 反转数组

```JS
let arr = ["孙悟空"，"猪八戒"，"沙和尚"]

let result = arr.push("唐僧"， "白骨精")
//console.log(arr)

result = arr. pop()
arr. unshift("牛魔王")
arr.shift( )
// console.log(arr)

arr = ["孙悟空"，"猪八戒"， "沙和尚"，"唐僧"]
// result = arr.splice(1, 3)
// result = arr.splice(1, 1, "牛魔王"，"铁扇公主"，"红孩儿")
result = arr.splice(1， 0，"牛魔王"，"铁扇公主"， "红孩儿")

// console. log( result)
// console.log(arr)

arr = ["a", "b", "c"，"d"]
arr. reverse( )

console. log(arr)

```

### 数组去重

```js
const arr=[1,2,1,3,2,2,4,5,5，6,7]
//编写代码去除数组中重复的元素

//分别获取数组中的元素
for (let i = 0; i < arr.length; i++) {
	//获取当前值后边的所有值
	for(letj=i+1;j<arr.length;j++){
		//判断两个数是否相等
		if (arr[i] === arr[ji]) {
			//出现了重复元素，删除后边的元素
			arr. splice(j, 1)
/*
当arr[i]和arr[j]相同时，它会自动的删除j位置的元素，然后j+1位置的元素，会变成j位置的元素
而j位置已经比较过了，不会重复比较，所以会出现漏比较的情况
解决办法，当删除一个元素后， 需要将该位置的元素在比较一遍
*/
j--
		}
	}
}

console. log(arr)

```

```js
const arr =[1, 2, 1, 3, 2, 2,4,5,5, 6, 7]

//获取数组中的元素
for(let i=0; i<arr.length; i++){
	const index = arr. index0f(arr[i]，i+1)
	if(index !== -1){
	//出现重复内容
	arr.splice( index, 1)
	i--//把刚才删除的位置再比较一遍
	}
}
console. log(arr)

```

```js
const arr =[1, 2, 1, 3, 2, 2,4,5,5, 6, 7]
const newArr = [ ]

for(let ele of arr){
	if( newArr. index0f(ele) === -1){
		newArr . push(ele)
    }
}

console. log( newArr)

```

### 冒泡排序

```js
/*
[9,1,3,2,8,0,5,7,6,4]
思路一:
9，1,3,2,8,0,5，7,6,4
-比较相邻的两个元素，然后根据大小来决定是否交换它们的位置
-例子:
第一次排序:1,3,2,8,0,5,7,6，4,9
第二次排序:1,2,3,0,5,7,6,4，8,9
第三次排序:1,2,0,3,5,6,4,7,8,9
...
倒数第二次：0，1,2,3,4,5,6,7,8,9

-这种排序方式，被称为冒泡排序，冒泡排序是最慢的排序方式
数字少还可以凑合用，不适用于数据量较大的排序
*/

constarr=[9，1,3,2,8,0,5,7,6,4]
for(letj=0;j<arr.length-1;j++){
	for(let i=0;i<arr.length-1;i++){
		// arr[i]前边的元素arr[i+1]后边元素
		if (arr[i] < arr[i + 1]) {
			//大数在前，小数在后，需要交换两个元素的位置
			let temp = arr[i] //临时变量用了存储arr[i]的值
			arr[i] = arr[i + 1] //将arr[i+1]的值赋给arr[i]
			arr[i + 1] = temp //修改arr[i+1]的值
		}
	}
}
console.log(arr)

```

### 选择排序

```js
 /*
选择排序
-取出一个元素，然后将其他元素和该元素进行比较，如果其他元素比该元素小则交换两个元素的位置
*/
console. log(arr)
for(let i=0; i<arr.length; i++){
	for(let j=i+1; j<arr.length; j++){
		if(arr[i] > arr[j]){
		//交换两个元素的位置
		let temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
		}
	}
}
console.log(arr)
```

### 

