# js总结笔记💗💗💗
## javascript后端基础
#### 🌟1.基础简介       
***1.js代码的编写方法：***
* **在标签中编写：**
```html
<head>
  <script>
  </script> <!--通常写在头部标签之间--> 
</head>
```
* **在HTML中映引入js文件：**
```html
<script src="js的文件路径"></script>
```
***2.js代码的编写规则：***
* javascript的注释规则与c语言类似
```javascript
let a = null  //这是一个注释
```
* js是一个严格区分大小写的语言
* js中的==空格与换行==会被忽略（代码格式化）
* 每条语句的结束最好加上分号

***3.js代码的量值与内存结构：***
**1.字面量：**
字面量就是一个值，意义就是元素的字面量，代表的只就是字面量字面上的值。
**2.变量：**
变量相当于c语言中的变量，需要声明，用来存储其中的字面量，也就是值。
```javascript
let x;  //声明x变量
x = 80;  //给变量赋予对应的字面量（值）
```
**3.常量，标识符，let.var.const：**
* 常量：
```javascript
let PI=3.14;  // 一般来说都是全部大写，来声明常量
PI = 10;  //常量只能赋值一次，二次赋值会报错
```
* 标识符：
命名规则：只能含有\字母\数字\下划线\$\且不能以数字开头\不能是js里的关键字保留字
* var.let.const:
*   * var的优先级是最强的，先执行所有var变量的空间开辟（==提前申明==）ps:仅仅是变量的空间开辟提前，不包括字面量（值）
    * const与c语言中的const类似，无法轻易改变, 改变的话会报错
**4.内存结构：**
* 拿上面的代码举例：
*  * 在c语言中这样的代码其实就是将对应的值存入对应的变量内部，简单来说就是一个变量的地址里面是一个值
而在JS中这样的情况有所不同：==他是通过在变量内部存储字面量地址的方式，相当于调用它时进行了两次寻址==
相对应的，js所需要的*内存空间*也就更多，我们在后面会有方法降低内存占用。
#### 🌟2.数据类型数值以及转换
***1.数字数值：***
* 数值（number）类型：JS中所有的整数与浮点数均为该类型
==ps:== 如果所要表达的数字过大，则无法用该类型表示，会返回infinity
* 大整数（Big int）类型：使用n结尾（可以表示范围较大的整数，具体大小以内存为准）
==ps:== ==不同的类型==之间进行运算会==直接报错==。
* 不同进制：可以使用不同进制数 来表示充当字面量，但在输出打印时只打印十进制数。

***2.检查类型的方法：***
```javascript
console.log(typeof a)//相当于在控制台打印typeof这个方法返回的值，检查a的值
console.log(a,a);//还可以一次打印两个值
```
* typeof返回的是一个==字符串值==（字符串的内容就是==该变量里的值==目前的类型）
* ps:该方法不适用于检查空值（null）

***3.字符串：***
* 可以用单引号或双引号来引用
```javascript
a = 'Hello'
a = "Hello"
\n \t//分别是换行与空格（制表符）
a = `Hello`//第三种，可以在输出时保留空格与字符串
a = `Hello${变量名}`//还可以在字符串中加入变量名
console.log('hello'+'world')//可以将两个字符串相互连接成一个字符串,长字符串
```

***4.其他数据类型：***
* 布尔值（boolean）：主要用来进行逻辑判断，返回值：true，false
* 空值（null）：表示空对象，返回null
* 未定义(undefined)：一般情况下表示有变量却没有字面量的情况，返回undefined
* 符号(symbol):用来创建一个==唯一==的标识，用这种形式去定义的变量两两互不相等，独一无二
```javascript
const a = Symbol('a');
const b = Symbol('b');
a == b; // false
a + "Hello"; // TypeError: Cannot convert a Symbol value to a string
a.toString() + ""; // Ok，output: 'Symbol()'
```

***以上的六种数据类型均为原始值在js中均为一旦创建不可修改，想要修改就只能修改变量存储地址（也就必须创建一块新的字面量储存空间）***

***5.类型转换：***
* 转成字符串、调用toSting()方法
```javascript
a.toString()//调用a的toSring方法------将a转化为字符串类型
```
ps:null与undefined中没有toString()方法----会报错
**一般使用String()方法进行函数传参，全值域适用**
* 字符串转成数字
一般情况下字符串为合法数字自动转换（隐式转换）
当是空串或空格，返回*0*；当不是合法数字，转化为NAN
当无法转化时---->通过显式转化Number（）
```javascript
parseInt()//从左向右依次便利直到无法找到有效数字为止---只取整数位
parseFloat()//同上----但是可以取有效的小数位
```
* 布尔值转化为数字
true--1;false--0;null--0;undefined--NAN
* 数字转化为布尔值
0与NAN----false（相当于空性的值）
其余----true
* 字符串转化为布尔值
空串或null.undefined----false
其余(对象)----true

***6.隐式类型转换：***
```javascript
字面量的值 + '' = a//由任意值转向字符串
b = +b//将字符串b变成数字
```
#### 🌟3.赋值与运算符
***1.基础运算符：***
* 幂运算：10的平方：10**2
* 其余运算符参考c语言
* 逻辑运算符（返回布尔值）：
*  * 逻辑非：布尔值取反，返回一个布尔值
*  * 逻辑与：左边第一个值ture，返回ture；左边第一个值false，返回第二个值。
*  * 逻辑或：第一个为false返回第二个；第一个为ture返回ture

***2.赋值运算符：***
#### "="
*右赋左值*
==ps：== 同样的一个值放在左边时是变量，放在右边时为该变量里面的字面量
#### "++a、a++"
* ++a返回一个自增后的值
* a++返回一个自增前的值
==ps:== 两个的效果均为加一（直接改变变量的值，不另加多余的内存空间）
#### "??"
只有当原变量（等式左边）的指向为null/undefined时赋值

***3.关系运算符：***
```
> < >= =< 用来检查两个数的关系，返回一个布尔值
```
==ps:== 对非数值关系运算先转化为数值在进行比较，*两端均为字符串时不会将字符串转化为数值，会各个位置比较unicode编码*

***4.相等运算符：***
返回布尔值：
```
转化为相等的类型比较
undefined == null 返回ture
NAN == NAN  返回false(NAN不与任何值相等包括自身)
不进行转换，类型不同返回false
null === undefined  返回false
用来检查两个值是否不相等
！=  ==号取反
！==  ===号取反
条件运算符
条1？表2：表3  | 条1：ture——表1；条2：ture——表2；
```
***5.代码块与一些补充：***
**代码块：**
* 不同的代码块用“{}”隔开
* var声明的变量无块作用域，let声明的变量有块作用域

**补充：**
```javascript
isNAN(参数)   //返回一个布尔值，判断参数是不是
prompt("提示语")  //在弹出的警示框中输入东西（提示语）
```



*******


## javascript进阶使用
#### 🌟4.对象
***1.对象简介与声明：***
* 对象是一种特殊的数据类型，是一种复合数据类型
* 属性是对象内部的用来描述对象的模块
```javascript
let obj = new Object() //其实是让obj成为Object类的其中一个对象
```
* 对象有了以后需要对里面的属性初始化，因为Object大类里面没有初始化的属性值
```javascript
obj.属性=内容  //第一种
obj["gender"]="男"  //第二种
```
***2.对象字面量：***
```javascript
let obj = {name:"hhh"}
//添加一个对象的同时定义一个属性，属性间用逗号隔开
```
***3.For-in语句：***
```javascript
for(let propName in obj){
  console.log(propName,obj[propName])//存在几个属性就执行几次，由上向下执行，每次将对应的属性名赋值给propName
}
```
#### 🌟5.函数
***1.函数简介与声明：***
函数实际上也是一个对象，与c语言中的类似，里面存放代码
**声明：**
```javascript
function fn(参数){代码}//第一种   传参数不检查参数类型
const fn = function(){代码}//第二种
fn()//调用
const fn = ()=>{}
```
==ps:== fn()的调用可以提前，函数的声明一般都会提前，所以调用可以在声明之前
💗**函数的默认值创建：**
```javascript
function fn2(a={name:"am"}){
  a.name = "bm";
}
//像这种内部创立字面量每调用一次函数name值都会回置
let a ={name:"am"}
function fn2(a){
  a.name="bm"
}
fn2(a)
//这样的函数直接修改外部a的name属性值
```
***2.函数返回值：***
* return  返回调用函数的地方(一旦执行跳出函数)
*任何类型均可以返回，return后不跟东西返回undefined*

***3.作用域：***
* 全局作用域：网页运行时创建，网页关闭时销毁(直接写到script标签中的代码全是全局作用域)
* 局部作用域：块作用域，其中声明局部变量，只能在块内部访问（代码块）
* 函数作用域：仅仅在调用函数时产生全新的函数作用域
* 作用域链：
```javascript
let a = 10
{
  let a = 20//match the a below
  {
    console.log(a);  //就近原则，优先在当前定义域中寻找，一层层网上找
  }
}

```
***4.方法：***
* 就是在对象里面令函数成为对象的一个属性（*则称这个函数是该对象的的方法*）
```javascript
obj.sayHello()//调用
obj.sayHello = function(){
  alert();//声明方法
}
```
💗特殊对象windows：
使用var声明的对象都会作为Windows对象属性保存
直接定义函数就相当于是在给windows对象添加方法
ps：浏览器直接为我们提供了一个对象，可以访问，平时也可以不写省略

***5.立即执行函数：***
```javascript
(function(){
  let a = 20;
  console.log(xxx)
}());//执行到这一步时立即执行函数内部的内容
```
==ps:== var和let声明的**变量**都会提前，var可以访问，let访问不到

***6.this：***
* this**指向一个对象**——指向的对象会根据调用方式的不同而改变：
* * 方法形式调用，this是“.”前面的对象（即指向调用方法的对象）
* * 以函数形式调用，指向windows(函数是windows的方法)
* * 箭头函数的this与调用方式无关，与外层有关，外层的this是谁就是谁

#### 🌟6.类
***1.设置类：***
* 类是对象的模板可以将对象中的属性方法直接定义在类中（类中自动为“use strict”）
```javascript
class Person{
  name;
  age;//在类内部设置属性值，无初始值
  static test;//静态属性只能通过类访问
}
const arr = new Person()//创建了一个属于Person类的arr对象
Person.test//访问静态属性只能通过person类访问
arr instanceof Person  //检查arr是不是属于Person类 
```
***2.类当中的构造方法：***
```javascript
class Person{
  constructor(string){
    this.name=string
  }
}
const p1 = new Person("蔡徐坤")
```
***3.封装：***
* 确保数据安全（只能在类的内部访问）
* 在属性前面加上#号
* 操纵读写权限
* 对输入读写条件限制
```javascript
class Person{
  #name;
  constructor(string){
    this.#name=string//封装的属性必须提前声明
  }
  print(){
    conslo.log(this.#name)
    return this.#name//只在类内部访问
  }
  setName(name){
    this.#name=name
  }
}
let obj = new Person("蔡徐坤")
obj.#name//这样会报错的
obj.print()//可以读到
obj.setName("篮球鸡")//可以改写
```
* 通过属性的调用方式实现封装下的读写

***4.继承：***
```javascript
class Person{
  constructor(name){
    this.name=name
  }
  sayHello(){
    console.log("蔡徐坤")
  }
}//定义了一个类
---->继承
class Chicken extends Person{
  constructor(name){
    super(name);//重写时第一句要写super
    this.name
  }
}//当一个类继承了另一个类相当于将另一个类中的代码复制到了当前类中
```
***5.对象的结构与原型***
* 先来看一种现象：
* 在类中添加方法时
1. sayHello(){}---直接打印->不显示
2. sayHello = ()=>{}或sayHello = function(){}----直接打印->显示
* **解释：**
其实第一种是将方法添加到了原型对象中，而后面两种则是将对象添加到了自身空间当中
*在类中，优先访问自身空间，自身空间属性不存在时则访问原型内存*

🍔🍟**如何访问一个数据的原型对象**
```javascript
对象.--proto--  //直接通过属性访问
Object.getPrototypeof(p)//查看p的原型对象
```
**原型对象中**：
1. 存在对象中有的属性与方法并且包含构造函数
2. 原型对象也拥有自己的原型对象

* 这就引出了原型链：
* * p对象->原型->原型->null
* * obj对象的原型链：obj对象-->原型-->null

* ==原型对象的作用==
1. 原型本身是一个公共区域可以被所有隶属于它的原型所访问，从而节省内存
2. 同类对象的原型链一摸一样
3. 被继承的对象是继承对象的原型
4. 修改原型后所有同类实例均可访问
5. Object是所有对象的原型

#### 🌟6.数组 
***1.数组定义与认识***
```javascript
const arr = []//first one
const arr = new Array()//the second
初始化：
arr[0] = 10;
arr[1] = 20;//使用数组时尽量避免非连续数组——浪费内存空间
const arr = [1,2,3,4,5]//字面量定义
arr.length=最大索引数+1    //检查数组中的元素个数
```
ps:事实上任何值都可以作为数组中的元素，可以通过for循环遍历的方式逐个提取元素

***2.for-of语句***
**遍历可迭代对象**
```javascript
for(let value of arr){
  console.log(value)
}//数组中有几个元素就执行几次，每次将数组中的元素赋值给value变量
```
***3.数组的方法***
```javascript
Array.isArray()//检查是否为一个数组，返回布尔值
at()//根据索引获取数组中的指定元素
arr.at(1)//即获取arr数组中索引为1的元素，负索引即为从后往前数索引数
arr.concat(arr1)//将arr与arr1连接并放到一个新数组中
arr.indexOf(某个元素，开始查询的起始位置)//返回该元素的索引值
arr.lastIndexOf()//同上，从后往前
arr.join()//将数组中的所有元素拼成一个字符串，元素间用逗号隔开
arr.slice(0,2)//截取数组，从索引为0的位置截取到为2的位置
arr.forEach((element,index,array)=>{})//遍历数组，内含回调函数
arr.filter(ele=>一个返回布尔值的判断句)//将返回true的元素保存到一个新数组中返回
arr.map(ele=>ele*2)//将数组每个元素都乘以二
arr.reduce((a,b)=>a+b,10)//将数组中的元素进行累加，且初始值为10
破坏性方法：
arr.push()//向数组末尾添加一个或多个元素，并且返回新数组的长度
arr.pop()//删除并且返回数组的最后一个元素
arr.unshift()//向数组开头添加一个或多个元素并返回新的长度
arr.shift()//删除并返回数组中的第一个元素
arr.splice(起始删除位置，删除的数量，要插入的元素)//删除添加插入替换数组中的元素，返回被删除的元素
arrr.reverse()//反转数组
arr.sort(a,b)//从a到b升序排列，默认升序
```
***4.深浅拷贝***
*深拷贝：* 不止复制对象本身还复制其中的属性
*浅拷贝：* 只对对象本身进行复制
```javascript
const arr3 = structuredClone(arr)//用来深拷贝
const arr3 = [...arr]//用来浅拷贝，以上两种方法均为复制arr
```
**对象的复制：**
```
Object.assign(目标对象，被复制的对象)  //返回目标对象，深复制
const obj3 = {...obj3}  //浅复制
```                                            
#### 🌟7.封装闭包递归浅谈
***1.封装函数***
封装函数：创建函数，放入主体，定义函数
补充： 
* 一个函数的参数或返回值是函数则称其为高阶函数
* 如果将函数作为参数传递，则称这个函数为回调函数
```javascript
function add( max, min = 1 ){
		if( min > max ){
			var middle;
			middle = min;
			min = max;
			max = middle;
		}
		var res = 0;
		for(var i = min; i <= max; i++ ){
			res += i;
		}
		return(res);
	}
	console.log( add(1,100));//像这样将功能性的语句封装到函数内部使用
```
***2.闭包***
```javascript
function outer(){
  let num = 0
  return()=>{//这个就是闭包
    num++;
    console.log(num);
  }
}
const arr = outer()///在这个时候就产生闭包内存空间了
arr()//1
arr()//2
const arr1 = outer()
arr()//1
arr()//2
```
==ps:== **有上面的例子不难看出：**
1. 每次调用外部函数时，闭包空间都会重新生成
2. num 变量是只有闭包可以访问到的变量
3. 外部函数的生存周期明显要大于内部函数

***3.递归***
一个函数当中调用了自身时的函数叫做递归
```javascript
function getSum(x) {
        if (x==1){
          return 1
        }
        return x+getSum(x-1);
    };
 
    var sum1=getSum(5);
    console.log(sum1);
    console.log(getSum(10)
```
值得注意的是：递归函数每次都要创建一个新的函数作用域，所以比较慢速执行6