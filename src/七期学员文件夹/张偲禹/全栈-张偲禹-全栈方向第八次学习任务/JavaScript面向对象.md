# JavaScript

### 1.对象

> 对象是单个事物的抽象。

当实物被抽象成对象，实物之间的关系就变成了对象之间的关系，从而就可以模拟现实情况，针对对象进行编程。

> 对象是一个容器，封装了属性（property）和方法（method）。

属性是对象的状态，方法是对象的行为（完成某种任务）。



- 在实际开发中，可以将对象简单理解为**数据集或功能集**。
- ECMAScript-262把对象定义为：**无序属性的集合，其属性可以包含基本值、对象或者函数**。



### 2.面向对象

> 面向对象是过程式代码的一种高度封装，目的在于提高代码的开发效率和可维护性。

面向对象编程（Object Oriented Programming，简称OOP）——是一种编程开发思想。

#### 2-1 面向对象编程的优点

- 灵活、代码可复用、高度模块化；
- 容易维护和开发；
- 比起由一系列函数或指令组成的传统的过程式编程（procedural programming），更适合多人合作的大型软件项目。

#### 2-2 面向对象与面向过程

- 面向过程就是亲力亲为，事无巨细，面面俱到，步步紧跟，有条不紊。
- 面向对象就是找一个对象，指挥得结果。
- 面向对象将执行者转变成指挥者。
- 面向对象不是面向过程的代替，而是面向过程的封装。

#### 2-3 面向对象的特性

- 封装性
- 继承性
- [多态性]抽象

![](https://uu--image.oss-cn-zhangjiakou.aliyuncs.com/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B%E4%B8%AD%E5%B8%B8%E8%A7%81%E6%A6%82%E5%BF%B5%E6%B7%B1%E5%85%A5%E8%A7%A3%E6%9E%90.jpg)

#### 2-4 程序中的基本体现

*抽象数据行为模板（Class）：*

```javascript
function Student(name,score){
	this.name = name;
    this.score = score;
    this.printScore = function(){
		console.log('姓名：' + this.name + ' ' + '成绩：' + this.score);
    }
}
```

*根据模板创建具体实例对象（Instance）：*

```javascript
var std1 = new Student('Michael',98)
var std2 = new Student('Bob',81)
```

*实例对象具有自己的具体行为（给对象发消息）：*

```javascript
std1.printScore()	// => 姓名：Michael 成绩：98
std2.printScore()	// => 姓名：Bob 成绩：81
```

#### 2-5 面向对象的设计思想

- 抽象出Class（构造函数）
- 根据Class（构造函数）创建Instance
- 指挥Instance得结果



### 3.创建对象

#### 3-1 简单方式

*直接通过`new Object()`创建：*

```javascript
var person = new Object()
person.name = 'Jack'
person.age = 18

person.sayName = function(){
	console.log(this.name)
}

//简写
var person = {
    name = 'Jack',
    age = 18,
    sayName:function(){
		console.log(this.name)
    }
}
```

#### 3-2 工厂函数

*工厂函数：解决代码重复问题*

```javascript
function createPerson(name,age){
	return{
		name: name,
		age: age,
		sayName:function(){
			console.log(this.name)
		}
	}
}

//生成实例对象
var p1 createPerson('Jack',18)
var p2 createPerson('Mike',18)
```

#### 3-3 构造函数

*更优雅的工厂函数——构造函数：解决对象识别问题（即怎样知道一个对象的类型）*

```javascript
function Person(name,age){
	this.name = name
    this.age = age
    this.sayName = function(){
        console.log(this.name)
    }
}

var p1 = new Person('Jack',18)
p1.sayName()	// => Jack

var p2 = new Person('Mike',23)
p2.sayName()	// => Mike
```

#### 3-4 构造函数和工厂函数的区别

- 没有显式的创建对象
- 直接将属性和方法赋给了`this`对象
- 没有`return`语句
- 函数名使用的是大写的`Person`
- 创建`Person`实例必须使用`new`操作符

1. 创建一个新对象
2. 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）
3. 执行构造函数中的代码
4. 返回新对象

```javascript
function Person (name,age){
//当使用new操作符调用Person()的时候，实际上这里会先创建一个对象
//var instance = {}
//然后让内部的this指向instance对象
//this = instance
//接下来所有针对this的操作实际上操作的就是instance
    
    this.name = name
    this.age = age
    this.sayName = function(){
		console.log(this.name)
    }
    //在函数的结尾会将this返回，也就是instance
    //return this   
}
```

#### 3-5 构造函数和实例对象的关系

在每一个实例对象中同时有一个`constructor`属性，该属性指向创建该实例的构造函数。

```javascript
console.log(p1.constructor === Person) // => true
console.log(p2.constructor === Person) // => true
console.log(p1.constructor === p2.constructor) // =>true
```

对象的`constructor`属性最初是用来**标识**对象类型的，但是，如果要**检测**对象类型，还是使用`instanceof`操作符更可靠一些。

```javascript
console.log(p1 instanceof Person) // => true
console.log(p2 instanceof Person) // => true
```

- 构造函数是根据具体的事物抽象出来的抽象模板
- 实例对象是根据抽象函数的构造函数模板得到的具体实例对象
- 每一个实例对象都具有一个`constructor`属性，指向创建该实例的构造函数。

#### 3-6 构造函数的问题

浪费内存

```javascript
function Person(name,age){
	this.name = name
    this.age = age
    this.type = 'human'
    this.sayHello = function(){
        console.log('hello' + this.name)
    }
}

var p1 = new Person('Tom',18)
var p2 = new Person('Jack',16)
```

对于每一个实例对象，`type`和`sayHello`都是一模一样的内容，每一次生成一个实例，都必须为重复的内容，多占用一些内存，如果实例对象很多，会造成极大的内存浪费。

```javascript
console.log(p1.sayHello === p2.sayHello) // => false

//把需要共享的函数定义到构造函数外部
function sayHello = function(){
	console.log('hello' + this.name)
}

function Person(name,age){
	this.name = name
    this.age = age
    this.type = 'human'
    this.sayHello = sayHello
}

var p1 = new Person('Tom',18)
var p2 = new Person('Jack',16)

console.log(p1.sayHello === p2.sayHello) // =>true
```

#### 3-7 原型

***更好的解决方案：`prototype`***

JavaScript规定，每一个构造函数都有一个`prototype`属性，指向另一个对象。这个对象的所有属性和方法都会被构造函数所拥有，意味着我们可以把**所有对象实例需要共享的属性和方法**直接定义在`prototype`对象上。

```javascript
function Person(name,age){
    this.name = name
    this.age = age
}

console.log(Person.prototype)

Person.prototype.type = 'human'

Person.prototype.sayName = function(){
	console.log(this.name)
}

var p1 = new Person(...)
var p2 = new Person(...)

console.log(p1.sayName === p2.sayName)  // => true
```

#### 3-8 构造函数、实例、原型三者之间的关系

- 任何函数都具有一个`prototype`属性，该属性是一个对象。

```javascript
function F () {}
console.log(F.prototype) // => object

F.prototype.sayHi = function () {
    console.log('hi')
}
```

- 构造函数的`prototype`对象默认都有一个`constructor`属性，指向`prototype`对象所在函数。

```javascript
console.log(F.prototype.constructor === F) // => true
```

- 通过构造函数得到的实例对象内部会包含一个指向构造函数的`prototype`对象的指针`_proto_`。`_proto_`是非标准属性。

```javascript
var instance = new F()
console.log(instance._proto_ === F.prototype) // => true
```

- 实例对象可以直接访问原型对象成员。

```
instance.sayHi() // =>Hi
```

#### 3-9 属性成员的搜索原则：原型链

每当代码读取某个对象的某个属性时，都会执行一次搜索，目标是具有给定名字的属性。

- 搜索首先从对象实例本身开始
- 如果在实例中找到了具有给定名字的属性，则返回该属性的值
- 如果没有找到，则继续搜索指针指向的原型对象，在原型对象中查找具有给定名字的属性
- 如果在原型对象中找到了这个属性，则返回该属性的值

也就是说，在我们调用`person.sayName()`的时候，会先后执行两次搜索：

- 首先，解析器会问：“实例person1有sayName属性吗？”答：“没有。”
- 然后它继续搜索，再问：”person1的原型有sayName属性吗？“答：”有。“
- 于是它就读取那个保存在原型对象中的函数
- 当我们调用person2.sayName()时，将会重现相同的搜索过程，得到相同结果。

原型链如图：

![](https://uu--image.oss-cn-zhangjiakou.aliyuncs.com/%E5%8E%9F%E5%9E%8B%E9%93%BE.jpg)

#### 3-10 原型语法

为减少不必要的输入，更常见的做法是用一个包含所有属性和方法的对象字面量来重写整个对象：

```javascript
function Person(name,age){
	this.name = name
    this.age = age
}

Person.prototype = {
	type= 'human'
    sayHello:function(){
		console.log('我叫' + this.name + ',我今年' + this.age + '岁了')
    }
}
//好处：为Person.prototype添加成员简单了
//问题：原型对象丢失了constructor成员
```

正确写法：

```javascript
function Person(name,age){
	this.name = name
    this.age = age
}

Person.prototype = {
    constructor:Person // => 手动将constructor指向正确的构造函数
	type= 'human'
    sayHello:function(){
		console.log('我叫' + this.name + ',我今年' + this.age + '岁了')
    }
}
```

#### 3-11 原型对象使用建议

- 私有成员（一般就是非函数成员）放到构造函数中
- 共享成员（一般就是函数）放到原型对象中
- 如果重置了 `prototype` 记得修正 `constructor` 的指向

#### 3-12 “class”语法

##### 3-12-1 基本语法

```javascript
class Myclass{
	//class 方法
    constructor(){...}
    method1(){...}
    method2(){...}
    method3(){...}
    ...
}
```

然后使用`new Myclass()`来创建具有上述列出的所有方法的新对象。

`new`会自动调用`constructor()`方法，因此我们可以在`constructor()`中初始化对象。

```javascript
class User(){
	
	constructor{
	this.name = name;
	}

	sayHi(){
		alert(this.name)
    }

}

//用法
let user = new User("John");
user.sayHi();
```

当`new User("John")`被调用：

1. 一个新对象被创建。
2. `constructor`使用给定的参数运行，并将其赋值给`this.name`。

***类的方法之间没有逗号***

##### 3-12-2 什么是class？

*在Javascript中，类是一种函数。*

`class Myclass{...}`构造实际上做了如下的事儿：

1. 创建一个名为`Myclass`的函数，该函数成为类声明的结果。该函数的代码来自于`constructor`方法（如果我们不编写这种方法，那么它就被假定为空）。
2. 存储类中的方法，例如`User.prototype`中的`sayHi`。

##### 3-12-3 Getters/setters

类包括getters/setters，计算属性（computed properties）等。

这是一个使用`get/set`实现`user.name`的示例：

```javascript
class User{
    
	constructor(name){
	//调用setter
	this.name = name;
	}
    
    get name(){
		return this._name;
    }
    
    set name(value){
        if(value.length < 4){
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }
    
}

let user = new User("John");
alert(user.name);	//John

user = new User("")	//Name is too short.
```

##### 3-12-4 类继承

类继承是**一个类扩展另一个类**的一种方式。

- `class Child extends Parent`：`Child.prototype._proto_`是`Parent.prototype`，所以Parent方法会被Child继承。
- 重写constructor：
  - **继承类的 constructor 必须调用 `super(...)`，并且 (!) 一定要在使用 `this` 之前调用。**
- 重写方法：
  - 默认情况下，Child自动继承Parent的方法。
  - 如果在Child中指定自己的方法，重写该方法（命名不变）。
  - 执行`super.method()`来调用`Parent`方法：然而通常，我们不希望完全替换父类的方法，而是希望在父类方法的基础上进行调整或扩展其功能。我们在我们的方法中做一些事儿，但是在它之前或之后或在过程中会调用父类方法。

- 箭头函数没有自己的`this`或`super`。

##### 3-12-5 静态方法/属性

- *把一个方法作为一个整体赋值给类，这样的方法被称为**静态的***。

- 基本语法：

```js
class Myclass{
	static property = ...;
    
    static method(){
		...
    }
}
```

- 不能被实例获取，Myclass.变量名获取。
- 静态属性和方法是可以被继承的。

##### 3-12-6 私有方法/属性

- 在 JavaScript 中，有两种类型的对象字段（属性和方法）：
  - 公共的：可从任何地方访问。它们构成了外部接口。
  - 私有的：只能从类的内部访问。这些用于内部接口。
  - “受保护”的：只能从类的内部和基于其扩展的类的内部访问（例如私有的，但可以从继承的类进行访问）。它们对于内部接口也很有用。从某种意义上讲，它们比私有的属性和方法更为广泛，因为我们通常希望继承类来访问它们。受保护的字段以`_`开头。
- 私有字段以`#`开头。
