

# JS

JS代码需要编写到script标签中

## 输出语句

作用：向外部输出一个内容

*以下三个都是输出语句，只不过是输出的位置不同*

`alert("害害害")`  *弹出提示框*

`console.log('你猜我在哪？')`   *摁F12开发者工具在控制台可以看到这句话*

`document.write('你猜我在哪？')`   *文档就是网页，网页就是文档，所谓的在文档中写一个内容就是在网页中输出一个内容*

#### `document.write`

可用于直接向 HTML 输出流写内容。简单的说就是直接在网页中输出内容。

**第一种**:输出内容用""括起，直接输出""号内的内容。

```
<script type="text/javascript">
  document.write("I love JavaScript！"); //内容用""括起来，""里的内容直接输出。
</script>
```

**第二种**:通过变量，输出内容

```
<script type="text/javascript">
  var mystr="hello world!";
  document.write(mystr);  //直接写变量名，输出变量存储的内容。
</script>
```

**第三种**:输出多项内容，内容之间用+号连接。

```
<script type="text/javascript">
  var mystr="hello";
  document.write(mystr+"I love JavaScript"); //多项内容之间用+号连接
</script>
```

**第四种**:输出HTML标签，并起作用，标签使用""括起来。

```
<script type="text/javascript">
  var mystr="hello";
document.write(mystr+"<br>");//输出hello后，输出一个换行符
  document.write("JavaScript");
</script>
```

**关于JS输出空格问题，如果想要实现输出空格，可以使用特殊字符“ ”实现**

```
<script type="text/javascript">
  document.write("&nbsp;");//输出空格
</script>
```

#### `confirm`

confirm 消息对话框通常用于允许用户做选择的动作，如：“你对吗？”等。弹出对话框(包括一个确定按钮和一个取消按钮)。

**语法:**

```
confirm(str);
```

**参数说明:**

```
str：在消息对话框中要显示的文本
返回值: Boolean值
```

**返回值:**

```
当用户点击"确定"按钮时，返回true
当用户点击"取消"按钮时，返回false
```

**注:** **通过返回值可以判断用户点击了什么按钮**

看下面的代码:

```
<script type="text/javascript">
    var mymessage=confirm("你喜欢JavaScript吗?");
    if(mymessage==true)
    {   document.write("很好,加油!");   }
    else
    {  document.write("JS功能强大，要学习噢!");   }
</script>
```

**结果:**

**[![img](https://img.mukewang.com/52e35bc60001f01a04230353.jpg)](https://img.mukewang.com/52e35bc60001f01a04230353.jpg)**

**注: 消息对话框是排它的，即用户在点击对话框按钮前，不能进行任何其它操作。**

#### `prompt`

弹出消息对话框,通常用于询问一些需要与用户交互的信息。弹出消息对话框（包含一个确定按钮、取消按钮与一个文本输入框）。

**语法:**

```
prompt(str1, str2);
```

**参数说明：**

```
str1: 要显示在消息对话框中的文本，不可修改
str2：文本框中的内容，可以修改
```

**返回值:**

```
1. 点击确定按钮，文本框中的内容将作为函数返回值
2. 点击取消按钮，将返回null
```

看看下面代码:

```
var myname=prompt("请输入你的姓名:");
if(myname!=null)
  {   alert("你好"+myname); }
else
  {  alert("你好 my friend.");  }
```

**结果:**

**[![img](https://img.mukewang.com/52e360780001ede107090353.jpg)](https://img.mukewang.com/52e360780001ede107090353.jpg)**

**注:在用户点击对话框的按钮前，不能进行任何其它操作。**

#### `window.open`

open() 方法可以查找一个已经存在或者新建的浏览器窗口。

**语法：**

```
window.open([URL], [窗口名称], [参数字符串])
```

**参数说明:**

```
URL：可选参数，在窗口中要显示网页的网址或路径。如果省略这个参数，或者它的值是空字符串，那么窗口就不显示任何文档。
窗口名称：可选参数，被打开窗口的名称。
    1.该名称由字母、数字和下划线字符组成。
    2."_top"、"_blank"、"_self"具有特殊意义的名称。
       _blank：在新窗口显示目标网页
       _self：在当前窗口显示目标网页
       _top：框架网页中在上部窗口中显示目标网页
    3.相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。
   4.name 不能包含有空格。
参数字符串：可选参数，设置窗口参数，各参数用逗号隔开。
```

**参数表:**

**[![img](https://img.mukewang.com/52e3677900013d6a05020261.jpg)](https://img.mukewang.com/52e3677900013d6a05020261.jpg)**

例如:打开http://www.imooc.com网站，大小为300px * 200px，无菜单，无工具栏，无状态栏，有滚动条窗口：

```
<script type="text/javascript"> window.open('http://www.imooc.com','_blank','width=300,height=200,menubar=no,toolbar=no, status=no,scrollbars=yes')
</script>
```

**注意：**运行结果考虑浏览器兼容问题。

#### `window.close`

close()关闭窗口

**用法：**

```
window.close();   //关闭本窗口
```

或

```
<窗口对象>.close();   //关闭指定的窗口
```

例如:关闭新建的窗口。

```
<script type="text/javascript">
   var mywin=window.open('http://www.imooc.com'); //将新打的窗口对象，存储在变量mywin中
   mywin.close();
</script>
```

**注意:上面代码在打开新窗口的同时，关闭该窗口，看不到被打开的窗口。**

## 编写位置

1.可以将js编写到网页内部的script的标签中

```
script type="text/javascript">
        alert("哈哈")
    </script>
```

2.可以将js编写到网页内部的script的标签中，然后通过script标签进行引入

`<script src="./script.js/script.js"></script>`

 3.可以将js代码编写到标签的属性当中

  一旦script标签用来引入文件了，就不要在他里面写JS代码了，即一个script同时只能有一个作用，要么用来引入文件，要么用来编写内部的一个脚本 ；如果既想引入外部又想写一个内联，就再引入一个script标签来使用

` <button *onclick*="alert('你点我干嘛！')">点我一下</button>`

button里面的alert用单引号，原因是外边用双引号，里面就要用单引号，外边用单引号，里面就要用双引号

  你点我干嘛不会在刷新网页的时候自动弹出，而是会在点击按钮的时候弹出

  当我们写到属性onclick里面的时候只有当我们点击按钮的时候他才会执行

`<button *onmousemove*="alert('你点我干嘛')">再点我一下</button>`

此属性在鼠标在它上面时警示框就会自动弹出

  所以根据设置的不同的属性，执行的时机也不相同

`<a href="javascript:alert(123);">超链接</a>`

此时超链接点进去不是超链接，而是会自动执行JavaScript的代码，但是需要在指令前面加一个JavaScript的前缀

​    `<a href="javascript:;">超链接</a>`

  此时的超链接什么都不会发生

三个位置没有优劣，写到哪里的都会用，只不过是使用场景不同，在开发中和大量的使用推荐写到外部的文件中与代码进行一个分离，方便后续的维护

## 基本语法

 *1.多行注释*

​        *注释中的内容会被解释器忽略*

​        *可以通过注释来对代码进行解释说明*

​        *也可以通过注释注释掉不想执行的代码*

*2.单行注释*

*3.JS严格区分大小写*

*4.在JS中多个空格和换行会被忽略，可以利用这个特点来对代码进行一个格式化*

*5.JS中每条语句都应该以分号结尾*

​        *JS中有自动添加分号的机制，解释器会自动添加分号*

## 字面量和变量

***字面量***

​        *字面量其实就是一个值，她所代表的含义就是他字面的意思*

​        *比如：1 2 3 4 100 "hello" true null...*

​        *在JS中所有的字面量都可以直接使用，但是直接使用字面量并不方便*

`console.log("hello")`

​    如果log后面的括号里写a，就不会在控制台打印出来，而且会报错，告诉你a还没有定义

​    所以字面量可以直接使用，而变量需要先声明然后才能使用

***变量***

​        *变量可以用来“存储”字面量*

​        *并且变量中存储的字面量可以随意的修改*

​        *通过变量可以对字面量进行描述，并且变量比较方便修改*

```
let x//设置变量x
        x = 80//此时控制台打印出来的值为80
        x = '哈哈'//此时控制台打印出来的值为 哈哈
        console.log(x)

        let age
        age = 80
        console.log(age)

```

*多行注释快捷键shift+alt+A*

​      *变量的使用*

​        *声明变量  --> let 变量名*

​             *--> var变量名（旧，不建议）*

​        *变量赋值  --> a = xx*

​        *声明和赋值同时进行  --> let i = 100*



## 变量的内存结构

变量在内存当中有一个类似表格的区域来存储

​    每一个内存数据实际上都会有唯一一个内存地址，通过内存地址就可以找到这个内存数据

​    变量并不直接存储任何值，而是存储值的内存地址

## 常量

 在JS中，使用const声明常量，常量只能赋值一次，重复赋值会报错

​    声明常量的时候一般字母会改成大写，纯大写表示他是一个常量

​    在JS中除了常规的常量外，有一些对象类型的数据，我们也会声明为常量

```
    const PI = 3.1415926

    console.log(PI)
```

## 标识符

在JS中，所有可以由我们自主命名的内容，都可以认为是一个标识符

​    像   变量名  函数名  类名...

使用标识符时需要遵循如下的命名规范

​    1.标识符只能含有字母，数字，下划线，$, 且不能用数字开头  

​    2.标识符不能是JS中的关键字和保留字，也不建议使用内置的函数或域名作为变量名

​    3.命名规范

​      通常使用驼峰命名法

​        首字母小写，每个单词开头大写

​        例如：maxlength --> maxLength

​      类名会使用大驼峰命名法

​        首字母大写，每个单词开头大写

​        例如：maxlength --> MaxLength

​      常量的字母全部大写

​        例如：MAX_LENGTH

## 数据类型

***JS有八种数据类型，七种原始数据类型1.数字number2.大数字bigInt3.字符串string4.空对象null5.undefined6.符号symbol7.布尔Boolean  和一种引用数据类型：对象object(函数 数组)***

### 数值（Number）

在JS中所有的整数和浮点数都是Number类型

JS中的数值并不是无限大的，当数值超过一定范围后会显示近似值

Infinity是一个特殊的数值表示无穷

NaN也是一个特殊的数值，表示非法的数值（not a number）

大整数（BigInt）

大整数用来表示一些比较大的整数

一个数字以n结尾就表示是大整数，他可以表示的数字范围是无限大

其他进制的数字：

二进制		0b

八进制		0o

十六进制		0x

输出的数字以十进制的形式去显示

typeof运算符

```
let a = 10
let b = 10n
console.log(typeof a)//打印的结果为number
console.log(typeof b)//打印的结果为bigint
```

用来检查不同的**值**的类型，而不是变量的类型，变量没有类型，变量是变量值是值

变量通过存储值的内存地址，来对值进行一个引用，所以typeof检查一个类型的时候检查的并不是变量而是值的类型

它会根据不同的值返回不同的结果

### 字符串

在JS中使用单引号或双引号来表示字符串

 `let a  =  'Hello'`

转义字符\

```
\" --> "
\' --> '
\\ --> \
\t --> 制表符
\n --> 换行
```

模板字符串

使用反单引号`(esc下面1左面)来表示模板字符串

特点：可以跨行使用

​			可以嵌入变量

```
let name = "孙悟空"
let str = `你好，${name}`
console.log(str)
//输出你好，孙悟空
```

```
let b = 10
console.log(`b = ${b}`)
//输出b = 10
```

使用typeof检查一个字符串时会返回"string"

### 其他的类型

#### 布尔值(Boolean)

布尔值主要用来进行逻辑判断

布尔值只有两个true和false

```
let bool = true
console.log(bool)
```

布尔值在底层的本质也是数字

使用typeof检查布尔值返回"boolean"

#### 空值(Null)

空值用来表示空对象

空值只有一个null

```
let a = null
console.log(a)
```

使用typeof检查空值返回"object"

使用typeof无法检查空值

#### 未定义(Undefined)

当声明一个变量而没有赋值时，它的值就是Undefined

Undefined类型的值只有一个就是Undefined

```
let b
console.log(b)
```

使用typeof检查一个Undefined类型的值时，会返回"Undefined"

#### 符号(Symbol)

```
let c = Symbol()//调用Symbol()创建了一个符号
console.log(c)
```

用来创建一个唯一的标识

使用typeof检查符号时会返回"symbol"

以上七种叫做原始值

原始值时构成程序世界当中数据的一个基础

1.Number

2.BigInt

3.String

4.Boolean

5.Null

6.Undefined

7.Symbol

原始值是构成各种数据的基石

原始值在JS中是不可变类型，一旦创建就不能修改

#### 类型转换

将一种数据类型转换为其他的数据类型

将其他类型转换为（字符串，数值和布尔值）

##### 转换为字符串

1.调用toString()方法将其他类型转换为字符串

```
调用xxx的yyy方法
-->xxx.yyy()
```

```
let a = 10
console.log(typeof a,a)
//输出number 10
a = a.toString()//'10'
console.log(typeof a,a)
//输出string 10
```

 需要把结果赋值给原变量才可以看到

**由于null和undefined中没有toString(),所以对这两个东西调用toString()时会报错**

2.调用String()函数将其他类型转换成字符串

```
调用xxx函数
-->xxx()
```

```
let b = 33
console.log(typeof b,b)
//输出number 33
b = String(b)
console.log(typeof b,b)
//输出string 33
```

原理：

对于拥有toString()方法的值调用String()函数时，实际上就是在调用toString()的方法

对于null,则直接转换为"null"

对于undefined,则直接转换为"undefined"

##### 将其他的数据类型转换为数值

1.使用Number()函数来将其他类型转换为数值(全都适用)

```
let a = '123'
console.log(typeof a,a)
//输出string 123
a = Number(a)
console.log(typeof a,a)
//输出number 123
```

转换的情况：

①字符串

如果字符串是一个合法的数字，就会自动转换成对应的数字

如果字符串不是合法数字，则转换为NaN

如果字符串时空串或纯空格的字符串，则转换为0

②布尔值

true转换为1，false转换为0

③null转换为0

④undefined转换为NaN

2.专门用来将字符串转换为数值的两个方法（只适用于字符串）

```
parseInt() --将一个字符串转换为一个整数
parseFloat() --将一个字符串转换为浮点数
```

```
let b = '123'
console.log(typeof b,b)
//输出string 123
b = parseInt(b)
console.log(typeof b,b)
//输出number 123
```

**parseInt**:解析时，会自左向右读取一个字符串，直到读取到字符串中所有的有效的整数

也可以使用parseInt()来对一个数字进行取整

**parseFloat**:解析时，会自左向右读取一个字符串，直到读取到字符串中所有的有效的小数

##### 布尔值

1.使用Boolean()函数来将其他类型转换为布尔值

```
let a = 1
console.log(typeof a,a)
//输出number 1
a = Boolean(a)
console.log(typeof a,a)
//输出boolean true
```

转换的情况：

数字：0和NaN转换为false，其他全是true

```
a = 1//true
a = -1//true
a = 0//false
a = NaN//false
a = Infinity//true
```

字符串：空串转换为false，其他全是true

```
a = 'abc'//true
a = 'true'//true
a = 'false'//true
a = ''//false
a = " "//true
```

null和undefined都转换为false

对象：对象通常都会转换为true

**所有表示空性的没有的错误的值都会转换为false，例如0、NaN、空串、null、undefined、false**

### 运算符

又名操作符(Operator),可以用来对一个或者多个值进运算

#### 算术运算符

##### + 加法运算符

##### - 减法运算符

##### * 乘法运算符

##### / 除法运算符

##### ** 幂运算

##### % 模运算，取模，两个数相除取余数

JS中除完以后不会取整

一般情况下运算符的前后各写一个空格，使操作数和运算符离的没有那么近，拉开点距离

```
let a = 1 + 1	//2
a = 10 - 5	//5
a = 2 * 4	//8
a = 10 / 5	//2
a = 10 / 3	//3.333333333333
a = 10 / 0	//Infinity
a = 10 ** 4	//10000
a = 9 ** .5	//3
a = 10 % 2	//0
a = 10 % 3	//1
```

.5代表开方，也可以进行开方的运算

JS是一门弱类型语言，当我们进行计算时，他会通过自动的类型转换来完成运算

##### 注意

算数运算时，除了字符串的加法，其他运算的操作符是非数值时，都会转换为数值然后再运算

```
a = 10 - '5'		//10-5
a = 10 + true		//10+1
a = 5 + null		//5+0
a = 6 - undefined		//6-NaN=NaN
```

当任意一个值和字符串做加法运算时，他会先将其他值转换成字符串，然后再做拼串的操作

可以利用这一个特点来完成类型转换

```
a = true
console.log(typeof a,a)
//输出boolean true
a = a + ''
//加一个空串
console.log(typeof a,a)
//输出string true
```

可以通过任意类型加一个空串的形式来将其转换为字符串，其原理和String()函数相同，但使用起来更加简洁

#### 赋值运算符

用来将一个值赋值给一个变量

##### =

作用：用来将右侧的值赋值给左侧的变量

```
let a = 10
```

一个变量只有在等号左边时才是变量，在等号右边时他是值

大部分运算符都不会改变变量的值，赋值运算符除外

##### +=

##### -=

##### *=

##### /=

##### %=

##### **=

##### ？？=

```
a += 5 等价于 a = a + 5
其他以此类推
？？= 为空赋值，只有当变量的值为null或者undefined时，才会对变量进行赋值
```

#### 一元运算符

只需要一个操作数的运算符

```
let a = 10
console.log(a)
a = +a
console.log(a)
```

##### 正号+

不会改变数值的符号

##### 负号-

可以对数值进行符号位取反

*数字的隐式类型转换*

```
let b = '123'
console.log(typeof b,b)
//输出string 123
b = +b
console.log(typeof b,b)
//输出number 123
```

#### 自增和自减

##### 自增运算符++

使用后会使得原来的变量立刻增加1

```
let a = 10	//a=10
a++		//a=11
```

自增分为前自增(++a)和后自增(a++)

无论是a++还是++a，都会使原变量立刻增加1

不同的是++a和a++所返回的值不同

a++是自增前的值	旧值

++a是自增后的值	新值

```
let a = 10
let b = a++
console.log("a++ =",b)
//输出a++ = 10
```

```
let a = 10
let b = ++a
console.log("++a =",b)
//输出++a = 11
```

练习

```
let n = 5
let result = n++ + ++n + n
console.log(result)
//输出5+7+7=19
```

##### 自减运算符--

使用后会使得原来的变量立刻减少1

自减分为前自减(--a)和后自减(a--)

无论是a--还是--a，都会使原变量立刻减少1

不同的是--a和a--所返回的值不同

a--是自减前的值	旧值

--a是自减后的值	新值

#### 逻辑运算符

##### ！ 逻辑非

可以用来对一个值进行非运算

他可以对一个布尔值进行取反操作

```
true -->  false
false --> true
```

如果对一个非布尔值进行取反，他会先将其转换为布尔值，然后再进行取反，可以利用这个特点将其他类型转换为布尔值

```
let a = 123
console.log(typeof a,a)
//输出number 123
a = !!a
console.log(typeof a,a)
//输出boolean true
```

###### 类型转换小节

1.转换成字符串

①显式转换 String()

②隐式转换 `+ ''`

2.转换成数值

①显式转换 Number()

②隐式转换 +

3.转换成布尔值

①显式转换 Boolean()

②隐式转换 !!

##### &&  逻辑与

可以对两个值进行与运算

当&&左右都为true是，则返回true，否则返回false

```
let result = true && true		//true
result = true && false		//false
result = false && true		//false
result = false && false		//false
```

与运算是短路的与，如果第一个值是false，则不看第二个值

与运算时找false的，如果找到false则直接返回，没有false才会返回true

对于非布尔值进行与运算，他会转换成布尔值进行，但是最终会返回**原值**

如果第一个值为false，则直接返回第一个值

如果第一个值为true，则返回第二个值

```
result = 1 && 2		//输出2
//     true && true --> true
result = 1 && 0		//输出0
//     true && false --> false
result = 0 && NaN		//输出0
//     false && false --> false
```



##### ||  逻辑或

可以对两个值进行或运算

当||左右有true时，则返回true，否则返回false

或运算也是短路的或，如果第一个值为true，则不看第二个值

```
false || alert(123)		//第一个值为false，alert会执行
true || alert(123)		//第一个值为true，alert不会执行
```

或运算就是找true，如果找到true则直接返回，没有true才会返回false

对于非布尔值，他会转换为布尔值然后运算

但是最终会返回原值

如果第一个值为true，则返回第一个

如果第一个值为false，则返回第二个

```
result = 1 || 2		//1
result = "hello" || NaN		//"hello"
result = NaN || 1		//1
result = NaN || null		//null
```

#### 关系运算符

关系运算符用来检查两个值之间的关系是否成立

成立返回true，不成立返回false

##### >

用来检查左值是否大于右值

```
let result = 10 > 5 		//true
result = 5 > 5		//false
```

##### >=

用来检查左值是否大于或等于右值

##### <

用来检查左值是否小于右值

##### <=

用来检查左值是否小于或等于右值

##### 注意

当对非数值进行关系运算时，他会先将其转换为数值然后再比较

```
result = 5 < "10"		//true
result = "1" > false		//true
result = "a" < "b"		//true
```

当关系运算符的两端是两个字符串，他不会将字符串转换为数值，而是会逐位的比较字符的Unicode编码

```
result = "z" < "f"		//false
result = "abc" < "b"		//true
//因为是逐位比较，所以实际比的是a和b,只有第一位没比出来时，才会进行第二位的比较
```

可以利用这个特点对字符串按照字母进行排序

```
result = "12" < "2"		//true
```

*注意比较两个字符串格式的数字时一定要进行类型转换*

```
result = +"12" < "2"		//false
//此时将第一个字符串的12转换成数字12，就不会出现上述情况，就变成数字之间的比较了
```

检查num是否在5和10之间

```
let num = 6
result = 5 < num < 10
console.log(result)
//这样写恒返回true，因为当优先级相同时，从左到右进行运算，不论num的值为多少与5进行比较，比5大输出true为1，比5小输出false为0，1和0均小于10，所以最终的结果都是true
```

正确的写法

```
let num = 6
result = num > 5 && num < 10
console.log(result)
```

#### 相等运算符 ==

用来比较两个值是否相等

```
let result = 1 == 1
console.log(result)
```

使用相等运算符比较两个不同的类型时，他会将其转换为相同的类型然后比较（通常转换为数值）

null和undefined进行相等比较时会返回true

NaN不和任何值相等，包括他自身

```
result = null == undefined
//true
result = NaN == NaN
//false
```

#### 全等运算符 ===

用来比较两个值是否全等

***他不会进行自动的类型转换***，如果两个值的返回类型不同，则直接返回false

```
result = 1 === 1
//true
result = 1 === "1"
//false
```

null和undefined进行全等比较时会返回false

更推荐用全等

#### 不等 ！=

用来检查两个值是否不相等

会自动进行类型转换

```
result = 1 != 1
//false
result = 1 != "1"
//false
```

#### 不全等 ！==

比较两个值是否不全等

不会自动类型转换

```
result = 1 !== "1"
//true
```

#### 条件运算符/三目运算符/三元运算符？：

##### 结构

`条件表达式 ? 表达式1 : 表达式2 `

##### 执行顺序

条件运算符在执行时，会先对表达式进行求值

如果结果为true，则执行表达式1

如果结果为false，则执行表达式2

```
let a = 10
let b = 20
a > b ? alert("a大") : alert("b大")
```

```
let max = a > b ? a : b
alert(max)
```

### 运算符优先级

和数学一样，JS中的运算符也有优先级，比如先乘除后加减

可以通过优先级的表格来查询运算符的优先级

在表格中位置越靠上，优先级越高

优先级越高越先执行

优先级一样就自左向右执行

[优先级表格]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

小括号（）拥有最高的优先级

使用运算符时，如果遇到拿不准的，可以直接通过（）来改变优先级即可

## 代码块

使用 `{}`来创建代码块，代码块可以用来对代码进行分组

同一个代码块中的代码，就是同一组代码，一个代码块中的代码要么都不执行要么都执行

###### let 和var

在JS中，使用let声明的变量具有块作用域

在代码块中声明的变量无法在代码块的外部访问

使用var声明的变量不具有块作用域

## 流程控制语句

可以用来改变程序执行时的顺序

### 条件判断语句if

#### 语法

```
if(条件表达式)
	语句
```

#### 执行流程

if语句在执行时会先对if后的条件表达式进行求值判断

如果结果为true，则执行if后的语句

如果为false则不执行

if语句只会控制紧随其后的那一行代码，如果希望可以空值多行代码，可以用{}将语句括起来

最佳实践：即使if后只有一行代码，我们也应编写代码块，这样结构会更加清晰

如果if后的条件表达式不是布尔值，则会转换为布尔值然后再运算

### 条件分支语句

#### if-else

##### 语法

```
if(条件表达式){
	语句...
}else{
	语句...
}
```

##### 执行流程

if-else执行时，先对条件表达式进行求值判断

如果结果为true，则执行if后的语句

如果结果为false，则执行else后的语句

```
let age = 50
if(age>=60){
	alert("您已经退休了")
}else{
	alert("你还没有退休")
}
```

#### if-else if-else语句

##### 语法

```
if(条件表达式){
	语句...
}else if(条件表达式){
	语句...
}else if(条件表达式){
	语句...
}else if(条件表达式){
	语句...
}else if(条件表达式){
	语句...
}else if(条件表达式){
	语句...
}
```

##### 执行流程

会自上向下依次对if后的条件表达式进行求值判断

如果条件表达式的结果为true，则执行当前的if后的语句，执行完毕语句结束

如果条件表达式的结果为false，则继续向下判断，直到找到true为止

如果所有的条件表达式的结果都是false，则执行else后的语句

```
if(age >= 100){
	alert("你真是一个长寿的人")
}else if(age >= 80){
	alert("你比楼上那位年轻不少")
}else if(age >= 60){
	alert("你已经退休了")
}else if(age >= 30){
	alert("你已经步入中年了")
}else if(age >= 18){
	alert("你已经成年了")
}else{
	alert("你还未成年")
}
```

##### 注意

if-else if-else语句中只会有一个代码块被执行

一旦有执行的代码块，下边的条件都不会再继续判断了

所以一定要注意条件的编写顺序

**`prompt()`可以用来获取用户输入的内容，它会将用户输入的内容以字符串的形式返回，可以通过变量来接收**

```
let num = +prompt("请输入一个整数")
alert(typeof num)
```

##### 练习一

编写一个程序，获取一个用户输入的整数，然后通过程序显示这个数时奇数还是偶数

```
//编写一个程序，获取一个用户输入的整数

let num = +prompt("请输入一个整数")

//验证一下用户的输入是否合法，只有是有效数字时，我们才检查他是否时偶数
//我们不能使用==或===来检查一个值是否是NaN
//可以使用isNaN()函数来检查一个值是否是NaN
/*if(num === NaN || num % 1 !== 0){
	alert("num是NaN")
}*/

//该方法没用，需要调用isNaN()函数
//num不是NaN也不是小数

if(isNaN(num) || num % 1 !== 0){
	alert("num是NaN")
	alert("你的输入有问题，请输入整数")
}else{
	if(num % 2 === 0){
		alert("${num}是偶数")
	}else{
		alert("${num}是奇数")
	}
}

//然后通过程序显示这个数时奇数还是偶数


```

##### 练习二

从键盘输入小明的期末成绩

成绩为100时，奖励一辆汽车

成绩为80-99时，奖励一台手机

成绩为60-79时，奖励一本参考书

其他时，什么奖励也没有

```
//从键盘输入小明的期末成绩
let score = +prompt("请输入小明的期末成绩")
//检查score是否合法
if(isNaN(score) || score < 0 || score > 100){
	alert("请输入一个合法的分数")
}else{
	if(score === 100){
		alert("汽车一辆")
	}else if(score >= 80){
		alert("手机一台")
	}else if(score >= 60){
		alert("参考书一本")
	}else{
		alert("啥也没有")
	}
}
```

####  switch语句

##### 语法

```
switch(表达式){
	case 表达式:
		代码...
		break
	case 表达式:
		代码...
		break
	case 表达式:
		代码...
		break
	case 表达式:
		代码...
		break
	default：
		代码...
		break
}
```

##### 执行流程

switch语句在执行时，会依次将switch后的表达式和case后的表达式进行全等比较

如果比较结果为true，则自当前case处开始执行代码

如果比较结果为false，则继续比较其他case后的表达式，知道找到true为止

如果所有的比较都是false，则执行default后的语句

```
switch(num){
	case 1:
		alert("壹")
		break
	case 2:
		alert("贰")
		brake
	case 3:
		alert("叁")
		break
}
```

##### 注意：

当比较结果为true时，会从当前case处开始执行代码，也就是说case是代码执行的起始位置

这就意味着只要是当前case后的代码，都会执行

可以使用break来避免执行其他的case

break可以用来结束switch语句

##### 总结

switch语句和if语句的功能是重复的，switch能做的事if也能做，反之亦然

他们最大的不同在于，switch在多个全等判断时，结构比较清晰

### 循环语句

通过循环语句可以使指定的代码反复执行

JS中一共有三种循环语句

while语句，do-while语句，for语句

#### while循环

##### 语法

```
while(条件表达式){
	语句...
}
```

##### 执行流程

while语句在执行时，会对条件表达式进行判断

如果结果为true，则执行循环体，执行完毕，继续判断

如果为true，则执行循环体，执行完毕，继续判断，如此重复

直到条件表达式结果为false时，循环结束

当一个循环的条件表达式为true时，这个循环就是一个死循环，会一直执行（慎用）

通常编写一个循环，需要有三个条件

1.初始化表达式（初始化变量）

2.条件表达式（设置循环运行的条件）

3.更新表达式（修改初始化变量）

```
//初始化表达式
let a = 0
//条件表达式
while(a < 5){
	alert(a)
	//更新表达式
	a++
}
```

#####  练习

假设银行存款的年利率为5%，问1000块存多少年可以变为5000块

```
//创建一个变量表示钱数
let money = 1000
//1000存一年是多少钱
//money *= 1.05
//创建一个计数器来记录循环执行的次数
let year = 0
//编写循环时，计算存款的年数
while(money < 5000){
	money *= 1.05 //循环每执行一次就相当于钱存了一年
	year++
}
comsole.log("需要存${year}年，最终的钱数为${money}元")
```

#### do-while循环

##### 语法

```
do{
	语句...
}while(条件表达式)
```

##### 执行顺序

do-while语句在执行时，会先执行do后的循环体

执行完毕后，会对while后的条件表达式进行判断

如果为false，则循环终止

如果为true，则继续执行循环体，以此类推

```
let i = 0
do{
	console.log(i)
}while(i < 5)
```

##### 和while的区别

while语句是先判断再执行

do-while语句是先执行再判断

实质的区别

do-while语句可以确保循环至少执行一次

#### for循环

for循环和while循环没有本质区别，都是用来反复执行代码

不同点就是语法结构，for循环更加清晰

##### 语法

```
for(①初始化表达式;②条件表达式;③更新表达式){
	④语句...
}
```

##### 执行流程

①执行初始化表达式，初始化变量

②执行条件表达式，判断循环是否执行（true执行，false停止）

③判断结果为true，则执行循环体

④执行更新表达式，对初始化变量进行修改

⑤重复②，直到判断为false为止

```
for(let i=0; i<5; i++){
	console.log(i)
}
```

初始化表达式，再循环的整个生命周期中只会执行一次

for循环中的三个表达式都可以省略

使用let在for循环的()中声明的变量是局部变量，只能在for循环内部访问

使用var在for循环的()中声明的变量可以在for循环的外部访问

创建死循环的方式:

```
while(1){}
for(;;){}
```

##### 练习一

求100以内所有3的倍数（求他们的个数总和）

###### 法一

```
let count = 0//计数器
let result = 0//用来存储计算结果（累加结果）
//求100以内所有的数
for(let i = 1; i <= 100; i++){
	//获取3的倍数
	if(i % 3 === 0){
		count++
		result += i
	}
}
console.log("3的倍数一共有${count}个，总和为${result}")
```

###### 法二

```
for(let i = 3; i <= 100; iv+= 3){
	count++
	result += i
}
console.log("3的倍数一共有${count}个，总和为${result}")
```

##### 练习二

求1000以内的水仙花数

**水仙花数:**一个n位数(n >= 3),如果他各个位上数字的n次幂之和还等于这个数，那么这个数就是一个水仙花数

###### 法一

```
//获取所有的三位数
for(let i = 100; i<1000; i++){
	//判断i是否是水仙花数
	//如果i的百位数字十位数字个位数字的立方和还等于i，则i就是水仙花数
	let bai = parseInt(i / 100)
	//获取十位数
	let shi = parseInt((i - bai * 100) / 10)
    //获取个位数
    let ge = i % 10
    console.log(i,"--->",bai,shi,ge)
    //判断i是否是水仙花数
    if(bai ** 3 + shi ** 3 + ge ** 3 === i){
		console.log(i)
	}
}
```

###### 法二

```
for(let i = 100; i<1000; i++){
	let strI = i + ""  //转换成字符串
	if(str[0] ** 3 + str[1] ** 3 + str[2] ** 3 ===i){
		console.log(i)
	}
}
```

##### 练习三

获取用户输入的大于1的整数（暂时不考虑输错的情况）

然后编写代码检查这个数字是否是质数并打印结果

**质数：**一个数如果只能被1和他本身整除，那么这个数就是质数

**1既不是质数也不是合数**

```
//获取用户输入的信息
//let num = +prompt("请输入一个大于1的数字")

//编写代码检查num是否是质数
//alert(num)

/*
	编写代码检查9是否是质数
	1.检查9有没有1和9意外的其他因数
		如果有，说明9不是质数
		如果没有，说明9是质数
	2.获取所有的可能整数9的数（1-9）
		2 3 4 5 6 7 8 
	3.检查这一堆数中是否有能整除9的数
	let count = 0
	for(let i = 2; i < 9; i++){
		if(9 % i === 0){
			//如果9被i整除，说明9一定不是质数
			//当循环执行时，如果从来没有进入过判断(判断代码没有执行)，则说明9是质数
			//如果判断哪怕只执行了一次，也说明9不是质数
			count++
		}
	}
	console.log(count)
*/



//获取用户输入的数值
let num = +prompt("请输入一个大于1的整数")
//用来记录num的状态，默认为true，num是质数
let flag = true
for(let i=2; i<num; i++){
	if(num % i === 0){
		//如果num能被i整除，说明num一定不是质数
		//当循环执行时，如果从来没有进入过判断(判断代码没有执行)，则说明num是质数
		//如果判断哪怕只执行了一次，也说明9不是质数
		flag = false
	}
}
if(flag){
	alert("${num}是质数")
}else{
	alert("${num}不是质数")
}
```

***如果打印到网页中要换行就用`<br>`标签;如果是打印到控制台就用`\n`来换行***

#### 循环嵌套

```
/*
	在循环中也可以嵌套其他的循环
	希望在网页中打印如下图标
	*****
	*****
	*****
	*****
	*****
*/

//这个for循环，可以用来控制图形的高度
for(let i = 0; i < 5; i++){
	//创建一个内层循环来控制图形的宽度
	for(let j = 0; j < 5; j++){
		document.writen("*&nbsp;&nbsp;")
	}
	document.writen("<br>")
}
```

当发生循环嵌套时，外层循环每执行一次，内层循环就会执行一个完整的周期

```
/*
	在循环中也可以嵌套其他的循环
	希望在网页中打印如下图标
	*
	**
	***
	****
	*****
*/

//高没变宽变了，所以不用更改外层循环，只需用更改内层循环

//这个for循环，可以用来控制图形的高度
for(let i = 0; i < 5; i++){
	//创建一个内层循环来控制图形的宽度
	for(let j = 0; j < i + 1; j++){
		document.writen("*&nbsp;&nbsp;")
	}
	document.writen("<br>")
}
```

```
/*
	在循环中也可以嵌套其他的循环
	希望在网页中打印如下图标
	*****
	****
	***
	**
	*
*/

//这个for循环，可以用来控制图形的高度
for(let i = 0; i < 5; i++){
	//创建一个内层循环来控制图形的宽度
	for(let j = 0; j < 5 - i; j++){
		document.writen("*&nbsp;&nbsp;")
	}
	document.writen("<br>")
}
```

##### 练习一

在网页中打印九九乘法表

1×1=1

1×2=2	2×2=4

1×3=3	2×3=6	3×3=9

...

```
//创建一个外层循环控制高度
for(let i = 0; i <= 9; i++){
	//创建内层循环控制宽度
	for(let j = 0; j < i+1; j++){
		document.write("<span>${i}×${j}=${i×j}</span>")
	}
	//打印换行
	document.write("<br>")
}

//补充样式
<style>
	span:
		display: inline-block;
		width: 100px;
</style>
```

##### 练习二

编写代码，求100以内所有的质数

```
for(let i = 2; i<100; i++){
	//检查i是否是质数，是质数则输出
	//创建一个变量，记录i的状态，默认i是质数
	let flag = true
	//获取1-i之间的数
	for(let j = 2; j<i; j++){
		//判断i能不能被j整除
		if(i % j === 0){
			//进入判断，说明i不是质数，修改flag为false
			flag = false
		}
	}
	
	//判断结果
	if(flag){
		console.log(i)
	}
}
```

#### break和continue

##### break

break用来终止switch和循环语句

break执行后，当前的switch或循环会立刻停止

break会终止离他最近的循环

##### continue

continue用来跳过当前循环

##### 练习优化

```
//100以内所有质数

/*
	优化前
		10000以内：290ms
		100000以内：28202ms
	第一次优化
		10000以内：30ms
		100000以内：2331ms
		1000000以内：192003ms
	第二次优化
		10000以内：3ms
		100000以内：20ms
		1000000以内：394ms
*/

//开始一个计时器
console.time("质数练习")
for(let i = 2; i<100; i++){
	let flag = true
	for(let j = 2; j<=i ** .5; j++){
		if(i % j === 0){
			flag = false
			//进入判断说明i一定不是质数，后续检查没有执行的必要
			break
		}
	}
	if(flag){
		console.log(i)
	}
}
//停止计时器
console.timeEnd("质数练习")
```

## 对象

JS中的数据类型分为原始值和对象

###### 原始值

1.数值	Number

2.大整数	BigInt

3.字符串	String

4.布尔值	Boolean

5.空值	Null

6.未定义	Undefined

7.符号	Symbol

原始值只能用来表示一些简单的数据，不能表示复合数据，比如现在需要在程序中表示一个人的信息

###### 对象

对象是JS中的一种复合数据类型

它相当于一个容器，在对象中可以存储各种不同的数据类型

对象中可以存储多个各种类型的数据

对象中存储的数据，我们称为属性

向对象中添加属性`对象.属性名 = 属性值`

读取对象中的属性`对象.属性名`

如果读取的是一个对象中没有的属性，不会报错，而是会返回Undefined

###### 创建对象

```
let obj = new Object()
obj.name = "孙悟空"
obj.age = 18
obj.gender = "男"

//修改属性
obj.name = "Tom Sun"

//删除属性
delete obj.name

console.log(obj.name)
```

## 属性

#### 属性名

通常属性名就是一个字符串，所以属性名可以是任何值，没有什么特殊要求

但是如果你的属性名太特殊了，不能直接使用，需要使用[]来设置

虽然如此，但是我们还是强烈建议属性名也按照标识符的规范来命名

也可以使用符号(symbol)作为属性名，来添加属性

获取这种属性时，也必须使用symbol

使用symbol添加的属性，通常是那些不希望被外界访问的属性

使用[]去操作属性时，可以使用变量

以下为不建议的操作示范

```
obj.if = "哈哈"	//不建议
obj.let = "哈哈"	//不建议
obj["12342123e1"] = "haha"	//不建议

let mySymbol = Symbol()
let newSymbol = Symbol()
//使用symbol作为属性名
obj[mySymbol] = "通过symbol添加的属性"
comsole.log(obj[mySymbol])
```

以下为建议的操作示范

```
obj.name = "孙悟空"
obj.age = 18
obj["gender"] = "男"
let str = "address"
obj["address"] = "花果山"
//等价于obj["address"] = "花果山"
console.log(obj[str])
obj.str = "哈哈"  //使用.的形式添加属性时，不能使用变量
```

#### 属性值

对象的属性值可以是任意的数据类型，也可以是一个对象

```
let obj = new Object()
obj.name = "孙悟空"
obj.age = 18
obj.["gender"] = "男"
let str = "address"
obj[str] = "花果山"
obj.a = 123
obj.b = "hello"
obj.c = true
obj.d = 123n
obj.f = Object()
obj.f.name = "猪八戒"
obj.f.age = 28
console.log(obj.f.name)
```

使用typeof检查一个对象时，他会返回object

#### in 运算符

用来检查对象中是否含有某个属性

##### 语法

`属性名 in obj`

如果有返回true,没有就返回false

```
console.log("name" in obj)
//检查obj中有没有name属性，如果有会返回true，如果没有就会返回false
```

### DOM

文档对象模型DOM（Document Object Model）定义访问和处理HTML文档的标准方法。DOM 将HTML文档呈现为带有元素、属性和文本的树结构（节点树）。

**先来看看下面代码:**

**[![img](https://img.mukewang.com/52e4be610001c67307860420.jpg)](https://img.mukewang.com/52e4be610001c67307860420.jpg)**

**将HTML代码分解为DOM****节点层次图:**

**[![img](https://img.mukewang.com/52e4bd0f0001dd8d04830279.jpg)](https://img.mukewang.com/52e4bd0f0001dd8d04830279.jpg)**

**HTML文档可以说由节点构成的集合，三种常见的DOM节点:**

**1. 元素节点：**上图中<html>、<body>、<p>等都是元素节点，即标签。

**2. 文本节点:**向用户展示的内容，如<li>...</li>中的JavaScript、DOM、CSS等文本。

**3. 属性节点:**元素属性，如<a>标签的链接属性href="http://www.imooc.com"。

**看下面代码:**

```
<a href="http://www.imooc.com">JavaScript DOM</a>
```

[![img](https://img.mukewang.com/52e4bdb80001064c04480196.jpg)](https://img.mukewang.com/52e4bdb80001064c04480196.jpg)

#### 通过ID获取元素

我们通过id先找到标签，然后进行操作。

**语法:**

```
 document.getElementById("id") 
```

**看看下面代码:**

**[![img](https://img.mukewang.com/52e4c5950001054207900423.jpg)](https://img.mukewang.com/52e4c5950001054207900423.jpg)**

**结果:null**或**[object HTMLParagraphElement]**

**[![img](https://img.mukewang.com/52e4c6080001734c03800275.jpg)](https://img.mukewang.com/52e4c6080001734c03800275.jpg)**

**注:获取的元素是一个对象，如想对元素进行操作，我们要通过它的属性或方法。**

#### innerHTML属性

innerHTML 属性用于获取或替换 HTML 元素的内容。

**语法:**

```
Object.innerHTML
```

**注意:**

1.Object是获取的元素对象，如通过document.getElementById("ID")获取的元素。

2.注意书写，innerHTML区分大小写。

**我们通过id="con"获取<p> 元素，并将元素的内容输出和改变元素内容，代码如下:**

**[![img](https://img.mukewang.com/52e4cd080001f01507220418.jpg)](https://img.mukewang.com/52e4cd080001f01507220418.jpg)**

**结果:**

**[![img](https://img.mukewang.com/52e4cb5c000187ce03740251.jpg)](https://img.mukewang.com/52e4cb5c000187ce03740251.jpg)**

#### 改变HTML样式

**语法:**

```
Object.style.property=new style;
```

**注意:**Object是获取的元素对象，如通过document.getElementById("id")获取的元素。

**基本属性表（property）:**

**[![img](https://img.mukewang.com/52e4d4240001dd6c04850229.jpg)](https://img.mukewang.com/52e4d4240001dd6c04850229.jpg)**

**注意:**该表只是一小部分CSS样式属性，其它样式也可以通过该方法设置和修改。

**看看下面的代码:**

改变 <p> 元素的样式，将颜色改为红色，字号改为20,背景颜色改为蓝：

```
<p id="pcon">Hello World!</p>
<script>
   var mychar = document.getElementById("pcon");
   mychar.style.color="red";
   mychar.style.fontSize="20";
   mychar.style.backgroundColor ="blue";
</script>
```

**结果:**

[![img](https://img.mukewang.com/52e4d6ae000177d203770253.jpg)](https://img.mukewang.com/52e4d6ae000177d203770253.jpg)

#### 显示和隐藏display属性

**语法：**

```
Object.style.display = value
```

**注意:**Object是获取的元素对象，如通过document.getElementById("id")获取的元素。

value取值:

**[![img](https://img.mukewang.com/52e4dba5000179da04110095.jpg)](https://img.mukewang.com/52e4dba5000179da04110095.jpg)**

看看下面代码:

**[![img](https://img.mukewang.com/52e4dcf50001bead09310689.jpg)](https://img.mukewang.com/52e4dcf50001bead09310689.jpg)**

#### 控制类名className属性

className 属性设置或返回元素的class 属性。

**语法：**

```
object.className = classname
```

**作用:**

1.获取元素的class 属性

\2. 为网页内的某个元素指定一个css样式来更改该元素的外观

**看看下面代码，获得 <p> 元素的 class 属性和改变className：**

[![img](https://img.mukewang.com/52e4e28c0001c97f07980838.jpg)](https://img.mukewang.com/52e4e28c0001c97f07980838.jpg)

**结果:**

**[![img](https://img.mukewang.com/52e4e711000135d903810270.jpg)](https://img.mukewang.com/52e4e711000135d903810270.jpg)**

### 对象字面量

可以直接使用{}来创建对象

使用{}所创建的对象，可以直接面向对象中添加属性

#### 语法

```
{
	属性名:属性值,
	[属性名]:属性值,
}
```

```
let mySymbol = Symbol()
let obj2 = {
	name:"孙悟空",
	age:18,
	["gender"]:"男",
	[mySymbol]:"特殊的属性",
	hello:{
		a:1,
		b:true
	}
}
console.log(obj)
console.log(obj2)
```

#### 枚举属性：

指将对象中的所有的属性全部获取

##### for-in语句

###### 语法

```
for(let propName in 对象){
	语句...
}
```

for-in的循环体会执行多次，有几个属性就会执行几次

注意：并不是所有的属性都可以枚举，比如使用符号添加的属性

每次执行时，都会将一个属性名赋值给我们所定义的变量

```
let obj = {
	name:"孙悟空",
	age:18,
	gender:"男",
	address:"花果山"
	[Symbol()]:"测试的属性"  //符号添加的属性是不能枚举的
}
for(let propName in obj){
	console.log(propName, obj[propName])
}
```

### 不可变类型

原始值都属于不可变类型，一旦创建无法修改

在内存中不会创建重复的原始值

当我们为一个变量新赋值时，绝对不会影响其他变量

对象属于可变类型

对象创建完成后，可以任意的添加和删除修改对象的属性

###### 注意

当两个对象进行相等或全等比较时，比较的是对象的内存地址

如果有两个变量同时指向一个对象，通过一个变量修改对象时，对另外一个变量也会产生影响

当修改一个对象时，所有指向该对象的变量都会受到影响

#### 修改对象

修改对象时，如果有其他变量指向该对象，则所有的指向该对象的变量都会受到影响

#### 修改变量

修改变量时，只会影响当前的变量

在使用变量存储对象时，很容易因为改变变量指向的对象，提高代码的复杂度，所以通常情况下，声明存储对象的变量时会使用const

```
const obj = {
	name:"孙悟空",
}
const obj2 = obj
obj2 = {}
obj2.name = "猪八戒"		//修改对象
obj2 = null		//修改变量
console.log(obj)
console.log(obj2)
```

const只是禁止变量被重新赋值，对对象的修改没有任何影响

### 函数

函数也是一种对象

它具有其他对象所具有的功能

函数中可以存储代码，且可以在需要时调用这些代码

#### 语法

```
function 函数名(){
	语句...
}
```

#### 调用函数

调用函数就是执行函数中存储的代码

##### 语法

```
函数对象()
```

使用typeof检查函数对象时会返回function

```
//创建一个函数对象
function fn(){
	console.log("你好")
	console.log("Hello")
	console.log("萨瓦迪卡")
}
console.log(typeof fn)
fn()
fn()
fn()
```

#### 函数的定义方式

##### 1.函数声明

```
function 函数名(){
	语句...
}
```

##### 2.函数表达式

```
const 变量 = function(){
	语句...
}
```

##### 3.箭头函数

```
() => {
	语句...
}
```

```
function fn(){
	console.log("函数声明所定义的函数")
}

const fn2 = function(){
	console.log("函数表达式")
}

const fn3 = () => {
	console.log("箭头函数")
}

const fn4 = () => console.log("箭头函数")

console.log(typeof fn)
console.log(typeof fn2)
```

#### 函数的参数

```
//定义一个可以求任意两个数和的函数
function sum(){
	let a = 123
	let b = 456
	console.log(a + b)
}
//const sum2 = () => console.lohg(1 + 1)
//sum()
```

##### 形式参数

在定义函数时，可以在函数中指定数量不等的形式参数（形参）

在函数中定义形参，就相当于在函数内部声明了对应的变量但是没有赋值

###### 1.函数声明

```
function 函数名([参数]){
	语句...
}
```

###### 2.函数表达式

```
const 变量 = function([参数]){
	语句...
}
```

###### 3.箭头函数

```
([参数]) => {
	语句...
}
```

```
function fn(a){
	console.log("a =",a)
}
```

##### 实际参数

在调用函数时，可以在函数的()传递数量不等的实参

实参会赋值给对应的形参

```
function fn(a,b){
	console.log("a =",a)
	console.log("b =",b)
}
fn(1,10)
```

回到最开始的问题

```
function sum(a,b){
	console.log(a + b)
}
sum(1,1)
```

##### 参数

1.如果实参和形参数量相同，则对应的实参赋值给对应的形参

2.如果实参多余形参，则多余的实参不会使用

3.如果形参多余实参，则多余的形参为undefined

##### 参数的类型

JS中不会检查参数的类型，可以传递任何类型的值作为参数

```
const fn = (a,b) => {
	console.log("a =",a);
	console.log("b =",b);
}

//当箭头函数中只有一个参数时，可以省略()

const fn2 = a => {
	console.log("a =",a);
}

//fn2(123)

//定义参数时，可以为参数指定默认值

//默认值，会在没有对应实参时生效

const fn3 = (a = 10,b = 20,c = 30) => {
	console.log("a =",a);
	console.log("b =",b);
	console.log("c =",c);
}
fn3(1,2,3)
```

#### 对象作为参数

```
function fn(a){
	//console.log("a =",a)
	a = {} //修改变量时，只会影响当前的变量
	a.name = "猪八戒" //修改对象时，如果有其他变量指向该对象，则所有指向该对象的变量都会受到影响
	console.log(a)
}

//对象可以作为参数传递
let obj = {name:"孙悟空"}

//传递实参时，传递并不是变量本身，而是变量中存储的值
fn(obj)
console.log(obj)
```

函数每次调用，都会重新创建默认值

```
function fn2(a = {name:"沙和尚"}){
	console.log("a =",a)
	a.name = "唐僧"
	console.log("a =",a)
}

fn2()	//第一次依次打印出沙和尚 唐僧
fn2()	//第二次依次打印出沙和尚 唐僧
```

#### 函数作为参数

在JS中，函数也是一个对象（一等函数）

别的对象能做的事，函数也可以

```
function fn(a){
	console.log("a =",a)
}
let obj = {name:"孙悟空"}
function fn2(){
	console.log("我是fn2")
}
fn(fn2)
fn(function(){
	console.log("我是匿名函数")
})
fn(() => console.log("我是箭头函数"))
```

#### 函数的返回值

```
function sum(a,b){
	console.log(a + b)
	//计算完成后，将计算的结果返回而不是直接打印
	return a + b
}
//sum(123,123)
function fn(){
	//在函数中，可以通过return关键字来指定函数的返回值
	//返回值事函数的执行结果，函数调用完毕返回值便会作为结果返回
	return () => alert(123)
	//return {name:"孙悟空"}
	//return "hello"
	//return 123
	//return
}
let result = fn()
console.log(fn())
```

任何值都可以作为返回值使用（包括对象和函数之类的 ）

如果return后不跟任何值，则相当于返回undefined

如果不写return,那么函数的返回值依然是undefined

return一执行，函数立即结束

```
alert(123)
return
alert(456)  //不会执行
```

return和函数中的break有些类似

```
const sum = (a,b) => {
	return a + b
}
let result = sum(123,456)
console.log(result)
```

箭头函数的返回值可以直接写在箭头后

```
const sum = (a,b) => a + b
let result = sum(123,456)
console.log(result)
```

如果直接在箭头后设置对象字面量为返回值时，对象字面量必须用()括起来

#### 作用域(scope)

作用域指的是一个变量的可见区域

作用域有两种

##### 全局作用域

全局作用域在网页运行时创建，在网页关闭时消耗

所有直接编写到script标签中的代码都位于全局作用域中

全局作用域中的变量是全局变量，可以在任意位置访问

##### 局部作用域

###### 块作用域

块作用域是一种局部作用域

块作用域在代码块执行时创建，代码块执行完毕他就销毁

在块作用域中声明的变量是局部变量，只能在块内部访问，外部无法访问

###### 函数作用域

函数作用域也是一种局部作用域

函数作用域在函数调用时产生，调用结束后销毁

函数每次调用都会产生一个全新的函数作用域

在函数中定义的变量是局部变量，只能在函数内部访问，外部无法访问

#### 作用域链

当我们使用一个变量时，JS解释器会优先在当前作用域中寻找变量，如果找到了则直接使用，如果没找到则去上一层作用域中寻找，找到了则使用，如果没找到，则继续去上一层寻找，以此类推，如果一直到全局作用域都没有找到，则报错xxx is not defined

```
let a = 10
{
	let a = "第一代码块中的a"
	{
		let a = "第二代码块中的a"
		console.log(a)
	}
}
```

```
let b = 33
function fn(){
	let b = 44
	function f1(){
		let b = 55
		console.log(b)
	}
	f1()
}
fn()
```

##### 补充内容

##### 方法(method)

当一个对象的属性指向一个函数，那么我们就称这个函数是该对象的方法

调用函数就称为调用对象的方法

```
let obj = {}
obj.name = "孙悟空"
obj.age = 18
//函数也可以称为一个对象的属性
obj.sayHello = function(){
	alert("hello")
}
//console.log(obj)
obj.sayHello()
//document.write()
//String()
```

#### Window对象

在浏览器中，浏览器为我们提供了一个window对象，可以直接访问

Window对象代表的是浏览器窗口，通过该对象可以对浏览器窗口进行各种操作

除此之外Window对象还负责存储JS中的内置对象和浏览器的宿主对象

```
alert(window)

alert()

document.write

console.log
```

window对象的属性可以通过window对象访问，也可以直接访问

```
alert(window)
window.alert(123)
window.console.log("哈哈")
```

函数就可以认为是window对象的方法

```
window.a = 10
//向window对象中添加的属性会自动成为全局变量
console.log(a)
```

var用来声明变量，作用和let相同，但是var不具有块作用域

在全局中使用var声明的变量，都会作为window对象的属性保存

```
var b = 20  //等价于window.b = 20
console.log(b)
```

使用function声明的函数，都会作为window的方法保存

```
function fn(){
	alert("我是fn")
}
//console.log(window.b)
window.fn()
```

使用let声明的变量不会存储在window对象中，而是存在一个秘密的小地方（无法访问）

```
let c = 33
window.c = 44
console.log(c)
//会先访问秘密的小地方的c
```

```
function fn2(){
	//var d = 10  
	//var虽然没有块作用域，但有函数作用域
	d = 10
	//在局部作用域中，如果没有使用var或let声明变量，则变量会自动称为window对象的属性，也就是全局变量
	
}
```

#### 提升

##### 变量的提升

使用var声明的变量，他会在所有代码执行前被声明，所以我们可以在变量生命前就访问变量

```
console.log(a)
a = 10 //相当于window.a = 10
//会报错
```

```
console.log(a)
var a = 10
//打印出undefined,因为var声明的变量只会提前被声明但是不赋值
```

##### 函数的提升

使用函数声明创建的函数，会在其他代码执行前被创建，所以我们可以在函数声明前调用函数

```
fn()
function fn(){
	alert("我是fn函数")
}
//正确
```

```
fn2()
var fn2 = function(){
	alert(123)
}
//错误，只有用function开头才可以，这种方法只提升了变量但是也没有赋值所以只有undefined，函数无法调用
```

let声明的变量实际上也会提升，但是在赋值之前解释器禁止对该变量访问

##### 练习一

```
var a = 1
function fn(){
	a = 2
	console.log(a)  //2
}
fn()
console.log(a)	//2
```

##### 练习二

```
var a = 1
function fn(){
	console.log(a)		//undefined
	var a = 2
	console.log(a)		//2
}
fn()
console.log(a)		//1 
```

变量和函数的提升同样适用于函数作用域

##### 练习三

```
var a = 1
//定义形参就相当于在函数中声明了对应的变量，但是没有赋值
function fn(a){
	console.log(a)		//undefined
	a = 2
	console.log(a)		//2
}
fn()
console.log(a)	//1
```

##### 练习四

```
var a = 1
function fn(a){
	console.log(a)	//10
	a = 2
	console.log(a)	//2
}
fn(10)
console.log(a)	//1
```

##### 练习五

```
var a = 1
function fn(a){
	console.log(a)	//1
	a = 2
	console.log(a)	//2
}
fn(a)
console.log(a)	//1
```

##### 练习六

```
console.log(a)	//alert(2) --> 2
//var只能提升不能赋值所以三个var是一样的所以最终的竞争者是第一个var和第一个function,function能赋值，所以第一个是2
var a = 1
console.log(a)	//1
function a(){
	alert(2)
}
console.log(a)	//1,上一段function被提升了，所以可以看作被勾掉
var a = 3
console.log(a)	//3
var a = function(){
	alert(4)
}
console.log(a)	//4
var a	//被提升了但是还没有赋值，所以没用
console.log(a)	//4
```

#### debug

让代码的执行速度变慢

```
debugger //在代码中打了一个断点，或在源代码中打
```

#### 立即执行函数(IIFE)

在开发中应该尽量减少直接在全局作用域中编写代码，所以我们的代码要尽量编写到局部作用域

如果使用let声明的变量，可以使用{}来创建块作用域

```
function fn(){
	var a = 10
}
fn()
function fn2(){
	var a = 20
}
fn2()
```

这种方法也容易被覆盖

希望可以创建一个只执行一次的匿名函数

立即执行函数是一个匿名函数，并且它只会调用一次

```
(function(){
	let a = 10
	console.log(111)
}());
```

可以利用IIFE来创建一个一次性的函数作用域，避免变量冲突的问题

#### this

函数在执行时，JS解析器每次都会传递一个隐含的参数，这个参数叫做this

this会指向一个对象，且this所指向的对象会根据函数调用方式的不同而不同

以函数形式调用时，this指向的是window

以方法的形式调用时，this指向的是调用方法的对象

通过this可以在方法中引用调用方法的对象

```
function fn(){
	//console.log(this === window)
	console.log("fn打印"，this)
}

const obj = {name:"孙悟空"}
obj.test = fn

const obj2 = {name:"猪八戒",test:fn}

//fn()
obj.test()		//{name:"孙悟空"}
obj2.test()		//{name:"猪八戒",test:fn}
```

##### 箭头函数的this

###### 箭头函数

```
([参数]) => 返回值
```

###### 例子

```
//无参箭头函数
() => 返回值
//一个参数的
a => 返回值
//多个参数的
(a,b) => 返回值

//只有一个语句的函数
() => 返回值
//只返回一个对象的函数
() => ({...})
//有多行语句的函数
() => {
	...
	return 返回值
}
```

箭头函数没有自己的this，他的this由外层作用域决定

箭头函数的this和他的调用方式无关

```
function fn(){
	console.log("fn -->",this)
}

const fn2 = () => {
	console.log("fn2 -->",this)
}

fn()    //window
fn2()	//window

const obj = {
	name:"孙悟空",
	fn:fn,		//前一个fn是属性名，后一个fn是属性，可以简写为fn
	fn2,
	sayHello(){
		console.log(this.name)
		
		function t(){
			console.log("t -->",this)
		}
		
		t()
		
		const t2 = () => {
			console.log("t2 -->",this)
		}
		t2()
	}
}

obj.fn()	//obj
obj.fn2()	//window

obj.sayHello()
```

## 严格模式

JS运行代码的模式有两种

### 正常模式

默认情况下代码都运行在正常模式中

在正常模式，语法检查并不严格

他的原则是能不报错的地方尽量不报错

这种处理方式导致代码的运行性能较差

### 严格模式

在严格模式下，语法检查变得严格

1.禁止一些语法

2.更容易报错

3.提升了性能

开启严格模式

```
"use strict"	//全局的严格模式

function fn(){
	"use strict"	//函数的严格模式
}
```

在开发中，应该尽量使用严格模式

这样可以将一下隐藏的问题消灭在萌芽阶段，同时也能提升代码的运行性能
