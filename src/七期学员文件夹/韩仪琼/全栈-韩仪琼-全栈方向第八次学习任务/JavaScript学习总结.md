## JavaScript学习总结

### 基本概念及作用

+ 概念：JavaScript 是一种解释性脚本语言，是可插入 HTML 页面的编程代码，可由所有的现代浏览器执行
+ 作用：
  + 表单动态校验（密码强度检测）(S产生最初的目的)
  + 网页特效
  + 服务端开发(Node.js)
  + 桌面程序(Electron)
  + App(Cordova)
  + 控制硬件-物联网
  + 游戏开发
+ HTML/CSS/JS的关系
  + HTML决定网页结构和内容（决定看到什么）
  + CSS决定网页呈现给用户的模样(决定好不好看)
  + 实现业务逻辑和页面控制（决定功能）

### 用法

#### 1.  内嵌JavaScript

+ 放在`<script></script>`双标签中，`<script>`标签可以放在`<head>`中，也可以放在`<body>`中，放在最后也可以

#### 2. 外部JavaScript文件

+ 可以把脚本保存到外部文件中。外部文件通常包含被多个网页使用的代码。外部 JavaScript 文件的文件扩展名是 .js

+ 当我们使用外部文件时，在HTML页面的script 标签的 “src” 属性中设置该 .js 文件

  ```html
  <head>
      <script src="js/myScript.js"/></script>
  </head>
  ```

+ 适合于JS代码量比较的的情况

  **外部脚本不能包含`script`标签**

#### 3. 行内式JavaScript

+ 直接编写在HTML标签的一些属性中，用于简单的JavaScript代码的编写，用的偏少

```html
<a href="javascript:alert('ok')">登录</a>
```

### JavaScript输入输出语句

|       方法       |                说明                |  归属  |
| :--------------: | :--------------------------------: | :----: |
|    alert(msg)    |        浏览器弹出==警示框==        | 浏览器 |
| console.log(msg) |    浏览器==控制台==打印输出信息    | 浏览器 |
|   prompt(info)   | 浏览器弹出==输入框==，用户可以输入 | 浏览器 |

### JavaScript基本语法

#### 1. 变量

+ ##### 声明变量

  + 声明变量的关键字：var

    var是一个JS关键字，用来声明变量(variable变量的意思)。使用该关键字声明变量后，计算机会自动为变量分配内存空间

  + 用法：语法:var 变量名称;

+ **赋值**  用=来把右边的值赋给左边的变量空间中

+ ##### 变量的命名规则

  + 由字母(A-Z-z)、数字0-9)、下划线()、美元符号($)组成
  + 严格区分大小写。var app;和var App;是两个变量
  + 不能以数字开头
  + 不能是关键字、保留字
  + 变量名必须有意义
  + 遵守驼峰命名法。首字母小写，后面单词的首字母需要大写

+ ##### 变量的数据类型

  + 变量的数据类型决定了如何将代表这些值的位存储到计算机的内存中
  + JavaScript是一种弱类型或者说动态语言，不用提前声明变量的类型，在程序运行过程中，类型会
    被自动确定
  + 在代码运行时，变量的数据类型是由S引擎根据=右边变量值的数据类型来判断的，运行完毕之后，变量就确定了数据类型。

#### 2. 语句

+ 一般一行只写一条语句，每句结尾编写分号结束
+ 运算符的两边以及括号的两边要空开一个位置

### JavaScript的简单数据类型

| 简单数据类型 |                             说明                             |  默认值   |
| :----------: | :----------------------------------------------------------: | :-------: |
|    Number    |           数字型，包含整型值和浮点型值，如21、0.21           |     0     |
|   Boolean    |             布尔值类型，如true、false,等价于1和0             |   false   |
|    String    | 字符串类型,字符串可以是引号中的任意文本。必须使用单引号或双引号 |    " "    |
|  Undefined   |        var a;声明了变量a但是没有给值，此时a=undefined        | undefined |
|     Null     |                 var a=null;声明了变量a为空值                 |   null    |

#### 1. 数值型三个特殊值

+ Infinity,代表无穷大，大于任何数值

+ -Infinity,代表无穷小，小于任何数值

  ```javascript
  alert(Infinity);   //Infinity
  alert(-Inifinity); //-Infinity
  alert(NaN);        //NaN
  ```

+ NaN ,Not a number,代表一个非数值

  + **isNaN()**用来判断一个变量是否为非数字的类型

    `isNaN(x)`若x是数字，返回false,若x不是数字，则返回true


#### 2. Boolean布尔值类型

+ 布尔型和数字型相加的时候，true的值为1，false的值为0

  ```javascript
  console.log(true +1);   //2
  console.log(false +1);  //1
  ```


#### 3. String字符串型

+ ##### 字符串转义符

| 转义符 | 解释说明 |
| :----: | :------: |
|   \n   |  换行符  |
|   \\   |  斜杠\   |
|  \\'   | ‘单引号  |
| \\\''  | ''双引号 |
|   \t   | tab缩进  |
|   \b   |   空格   |

+ ##### 字符串长度

  + 字符串是由若干字符组成的，这些字符的数量就是字符串的长度

  + 通过字符串的==length==属性可以获取整个字符串的长度

    ```javascript
    alert(str.length);  //显示str字符串的长度
    ```

+ ##### 字符串拼接

  + 多个字符串之间可以使用+进行拼接，其拼接方式为==字符串+任何类型=拼接之后的新字符串==

  + 拼接前会把==与字符串相加==的==任何类型==转成==字符串==，再拼接成一个新的字符串

    ```javascript
    //字符串“相加”
    alert('hello'+''+'world');  //hello world
    //数值与字符串“相加”
    alert('100'+'100');  //100100
    //数值字符串+数值
    alert('11'+12);  //1112
    ```

  + 通常将字符串和变量来拼接，因为变量可以很方便的修改里面的值，==变量是不能添加引号的==，因为加引号的变量会变成字符串

#### 4. Undefined

+ 一个声明后没有被赋值的变量会有一个默认值undefined(如果进行相连或者相加时，注意结果)
  ```javascript
  var variable;
  console.log(variable);        //undefined
  console.log('你好' + variable)； //你好undefined
  console.log(11 + variable);     //NaN
  ```

+ 会出现undefined的值的情况

  + 变量声明且没有赋值

    ```javascript
    var obj; 
    alert(obj);//obj值为undefined
    ```

  + 获取对象中不存在的属性时

    ```javascript
    var obj;
    alert(obj.name);//报错信息: "Uncaught TypeError: Cannot read property 'name' of undefined"
    ```
  
  + 函数需要实参，但是调用时没有传值，形参是undefined

  + 函数调用没有返回值或者return后没有数据，接收函数返回的变量是undefined

    ```javascript
    function printNum(num){
        alert(num);
    }
    var result=printNum();//调用函数未传递参数，执行函数的时候num的值是undefined alert(result);
    //result的值也是undefined，因为printNum()没有返回值
    ```

#### 5. Null

+ 一个声明变量给null值，里面存的值为空

  ```javascript
  var vari = null;
  console.log('你好' + vari);   //你好null
  console.log(11 + vari);      //11
  console.log(true + vari);    //1
  ```

#### 6. 查询变量类型

`typeof` + 变量名

 ```javascript
 var num = 10;
 console.log(typeof num);   //number
 var str = 'pink';
 console.log(typeof str);   //string
 var flag = true;
 console.log(typeof flag);  //boolean
 var vari = undefined;
 console.log(typeof vari);  //undefined
 var timer = null;
 console.log(typeof timer); //object
 ```

#### 7. 数据类型转换

使用表单、prompt获取过来的数据默认是字符串类型的，此时就不能直接简单的进行加法运算，而需要转换变量的数据类型。通俗来说，就是把一种数据类型的变量转换成另外一种数据类型。

通常会实现3种方式的转换：

##### 1. 转换为字符串类型

|        方式        |             说明             |                案例                |
| :----------------: | :--------------------------: | :--------------------------------: |
|     toString()     |         转换成字符串         | var num =1; alert(num.toString()); |
|  String()强制转换  |         转换成字符串         |  var num = 1; alert(String(num));  |
| **加号拼接字符串** | 和字符串拼接的结果都是字符串 |     var num =1; alert(num+" ")     |

##### 2. 转换为数字型

|          方式          |              说明               |        案例         |
| :--------------------: | :-----------------------------: | :-----------------: |
|  parseInt(string)函数  |   将string类型转成整数数值型    |   parseInt('78')    |
| parseFloat(string)函数 |   将string类型转成浮点数值型    | parseFloat('78.21') |
|  Number()强制转换函数  |    将string类型转换成数值型     |    Number('12')     |
|   js隐式转换（- * /)   | l利用算术运算符隐式转换为数值型 |       '12'-0        |

##### 3. 转换为布尔型

| 方式          | 说明               | 案例             |
| ------------- | ------------------ | ---------------- |
| Boolean()函数 | 其他类型转成布尔值 | Boolean('true'); |

代表空、否定的值会被转换为false,如"、0、NaN、null、undefined,其余值都会被转换为true

```javascript
console.log(Boolean(' '));         //false
console.log(Boolean(0));           //false
console.log(Boolean(NaN));         //false
console.log(Boolean(null));        //false
console.log(Boolean(undefined));   //false
console.log(Boolean('小白'));       //true
console.log(Boolean(12));          //true
```

#### 8. JavaScript中数值的最大和最小值

```javascript
a1ert(Number.MAX_VALUE);//1.7976931348623157e+308
alert (Number.MIN_VALUE);//5e-324
```

### 标识符、关键字和保留字

#### 1. 标识符

就是指开发人员为变量、属性、函数、参数取的名字

**标识符不能是关键字或保留字**

#### 2. 关键字

是指S本身已经使用了的字，不能再用它们充当变量名、方法名。包括：break、case、catch、continue、default、delete、do、else、finally、for、function、if、in、
instanceof、new、return、switch、this、throw、try、typeof、var、void、while、with等。

#### 3.保留字

实际上就是预留的“关键字”，意思是现在虽然还不是关键字，但是未来可能会成为关键字，同样不能使用它们当变量名或方法名。包括：boolean、char、class、double、float、goto、long、static、enum等

### JavaScript中的运算符

#### 1. 运算符总结

|   运算符类型   |                             符号                             | 备注                                                         |
| :------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|   算数运算符   |                          + - * / %                           |                                                              |
|   赋值运算符   |                      +=、-=、*=、/=、%=                      |                                                              |
| 字符串的连接符 |                              +                               |                                                              |
|   逻辑运算符   |                         &&、\|\|、!                          | 1. &&<br/>当有多个表达式（值）时，左边的表达式值可以确定结果时，就不再继续运算右边的表达式<br/>语法：表达式1&&表达式2<br/>如果第一个表达式的值为真，则返回表达式2<br/>如果第一个表达式的值为假，则返回表达式1<br/>2. \|\|<br/>如果第一个表达式的值为真，则返回表达式1<br/>如果第一个表达式的值为假，则返回表达式2 |
|   条件运算符   |                              ?:                              | 判断语句？ 表达式1：表达式2<br/>若判断结果为真，着执行表达式1；若判断结果为假，则执行表达式2 |
|   比较运算符   | == (会转型)、!=、>=、<=、<、>、=== 、! ==(全等，要求值和类型都一致) | 比较运算符（关系运算符）是两个数据进行比较时所使用的运算符，比较运算后，会返回一个布尔值(true/false)作为比较运算的结果 |
| 递增递减运算符 |                            ++ --                             | 自增自减运算符，常用在循环语句中                             |

#### 2.运算符优先级

| 优先级 |   运算符   |      顺序       |
| :----: | :--------: | :-------------: |
|   1    |   小括号   |      （）       |
|   2    | 一元运算符 | ++ -- ==**!**== |
|   3    | 算数运算符 |    先*/后+-     |
|   4    | 关系运算符 |    > >= < <=    |
|   5    | 相等运算符 | == != === ! ==  |
|   6    | 逻辑运算符 |   先&&后\|\|    |
|   7    | 赋值运算符 |        =        |
|   8    | 逗号运算符 |       ，        |

**一元运算符里面的逻辑非的优先级很高**

### 数组

#### 1. 创建数组

+ 利用new创建数组

  ```javascript
   var arr = new Array();   //创建了一个空的数组
  ```

+ 利用数组字面量创建数组

```javascript
var arr = [];
var arr1 = [1,2,'www',true];
```

#### 2. 获取数组元素

通过数组名[索引]的形式获取数组中的元素

#### 3.新增数组元素

+ 修改length长度

  ```javascript
  var arr = ['red','green','blue'];
  console.log(arr.length);
  arr.length = 5;
  consloe.log(arr[3]);   //undefined
  console.log(arr[4]);   //undefined
  ```

+ 修改索引号

```javascript
var arr1 = ['red','green','blue'];
arr1[3] = 'black';
console.log(arr1);
```

#### 4.添加删除数组元素的方法

|       方法名        |                        说明                         |       返回值       |
| :-----------------: | :-------------------------------------------------: | :----------------: |
|  push(参数1......)  |     ==末尾添加==一个或多个元素，注意修改原数组      |  返回新数组的长度  |
|        pop()        | 删除数组的==最后一个==元素，把数组长度减1，没有参数 | 返回删除的元素的值 |
| unshift(参数1.....) | 向==数组的开头==添加一个或多个元素，注意修改原数组  |  返回新数组的长度  |
|       shift()       |   删除数组的==第一个==元素，数组长度减1，没有参数   | 返回第一个元素的值 |

#### 5. 返回数组元素索引号的方法

indexOf(数组元素)

作用就是返回数组元素的索引号，只返回第一个满足条件的索引号，如果在数组中找不到元素，则返回-1

```javascript
var arrr = ['red', 'green', 'blue', 'pink', 'blue'];
console.log(arr.indexOf('blue'));       //返回第一个blue的索引号
console.log(arr.lastIndexOf('blue'));   //从后往前检索，返回第二个blue的索引号
```

#### 6. 数组的连接、截取和删除

|  方法名  |                 说明                  |                返回值                |
| :------: | :-----------------------------------: | :----------------------------------: |
| concat() |   连接两个或多个数组，不影响原数组    |           返回一个新的数组           |
| slice()  |       数组截取slice(begin, end)       |        返回被截取项目的新数组        |
| splice() | 数组删除splice(第几个开始,要删除个数) | 返回被删除项目的新数组(会影响原数组) |



### 函数的使用

#### 1. 声明函数

```javascript
//1.命名函数 
//function 函数名 (){
//	函数体
//}
function sayHi(){
    console.log('hi~');
}

//2. 函数表达式（匿名函数)
var fun = function(aru) {
    console.log('函数表达式');
    console.log(aru);
}
fun('JavaScript');
//(1)fun是变量名，不是函数名
//(2)函数表达式声明方式跟声明变量差不多，只是函数表达里存的是函数
//(3)函数表达式也可以传递参数
```

+ function是声明函数的关键字 全部小写
+ 函数名一般是动词
+ 函数不调用自己不执行

#### 2. 调用函数

```javascript
//函数名();
sayHi();  //小括号不能省
```

#### 3. 形参与实参

+ 函数可以重复执行相同的代码
+ 在声明函数的小括号内是形参，在函数调用的小括号内是实参
+ 形参是接受实参的，形参类似于一个变量

+ |       参数个数       |                说明                |
  | :------------------: | :--------------------------------: |
  | 实参个数等于行参个数 |            输出正确结果            |
  | 实参个数多于实参个数 |          只取到形参的个数          |
  | 实参个数小于行参个数 | 多的形参定义为undefined，结果为NaN |

#### 4. arguments的使用

（1）只有函数才有arguments对象，而且是每个函数都内置好的

```javascript
function fn() {
	consloe.log(arguments);
    console.log(arguments.length);
    console.log(arguments[2]);
    //我们可以按照数组的方式遍历arguments
    for (var i = 0; i <arguments.length; i++){
        console.log(arguments[i]);
    }
}
fn(1,2,3);
```

+ 是一个伪数组 并不是真正意义上的数组
+ 具有数组的length属性
+ 按照索引的方式进行存储
+ 没有真正数组的一些方法pop() 、push()等

### JavaScript中的对象

#### 1. 对象的调用

+ 对象的属性调用：对象.属性名
+ 对象的属性的另一种调用方式：对象['属性名']，属性==必须加引号==
+ 对象中的方法调用：对象.方法名()，方法名后面==一定要加括号==

```javascript
console.log(star.name);
console.log(star['name']);   //调用名字属性
star.sayHi();   //调用方法 
```

#### 2.创建对象

##### (1)利用对象字面量创建对象

```javascript
// var obj = {};创建了一个空的对象
var obj = {
    uname: '冰墩墩',
    age: 1,
    sex: '男',
    sayHi: function() {
        console.log('hi~');
    }
}
```

+ 里面的属性或方法采取键值对的形式  键   属性名： 值   属性值
+ 多个属性或方法中间用==逗号==隔开
+ 方法冒号后面更多是一个匿名函数

##### （2）利用new Object创建对象

```javascript
var obj = new Object();  //创建了一个空的对象
obj.uname = '冰墩墩';
obj.age = 1;
obj.sex = '男';
obj.sayHi = function(){
	console.log('hi~');
}
console.log(obj.uname);
console.log(obj['sex']);
obj.sayHi();
```

+ 利用等号赋值的方法，添加对象的属性和方法
+ 每个属性和方法之间用==分号==结束

##### （3）构造函数创建对象

```javascript
//构造函数的语法格式
//function 构造函数名(){
//	this.属性 = 值;
//	this.方法 = function(){
//	}
//}
function Star(uname, age, sex) {
	this.name = uname;
	this.age = age;
	this.sex = sex;
	this.sing = function(sang) {
		console.log(sang);
	}
}
var ldh = new Star('刘德华', 18，'男');
//
```

+ new关键字的执行过程
  + new构造函数可以在内存中创建一个空的对象
  + this就会指向刚才创建的空的对象
  + 执行构造函数里面的代码 给这个空对象添加属性和方法
  + 返回这个对象

#### 3.Math对象

math对象不是构造函数，它具有数学常数和函数的属性和方法。跟数学相关的运算可以用Math中的成员

```javascript
Math.PI             //圆周率
Math.floor()        //向下取整
Math.ceil()         //向上取整
Math.round()        //四舍五入就近取整
Math.abs()          //绝对值
Math.max()/Math.min //求最大值和最小值
Math.random()       //返回0~1之间的随机数
```

#### 4. Date对象

1. （1）获取当前时间必须实例化

```
var now = new Date();
console.log(now);
```

（2）Date()构造函数的参数

如果括号里面有时间，就返回参数里面的时间。例如日期格式字符串为‘2019-5-1'，可以写成new Date('2019-5-1‘)
或者new Date('2019/5/1’)

2. 日期格式化

   | 方法名        | 说明                       | 代码               |
   | ------------- | -------------------------- | ------------------ |
   | getFullYear() | 获取当年                   | dObj.getFullYear() |
   | getMonth()    | 获取当月（0到11）          | dObj.getMonth()    |
   | getDate()     | 获取当天日期               | dObj.getDate()     |
   | getDay()      | 获取星期几（周日0到周六6） | dObj.getDay()      |
   | getHours()    | 获取当前小时               | dObj.getHours()    |
   | getMinutes()  | 获取当前分钟               | dObj.getMinutes()  |
   | getSeconds()  | 获取当前秒钟               | dObj.getSeconds()  |

3. 获得Date总的毫秒数

   ```javascript
   //1. 通过valueOf()  getTime()
   var date = new Date();
   console.log(date.valueOf());
   console.log(date.getTime());
   //2.简单的写法（最常用）
   var date1 = +new Date();  //+new Date()返回的就是毫秒数
   console.log(date1);
   //3.H5新增的获得总的毫秒数
   console.log(Date.now());
   ```

   

   
