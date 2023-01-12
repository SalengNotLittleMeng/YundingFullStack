# JavaScript学习笔记

## 一.JavaScript三种书写方式

### 1.将JS编写到html`<head>`标签中

需要写在`<strcpy>`标签中

```html
<script>
    alert("hello world");//这里分号可以不加，JS会自动添加分号，但有时会加错
    console.log('hello world');
    document.write('hello world');
    let num=prompt('请输入一个整数');//用户输入
</script>
```

### 2.可以将JS编写到外部的.js文件中

```html
<script src="./script.js"></script>
```

注意：CSS中使用link进行连接，JS用script链接

### 3.可以将JS编写到特定的属性中

```html
<button onclick="alerk('hello world')">按钮</button>
<a href="javascript:alerk('hello world')">超连接</a>
```

## 二.字面量、变量和常量

### 1.字面量

在JS中可以直接使用

​               例如：1 2 3.....等数字 true null "hello"......

```javascript
console.log("hello")
```



### 2.变量

可以储存字面量，相当于定义变量

***<u>JS中所有可以由我们自主命名的内容窦娥可以被认为是一个标识符标识符命名只能含有字母、数字、下划线、$、且不能字母开头</u>***

***<u>声明变量时可以用 let 也可以用 var</u>***

注意：变量中不储存任何值，而是储存值的内存地址

```javascript
//可以先定义再赋值
let x
x=80
console.log(x)
//或者直接定义并赋值
let i=100
console.log(i)
```

<img src="https://liangjia.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202022-12-20%20205620.png" alt="屏幕截图 2022-12-20 205620" style="zoom: 50%;" />

### 3.常量

使用const声明常量，常量只能声明一次，重复声明会报错

常量命名规范：字母全部大写

```javascript
const PI=3.1415926
console.log(PI)
```

## 三.数据类型

### 数值（Number）

JS中整数和浮点数都是Number类型的，JS中的数值不是无限大的，当数值超过一定值时会显示近似值

```javascript
let a=10 //返回10
a=10.5 //返回10.5
a=9999999999999999 //返回近似值
a=99999 ** 99999 //**代表幂运算（99999的99999次幂），返回Infinity(表示无穷)
a=0.1+0.3 //返回0.3的近似值
a=1-'a'//返回NaN(表示Not a Number)
console.log(a)

/*其他进制的数字*/
二进制 0b
八进制 0o
十六进制 0x

let a=0b1010 //返回值为10
console.log(a)
```

### 大整数（Bigint）

用来表示一些较大的整数，大整数使用n结尾，可以表示的数是无限大

```javascript
let a
a=99999999999999999999999999999999n //返回数值为99999999999999999999999999999999n
```

### 字符串（String）

JS中使用单引号或者双引号表示字符串

转义字符\   

（双引号里的字符串不可以换行，双引号里不可以含有双引号，所以可以使用转义字符）（单引号可以换行）

```html
\"" -->""
\'' -->''
\\ -->\
\t -->制表符
\n -->换行
```

```javascript
let a='hello'
a="你好"
a="这是一个\“字符串"
a="呵呵\t哈哈哈"
a="呵呵\n哈哈哈"
```

模板字符串

（使用反单引号`来表示模板字符串，模板字符串可以用来嵌入变量）

```javascript
let name='老师'
let str=`您好，${name}` 
console.log(str) //返回结果为 您好，老师

let b=10 
console.log(`b=${b}`) //返回结果为 b=10
```

使用typeof检查一个字符串时会返回 string     (typeof可以用来检查数据类型)

```javascript
let c='hello'
console.log(typeof c) //返回值为 string
```

### 布尔值（Boolean）

布尔值主要用来进行逻辑判断，布尔值只有两个（   true(真)   和   false(假)   ）

使用typeof检查一个布尔值时会返回 boolean

```javascript
let b=true
console.log(typeof b) //返回值为 boolean
```

### 空值（Null）

空值表示空对象，空值只有一个null

使用typeof检查一个空值时会返回object,所以使用typeof无法检查空值

### 未定义（Underfined）

当声明一个变量但没有赋值时，它的值就是Undefined，Undefined类型的值只有一个就是Undefined

使用typeof检查一个Undefined时会返回Undefined 

### 符号（Symbol）

用来创建一个唯一标识

### 对象（Object）

## 四.数据类型转换

### 转换为字符串

1.调用toString()方法将其他数据类型转换为字符串

​         调用xxx的yyy方法就是（     xxx.yyy()     ）

​          由于 null 和 underfined 中没有 toString() 所以  null 和 underfined 使用 toString() 会报错

```javascript
/*number-->string*/
let a=10
console.log(typeof a,a) //返回结果为 number 10

a=a.toString()
console.log(typeof a,a) //返回结果为 string 10


/*bigint-->string*/
let b=11n
console.log(typeof b,b) //返回结果为 bigint 11n

b=b.toString()
console.log(typeof b,b) //返回结果为 string 11


/*boolean-->string*/
let c=true
console.log(typeof c,c) //返回结果为 boolean true

c=c.toString()
console.log(typeof c,c) //返回结果为 string true
```

2.调用String()函数将其他类型转换为字符串

​          调用xxx函数就是（     xxx()    ）

​           对于拥有 toString() 方法的值调用String()函数时，实际上和toString() 方法没有区别

​           对于null,则直接转换为'null'

​           对于undefined,直接转换为’undefined‘

```javascript
/*null-->string*/
let d=null
console.log(typeof d,d)//返回结果为 null null

d=String(d)
console.log(typeof d,d)//返回结果为 string null


/*undefined-->string*/
let e=undefined
console.log(typeof e,e)//返回结果为 undefined undefined

e=String(e)
console.log(typeof e,e)//返回结果为 string undefined
```

### 转换为数值

1.使用Number()函数将其他类型转换为数值

​            转换情况：

​                    字符串：

​                            如果字符串是一个合法的数字，则会转换为对应的数字

​                            如果不是一个合法的数字，则会转化为NaN

​                            如果字符串是空串或纯空格的字符串，则会转换为0

​                   布尔值：

​                            true 转换为 1，false 转换为 0

​                            null 转换为 0

​                            undefined 转换为 NaN

```javascript
/*string-->number*/
let a='123'
console.log(typeof a,a)//返回结果为 string 123

a=Number(a)
console.log(typeof a,a)//返回结果为 number 123
/*同理*/
a='abc' // NaN
a='3.1415926' // 3.1415926
a='11px' // NaN
a='' // 0
a='    ' // 0


/*boolean-->number*/
let b=true
console.log(typeof b,b)//返回结果为 boolean true

b=Number(b)
console.log(typeof b,b)//返回结果为 number 1
/*同理*/
b=false // 0


/*null-->number*/
b=null // 0


/*undefined-->number*/
b=undefined // undefined
```

2.专门用来将字符串转换为数值的两个方法

​         parseInt() —— 将一个字符串转换为一个整数

​                           解析时，会从左向右读取一个字符串，直到读取到字符串中所有的整数

​         parseFloat() —— 将一个字符串转换为浮点数

```javascript
/*string-->number*/
let c='123px'
console.log(typeof c,c)//返回结果为 string 123px

c=parseInt(c)
console.log(typeof c,c)//返回结果为 number 123

c='a123' // NaN(从左向右解析，如果不是整数开头，则不会继续往后解析，直接返回结果为NaN)
c='3.14' // 3(原理同上，浮点数可以用parseFloat() 转换)
```

### 转换为布尔值

1.使用Boolean()函数将其他类型转换为布尔值

​            转换情况：

​                    数值：

​                           0和NaN转换为false , 其余都是true

​                    字符串：

​                            空串转换为false , 其余都是true

​                     null 和 undefined 都转换为 false

​                     ***<u>(对象都会转换为true)</u>***

​                     ***<u>(所有表示空性的错误的没有的都会转换为false:0   NaN   空串   null   undefined)</u>***

```javascript
/*number-->boolean*/
let a=1
console.log(typeof a,a)//返回结果为 number 1

a=Boolean(a)
console.log(typeof a,a)//返回结果为 boolean true
/*同理*/
a=-1 // true
a=0 // false


/*string-->boolean*/
let b='abc'
console.log(typeof b,b)//返回结果为 string abc

b=Boolean(b)
console.log(typeof b,b)//返回结果为 boolean true
/*同理*/
b='' // false
b='true' // true
b='false' // true
b=" " // true


/*null-->boolean*/
c=null // false


/*undefined-->boolean*/
d=undefined // false

```

## 五.运算符

### 算数运算符

```html
+ 加法运算符
- 减法运算符
* 乘法运算符
/ 除法运算符
** 幂运算符
% 取模运算符
```



```javascript
let a=1+1 // 2
a=10-5 // 5
a=2*4 // 8
a=10/3 // 3.333333334(注意：JS运算除法可以有小数部分)
a=10/0 // Infinity
a=10**4 // 10000
a=9**.5 // 3(相当于开方)
a=13%2 // 1

/*算术运算时，除了字符串的加法，其他运算的操作数是非数值时，都会转换为数值再运算,JS会自动进行类型转换*/
a=10-'5' // 10-5
a=10+true // 10+1
a=5+null // 5+0
a=6-undefined // 6-NaN

/*当任意一个值和字符串做加法时，它会先将其他类型值转换为字符串，然后拼接字符串
(可以通过这一点来完成类型转换，可以通过为任意类型+一个空串的形式来将其转换为字符串，其原理和String()函数相同)*/
a='hello'+'world' // helloworld
a='1'+'2' // 12
console.log(a)

let b=true
b=b+''
console.log(typeof b,b) // 返回结果为 string true
```

### 赋值运算符

```javascript
+=  -=  *=  /=  %=  **=   
//用法和C语言一样
??=  //空赋值，只有当变量的值为null或undefined时才会对变量进行赋值
a=undefined
a??=101
console.log(a)
```

### 正负号运算

当我们对非数值进行正负运算时，会先将其转换为数值然后再运算(可以利用这个特点进行类型转换)

```javascript
let b='123'
b=+b // b=number(b)
console.log(typeof b,b) // number 123
```

### 自增自减运算符

```javascript
/*
++自增运算符
1.使用后会使原来的数字立刻增加1
2.自增分为前自增（++a）和后自增（a++）
3.无论是前自增还是后自增都会使变量立刻增加1
*/

let n=5
            5  +  7  +7
let result=n++ + ++n +n
console.log(result) // 19

/*自减是一个意思*/
```

### 逻辑运算符

```javascript
/*
! 逻辑非
可以对一个布尔值进行取反操作
true-->false
false-->true
如果对一个非布尔值进行取反，它会先将其转换为布尔值然后再取反，可以利用这个特点将其他类型转换为布尔值
*/
let a=true
a=!a
console.log(a) // false
let b=123
b=!b
console,log(typeof b,b) // boolean false

/*
&& 逻辑与
可以对两个值进行与运算
&&左右两边都为true则返回true，否则返回false
与运算找false，找到false直接返回，没有false才会返回true
对于非布尔值进行与运算时，它会转换为布尔值然后运算，但是最终会返回原值
      如果第一个值为false，则直接返回第一个值
      如果第一个值为true，则返回第二个值
*/
let result=true && true // true
result=true && false // false
console.log(result)
true && alert(123) // 第一个值为true，alert会执行
false && alert(123) // 第一个值为false，alert不会执行
      true&&true-->true
result=1 && 2 // 2
      true&&false-->false
result=1 && 0 // 0
      false&&false-->false
result=0 && NaN // 0

/*
|| 逻辑或
可以对两个值进行或运算
当||左右两边有true时，则返回true，否则返回false
或运算是找true，找到true则直接返回，没有true才会返回false
对于非布尔值进行或运算，他会先转换为布尔值然后再运算，但是最终会返回原值
      如果第一个值为false，则直接返回第一个值
      如果第一个值为true，则返回第二个值
*/
let result=true||true // true
result=false||false // false
console.log(result)
false||alert(123) // 第一个值为false，alert会执行
true||alert(123) // 第一个值为true，alert不会执行
result=1 || 2 // 1
result="hello" || NaN // "hello"
result=NaN || 1 // 1
result=NaN || null // null
```

### 关系运算符

```javascript
/*
关系成立返回true，不成立返回false
>   >=   <   <=
当对非数值进行关系运算时，它会先将其转换为数值再进行比较
当关系运算符的两端是两个字符串，它不会将字符串转换为数值，而是逐位比较字符的Unicode码
*/
let result=10<5 // true
result=5<'10' // true
result='1'>false // true
result='a'<'b' // true
result='abc'<'b' // true(注意，逐位比较，所以依旧是a和b比较)
result='12'<'2' // true(注意，字符串逐位比较，所以这里是1和2比较)
result=+'12'<'2' // false
console.log(result)
```

### 相等运算符

== 相等运算符

使用相等运算符比较两个不同类型的值时，它会将其转换为相同类型（通常为数值）然后再比较

null和undefined进行比较会返回true

NaN不和任何值相等，包括它自身

```javascript
let result=1==1 // true
result=1==2 // false
result=1=='1' // true
result=true=='1' // true
result=null==undefined // true
result=NaN==NaN // false
console.log(result)
```

===全等运算符

全等运算符不会进行自动类型转换，如果两个值类型不同则直接返回false

null和undefined进行全等比较时会返回false

```javascript
let result=1==='1' // false
result=null===undefined // false
console.log(result)
```

!=不等，会自动类型转换

!==不全等，不会自动类型转换

### 条件运算符

```javascript
/*
条件表达式？表达式1：表达式2
条件运算符在执行时，会先对条件表达式进行求值判断，结果为true，则执行表达式1
                                          结果为false，则执行表达式2            
*/
false?alert(1):alert(2) // 2
let a=100
let b=20
a>b?alert('a大'):alert('b大') // a大
```

## 六.代码块

使用{}来创建代码块，代码块可以对代码进行分组

let具有块作用域，var没有

```javascript
{
    let a=1
    console.log(a)
}
```

## 七.语句

### if语句

（用法和C语言类似）

```javascript
if(条件表达式){
    语句
}//如果if后添加的表达式不是布尔值，会转换为布尔值再进行运算
```

### 循环语句

（用法和C语言类似）

do-while循环      while循环        for循环

## 八.对象

对象中可以储存多个类型的数据，这些数据被称为属性

### 创建对象

```javascript
/*创建对象*/
let obj = Object()
/*向对象中添加属性：对象.属性名=属性值
属性名通常是一个字符串，但属性名可以是任何值，没什么要求，但是如果属性名太过于特殊，就需要使用[]来设置*/
obj.name="李华"
obj.age=18
obj.sex="男"
obj["1234@&$687"]="呵呵"
/*修改属性*/
obj.name="小明"
/*删除属性*/
delete obj.name
console.log(obj)//这是读取对象
console.log(obj.name)//这是读取对象中的属性（如果读取的是对象中没有的属性，就会返回undefined）

/*通过[]去操作属性时，可以使用变量*/
let str="address"
obj[str]="教室" // 等价于obj["address"]="教室"
obj.str="呵呵" // 使用.的形式添加属性时，不能使用变量
console.log(obj)

/*对象的属性值可以是任何数据类型，也可以是一个对象*/
obj.a=123
obj.b='hello'
obj.c=true
obj.d=123n
obj.e=Object()
obj.e.name="李华" //在对象的对象里添加属性
obj.e.age=18 //在对象的对象里添加属性
console.log(obj)
```

in 运算符

（-用来检查对象中是否含有某个属性值

​    -语法 属性名 in obj

​    -如果有就返回true，没有就返回false）

```javascript
let obj=Object()
obj.name="李华"
obj.age=18
obj.sex="男"
console.log("name" in obj) //返回值为true 
```

使用typeof检查一个对象时，会返回object

### 对象字面量

​           可以直接用 {} 创建对象

​            使用 {} 创建对象时可以直接向对象中添加属性

​                      语法：

​                             {

​                             属性名：属性值，

​                            }

```javascript
let obj={
    name:"李华",
    age:18,
    ["gender"]:"男",
    address:{
        a:"教室"
        b:"宿舍"
    }
}
console.log(obj)
```

### 枚举对象中的属性

枚举属性：指将对象中的所有属性全部获取

```javascript
/*for-in 语句*/
for(let propName in 对象){
    语句...
}
/*for-in循环体会执行多次，有几个属性就执行几次，每次执行时都会将一个属性名赋值给我们所定义的变量,利用symbol添加的属性不可以枚举*/
let obj={
    name:"李华"
    age:18
}
for(let propName in obj){
    console.log(propName)
}
/*或者*/
for(let propName in obj){
    console.log(propName,obj[propName])
}
```

### 修改变量，修改对象

```javascript
/*修改对象时，如果有其他变量指向该对象，则所有指向该对象的变量都会受到影响；修改变量时，只会影响当前变量*/
let obj={
    name:"李华",
}
let obj2=obj
obj2.name="小明" // 修改对象
console.log(obj)  // name:小明
console.log(obj2)  // name:小明


let obj={
    name:"李华",
}
let obj2=obj
obj2=null // 修改变量
obj2.name="小明"
console.log(obj)  // name:李华
console.log(obj2)  // name:小明

/*const只是禁止变量被重新赋值，对对象的修改没有任何影响*/
```

## 九.函数

语法：

```javascript
function 函数名(){
    语句。。。
}
```

### 创建函数：

```javascript
/*函数声明*/
function fn(){
    console.log("李华");
}
fn() // 调用函数
console.log(typeof fn) // function

/*函数表达式*/
const fn2=function(){
    console.log("函数表达式");
}

/*箭头函数*/
const fn3=()=>{
    console.log("箭头函数");
}
```

### 参数：

定义函数时可以在函数中指定数量不等的参数

在函数指定义参数，就相当于在函数内部声明了对应的函数变量但是没有赋值

```javascript
/*函数声明*/
function 函数名([参数]){
    语句...
}
/*函数表达式*/
const 变量=function([参数]){
    语句...
}
/*箭头函数*/
([参数])=>{
    语句...
}
    
/*例子，两数相加*/
    function sum(a,b){        //a,b为形参
        console.log(a+b);   //    6
    }
    sum(2,4) // sum内的数字为实参，赋值给a,b,可以随意变化
    
/*参数可以是任意类型*/
    function fn(a,b){
        console.log("a=",a);
        console.log("b=",b);
    }
    fn({name:"李华"}，"hello")

/*对象可以作为参数传递*/
    function fn(a){
        a={}   //  修改变量时，只会影响当前变量
        a.name="小明"   //  修改对象时，如果有其他变量指向该对象，则所有指向该对象的变量都会受到影响
        console.log(a);
    }
    let obj={name:'李华'}  //  传参时，传递的不是变量本身，而是变量中储存的值
    fn(obj)
```

### 返回值：

在函数中，可以通过return指定函数的返回值，返回值是函数的执行结果，函数调用完毕返回值会作为结果返回

```javascript
function sum(a,b){
    return a+b  //  计算完成后，将结果返回而不是直接打印
}
let result=sum(123,456)
console.log(result)  //  579
```

## 十.面向对象

### 面向对象

```javascript
const people={
    //添加属性
    name:"李华",
    age:18,
    height:180,
    weight:120
    
    //添加方法
    sleep(){
        console.log(this.name+"给外国友人写信")
    },
}
```

### 类、方法

使用object创建对象的问题：无法区分不同类型的对象，不方便批量创建对象

JS中可以通过类（class）来解决这个问题：

- 类是对象模板，可以将对象中的属性和方法直接定义在类中，定义后，就可以直接通过类来创建对象
- 通过同一个类创建的对象，称为同类对象，可以使用instanceof来检查一个对象是否由某个类创建，如果是，返回trrue，如果不是，返回false
- 如果某个对象是由某个类创建的，则该对象是这个类的实例

语法：class 类名 {}  ***<u>注意：类名要使用大驼峰命名法</u>***

​           const 类名 = class {}

​           通过类创建对象 ： new 类（）

```javascript
//person类专门创建人的对象
class person{
    name="李华" //person的实例属性name    p1.name
    age=18     //实例属性只能通过实例访问     p1.age 
    sayHello(){
        console.log('大家好，我是' + this.name)
    }  //添加方法（实例方法）实例方法中this就是当前实例
}

//dog类专门创建狗的对象
class dog{
    
}

const p1 = new person() //调用构造函数创建对象
const d1 = new dog()

p1.sayHello() // 调用方法

console.log(p1)
console.log(d1)

console.log(p1 instanceof person) // true
console.log(p1 instanceof dog) // false
```

### 构造函数

在类中添加一个特殊的方法constructor,该方法称为构造函数（构造方法），构造函数会在我们调用类创建对象时执行

```javascript
class person{
    constructor(name,age,gender){
        this.name=name    // 可以在构造函数中，为实例属性进行赋值，this表示当前所创建的对象
        this.age=age
        this.gender=gender
    }
}
p1.age=20  //  修改属性
const p1=new person("李华",18,"男") // 调用构造函数创建对象

console.log(p1)
```

### 封装--安全性

- 对象就是一个用来储存不同属性的容器

- 对象不仅储存属性，还要负责数据的安全，直接添加到对象中的属性并不安全，因为它们可以被任意修改

- 确保数据安全：

  1.私有化数据（将需要保护的数据设置为私有，只能在类内部使用）

  2.提供setter和getter方法开方对数据的操作

  ​          可以控制属性的读写权限

  ​          可以在方法中对属性的值进行校验

  ```javascript
  get属性名(){
      return this.#属性
  }
  set属性名(){
      this.#属性=参数
  }
  ```

  

```javascript
class person{    
    #name   // 私有属性必须先声明
    #age
    #gender
    constructor(name,age,gender){
        this.#name=name 
        this.#age=age
        this.#gender=gender
    }
    getName(){   // getter方法，用来读取属性
        return this.#name
    }
    setName(){   // setter方法，用来设置属性
        this.#name=name
    }
    setAge(){
        if(age>=0){
            this.#age=age // 在方法中对属性的值进行校验
        }
    }
}
const p1=new person("李华",18,"男")

p1.getName()   // getter方法，用来读取属性
p1.setName("小明")   // setter方法，用来设置属性

console.log(p1)
```

### 多态--扩展性

- JS中不会检查参数的类型，所以就意味着任何数据都可以作为参数传递
- 要调用某个函数，无需指定的类型，只要满足某些条件即可

```javascript
class person{
    constructor(name,age,gender){
        this.name=name 
        this.age=age
        this.gender=gender
    }
}
const p1=new person("李华",18,"男")

function sayHello(obj){
    console.log("hello,"+obj.name)
}
sayHello(p1)
console.log(p1)
```

### 继承--灵活性

- 可以通过extend关键字来完成继承
- 当一个类继承另一个类时，就相当于将另一个类中的代码复制到当前类中
- 继承发生时，被继承的类称为父类，继承的类称为子类

```javascript
class Lili{
    constructor(name,age,gender){
        this.name=name 
        this.age=age
        this.gender=gender
    }
    sayHello(){
        console.log("hello")
    }
}

class Mary extends Lili{
    //在子类中，可以通过创建同名的方法重写父类的方法
    sayHello(){
        console.log("你好")
    }
}

class Anna extends Lili{
    //重写构造函数
    constructor(name,age){
        //重写构造函数时，构造函数的第一行代码必须是super()
        super(name)
        this.age=age
    }
}

const lili = new Lili("Lili",18,"女")
const mary = new Mary("Mary")  //修改name属性
const anna = new Anna("Anna")  //修改name属性

console.log(lili)
console.log(mary)
console.log(anna)
```

## 十一.数组（Array）

- 数组是一种复合数据类型，在数组中可以储存多个不同的数据类型

- 数组中的数据可以通过索引（index）操作数据

- 创建数组：通过Array()来创建，也可以通过[]来创建数组

- 向数组中添加元素     语法：数组[索引] = 元素

- length

  1.获取数组长度

  2.获取的实际值就是数组的最大索引 + 1

  3.向数组最后添加元素

  ​        数组[数组.length] = 元素

```javascript
const arr=new Array()
const arr2=[1,5,34,67,22] // 数组字面量
arr[0]=10
arr[1]=23
arr[2]=12
arr[arr.length]=55 // 向数组最后添加元素

//任何类型的值都可以成为数组中的元素
const arr=[1,"hello",true,{name:"李华"}]
console.log(arr)
```

### 遍历数组

```javascript
arr=["李华","小明","小红","小兰"]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

//定义一个person类，类中有两个属性name和age,然后创建几个person对象，将其添加到一个数组中，遍历数组，并打印未成年人的信息
class person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}

const p1=[
    new person("李华",17),
    new person("小明",19),
    new person("小红",6),
]

for(let i=0;i<p1.length;i++){
    if(p1.age<18){
        console.log(p1[i])
    }
}
```

### 数组的方法

```javascript
push()  //向数组的末尾添加一个或多个元素
pop()   //删除并返回数组的最后一个元素
unshift() //向数组的开头添加一个或多个元素，并返回新的长度
shift()  //删除并返回数组的第一个元素
splice() //可以删除、添加、插入、替换数组中的元素   参数：1.删除的起始位置 2.删除的数量

const arr=["李华","小明","小红"]
let result=arr.push("小兰","张三")  //向arr末尾添加"小兰"，"张三"
result=arr.pop()
arr.unshift("李四") //向arr开头添加"李四"
arr.shift()
console.log(arr)
```

