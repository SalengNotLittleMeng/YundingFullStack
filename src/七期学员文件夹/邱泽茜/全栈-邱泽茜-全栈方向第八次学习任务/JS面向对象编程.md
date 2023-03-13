## 面向对象编程

当我们在代码中用对象表示实体时，就是所谓的面向对象编程，简称为 “OOP”。

### 对象方法this

#### 方法

 作为对象属性的函数被称为**方法**。 

```javascript
let user = {
  name: "John",
  age: 30
};
user.sayHi = function() {
  alert("Hello!");
}; //得到了 user 对象的 sayHi 方法。
user.sayHi(); // Hello!
```

我们也可以使用预先声明的函数作为方法，就像这样：

```javascript
let user = {
  // ...
};
// 首先，声明函数
function sayHi() {
  alert("Hello!");
}
// 然后将其作为一个方法添加
user.sayHi = sayHi;
user.sayHi(); // Hello!
```

#### 方法中的this

对象方法需要访问对象中存储的信息才能完成其工作。例如，`user.sayHi()` 中的代码可能需要用到 `user` 的 name 属性。**为了访问该对象，方法中可以使用 `this` 关键字。**`this` 的值就是当前所在的对象，即调用该方法的对象。举个例子：

```javascript
let user = {
  name: "John",
  age: 30,
  sayHi() {
// "this" 指的是“当前的对象”，在这里 user.sayHi() 执行过程中，this 的值是user。
    alert(this.name);
  }
};

user.sayHi(); // John
```

虽然可以在不使用 `this` 的情况下，通过外部变量名来引用它，但这样的代码是不可靠的。如果我们决定将 `user` 复制给另一个变量，例如 `admin = user`，并赋另外的值给 `user`，那么它将访问到错误的对象。

`this` 关键字与其他大多数编程语言中的不同，JavaScript 中的 `this` 可以用于任何函数，即使它不是对象的方法，this的值通过上下文被计算出来。例如，这里相同的函数被分配给两个不同的对象，在调用中有着不同的 “this” 值：

```javascript
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// 在两个对象中使用相同的函数
user.f = sayHi;
admin.f = sayHi;

// 这两个调用有不同的 this 值
// 函数内部的 "this" 是“点符号前面”的那个对象
user.f(); // John（this == user）
admin.f(); // Admin（this == admin）

admin['f'](); // Admin（使用点符号或方括号语法来访问这个方法，都没有关系。）
```

**在没有对象的情况下调用：`this == undefined`**

我们甚至可以在没有对象的情况下调用函数，在这种情况下，严格模式下的 `this` 值为 `undefined`。如果我们尝试访问 `this.name`，将会报错。：

```javascript
function sayHi() {
  alert(this);
}

sayHi(); // undefined
```

在非严格模式的情况下，`this` 将会是 **全局对象**（浏览器中的 `window`）。通常这种调用是程序出错了。如果在一个函数内部有 `this`，那么通常意味着它是在对象上下文环境中被调用的。

#### 总结

- 存储在对象属性中的函数被称为“方法”。
- 方法允许对象进行像 `object.doSomething()` 这样的“操作”。
- 方法可以将对象引用为 `this`。

`this` 的值是在程序运行时得到的。

- 一个函数在声明时，可能就使用了 `this`，但是这个 `this` 只有在函数被调用时才会有值。
- 可以在对象之间复制函数。
- 以“方法”的语法调用函数时：`object.method()`，调用过程中的 `this` 值是 `object`。



### 构造器和操作符new

一个函数通过`new`来调用，该函数即为构造函数。

**构造函数的两个约定：**

1. 它们的命名以大写字母开头。
2. 它们只能由 `"new"` 操作符来执行。

**new function() { … }**

如果我们有许多行用于创建单个复杂对象的代码，我们可以将它们封装在一个立即调用的构造函数中，像这样：

```javascript
// 创建一个函数并立即使用 new 调用它
let user = new function() {
  this.name = "John";
  this.isAdmin = false;
  // ……用于用户创建的其他代码
  // 也许是复杂的逻辑和语句
  // 局部变量等
};
```

这个构造函数不能被再次调用，因为它不保存在任何地方，只是被创建和调用。因此，这个技巧旨在封装构建单个对象的代码，而无需将来重用。



### 类

类是对象模板，通过一个类创建的对象称为同类对象。可以将类对象中的属性和方法直接定义在类中，定义后就可以通过类来批量创建同类对象。

`instanceof`：检查一个对象是否是由某个类来创建的。如果一个对象是由某个类所创建，称这个对象为该类的**实例**。通过类添加的属性，称为该类的**实例属性**，实例属性只能通过实例来访问。

在类中添加方法，为实例方法，实例方法中的this就是当前实例。

通过`static`声明的属性称为**静态属性**，也叫做**类属性**。通过`static`创建的方法称为**静态方法**，也叫做**类方法**，类方法中的this指向的是当前所在的类。类属性和类方法只能通过类去访问，实例对象访问不到。

#### constructor

类中有一个特殊的方法`constructor()`，称为**构造方法（构造函数）**。当我们通过`new`来调用类创建实例对象的时候，就是在调用类的构造函数，构造函数执行。

```javascript
class Person{
    constructor(a,b,c){
        console.log("构造函数执行~") // 构造函数
        this.name = a
        this.age = b
        this.gender = c
    }
}
const p = new Person("小明",18,"男") // 调用构造函数，参数传入构造函数中
```



### 面向对象的特点

#### 封装

对象不仅用来储存不同属性，还要负责数据的安全。直接添加到对象中的属性可以被任意修改，并不安全。这时**私有化数据**确保数据的安全。私有化数据将需要保护的数据设为私有，只能在类内部使用，并提供**setter和getter方法**开放对数据的操作。

实现封装的方式：

1.私有化属性：在属性名前加#。

2.通过**setter和getter方法**来操作属性

```markdown
class Person{
	get 属性名(){
	return this.#属性 // 用来读取属性
	}
	set 属性名(参数){
	this.#属性 = 参数 // 用来设置属性
	}
}
const p = new Person()
console.log(p.属性名) // 调用getter和setter方法
```

#### 多态

在JS中不会检查参数的类型，任意数据都可以作为参数传递。调用某个函数无需指定类型，只要对象满足某些条件即可。

#### 继承

实际上通过原型对象来实现。

```javascript
class Animal{}
class Dog extends Animal{}
const dog = new Dog()

// 原型链：dog -> Animal的实例 -> Object实例 -> Object原型
// instanceof实际检查的是对象的原型链上是否有该类实例：
console.log(dog instanceof Dog) // true
console.log(dog instanceof Animal) // true
console.log(dog instanceof Object) // true
```

Object 是所有对象的原型，任何对象和 Object 进行 `instanceof` 运算都会返回 true。

`对象.hasOwnproperty('属性名')`：用来检查一个对象自身是否含有某个属性。



### 原型对象prototype

直接通过对象所添加的属性，和在类中通过等号形式添加的属性，储存在对象自身中。

在类中通过`xxx(){...}`方式添加的方法，以及主动向原型中添加的属性或方法，位于原型对象中。

原型对象中的数据一般包括：

- 对象中的属性和方法；
- 对象的构造函数`constructor`。

对象中`__proto__`属性用来储存**原型对象**，当访问对象中的属性时，会优先访问对象自身的属性，当对象自身不包含该属性时，就会在原型对象中寻找。

访问原型对象：

```markdown
对象.__proto__
Object.getPrototypeOf(对象)
```

所有同类对象的原型对象都是同一个，即同类对象的**原型链**相同。原型对象相当于一个公共的区域，可以被该类的所有实例访问，实例的公共属性（方法）储存统一到原型中，这样只要创造一个属性就可以被所有实例访问。



### 闭包

函数的外层作用域在函数创建时就已确定（词法作用域），和调用的位置无关。例如：

```javascript
let a = "我是全局变量a"
function fn1(){
    console.log(a)
}
function fn2(){
    let a = "我是fn2中的a"
    fn1()
}
fn2()// 我是全局变量a 
     // 作用域由定义的位置决定，fn1定义在全局，所以它的外层作用域也在全局
```

闭包就是能访问到外部函数作用域中变量的函数，可以使用它来隐藏一些不希望被人访问的内容。

**形成闭包的条件：**

1. 函数的嵌套
2. 内部函数引用外部函数中的变量
3. 内部函数作为外部函数的返回值返回

闭包的生命周期：闭包在外部函数调用时产生，每调用一次外部函数都会产生一个全新的闭包。在内部函数丢失时销毁。

例如：

```javascript
function outer(){
    let num = 0
    return () => {      //返回一个匿名函数
        num++
        console.log(num)
    }                   // 记录函数调用的次数
}
const fn1 = outer()
const fn1 = outer()     // 两个独立的闭包，占用两块不同的内存空间
                        // 相较于类可以使用原型，闭包比较浪费内存空间
fn1()
fn2()                   // 分别调用，num的值相互不受影响
```



### 递归

调用自身的函数称为递归函数。

递归函数的两个条件：

1. 基线条件：递归终止的条件
2. 递归条件：对问题的拆分

例如，创建一个函数求任意数的阶乘：

```javascript
function jiecheng1(num){
    let result = 1 // 创建一个变量用来记录结果
    for(let i = 2; i <= num; i++){
        result *=i
    }
    return retult
}

//用递归函数来解决：
function jiecheng2(num){
    //基线条件
    if(num === 1){         
        return 1
    }
    // 递归条件 num! = (num-1)!*num
    return jiecheng2(num-1)*num
}
```

