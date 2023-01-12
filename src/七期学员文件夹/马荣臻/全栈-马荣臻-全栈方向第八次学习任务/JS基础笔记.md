# JS笔记

## 输入输出语句

### 输出语句

```js
alert("Hello World")
//弹出警告，警告内容为Hello World
console.log('Hello World')
//在控制台日志显示Hello World
doument.write('Hello World')
//在网页中显示Hello World
```

### 输入语句

```js
prompt(str1,str2)
//str1:显示在消息对话框中的文本；str2:文本框中的内容
//可以用来获取用户输入的内容
//会将用户输入以字符串的形式返回
```

消息对话框--确认

```js
confirm(str);
//str:在消息对话框中显示的文本
//返回值：Bollean
```



## 引用

外部JS文件用<script>标签引入

```html
<script src="./script/script.js"></script>
```

## 定义

```js
let x	//无块作用域
var x	//有块作用域
const x //声明常量
```

JS 中的标识符只能含有字母、数字、下划线、$，不能以数字开头，不能是JS中的关键字或保留字

## 数据类型(七种原始值)

### 数值(Number)

```js
123			//普通数字
0.1			//浮点数
NaN			//特殊数字，含义为非法数值
Infinity	//无穷
```

JS中的数值不是无限大，当数值超过一定范围会显示近似值，不精确；再大会显示Infinity；

#### 其他进制数字

0b	二进制
0o	八进制
0x	十六进制

```js
let a
a=0b1010	//10
a=0o10		//8
a=0xff		//255
```

#### 布尔值（Boolean）

```js
//布尔值只有true和false
//布尔值主要用来进行逻辑判断
```

### 大整数(BigInt)

```js
99999999999999999999999999999999999999n
```

- 大整数使用n结尾
- 大整数只能和大整数运算

### 字符串(String)

##### 在JS中用单引号或者双引号表示字符串

```js
let a = 'Hello'
let a = 'He"llo'
//单引号里可嵌套双引号
let a = "He\"llo"
/*可以用转义字符\"表示”
\"-->"
\'-->'
\\-->\
以上是几个例子
*/
```

##### 模板字符串（长字符串）

```js
//用反单引号`表示模板字符串
//能够跨行使用，可以嵌入变量
let name="孙悟空"
let str=`你好，${name}`
//类比C语言("b=%d",b)
let b=10
console.log(`b=${b}`)
```

### 空值（Null）

```js
//空值用来表示空对象
//空值只有一个null
//使用typeof检查空值会返回object
```

### 未定义（Undefined）

```js
//声明一个变量未赋值时，它的值结束Undefined
//typeof检查Undefined会返回“undefined”
```

### 符号（Symbol）

```js
//用来创建一个唯一的标识
```

#### 运算符typeof

可以检查变量的值的类型

```js
let a=10
let b=10n
typeof a	//number
typeof b	//bigint
```

### 检查一个值是不是NaN：isNaN（）

## 数据类型转换

### 转换--字符串

```js
//调用toString()方法将其他类型转换为字符串
//由于null与undefined中没有toString，所以这两个调用toString()会报错
let a=10
a=a.toString()
//调用String()函数将其他类型转换为字符串
//对于null，转换为“null”，对于undefined，转换为“undefined”
let b=33
b=String(b)
```

### 转换--数值

```js
//用Number()函数
leta="123"
a=Number(a)
//undefined和含非法数字的字符串转化为NaN
//null与空字符串或者纯空格的字符串转换为0
a=parseInt(a)
//将一个字符串转换为一个整数，也可以对一个浮点数字进行取整
a=parseFloat(a)
//将一个字符串转换为浮点数
```

### 转换--布尔值

```js
let a=1
a=Boolean(a)
//0、NaN、空串、null、undefined、false会转换为false
//其余是true
```

## 运算符

### 算术运算

```js
**	//幂运算
```

### 赋值运算

```js
a ??= 10
//空赋值，只有当变量为null或者undefined时才会赋值
```

### 逻辑运算

```js
!
//逻辑非
&&
//逻辑与，与运算是短路运算，如果第一个值为false，则不看第二个值
||
//逻辑或，或运算是短路运算，如果第一个值是ture，则不看第二个值
```

### 关系运算

- 当对非数值进行关系运算时，会优先将其转化为数值进行比较

- 当关系运算符的两端是两个字符串，它会逐位比较字符串的Unicode编码

- 利用这一特性可以将字符串按照字母排序

- 两个字符串形式的数字进行比较一定要先进行类型转换

### 相等运算

```js
==
//相等运算符，用来比较两个值是否相等，两个值类型不同时会先进行类型转换
//null和undefined进行相等对比返回true
//NaN不与任何数相等，包括他自己
===
//全等运算符，不会进行类型转换
//null和undefined进行对比返回false
```



```js
！=
//不等
！==
//不全等
```



### 隐式转换

#### 转化为字符串

运算中会有自动的类型转化

```js
let a=1
a=10-'5'	//字符串‘5’转化为数字5，a的值为5
```

当任意一个值和字符串做加法时，其他值会先转换为字符串，再进行拼串操作

```js
a=1+'2'	//结果为字符串12
```

#### 转换为数值

```js
+/-
//对非数值类型进行正负运算时，会先将其转化为数值然后再运算
```

#### 转化为布尔值

```js
!
//逻辑非可以对布尔值进行取反，如果对非布尔值进行取反，他会先将其转换为布尔值然后再进行取反
//可以利用这一特性将其他类型转化为布尔值
&&
//对于非布尔值进行与运算，会转化为布尔值然后运算，但是最后会返回原值
```

## 代码块

```js
{}
//用{}来表示一个代码块，一个代码块为一个整体
//使用let声明的变量具有块作用域，在代码块中声明的变量无法在代码块的外部访问
//使用var声明的变量没有块作用域
```

## 对象（object）

类比C语言结构体

```js
let obj=Object()
//正常的定义
obj.name="孙悟空"
obj.age=18
obj.gender='男'
//用中括号可以定义稀奇古怪的名字
obj[111@#@#]="123"
//可以用symbol作为属性名
let mySymbol=symbol()
obj[mySymbol]="111"
console.log(obj[mySymbol])
```

```JS
let obj=Object(){
	name="孙悟空",
	age=18,
	gender='男'
}
```

### 枚举属性

将对象中的属性全部获取

```js
//for-in语句
for(let propName in 对象){
	console.log(propName,obj[propName])
}
//对象有几个属性，for-in就会执行多少次
//每次执行都会将一个属性名赋值给定义的变量
//符号创建的属性是不可枚举的
```

### 可变类型

```
//对象属于可变类型
//两个对象进行相等全等比较时，比较的是对象的内存地址
//如果有两个变量同时指向一个对象，通过一个变量修改对象会影响另一个变量
```

### 方法

当一个对象的属性指向一个函数，那么我们就称这个函数是该对象的方法，调用函数就称为调用对象的方法

### window对象

浏览器中有一个可以直接访问的window对象

window对象代表的是浏览器窗口，通过该对象可以对浏览器窗口进行各种操作

window对象还负责储存JS中的内置对象和浏览器的宿主对象

window对象的属性可以通过window对象访问，也可以直接访问

## 函数(function)

```js
function 函数名(){}
const fn2 = function(){}
const fn3 = ()=>{}
```

- 定义参数时，可以为参数指定默认值


```
const fn3 = (a=10,b=20,c=30) =>{}
```

- 函数每次调用都会重新创建默认值

- 函数可以作为参数传递

- 任何值都可以作为返回值返回，包括对象和函数
- 如果不写return，返回值为undefined

## 作用域及作用域链

### 作用域

类比C语言相关知识

### 作用域链

当我们使用一个变量时，JS解释器会优先在当前作用域寻找变量，如果找到了直接使用，如果未找到则返回上一层寻找。如果全局作用域都没找到，则**报错**



## 提升

### 变量的提升

#### var

使用var声明的变量会在所有代码执行前被声明（理解为预处理）

```js
console.log(a)
a=10
//报错
-----------
console.log(a)
var a=10
//undefined
```

#### let

let声明变量实际也会提升，但是在赋值之前解释器禁止对该变量的访问

### 函数

使用函数声明创建的函数，会在其他代码执行前被创建

所以可以在函数声明前调用函数

```js
fn()
function fn(){
alert("123")
}
//执行
----------------
fn2()
var fn2=function(){}
//报错
```

## debug

```js
debugger
//在代码中打了一个端点
```

## 立即执行函数(IIFE)

```js
(function({
	let a=10
	console.log(111)
}))
```

立即执行函数是一个匿名函数，并且只会调用一次

## this

函数在执行时，JS会传递一个隐含的参数，叫做this

this会指向一个对象，this所指向的对象会根据函数调用方式的不同而不同

- 以函数形式调用，this指向window

- 以方法形式调用，this指向调用方法的对象

```js
const obj()={
	name="孙悟空"
	sayHello:function(){
		console.log(this.name)
	}
}
```

### 箭头函数的this

```js
无参箭头函数：() => 返回值
一个参数的：a => 返回值
多个参数的：(a,b) =>返回值
只有一个语句的函数： ()=>返回值
只返回一个对象的函数：()=>({...})
有多行语句的函数：()=>{
	...
	return 返回值
}
```

箭头函数没有自己的this，他的this由外层决定

## 严格模式

JS当中有两种运行模式：正常模式和严格模式

### 正常模式

默认情况下代码都运行在正常模式中，语法检查并不严格，能不报错的地方尽量不报错

### 严格模式

1. 禁止一些语法
2. 更容易报错
3. 提升性能

#### 开启

```js
"use strict"
```

## 类(Class)

使用Object创建对象无法区分不同类型的对象，不方便批量创建对象。

在JS中可以通过类（Class）来解决这个问题

- 类是对象模板
- 可以将对象中的属性和方法直接定义在类中，定义后就可以直接通过类创建对象
- 通过同一个类创建的对象，我们称为同类对象

```js
//类名使用大驼峰命名法
class Person{}
```

### 通过类创建对象

new 类（）

```js
const p1 = new Person()
//调用构造函数创建对象
```

- 可以使用instanceof来检查一个对象是否是由某个类创建

```js
console.log(p1 instanceof Person)
//true
```

### 实例属性与静态属性

```js
class Person{
	name = "Amadeus"
    age = 18
    //Person的实例属性只能通过实例访问	p1.name
    static test = "test静态属性"
    //使用static声明的属性叫做静态属性（类属性）
    //静态属性只能通过类去访问	Person.test
}
```

## 方法

```js
class Person{
	name="Amadeus"
	sayHello(){
        consle.log('大家好，我是+this.name')
    }
    //实例方法，实例方法中this就是当前实例
    static test(){
		console.log("我是静态方法")
    }
    //静态方法通过类来调用，静态方法中this指向的是当前类
}
```

## 构造函数

```js
class Person{
	constructor(name,age,gender){
		this.name = name
        this.age = age
        this.gender=gender
    }
    //在类中利用添加一个特殊的方法constructor
    //该方法被称为构造函数（构造方法）
    //构造函数会在我们调用类创建对象时执行
    //在构造函数中，this表示当前创建的对象
}
```

## 封装、继承和多态

### 封装

对象就是一个用来存储不同属性的容器

对象不仅负责存储属性，还要负责数据的安全

直接添加到对象中的属性并不安全，他们可以被任意的修改

##### 确保数据的安全：

- 私有化数据：将需要保护的数据设置为私有，私有属性只能在类内部访问
- 提供setter和getter方法来开放对数据的操作
  - 可以控制属性读写权限

```js
class Person {
	#address = "花果山"
    //实例用#开头就变成了私有属性
    getName(){
		return this.#name
    }
    //getter方法，用来读取属性
    setName(name){
        this.#name = name
    }
    //setter方法，用来设置属性
    get gender(){
        return this.#gender
    }
    set gender(gender){
		 this.#gender = gender
    }
}
```

## 多态

在JS中不会检查参数类型，所以任何属性都可以作为参数传递

要调用某个函数，无需指定的类型，只要对象满足某些条件即可

多态提供灵活性

## 继承（extends）

可以通过extends来完成继承

当一个类继承另一个类时，就相当于将另一个类中的代码复制到了当前类中

被继承的类叫做父类，继承的叫子类

```js
class Animal{
	constructor(name){
		this.name = name
	}
    sayHello(){
		console.log("111")
    }
}
class Dog extends Animal{
    //创建同名方法重写父类的方法
    sayHello(){
		console.log("222")
    }
}
class Cat extends Animal{
	//重写构造函数
    construcor(name,age){
		//重写构造函数时，构造函数的第一行代码必须为super()
        super(name)//调用父类的构造函数
        this.age=age 
    }
    sayHello(){
        super.sayHello()
        //在方法中可以使用super来引用父类的方法	
		console.log("333")
    }
}
```

## 对象的存储结构

对象存储属性的区域有两个

- 对象自身
  - 直接通过对象添加的属性

- 原型对象(protorype)
  - 对象中还有一些内容，会存储到原型对象里
  - 在对象中会有一个属性用来储存原型对象的地址，叫做\__proto__
  - 原型对象也负责未对象存储属性，当我们访问对象的属性时，优先访问对象自身的属性，对象自身不包含该属性时，才会去原型对象中寻找

- 会添加到原型对象中的情况：
  - 在类中通过xxx(){}方式添加的方法，位于原型中
  - 主动向原型中添加的属性或方法

### 原型对象

#### 访问

- 访问一个对象的原型对象：
  - 对象.\__proto__
  - Object.getPrototypeOf(p)

```js
console.log(p.__proto__)
console.log(Object.getPrototypeOf(p))
```

### 原型对象中的数据

1. 对象中的数据（属性、方法）
2. constructor（对象的构造函数）

注意：

- 原型对象也有原型对象，这样就构成了一条原型链。根据对象复杂程度的不同，原型链的长度也不同

- 不要通过类的实例去修改原型

## instanceof和hasOwn

- instanceof用来检查一个对象是否是一个类的实例
  - instanceof检查的是对象的原型链上是否有该类实例
  - 只要原型链上有该类实例，就会返回true

- in
  - 使用in运算符检查属性时，无论属性在对象自身还是在原型中，都会返回true

- hasOwnProperty
  - 对象.hasOwnProperty(属性名)
  - 用来检查一个对象自身是否含有某个属性

- hasOwn
  - Object.hasOwn(对象,属性名)
  - 用来检查一个对象自身是否含有某个属性

## 数组

通过Array()来创建数组

### length

- 获取数组长度

### for-of

for-of语句可以用来遍历可迭代对象

```js
for(变量 of 可迭代的对象){
	语句...
}
eg:
for(let value of arr){
}
```

for-of的循环会执行多次，数组中有几个元素就会执行几次

###  数组方法

#### isArray()

判断是否是数组

#### at()

可以根据索引获取数组中的指定元素

at可以接收负索引作为参数

#### concat()

可以链接多个数组

```js
let result = arr.concat(arr2)
```

#### indexOf

获取元素在数组中第一次出现的索引

```js
let result = arr.indexOf("要查询的元素",起始位置)
```

#### lastIndexOf()

获取元素在数组中最后一次出现的位置

- 返回值：
  - 找到了返回元素索引
  - 没有找到返回-1

#### join()

将一个数组中的元素连接为一个字符串

参数：

​	可以指定一个字符串作为连接符

``` 
result = arr.join("连接符")
```

#### slice()

用来截取数组

```js
let result = arr.slice(截取的起始位置（包括）,截取的结束位置（不包括）)
//第二个参数不写则截取到最后
//索引可以是负值
//如果两个参数都不屑，对数组进行浅拷贝
```

#### ...（展开运算符）

- 可以将一个数组中的元素展开到另一个数组中或者作为函数的参数传递

- 可以对数组进行浅拷贝

-------------------------以上为非破坏性方法-------------------------

#### push()

- 向数组的末尾添加一个或多个元素，并返回新数组的长度

```js
result = arr.push("111","222")
```

#### pop()

- 删除并返回数组的最后一个元素

```ks
result = arr.pop()
```

#### unshift()

- 向数组的开头添加一个或多个数组，并返回新的长度

```
arr.unshift()
```

#### shift()

- 删除并返回数组的第一个元素

#### splice()

- 可以删除、插入、替换数组中的元素
- 返回值：返回被删除的元素

```js
arr.splice(删除的起始位置，删除的数量，"删除后替换的元素，可以是多个")
```

#### reverse()

- 反转数组

```js
arr.reverse()
```



### 深拷贝和浅拷贝

复制对象必须要产生新的对象

#### 浅拷贝

- 只对对象的浅层进行复制（只复制一层）

- 如果对象中存储的数据是原始值，那么拷贝的深浅不重要
- 浅拷贝只会对对象本身进行复制，不会复制对象中的属性

#### 深拷贝

- 不仅复制对象本身，也复制对象中的属性
- 因为性能问题，通常不太使用深拷贝

```js
const arr3 = strycturedClone(arr)
//专门进行深拷贝的方法
```

### 对象的复制	

```js
Object.assign(目标对象，被复制的对象)
//将被复制到对象中的属性复制到目标对象里，并将对象返回
```

