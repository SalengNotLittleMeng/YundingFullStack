

# 面向对象编程（OOP）

## 程序是干嘛的

程序就是对现实世界的抽象（照片就是对人的抽象）

## 对象是干嘛的

一个事物抽象到程序中就变成了对象

在程序的世界中，一切皆对象

一个事物通常由两部分组成：数据和功能

一个对象由两部分组成：属性和方法

事物的数据到了对象中，体现为属性

事物的功能到了对象中，体现为方法

```
心仪的女人：王老五
数据：
	姓名
	年龄
	身高
	体重
功能：
	睡
	吃
	
const five = {
	//添加属性
	name:"王老五",
	age:48,
	height:180,
	weight:100,
	
	//添加方法
	sleep(){
		console.log(this.name + "睡觉了")
	},
	eat(){
		console.log(this.name + "吃饭了")
	},
}
```

## 面向对象的编程

面向对象的编程指，程序中的所有操作都是通过对象来完成

做任何事情之前都需要先找到他的对象，然后通过对象来完成各种操作

```
const yellow = {
	name:"大黄",
	age:3,
	sleep(){
		console.log(this.name + "睡觉了")
	},
	eat(){
		console.log(this.name + "吃饭了")
	},
}
```

使用Object创建对象的问题：

1.无法区分出不同类型的对象

2.不方便批量创建对象

在JS中可以通过类（class）来解决这个问题：

1.类是对象模板，我们可以将对象中的属性和方法直接定义在类中，定义后，就可以直接通过类来创建对象

2.通过同一个类创建的对象，我们称为同类对象

可以使用instanceof来检查一个对象是否由某个类创建

如果某个对象是由某个类所创建，则我们称该对象是这个类的值

#### 语法

```
class 类名 {} //类名要使用大驼峰命名
```

```
const 类名 = class {}
```

```
例如
//sonst Person = class {}

Person类专门用来创建人的对象
class Person{
	
}

Dog类专门用来创建狗的对象
class Dog{

}

console.log(Person)
```

#### 如何通过类来创建对象

```
new 类()
```

```
new Person()  //调用构造函数创建对象

const p1 = new Person()
const p2 = new Person()
console.log(p1)
const d1 = new Dog()
console.log(d1)

console.log(p1 instanceof Person) //true
console.log(d1 instanceof Person)  //false
```

#### 属性

类是创建对象的模板，要创建第一件事就是定义类

```
class Person{

}

const p1 = new Person()

p1.name = "孙悟空"
p1.age = 18

const p2 = new Person()

p2.name = "猪八戒"
p2.age = 28

console.log(p1)
console.log(p2)
```

类的代码块，默认就是严格模式

类的代码是用来设置对象的属性的，不是什么代码都能写

上一个简单写

```
class Person{
	name = "孙悟空"	//Person的实例属性name
	age	= 18	//实例属性只能通过实例访问，例如p1.name
	
	static test = "test静态属性"	//使用static声明的属性，是静态属性（类属性）
	static hh = "静态属性" 		//静态属性只能通过类去访问,例如Person.hh
}

const p1 = new Person()
const p2 = new Person()

console.log(p1)
console.log(p2)
```

```
class Person{
	name = "孙悟空"
	//sayHello = function(){
	
	//}		//添加方法的一种方式
	
	
	//sayHello(){
		console.log('哈哈哈')
	}		//添加方法（实例方法），实例方法中this就是当前实例
	
	sayHi(){
		console.log('大家好，我是' + this.name)
	}
	
	static test(){
		console.log("我是静态方法",this)
	}	//静态方法（类方法），通过类来调用,静态方法中this指向的是当前类
}

const p1 = new Person()

//console.log(p1)

p1.sayHello()		//哈哈哈
p1.sayHi()		//大家好，我是孙悟空
Person.test()	//我是静态方法
```

#### 构造函数

```
class Person{
	name = "孙悟空"
	age = 18
	gender = "男"
	
	sayHello(){
		console.log(this.name)
	}
}

//创建一个Person的实例
const p1 = new Person()
const p2 = new Person()
const p3 = new Person()

p2.name = "猪八戒"

console.log(p1)
console.log(p2)
console.log(p3)
```

当我们在类中直接指定实例属性的值时，意味着我们创建的所有对象的属性都是这个值

```
class Person{
	name = "孙悟空"
	age = 18
	gender = "男"
	
	sayHello(){
		console.log(this.name)
	}
}

//创建一个Person的实例
const p1 = new Person("孙悟空",18,"男")
const p2 = new Person("猪八戒",28,"男")
const p3 = new Person("沙和尚",38,"男")
//但是这么写没有用



p2.name = "猪八戒"

console.log(p1)
console.log(p2)
console.log(p3)
```

在类中可以添加一个特殊的方法constructor

该方法我们称为构造函数（构造方法）

构造函数会在我们调用类创建对象时执行

```
class Person{
	//在类中可以添加一个特殊的方法constructor
	//该方法我们称为构造函数（构造方法）
	constructor(a,b,c){
		console.log("构造函数执行了",a,b,c)
	}
}

const p1 = new Person(1,2,3)

//打印出来  构造函数执行了1,2,3
```

```
class Person{
	//在类中可以添加一个特殊的方法constructor
	//该方法我们称为构造函数（构造方法）
	constructor(name,age,gender){
		console.log("构造函数执行了",name,age,gender)
	}
}

const p1 = new Person("孙悟空",18,"男")

//打印出来  构造函数执行了孙悟空 18 男
```

可以在构造函数中，为实例属性进行赋值

在构造函数中，this表示当前所创建的对象

```
class Person{
	name
	age
	gender
	constructor(name,age,gender){
		this.name = name
		this.age = age
		this.gender = gender
	}
}

const p1 = new Person("孙悟空",18,"男")
const p2 = new Person("猪八戒",28,"男")
const p3 = new Person("沙和尚",38,"男")

console.log(p1)
console.log(p2)
console.log(p3)
```

## 面向对象的特点

### 封装

对象就是一个用来存储不同属性的容器（装）

```
class Person {
	constructor(name,age,gender) {
		this.name = name
		this.age = age
		this.gender = gender
	}
	
	sayHello() {
		console.log(this.name)
	}
}

const p1 = new Person("孙悟空",18,"男")

console.log(p1)

//此时封装了三个属性和一个方法
```

对象不仅负责存储属性，还要负责数据的安全（封）

直接添加到对象中的属性并不安全，因为他们可以被任意的修改

#### 如何确保数据的安全

1.私有化数据

将需要保护的数据设置为私有，只能在类内部使用

私有化必须先声明才能再访问，否则会报错

```
class Person {
	#address = "花果山"
	
	#name
	#age
	#gender
	
	constructor(name,age,gender) {
		this.#name = name
		this.#age = age
		this.#gender = gender
	}
	
	sayHello() {
		console.log(this.name)
	}
	//getter方法，用来读取属性
	getName(){
		return this.#name
	}
	//setter方法，用来设置属性
	setName(name){
		this.#name = name
	}
	
	getAge(){
		return this.#age
	}
	
	setAge(age){
		if(age >= 0){
			this.#age = age
		}//此时如果将age改成-11就不能修改成功
	}
	
	get gender(){
		console.log("getter执行了")
		return this.#gender
	}
	
	set gender(gender){
		this.#gender = gender
	}
}

const p1 = new Person("孙悟空",18,"男")

//p1.getName() 	//孙悟空

p1.setName('猪八戒')

p1.gender = "女"

console.log(p1.gender)
```

实例属性使用#开头就变成了私有属性，私有属性只能在类的内部访问

2.提供setter和getter方法来开放对数据的操作

属性设置私有，通过getter，setter方法操作属性带来的好处

1.可以控制属性的读写权限

2.可以在方法中对属性的值进行验证

封装主要用来保证数据的安全

实现封装的方式

1.属性私有化 ，加#

2.通过getter和setter方法来操作属性

```
get 属性名(){
	return this.#属性
}

set 属性名(参数){
	this.#属性 = 参数
}
```

### 继承

```
class Dog{
	constructor(name){
		this.name = name
	}
	
	sayHello(){
		console.log("汪汪汪")
	}
}

class Cat{
	constructor(name){
		this.name = name
	}
	
	sayHello(){
		console.log("喵喵喵")
	}
}

const dog = new Dog("旺财")
const cat = new Cat("汤姆")

dog.sayHello()
cat.sayHello()
```

可以通过extends关键来完成继承

当一个类继承另一个类时，就相当于将另一个类中的代码复制到了当前类中（简单理解）

继承发生时，被继承的类称为父类（超类），继承的类称为子类

通过继承可以减少重复的代码，并且可以在不修改一个类的前提对其进行扩展

封装——安全性

继承——扩展性

多态——灵活性

```
class Animal {
	constructor(name){
		this.name = name
	}
	
	sayHello(){
		console.log("动物在叫")
	}
}

class Dog extends Animal {
	sayHello(){
		console.log("汪汪汪")
	}
}

class Cat extends Animal {
	//重写构造函数
	constructor(name){
		//重写构造函数时，构造函数的第一行代码必须为super()
		super(name)	//调用父类的构造函数
		
		this.age = age
	}

	sayHello(){
	
		//调用父类的sayHello
		super.sayHello()	//在方法中可以使用super来引用父类的方法
		
		console.log("喵喵喵")
	}
}

class Snake extends Animal {

}

const dog = new Dog("旺财")
const cat = new Cat("汤姆",3)

dog.sayHello()
cat.sayHello()
console.log(dog)
console.log(cat)
```

在子类中，可以通过创建同名方法来重写父类的方法

重写构造函数时，构造函数的第一行代码必须为super()

在方法中可以使用super来引用父类的方法

继承的主要作用时通过继承可以在不修改一个类的情况下对其进行扩展

##### OCP开闭原则

程序应该对修改关闭，对扩展开放

### 多态

定义一个函数，这个函数将接收一个对象作为参数，它可以输出hello并打印对象的name属性

在JS中不会检查参数的类型，所以这就意味着任何数据都可以作为参数传递

要调用某个函数，无需指定的类型，只要对象满足某些条件即可

如果一个东西走路像鸭子，叫起来像鸭子，那么他就是鸭子

```
class Person{
	constructor(name){
		this.name = name
	}
}

class Dog{
	constructor(name){
		this.name = name
	}
}

const dog = new Dog('旺财')
const person = new Person("孙悟空")

console.log(dog)
console.log(person)

function sayHello(obj){
	if(obj instanceof Person){
		console.log("Hello,"+obj.name)
	}
}

//sayHello(dog)		//传递不出来

```

多态为我们提供了灵活性

## 对象的结构

```
class Person{
	name = "孙悟空"
	age = 18
	
	constructor(){
		this.gender = "男"
	}
	
	sayHello(){
		console.log("Hello,我是",this.name)
	}
	
}

const p = new Person()

p.address = "花果山"

console.log(p)
```

#### 对象中存储属性的区域实际有两个

##### 1.对象自身

比如直接通过对象所添加的属性，位于对象自身中

在类中通过 x = y 的形式添加的属性，也位于对象自身中

##### 2.原型对象(prototype)

对象中还有一些内容，会存储到其他的对象中（原型对象）

在对象中会有一个属性用来存储原型对象，这个属性叫做 `__proto__`  

#### 原型对象也负责为对象存储属性：

1.当我们访问对象中的属性时，会优先访问对象自身的属性

2.对象自身不包含该属性时，才回去原型对象中寻找

#### 会添加到原型对象中的情况：

1.在类中通过 `xxx(){}`方式添加的方法，位于原型中

2.主动向原型中添加的属性或方法

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20221231211219476.png)

#### 访问一个对象的原型对象 

方法一   `对象.__proto__`  (前后各两个下划线)

方法二    `Object.getPrototypeOf(对象)`

```
class Person{
	name = "孙悟空"
	age = 18
	
	sayHello(){
		console.log("Hello,我是",this.name)
	}
}

const p = new Person()

console.log(p)

//法一
//console.log(p.__proto__)

//法二（推荐）
console.log(Object.getPrototypeOf(p))

console.log(Object.getPrototypeOf(p) === p.__proto__)		//true

console.log(p.constructor)
```

#### 原型对象中的数据

1.对象中的数据（属性、方法等）

2.constructor （对象的构造函数）

#### 注意

原型对象也有原型，这样就构成了一条原型链，根据对象的复杂程度不同，原型链的长度也不同

```
console.log(p.__proto__.__proto__)
```

 但是原型对象的原型的原型就不一定有了

以上面的例子为例

```
console.log(p.__proto__.__proto__.__proto__)
//打印出null
```

p对象的原型链：p对象 --> 原型 --> 原型 --> null

例二

```
const obj = {}
```

obj对象的原型链： obj对象 --> 原型 --> null

##### 原型链

读取对象属性时，会优先对象自身属性

如果对象中有，则使用，没有则去对象的原型中寻找

如果原型中有，则使用，没有则取原型的原型中寻找

知道找到Object对象的原型（Object的原型是没有原型（为null））

如果依然没有找到，则返回undefined

作用域链，是找变量的链，找不到会报错

原型链，是找属性的链，找不到会返回undefined

## 原型对象

```
class Person {
	name = "孙悟空"
	age = 18
	
	sayHello() {
		console.log("Hello,我是",this.name)
	}
}

class Dog {

}

const p = new Person()
const p2 = new Person()

const d = new Dog()
const d2 = new Dog()

console.log(p)
console.log(p2)
console.log(p.__proto__ === p2.__proto__) 	//true
```

所有的同类型对象他们的原型对象都是同一个

也就意味着同类型对象的原型链是一样的

原型的作用：

原型就相当于是一个公共的区域，可以被所有该类实例访问

可以将一个该类实例中，所有的公共属性（方法）统一存储到原型中

这样我们只需要创建一个属性，即可被所有实例访问

JS当中就是通过继承来实现的

当继承时，子类的原型就是一个父类的实例

在对象中，有些值是对象独有的，像属性（name,age,gender)每个对象都应该有自己的值

但是有些值对于每个对象来说都是一样的，像各种方法，对于一样的值没必要重复的创建

```
class Animal {

}

class Cat extends Animal {

}

class TomCat extends Cat{

}

//TomCat-->cat-->Animal实例-->object-->object原型-->null

//cat-->Animal实例-->object-->object原型-->null
const cat = new Cat()

console.log(cat.__proto__.__proto__.__proto__.__proto__)
```

## 修改原型

大部分情况下，我们是不需要修改原型对象

通过对象修改原型，向原型中添加方法，修改后所有同类实例都能访问该方法，不要这么做

注意：

千万不要通过类的实例去修改原型

1.通过一个对象影响所有同类对象，这么做不合适

2.修改原型先得创建实例，麻烦

3.危险

处理通过 `__proto__` 能访问对象的原型外，还可以通过类的 `prototype` 属性，来访问实例的原型

修改原型时，最好通过类去修改

好处：

1.以修改就是修改所有实例的原型

2.无需创建实例即可完成对类的修改

原则：

1.原型尽量不要手动改

2.要改也不要通过实例对象去改

3.通过 `类.prototype`去赋值

4.最好不要直接给prototype去赋值

```
class Person {
	name = "孙悟空"
	age = 18
	
	sayHello(){
		console.log("Hello,我是",this.name)
	}
}

class Dog{

}

const p = new Person()
const p2 = new Person()

//通过对象修改原型，想原型中添加方法，修改后所有同类实例都能访问该方法，不要这么做
p.__proto__.run = () => {
	console.log("我在跑")
}

p.__proto__ = new Dog	//直接为对象赋值了一个新的原型	//这样会出问题，不要这么做

console.log(p)

p.run()
p2.run()

console.log(Person.prototype)	//访问Person实例的原型对象

Person.prototype.fly = () => {
	console.log("我在飞")
}

p.fly()
p2.fly()
```

## `instanceof`和`hasOwn`

```
class Animal {}

class Dog extends Animal {}

const dog = new Dog()

console.log(dog instanceof Dog)	//true
console.log(dog instanceof Animal)	//true
console.log(dog instanceof Object)	//true
```

`instanceof`用来检查一个对象是否是一个类的实例

`instanceof`检查的是对象的原型链上是否有该类实例

只要原型链上有该类实例，则就会返回true

dog -> Animal的实例 -> Object实例 -> Object实例

Object是所有对象的原型，所有任何和对象和Object进行`instanceof`运算都会返回true

```
//访问Object的原型
const obj = new Object()

console.log(obj.__proto__)	//方法一通过实例去读取原型
console.log(obj.prototype)	//方法二根据类去读取原型

//dog.__proto__或者Dog.prototype

class Person {
	name = "孙悟空"
	age = 18
	
	sayHello() {
		console.log("Hello,我是",this.name)
	}
}

const p = new Person()
console.log("address" in p)	//false
console.log("sayHello" in p)	//true

console.log(p.hasOwnProperty("name"))	//检查name在不在p的原型里面	//true

console.log(p.hasOwnProperty("sayHello"))	//false

console.log(p.__proto__.__proto__.hasOwnProperty("hasOwnProperty"))		//true


console.log(Object.hasOwn(p,"name"))	//true

console.log(Object.hasOwn(p,"sayHello"))	//false
```

#### `in`

使用in运算符检查属性时，无论属性在对象自身还是在原型中，都会返回true

#### `对象.hasOwnProperty(属性名)`	（不推荐使用）

用来检查一个对象的自身是否含有某个属性

#### `Object.hasOwn(对象，属性名)`		（推荐使用）

用来检查一个对象的自身是否含有某个属性

  ## 旧类

早期JS中，直接通过函数来定义类

一个函数如果直接调用 `xxx()` 那么这个函数就是一个普通函数

一个函数如果通过new调用 `new xxx()` 那么这个函数就是一个构造函数

```
function Person(){

}

const p = new Person()

console.log(p)
```

等价于

```
class Person(){

}

class MyClass{

}

new MyClass()
```

在构造函数中，this表示新建的对象

```
function Person(name,age){
	this.name = name
	this.age = age
	
	this.sayHello = function(){
		console.log(this.name)
	}
}

const p = new Person("孙悟空",18)

console.log(p)
```

向原型中添加属性（方法）

```
var Person = (function () {
	function Person(name,age){
		this.name = name
		this.age = age
	}

	//向原型中添加属性（方法）
	Person.prototype.sayHello = function(){
		console.log(this.name)
	}

	//静态属性
	Person.staticProperty = "xxx"

	//静态方法
	Person.staticMethod = function(){}
	
	return Person
})()

const p = new Person("孙悟空",18)

console.log(p)
```



```
var Animal = (function(){
	function Animal(){
	
	}
	
	return Animal
})()

var Cat = (function(){
	function Cat(){
	
	}
	
	//继承Animal
	Cat.prototype = new Animal()
	
	return Cat
})()

var cat = new Cat()
console.log(cat)
```

### `new`运算符

new运算符时创建对象时要使用的运算符

使用new时，到底发生了哪些事情

[new]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

当使用new去调用一个函数时，这个函数将会作为构造函数使用

使用new调用函数时，将会发生这些事：

1.创建一个普通的JS对象，`(Object对象 {})` ，为了方便，称其为新对象

2.将构造函数的prototype属性设置为新对象的原型

3.使用实参执行构造函数，并且将新对象设置为函数中的this

4.如果构造函数返回的是一个非原始值，则该值会作为new运算的返回值返回（千万不要这么做）;如果构造函数的返回值是一个原始值或者没有指定返回值，则新的对象将会作为返回值返回

通常不会为构造函数指定返回值

```
function MyClass(){
	//var newInstance = {}
	//newInstance.__proto__ = MyClass.prototype
	
	return {name:"孙悟空"}
}

var mc = new MyClass()

console.log(mc)
```

## 总结

#### 面向对象本质

编写代码时所有的操作都是通过对象来进行的

#### 面向对象的编程的步骤：

1.找对象

2.搞对象

#### 学习对象：

1.明确这个对象代表什么，有什么用

2.如何获取到这个对象

3.如何使用这个对象（对象中的属性和方法）

#### 对象的分类：

##### 内建对象

由ES标准所定义的对象

比如Object  Function  String  Number ...

##### 宿主对象

由浏览器提供的对象

BOM、DOM

##### 自定义对象

由开发人员自己创建的对象

------

# 数组

## 简介



### 数组（Array）

数组也是一种复合数据类型，在数组可以存储多个不同类型的数据

数组中存储的是有序的数据，数组中的每个数据都有一个唯一的索引

可以通过索引来操作获取数据

数组中存储的数据叫做元素

索引(index)是一组大于0的整数

#### 创建数组

通过 `Array()` 来创建数组

也可以通过 `[]` 来创建数组

```
const obj = { name:"孙悟空",age:18 }

const arr = new Array()
const arr2 = []	//数组字面量

console.log(arr)
console.log(arr2)
```

#### 向数组中添加元素

##### 语法

```
数组[索引] = 元素
```

```
const obj = { name:"孙悟空",age:18 }

const arr = new Array()
const arr2 = []	//数组字面量

arr[0] = 10
arr[1] = 22
arr[2] = 44
arr[3] = 88

console.log(arr)
console.log(arr2)
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230101115549264.png)

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230101115821595.png)

```
const obj = { name:"孙悟空",age:18 }

const arr = new Array()
const arr2 = []	//数组字面量

arr[0] = 77
arr[1] = 22
arr[2] = 44
arr[3] = 88
arr[0] = 10
//使用数组时，应该避免非连续数组，因为它性能不好
arr[100] = 99

console.log(arr)
console.log(arr2)
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230101115934535.png)

```
const arr2 = [1,2,3,4,5]
console.log(arr2)
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230101120204936.png)

#### 读取数组中的元素

##### 语法

```
数组[索引]
```

如果读取了一个不存在的元素，不会报错而是返回undefined

```
console.log(typeof arr)		//Object
```

#### length

获取数组的长度

```
arr[0] = 10
arr[1] = 22
arr[2] = 44
arr[3] = 88
arr[4] = 99

console.log(arr.length)		//5
```

获取的实际值就是数组的最大索引+1

```
arr[0] = 10
arr[1] = 22
arr[2] = 44
arr[3] = 88
arr[100] = 99

console.log(arr.length)		//101
```

向数组的最后添加元素 `数组[数组.length] = 元素` 

length是可以修改的

```
arr[0] = 10
arr[1] = 22
arr[2] = 44
arr[3] = 88
arr[4] = 99

arr[arr.length] = 33
arr[arr.length] = 55

console.log(arr)
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230101120850985.png)

```
arr[0] = 10
arr[1] = 22
arr[2] = 44
arr[3] = 88
arr[4] = 99

arr[arr.length] = 33
arr[arr.length] = 55

arr.length = 10

console.log(arr)
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230101120940137.png)

```
arr[0] = 10
arr[1] = 22
arr[2] = 44
arr[3] = 88
arr[4] = 99

arr[arr.length] = 33
arr[arr.length] = 55

arr.length = 5

console.log(arr)
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230101121038770.png)

## 遍历数组

任何类型的值都可以成为数组中的元素

```
const arr = [1,"hello",true,null,{name:"孙悟空"},()=>{}]

console.log(arr)
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230101121941782.png)

创建数组时尽量要确保数组中存储的数据类型时相同

```
arr = ["孙悟空","猪八戒","沙和尚"]
console.log(arr)
```

 ### 遍历数组

遍历数组简单理解，就是获取到数组中的每一个元素

```
arr = ["孙悟空","猪八戒","沙和尚"]

for(let i=0; i<arr.length; i++){
	console.log(arr[i])
}
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230101155301826.png)

法二

```
for(let i=arr.length-1; i>=0; i--){
	console.log(arr[i])
}
```

###### 练习

定义一个Person类，类中有两个属性name和age

然后创建几个Person对象，将其添加到一个数组中

遍历数组，并打印未成年人的信息

```
class Person {
	constructor(name,age) {
		this.name = name
		this.age = age
	}
}

const personArr = [
	new Person("孙悟空",18),
	new Person("沙和尚",18),
	new Person("红孩儿",18),
]

for(let i=0; i<personArr.length; i++){
	if(personArr[i].age < 18){
		console.log(personArr[i])
	}
}
```

### for-of语句

for-of语句可以用来遍历可迭代对象(并不局限于数组)

#### 语法

```
for(变量 of 可迭代的对象){
	语句...
}
```

#### 执行流程

for-of的循环体会执行多次，数组中有几个元素就会执行几次，每次执行时都会将一个元素赋值给变量

```
const arr = ["孙悟空","猪八戒","沙和尚","唐僧"]

for(let value of arr){
	console.log(value)
}
```

### 数组的方法（非破坏性方法）

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

#### `Array.isArray()`

用来检查一个对象是否是数组

```
console.log(Array.isArray({name:"孙悟空"}))	//false
console.log(Array.isArray([1,2,3]))		//true
```

#### `at()`

可以根据索引获取数组中的指定元素

```
const arr = ["孙悟空","猪八戒","沙和尚","唐僧"]

console.log(arr.at(0))	//孙悟空
console.log(arr.at(1))	//猪八戒
```

at可以接收负索引作为参数

```
const arr = ["孙悟空","猪八戒","沙和尚","唐僧"]

console.log(arr.at(-1))	//唐僧
console.log(arr.at(-2))	//沙和尚
console.log(arr.at(-3))	//猪八戒
console.log(arr.at(-4))	//孙悟空
```

`console.log(arr.at(-2))` 等价于 `console.log(arr[arr.length - 2])`

#### `concat()`

用来连接两个或多个数组

非破坏性方法，不会影响原数组，而是返回一个新的数组

```
const arr = ["孙悟空","猪八戒","沙和尚","唐僧"]
const arr2 = ["白骨精","蜘蛛精","玉兔精"]

arr.concat(arr2)

let result = arr.concat(arr2,["牛魔王","铁扇公主"])

console.log(arr)
console.log(arr2)

console.log(result)
```

#### `indexOf()`

获取元素在数组中第一次出现的索引

##### 参数

1.要查询的元素

2.查询的起始位置

#### `lastIndexOf()`

获取元素在数组中最后一次出现的位置

```
const arr = ["孙悟空","猪八戒","沙和尚","唐僧","沙和尚"]

let result = arr.indexOf("孙悟空")		//0
let result = arr.indexOf("猪八戒")		//1
let result = arr.indexOf("沙和尚")		//2
let result = arr.indexOf("沙和尚",3)		//4

result = arr.lastIndexOf("沙和尚")		//4
result = arr.lastIndexOf("沙和尚"，3)		//2

result = arr.indexOf("白骨精")		//-1

console.log(result)
```

##### 返回值

找到了则返回元素的索引

没有找到则返回-1

#### `join()`

将一个数组中的元素连接为一个字符串

```
const arr = ["孙悟空","猪八戒","沙和尚","唐僧","沙和尚"]

result = arr.join()		//"孙悟空,猪八戒,沙和尚,唐僧,沙和尚"
```

##### 参数

指定一个字符串作为连接符

```
const arr = ["孙悟空","猪八戒","沙和尚","唐僧","沙和尚"]

result = arr.join("@")	//孙悟空@猪八戒@沙和尚@唐僧@沙和尚
result = arr.join("@-@")	//孙悟空@-@猪八戒@-@沙和尚@-@唐僧@-@沙和尚
result = arr.join("")		//孙悟空猪八戒沙和尚唐僧沙和尚

console.log(result)
```

#### `slice()`

用来截取数组（非破坏性方法）

##### 参数

1.截取的起始位置（包括该位置）

2.截取的结束位置（不包括该位置）

第二个参数可以省略不写，如果省略则会一直截取到最后

索引可以是负值（还是从后往前数）

如果将两个参数全部省略，则可以对数组进行浅拷贝（浅复制）

```
const arr = ["孙悟空","猪八戒","沙和尚","唐僧"]
result = arr.slice(0,2)		//孙悟空，猪八戒
result = arr.slice(1,2)		//猪八戒
result = arr.slice(1,3)		//猪八戒，沙和尚

result = arr.slice(1)	//猪八戒，沙和尚，唐僧

result = arr.slice(1,-1)	//猪八戒，沙和尚

result = arr.slice()	//孙悟空，猪八戒，沙和尚，唐僧


console.log(result)
```

#### `filter()`

用来过滤数组中的元素，将数组中符合条件的元素保存到一个新数组中返回

需要一个回调函数，会为每一个元素去调用回调函数，并根据返回值来决定是否将元素添加到新数组中

非破坏性方法，不会影响原数组

```
arr = [1,2,3,4,5,6,7,8]
//获取数组中的所有的偶数
arr.filter(ele => console.log(ele))
```

```
arr = [1,2,3,4,5,6,7,8]
//获取数组中的所有的偶数
let result = arr.filter(ele => true)
console.log(result)
//返回[1,2,3,4,5,6,7,8]
let result = arr.filter(ele => false)
console.log(result)
//返回[]
let result = arr.filter(ele => ele % 2 === 0)
console.log(result)
```

#### `map()`

根据当前数组生成一个新数组

需要一个回调函数作为参数

回调函数的返回值会成为新数组中的元素

非破坏性方法不会影响原数组

```
arr = [1,2,3,4,5,6,7,8]
result = arr.map(ele => 123)
console.log(arr)
//原数组中有八个元素，返回123，所以新数组中会生成8个123
//返回[123,123,123,123,123,123,123,123]
result = arr.map(ele => "hello")
console.log(arr)
//返回['hello','hello','hello','hello','hello','hello','hello','hello']
result = arr.map(ele => ele * 2)
//[2,4,6,8,10,12,14,16]

arr = ["孙悟空","猪八戒","沙和尚"]
result = arr.map(ele => "<li>" + ele + "<li>")
console.log(result)
//['<li>孙悟空<li>','<li>猪八戒<li>','<li>沙和尚<li>']

```

#### `reduce()`

可以用来将一个数组中的所有元素整合为一个值

##### 参数

1.回调函数，通过回调函数来指定合并的规则

2.可选参数，初始值

```
arr = [1,2,3,4,5,6,7,8]
result = arr.reduce((a,b) => {
	/*
		a=1,b=2
		//a+b=3
		a=3,b=3
		//a的3是1+2的3，b的3是第三个数字3
		a=6,b=4
		a=10,b=5
		...
	*/
	console.log(a,b)
	return a + b
})
console.log(result)
```

### 数组的方法（破坏性方法）

#### `push()`

向数组的末尾添加一个或多个元素，并返回新数组的长度

```
const arr = ["孙悟空","猪八戒","沙和尚"]
let result = arr.push("唐僧","白骨精")
console.log(arr)	//孙悟空，猪八戒，沙和尚，唐僧，白骨精
console.log(result)	//5
```

#### `pop()`

删除并返回数组的最后一个元素

```
const arr = ["孙悟空","猪八戒","沙和尚"]
result = arr.pop()
console.log(arr)	//孙悟空，猪八戒
```

#### `unshift()`

向数组的开头添加一个或多个元素，并返回新的长度

```
const arr = ["孙悟空","猪八戒","沙和尚"]
arr.unshift("牛魔王")
console.log(arr)
```

#### `shift()`

删除并返回数组的第一个元素

```
const arr = ["孙悟空","猪八戒","沙和尚"]
arr.shift()
console.log(arr)
```

#### `splice()`

可以删除、插入、替换数组中的元素

##### 参数

1.删除的起始位置

2.删除的数量

3.要插入的元素

```
const arr = ["孙悟空","猪八戒","沙和尚","唐僧"]
//arr.splice(1,2)		//孙悟空，唐僧
//arr.splice(1,1)		//孙悟空，沙和尚，唐僧

result = arr.splice(1,2,"牛魔王")
//孙悟空，牛魔王，唐僧

result = arr.splice(1,0,"牛魔王")
//孙悟空，牛魔王，猪八戒，沙和尚，唐僧
result = arr.splice(0,0,"牛魔王")
//牛魔王，孙悟空，猪八戒，沙和尚，唐僧

console.log(arr)
```

##### 返回值

返回被删除的元素

```
const arr = ["孙悟空","猪八戒","沙和尚","唐僧"]
result = arr.splice(1,2)		//猪八戒，沙和尚
console.log(result)
```

#### `reverse()`

反转数组

```
arr = ["a","b","c","d"]
console.log(arr)	//'a','b','c','d'
arr.reverse()	//'d','c','b','a'
```

#### `sort()`

sort用来对数组进行排序（会改变原数值）

```
let arr = ["a","c","e","f","d","b"]
console.log(arr)
arr.sort()
console.log(arr)
```

##### sort默认会将数组升序排列

##### 注意

sort默认会按照Unicode编码进行排序，所以如果直接通过sort对数字进行排序，可能会得到一个不正确的结果

##### 参数

可以传递一个回调函数作为参数，通过回调函数来指定排序规则 

(a,b) => a - b	升序排列

(a,b) => b - a	降序排列

```
arr = [2,3,1,9,0,4,5,7,8,6,10]
console.log(arr)
arr.sort()	//0,1,10,2,3,4,5,6,7,8,9
arr.sort((a,b) => a - b)	//0,1,2,3,4,5,6,7,8,9,10
arr.sort((a,b) => b - a)
//10,9,8,7,6,5,4,3,2,1
console.log(arr)
```

#### `forEach()`

用来遍历数组

它需要一个回调函数作为方法，这个回调函数会被调用多次

数组中有几个元素，回调函数就会调用几次

每次调用，都会将数组中的数据作为参数传递

##### 回调函数中有三个参数

###### a

element当前数组中的元素

###### b

index当前元素的索引，即0，1，2，3...

###### c

array被遍历的数组

```
arr = ["孙悟空","猪八戒","沙和尚","唐僧"]
arr.forEach((a,b,c) => {
	console.log(a,b,c)
})
```

```
arr.forEach(element) => console.log(element)
arr.forEach(element,index) => console.log(index,element)
```

### 数组去重

#### 练习

有如下一个数组

```
arr = [1,2,1,3,2,4,5,5,6,7]
```

编写代码去除数组中重复的元素

```
const arr = [1,2,1,3,2,4,5,5,6,7]

//编写代码去除数组中重复的元素

//分别获取数组中的元素
for(let i = 0; i < arr.length; i++) {
	//获取当前值后边的所有值
	for(let j = i + 1; j < arr.length; j++) {
		//判断两个数是否相等
		if(arr[i] === arr[j]) {
			//出现了重复元素，删除后边的元素
			arr.splice(j,1)
			//当arr[i]和arr[j]相同时，他会自动删除j位置的元素，然后j+1位置的元素，会变成j位置的元素，而j位置已经比较过了，不会重复比较，所以会出现漏比较的情况
			//解决办法：当删除一个元素后，需要将该位置的元素再比较一遍
			j--
		}
	}
}

console.log(arr)
```

#### 优化一

```
const arr = [1,2,1,3,2,2,4,5,5,6,7]

//获取数组中的元素
for(let i=0; i<arr.length; i++){
	const index = arr.indexOf(arr[i],i+1)
	if(index !== -1){
		//出现重复内容
		arr.splice(index,-1)
		i--
	}
}
console.log(arr)
```

#### 优化二

```
const arr = [1,2,1,3,2,2,4,5,5,6,7]

const newArr = []

for(let ele of arr){
	if(newArr.indexOf(ele) === -1){
		newArr.push(ele)
	}
}

console.log(newArr)
```

### 排序

#### 冒泡排序

##### 练习

数组 `[9,1,3,2,8,0,5,7,6,4]`从小到大排序

###### 思路一

9，1，3，2，8，0，5，7，6，4

比较相邻的两个元素，然后根据大小来决定是否交换他们的位置

例子：

第一次比较：1，3，2，8，0，5，7，6，4，9

第二次比较：1，2，3，0，5，7，6，4，8，9

第三次比较：1，2，0，3，5，6，4，7，8，9

...

倒数第二次：1，0，2，3，4，5，6，7，8，9

这种排序方式，被称为冒泡排序

冒泡排序时最慢的排序方式，数字少还可以凑合用，不适用于数据量较大的排序

```
const arr = [9,1,3,2,8,0,5,7,6,4]
for(let j = 0; j < arr.length - 1; j++) {
	for(let i = 0; i < arr.length - 1; i++) {
		//arr[i]前边的元素 arr[i+1]后边的元素
		if(arr[i] > arr[i + 1]) {
			//大数在前，小数在后，需要交换两个元素的位置
			let temp = arr[i]	//临时变量用了存储arr[i]的值
			arr[i] = arr[i + 1]		//将arr[i+1]的值赋给arr[i]
			arr[i + 1] = temp		//修改arr[i+1]的值
		}
	}
}

console.log(arr)
```

###### 优化

1，3，2，8，0，5，7，6，4，9

1，2，3，0，5，7，6，4，8，9

1，2，0，3，5，4，6，7，8，9

1，0，2，3，5，4，6，7，8，9

...

```
const arr = [9,1,3,2,8,0,5,7,6,4]
for(let j = 0; j < arr.length - 1; j++) {
	for(let i = 0; i < arr.length -1 -j; i++){
		if(arr[i] > arr[i + 1]) {
			let temp = arr[i]
			arr[i] = arr[i + 1]
			arr[i + 1] = temp
		}
	}
}
console.log(arr)
```



#### 选择排序

###### 思路二

9，1，3，2，8，0，5，7，6，4

取出一个元素，然后将其他元素和该元素进行比较，如果其他元素比该元素小则交换两个元素的位置

例子：

0，9，3，2，8，1，5，7，6，4

0，1，9，3，8，2，5，7，6，4

0，1，2，9，8，3，5，7，6，4

...

```
const arr = [9,1,3,2,8,0,5,7,6,4]

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

### 对象的复制

打灭

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230101170854526.png)

```
const arr = ["孙悟空","猪八戒","沙和尚"]

const arr2 = arr	//不是复制
console.log(arr === arr2)	//true
console.log(arr2)
```

#### 如何去复制一个对象

复制必须要产生新的对象

当调用slice时，会产生一个新的数组对象，从而完成对数组的复制

```
const arr = ["孙悟空","猪八戒","沙和尚"]

const arr3 = arr.slice()
 
console.log(arr3) 
```

正确的

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230101171428140.png)

```
const arr = ["孙悟空","猪八戒","沙和尚"]
const arr2 = arr.slice()
console.log(arr === arr2)
```

#### `...(展开运算符)`

可以将一个数组中的元素展开到另一个数组中或者作为函数的参数传递

通过它也可以对数组进行浅复制

```
const arr = ["孙悟空","猪八戒","沙和尚"]

//const arr3 = [arr[0],arr[1],arr[2]]
//等价于
const arr3 = [...arr]
//孙悟空，猪八戒，沙和尚

const arr4 = ["唐僧",...arr,"白骨精"]
//唐僧，孙悟空，猪八戒，沙和尚，白骨精

console.log(arr)
console.log(arr3)

console.log(arr === arr3)	//false
```

```
function sum(a,b,c) {
	return a + b + c
}

const arr5 = [10,20,30]

//let result = sum(arr5[0],arr5[1],arr5[2])
//等价于
result = sum(...arr5)

console.log(result)
```

#### 对象的复制

##### `Object.assign(目标对象，被复制的对象)`

将被复制对象中的属性复制到目标对象里，并将目标对象返回

```
const obj = {name:"孙悟空",age:18}
//const obj2 = Object.assign({},obj)

const obj2 = {address:"花果山",age:28}

Object.assign(obj2,obj)

console.log(obj2)
//console.log(obj === obj2)	//false
```

##### 也可以使用展开运算符对对象进行复制

```
const obj = {name:"孙悟空",age:18}
const obj3 = {...obj}	//将obj中的属性在新对象中展开

const obj3 = {address:"高老庄",age:48,...obj}
//age不会更改为48

const obj3 = {address:"高老庄",...obj,age:48}
//age修改成功

console.log(obj === obj3)	//false
```

### 浅拷贝和深拷贝

#### 浅拷贝(shallow copy)

通常对对象的拷贝都是浅拷贝

浅拷贝顾名思义，只对对象的浅层进行复制（只复制一层）

如果对象中存储的数据就是原始值，那么拷贝的深浅是不重要

```
//创建一个数组
const arr = [{name:"孙悟空"},{name:"猪八戒"}]
const arr2 = arr.slice()	//浅拷贝
```

浅拷贝只会对对象本身进行复制，不会复制对象中的属性（或元素）

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230101172031561.png)

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230101172239287.png)

#### 深拷贝(deep copy)

深拷贝不仅复制对象本身，还复制对象中的属性和元素

因为性能原因，通常情况下不太使用深拷贝

```
const arr = [{name:"孙悟空"},{name:"猪八戒"}]
const arr3 = structuredClone(arr)	//专门用来深拷贝的方法
console.log(arr)
console.log(arr3)
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230101172650961.png)

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230101172402058.png)

# 函数

## 排序

### 封装函数

##### 练习一

```
const arr = [9,1,3,2,8,0,5,7,6,4]
const arr2 = [9,8,7,6,5,4,3,2,1]

function sort(arr) {
	for(let i = 0; i < arr.length; i++) {
		for(let j = i+1; j < arr.length; j++){
			if(arr[i] > arr[j]) {
			//交换两个元素的位置
			let temp = arr[i]
			arr[i] = arr[j]
			arr[j] = temp
			}
		} 
	}
}

sort(arr)
sort(arr2)
console.log(arr)
console.log(arr2)
```

此时是破坏性的

##### 继续优化

```
const arr = [9,1,3,2,8,0,5,7,6,4]
const arr2 = [9,8,7,6,5,4,3,2,1]

function sort(array) {

	const arr = [...array]
	
	for(let i = 0; i < arr.length; i++) {
		for(let j = i+1; j < arr.length; j++){
			if(arr[i] > arr[j]) {
			//交换两个元素的位置
			let temp = arr[i]
			arr[i] = arr[j]
			arr[j] = temp
			}
		} 
	}
	
	return arr
	
}

let result = sort(arr2)
console.log(arr2)
console.log(result)
```

#### 练习二

**filter()函数用来对数组进行过滤**

```
class Person {
	constructor(name,age) {
		this.name = name
		this.age = age
	}
}

const personArr = [
	new Person("孙悟空",18),
	new Person("沙和尚",18),
	new Person("红孩儿",8),
	new Person("白骨精",16)
]

//filter()函数用来对数组进行过滤
function filter(arr) {
	
	const newArr = []
	
	for(let i = 0; i < arr.length; i++){
		if(arr[i].age < 18){
			newArr.push(arr[i])
		}
	}
	
	return newArr
}

result = filter(personArr)
console.log(result)
```

目前我们的函数只能过滤出数组中age属性小于18的对象

我们希望过滤更加灵活

比如，过滤数组中age大于18 的对象

​								age大于60的对象

​								age大于n的对象

​			过滤数组中name为xxx的对象

​			过滤数组中的偶数

...

```
function filter(arr) {
	
	const newArr = []
	
	for(let i = 0; i < arr.length; i++){
		//arr[i].age >= 18
		//arr[i].age > 60
		//arr[i].age > n
		//arr[i].name === "xxx"
		//arr[i] % 2 === 0
		if(arr[i].age < 18){
			newArr.push(arr[i])
		}
	}
	
	return newArr
}
```

### 回调函数

###### 一个函数的参数也可以是函数

如果将函数作为参数传递，那么我们就称这个函数为回调函数(callback)

```
function filter(arr，cb) {
	
	const newArr = []
	
	//console.log("-->",cb)
	cb()
	
	for(let i = 0; i < arr.length; i++){
		//arr[i].age >= 18
		//arr[i].age > 60
		//arr[i].age > n
		//arr[i].name === "xxx"
		//arr[i] % 2 === 0
		if(arr[i].age < 18){
			newArr.push(arr[i])
		}
	}
	
	return newArr
}

result = filter(personArr,()=>{alert(111)})
console.log(result)
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230103095701592.png)

```
function filter(arr，cb) {
	
	const newArr = []
	
	//console.log("-->",cb)
	//cb()
	
	for(let i = 0; i < arr.length; i++){
		//arr[i].age >= 18
		//arr[i].age > 60
		//arr[i].age > n
		//arr[i].name === "xxx"
		//arr[i] % 2 === 0
		if(cb()){
			newArr.push(arr[i])
		}
	}
	
	return newArr
}

function fn(){
	return true
}

result = filter(personArr,fn)
console.log(result)
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230103100004128.png)

如果把function fn()中的true改成false

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230103100047584.png)

###### 继续优化

```
function filter(arr，cb) {
	
	const newArr = []
	
	//console.log("-->",cb)
	//cb()
	
	for(let i = 0; i < arr.length; i++){
		//arr[i].age >= 18
		//arr[i].age > 60
		//arr[i].age > n
		//arr[i].name === "xxx"
		//arr[i] % 2 === 0
		if(cb(arr[i])){
			newArr.push(arr[i])
		}
	}
	
	return newArr
}

function fn(a){
	return a.age < 18
}

result = filter(personArr,fn)
console.log(result)
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230103100307996.png)

我们这种定义回调函数的形式比较少见，通常回调函数都是匿名函数

### 高阶函数

如果一个函数的参数或返回值是函数，则这个函数就称为高阶函数

为什么要将函数作为参数传递？（回调函数有什么作用？）

将函数作为参数，意味着可以对另一个函数动态的传递代码

```
function filter(arr，cb) {
	
	const newArr = []

	for(let i = 0; i < arr.length; i++){
		if(cb(arr[i])){
			newArr.push(arr[i])
		}
	}
	
	return newArr
}

result = filter(personArr,a => a.name === "孙悟空")
result = filter(personArr,a => a.age >= 18)

const arr = [1,2,3,4,5,6,7,8,9,10]
result = filter(arr,a => a % 2 === 0)

console.log(result)
```

###### 使用场景二

希望在someFn()函数执行时，可以记录一条日志

在不修改原函数的基础上，为其增加记录日志的功能

可以通过高阶函数，来动态的生成一个新函数

```
function someFn() {
	return "hello"
}

function outer(cb){
	return () => {
		console.log("记录日志")
		const result = cb()
		return result
	}
}

let result = outer(someFn)

console.log(result)
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230103102658921.png)

```
function someFn() {
	return "hello"
}

function outer(cb){
	return () => {
		console.log("记录日志")
		const result = cb()
		return result
	}
}

let result = outer(someFn)

//console.log(result)

function test() {
	console.log("test~~")
	return "test"
}

let newTest = outer(test)

newTest()
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230103103005643.png)

#### `bind()`

`bind()`是函数的方法，可以用来创建一个新的函数

bind可以为新函数绑定this

bind可以为新函数绑定参数

```
function fn(){
	console.log("fn执行了")
}
fn.call()		//打印  fn执行了
fn.bind()		//啥也没有
```

当我们使用`bind()`的时候，并不会使得函数执行，他会给我们返回一个新的函数

```
function fn(){
	console.log("fn执行了")
}
const newFn = fn.bind()
newFn()
//打印  fn执行了
```

```
function fn(a,b,c) {
	console.log("fn执行了",this)
	console.log(a,b,c)
}
const obj = {name:"孙悟空"}
const newFn = fn.bind(obj)
newFn()
//此时a,b,c不固定
```

```
function fn(a,b,c) {
	console.log("fn执行了",this)
	console.log(a,b,c)
}
const obj = {name:"孙悟空"}
const newFn = fn.bind(obj,10)
newFn()
//此时表示把新函数的第一个实参固定为10，即a固定为10
```



## 闭包简介

创建一个函数，第一次调用时打印1，第二次调用时打印2，以此类推

```
let num = 0
function fn() {
	num++
	console.log(num)
}

fn()
```

防止num被修改，继续优化

```
function outer() {
	let num = 0	//位于函数作用域中
	return () => {
		num++
		console.log(num)
	}
}
const newFn = outer()
newFn()
```

可以利用函数，来隐藏不希望被外部访问到的变量

#### 闭包

闭包就是能访问到外部函数作用域中变量的函数

##### 什么时候使用

当我们需要隐藏一些不希望被别人访问的内容就可以使用闭包

##### 构成闭包的要点

1.函数的嵌套

2.内部函数要引用外部函数中的变量

3.内部函数要作为返回值返回

##### 闭包的原理

```
let a = "全局变量a"
function fn(){
	console.log(a)
}
function fn2(){
	let a = "fn2中的a"
	console.log(a)
}
fn2()
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230103104345454.png)

函数在作用域，在函数创建时就已经确定的（词法作用域），和调用的位置无关

```
let a = "全局变量a"
function fn(){
	console.log(a)
}
function fn2(){
	let a = "fn2中的a"
	fn()
}
fn2()
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230103104628167.png)

```
//接上面
function fn3(){
	let a = "fn3中的a"
	
	function fn4(){
		console.log(a)
	}
	
	fn4()
}

fn3()
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230103104906786.png)

```
//接上面
function fn3(){
	let a = "fn3中的a"
	
	function fn4(){
		console.log(a)
	}
	
	return fn4()
}

let fn4 = fn3()

fn4()
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230103104906786.png)

***闭包利用的就是词法作用域***

```
function outer(){
	let someVariable = "someValue"
	
	return function(){
		console.log(someVariable)
	}
}
outer()

function outer2(){
	let num = 0
	return () => {
		num++
		console.log(num)
	}
}
const fn1 = outer2()	//此时outer2产生一个独立闭包
const fn2 = outer2()	//独立闭包
//fn1,fn2都是独立的闭包，他们每一个都有自己的num，互不影响
fn1()
fn2()
```

##### 闭包的生命周期

1.闭包在外部函数调用时产生，外部函数每次调用都会产生一个全新的闭包

2.在内部函数丢失时销毁（内部函数被垃圾回收了，闭包才会消失）

```
function outer(){
	let someVariable = "someValue"
	return function(){
		console.log(someVariable)
	}
}
function outer2(){
	let num = 0
	return () => {
		num++
		console.log(num)
	}
}
let fn1 = outer2()	//独立闭包
let fn2 = outer2()	//独立闭包
fn1()
fn2()
fn1 = null	//闭包消失
fn2 = null
```

##### 闭包注意事项

闭包主要用来隐藏一些不希望被外部所访问的内容

这就意味着闭包需要占用一定的内存空间

*类是节省空间的，闭包是浪费空间的*

相较于类来说，闭包比较浪费空间（类可以使用原型而闭包不能）

需要执行次数较少时，使用闭包

需要大量创建实例时，使用类

### 递归

使用自身的函数称为递归函数

```
function fn(){
	fn()
}
fn()
```

**递归的作用和循环是基本一致的**

回顾循环

```
//创建一个函数，可以用来求任意数的阶乘
/*
	1！	1
	2！	1×2=2
	3！	1×2×3=6
	...
	10！	1×2×3×4×5×6×7×8×9×10=xxx
*/

function jieCheng(num){
	//创建一个变量用来记录结果
	let result = 1
	for(let i=2; i<=num; i++){
		result *= i
	}
	return result
}
let result = jieCheng(3)
console.log(result)
```

如何用递归来解决阶乘的问题？

5! = 4! × 5

4! = 3! × 4

3! = 2! × 3

2! = 1! × 2

1! = 1

递归的核心思想就是将一个大的问题拆分为一个一个小的问题，小的问题解决了，大的问题也就解决了

#### 编写递归函数，一定要包含两个条件

##### 1.基线条件——递归的终止条件

##### 2.递归条件——如何对问题进行拆分

```
function jieCheng2(num){
	//基线条件
	if(num === 1){
		return 1
	}
	//递归条件
	//num! = (num-1)! * num
	return jieCheng2(num-1) * num
}
result = jieCheng2(5)
/*
	jieCheng2(5)
		-return jieCheng2(4) * 5
			-return jieCheng2(3) *4
				-return jieCheng2(2) * 3
					-return jieCheng2(1) * 2
						-return 1
*/
console.log(result)
```

***递归的作用和循环是一致的，不同点在于，递归的思路比较清晰简洁，循环的执行性能比较好***

在开发中，一般的问题都可以通过循环解决，也是尽量去使用循环，少用递归

只在一些使用循环解决比较麻烦的场景下，才使用递归

###### 练习

一对兔子出生后的两个月后每个月都能生一对小兔子，编写一个函数，可以用来计算第n个月的兔子的数量

1	2	3	4	5	6	7	8	9	10	11	12

1	1	2	3	5	8	13	21	34......

规律

当前数等于前两个数之和（斐波那契数列）

```
//求斐波那契数列中的第n个数
function fib(n){
	//确定基线条件
	if(n < 3){
		return 1
	}
	//设置递归条件
	//第n个数 = 第n-1个数 + 第n-2个数
	return fib(n - 1) + fib(n - 2)	
}
let result = fib(6)
console.log(result)
```

## 可变参数

```
function fn(){
	console.log("我是一个函数")
}
fn()
//我是一个函数
```

#### arguments

arguments是函数中有一个隐含参数

arguments用来存储函数的实参

无论用户是否定义形参，实参否会存储到arguments对象中

可以通过该对象直接访问实参

```
function fn(){
	console.log(arguments)
}
fn()
```

```
function fn(){
	console.log(arguments.length)
}
fn()
//0
fn(1,10)
//2
fn(1,10,33)
//3
```

```
function fn(){
	console.log(arguments[0])
}
fn(1,10,33)
//1
//如果第二行arguments[1]，则输出10
//如果第二行arguments[2]，则输出33
```

可以用来遍历

法一

```
function fn(){
	for(let i = 0; i < arguments.length; i++) {
		console.log(arguments[i])
	}
}
fn(1,10,33)
/*遍历出1
	   10
	   33
*/	   
```

法二

```
function fn(){
	for(let v of arguments){
		console.log(v)
	}
}
fn(1,10,33)
//打印出的结果与法一相同
```

arguments是一个类数组对象（伪数组）

和数组相似，可以通过索引来读取元素，也可以通过for循环变量，但是他不是一个数组对象，不能调用数组的方法

所以如果调用数组的方法就会报错

```
function fn(){
	arguments.forEach(ele => console.log(ele))
}
fn(1,10,33)
```

定义一个数组，可以求任意个数值的和

```
function sum(a,b){
	return a + b
}
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230104095805356.png)

最后一个出现问题，因为上面只定义了两个形参，计算的时候也只计算了两个形参，所以进行修改

```
function sum(a,b,c){
	return a + b + c
}
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230104095953072.png)

仍然有问题，可以计算三个数了，但是如果算两个数就NaN

定义形参的缺点：要求定义的数量是确定的，没有办法通过形参实现真正意义上的任意一个数值

继续修改

通过arguments，可以不受参数数量的限制更加灵活的创建函数

```
function sum() {
	let result = 0
	for(let num of arguments) {
		result += num
	}
	return reult
}
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230104100303337.png)

在定义函数时可以将参数指定为可变参数

可变参数可以接收任意数量实参，并将他们统一存储到一个数组中返回

```
function fn2(...args){
	console.log(args)
}
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230104100942123.png)

**可变参数的作用和arguments基本是一致，但是也具有一些不同点：**

1.可变参数的名字可以自己指定

2.可变参数就是一个数组，可以直接使用数组的方法

3.可变参数可以配合其他参数一起使用

```
function sum2(...num){
	return num.reduce((a,b) => a + b,0)
}
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230104101334962.png)



```
function fn3(a,b){
	console.log(a,b)
	for(let v of arguments){
		console.log(v)
	}
}
fn3(123,456)
```

既可以通过a和b访问，也可以通过arguments访问

arguments中的实参和形参没有关系

即定义形参或者不定义形参，实参都在arguments当中，不会产生任何影响

这就导致arguments不能和形参配合使用

但是可变参数不一样，他可以和配合形参使用，比如

```
function fn3(...args) {
	console.log(args)
}
fn3(123,456)
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230104102050523.png)

如果只有一个可变参数，那么所有的参数都在这个可变参数里面

如果前边是一个参数a，一个参数b,后边是一个可变参数，那么fn中第一个参数会给a，第二个参数会给b，剩下的参数才会给可变参数

```
function fn3(a,b,...args) {
	console.log(args)
}
fn3(123,456)
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230104102330778.png)

```
function fn3(a,b,...args) {
	console.log(args)
}
fn3(123,456,"hello",true,"1111")
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230104102429209.png)

**当可变参数和普通参数一起使用时，需要将可变参数写到最后**

### 函数补充

###### 根据函数调用方式的不同，this的值也不同：

1.以函数形式调用，this是Window

```
function fn(){
	console.log(this)
}
//Window
```

2.以方法形式调用，this是调用方法的对象

```
const obj = {name:"孙悟空",fn}
obj.fn()
//{name:'孙悟空',fn:f}
```

3.构造函数中，this是新建的对象

4.箭头函数没有自己的this，由外层作用域决定

也无法通过call，apply和bind修改他的this

```
const arrowFn = () => {
	console.log(this)
}
arrowFn()
arrowFn.apply(obj)	//没用
arrowFn.call(obj)	//没用

const newArrowFn = arrowFn.bind(obj)
newArrowFn()	//没用

```

![](C:\Users\derder\Pictures\Screenshots\屏幕截图_20230104_103525.png)

```
class MyClass{
	fn = () => {
		console.log(this)
	}
}
const mc =new MyClass()
mc.fn	//MyClass {fn:f}
mc.fn.call(window)	//MyClass {fn:f}
```

箭头函数中没有arguments

```
const arrowFn = () => {
	console.log(arguments)
}
//报错
```

5.通过call和apply调用的函数，他们的第一个参数就是函数的this

6.通过bind返回的函数，this由bind第一个参数决定（无法修改）

###### 调用函数除了通过 `函数()` 这种形式外，还可以通过其他方式来调用函数

比如，我们可以通过调用函数的`call()`和`apply()`来个方法调用函数

`函数.call()`

`函数.apply()`

`fn.call()`  调用fn的call方法

```
function fn() {
	console.log(this)
}
const obj = {name:"孙悟空",fn}
fn.call()
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230104103527757.png)

```
function fn() {
	console.log("函数执行了",this)
}
const obj = {name:"孙悟空",fn}
fn.call()//等价于fn.apply()
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230104103749103.png)

call和apply除了可以调用函数，还可以用来指定函数中的this

```
function fn() {
	console.log("函数执行了",this)
}
const obj = {name:"孙悟空",fn}
fn.call(obj)
```

![](C:\Users\derder\AppData\Roaming\Typora\typora-user-images\image-20230104104144187.png)

call和apply的第一个参数，将会成为函数的this

通过call方法调用函数，函数的实参直接在第一个参数后一个一个的列出来

通过apply方法调用函数，函数的实参需要通过一个数组传递

```
function fn2(a,b){
	console.log("a=",a,"b=",b,this)
}
fn2.call(obj)
//a = undefined b = undefined 
```

```
function fn2(a,b){
	console.log("a=",a,"b=",b,this)
}
fn2.call(obj,1,2)
//a = 1 b = 2 
fn2.call(obj,"hello",true)
//a = hello b = true

fn2.apply(obj,"hello",true)
//报错
fn2.call(obj,["hello",true])
//a = hello b =true
```

# 内建对象

## 解构赋值

### 数组的解构

赋值的传统的麻烦的方式

```
const arr = ["孙悟空","猪八戒","沙和尚"]
let a,b,c
a = arr[0]
b = arr[1]
c = arr[2]
console.log(a,b,c)
//孙悟空 猪八戒 沙和尚
```

解构赋值

```
const arr = ["孙悟空","猪八戒","沙和尚"]
let a,b,c
[a,b,c] = ["孙悟空","猪八戒","沙和尚"]	
//等价于[a,b,c] = arr	//数组的解构赋值
console.log(a,b,c)
//孙悟空 猪八戒 沙和尚

let [d,e,f] = ["唐僧","白骨精","蜘蛛精"]
//声明同时解构
console.log(d,e,f)
//唐僧 白骨精 蜘蛛精

let [d,e,f,g] = ["唐僧","白骨精","蜘蛛精"]
console.log(d,e,f,g)
//唐僧 白骨精 蜘蛛精 undefined

let [d,e,f,g] = ["唐僧","白骨精","蜘蛛精","玉兔精"];
console.log(d,e,f,g);
//唐僧 白骨精 蜘蛛精 玉兔精

[d,e,f,g] = [1,2,3];
//报错，因为没有分号（之前写过笔记）
//解决方法，在句子后面或者前面加分号
//1 2 3 undefined

[d,e,f,g=10] = [1,2,3];
//关于g，如果等号后面的数组里面有他的值就会赋值，如果没有g就会=10
console.log(d,e,f,g)
//1 2 3 10

[d,e,f=77,g=10] = [1,2,3]
console.log(d,e,f,g)
//由于等号后面的数组里面有值，所以默认值f=77不会生效，所以打印的结果是
//1 2 3 10
```

```
let [d,e,f,g] = ["唐僧","白骨精","蜘蛛精","玉兔精"];
[d,e,f,g=g] = [1,2,3];
console.log(d,e,f,g);
//1 2 3 '玉兔精'
```

```
let [n1,n2] = [4,5,6,7]
console.log(n1,n2)		//4 5
```

解构数组时，可以使用...来设置获取多余的元素

```
let [n1,n2,...n3] = [4,5,6,7]
//...表示省略，剩下的，所以上面的意思是剩下的都给n3
console.log(n1,n2)		//4 5 [6,7]
```

可以通过解构赋值来快速交换两个变量的值

```
function fn(){
	return ["二郎神","猪八戒"]
}
let [name1,name2] = fn()
//可以通过解构赋值来快速交换两个变量的值
let a1 = 10
let a2 = 20
console.log("a1=",a1)	//a1 = 10
console.log("a2=",a2)	//a2 = 20

/*
//交换两个变量的值的常规操作
let temp = a1
a1 = a2
a2 = temp
console.log("a1=",a1)	//a1 = 20
console.log("a2=",a2)	//a2 = 10
*/

//利用解构赋值交换两个变量的值
;[a1,a2] = [a2,a1]
//[]写到左边意味着给a1,a2赋值，[]写到右边意味着这是一个数组，我们新建了一个数组，数组的第一个元素是a2也就是20，而数组的第一个元素就是a1也就是10,此时交换完成
//变量在等号左边和在等号右边时意义完全不同
//如果这句前面或者上一句后面不加分号就会报错
console.log("a1=",a1)	//a1 = 20
console.log("a2=",a2)	//a2 = 10

//解构赋值交换变量的值例二
const arr2 = ["孙悟空","猪八戒"];
console.log(arr2);	//孙悟空 猪八戒
[arr2[0],arr2[1]] = [arr2[1],arr2[0]];
console.log(arr2);	//猪八戒 孙悟空
```

数组中可以存储任意类型的数据，也可以存数组

```
const arr3 = [[1,2,3],[3,4,5]];
//在控制台输入arr3[0]出现[1,2,3],输入arr3[1]出现[3,4,5],如果想访问第一个元素中的第二个元素，就在控制台输入arr3[0][1]，就会打印出2
```

如果一个数组中的元素还是数组，则这个数组我们就成为是二维数组

遍历二维数组需要利用循环嵌套

```
const arr3 = [["孙悟空",18,"男"],["猪八戒",28,"男"]];
//这是一个二维数组，可以看成是一个表格，孙悟空18男可以看成表格的第一行，猪八戒28男可以看成表格的第二行

//对这个二维数组进行遍历
//第一个循环遍历外面的，第二个循环遍历里面的
for(let stu of arr3){
	for(let v of stu){
		console.log(v)
	}
}
//打印出
/*
	孙悟空
	18
	男
	猪八戒
	28
	男
*/
```

解构该二维数组

```
const arr3 = [["孙悟空",18,"男"],["猪八戒",28,"男"]];
let [[name,age,gender],obj] = arr3;
console.log(name,age,gender);	//孙悟空 18 男
console.log(obj);	//['猪八戒',28,'男']
```

解构赋值的作用就是把数组或者是对象拆开，拆开以后按照需要赋值给指定的变量

### 对象的解构

 数组解构用`[]`

对象解构用`{}`

{}在JS中代表着代码块

```
const obj = {name:"孙悟空",age:18,gender:"男"}

/*
//常规方法
let name = obj.name
let age = obj.age
let gender = obj.gender
*/

//解构的方法
let {name,age,gender} = obj
//声明变量同时解构对象

/*
//如果先声明再解构就会报错，例如一下
let name,age,gender
{name,age,gender} = obj
//因为{}在JS中代表着代码块，如果先声明再解构就是{}开头，就会被JS解析成代码块，所以就会报错
//解决方法：整体在外边套一个(),如下
let name,age,gender
({name,age,gender} = obj)
//孙悟空 18 男
*/

let {address} = obj;
console,log(address)	//undefined
//没有的属性返回undefined

console.log(name,age,gender)
//孙悟空 18 男
```

```
let {a,b,c} = obj
console.log(a,b,c)	
//undefined undefined undefined

let {name:a,age:b,gender:c,add="花果山"} = obj
console.log(a,b,c,add)
//孙悟空 18 男 花果山

//或者
let {name:a,age:b,gender:c,address:d="花果山"} = obj
console.log(a,b,c,d)
//孙悟空 18 男 花果山
```

### 对象的序列化

JS中的对象使用时都是存在于计算机的内存中的

```
const obj = {
	name:"孙悟空"
	age:18
}
console.log(obj)
//{name:'孙悟空',age:18}
```

序列化指将对象转换为一个可以存储的格式

在JS中对象的序列化通常是将一个对象转换为字符串（JSON字符串）

##### 序列化的用途（对象转换为字符串有什么用）

对象转换为字符串后，可以将字符串在不同的语言之间进行传递

甚至人可以直接对字符串进行读写操作，使得JS对象可以不同的语言之间传递

###### 用途：

1.作为数据交换的格式

2.用来编写配置文字

##### 如何进行序列化

在JS中有一个工具类JSON(JavaScript Object Notation)JS对象表示法

JS对象系列化后会换一个字符串，这个字符串我们称其为JSON字符串

```
const obj = {
	name:"孙悟空"
	age:18
}

//将obj转换为JSON字符串
const str = JSON.string(obj)
//JSON.stringfy()可以将一个对象转换为JSON字符串

console.log(obj)	//{name:'孙悟空',age:18}
console.log(str)	/{"name":"孙悟空","age":18}
console.log(typeof str)	//string

const obj2 = JSON.parse(str)	
//JSON.parse()可以将一个JSON格式的字符串转换为JS对象
console.log(obj2)	//{name:'孙悟空',age:18}
//obj === obj2	//false
```

也可以手动的编写JSON字符串，在很多程序的配置文件就是使用JSON编写的

```
const str2 = '{"name":"猪八戒","age":28}'
console.log(str2)	//{"name":"猪八戒","age":28}}
```

##### 编写JSON的注意事项

###### 1.JSON字符串又两种类型

JSON对象	`{}`

JSON数组	`[]`

```
const str3 = '{}'	//是JSON字符串
const str4 = '[]'	//是JSON字符串
const str5 = 'hello'	//不是JSON字符串
```

###### 2.JSON字符串的属性名必须使用双引号引起来

###### 3.JSON中可以使用的属性值（元素）

数字（Number）

字符串（String）必须使用双引号

布尔值（Boolean）

空值（Null）

对象（Object {}）

数组（Array []）

###### 4.JSON的格式和JS对象的格式基本上是一致的

注意：JSON字符串如果属性是最后一个，则不要再加

### JSON深复制

```
const obj = {
	name:"孙悟空"
	friend: {
		name:"猪八戒"
	},
}

//对obj进行浅复制
const obj2 = Object.assign({},obj)
console.log(obj2)

//对obj进行深复制
const obj3 = structuredClone(obj)

//利用JSON来完成深复制
const str = JSON.stringfy(obj)
const obj4 = JSON.parse(str)
//这两行等价于
const obj4 = JSON.parse(JSON.stringfy(obj))
```

### Map

Map用来存储键值对结构的数据（key-value）

Object中存储的数据就可以认为是一种键值对结构

Map和Object的主要区别：

Object中的属性名只能是字符串或者符号，如果传递了一个其他类型的属性名

JS解释器会自动将其转换为字符串

Map中任何类型的值都可以称作为数据的key

```
const obj = {
	"name":"孙悟空"
	'age':18
	[symbol()]:"哈哈"
}
console.log(obj)
//{name:'孙悟空',age:18,symbol():'哈哈'}
```

传字符串时指定属性名要加[]

```
const obj2 = {}
const obj = {
	"name":"孙悟空"
	'age':18
	[symbol()]:"哈哈"
	[obj2]:"嘻嘻"
}
console.log(obj)
//{name:'孙悟空',age:18,[object Object]:'嘻嘻',symbol():'哈哈'}
```

```
//创建一个Map
const map = new Map()
console.log(map)
//Map(0) {size:0}
```

```
//创建一个Map
const map = new Map()
map.set("name","孙悟空")
//Map(1) {'name' => '孙悟空'}
map.set(obj2,"呵呵")
//Map(2) {'name' => '孙悟空',{...} => '呵呵'}
map.set(NaN,"哈哈哈")
//Map(3) {'name' => '孙悟空',{...} => '呵呵',NaN => '哈哈哈'}

console.log(map)
console.log(map.get("name"))	//孙悟空
console.log(map.get(NaN))	//'哈哈哈'
```

#### 创建

`new Map()`

#### 属性和方法

`map.size()`获取map中键值对的数量

`map.set(key,value)`向map中添加键值对

`map.get(key)`根据key获取值

`map.delete(key)`删除指定数据

`map.has(key)`检查map中是否包含指定键

`map.clear()`删除全部的键值对

`map.keys()`获取map的所有的key

`map.values()`获取map的所有的value

```
const map = new Map()
map.set("name","孙悟空")
map.set("age",18)
//map.set({},"呵呵")

//将map转换为数组
//const arr = Array.from(map)
//[["name","孙悟空"],["age",18]]

const arr = [...map]

console.log(arr)
//[Array(2),Array(2)]
```

```
const map2 = new Map([["name","猪八戒"],["age",18],[{},()=>{}]])
console.log(map2)
//Map(3) {'name' => '猪八戒','age' => 18,{...} => f}
```

遍历map

```
for(const enrty of map){
	const [key,value] = entry
	console.log(entry)
}

for(const [key,value] of map){
	const [key,value] = entry
	console.log(key,value)
}

//法二
map.forEach(key,value)=>{
	console.log(key,value)
}

map.forEach(key,value,c)=>{
	console.log(key,value,c)
}
```

### Set

Set用来创建一个集合

他的功能和数组类似，不同点在于Set中不能存储重复的数据

```
//创建一个Set
const set = new Set()
//向Set中添加数据
set.add(10)
console.log(set)
//Set(1) {10}
```

```
//创建一个Set
const set = new Set()
//向Set中添加数据
set.add(10)
set.add("孙悟空")
console.log(set)
//Set(2) {10,'孙悟空'}
```

```
//创建一个Set
const set = new Set()
//向Set中添加数据
set.add(10)
set.add("孙悟空")
set.add(10)
console.log(set)
//Set(2) {10,'孙悟空'}
```

```
for(const item of set){
	console.log(item)
}
/*
	10
	孙悟空
*/
```

也可以转换成数组使用

```
const arr = [...set]
console.log(arr)
```

#### 使用方式

##### 创建

`new Set()`

`new Set([...])`

可以利用set对数组进行去重

```
const arr2 = [1,2,3,2,1,3,4,5,4,6,7,7,8,9,10]
const set2 = new Set(arr2)
console.log([...set2])
//[1,2,3,4,5,6,7,8,9,10]
```

##### 方法

`size`获取数量

`add()`添加元素

`has()`检查元素

`delete()`删除元素

### Math

Math是一个工具类

Math中为我们提供了数学运算相关的一些常量和方法

#### 常量

`Math.PI`	圆周率

等

#### 方法

`Math.abs()`求一个属的绝对值

`Math.min()`求多个值中的最小值

`Math.max()`求多个值中的最大值

`Math.pow()`求x的y次幂

`Math.sqrt()`求一个数的平方根

`Math.floor()`向下取整

`Math.ceil()`向上取整

`Math.round()`四舍五入取整

`Math.trunc()`直接去除小数位

`Math.random()`生成0-1之间的一个随机数

```
let result = Math.abs(10)	//10
result = Math.abs(-10)	//10

result = Math.min(10,20,30,44,55,-1)	//-1
result = Math.max(10,20,30,44,55,-1)	//55

result = Math.pow(2,3)	//8
result = Math.pow(4,2)	//16	//等价于4 ** 2

result = Math.sqrt(4)	//2		//等价于4 ** .5

result = Math.floor(1.1)	//1
result = Math.floor(2.9999)		//2

result = Math.ceil(1.2)		//2

result = Math.round(1.4)	//1
result = Math.round(1.5)	//2

result = Math.trunc(1.5)	//1

result = Math.random()		//0-1的随机数

for(let i = 0; i < 50; i++){
	//生成0-5之间的随机数
	//Math.random() --> 0-1
	result = Math.round(Math.random() * 5)
	console.log(result)
}

//生成0-x之间的随机数
//Math.round(Math.random() * x)

console.log(result)
```

生成0-x之间的随机数
`Math.round(Math.random() * x)`

`Math.floor(Math.random() * (x + 1))`

生成x-y之间的随机数

`Math.round(Math.random() * (y-x) + x)`

### Date

#### Date

在JS中所有的和时间相关的数据都有Date对象来表示

```
let d = new Date()
//直接通过new Date()创建时间对象时，她创建的是当前的时间的对象

//可以在Date()的构造函数中，传递一个表示时间的字符串
d = new Date("2019-12-23T23:34:35")
```

直接通过`new Date()`创建时间对象时，她创建的是当前的时间的对象

可以在`Date()`的构造函数中，传递一个表示时间的字符串

字符串的格式

1.`月/日/年 时:分:秒`

2.`年-月-日T时:分:秒`

3.`年,月,日,时,分,秒,毫秒`

#### 对象的方法

`getFullYear()`获取四位年份

`getMonth()`返回当前日期的月份的索引(0-11)

`getDate()`返回当前是几日

`getDay()`返回当前日期是周几(0-6),0表示周日

`getTime()`返回当前日期对象的时间戳

###### 时间戳

自1970年1月1日0时0分0秒到当前时间所经历的毫秒数

计算机底层存储时间时，使用的都是时间戳

```
d = new Date()
result = d.getFullYear()	//2022
result = d.getMonth()	//0
result = d.getDate()	//5
result = d.getDay()
result = d.getTime()

console.log(result)
```

`Date.now()`获取当前的时间戳

#### 日期的格式化

```
const d = new Date()

let result = d.tolocalDateString()
//将日期转换为本地的字符串
//2023/1/5
result = d.tolocalTimeString()
//将时间转换为本地的字符串
//9:37:20
result = d.tolocalString()
//2023/1/5 9:37:20

console.log(result)
```

##### `tolocalString()`

可以将一个日期转换为本地时间格式的字符串

###### 参数

1.描述语言和国家信息的字符串

​		`zh-CN` 	中文中国

​		`zh-HK` 	中文香港

​		`en-US` 	英文美国

```
result = d.tolocalString("zh-CN")

console.log(result)
```

2.需要一个对象作为参数，在对象中可以通过对象的属性来对日期的格式进行配置

```
result = d.tolocalString("zh-CN",{dateStyle:"full"})
//2023年1月5日星期四

result = d.tolocalString("zh-CN",{dateStyle:"full",timeStyle:"full"})
//2023年1月5日星期四 中国标准时间 9:44:20
```

**`dateStyle`	日期的风格**

**`timeStyle`	时间的风格**

​	`full`

​	`long`

​	`medium`

​	`short`

**`hour12`	是否采用12小时制**

​	`true`

​	`false`

**`weekday`	星期的显示方式**

​	`long	//星期四`

​	`narrow	//四`

​	`short	//周四`

**`year`**

​	`2-digit	//22年`

​	`numerid	//2022年`

### 包装类

#### 在JS中，除了直接创建原始值外，也可以创建原始值的对象

1.通过 `new String()`	可以创建String类型的对象

2.通过 `new Number()`	可以创建Number类型的对象

3.通过 `new Boolean()`	可以创建Boolean类型的对象

但是千万不要这么做

```
let str = new String("hello")
let num = new Number(11)
let bool = new Boolean(true)
let bool2 = new Boolean(true)

//alert(bool === bool2)	//false

console.log(str)
```

#### 包装类

JS中一共有5个包装类

​	1.`String` -->字符串包装为String对象

​	2.`Number` -->数值包装为Number对象

​	3.`Boolean` -->布尔值包装为Boolean对象

​	4.`BigInt`-->大整数包装为BigInt对象

​	5.`Symbol`-->符号包装为Symbol对象

通过包装类可以将一个原始值包装为一个对象

当我们对一个原始值调用方法或属性时，JS解释器会临时将原始值包装为对应的对象

然后调用这个对象的属性或方法

```
let str = "hello"
str.name = "哈哈"
console.log(str.name)

let num = 11
num = num.toString()
console.log(num)	//11
```

由于原始值会被临时转换为对应的对象，这就意味着对象中的方法都可以直接通过原始值来调用

### 字符串的方法

[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

#### 字符串

字符串其本质就是一个字符数组

"hello" --> ["h","e","l","l","o"]

字符串的很多方法都和数组是非常类似的

##### 属性和方法

###### `length` 	

获取字符串的长度

###### `字符串[索引]`	

获取指定位置的字符

```
let str = "hello"
//console.log(str[0])

//用for-of进行遍历
for(let char of str){
	console.log(char)
}
```

###### `str.at()`	(实验方法)

根据索引获取字符，可以接收负索引

```
console.log(str.at(0))
```

###### `str.charAt()`

根据索引获取字符

```
console.log(str.charAt(0))
```

###### `str.concat()`

用来链接两个或多个字符串

###### `str.includes()`

用来检查字符串中是否包含某个内容

​	有返回true

​	没有返回false

```
str = "hello hello how are you"
console.log(str.includes("how",13))
```

###### `str.indexOf()`

###### `str.lastIndexOf()`

查询字符串中是否包含某个内容

###### `str.startsWith()`

检查一个字符串是否以指定内容开头

###### `str.endsWith()`

检查一个字符串是否以指定内容结尾

```
console.log(str.endsWith("you"))
```

###### `str.padStart()`

###### `str.padEnd()`

通过添加指定的内容，使字符串保持某个长度

```
str = "100"
console.log(str.padStart(7,"0"))
//用0填充前面的空格
```

###### `str.replace()`

使用一个新字符串替换一个指定内容

###### `str.replaceAll()`

使用一个新字符串替换所有指定内容

```
str = "hello hello how are you"
let result = str.replace("hello","abc")
console.log(result)
//abc hello how are you
let result = str.replaceAll("hello","abc")
console.log(result)
//abc abc how are you
```

###### `str.slice()`

对字符串进行切片

```
str = "hello hello how are you"
result = str.slice(12,15)
console.log(result)
```

###### `str.subString()`

截取字符串

```
str = "hello hello how are you"
result = str.subString(12,15)
//等价于result = str.subString(15,12)
console.log(result)
```

###### `str.split()`

用来将一个字符串拆分为一个数组

```
str = "abc@bcd@efg@jqk"
str.split("@")
//["abc","bcd","efg","jqk"]
```

###### `str.toLowerCase()`

将字符串转换为小写

###### `str.toUpperCase()`

将字符串转换为大写

###### `str.trim()`

去除前后空格

###### `str.trimStart()`

去除开始空格

###### `str.trimEnd()`

去除结束空格

### 正则表达式

正则表达式用来定义一个规则

通过这个规则计算机可以检查一个字符串是否符合规则

或者将字符串中符合规则的内容提取出来

正则表达式也是JS中的一个对象

所以要使用正则表达式，需要先创建正则表达式的对象

#### 创建

1.使用构造函数创建

 `new RegExp()`	可以接收两个参数（字符串）

1.正则表达式 2.匹配模式

```
//new RegExp()	可以接收两个参数（字符串）1.正则表达式 2.匹配模式
let reg = new RegExp("a","i")
//通过构造函数来创建一个正则表达式的对象
console.log(reg)	//  /a/i
```

2.使用字面量来创建正则表达式：`/正则/匹配模式`

```
reg = /a/i
```

```
reg = /\w/	//  /\w/
reg = new RegExp("\\w")		//没有\了
```

通过正则表达式检查一个字符串是否符合规则

```
let str = "a"	//  /a/
result = reg.test(str)
//用这个正则表达式去检查这个字符串是否符合规则，然后相应的返回true和false
//true
result = reg.test("b")	//false
result = reg.test("abc")	//true
result = reg.test("bcabc")	//true

//所以可以看出来/a/表示:检查一个字符串中是否有a
```

#### 正则表达式的规则

```
let re = /ab/
let result = re.test('abc')	//true
let result = re.test('acb')	//false

let re = /abc|bcd/
re = /[ab]/	//a或b
```

##### 1.在正则表达式中大部分字符都可以直接写

##### 2.`|` 在正则表达式中表示或

##### 3.`[]` 表示或（字符集）

###### `[a-z]` 

任意的小写字母

###### `[A-Z]` 

任意的大写字母

###### `[a-zA-Z] `

任意的字母

###### `[0-9]` 

任意数字

```
re = /[a-z]/i
//匹配模式i表示忽略大小写
```

##### 4.`[^]` 表示除了

​	`[^x]` 除了x

```
re = /[^a-z]/	//匹配包含小写字母以外的字符串
let result = re.test('H')	//true
let result = re.test('h')	//false
let result = re.test('aH')	//true
```

##### 5.`.` 表示除了换行外的任意字符

```
re = /./
let result = re.test('a')	//true
let result = re.test('7878')	//true
let result = re.test('\t')	//true
let result = re.test('\n')	//false
```

##### 6.在正则表达式中使用 `\` 作为转义字符

```
re = /\./	//表示一个单纯的.
```

##### 7.其他的字符集

###### `\w` 

任意的单词字符,即可以在单词中出现的字符，等价于 `[A-Za-z0-9_]`

###### `\W` 

除了单词字符 `[^A-Za-z0-9]`

###### `\d` 

任意数字 `[0-9]`

###### `\D` 

除了数字 `[^0-9]`

###### `\s` 

空格

###### `\S` 

除了空格

###### `\b` 

单词边界

###### `\B` 

除了单词边界

##### 8.开头和结尾

###### `^`

表示字符串的开头

###### `$`

表示字符串的结尾

```
re = /^/	//检查字符串有没有开头
re = /^a/	//匹配开始位置的a
re = /^a$/	//开始紧接着一个a就结束了
//即只匹配字母a，安全匹配，要求字符串必须和正则完全一致
let result = re.test('a')	//true
let result = re.test('aa')	//false
```

#### 量词

```
let re = /aa/
let result = re.test("aa")	//true
let result = re.test("a")	//false
console.log(result)

re = /a{20}/
//表示前面的a出现20次，即20个a
re = /^a{20}$/
//表示只有3个a

//量词只对前面的起作用
re = /^ab{3}$/
//abbb
re = /^(ab){3}$/
//ababab

re = /^[a-z]{3}$/
//任意三个字母

re = /^[a-z]{1,}$/
//一个以上字母
```

##### `{m}`

正好m个

##### `{m,}`

至少m个

##### `{m,n}`

m-n个

##### `+`

一个以上，相当于 `{1,}`

```
re = /^ba+$/
```

##### `*`

任意数量的a

```
re = /^ba*$/
```

##### `?`

0-1次，{0,1}

```
re = /^ba?$/
```

#### `re.exec()`

获取字符串中符合正则表达式的内容

```
let str = "abcaecafcacc"
//提取出str中符合axc格式的内容

let re = /a[a-z]c/i
//默认情况下只会匹配第一个

let re = /a[a-z]c/ig
//全部匹配

let result = re.exec(str)

console.log(result)
```

g表示全局匹配

```
let re = /a(([a-z])c)/ig
let result = re.exec(str)

while(result){
	console.log(result[0],result[1],result[2])
	result = re.exec(str)
}
```

#### 练习

dajsdh137135678903jasdlakdkjg13457890657djashdjka13811678908sdadadadadasd

将其中的电话号搞出来

用自己的语言把表达式描述出来

​	1	3	501789087

​	1	3-9之间	任意数字×9

```
let str = "dajsdh13713568903jasdlakdkjg13457890657djashdjka13811678908sdadadadadasd"

let re = /1[3-9]\d{9}/g

let result 

while ((result = re.exec(str))) {
	console.log(result[0])
}
/*
13713568903
13457890657
13811678908
*/
```

```
let str = "dajsdh13713568903jasdlakdkjg13457890657djashdjka13811678908sdadadadadasd"

let re = /(a[3-9]\d)\d{4}(\d{4})/g

let result 

while ((result = re.exec(str))) {
	console.log(result[1]+"****"result[2])
}
/*
137****8903
134****0657
138****8908
*/
```

### 字符串

#### `split()`

可以根据正则表达式来对一个字符串进行拆分

```
let str = "a@b@c@d"
let result = str.split("@")
//['a','b','c','d']

str = "孙悟空ab猪八戒adc沙和尚"
result = str.split(/a[bd]c/)
console.log(result)
//['孙悟空','猪八戒','沙和尚']
```

#### `search()`

可以去搜索符合正则表达式的内容第一次在字符串中出现的位置

```
str = "dajsdh13713568903jasdlakdkjg13457890657djashdjka13811678908sdadadadadasd"
result = str.search("abc")
result = str.search(/1[3-9]\d{9}/)
console.log(result)		//6
```

#### `replace()`

根据正则表达式替换字符串中的指定内容

```
result = str.replace(/1[3-9]\d{9}/g,"哈哈哈")
//dajsdh哈哈哈jasdlakdkjg哈哈哈djashdjka哈哈哈sdadadadadasd
```

#### `match()`

根据正则表达式去匹配字符串中符合要求的内容

```
result = str.match(/1[3-9]\d{9}/g)
//['13713568903','13457890657','13811678908']

result = str.matchAll(/1[3-9]\d{9}/g)
//RegExpStringIterator{}
```

#### `matchAll()`

根据正则表达式去匹配字符串中符合要求的内容(必须设置g,全局匹配)

她返回的是一个迭代器

拿到迭代器以后用for-of去遍历

```
for(let item of result){
	console.log(item)
}
```

