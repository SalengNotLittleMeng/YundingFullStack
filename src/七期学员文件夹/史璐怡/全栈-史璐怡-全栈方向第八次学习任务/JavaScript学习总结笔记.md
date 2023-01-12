# 认识JS

**注意:**

1、“;”分号要在英文状态下输入

2、JS严格区分大小写

3、在]S中多个空格和换行会被忽略

4、JS中每条语句都应该以分号结尾。]S中具有自动添加分号的机制，所以如果不写分号解释器会自动添加（建议自己写）


## JS在HTML中的位置

我们可以将JavaScript代码放在html文件中任何位置，但一般放在网页的head或者body部分。

最常用的方式是在页面中head部分放置`<script>`元素，**浏览器解释html时是按先后顺序的**，所以前面的script就先被执行，然后才解析页面的其余部分。


## 引用JS外部文件
JavaScript文件(简称JS文件),其文件后缀通常为.js，然后将JS代码直接写在JS文件中。**注意:在JS文件中，不需要`<script>`标签,直接编写JavaScript代码就可以了。**

将JS文件嵌入HTML文件中。

```
<html>
  <head>
    <script src="xxxx.js"></script>
  </head>
  <body>
  </body>
</html>
```




## 注释

注释可分为单行注释与多行注释两种。

单行注释，在注释内容**前**加符号 “//”。（ps：加在后面没用）
多行注释以"/\*"开始，以"\*/"结束。


## 标识符

命名时的一些规则：

1. 1、标识符只能含有字母、数字、_和$，且不能以数字开头。
2. 2、标识符不能是JS中的关键字和保留字。
3. 3、标识符需要使用固定的命名方式：
   1. （1）常规，驼峰命名法：首字母小写，单词开头大写。例如：maxlength -> maxLength
   2. （2）类名，大驼峰命名法：首字母大写，单词开头大写。例如：maxlength -> MaxLength
   3. （3）常量，全都使用大写，字母使用_分开。例如：maxlength -> MAX_LENGTH

## 常量
语法：
```
const xx=xxxxx;
```
在JS中，使用const声明常量，常量只能赋值一次，重复赋值会报错。


## 变量

定义变量使用关键字var,语法如下：

```
var 变量名;
```
**变量名可以任意取名，但要遵循命名规则:**

  1.变量必须使用字母、下划线(_)或者美元符($)开始。

  2.然后可以使用任意多个英文字母、数字、下划线(_)或者美元符($)组成。

  3.不能使用JavaScript关键词与JavaScript保留字。

**注意:** **在JS中区分大小写**，如变量mychar与myChar是不一样的，是两个变量。

## typeof运算符
用法举例：
```
console.log(typeof a);
```
typeof用来检查不同的值的类型，它会根据不同的值返回不同的结果。

强调：typeof运算符检查的是值的类型，不是变量的类型，变量没有类型。

# 原始值

**原始值都是不可变的值一旦创建就无法修改！**

JS中原始值一共有七种
    1. Number
        2. BigInt
        3. String
        4. Boolean
        5. Null
        6. Undefined
        7. Symbol

## 数值

在JavaScript中整数和小数都是数值类型。

数值并不是无限大的，当超过一定范围后数值会自动显示近似值，再超过范围会以科学计数法的形式显示，再超过范围会显示为`Infinity`。所以尽量不要直接使用数值做一些精度要求较高的运算。

使用typeof运算符检查一个数值时会返回`"number"`。

```
let a = 10
let b = 2.5
let c = 9999999999999991 // 9999999999999992
let d = 999999999999999999999 // 1e+21
let e = 999 ** 999 // Infinity
let f = 1.9999999999999999 // 2
let g = 0.0000005 // 5e-7
```

除了常规的数字外，在数值中还存在两个特殊值`NaN`和`Infinity`。

NaN —— 错误的数值

Infinity —— 无穷

## 大整数

注意只是整数。大整数使用n结尾，大整数可以是无限大的（还要看你的内存大写），且**大整数只能和大整数计算**，和数值计算会报错。

使用typeof检查一个大整数时会返回`"bigint"`

```
let a = 9999999999999999999999n
```

## 字符串

JavaScript中字符串需要使用引号引起来，单引号和双引号都是可以的，没有本质区别。引号中间的内容是不可以换行的（除非加\），但是模板字符串可以。

使用typeof运算符检查一个字符串时会返回`"string"`。

```
let a = "今天天气真不错"
let b = '昨天天气也挺好'
```

### 转义字符

JavaScript中使用`/`作为转义字符，转义字符用以表示一些特殊的符号，比如：

| 转义字符 | 字符串      |
| -------- | ----------- |
| \’       | ‘           |
| \”       | “           |
| \\       | \           |
| \n       | 换行        |
| \t       | 制表符      |
| \uxxxx   | Unicode编码 |

### 模板字符串

可以**跨行**且**可以直接向字符串中嵌入变量**，使用`返单引号`表示模板字符串，在模板字符串中使用`${变量}`来嵌入变量：

```
let str = `锄禾日当午
汗滴禾下土
谁知盘中餐
粒粒皆辛苦
`
let name = "孙悟空"
let str = `大家好，我是${name}`
```

## 布尔值

布尔值用来进行逻辑判断

只有两个`true`和`false`

使用typeof检查时会返回`"boolean"`

true —— 真

false —— 假

```
let a = true
let b = false
```

## 空值

只有一个值`null`。

使用typeof检查时会返回`"object"`

使用typeof无法检查空值

```
let a = null
```

## 未定义

当声明一个变量而没有赋值时，它的值就是Undefined。

使用typeof检查时会返回`"undefined"`

```
let a // 此时a的值就是undefined
```

## 符号

符号比较特殊，用以表示一个唯一标识，在一些特殊场景下使用，现在简单了解一下即可。

使用typeof检查一个符号时会返回`"symbol"`

```
let a = Symbol()
```

## 类型转换

类型转换指将一种数据类型转换为其他类型，将其他类型转换为（字符串、数值和布尔值）

- 转换为字符串
      1. 调用`toString()`方法将其他类型转换为字符串
          调用xxx的yyy方法--> xxx.yyy()
          由于null和undefined中没有toString()，所以对这两个东西调用toString()时会报错
      2. 调用`String()`函数将其他类型转换为字符串
    调用xxx函数 --> xxx()
    原理：
        （1）对于拥有toString()方法的值调用String()函数时，实际上就是在调用toString()方法
        （2）对于null，则直接转换为"null"
        （3）对于undefined，直接转换为"undefined"

- 将其他的数据类型转换为数值

  1. 使用`Number()`函数来将其他类型转换为数值
         转换的情况：
             字符串：
                 如果字符串是一个合法的数字，则会自动转换为对应的数字
                 如果字符串不是合法数字，则转换为NaN
                 如果字符串是空串或纯空格的字符串，则转换为0
             布尔值：
                 true转换为1，false转换为0
             null 转换为 0
             undefined 转换为 NaN

  2. 专门用来将字符串转换为数值的两个方法           
         `parseInt() `—— 将一个字符串转换为一个整数
             解析时，会自左向右读取一个字符串，直到读取到字符串中所有的有效的整数。
             也可以使用parseInt()来对一个数字进行取整
         `parseFloat()` —— 将一个字符串转换为浮点数 
             解析时，会自左向右读取一个字符串，直到读取到字符串中所有的有效的小数。

- 使用Boolean()函数来将其他类型转换为布尔值
      1、数字：
          0 和 NaN 转换为false
          其余是true
      2、字符串：
          空串 转换为 false
          其余是true
      3、null和undefined 都转换为 false
      4、对象：对象会转换为true
  所有表示空性的没有的错误的值都会转换为false： 0、NaN、空串、null、undefined、false

# 对象

对象是JS中的一种复合数据类型，它相当于一个容器，在对象中可以存储各种不同类型数据。为了方便使用，通常需要将对象赋值给变量。
创建对象：
```
let obj = new Object()
//或者
let obj = Object()
//或者
let obj = {}
```
对象中可以存储多个各种类型的数据。对象中存储的数据，我们称为属性。
向对象中添加属性：
```
对象.属性名 = 属性值
```
读取对象中的属性：
```
对象.属性名
```

修改属性：
```
obj.name "Tom"
```
删除属性：
```
delete obj.name
```

也可以使用符号(symbo1)作为属性名来添加属性。获取这种属性时，也必须使用symbol。使用symbo1添加的属性，通常是那些不希望被外界访问的属性。
举例：
```
//使用symbol作为属性名
obj[mySymbol]="通过symbol添加的属性"
```
中括号中加变量的情况
```
let str = "address"
obj[str] = "花果山" //等价于obj["address"] = "花果山"
```
使用typeof检查一个对象时，会返回`object`。

如果读取的是一个对象中没有的属性，不会报错而是undefined。

## 对象字面量

上边这种用法，属于先创建对象然后再添加属性。除此之外也可以在创建对象时，直接向对象中添加属性：

```
{
属性名:属性值,
属性名:属性值,
属性名:属性值
}
```
属性间不使用 ; 而是用 , 隔开。另外要注意，如果是最后一个属性，后边就不能在写","了。

## 枚举属性

枚举属性，指将对象中的所有的属性全部获取
for-in语句
语法：

```
for(let propName in 对象){
    语句...
}
```

for-in的循环体会执行多次，有几个属性就会执行几次，每次执行时，都会将一个属性名赋值给我们所定义的变量。

注意：并不是所有的属性都可以枚举，比如 使用符号添加的属性

## 可变类型

- 对象属于可变类型

  对象创建完成后，可以任意的添加删除修改对象中的属性

  注意：

  			1. 当对两个对象进行相等或全等比较时，比较的是对象的内存地址
  			1. 如果有两个变量同时指向一个对象，通过一个变量修改对象时，对另外一个变量也会产生影响

- 修改对象

  ​    修改对象时，如果有其他变量指向该对象，则所有指向该对象的变量都会受到影响

- 修改变量

  ​    修改变量时，只会影响当前的变量

在使用变量存储对象时，很容易因为改变变量指向的对象，提高代码的复杂度。所以通常情况下，声明存储对象的变量时会使用const

注意：
    const只是禁止变量被重新赋值，对对象的修改没有任何影响

## 方法

当一个对象的属性指向一个函数，那么我们就称这个函数是该对象的方法，调用函数就称为调用对象的方法

# 函数

## 定义函数

```
function 函数名(){
     函数代码;
}
```

**说明:**function定义函数的关键字。

我们来编写一个实现两数相加的简单函数,并给函数起个有意义的名字：“add2”，代码如下：

```
function add2(){
   var sum = 3 + 2;
   alert(sum);
}
```

三种方法：

1. 函数声明

```
function 函数名(){
    语句...
}
```

2. 函数表达式

```
const 变量 = function(){
    语句...
}
```

3. 箭头函数

```
() => {
    语句...
}
```

## 参数

1. 形式参数

   ​    在定义函数时，可以在函数中指定数量不等的形式参数（形参），在函数中定义形参，就相当于在函数内部声明了对应的变量但是没有赋值。

2. 实际参数

   ​    在调用函数时，可以在函数的()传递数量不等的实参，实参会赋值给其对应的形参。传递实参时，传递并不是变量本身，而是变量中存储的值。

   ​	参数：

   ​        1.如果实参和形参数量相同，则对应的实参赋值给对应的形参

   ​        2.如果实参多余形参，则多余的实参不会使用

   ​        3.如果形参多余实参，则多余的形参为undefined

   ​    参数的类型：JS中不会检查参数的类型，可以传递任何类型的值作为参数。

定义参数时，可以为参数指定默认值，会在没有对应实参时生效。（函数每次调用，都会重新创建默认值）

```
const fn3 = (a=10, b=20, c=30) => {
    console.log("a =", a);
    console.log("b =", b);
    console.log("c =", c);
}
fn3(1, 2)
```

## 函数的返回值

在函数中，可以通过return关键字来指定函数的返回值。返回值就是函数的执行结果，函数调用完毕返回值便会作为结果返回。

任何值都可以作为返回值使用（包括对象和函数之类）

- 如果return后不跟任何值，则相当于返回undefined
- 如果不写return，那么函数的返回值依然是undefined
- return一执行函数立即结束

return里的东西在调用函数的时候，不会被log出来，但是当被赋值给变量时，打印的就是return的值。

箭头函数的返回值可以直接写在箭头后

```
无参箭头函数：() => 返回值
一个参数的：a => 返回值
多个参数的：(a, b) => 返回值
只有一个语句的函数：() => 返回值
只返回一个对象的函数：() => ({...})
有多行语句的函数：() => {
    ....    
    return 返回值
}
```

​    如果直接在箭头后设置**对象**字面量为返回值时，对象字面量必须使用()括起来

```
const fn = () => ({name:"孙悟空"})
```

## 作用域

作用域指的是一个变量的可见区域

作用域有两种：

   1. 全局作用域

      - 全局作用域在网页运行时创建，在网页关闭时消耗

      - 所有直接编写到script标签中的代码都位于全局作用域中

      - 全局作用域中的变量是全局变量，可以在任意位置访问

    2. 局部作用域

块作用域

- 块作用域是一种局部作用域
- 块作用域在代码块执行时创建，代码块执行完毕它就销毁
- 在块作用域中声明的变量是局部变量，只能在块内部访问，外部无法访问

函数作用域

- 函数作用域也是一种局部作用域
- 函数作用域在函数调用时产生，调用结束后销毁
- 函数每次调用都会产生一个全新的函数作用域
- 在函数中定义的变量是局部变量，只能在函数内部访问，外部无法访问

## 作用域链

当我们使用一个变量时，JS解释器会优先在当前作用域中寻找变量。

如果找到了则直接使用，如果没找到，则去上一层作用域中寻找，找到了则使用。如果没找到，则继续去上一层寻找，以此类推。

如果一直到全局作用域都没找到，则报错 xxx is not defined。

## Window对象

- 在浏览器中，浏览器为我们提供了一个window对象，可以直接访问。
- window对象代表的是浏览器窗口，通过该对象可以对浏览器窗口进行各种操作。除此之外window对象还负责存储JS中的内置对象和浏览器的宿主对象。
- window对象的属性可以通过window对象访问，也可以直接访问。
- 函数就可以认为是window对象的方法。

## var

用来声明变量，作用和let相同，但是var不具有块作用域。var虽然没有块作用域，但有函数作用域。

在全局中使用var声明的变量，都会作为window对象的属性保存
- 使用function声明的函数，都会作为window的方法保存
- 使用let声明的变量不会存储在window对象中，而存在一个秘密的小地方（无法访问）

在局部作用域中，如果没有使用var或let声明变量，则变量会自动成为window对象的属性 也就是全局变量

## 提升

**变量的提升**

使用var声明的变量，它会在所有代码执行前被声明，所以我们可以在变量声明前就访问变量。

**函数的提升**

使用函数声明创建的函数，会在其他代码执行前被创建，所以我们可以在函数声明前调用函数。

**let**

let声明的变量实际也会提升，但是在赋值之前解释器禁止对该变量的访问

## 立即执行函数（IIFE）

立即是一个匿名的函数，并它只会调用一次

可以利用IIFE来创建一个一次性的函数作用域，避免变量冲突的问题

```
(function(){
	语句...;
})();     //或者 ()在“})”之间，即}())
```

> 在开发中应该尽量减少直接在全局作用域中编写代码！所以我们的代码要尽量编写的局部作用域。如果使用let声明的变量，可以使用{}来创建块作用域。
>
> ```
> {
>     let a = 10
> }
> ```

## this

函数在执行时，JS解析器每次都会传递进一个隐含的参数，这个参数就叫做 this。this会指向一个对象。

this所指向的对象会根据函数调用方式的不同而不同：
    1. 以函数形式调用时，this指向的是window
    2. 以方法的形式调用时，this指向的是调用方法的对象

​		...

通过this可以在方法中引用调用方法的对象

箭头函数的this和它的调用方式无关

## 严格模式

JS运行代码的模式有两种：

- 正常模式

  默认情况下代码都运行在正常模式中，在正常模式，语法检查并不严格。它的原则是：能不报错的地方尽量不报错。这种处理方式导致代码的运行性能较差。

- 严格模式

​    在严格模式下，语法检查变得严格

​        1. 禁止一些语法

​        2. 更容易报错

​        3. 提升了性能

在开发中，应该尽量使用严格模式，这样可以将一些隐藏的问题消灭在萌芽阶段，同时也能提升代码的运行性能。

```
"use strict" // 全局的严格模式

function fn(){
    "use strict" // 函数的严格的模式
}
```

## 回调函数（高阶函数）？

一个函数的参数也可以是函数，如果将函数作为参数传递，那么我们就称这个函数为回调函数（callback）

这里**重点是包装**

`filter() 函数用来对数组进行过滤`

```
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
const personArr = [
    new Person("孙悟空", 18),
    new Person("沙和尚", 38),
    new Person("红孩儿", 8),
    new Person("白骨精", 16),
]

// filter()函数用来对数组进行过滤

function filter(arr, cb) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

//这种定义回调函数的形式比较少见，通常回调函数都是匿名函数

function fn(a){
    return a.name === "孙悟空"
}
result = filter(personArr, fn)
console.log(result)
```

**高阶函数：**如果一个函数的参数或返回值是函数，则这个函数就称为高阶函数
将函数作为参数，**意味着可以对另一个函数动态的传递代码**

```
// 我们这种定义回调函数的形式比较少见，通常回调函数都是匿名函数
function fn(a) {
     return a.name === "孙悟空"
}
//把filter函数写成这个样子
filter(personArr, a => a.name === "孙悟空")
```

```
function someFn() {
    return "hello"
}
function outer(cb){
    return () => {
        console.log("记录日志~~~~~")
        const result = cb()//这里如果包装，是获取不到cb参数的返回值的
        return result     
    }
}
let result = outer(someFn)
```

## 闭包

闭包就是能访问到外部函数作用域中变量的函数

当我们需要隐藏一些不希望被别人访问的内容时就可以使用闭包

构成闭包的要件：

    1. 函数的嵌套
    2. 内部函数要引用外部函数中的变量
    3. 内部函数要作为返回值返回

```
//创建一个函数，第一次调用时打印1，第二次调用打印2，以此类推
function outer(){
    let num = 0 // 位于函数作用域中
    return () => {
        num++
        console.log(num)
    }
}
const newFn = outer()
newFn()
```

newFn得到的是outer执行后返回的箭头函数，所以**newFn变成了箭头函数**，加上（）就能执行。

### 原理

函数在作用域，在函数创建时就已经确定的（词法作用域），和调用的位置无关，闭包利用的就是词法作用域。

```
let a = "全局变量a"
function fn(){
    console.log(a)
}
function fn2(){
    let a = "fn2中的a"
    fn()
}
fn2()  //结果是全局变量a，原因见上面
let fn-1 = outer2() // 独立闭包
let fn-2 = outer2() // 独立闭包

//fn-1和fn-2它们互不干扰，没有牵连
```

闭包的生命周期：
           1.闭包在外部函数调用时产生，外部函数每次调用都会产生一个全新的闭包
           2.内部函数丢失时销毁（内部函数被垃圾回收了，闭包才会消失）

注意事项：
        闭包主要用来隐藏一些不希望被外部访问的内容，这就意味着闭包需要占用一定的内存空间。

​        相较于类来说，闭包比较浪费内存空间（类可以使用原型而闭包不能）
​            需要执行次数较少时，使用闭包
​            需要大量创建实例时，使用类

# 面向对象

## 类

使用Object创建对象的问题：
       1.  无法区分出不同类型的对象
       2.  不方便批量创建对象

在JS中可以通过类（class）来解决这个问题：
    1.  类是对象模板，可以将对象中的属性和方法直接定义在类中。

        定义后，就可以直接通过类来创建对象。

        语法：

        ```
        class 类名 {} // 类名要使用大驼峰命名
        const 类名 = class {}  
        ```

        通过类创建对象：new 类()；

    2.  通过同一个类创建的对象，我们称为同类对象

        可以使用`instanceof`来检查一个对象是否是由某个类创建。如果某个对象是由某个类所创建，则我们称该对象是这个类的实例。

        ```
        console.log(p1 instanceof Person) // true 注意不用加（)
        ```

## 属性

类的代码块，默认就是严格模式

类的代码块是用来设置对象的属性的，不是什么代码都能写

```
class Person{
   name = "孙悟空" // Person的实例属性name p1.name
   age = 18       // 实例属性只能通过实例访问 p1.age
   static test = "test静态属性" // 使用static声明的属性，是静态属性（类属性） Person.test
   static hh = "静态属性"   // 静态属性只能通过类去访问 Person.hh
}
```

## 构造函数

在类中可以添加一个特殊的方法`constructor`。该方法我们称为构造函数（构造方法）
构造函数会在调用类创建对象时执行。

```js
function Person(name,age){
  this.name = name;
  this.age = age;
}
var obj = new Person('zs',12);
```

## 封装

对象就是一个用来存储不同属性的容器。对象不仅存储属性，还要负责数据的安全。直接添加到对象中的属性，并不安全，因为它们可以被任意的修改。

如何确保数据的安全：
    1. 私有化数据
        将需要保护的数据设置为私有，只能在类内部使用

    2. 提供setter和getter方法来开放对数据的操作

  属性设置私有，通过getter setter方法操作属性带来的好处

  - 可以控制属性的读写权限
  - 可以在方法中对属性的值进行验证

封装主要用来保证数据的安全

实现封装的方式：
    1.属性私有化 加#
    2.通过getter和setter方法来操作属性

```
        get 属性名(){
            return this.#属性
        }
        set 属性名(参数){
            this.#属性 = 参数
        }
```

## 多态

在JS中不会检查参数的类型，所以这就意味着任何数据都可以作为参数传递。

要调用某个函数，无需指定的类型，只要对象满足某些条件即可。

多态为我们提供了灵活性。

## 继承

通过继承可以在不修改一个类的情况下对其进行扩展

OCP 开闭原则：程序应该对修改关闭，对扩展开放

```
class Animal{
    constructor(name){
        this.name = name
    }
    sayHello(){
        console.log("动物在叫~")
    }
}
class Dog extends Animal{
    // 在子类中，可以通过创建同名方法来重写父类的方法
    sayHello(){
        console.log("汪汪汪")
    }
}
```

重写构造函数

```
constructor(name, age){
    // 重写构造函数时，构造函数的第一行代码必须为super()
    super(name) // 调用父类的构造函数
    this.age = age
}
```

在方法中可以使用`super`来引用父类的方法

```
sayHello(){
    // 调用一下父类的sayHello
    super.sayHello()
}
```

## 对象的内存结构

对象中存储属性的区域实际有两个：
1. 对象自身
  - 直接通过对象所添加的属性，位于对象自身中
  - 在类中通过 x = y 的形式添加的属性，位于对象自身中
2. 原型对象（prototype）
  - 对象中还有一些内容，会存储到其他的对象里（原型对象）
  - 在对象中会有一个属性用来存储原型对象，这个属性叫做__proto__
  - 原型对象也负责为对象存储属性，当我们访问对象中的属性时，会优先访问对象自身的属性，对象自身不包含该属性时，才会去原型对象中寻找

会添加到原型对象中的情况：

 1. 在类中通过xxx(){}方式添加的方法，位于原型中
 2. 主动向原型中添加的属性或方法

## 原型

访问一个对象的原型对象
    对象.__proto__
    Object.getPrototypeOf(对象)

原型对象中的数据：
       1. 对象中的数据（属性、方法等）
       2. constructor （对象的构造函数）

注意：
    原型对象也有原型，这样就构成了一条原型链，根据对象的复杂程度不同，原型链的长度也不同
        p对象的原型链：p对象 --> 原型 --> 原型 --> null
        obj对象的原型链：obj对象 --> 原型 --> null

原型链：

- 读取对象属性时，会优先对象自身属性，

​            如果对象中有，则使用，没有则去对象的原型中寻找
​            如果原型中有，则使用，没有则去原型的原型中寻找
​            直到找到Object对象的原型（Object的原型没有原型（为null））
​                如果依然没有找到，则返回undefined

- 作用域链，是找变量的链，找不到会报错

- 原型链，是找属性的链，找不到会返回undefined

原型的作用：

​    1、原型就相当于是一个公共的区域，可以被所有该类实例访问，可以将该类实例中，所有的公共属性（方法）统一存储到原型中。这样我们只需要创建一个属性，即可被所有实例访问。

​    2、JS中继承就是通过原型来实现的，当继承时，子类的原型就是一个父类的实例。

在对象中有些值是对象独有的，像属性（name，age，gender）每个对象都应该有自己值，但是有些值对于每个对象来说都是一样的，像各种方法，对于一样的值没必要重复的创建。

## object.create（） 

用于创建具有指定原型对象和属性的新对象。Object.create（） 方法返回一个具有指定原型对象和属性的新对象。

**语法：** 

```
Object.create(prototype[, propertiesObject])
```

**参数：** 

- **原型：**它是必须从中创建新对象的原型对象。
- **属性对象：**它是一个可选参数。它指定要添加到新创建的对象中的可枚举属性。

**返回值：**Object.create（） 返回一个具有指定原型对象和属性的新对象。

## 旧类（认识即可）

 *早期JS中，直接**通过函数来定义类***

​          一个函数如果直接调用 xxx() 那么这个函数就是一个普通函数

​          一个函数如果通过new调用 new xxx() 那么这个函数就是一个够早函数

​        等价于：

​          class Person{

​          }

关于**立即执行函数**

闭包     利用函数作用域把这一堆代码隔离起来，避免意外状况把代码修改了

```
 var Person = (function () {
     function Person(name, age) {
     // 在构造函数中，this表示新建的对象
         this.name = name
         this.age = age
         // this.sayHello = function(){
         //     console.log(this.name)
         // }
      }
	// 向原型中添加属性（方法）
    Person.prototype.sayHello = function () {
          console.log(this.name)
    }
// 静态属性
    Person.staticProperty = "xxx"
// 静态方法
     Person.staticMethod = function () {
     
     }
     return Person
})()；

            const p = new Person("孙悟空", 18)
```

旧类**继承**的使用

```
var Animal = (function(){
                function Animal(){
                }
                return Animal
            })()
            var Cat = (function(){
                function Cat(){
                }
                // 继承Animal
                Cat.prototype = new Animal();
                return Cat
            })()
            var cat = new Cat()
            console.log(cat)
```

## new运算符

new运算符是创建对象时要使用的运算符

当使用new去调用一个函数时，这个函数将会作为构造函数调用。

- 使用new调用函数时，将会发生这些事：

- 1. 创建一个普通的JS对象（Object对象 {}）, 为了方便，称其为新对象

  2. 将构造函数的prototype属性设置为新对象的原型

  3. 使用实参来执行构造函数，并且将新对象设置为函数中的this

  4. 如果构造函数返回的是一个非原始值，则该值会作为new运算的返回值返回（千万不要返回非原始值，否则就没有任何意义了）。

     如果构造函数的返回值是一个原始值or没有指定返回值，则新的对象将会作为返回值返回。

     所以通常不会为构造函数指定返回值。

# 数组

在数组可以存储多个不同类型的数据

数组中的每个数据都有一个唯一的索引，可以通过索引来操作获取数据

  - 数组中存储的数据叫做元素
  - 通过`Array()`来创建数组，也可以通过`[]`来创建数组
  - 向数组中添加元素
    语法：数组[索引] = 元素
  - 读取数组中的元素
    语法：数组[索引]
  - 如果读取了一个不存在的元素，不好报错而是返回undefined
  - length：获取数组的长度

向数组最后添加元素：数组 [ 数组.length ]  = 元素

length 是可以修改的

使用数组时，应该避免非连续数组，因为它性能不好

```
console.log(typeof arr) // object
```

## 遍历数组

```
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
const personArr = [
    new Person("孙悟空", 18),
    new Person("沙和尚", 38),
    new Person("红孩儿", 8),
]
for(let i=0; i<personArr.length; i++){
    if(personArr[i].age < 18){
        console.log(personArr[i])
    }
}
```

**for-of语句**可以用来遍历可迭代对象
语法：

```
    for(变量 of 可迭代的对象){
        语句...
    }
```

执行流程：
    for-of的循环体会执行多次，数组中有几个元素就会执行几次，
        每次执行时都会将一个元素赋值给变量

还有一种方式为`forEach()` ，详见下面数组的方法。

## 数组的方法

- `Array.isArray(arr)`  用来检查一个对象是否是数组 。

- `arr.at()`  可以根据索引获取数组中的指定元素，也可以接收负索引作为参数，意思是从后往前倒着取。

- `arr.concat(arr1,arrr2)`  用来连接两个或多个数组，这是非破坏性方法，不会影响原数组，而是返回一个新的数组。

- `arr.indexOf()`  获取元素在数组中第一次出现的索引

​		参数：（要查询的元素，查询的其实位置）

- `arr.lastIndexOf()`  获取元素在数组中最后一次出现的位置

​		返回值：找到了则返回元素的索引， 没有找到返回-1

- `arr.join() ` 将一个数组中的元素连接为一个字符串

​		["孙悟空", "猪八戒", "沙和尚", "唐僧", "沙和尚"] -> "孙悟空,猪八戒,沙和尚,唐僧,沙和尚"

​		参数：指定一个字符串作为连接符(默认为“ , ”）

- `arr.slice(1,2) ` 用来截取数组（非破坏性方法）

  参数：

  1. 截取的起始位置（包括该位置）

  2. 截取的结束位置（不包括该位置）   

     - 第二个参数可以省略不写，如果省略则会一直截取到最后

     - 索引可以是负值

     - 如果将两个参数全都省略，则可以对数组进行浅拷贝（浅复制）

- `sort()`  用来对数组进行排序（会对改变原数组）

  sort默认会将字符串升序排列

  注意：sort默认将元素转化为字符串，按照Unicode编码进行排序，所以sort默认的方式不适用于数字。

​		参数：可以传递一个回调函数作为参数，通过回调函数来指定排序规则

```
arr.sort((a, b) => a - b)升序排列

arr.sort((a, b) => b - a) 降序排列
```

- `forEach()`  用来遍历数组

  它需要一个回调函数作为参数，数组中有几个元素，回调函数就会调用几次。每次调用，都会将数组中的数据作为参数传递。

  回调函数中有三个参数：

  ​    1、element 当前的元素

  ​    2、index 当前元素的索引

  ​    2、array 当前被遍历的数组

- `filter()`  将数组中符合条件的元素保存到一个新数组中返回

  需要一个回调函数作为参数，会为每一个元素去调用回调函数，并根据返回值（true/false）来决定是否将元素添加到新数组中。

  非破坏性方法，不会影响原数组

- `map() ` 根据当前数组生成一个新数组

  需要一个回调函数作为参数， 回调函数的返回值会成为新数组中的元素。

  作用：关键是**根据已有**数组生成新数组

  ```
  arr = [1, 2, 3, 4, 5, 6, 7, 8]
  result = arr.map((ele) => ele * 2)
  //让数组里所有的数据*2
  arr = ["孙悟空", "猪八戒", "沙和尚"]
  result = arr.map((ele) => "<li>" + ele + "</li>")
  //把数组里所有的数据作为标签插入数组中
  ```

  非破坏性方法不会影响原数组

- `reduce(1,2) ` 可以用来将一个数组中的所有元素整合为一个值

  参数：

      1. 回调函数，通过回调函数来指定合并的规则
      2. 可选参数，初始值

  ```
  arr = [1, 2, 3, 4, 5, 6, 7, 8]
  result = arr.reduce((a, b) => {
      console.log(a, b)
      return a + b
  })
      /* 结果：
          a, b
          1, 2
          3, 3
          6, 4
          10, 5
      */
  //先加1+2，运算下来的结果再给a，b为下一个数字再次进行return里的运算进行整合
  即3+3，以此类推
  console.log(result)   //36
  ```

  ```
  result = arr.reduce((a, b) => a + b, 10)
  //10是初始值，就是在刚刚的运算前加一个10+arr[0]，即10+1，最终result结果为46
  ```

  

## 对象的复制（非破坏性）

复制必须要**产生新的对象**

### 浅拷贝

通常对object的拷贝都是浅拷贝，只对object的浅层进行复制（只复制一层），如果对象中存储的数据是原始值，那么拷贝的深浅是不重要，浅拷贝只会对对象本身进行复制，不会复制对象中的属性（或元素）。

当调用slice时，会产生一个新的数组对象，从而完成对数组的复制

```
const arr1 = arr.slice()
```

ps：只拷贝了第一层

### ...   展开运算符

可以将一个数组中的元素展开到另一个数组中或者作为函数的参数传递， 也可以对数组进行浅复制

```
const arr3 = [arr[0], arr[1], arr[2]]
const arr3 = [...arr]
//两行代码等价
```

### 深拷贝

深拷贝指不仅复制对象本身，还复制对象中的属性和元素。因为性能问题，通常情况不太使用深拷贝。

专门用来深拷贝的方法：

```
const arr3 = structuredClone(arr)
```

### 对象

```
Object.assign(目标对象, 被复制的对象)
```

把后面的复制到前面，并将目标对象作为返回值返回。如果两个对象里有重复属性，后面对象中的属性会覆盖前面的。

也可以使用展开运算符对对象进行复制：

```
const obj3 = {...obj} // 将obj中的属性在新对象中展开
```

```
const obj = { name: "孙悟空", age: 18 }
const obj3 = { address: "高老庄", ...obj, age: 48 }
//age：48会覆盖age：18
```

## 对象的复制（破坏性）

- `push()`  向数组的末尾添加一个或多个元素，并返回新的长度

- `pop()`  删除并返回数组的最后一个元素

- `unshift() ` 向数组的开头添加一个或多个元素，并返回新的长度

- `shift() ` 删除并返回数组的第一个元素

- `splice(1,2,3) ` 可以删除、插入、替换数组中的元素

  参数：

  ​        1. 删除的起始位置

  ​        2. 删除的数量

  ​        3. 要插入的元素

  返回值：返回被删除的元素

  理解一下：

  ```
  result = arr.splice(1, 0, )
  //是指把要插入的元素插入序号为一的位置，即原来arr[1]的前面。
  ```

- `reverse() ` 反转数组

## 数组去重

```
for (let i = 0; i < arr.length; i++) {
	for (let j = i + 1; j < arr.length; j++) {
    	if (arr[i] === arr[j]) {
            arr.splice(j, 1)
            /*当arr[i] 和 arr[j]相同时，它会自动的删除j位置的元素，然后j+1位置的元素，会变成j位置的元素。而j位置已经比较过了，不会重复比较，所以会出现漏比较的情况
			解决办法，当删除一个元素后，需要将该位置的元素在比较一遍
			*/
		}
	}
}
```

```
for(let i=0; i<arr.length; i++){
    const index = arr.indexOf(arr[i], i+1)
    if(index !== -1){
        // 出现重复内容
        arr.splice(index, 1)
        i--
    }
}
```

```
const newArr = []
for(let ele of arr){
    if(newArr.indexOf(ele) === -1){
        newArr.push(ele)
    }
}
```

```
//利用set来进行数组去重
const arr2 = [1,2,3,2,1,3,4,5,4,6,7,7,8,9,10]
const set2 = new Set(arr2)
console.log([...set2])    //展开set2，使其成为一个数组
```



## 冒泡排序

比较相邻的两个元素，然后根据大小来决定是否交换它们的位置。这种排序方式，被称为冒泡排序，冒泡排序是最慢的排序方式，数字少还可以凑合用，不适用于数据量较大的排序

```
const arr = [9, 1, 3, 2, 8, 0, 5, 7, 6, 4]
for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }
    }
}
```



## 选择排序

取出一个元素，然后将其他元素和该元素进行比较，如果其他元素比该元素小则交换两个元素的位置

```
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] > arr[j]){
            // 交换两个元素的位置
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
```

## 封装函数

为了让函数可以实现普适性和可重复性

1. 先把想要封装的函数封装起来
2. 把想要动态改变的东西改为参数

```
function sort(array) {
    const arr = [...array] //为了实现 不改变原数组
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // 交换两个元素的位置
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
let result = sort(arr2)
```

# 内建对象

## 解构赋值

### 数组的解构

把对象或数组拆开，拆开以后你可以根据你的需要来赋值给指定的变量

```
const arr = ["孙悟空", "猪八戒", "沙和尚"]
let a,b,c;
    // a = arr[0]
    // b = arr[1]
    // c = arr[2]
[a, b, c] = arr // 解构赋值

let [d, e, f, g] = ["唐僧", "白骨精", "蜘蛛精", "玉兔精"] // 声明同时解构
```

```
[d, e, f = 77, g = g] = [1, 2, 3]  //理解一下g=g，如果有赋值我就赋，没有就用原来的值
```

解构会重新覆盖，有原始值时且未被赋值就会继续采用原始值，但是上一次的解构赋值的结果不会续用到下一次，**未被定义的值会是undefined**。

解构数组时，可以使用`...`来设置获取多余的元素：

```
let [n1, n2, ...n3] = [4, 5, 6, 7] // n3会是一个数组：[6,7]
```

可以通过解构赋值来快速交换两个变量的值：

```
let a1 = 10;
let a2 = 20;
[a1, a2] = [a2, a1] // [20, 10]
```

```
const arr3 = [["孙悟空", 18, "男"], ["猪八戒" ,28, "男"]];
let [[name, age, gender], obj] = arr3;
console.log(name, age, gender)
console.log(obj)
```

### 对象的解构

先声明变量，再解构时，会出现{}开头的情况，这时需用（）把该行代码括起来。

默认情况下变量名和对象里属性的名字相同（除非有别名）

```
let {name:a, age:b, gender:c, address:d="花果山"} = obj //abcd为别名
// 声明变量同时解构对象
```

没有的属性返回undefined

## 对象的序列化 JSON

序列化指将对象转换为一个可以存储的格式，在JS中对象的序列化通常是将一个对象转换为字符串（JSON字符串），JS中的对象使用时都是存在于计算机的内存中的。

序列化的用途（对象转换为字符串有什么用）：

- 对象转换为字符串后，可以将字符串在不同的语言之间进行传递。甚至人可以直接对字符串进行读写操作，使得JS对象可以不同的语言之间传递
- 用途：

​			1、作为数据交换的格式

​			2、用来编写配置文字

如何进行序列化：在JS中有一个工具类 JSON （JavaScript Object Notation） JS对象表示法。JS对象序列化后会转换为一个字符串，这个字符串我们称其为JSON字符串。

`JSON.stringify()` 可以将一个对象转换为JSON字符串

```
//将obj转换为JSON字符串
const str = JSON.stringify(obj) 
```

`JSON.parse()` 可以将一个JSON格式的字符串转换为JS对象

```
const obj2 = JSON.parse(str)
```

也可以手动的编写JSON字符串

```
const str2 = `{"name":"猪八戒","age":28}`  //不知道这个可不可以
const str4 = '["hello", true, []]'
```

编写JSON的注意事项：

    1. JSON字符串有两种类型：
        		JSON对象 {}          		JSON数组 []
    2. JSON字符串的属性名**必须**使用双引号引起来
    3. JSON中可以使用的属性值（元素）

  数字（Number）
  字符串（String） 必须使用双引号
  布尔值（Boolean）
  空值（Null）
  对象（Object {}）
  数组（Array []）
    4. JSON的格式和JS对象的格式基本上一致的
  注意：JSON字符串如果属性是最后一个，则不要再加" , "

### 深复制

```
// 对obj进行浅复制
const obj2 = Object.assign({}, obj)

// 对obj进行深复制
const obj3 = structuredClone(obj)

// 利用JSON来完成深复制
const str = JSON.stringify(obj)
const obj4 = JSON.parse(str)
	//或者这样写
const obj5 = JSON.parse(JSON.stringify(obj))
```

## Map

Map用来存储键值对结构的数据（key-value），Object中存储的数据就可以认为是一种键值对结构。

Map和Object的主要区别：

- Object中的属性名只能是字符串或符号，如果传递了一个其他类型的属性名，JS解释器会自动将其转换为字符串

- Map中**任何类型的值**都可以称为数据的key

创建：

```
 const map = new Map()
```

属性和方法：

- `map.size()` 获取map中键值对的数量
- `map.set(key, value)` 向map中添加键值对
- `map.get(key)` 根据key获取值
- `map.delete(key)` 删除指定数据
- `map.has(key)` 检查map中是否包含指定键值对，返回true/false
- `map.clear()` 删除全部的键值对

```
map.set("name", "孙悟空")
map.set("age", 18)
map.set({}, "呵呵")
// 将map转换为数组
// const arr = Array.from(map) // [["name","孙悟空"],["age",18]]
		//或者用这种方式
// const arr = [...map]
```

二维数组：

```
const map2 = new Map([["name", "猪八戒"],["age", 18],[{}, () => {}]])
```

遍历map：

```
for (const entry of map) {
    // const [key, value] = entry，这是解构赋值，因为entry是数组
    console.log(entry)
}             //仔细体会一下，里面有一个解构赋值
for (const [key, value] of map) {
    console.log(key, value)
}
map.forEach((key, value)=>{
    console.log(key, value)
})
```

`map.keys()`  获取map的所有的key
`map.values()`  获取map的所有的value

```
for(const key of map.keys()){
    console.log(key)
}
```

## Set

Set用来创建一个集合，它的功能和数组类似，不同点在于Set中不能存储重复的数据

使用方式：
    创建

```
const set = new Set()    
const set = new Set([...]) //根据数组[...]创建新的集合
```

方法
        `size` 获取数量
        `add()` 添加元素
        `has()` 检查元素
        `delete()` 删除元素

利用set来进行数组去重

```
const arr2 = [1,2,3,2,1,3,4,5,4,6,7,7,8,9,10]
const set2 = new Set(arr2)
console.log([...set2])    //展开set2，使其成为一个数组
```

## Math  (不常用，见到上MDN上直接查就行)

（不全）

Math是一个工具类，为我们提供了数学运算相关的一些常量和方法。
常量：
    Math.PI 圆周率
方法：
    `Math.abs()` 求一个数的绝对值
    `Math.min()` 求多个值中的最小值
    `Math.max()` 求多个值中的最大值
    `Math.pow()` 求x的y次幂
    `Math.sqrt()` 求一个数的平方根
    `Math.floor()` 向下取整
    `Math.ceil()` 向上取整
    `Math.round()` 四舍五入取整
    `Math.trunc()` 直接去除小数位
    `Math.random()` 生成一个0-1之间的随机数

## Date （详情查询MDN）

在JS中所有的和时间相关的数据都由Date对象来表示

```
let d = new Date() // 直接通过new Date()创建时间对象时，它创建的是当前的时间的对象
// new Date(年份, 月, 日, 时, 分, 秒, 毫秒)
 d = new Date(2016, 0, 1, 13, 45, 33)
```

对象的方法：
    `getFullYear()` 获取4位年份
    `getMonth()` 返当前日期的月份**（0-11）**
    `getDate()` 返回当前是几日
    `getDay()` 返回当前日期是周几（0-6） 0表示周日
    ......
    `getTime()` 返回当前日期对象的时间戳
        时间戳：自1970年1月1日0时0分0秒到当前时间所经历的毫秒数
        计算机底层存储时间时，使用都是时间戳
    `Date.now()` 获取当前的时间戳

```
const d = new Date()
let result = d.toLocaleDateString() // 将日期转换为本地的字符串
result = d.toLocaleTimeString() // 将时间转换为本地的字符串
result = d.toLocaleString   //日期时间都转换
//本地看语言配置环境
```

`toLocaleString(1,2)`可以将一个日期转换为本地时间格式的字符串
参数：
    1、描述语言和国家信息的字符串
        zh-CN 中文中国
        zh-HK 中文香港
        en-US 英文美国
    2、需要一个对象作为参数，在对象中可以通过对象的属性来对日期的格式进行配置
        dateStyle 日期的风格
        timeStyle 时间的风格
            full  完整的
            long
            medium
            short
        hour12 是否采用12小时值
            true
            false
        weekday 星期的显示方式
            long
            short
            narrow
        year
            numeric
            2-digit

```
result = d.toLocaleString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    weekday: "short",
})
```

## 包装类

JS中一共有5个包装类
        String --> 字符串包装为String对象
        Number --> 数值包装为Number对象
        Boolean --> 布尔值包装为Boolean对象
        BigInt --> 大整数包装为BigInt对象
        Symbol --> 符号包装为Symbol对象

通过包装类可以将一个原始值包装为一个对象，当我们对一个原始值调用方法或属性时，JS解释器会**临时**将原始值包装为对应的对象，然后调用这个对象的属性或方法。

由于原始值会被临时转换为对应的对象，这就意味着对象中的方法都可以直接通过原始值来调用。

包装类最主要是为了调方法，特别是非破坏性方法，而不是修改或者添加新属性

## 字符串

字符串其本质就是一个字符数组，"hello" --> ["h", "e", "l", "l", "o"]

字符串的很多方法都和数组是非常类似的，但是字符串是不可修改的，所以所有的方法都是非破坏性的。

遍历字符串：

```
for(let char of str){
    console.log(char)
}  //不能用forEach
```

属性和方法：
    `length`   获取字符串的长度
    `字符串[索引]`   获取指定位置的字符
    `str.at()` （实验方法，未成为正式标准）根据索引获取字符，可以接受负索引
    `str.charAt() ` 根据索引获取字符
    `str.concat()`  用来连接两个或多个字符串
    `str.includes(被查询的内容,查询的起始位置)`  用来检查字符串中是否包含某个内容，有返回true，没有返回false
    `str.indexOf()`
    `str.lastIndexOf() ` 查询字符串中是否包含某个内容
    `str.startsWith()`  检查一个字符串是否以指定内容开头
    `str.endsWith() ` 检查一个字符串是否以指定内容结尾
    `str.padStart(长度,不够的地方填充的内容)`
    `str.padEnd(长度,不够的地方填充的内容)`  通过添加指定的内容，使字符串保持某个长度。可以用于对齐。
    `str.replace()`  使用一个新字符串替换一个指定内容
    `str.replaceAll()`   使用一个新字符串替换所有指定内容
    `str.slice(起,尾)`  对字符串进行切片，包起不包尾
    `str.substring()`  截取字符串
    `str.split(拆分的依据)`  用来将一个字符串拆分为一个数组
    `str.toLowerCase()`  将字符串转换为小写
    `str.toUpperCase()`  将字符串转换为大写
    `str.trim()`  去除前后空格
    `str.trimStart()`  去除开始空格
    `str.trimEnd()`  去除结束空格

​	`str.substr(起始位置索引，截取个数)`  截取字符串

## 正则表达式（规则表达式）

正则表达式用来定义一个规则，通过这个规则计算机可以检查一个字符串是否符合规则，或者将字符串中符合规则的内容提取出来。
正则表达式也是JS中的一个对象，所以要使用正则表达式，需要先创建正则表达式的对象

new RegExp() 可以接收两个参数（字符串）

```
let reg = new RegExp("a", "i") // 通过构造函数来创建一个正则表达式的对象
```

a是模式，即规则，正则表达式

i是标识，即匹配模式

字符串传入的话就可以实现动态变量传入不同规则

### 测试正则表达式 

`test() `正则对象方法，用于检测字符串是否符合该规则，该对象会返回 true 或 false，其参数是测试字符串。

```js
var rg = /123/;
console.log(rg.test(123));//匹配字符中是否出现123  出现结果为true
console.log(rg.test('abc'));//匹配字符中是否出现123 未出现结果为false
```

## 正则表达式中的特殊字符

### 边界符

正则表达式中的边界符（位置符）用来提示字符所处的位置，主要有两个字符

| 边界符 | 说明                           |
| ------ | ------------------------------ |
| ^      | 表示匹配行首的文本（以谁开始） |
| $      | 表示匹配行尾的文本（以谁结束） |

如果 ^和 $ 在一起，表示必须是精确匹配。

```js
var rg = /abc/; // 正则表达式里面不需要加引号 不管是数字型还是字符串型
// /abc/ 只要包含有abc这个字符串返回的都是true
console.log(rg.test('abc'));
var reg = /^abc/;
console.log(reg.test('abc')); // true
console.log(reg.test('aabcd')); // false
var reg1 = /^abc$/; // 精确匹配 要求必须是 abc字符串才符合规范
console.log(reg1.test('abc')); // true
console.log(reg1.test('abcd')); // false
```

### 字符类

字符类表示有一系列字符可供选择，只要匹配其中一个就可以了。所有可供选择的字符都放在方括号内。

#### [] 方括号

表示有一系列字符可供选择，只要匹配其中一个就可以了

```js
var rg = /[abc]/; // 只要包含有a 或者 包含有b 或者包含有c 都返回为true
console.log(rg.test('andy'));//true
console.log(rg.test('red'));//false
var rg1 = /^[abc]$/; // 三选一 只有是a 或者是 b  或者是c 这三个字母才返回 true
console.log(rg1.test('aa'));//false
console.log(rg1.test('a'));//true
console.log(rg1.test('abc'));//true
var reg = /^[a-z]$/ //26个英文字母任何一个字母返回 true  - 表示的是a 到z 的范围  
console.log(reg.test('a'));//true
console.log(reg.test('A'));//false
//字符组合
var reg1 = /^[a-zA-Z0-9]$/; // 26个英文字母(大写和小写都可以)任何一个字母返回 true  
//取反 方括号内部加上 ^ 表示取反，只要包含方括号内的字符，都返回 false 。
var reg2 = /^[^a-zA-Z0-9]$/;
console.log(reg2.test('a'));//false
console.log(reg2.test('!'));//true
```

#### 量词符

量词符用来设定某个模式出现的次数。

| 量词  | 说明            |
| ----- | --------------- |
| *     | 重复0次或更多次 |
| +     | 重复1次或更多次 |
| ?     | 重复0次或1次    |
| {n}   | 重复n次         |
| {n,}  | 重复n次或更多次 |
| {n,m} | 重复n到m次      |

## 字符串

`split()`  可以根据正则表达式来对一个字符串进行拆分
`search()`  可以去搜索符合正则表达式的内容第一次在字符串中出现的位置
`replace()`  根据正则表达式替换字符串中的指定内容
`match()`  根据正则表达式去匹配字符串中符合要求的内容
`matchAll()`  根据正则表达式去匹配字符串中符合要求的内容(必须设置g 全局匹配)  它返回的是一个迭代器

# DOM

## 获取元素

我们想要操作页面上的某部分(显示/隐藏，动画)，需要先获取到该部分对应的元素，再对其进行操作。

### 根据ID获取

```js
语法：document.getElementById(id)
作用：根据ID获取元素对象
参数：id值，区分大小写的字符串
返回值：元素对象 或 null
```

### 根据标签名获取元素

```
语法：document.getElementsByTagName('标签名') 或者 element.getElementsByTagName('标签名') 
作用：根据标签名获取元素对象
参数：标签名
返回值：元素对象集合（伪数组，数组元素是元素对象）
```

### H5新增获取元素方式

1. document.getElementsByClassName(‘类名’)；// 根据类名返回元素对象集合
2. document.querySelector('选择器'); // 根据指定选择器返回第一个元素对象
3. document.querySelectorAll('选择器'); // 根据指定选择器返回

注意：querySelector 和 querySelectorAll里面的选择器需要加符号,

比如:document.querySelector('#nav');

### 获取特殊元素（body，html）

**获取body元素**

```
doucumnet.body // 返回body元素对象
```

**获取html元素**

```
 document.documentElement // 返回html元素对象
```

## 事件基础

**事件三要素**

执行事件的步骤：

1. 获取事件源
2. 注册事件（绑定事件）
3. 添加事件处理程序（采取函数赋值形式）

## 常用鼠标事件

![image-20230105163835483](https://shiluyi.oss-cn-beijing.aliyuncs.com/1551172699854.png)

1. 禁止鼠标右键菜单

   `contextmenu`主要控制应该何时显示上下文菜单，主要用于程序员取消默认的上下文菜单

   ```
   document.addEventListener('contextmenu', function(e) {
   	e.preventDefault();
   })
   ```

2. 禁止鼠标选中（`selectstart` 开始选中）

   ```
   document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    })
   ```

### 鼠标事件对象

![](https://shiluyi.oss-cn-beijing.aliyuncs.com/1551173103741.png)

## 常用的键盘事件

1. keyup 按键弹起的时候触发  能识别功能键 比如 ctrl shift 左右箭头

   ```
   document.addEventListener('keyup', function() {})
   ```

2. keydown 按键按下的时候触发  能识别功能键

   ```
   document.addEventListener('keydown', function() {})
   ```

3. keypress 按键按下的时候触发  不能识别功能键

   ```
   document.addEventListener('keypress', function() {
       console.log('我按下了press');
   })
   ```

三个事件的执行顺序  keydown -- keypress -- keyup

### 键盘事件对象

键盘事件对象中的keyCode属性可以得到相应键的ASCII码值

1. keyup和keydown事件不区分字母大小写 ，a 和 A 得到的都是65

2. keypress事件区分字母大小写 ，a => 97 和 A => 65

可以利用keycode返回的ASCII码值来判断用户按下了那个键：

```
if (e.keyCode === 65) {
    alert('您按下的a键');
} else {
    alert('您没有按下a键')
}
```

### 排他思想

![image-20230105204832927](https://shiluyi.oss-cn-beijing.aliyuncs.com/image-20230105204832927.png)

```
// 干掉所有人 其余的li清除 class 这个类
for (var i = 0; i < lis.length; i++) {
    lis[i].className = '';
}
// 留下我自己 
this.className = 'current';
```

```
// 干掉所有人 让其余的item 这些div 隐藏
for (var i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
}
// 留下我自己 让对应的item 显示出来
items[index].style.display = 'block';
```



## 自定义属性操作

### 获取属性值

1. 获取属性值

   `element.属性`    获取内置属性值（元素本身自带的属性）`element.getAttribute('属性');`     主要获得自定义的属性，即我们程序员自定义的属性

  2. 设置元素属性值

​		(1) `element.属性= '值'`

​		(2) `element.setAttribute('属性', '值'); ` 主要针对于自定义属性

```
<div id="demo" index="1" class="nav"></div>
div.setAttribute('class', 'footer'); // class 特殊  这里面写的就是class,不是className
```

3. 移除属性 removeAttribute(属性)

```
<div id="demo" index="1" class="nav"></div>
div.removeAttribute('index');
```

### H5自定义属性

自定义属性目的：是为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中。

但是有些自定义属性很容易引起歧义，不容易判断是元素的内置属性还是自定义属性。

**1. 设置H5自定义属性**

H5规定自定义属性data-开头做为属性名并且赋值。比如: 

```
<div data-index="1"></div>
```

或者使用 JS 设置 

```
element.setAttribute(‘data-index’, 2)
```

**2. 获取H5自定义属性**

1. 兼容性获取 element.getAttribute(‘data-index’);    它只能获取data-开头的

2. H5新增 element.dataset.index 或者 element.dataset[‘index’] ie 11才开始支持

dataset 是一个集合，里面存放了所有以data-开头的自定义属性

```
console.log(div.dataset);
```

都可以得到某个对象的某个属性

```
console.log(div.dataset.index);
console.log(div.dataset['index']);
```

如果自定义属性里面有多个-链接的单词，我们获取的时候采取 驼峰命名法

```
console.log(div.getAttribute('data-list-name'));
console.log(div.dataset.listName);
```

## 节点操作

网页中的所有内容都是节点（标签、属性、文本、注释等），在DOM 中，节点使用 node 来表示。DOM 树中的所有节点均可通过 JS进行访问，所有 节点均可被修改，也可以创建或删除。

一般地，节点至少拥有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）这三个基本属性。

- 元素节点 nodeType 为 1

- 属性节点 nodeType 为 2

- 文本节点 nodeType 为 3 （文本节点包含文字、空格、换行等）

我们在实际开发中，节点操作主要操作的是**元素节点**

###  父级节点

```
node.parentNode
```

- parentNode 属性可返回某节点的父节点，注意是**最近**的一个父节点
- 如果指定的节点没有父节点则返回 null

```js
    <div class="demo">
        <div class="box">
            <span class="erweima">×</span>
        </div>
    </div>
    <script>
        var erweima = document.querySelector('.erweima');
        console.log(erweima.parentNode);
    </script>
```

```
document.querySelector('.box')
console.log(erweima.parentNode)
//二者是等价的
```

### 子节点

**所有子节点**

`parentNode.childNodes` 返回包含指定节点的子节点的集合，该集合为即时更新的集合。

```
console.log(ul.childNodes);
```

**注意：**返回值里面包含了所有的子节点，包括元素节点，文本节点等。如果只想要获得里面的元素节点，则需要专门处理。 所以我们一般不提倡使用childNodes。

`parentNode.children` 是一个只读属性，返回所有的子元素节点。它只返回子元素节点，其余节点不返回 （**这个是我们重点掌握的**）。

```
console.log(ul.children);
```

**子节点**   不管是文本节点还是元素节点

```
console.log(ol.firstChild);
console.log(ol.lastChild);
```

**子元素节点**

```
console.log(ol.firstElementChild);
console.log(ol.lastElementChild);
```

实际开发的写法  既没有兼容性问题又返回第一个子元素

```
console.log(ol.children[0]);
console.log(ol.children[ol.children.length - 1]);
```

### 兄弟节点

**下一个兄弟节点**

```
console.log(div.nextSibling);//下一个兄弟节点 包含元素节点或者 文本节点等等
console.log(div.previousSibling);//得到下一个兄弟元素节点
```

**上一个兄弟节点**

```
console.log(div.nextElementSibling);//上一个兄弟节点 包含元素节点或者 文本节点等等
console.log(div.previousElementSibling);//得到上一个兄弟元素节点
```

## 创建节点

```
document.createElement('tagName')
```

创建由 tagName 指定的 HTML 元素。因为这些元素原先不存在，是根据我们的需求动态生成的，所以我们也称为动态创建元素节点。

## 添加节点

1. ```
  node.appendChild(child) 
  ```

  将一个节点添加到指定父节点的子节点列表末尾。类似于 CSS 里面的
  after 伪元素。
2. ```
  node.insertBefore(child, 指定元素) 
  ```

  将一个节点添加到父节点的指定子节点前面。类似于 CSS 里面的 before 
  伪元素。

# 事件高级

## 注册事件

给元素添加事件，称为注册事件或者绑定事件。

注册事件有两种方式：传统方式和方法监听注册方式

**传统注册方式** 

- 利用 on 开头的事件 onclick 
- <button onclick=“alert('hi~')”></button>
- btn.onclick = function() {} 
- 特点： 注册事件的唯一性
- 同一个元素同一个事件只能设置一个处理函数，最
- 后注册的处理函数将会覆盖前面注册的处理函数

**方法监听注册方式**

- w3c 标准 推荐方式
- addEventListener() 它是一个方法
- IE9 之前的 IE 不支持此方法，可使用 attachEvent() 代替
- 特点：同一个元素同一个事件可以注册多个监听器
- 按注册顺序依次执行

## 事件监听

将指定的监听器注册到 eventTarget（目标对象）上，当该对象触发指定的事件时，就会执行事件处理函数。

1. addEventListener

```
eventTarget.addEventListener(type, listener[, useCapture])
```

- type：事件类型字符串，必定加引号。比如click 、mouseover ，注意这里不要带on

- listener：事件处理函数，事件发生时，会调用该监听函数

- useCapture：可选参数，是一个布尔值，默认是false。如果是 true，表示在事件捕

  获阶段调用事件处理程序；如果是 false，表示在事件冒泡阶段调用事件处理程序。

举例：

```
btns[1].addEventListener('click', function() { alert(22); })
```

2. attachEvent  ie9以前的版本支持 （仅了解，不推荐使用）

```
eventTarget.attachEvent(eventNameWithOn, callback) 
```

该特性是非标准的，请尽量不要在生产环镜中使用它！

参数：

- eventNameWithOn：事件类型字符串，比如onclick 、onmouseover ，这里要带on

- callback：事件处理函数，当目标触发事件时回调函数被调用

**注意：**IE8 及早期版本支持

```
btns[2].attachEvent('onclick', function() {
        alert(11);
    })
```

### 删除事件（解绑事件）

1. 传统方式删除事件

   ```
   eventTarget.onclick = null;
   divs[0].onclick = null;
   ```

2. removeEventListener 删除事件

   ```
   eventTarget.removeEventListener(type, listener[, useCapture]);
   divs[1].addEventListener('click', fn) // 里面的fn调用不需要加小括号
   ```

3. detachEvent

   ```
   eventTarget.detachEvent(eventNameWithOn, callback);
   divs[2].detachEvent('onclick', fn1);  // 里面的fn调用不需要加小括号
   ```

## DOM事件流

事件流描述的是从页面中接收事件的顺序。事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即 **DOM 事件流**。

比如：我们给页面中的一个div注册了单击事件，当你单击了div时，也就单击了body，单击了html，单击了document。

DOM 事件流会经历3个阶段： 

1. 捕获阶段 

   事件捕获： 网景最早提出，由 DOM 最顶层节点开始，然后逐级向下传播到到最具体的元素接收的过程。

2. 当前目标阶段

3. 冒泡阶段 

   事件冒泡： IE 最早提出，事件开始时由最具体的元素接收，然后逐级向上传播到到 DOM 最顶层节点的过程。

**注意：**

1. JS 代码中只能执行捕获或者冒泡其中的一个阶段。

2. onclick 和 attachEvent（ie） 只能得到冒泡阶段。

3. addEventListener(type, listener[, useCapture])第三个参数如果是 true，表示在事件捕获阶段调用事件处理程序；如果是 false（不写默认就是false），表示在事件冒泡阶段调用事件处理程序。

4. 实际开发中我们很少使用事件捕获，我们更关注事件冒泡。

5. 有些事件是没有冒泡的，比如 onblur、onfocus、onmouseenter、onmouseleave

6. 事件冒泡有时候会带来麻烦，有时候又会帮助很巧妙的做某些事件，我们后面讲解。

## 事件对象

事件发生后，跟事件相关的一系列信息数据的集合都放到这个对象里面，这个对象就是事件对象。它有很多属性和方法。

比如：  

1. 谁绑定了这个事件。
2. 鼠标触发事件的话，会得到鼠标的相关信息，如鼠标位置。
3. 键盘触发事件的话，会得到键盘的相关信息，如按了哪个键。

```
 eventTarget.onclick = function(event) {
 // 这个 event 就是事件对象，我们还喜欢的写成 e 或者 evt 
 }
```

这个 event 是个形参，系统帮我们设定为事件对象，不需要传递实参过去。当我们注册事件时，event 对象就会被系统**自动**创建，并依次传递给事件监听器（事件处理函数）。

事件对象只有有了事件才会存在

事件对象也有兼容性问题 ie678 通过 window.event 兼容性的写法  （不常用）

```
e = e || window.event;
```

## 事件对象的属性和方法

![事件对象的属性和方法](https://shiluyi.oss-cn-beijing.aliyuncs.com/事件对象的属性和方法.png)

#### e.target 和 this 的区别

-  this 是事件绑定的元素（绑定这个事件处理函数的元素） 。

-  e.target 是事件触发的元素。

> 通常情况下terget 和 this是一致的，
> 但有一种情况不同，那就是在事件冒泡时（父子元素有相同事件，单击子元素，父元素的事件处理函数也会被触发执行），
> 	这时候this指向的是父元素，因为它是绑定事件的元素对象，
> 	而target指向的是子元素，因为他是触发事件的那个具体元素对象。

事件冒泡下的e.target和this：

```js
<ul>
    <li>abc</li>
	<li>abc</li>
	<li>abc</li>
</ul>
<script>
    var ul = document.querySelector('ul');
	ul.addEventListener('click', function(e) {
    // 给ul 绑定了事件  那么this 就指向ul  
    console.log(this); // ul
    // e.target 触发了事件的对象 点击的是li e.target 指向的就是li
    console.log(e.target); // li
});
</script>
```

## 阻止默认行为（事件） 

让链接不跳转 或者让提交按钮不提交

1. dom 标准写法

```
var a = document.querySelector('a');
a.addEventListener('click', function(e) {
     e.preventDefault()   
 })
```

2. 传统的注册方式

   普通浏览器 e.preventDefault();  方法

   ```
   e.preventDefault();
   ```

   低版本浏览器 ie678  returnValue  属性

   ```
   e.returnValue;
   ```

   我们可以利用return false 也能阻止默认行为 没有兼容性问题 特点： return 后面的代码不执行了， 而且只限于传统的注册方式

   ```
   return false;
   ```

## 阻止事件冒泡

事件冒泡本身的特性，会带来的坏处，也会带来的好处。

```
e.stopPropagation();  //dom 推荐的标准
e.cancelBubble = true; //非标准
```

注：只能阻止当前事件，其他事件不论父子关系都要重新添加代码

## 事件委托

事件冒泡本身的特性，会带来的坏处，也会带来的好处。

**什么是事件委托**

```
把事情委托给别人，代为处理。
```

事件委托也称为事件代理，在 jQuery 里面称为事件委派。

> 说白了就是，不给子元素注册事件，给父元素注册事件，把处理代码在父元素的事件中执行。

**事件委托的原理**

**标准表述：**（记住！）不是给每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点。

​	给父元素注册事件，利用事件冒泡，当子元素的事件触发，会冒泡到父元素，然后去控制相应的子元素。

```
var ul = document.querySelector('ul');
ul.addEventListener('click', function(e) {
    // e.target 这个可以得到我们点击的对象
    e.target.style.backgroundColor = 'pink';
})
//给 ul 注册点击事件，然后利用事件对象的 target 来找到当前点击的 li，因为点击 li，事件会冒泡到 ul 上，ul 有注册事件，就会触发事件监听器。
```

# BOM

## 什么是BOM

​	BOM（Browser Object Model）即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 window。

​	BOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。

​	BOM 缺乏标准，JavaScript 语法的标准化组织是 ECMA，DOM 的标准化组织是 W3C，BOM 最初是Netscape 浏览器标准的一部分。

- 浏览器对象模型
- 把「浏览器」当做一个「对象」来看待
- BOM 的顶级对象是 window
- BOM 学习的是浏览器窗口交互的一些对象
- BOM 是浏览器厂商在各自浏览器上定义的，兼容性较差

## BOM的构成

BOM 比 DOM 更大，它包含 DOM。

![](https://shiluyi.oss-cn-beijing.aliyuncs.com/1551319344183.png)

## 顶级对象window

**window 对象是浏览器的顶级对象，**它具有双重角色。

1. 它是 JS 访问浏览器窗口的一个接口。

2. 它是一个全局对象。定义在全局作用域中的变量、函数都会变成 window 对象的属性和方法。

在调用的时候可以省略 window，前面学习的对话框都属于 window 对象方法，如 alert()、prompt() 等。

**注意：**window下的一个特殊属性 window.name，本身存在，声明变量最好不要用这个。

### window对象的常见事件

#### 页面（窗口）加载事件（2种）

**第1种**

窗口 (页面）加载事件，**当文档内容完全加载完成**会触发该事件, 调用里面的函数。

```
window.onload = function(){}
//或者
window.addEventListener("load",function(){}); //推荐
```

**注意：**

1. 有了 window.onload 就可以把 JS 代码写到页面元素的上方，因为 onload 是等页面内容全部加载完毕，再去执行处理函数。

2. window.onload 传统注册事件方式 只能写一次，如果有多个，会以最后一个window.onload 为准。

3. 如果使用 addEventListener 则没有限制

**第2种**

```
document.addEventListener('DOMContentLoaded',function(){})
```

总结：

- load 等页面内容全部加载完毕，包含页面dom元素 图片 flash  css 等等

- DOMContentLoaded 是DOM 加载完毕，不包含图片 falsh css 等就可以执行 加载速度比 load更快一些

#### 调整窗口大小事件

调整窗口大小加载事件, 当触发时就调用的处理函数

```
window.onresize = function(){}
//或者
window.addEventListener("resize",function(){});
```

注意：

1. 只要窗口大小发生像素变化，就会触发这个事件。

2. 我们经常利用这个事件完成响应式布局。 window.innerWidth 当前屏幕的宽度

## 定时器（两种）

window 对象给我们提供了 2 个非常好用的方法——定时器。

- setTimeout() 

- setInterval()  

注意，使用定时器要定义且赋值一个全局变量，不然在停止计时器时容易因函数作用域干扰而报错：

```
var begin = document.querySelector('.begin');
var stop = document.querySelector('.stop');
//这里这里
var timer = null; // 全局变量  null是一个空对象

begin.addEventListener('click', function() {
    timer = setInterval(function() {
        console.log('ni hao ma');
    }, 1000);
})
stop.addEventListener('click', function() {
    clearInterval(timer);
})
```

#### setTimeout() 炸弹定时器

**开启定时器**

用于设置一个定时器，该定时器在定时器到期后执行调用函数：

```
window.setTimeout(调用函数, [延迟的毫秒数]);
```

注意：

1. window 可以省略。
2. 这个调用函数可以直接写函数，或者写函数名或者采取字符串‘函数名()'三种形式。第三种不推荐
3. 延迟的毫秒数省略默认是 0，如果写，必须是毫秒。
4. 因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。



setTimeout() 这个调用函数我们也称为回调函数 callback

- 普通函数是按照代码顺序直接调用。而这个函数，需要等待时间，时间到了才去调用这个函数，因此称为回调函数。例：

```
function callback() {
    console.log('爆炸了');
}
var timer1 = setTimeout(callback, 3000);
```

**停止定时器**

取消先前通过调用 setTimeout() 建立的定时器。

```
window.clearTimeout(timeoutID)
```

注意：

1. window 可以省略。
2. 里面的参数就是定时器的标识符 。

#### setInterval() 闹钟定时器

**开启定时器**

法重复调用一个函数，每隔这个时间，就去调用一次回调函数。

```
setInterval(回调函数, [间隔的毫秒数]);
```

注意：

1. 间隔的毫秒数省略默认是 0，如果写，必须是毫秒，表示每隔多少毫秒就自动调用这个函数。
2. 第一次执行也是间隔毫秒数之后执行，之后每隔毫秒数就执行一次。

**停止定时器**

取消先前通过调用 setInterval()建立的定时器。

```
clearInterval(intervalID);
```

### this指向问题

​	this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，一般情况下this的最终指向的是那个调用它的对象。

this的几个指向：

1. 全局作用域或者普通函数中this指向全局对象window（注意定时器里面的this指向window）

2. 方法调用中谁调用this指向谁
3. 构造函数中this指向构造函数的实例

## location对象

window 对象给我们提供了一个 location 属性用于获取或设置窗体的 URL，并且可以用于解析 URL 。 因为这个属性返回的是一个对象，所以我们将这个属性也称为 location 对象。

## URL

统一资源定位符 (Uniform Resource Locator, URL) 是互联网上标准资源的地址。互联网上的每个文件都有

一个唯一的 URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。

URL 的一般语法格式为：

```
protocol://host[:port]/path/[?query]#fragment
http://www.itcast.cn/index.html?name=andy&age=18#link
```

![1551322387201](https://shiluyi.oss-cn-beijing.aliyuncs.com/1551322387201.png)

#### location 对象的属性

![1551322416716](https://shiluyi.oss-cn-beijing.aliyuncs.com/1551322416716.png)

#### location对象的常见方法

![1551322750241](https://shiluyi.oss-cn-beijing.aliyuncs.com/1551322750241.png)

### navigator对象

​	navigator 对象包含有关浏览器的信息，它有很多属性，我们最常用的是 userAgent，该属性可以返回由客户机发送服务器的 user-agent 头部的值。

### history对象

​	window对象给我们提供了一个 history对象，与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中）访问过的URL。

![1551322885216](https://shiluyi.oss-cn-beijing.aliyuncs.com/1551322885216.png)

history对象一般在实际开发中比较少用，但是会在一些 OA 办公系统中见到。



















