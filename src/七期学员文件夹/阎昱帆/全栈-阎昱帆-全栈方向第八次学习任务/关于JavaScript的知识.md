# 关于JavaScript的知识

## 输入和输出

```javascript
//输入
prompt('xxx');
//输出
alert('xxx');//页面提示框
console.log('xxx');//控制台
document.write('xxx');//页面中
```

## 空赋值

使用“**？？=**”对Null和undifined进行赋值。

```javascript
null ??= 1;
//将null赋值为1
```

## 类型转换

1.转换为字符串：

显式：String( )             隐式:XXX+"  "

2.转换为数值：

显式：Number（）     隐式：+

3.转化为布尔值：

显式：Boolean(  )            隐式：XXX = ！！XXX

## 特殊的关系运算

当对非数值进行关系数值运算时，它会先将前转换为数值然后再比较

当关系运算符的两端是两个字符串，它不会将字符串转换为数值，而是**逐位**比较字符的unicode编码，**利用这个特点可以对字符串按照字母排序** 

```javascript
result="a"<"b"  //返回true
result="abc"<"b"  //返回true,比较方式为逐位比较
```

## 相等&全等

1.相等运算符（==）：

类型不同时，转换为相同类型之后再比较。

**NaN不和任何值相等，包括它自身**

**null和undifined进行相等比较时会返回true**

不相等（！=）

2.全等运算符（===）：

不会进行类型转换，如果两边类型不同，直接返回false

**null和undifined进行相等比较时会返回false**

不全等（！==）

## 三目运算符

格式：

条件表达式？表达式1：表达式2

**在执行时先对条件表达式进行求值判断，true执行1，false执行2**

```javascript
a>b? alert('a大')：aler('b大')
```

## 对象

数据类型：

> 1.数值：Number
>
> 2.大整数：BigInt
>
> 3.字符串：String
>
> 4.布尔值：Boolean
>
> 5.空值：Null
>
> 6.未定义：Undefined
>
> 7.符号：Symbol
>
> **8.对象**：object( )

对象是JS中的一种复合数据结构类型，原始值只能用来表示一些简单的数据，无法表示复杂的数据。

对象属性的添加：

```
创建对象方法1:
let man = Object( );
man.name = "ann";
man.age = 19;
man.gender = "女"
创建对象方法2：
let man = {
name="ann"，
age=19,
gender="女",
["symbol"]="特殊的属性"}；
```

**如果读取的是一个对象中没有的属性，不会报错，而是显示undefined.**

通常属性名是一个字符串，可以是任何值，无特殊要求

但是如果属性名过于特殊，例如以数字开头或者使用symbol作为属性名，则需要使用[  ]来设置

> man["1234"] = xxx;
>
> man["symblo"] = xxx;
>
> //另一种写法：
>
> 写法1：
>
> let str="address"；
>
> man[str] = "花果山"；
>
> 写法2：
>
> man["adress"] = "花果山"；

**in运算符：用于检查对象中是否含有这一属性，有则返回true,无则返回false.**

```javascript
console.log("name"in obj);
```

获取对象中的所有属性（属性的枚举）：

使用“for-in”语句：

```javascript
for(let proName in man){
	console.log(proName，man[proName]);
}
//每次获取对象的属性名和属性值
```

**符号添加的属性是不允许枚举的**

当我们对两个对象进行相等或者全等比较时，比较的是两个对象的地址。

在使用变量存储对象时，很容易因为改变变量指向的对象，提高代码的复杂度，所以通常情况下，声明存储对象的变量时会使用**const**.(声明常量时使用)，const禁止变量被重新赋值，不影响对于对象的修改

## 函数

“函数也是一个对象，具有其他对象所有的功能，可以存储代码并在需要的时候调用这些代码。”

语法：

```javascript
创建函数对象:
function fn(){
	存储的代码
}
调用函数：
fn()
```

### 声明函数的几种方法：

```javascript
function fn1(){
	//yuju
}
const/let fn2 = function(){
	//yuju
}
const/let fn3 = () => {
	//yuju
}
const fn4 = () => yuju
```

当形参多于实参时，显示undefined

实参多于形参时，函数只按顺序取 用

**箭头函数的返回值可以直接写在箭头后面**

```js
let sum = (a,b) => a+b
//a+b为该函数的返回值
const fn = () =>({name:"孙悟空"})
//箭头后设置对象字面量为返回值时，对象字面量必须使用（）括起来
```

### **window对象**

> 函数可以认为是window对象的方法

在浏览器中，浏览器为我们提供了一个window对象，可以直接访问

window对象代表的是浏览器窗口，通过该对象可以对浏览器窗口进行各种操作，除此之外window对象还负责存储JS中的内置对象和浏览器的宿主对象

window对象的属性可以通过window对象访问，也可以直接访问

```javascript
window.a = 10;
//等价于
var a = 10;
//相当于创建了一个全局变量
//var没有块作用域，但是仍拥有函数作用域 
```

### **提升**

以下两种情况可以“提升”

1.可以在函数声明之前调用函数，前提是该函数是以function开头创建的函数

2.使用var声明的变量，会在所有代码执行前被声明，但变量不会被赋值 。

**变量和函数的提升同样适用于函数作用域**

```javascript
function fn(){
	console.log(a);
	var a=2;
	console.log(a);
}
//结果为undefined和2
//说明a的声明在函数作用域中提升，但是并没有赋值
```

### **立即执行函数**

```javascript
(Function(){
	let a = 10;
	console.log(a);
}())
```

外层加括号使得该函数不被提升

函数结尾加括号使得该匿名函数立即执行

### **this**

函数在执行时，JS解析器每次会传递一个隐含的参数this

this会指向一个对象，指向的对象会根据函数调用方式的不同而不同

**以函数形式调用时，this指向的是window**

**以方法的形式调用时，this指向的是调用方法的对象**

```javascript
function fn(){
    console.log("Fn打印"，this);
}
const obj1={name:"aaa",test=fn};
const obj2={name:"bbb",test=fn};
obj1.test()//得到{name:"aaa",test=fn};
obj2.test()//得到{name:"bbb",test=fn};
```

特殊的，箭头函数没有自己的this,它的this由外层作用域决定，**箭头函数的this与调用它的方式无关.**

除了调用函数（）的形式，我们还可以通过其他的方式调用函数，比如**函数的call()和apply()方法来调用函数**，==call和apply的第一个参数，将会成为该函数的this==

![image-20230112160407250](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230112160407250.png)

### 可变参数

在定义函数时可以将函数指定为可变参数

可变参数可以接受任意数量的实参，并将它们统一存储到一个数组返回

可变参数的作用与arguments基本一致，但也有一些不同点:

1.可变参数的名字可以自己指定

2.可变参数就是一个数组，可以直接使用数组的方法

3.可变参数可以配合普通参数一起使用，==但是必须将可变参数写在最后==

```javascript
function fn（a,b,...args){
	console.log(args)
}
//括号中a,b表示形参（可有可无），...args表示可变参数，可变参数的数组名就是args可以自己指定
```

**arguments**

arguments是函数中的又一个隐含参数，是一个伪数组（可以通过索引来读取元素，==但是不能使用数组的方法==），用来存储函数的实参，无论用户是否定义形参，实参都会存储到arguments对象中.

应用实例：

```javascript
function sum(){
let result = 0
for(let num of arguments){
result += num
}
return result
}
```

### 高阶函数

当一个函数的参数或者函数为一个函数，则该函数称为高阶函数。

**bind( )**是函数的方法，创建一个新的函数

通过bind返回的函数，this由bind第一个桉树决定（无法修改）

还可以为新函数绑定参数：如图将形参a绑定为10

![image-20230112161351268](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230112161351268.png)

==箭头函数没有自身的this，它的this由外层作用域决定,也无法通过call,apply,bind改变。箭头函数也没有arguments==

### 闭包

**定义：**

闭包就是能访问到外部函数作用域中的变量的函数

**使用场景：**

隐藏一些不希望别人访问的内容

**构成：**

1.函数的嵌套

2.内部函数要引用外部函数中的变量

3.内部函数要作为外层函数的返回值

**实例：**

![image-20230111161036278](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230111161036278.png)

**生命周期**

1.闭包在外部函数调用时产生，外部函数每次调用都会产生一个全新的闭包。

2.在内部函数丢失时销毁（内部函数被垃圾回收了，闭包才会消失）

==闭包无法使用原型，因此相较于类，闭包比较浪费空间==

### 严格模式

1.禁止一些语法；

2.更容易报错；

3.提升了性能；

全局开启："use strict"写在开头

局部开启：写在函数开头

```javascript
function fn(){
	"use strict";
	//只在该函数作用域下开启
}
```

## 类

"创建对象的模板，有利于批量产生对象"

### 格式

```javascript
class 类名 { }//类名要使用大驼峰命名法
const 类名 = class{ }
```

通过类来创建对象

```javascript
class Person{
    name:xxx;//实例属性，通过实例对象来访问
    age:xxx;
    static test="静态属性";
    //static开头为静态属性也叫类属性，通过类来访问
}
class Dog{
    name:xxx;
    age:xxx;
    static test="类属性";
    static test2(){
        console.log('hhh');
        //static开头调用的是静态方法（类方法）
    }
}
const p1 = new Person()
const p2 = new Person()
const d1 = new Dog()
const d2 = new Dog()
```

通过同一个类创建的对象称为同类对象，可以通过**instanceof**来检查。

```javascript
console.log(p1 instanceof Person)//true
console.log(d1 instanceof Person)//flase
```

**类的代码块默认为严格模式！！！**

**实例方法中，this就是当前实例。类方法中，this指的是当前的类**

在类中可以创建一个特殊的方法constructor

该方法称为构造函数（构造方法）

构造函数会在我们调用类创建对象时执行

```javascript
class Person(){
    /*name
    age
    gender*/
	constructor(name,age,gender){
		this.name=name;
        this.age=age;
        this.gender=gender;
	}
}
const p1 = new Person('aaa',18,'男');
const p2 = new Person('bbb',15,'女');
const p3 = new Person('ccc',17,'男');
```

### **封装**

私有化数据：在属性前面加“#”,该属性变为私有属性，实例无法直接访问，但可以在类的内部使用。

私有属性必须先在类中声明

私有数据可以通过getter方法和setter方法进行读取和设置，使得该数据可以进行权限的配置

```javascript
Class person(){
	#name//提前声明，私有化
    constructor(name,age,gender){
        this.#name=name;//在类内部使用
        this.age=age;
        this.gender=gender;
    }
   getName(){
		return this.name;
       //getter方法，用来读取属性
   }
   setName(name){
	 this.name='修改'
       //setter方法，用来修改属性
   }   
}
const p1=new person('aaa',18,'男')
p1.getName();//调用方法，读取数据
```

在权限中可以设置条件

```javascript
setAge(age){
    if(age>=0)//修改数据之前先进行条件判定
        {
            this.#age = age;
        }
}
```

另一种写法

```javascript
//在某一类中
get gender(){
	return this.#gender
}

//在实例对象中
console.log(p1.gender)
//相当于直接调用了getter方法
```

**多态**

在JS中不会检查参数的类型，所以任何数据都可以作为参数传递

### **继承**

使用extends将某个类的代码全部复制到当前类

```javascript
//父类
class animal(){
	constructor(name){
        this.name=name
    }
    sayHello(){
		console.log('动物在叫')
    }    
}
//子类
class dog extends animal{
	sayHello(){
		console.log('汪汪汪')
    }  //在子类中，可以通过创建同名方法来重写父类的方法  
}
class cat extends animal{
    sayHello(){
		console.log('喵喵喵')
    }   //在子类中，可以通过创建同名方法来重写父类的方法 
}
class sheep extends animal{
    //重写构造函数
	constructor(){
	super()//第一行必须为super()否则无法继承父类
    }//注意传参，super（）中的参数传递给父类，constructor（）中的参数传递给子类
    sayHello(){
        //调用父类的sayHello
        super.sayHello()
    }
}
```

### **原型对象**

![image-20221230095512163](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20221230095512163.png)

所有的同类对象，它们的原型对象都是一样的，即原型链是一样的

原型对象的作用：

相当于一个公共的区域，可以被所有该类实例访问。

可以将一个该类实例中，所有的公共属性（方法）统一存储到原型对象中。

**instanceof**

![image-20221230102414810](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20221230102414810.png)

**hasOwn**

![image-20221230103033833](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20221230103033833.png)

## 数组

数组是一种复合数据类型，在数组中可以存储多个不同类型的数据

创建数组：

```javascript
//方法一：
const arr = new Array;
//方法二：
const arr2 = [] ;
```

向数组中添加元素：
数组 【索引】=元素

const arr = [元素1，元素2，元素3......]

数组中可以存储任意类型的元素，但一般存储同一类型的数据

**length**:

**数组名.length**获取数组的长度，实际值为数组的**最大索引+1**

<u>尽量使用连续性的数组</u>

### **for-of语句**

用来遍历可迭代的对象

语法：

for(变量 of 可迭代的对象)

执行流程：

1.for-of 的循环体执行多次，数组中有几个元素就会执行几次

2.每次执行时都会将一个元素赋值给变量

```javascript
const arr = ['a','b','c','d']
for(let value of arr)
    {
        consolr.log(value)
    }
```

### 数组中的非破坏性方法：

 **Array.isArray( )**

用来检查一个对象是否为数组

```javascript
console.log(Array.isArray([1,2,3]));//true
```

**at( )**

1.可以根据索引获取数组中的指定元素

2.at可以接受负索引作为参数，负值表示倒数

```javascript
console.log(arr.at(-2));
//相当于
console.log(arr[arr.length-2]);
```

**concat( )**

1.用来连续两个或者多个数组

2.非破坏性方法，不会影响原数组，而是返回一个新的数组

```javascript
console.log(arr1.concat(arr2));
```

****

**indexOf**

获取元素在数组中第一次出现的索引

```javascript
console.log(arr.indexOf('a'));
```

括号内可以写两个参数

1.查询的元素

2.查询的起始位置

```javascript
console.log(arr.indexOf('a',3));
//从arr[3]开始查询'a'的位置
```

**lastIndexOf**

获取元素在数组中最后一次出现的位置

```javascript
console.log(arr.lastIndexOf('a'));
```

如果返回值为-1，说明该元素无法在指定数组中找到

**join( )**

将数组中的所有元素连接成为一个字符串，每一个元素都由逗号链接（默认）

传入的参数表示每个元素之间的连接符号，可以传入空

```
console.log(arr.join(''));
//直接拼接
console.log(arr.join('?'));
//使用？拼接
console.log(arr.join());
//使用，拼接
```

**slice( )**

用来截取数组（非破坏性方法）

参数：

1.截取的起始位置（新数组包括该位置）

2.截取的结束位置（新数组不包括该位置）

第二个参数可以省略，如果省略，则一直截取到数组结束

参数可以为负值，负值表示倒数

如果两个参数都省略，将对数组进行浅拷贝（浅复制）

```javascript
consolr.log(arr.slice(0,4));
```

### **浅拷贝和深拷贝**

浅拷贝：

1.通常对对象的拷贝都是浅拷贝

2.浅拷贝只对对象的浅层进行赋值

深拷贝：

1.深拷贝不仅复制对象本身，还会复制对象中的属性和元素

2。深拷贝导致性能变差，一般不使用

**...(展开运算符)**

可以将一个数组中的元素展开到另一个数组中或者作为函数的参数传递

通过展开运算符也可以对数组进行浅拷贝

```javascript
const arr2=[arr[0],arr[1],arr[2]];
//相当于
const arr2=[...arr];
```

### **对象的复制**

Object.assign（目标对象，被复制的对象）

将被复制对象中的属性复制到目标对象里，并将目标对象返回

被复制对象中的属性会覆盖掉复制对象里的原有属性

```javascript
const obj = (name:'aaa',age:18);
const obj2 = Object.assign({},obj);
//完成了一次浅拷贝
console.log(Object.assign(obj2,obj))
//完成了一次浅拷贝
const obj3={...obj}
//完成了一次浅拷贝
const obj{name='b',...obj,age:28};
//括号中越往后覆盖力越强，得到的结果为name='a',age=28.
```

### **数组中的破坏性的方法**

**push**

向数组的末尾添加一个或多个元素，返回值为新数组的长度

**pop**

删除并返回数组的最后一个元素

**unshift**

向数组的开头添加一个或者多个元素，并返回新的长度

**shift**

删除并返回数组的第一个元素

**splice**

可以删除、添加、插入、替换数组中的元素

参数：

1.删除的起始位置。

2.删除的元素个数。

3.在删除起始的位置插入的元素

返回值：被删除的元素

格式：

arr.splice(索引，个数，元素......)

**reverse**

反转数组，将数组中的元素变为倒序

### 数组高阶方法

==sort( )==**破坏性方法**，对数组进行排序，可以排数字以及字母。

注意：sort默认按照Unicode编码进行排序，可以对字母排序，但是对数字排序可能会出错。

参数：可以传递一个回调函数作为参数，通过回调函数来指定排序规则。

```javascript
arr.sort((a,b)=>a-b)//升序排列
arr.sort((a,b)=>b-a)//降序排列
//此时便可以用来对数字进行排序
console.log(arr)
```

==forEach( )==用来遍历数组，可以传递一个回调函数作为参数，通过回调函数来指定排序规则。

数组中有几个元素，回调函数就会调用几次

每次调用都会将数组中的数据作为参数

**回调函数中有三个参数：element,index,array分别表示当前的元素，当前元素的索引，被遍历的数组。**

```javascript
arr.forEach((element,index)=>console.log(element,index))
```

==filter( )==**非破坏性方法**，将数组中符合条件的元素保存到一个新数组中返回

括号中放条件语句，

```javascript
let result = arr.filter(element=>element%2===0)
conslole.log(result)
```

==map( )==**非破坏性方法**，根据当前数组生成一个新数组，需要一个回调函数，该函数的返回值会成为新数组中的元素

```javascript
let result =arr,map(element=>element*2)
console.log(result)
//得到一个元素全部变为2倍的数组
```

==reduce( )==  可以用来将一个数组中的所有元素整合为一个值

```javascript
let result = arr.reduce((a,b)=>a+b)//arr中所有元素相加
let result = arr.reduce((a,b)=>a*b)//arr中所有元素相乘
let result = arr.reduce((a,b)=>a+b，10)//逗号后可以设置初始值，将其添加到运算中
```

### 数组的解构



**通过解构赋值来快速交换两个变量的值**

![image-20230112163147496](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230112163147496.png)

自定义解构类型，如下图将二维数组解构为两种形式

![image-20230112163716624](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230112163716624.png)





## API和Web API

**框架**

![image-20230104091844929](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230104091844929.png)

**API：**应用程序编程接口

是一些预定义的函数，目的是提供应用程序与开发人员基于某软件或者硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节。

**Web API**：是浏览器提供的一套操作浏览器功能和页面元素的API（BOM和DOM）

## DOM

**定义：**组织推荐的处理可扩展标记语言的标准编程接口

### **DOM树：**

![image-20230104093408408](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230104093408408.png)

**文档**：一个页面就是一个文档，DOM中使用document表示

**元素**：页面中的所有标签都是元素，DOM中使用element来表示

**节点**：网页中的所有内容都是节点（标签，属性，文本，注释等），DOM中使用==node==表示。

### 获取元素

**1.根据ID获取**：
使用getElementById( )，返回的是DOM的element==对象==

id是==大小写敏感==的字符串元素

getElemetById使用==驼峰命名法==

```javascript
var a = document.getElementById('id名')
```

<u>*console.dir打印我们返回的元素对象，更好地查看里面的属性和方法</u>

**2.根据标签名获取**：

使用getElementByTagName( )，返回的是获取过来==元素对象的集合==，以伪数组的形式存储的

**如果页面中只有一个元素**，**返回的还是一个伪数组**

```javascript
var b = getElementByTagName('li')
console.log(b.[0])//打印li标签中的第一个元素
```

**还可以通过某个元素（父元素）内部所有指定标签名的子元素，父元素必须是一个单个的确定的元素**

```javascript
var ol = document.getElementByTagNAme('ol')//获取ol,返回数组
console.log(ol[0]).getElementByTagName('li')
//ol[0]表示第一个ol，是确定的父元素，在其中获取所有的子元素li
//也可以给某元素添加id使用第一种方法来直接获取
```

**3.通过HTML5新增的方法获取**：

使用getElementByClassName('类名')，返回的也是数组，使用方法同上

使用document.querySelector('选择器')，根据指定选择器返回第一个元素对象，同获取id的使用方法

```javascript
var box = document.querySelector('.box')//选择一个class
var nav = document.querySelector('#nav')//选择一个id
var li = document.querySelector('li')//选择Li标签
```

使用querySelectorAll( )返回指定选择器的所有元素对象的集合（数组）

**4.获取body和html的方法**

```javascript
var bodyEle = document.body
var htmlEle = document.documentElement//特殊
```

### 事件

事件由三部分组成：事件源，事件类型，事件处理程序（事件三要素）

**事件源**：事件触发的对象

**事件类型**：如，鼠标点击、鼠标经过、键盘按下......

**事件处理程序**：自由发挥

```javascript
var div = document.querySelector('div');//获取事件源
div.onclick = function(){//绑定事件（注册事件）
console.log('我被选中了')}；//添加事件处理程序
```

**常见的鼠标事件**

![image-20230104112243874](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20230104112243874.png)

**补充：**

**获得焦点（光标）：onfocus**

**失去焦点（光标）：onblur**

### 操作元素

**1.修改元素属性**

**element.innerText**（非标准）:从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉（不识别HTML标签）

**element.innerHTML**（标准）:起始位置到终止位置的全部内容，包括html,同时保留空格和换行（识别HTML标签）

==缺少图片==p12

**其他属性，例如src,href,id,alt,title使用“element.属性”都可以修改**

**2.修改表单属性**

表单属性比较特殊，修改内容时使用value

![image-20230104111923626](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20230104111923626.png)

实例：密码的显示和隐藏

![image-20230104113332000](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20230104113332000.png)

**3.通过JS修改元素的大小、颜色、位置等样式**

**element.style**:==行内样式==操作

JS里的样式采取驼峰命名法，比如fontSize、backgroundColor

Js产生的行内样式权重比较高

**element.className**:类名样式操作

在CSS中写好一个类的样式，然后在JS中为元素添加类名

calssName修改类名之后会直接覆盖该元素原始的类名

如果想要保留原先的类名，使用以下格式

```javascript
this.className = 'origin change';
//保留了原先的origin类名，优先使用change类名
```

### 自定义属性

1.获取元素的属性

(1).element.属性==内置属性==

(2).element.getAttribute('属性')==自定义属性== 

//程序员自己添加的属性，称为自定义属性 index

2.设置属性：

(1).element.属性='值'==内置属性==

(2).element.setAttribute('属性','值')==自定义属性==

**通过element.setAttribute修改类名时使用class="XXX",而不是className**

**设置H5自定义属性标准：**

自定义属性data-为开头作为属性名并且赋值

```html
<div data-index = "1"> </div>
```

使用JS设置

```javascript
element.setAttribute('data-index','2')
```

H5新增自定义属性获取方法

```javascript
element.dataset.index
//或者
element.dataset['index']//ie11才开始支持
//如果属性里有多个-连接的单词，获取时采用驼峰命名法
element.getAttribute('data-list-name')
//相当于
element.dataset['listName']
```

### 节点操作

**节点拥有三个属性：**

nodeType(节点类型)：元素节点为1，属性节点为2，文本节点为3（包括文字、空格、换行等）

nodeName(节点名称)

nadeValue(节点值)

**根据父兄层级来获取元素节点**

**父级节点**：

element.parentNode得到的时离元素最近的父级节点，如果找不到就返回Null

**子节点**：

parentNode.childNodes（标准）返回包含指定节点的所有子节点的集合，包括文本节点，该集合为实时更新的集合==一般不使用==

parentNode.children(非标准) 获取所有的子节点中的元素节点

parentNode.firstElementChild 获取第一个子元素节点，找不到则返回null

parentNode.lastElementChild 获取最后一个子元素节点，找不到则返回null

==上面两种方法容易出现兼容性问题==

实际开发中

使用parentElement.children[0]表示第一个子元素节点

使用parentElement.children[parentElement.children.length-1]表示最后一个子元素节点

**兄弟节点**

![image-20230105110333914](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230105110333914.png)

![image-20230105110426174](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230105110426174.png)

**添加节点**

creatElement('节点') 创建一个元素节点

node.appendChild('child') 

该方法将一个节点添加到指定父节点的子节点列表末尾，类似于css里面的after伪元素，**node是父级，child是子级**

node.insertBefore(child,指定元素)

该方法将一个节点添加到父节点的指定子节点前面，类似于css里面的before伪元素

**删除节点**

node.removeChild(child)：该方法从DOM中删除一个子节点，返回删除的节点

**复制节点**

node.cloneNode( ): 该方法返回调用该节点（node）的一个副本，也称为克隆节点或者拷贝节点

==如果括号参数为空或者false，则是浅拷贝，只复制节点本身，不克隆里面的子节点，如果括号内为true，则为深拷贝==

## 事件高级

### 注册事件

**另一种方法（非标准）**

可以依次执行，不会被下一行的代码覆盖

![image-20230105150929190](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230105150929190.png)

==addEventListener里面的事件类型是字符串，要加引号，而且不带on==

==同一个元素，同一个事件，可以添加多个侦听器（事件处理程序）==

==ie11之后使用==

**attachEvent事件监听方式（标准）**

![image-20230105152035286](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230105152035286.png)

==ie9之前使用==

### 删除事件（解绑事件）

1.传统：div[0].onclick = null;

2.监听事件：

![image-20230105153059477](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230105153059477.png)

### DOM事件流

1.事件流描述的是从页面中接收事件的顺序

2.事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流

![image-20230105153309407](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230105153309407.png)

（捕获阶段）==先father后son==
![image-20230105153906021](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230105153906021.png)

（冒泡阶段）==先son后father后document==

![image-20230105154032974](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230105154032974.png)

**有些事件是没有冒泡的，比如onblur,onfocus,onmouseenter,onmoueseleave**

### 事件对象

![image-20230105154850457](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230105154850457.png)

### 事件对象的常用属性和方法

![image-20230105155546694](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230105155546694.png)

**return false也能阻止默认行为，没有兼容性问题，但是无法执行下面的代码，而且只限于传统的注册事件的方式**

**事件的委托（代理、委派）**

![image-20230105163706144](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230105163706144.png)

### 常用的鼠标事件对象

![image-20230105164121915](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230105164121915.png)

### 常用键盘事件

![image-20230105165026300](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230105165026300.png)

==三个事件的执行顺序：keydown=>keypress=>onkeyup==

**键盘事件对象中的keyCode属性可以得到相应键的ASCII码值**

==**keyup和keydoen事件不区分字母大小写，而keypress可以区分**==

## BOM

浏览器对象模型，提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是window。

**DOM和BOM的区别**

![image-20230109145208283](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230109145208283.png)

window是浏览器的顶级对象，具有双重角色，既是JS访问浏览器窗口的一个接口，又是一个全局对象。==定义在全局作用域中的变量和函数都会变成window对象的属性和方法。==

### 窗口加载事件

1.window.onlaod是窗口（页面）加载事件，当文档内容完全加载完成会触发该事件（包括图像、脚本文件、css文件等）

```javascript
window.onload = function(){}
//或者
window.addEventListener("load",function(){})
```

**window.onload这种传统的注册事件方式只能写一次，如果有多个，会以最后一个为准**

2.DOMContentLoaded事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等等

```javascript
document.addEventListener("DOMContentLoaded",function(){})
```

**如果页面图片较多，适合使用第二种方法优先加载**

### 调整窗口大小事件

```javascript
window.onresize = function(){}
window.addEventListener("resize",function(){})
```

window.onresize是调整窗口大小加载事件，当触发时就调用的函数

==window.innerWidth表示当前屏幕的宽度==

### 定时器

1.setTimeout( )定时器

```javascript
window.setTimeout(调用函数，延迟的毫秒数)
//例如
window.setTimeout(hanshu,3000)
//3s之后调用hanhsu(只写函数名/直接写函数/“函数名（）”)
```

该方法用于设置一个定时器，该定时器在定时到期之后执行调用函数

- **window可以省略**
- serTimeout（）也成为回调函数callback
- 指的是**上一件事干完，再回头调用这个函数**
- element.onclick = function( )以及element.daaEventListener("click",fn)中的函数也是回调函数

2.window.clearTimeout(timeout ID)停止定时器

- **停止setTimeout定时器**
- 取消了先前调用过的setTimeout定时器
- timeoutID是先前定时器的标识符

3.setlnterval定时器

调用格式与第一种相同

**区别：setTimeout只调用一次，setInterval保持间隔时间，持续调用**

4.window.clearInterval(intervalID)停止计时器

与第二种方法调用格式一致

==定时器中的this指向的是window==

## 执行机制

1.同步任务：

同步任务都在主线程上执行，形成一个执行线

2.异步任务：

- 普通事件：如click,resize等
- 资源加载，如load,error等
- 定时器，如setInterval,setTimeout等

3.执行机制：

- 先执行指向栈中的同步任务
- 将异步任务（回调函数）放入任务队列中
- 一旦执行栈中的所有同步任务执行完毕，系统会按次序读取任务队列中的异步任务
- 被读取的异步任务结束等待状态，进入执行栈，开始执行。

## location对象

**URL**

统一资源定位符（URL），是互联网上标准资源的地址，互联网上的每个文件都有一个唯一的URL，它包含的信息指出了文件的位置以及浏览器对它的处理方式。

### URL的组成

![image-20230109164858243](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230109164858243.png)

### location对象属性

![image-20230109164721557](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230109164721557.png)

==将location.herf重新设置即可实现跳转新的页面的效果==

### location对象的常用方法

![image-20230110102934854](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230110102934854.png)

## navigator对象&history对象

navigator对象包含有关浏览器的信息，它有很多属性，我们最常用的是userAgent,该属性可以返回由客户机发送服务器的user-agent头部的值

**history对象方法**

![image-20230110104246798](https://yanyufan.oss-cn-hangzhou.aliyuncs.com/E://pictures%20bedimage-20230110104246798.png)

## 正则表达式

1.在正则表达式中大部分字符都可以直接写

2.| 在正则表达式中表示或

3.[ ]表示字符集

​	[a-z]任意的小写字母

​	[A-Z]任意的大写字母

​	[a-zA-Z]任意的字母

​	[0-9]任意的数字

4.[^]表示除了

5 .  . 表示除了换行外的任意字符

6.在正则表达式中使用\作为转义字符

7.其他的字符集

\w表示任意的但此种字符		\W表示除了单词字符		\d表示任意数字

\D表示除了数字		\s表示空格		\S除了空格		\b单词边界

\B除了单词边界

8. ^表示字符串的开头,$表示字符串的结尾

**量词**

{m}正好m个

{m,}至少m个

{m,n}m-n个

+一个以上，相当于{，1}

*任意数量的a

?0-1个

**方法**

test（）

判断字符串是否符合正则表达式

exec( )

获取字符串中符合正则表达式的内容，括号中的参数为字符串

```javascript
let re = 正则表达式
str = 字符串
let result = re.exec(str)
```

search（）

可以搜索符合正则表达式的内容第一次在字符串中的位置

replace( )

根据正则表达式替换字符串中的指定内容

有两个参数，第一个为匹配的正则表达式，第二个为替换内容，要加引号

match( )

根据正则表达式去匹配字符串中符合要求的内容

matchAll( )

根据正则表达式来匹配字符串中符合要求的内容（必须设置g全局匹配）

它返回的是一个迭代器

**匹配模式**

i 表示忽略大小写

g 表示全局匹配
