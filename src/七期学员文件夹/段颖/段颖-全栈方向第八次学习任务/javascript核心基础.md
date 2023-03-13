# javascript核心基础

#### 1.JavaScript 用法

1.Javascript 脚本代码必须位于 **<script>** 与 **</script>** 标签之间。

2.脚本代码可被放置在 HTML 页面的 **<body>** 和 **<head>** 部分中。

3.外部的javascript:<!DOCTYPE html>

 <html>

 <body>

 <script src="myScript.js"></script> 

</body> 

</html>

#### 2.javascript语法

1.JavaScript 字面量

a.**数字（Number）字面量** 可以是整数或者是小数，或者是科学计数(e)。

b.**字符串（String）字面量** 可以使用单引号或双引号

c.**表达式字面量** 用于计算

d.**数组（Array）字面量** 定义一个数组

e.**对象（Object）字面量** 定义一个对象：

{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

f.**函数（Function）字面量** 

2.JavaScript 变量

a.用于存储数据值。

b.**三种变量命名规则：**

var **firstName**='king';//小驼峰

var **FirstName**='queen';//大驼峰

var **first_name**='maizi';//下划线法

c.const 关键字用来声明 JavaScript中的常量（与变量相对，不可修改，但同样是用于存储信息的"容器"。），常量的值不能通过重新赋值来改变，并且不能重新声明。

d.**允许重复声明变量，后声明的覆盖之前的**

3.JavaScript 关键字

4.JavaScript 注释

//或者/*     */

5.JavaScript 数据类型(7种)

#### 3.JavaScript 语句

https://chibaoshaitaiyang-1316184616.cos.ap-beijing.myqcloud.com/%E8%AF%AD%E5%8F%A5%E6%A0%87%E8%AF%86%E7%AC%A6.png![语句标识符](E:\语句标识符.png)

#### 4.JavaScript 数据类型

1.数组有四种方式：

```
var arr1 = new Array('a', 'b', 'c');    //这是一个预定义的数组，在创建时初始化
var arr2 = ['a', 'b', 'c' ];       //同样是在创建时初始化，但是这种创建更为简洁直观
var arr3 = new Array( );   var arr4 = [ ];     //这两种是创建空的数组
```

#### 5.JavaScript 对象

1.对象定义

```
var person={
"name":"小明",
"age":"18",
"like":function(){
            return "喜欢打篮球,弹吉他";
      }
}
```

#### 6.JavaScript 函数

1.局部 JavaScript 变量

在 JavaScript 函数内部声明的变量（使用 var）是*局部*变量，所以只能在函数内部访问它。（该变量的作用域是局部的）。

2.全局 JavaScript 变量

在函数外声明的变量是*全局*变量，网页上的所有脚本和函数都能访问它。

#### 7.javascript事件

![HTML事件](E:\HTML事件.png)https://chibaoshaitaiyang-1316184616.cos.ap-beijing.myqcloud.com/HTML%E4%BA%8B%E4%BB%B6.png

#### 8.javascript字符串

######          JavaScript == 与 === 区别

1、对于 string、number 等基础类型，== 和 === 是有区别的

- a）不同类型间比较，== 之比较 "转化成同一类型后的值" 看 "值" 是否相等，=== 如果类型不同，其结果就是不等。
-  b）同类型比较，直接进行 "值" 比较，两者结果一样。

2、对于 Array,Object 等高级类型，== 和 === 是没有区别的

进行 "指针地址" 比较

3、基础类型与高级类型，== 和 === 是有区别的

- a）对于 ==，将高级转化为基础类型，进行 "值" 比较

-  b）因为类型不同，=== 结果为 false

  

#### 9.javascript运算符

##### 对字符串和数字进行加法运算

两个数字相加，返回数字相加的和，如果数字与字符串相加，返回字符串，如下实例：

x=5+5; y="5"+5; z="Hello"+5;

*x*,*y*, 和 *z* 输出结果为:

10
        55
        Hello5

#### 10.JavaScript break 和 continue 语句

break 语句用于跳出循环。

continue 用于跳过循环中的一个迭代。

#### 11.JavaScript 类型转换

1.JavaScript 数据类型

在 JavaScript 中有 6 种不同的数据类型：

- string
- number
- boolean
- object
- function
- symbol

3 种对象类型：

- Object
- Date
- Array

2 个不包含任何值的数据类型：

- null

- undefined

  (可以使用 **typeof** 操作符来查看 JavaScript 变量的数据类型。)

  2.数据类型转换

  ## 一、转换为字符串

  | **方式**           | **说明**                     | **案例**                              |
  | ------------------ | ---------------------------- | ------------------------------------- |
  | toString()         | 转换为字符串                 | var num=1; alert(num.toString());     |
  | String() 强制转换  | 转换成字符串                 | var num=1; alert(String(num));        |
  | **加号拼接字符串** | 和字符串拼接的结果都是字符串 | var num=1; alert(num+'我是个字符串'); |

###### 二、转换为数字型（重点）

| **方式**                | **说明**                       | **案例**            |
| ----------------------- | ------------------------------ | ------------------- |
| parseInt(string) 函数   | 将string 类型转换成整数数值型  | parseInt('34')      |
| parseFloat(string) 函数 | 将 string 类型转换为浮点数值型 | parseFloat('34.81') |
| Number() 强制转换函数   | 将 string 类型转化为数值型     | Number('12')        |

###### 三、转换为布尔类型

| **方式**       | **说明**             | **案例**        |
| -------------- | -------------------- | --------------- |
| Boolean() 函数 | 其他类型转换成布尔值 | Boolean('true') |

#### 12.JavaScript 正则表达式

![https://chibaoshaitaiyang-1316184616.cos.ap-beijing.myqcloud.com/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F.png](E:\正则表达式.png)

#### 13.JavaScript 错误 - throw

#### 14.JavaScript 使用误区

1.**if** 条件语句返回 **false** (是我们预期的)因为 x 不等于 10:

var x = 0;if (x == 10)

**if** 条件语句返回 **false** (不是我们预期的)因为条件语句执行为 x 赋值 0，0 为 false:

var x = 0;if (x = 0)



2.==与===在进行比较时.

3.加法与连接注意事项

**加法**是两个**数字**相加。

**连接**是两个**字符串**连接。

JavaScript 的加法和连接都使用 + 运算符。

var x = 10 + 5;     // x 的结果为 15
       var x = 10 + "5";    // x 的结果为 "105"

4.浮点型数据使用注意事项

JavaScript，对浮点型数据的精确度都很难确定：

var x = 0.1;
        var y = 0.2;
        var z = x + y      // z 的结果为 0.30000000000000004
        if (z == 0.3)      // 返回 false

5.字符串分行

字符串断行需要使用反斜杠(\)

var x = "Hello \
                    World!";

15.this的使用

**this 的多种指向:**

-  1、在对象方法中， this 指向调用它所在方法的对象。
-  2、单独使用 this，它指向全局(Global)对象。
-  3、函数使用中，this 指向函数的所属者。
-  4、严格模式下函数是没有绑定到 this 上，这时候 this 是 undefined。
-  5、在 HTML 事件句柄中，this 指向了接收事件的 HTML 元素。
-  6、apply 和 call 允许切换函数执行的上下文环境（context），即 this 绑定的对象，可以将 this 引用到任何对象。

#### 16.JavaScript 类(class)

1.class Runoob 

{  constructor(name, url)

 {    this.name = name;    this.url = url;  }

 }

2.class Runoob {  constructor(name, year) {    this.name = name;    this.year = year;  }  age() {    let date = new Date();    return date.getFullYear() - this.year;  } }  let runoob = new Runoob("菜鸟教程", 2018);