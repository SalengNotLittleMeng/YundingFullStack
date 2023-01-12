# 一.JavaScript简介

## 1.1 JS简介

1.ECMAScript是JavaScript的标准 2.一个JS包含三个元素:ECMAScript,DOM(文档对象模型: 如何通过JS操作网页),BOM(浏览器对象模型: 如何通过JS操作浏览器) 3.JS是一种解释型语言，动态语言(和Py一样的一个变量多类型)，是OOP语言。

## 1.2 JS的HelloWorld

注意

JS代码要写在HTML的script标签中,type=text/javascript (默认)。

代码以分号结尾。

1. **浏览器中谈出一个警告框：**

   **alert("XXX")；**弹出一个通知框，显示XXX内容，出现一个“确定”按钮。**

2. **页面上输出内容**

   **document.write("XXX");直接在网页中显示双引号的HTML代码，例如:write("1</br>2</br>3")，值得注意的是显示的文字并不会出现在网页原代码的body部分。**

3. **.想控制台输出某句话**

   **console.log("XXX")；**向控制台输出一个内容。**



## 1.3 JS代码编写的位置

1. **可以将JS代码编写到标签的onclick属性中**，当我们点击代码的时候JS代码就会执行，例如如下代码会在点击的时候弹出"讨厌，你点我干嘛~"

   <button onclick="alert('讨厌，你点我干嘛~')">点我一下</button>
   *注意：alert( )里面用的是’’,单引号

2. **可以将JS代码写在超链接的href属性中**，这样当点击超链接时，会执行js代码，要记得在前面写javascript:

    <a href="javascript:alert('让你点你就点！！');">你也点我一下</a>


   但是这种直接写在标签里面的形式不方便维护，所以不推荐使用，和CSS一样JS可以写在script里面，也可以写在外部文件里面, 外部引用的写法：

3. <script type="text/javascript" src="./xxx"></script>


   例如：

4. **创建外部文件：script.js**

5. <script type="text/javascript" src="js/script.js"></script>

   script标签一旦用于引入外部文件了，就不能再编写代码了，即使编写了浏览器也会忽略。如果需要则可以再创建一个新的script标签用于编写内部代码。




# 二.JS的基础语法

## 2.1 JS的基本语法

JS的注释：单行//,       多行/**/，    注释会显示到源代码中，可以通过注释对代码进行简单的调试。

HTML不区分大小写，但是JS严格区分大小写。

JS中每一条语句以分号结尾

JS中忽略多个空格与换行，可以利用这个特性进行代码格式化。

## 2.2 字面量与变量

字面量: 可以认为字面量是常量，是一些不可改变的值，比如1 2 3 4 5。

字面量都是可以直接使用的，但是一般都不会直接使用字面量。

变量可以用来保存字面量，并且变量是可以任意改变的，变量更加方便我们使用，所以在开发的时候都是通过变量去保存一个字面量，而很少直接使用字面量。

在JS中使用var关键字来声明一个变量, 但是刚声明的变量没有进行赋值不能直接使用，例如

var a;
console.log(a);


这里会输出undefined, 但是和没有声明不一样，没声明报错：Uncaught ReferenceError: XXX is not defined.

声明赋值可以同时进行。

可以通过变量对字面值进行描述。

## 2.3 标识符

在JS中所有可以自主命名的全部可以称为标识符，例如: 变量名、函数名、属性名都属于标识符。

注意

命名一个**标识符**的时候我们可以写

 **字母 数字 下划线 $**

**不能以数字开头**

**标识符不能是JS中的关键字的保留字，例如var**

标识符建议采用驼峰命名法：首字母小写，其余单词开头大写（helloWord, xxxYyyZzz)

JS在保存标识符的时候采用的是Unicode编码，所以理论上Utf-8中含有的内容都可以作为标识符。（中文可以，但是千万别这样用）

附页：





## 2.4 数据类型

数据类型指的是字面量的类型，在JS中一共有8种数据类型。

1. **String（字符串）**

2. **BigInt**

3. **Number(数值）**

4. **Boolean（布尔值）**

5. **Null(空值)**

6. **Undefined(未定义)**

7. **Object(对象)**


其中String、Number、Boolean、Null、Undefined属于基本数据类型，Object属于引用数据类型。

ps. 动态语言的好处，把很多类型直接整合到一起

其中基本数据类型就是除了Object之外的，Object属于引用数据类型

### 2.4.1 typeof运算符

可以使用运算符号typeof()检查变量类型,例如

```
var a=123;
var b="123"

console.log(a);
console.log(b);
console.log(typeof(a));
console.log(typeof(b));

输出结果：

123
123
number
string
```



### 2.4.2 String

String字符串:

JS中字符串需要用引号(单引号或双引号均可)引起来

注意单引号里面用双引号，双引号里面用单引号

如果你就是不想用单引号，那么就要告诉浏览器你这里的双引号是用来干啥的，是框字符串的还是一个普通的双引号，这里我们可以使用\作为转意字符，例如",例如var str2=“我说：“今天天’气真不’错””;，转意字符还有\n: 换行，\t: 制表符,\表示\

和C语言一样。

### 2.4.3 Number

Number数值：

1. 在JS中所有类型的数字全是Number不区分float,int
 2. Number的最大值: 可以输出Number.MAX_VALUE 为: 1.7976931348623157e+308, 如果我们要求输出Number.MAX_VALUE * Number.MAX_VALUE结果会显示Infinity(表示正无穷）。
 3. 注意Infinity是一个字面量，允许被赋值，值得注意的是一定不能加引号，否则就是字符串了，并且注Infinity的typeof是Number, 存在-Infinity
4.  两个字符串相乘的结果是NaN 表示Not a Number, 与Infinity同理，字面量可以赋值，typeof是Number,不要引号。
5.  Number可以表示的最小精度Number.MAX_VALUE,也就是最小正值
6. JS的浮点数运算可能不精确，所以千万不要用JS进行高精运算，这些给服务器去算

### 2.4.4 Boolean

Boolean布尔值：

布尔值只有两个，主要用来做逻辑判断 ture/false 使用typeof检查一个布尔值时，会返回boolean

```
var bool =ture;
console.log(typeof bool);
console.log(bool);
运行结果
“boolean”
"ture"
```



### 2.4.5Null

Null空值：

只有一个数据元素就是null 专门用来表示空对象 值得注意的是用typeof看null,视频上说会显示Object 但是本机上是null,null绝对不是一个对象，null有自己的类型，它是一个 特殊的类型，至于为什么会null返回object，这是官方承认的错误

### 2.4.6Undefined

undefined未定义：

声明变量不给他赋值就输出会显示这个 不声明就输出会报错 typeof()是undefined

## 2.5 强制类型转换

指的是将一个数据类型转化为String,Number,Boolean。

### 2.5.1 转化为String:

调用被被转化类型的toString方法:

- **方法一： (XXX.toString())**

调用xxx的yyy方法：xxx.yyy() 注意：

 1.他不会修改原变量，而是作为返回值返回

 2.bool的toString是"true"/"false"但是存在问题

 3.null,undefined 的toString会报错Uncaught TypeError: Cannot read property ‘toString’ of null，因为这两个类型没有toString

- **方法二：调用String()函数: 将被转化的数据作为参数传入, 这个支持Null与Undefined,*C++的构造函数***

 

```
var a;
    a=ture;
    a=a.toString();
    console.log(typeof a);
    console.log(a);    
    运行结果
    “string”
    "ture"
```

- **方法三：+""**

```
let i=100;
strI=i+"";
consle.log(strI[0],strI[1],str[2])
结果为‘1’‘0’‘0’
```



### 2.5.2 转化为Number

- 方法一：使用Number（）函数: 非数字的字符串转Number会NaN，空string串(允许包含任意空格)会转化为0, bool=true转为1,false转化为0, null转为0, undefined转为0.

- 

- 

- 方法二:专门对付字符串的方式：(可用于10px等css中的计算)


parseInt()与parseFloat(),可以将字符串中有效的对应内容解析

parseInt(“123r456”)会先解析123然后遇到r直接break!

**parseInt()只能取整数,parseFloat()可取小数**

**如果对非String使用parseInt（）或parseFloat（），它会先将其转化为String，然后再操作**

**利用parseint可以取整.**





### 2.5.3 转化为boolean

Boolean函数 Number 非0：true ，0：false， String 非空：true ，空：false， Null 为false， undefined为false, Object为true

2.6 其他进制的数字
表示16进制(需要以0x开头)： var a=0x3f3f3f3f; 输出会自动转化为10进制

表示8进制(需要以0开头)： var a=070; 输出会自动转化为10进制

表示2进制(需要以0b开头)： var a=0b10; 输出会自动转化为10进制

注意parseInt(“070”)会被不同浏览器解析成10或8进制,只需改为parseInt(“070”,10)或parseInt(“070”,8)即可。

## 2.7 运算符

### 2.7.1算数运算符

运算符也叫操作符，例如:+,typeof()[返回值是string]

算数运算符:+,-,*,/,%：

+: 对非Number进行运算的时候遵循上面的规律进行转化运算，NaN参与运算结果一定是NaN，特殊的，两个字符串相加(只有相加)的结果是两个字符串拼接，任何值与字符串相加数字会转化为字符串任何拼接,包括NaN，利用这个性质可以任意类型+空字符串得到字符串类型，隐式类型转化

 Infinity+"hello"
 "Infinityhello"
  NaN+"hello"
 "NaNhello"
运算是自左向右的所以"1"+2+3=“123”,1+2+“3”=“33”

-/ *//:对非Number进行运算的时候遵循上面的规律进行转化运算，NaN参与运算结果一定是NaN，特殊的，字符串相减的时候会转化为Number，利用这个性质可以做string隐式类型转化为Number

%取模运算

### 2.7.2 一元运算符

一元运算符:+,-

Number:+不会产生影响，-会取反

非Number会先转化成Number再运算,例如-true=-1,-NaN=NaN

利用这个性质+a可以把a转化为Number，例如+“1”+2+3=6

### 2.7.3 自增自减

自增可以使得变量在自身的基础上加1,a++ <=> a=a+1,++a <=> a=a+1,自带赋值，前后++与C语言相同

自减可以使得变量在自身的基础上减1,a-- <=> a=a-1,–a <=> a=a-1,自带赋值，前后–与C语言相同

- ```
  a++的值等于原变量的值（自增前的值） ++a的值等于新值（自增后的值）
  
  唯一的区别是后++是先给值然后马上自增。例如
  
  var b=10;
  console.log(b++ + ++b + b);
  结果是
     10+12+12=34       
  并且注意
  var b=10;
  b=b++;
  console.log(b);
  等价于
  var b=10;
  var c=b++;
  b=c;
  console.log(b);
  同样的--同理
  ```



### 2.7.4 逻辑运算符

三个:非!,与&&,或||

!:对bool进行运算就是取反，对非bool会先转化为bool。如果对一个值进行两次取反，它不会变化。 我们可以利用该特点，来将一种其他的数据类型将其转化为bool,方法是!!tmp，原理和Boolean（）函数一样。

```
var a=false;
console.log(!a);
console.log(!!a);

var b=10;
console.log(!b);
console.log(!!b);

得到结果

true
false
false
true
```

&& 与 –&可以对符号两侧的值进行与运算并返回结果 –运算规则： —两个值中只要有一个值为false就返回false 只有两个值都为ture时，才会返回ture —JS中的“与”属于短路的与 如果第一个值为false，则不会看第二个值

|| 或 –运算规则： —JS中的“或”属于短路的或 如果第一个值为false，则会检查第二个值

-&&，||与C相同，也有短路，非bool进行运算需要先转换为bool进行运算，然后返回原值

与运算：

如果两个值都是true，则返回后边的 – result = 5&&6； 输出6

如果两个值中有false，则返回靠前的false – result = 0&&6； 输出0 规则小结： 如果第一个值是ture， 则返回第二个值 如果第一个值是false，则返回第一个值

或运算： 如果第一个值是ture， 则返回第一个值 如果第一个值是false，则返回第二个值

返回值就是在加入短路原则之后最后判断的那个元素

### 2.7.5 赋值运算符

+=,-=,*=,/=,%=与C完全相同

赋值运算符 = - 可以将符号右侧的值赋值给左侧变量

+=
		- a += 5 相当于 a = a+5
		- var str = "hello";  str += "world";
		
	-=
		- a -= 5  相当于 a = a-5
		
	*=
		- a *= 5 相当于 a = a*5
		
	/=
		- a /= 5 相当于 a = a/5	
	 
	%=
		- a %= 5 相当于 a = a%5	

### 2.7.6关系运算符

关系成立返回true，关系不成立返回false >，>=，<，<=，==,!=

除了==与!=符号:

非数值的情况: 转化为Number, 任何值与NaN比较都是false

 特殊的: 
      符号两侧都是字符串会分别比较字符的Unicode编码
      比较两个字符串时，比较的是字符串的字符编码、
      比较字符编码时是一位一位进行比较
      如果两位一样，则比较下一位，所以借用它来对英文进行排序
      比较中文时没意义
      如果比较
前面的一样短的小， 所以谨慎比较两个数字字符串

对于==与!=符号： 类型不同会自动进行类型转化，但是左边转右边还是右边转左边都不一定，注意的是undefinednull,任何值NaN都为false, 包括NaN

===,!与,!=

简单来说： == 代表相同， ===代表严格相同

这么理解： 当进行双等号比较时候： 先检查两个操作数数据类型，如果相同， 则进行=比较， 如果不同， 则愿意为你进行一次类型转换， 转换成相同类型后再进行比较， 而=比较时， 如果类型不同，直接就是false.

操作数1 == 操作数2， 操作数1 === 操作数2

比较过程：

双等号==：

如果两个值类型相同，再进行三个等号(===)的比较
如果两个值类型不同，也有可能相等，需根据以下规则进行类型转换在比较：
如果一个是null，一个是undefined，那么相等
如果一个是字符串，一个是数值，把字符串转换成数值之后再进行比较

三等号===: 

如果类型不同，就一定不相等
如果两个都是数值，并且是同一个值，那么相等；如果其中至少一个是NaN，那么不相等。（判断一个值是否是NaN，只能使用isNaN( ) 来判断）
如果两个都是字符串，每个位置的字符都一样，那么相等，否则不相等。
如果两个值都是true，或是false，那么相等
如果两个值都引用同一个对象或是函数，那么相等，否则不相等
如果两个值都是null，或是undefined，那么相等

### 2.7.7 Unicode编码表

在字符串中使用转义字符输入Unicode编码

\u 四位编码

console.log("\u2620");
在网页中使用Unicode编码

&#编码；这里的编码需要的时10进制

如：

<h1 style="font-size:100px;">&#9760;</h1>

### 2.7.8 条件运算符

JavaScript 还包含了基于某些条件对变量进行赋值的条件运算符。

语法：variablename=(condition)?value1:value2;

举例：result=(age<18)?"年龄太小":"年龄合适";

执行流程：如果condition为true，则执行语句1，并返回执行结果，如果为false，则执行语句2，并返回执行结果。

条件运算符也叫三元运算符

语法：

***<u>条件表达式？语句1：语句2 ；</u>***

**-执行流程：**

**条件运算符在执行时，首先对条件表达式进行求值，**

**如果该值为true，则执行语句1，并返回执行结果。**

**如果该值为false，则执行语句2，并返回执行结果。**

**如果条件的表达式的求职结果是一个非布尔值，**

**会将其转换为布尔值然后在运算。**

### 2.7.9 逗号运算符

使用逗号可以在一条语句中执行多次操作。

比如：var num1=1, num2=2, num3=3;

使用逗号运算符分隔的语句会从左到右顺 序依次执行。

2.8 运算符优先级
运算符优先级由上到下依次减小，对于同级运算符，采用从左向右依次执行的方法。



## 2.9代码块

### 2.9.1 语句

前边所说表达式和运算符等内容可以理解成是我们一 门语言中的单词，短语。而语句（statement）就是我们这个语言中一句一句完 整的话了。语句是一个程序的基本单位，JavaScript的程序就是由一条一条语句构成的，每一条语句使用;结尾。

JavaScript中的语句默认是由上至下顺序执行的，但是我们也可以通过一些流程控制语句来控制语句的执行顺序。

### 2.9.2 代码块

代码块是在大括号{}中所写的语句，以此将多条语句的集合视为一条语句来使用。

例如：

{
var a = 123;
a++;
alert(a);
}
我们一般使用代码块将需要一起执行的语句进行分组，需要注意的是，代码块结尾不需要加分号。

## 2.10 条件语句

条件语句是通过判断指定表达式的值来决定执行还是跳过某些语句，最基本的条件语句：

if…else

switch…case

### 2.10.1 if...else

if…else语句是一种最基本的控制语句，它让JavaScript可以有条件的执行语句。

```
第一种形式：

if(expression)
    statement
12
var age = 16;
if (age < 18) {
    console.log("未成年");
}
第二种形式：

if(expression)
    statement
else
    statement

var age = 16;
if (age < 18) {
    console.log("未成年");
} else {
    console.log("已成年");
}
第三种形式：

if(expression1)
    statement
else if(expression2)
    statement
else
    statement    


var age = 18;
if (age < 18) {
    console.log("小于18岁了");
} else if (age == 18) {
    console.log("已经18岁了");
} else {
    console.log("大于18岁了")

```


}

### 2.10.2 prompt( )

***prompt( )可以弹出一个提示框，该提示框中会带有一个文本框。***

用户可以在文本框中输入一段内容，该函数需要一个字符串作为参数。

该字符串将会作为提示框的提示文字。

用户输入的内容家境会作为函数的返回值返回，可以定义一个变量接收该内容。

var score = prompt("请输入小明的期末成绩：")

### 2.10.3 switch...case

switch…case是另一种流程控制语句。

switch语句更适用于多条分支使用同一条语句的情况。

语法格式：

**switch (语句) {**
    **case 表达式1:**
        **语句...**
    **case 表达式2:**
        **语句...**
    **default:**
        **语句...**
**}**
注意：需要注意的是一旦符合case的条件程序会一直运行到结束，所以我们一般会在case中添加break作为语句的结束。

```
案例演示1：根据today的数值，输出今天是星期几。

var today = 1;
switch (today) {
    case 1:
        console.log("星期一");
        break;
    case 2:
        console.log("星期二");
        break;
    case 3:
        console.log("星期三");
        break;
    case 4:
        console.log("星期四");
        break;
    case 5:
        console.log("星期五");
        break;
    case 6:
        console.log("星期六");
        break;
    case 7:
        console.log("星期日");
        break;
    default:
        console.log("输入错误");
}

案例演示2：根据month的数值，输出对应月份的天数，2月默认28天。

var month = 10;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31天");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("31天");
        break;
    case 2:
        console.log("28天");
        break;
    default:
        console.log("输入错误");

```

}

## 2.11 循环语句

循环语句和条件语句一样，也是基本的控制语句，只要满足一定的条件将会一直执行，最基本的循环语句：

while

do…while

for

向页面中输出连续的数字使其分行

document.write(1+"<br />");
document.write(2+"<br />");

### 2.11.1 while

while语句是一个最基本的循环语句，while语句也被称为while循环。

语法格式：

**while(条件表达式){**
    **语句...**
**}**

```
案例演示：输出1-10.

var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
```



### 2.11.2 do...while

do…while和while非常类似，只不过它会在循环的尾部而不是顶部检查表达式的值，因此，do…while循环会至少执行一次。相比于while，do…while的使用情况并不 是很多。

do..while 语句在执行时，会先执行循环体。

循环体执行完毕后，在对while后的条件表达式进行判断，如果结果为true ，则继续执行循环体，执行完毕后继续判断以此类推。如果结果为false，则终止循环。

while时先判断在执行，do...while是先执行后判断。

do..while 可以保证循环体至少执行一次。

语法格式：

**do{**
    **语句...**
**}while(条件表达式);**

```
案例：输出1-10.

var i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);
```



### 2.11.3 for



语法格式：

**for(初始化表达式 ; 条件表达式 ; 更新表达式){**
    **语句...**
**}**

**ps**:

<u>使用let在for循环的（）中声明的变量是局部变量，只能在for循环内部访问</u>

<u>使用var则在for循环外部访问</u>

<u><u>

```
<u><u>for (var j = 0; j < 10; j++) {</u>
       
        <u>}</u>
        <u>console.log(j);</u>
</u><u></u></u>    
```

**案例演示：打印9*9乘法表**

```
//创建外部循环，用来控制乘法表的高度
for(var i = 1 ; i<=9 ;i++){
	//创建一个内部循环来控制和图形的宽度
	for(var j=1 ; j<=i ; j++){
		//document.write(j+"*"+i"="+i*j+"&nbsp;&nbsp;&nbsp;");
        document.write("<span>"+j+"*"+i"="+i*j+"</span>");
	}
    //输出一个换行
    document.write("<br />")
}

span{
    display:inline-block;
    width:80px;
}
```

&nbsp 表示空格键

**案例：打印1-100之间的所有的质数**

```
for(var i=2;i<=100;i++){
//创建一个布尔值，用来保存结果，默认i是质数
var flag = true;
for(var j=2 ;j<= Math.sqrt(i) ;j++){
	if(i%j == 0){
		flag = false;
        break;
        //不加break 215ms
        //加break 25ms
        //修改j<=后  2.6ms
	}
}
if(flag){
	console.log(i);
}
}

//可以通过Math.sqrt( )对一个数进行开方
```



### 2.11.4 跳转控制（break/continue）

break：结束最近的一次循环，可以在循环和switch语句中使用。

不能在if语句中使用break和continue

continue：结束本次循环，执行下一次循环，只能在循环中使用。

那如果我们想要跳出多层循环或者跳到指定位置该怎么办呢？可以为循环语句创建一个label，来标识当前的循环，如下例子：

```
outer: for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (j == 5) {
            break outer;
        }
        console.log(j);
    }
}
//测试程序的性能
//在程序执行时，开启计时器
//console.time("计时器的名字")可以用来开启一个计时器
//它需要一个字符串作为参数，这个字符串将会作为计时器的标识
console.time("test");

................

//终止计时器
//console.timeEnd()用来停止一个计时器，需要一个计时器的名字作为参数
console.timeEnd("test");
```



## 2.12 对象基础

### 2.12.1 对象的简介

JS中数据类型

String 字符串

Number 数值

Boolean 布尔值

Null 空值

Undefined 未定义

-以上这五种类型述语基本数据类型，以后我们看到的值只要不是以上的5种，全都是对象。

Object 对象。

基本数据类型都是单一的值。值和值之间没有任何关系。

Object类型，我们也称为一个对象，是JavaScript中的引用数据类型。它是一种复合值，它将很多值聚合到一起，可以通过名字访问这些值。对象也可以看做是属性的无序集合，每个属性都是一个名/值对。对象除了可以创建自有属性，还可以通过从一个名为原型的对象那里继承属性。除了字符串、数字、true、false、null和undefined之外，JavaScript中的值都是对象。

### 2.12.2 创建对象

创建对象有两种方式：

第一种方式：

```
var person = new Object();
person.name = "孙悟空";
person.age = 18;
console.log(person);
```

第二种方式：

```
var person = {
    name: "孙悟空",
    age: 18
};
console.log(person);
```



### 2.12.3 访问属性

访问属性的两种方式：

第一种方式：使用 . 来访问

对象.属性名
第二种方式：使用[ ]来访问

对象['属性名']
2.12.4 删除属性
删除对象的属性可以使用delete关键字，格式如下：

delete 对象.属性名
案例演示：

```
var person = new Object();
person.name = "孙悟空";
person.age = 18;
console.log(person);

delete person.name
console.log(person);
```



### 2.12.5 遍历对象

枚举遍历对象中的属性，可以使用for … in语句循环，对象中有几个属性，循环体就会执行几次。

语法格式：

for (var 变量 in 对象) {

}
案例演示：

```
var person = {
    name: "zhangsan",
    age: 18
}

for (var personKey in person) {
    var personVal = person[personKey];
    console.log(personKey + ":" + personVal);
}
```



### 2.12.6 数据类型梳理

#### 2.12.6.1 基本数据类型

JavaScript中的变量可能包含两种不同数据类型的值：基本数据类型和引用数据类型。

JavaScript中一共有5种基本数据类型：String、Number、 Boolean、Undefined、Null。

基本数据类型的值是无法修改的，是不可变的。

基本数据类型的比较是值的比较，也就是只要两个变量的值相等，我们就认为这两个变量相等。

#### 2.12.6.2 引用数据类型

引用类型的值是保存在内存中的对象。

当一个变量是一个对象时，实际上变量中保存的并不是对象本身，而是对象的引用。

当从一个变量向另一个变量复制引用类型的值时，会将对象的引用复制到变量中，并不是创建一个新的对象。

这时，两个变量指向的是同一个对象。因此，改变其中一个变量会影响另一个。

#### 2.12.7 栈和堆梳理

JavaScript在运行时数据是保存到栈内存和堆内存当中的。

简单来说栈内存用来保存变量和基本类型，堆内存是用来保存对象。

我们在声明一个变量时，实际上就是在栈内存中创建了一个空间用来保存变量。

如果是基本类型则在栈内存中直接保存，如果是引用类型则会在堆内存中保存，变量中保存的实际上对象在堆内存中的地址。

当我们写了下边这几句代码的时候，栈内存和堆内存的结构如下：

var a = 123;
var b = true;
var c = "hello";
var d = {name: 'sunwukong', age: 18};
栈的特点：先进后出，后进先出



### 2.13 函数

#### 2.13.1 概述

函数是由一连串的子程序（语句的集合）所组成的，可以被外部程序调用，向函数传递参数之后，函数可以返回一定的值。

通常情况下，JavaScript代码是自上而下执行的，不过函数体内部的代码则不是这样。如果只是对函数进行了声明，其中的代码并不会执行，只有在调用函数时才会执行函数体内部的代码。

这里要注意的是JavaScript中的函数也是一个对象，使用typeof检查一个函数对象时，会返回function。

#### 2.13.2 函数创建

使用 函数对象 来创建一个函数（几乎不用）

语法格式：

var 函数名 = new Function("执行语句");
示例代码：

var fun = new Function("console.log('这是我的第一个函数');");
使用 函数声明 来创建一个函数（比较常用）

```
语法格式：

function 函数名([形参1,形参2,...,形参N]) {
    语句...
}
```

```
示例代码：

function fun(){
    console.log("这是我的第二个函数");
}
```

使用 函数表达式 来创建一个函数（比较常用）

```
语法格式：

function fun(){
    console.log("这是我的第二个函数");
}
```

```
示例代码：

var fun  = function() {
    console.log("这是我的第三个函数");
}
```



#### 2.13.3 函数调用

对于无参函数调用：

```
// 函数声明
var fun = function () {
    console.log("哈哈，我执行啦！");
}

// 函数调用
fun();
```

对于有参函数调用：

```
// 函数声明
var sum = function (num1, num2) {
    var result = num1 + num2;
    console.log("num1 + num2 = " + result);
}

// 函数调用
sum(10, 20);
```



#### 2.13.4 函数参数

JS中的所有的参数传递都是按值传递的，也就是说把函数外部的值赋值给函数内部的参数，就和把值从一个变量赋值给另一个变量是一样的，在调用函数时，可以在()中指定实参（实际参数），实参将会赋值给函数中对应的形参

调用函数时，解析器不会检查实参的类型，所以要注意，是否有可能会接收到非法的参数，如果有可能，则需要对参数进行类型的检查，函数的实参可以是任意的数据类型

调用函数时，解析器也不会检查实参的数量，多余实参不会被赋值，如果实参的数量少于形参的数量，则没有对应实参的形参将是undefined

#### 2.13.5 函数返回值

可以使用 return 来设置函数的返回值，return后的值将会作为函数的执行结果返回，可以定义一个变量，来接收该结果。

注意：在函数中return后的语句都不会执行，如果return语句后不跟任何值就相当于返回一个undefined，如果函数中不写return，则也会返回undefined，return后可以跟任意类型的值

语法格式：return 值

```
案例演示：

function sum(num1, num2) {
    return num1 + num2;
}

var result = sum(10, 20);
console.log(result);
```



#### 2.13.6 嵌套函数

嵌套函数：在函数中声明的函数就是嵌套函数，嵌套函数只能在当前函数中可以访问，在当前函数外无法访问。

案例演示：

```
function fu() {
    function zi() {
        console.log("我是儿子")
    }

zi();

}

fu();
```



#### 2.13.7 匿名函数

匿名函数：没有名字的函数就是匿名函数，它可以让一个变量来接收，也就是用 “函数表达式” 方式创建和接收。

```
案例演示：

var fun = function () {
    alert("我是一个匿名函数");
}

fun();
```



#### 2.13.8 立即执行函数

立即执行函数：函数定义完，立即被调用，这种函数叫做立即执行函数，立即执行函数往往只会执行一次。

```
案例演示：

(function () {
    alert("我是一个匿名函数");
})();
```

#### 2.13.9 对象中的函数

对象的属性值可以是任何的数据类型，也可以是个函数。

如果一个函数作为一个对象的属性保存，那么我们称这个函数是这个对象的方法，调用这个函数就说调用对象的方法（method）。

注意：方法和函数只是名称上的区别，没有其它别的区别

```
案例演示：

var person = {
    name: "zhangsan",
    age: 18,
    sayHello: function () {
        console.log(name + " hello")
    }
}

person.sayHello();

#### 
```

#### 2.13.10 this对象

解析器在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是this，this指向的是一个对象，这个对象我们称为函数执行的上下文对象，根据函数的调用方式的不同，this会指向不同的对象

以函数的形式调用时，this永远都是window

以方法的形式调用时，this就是调用方法的那个对象

```
案例演示：

//创建一个全局变量name
var name = "全局变量name";

//创建一个函数
function fun() {
    console.log(this.name);
}

//创建一个对象
var obj = {
    name: "孙悟空",
    sayName: fun
};

//我们希望调用obj.sayName()时可以输出obj的名字而不是全局变量name的名字
obj.sayName();
```



## 2.14 对象进阶

#### 2.14.1 用工厂方法创建对象

我们之前已经学习了如何创建一个对象，那我们要是想要创建多个对象又该怎么办？聪明的同学可能会说，直接在写几个对象不就好了吗？比如下边的代码：

```
var person1 = {
    name: "孙悟空",
    age: 18,
    sayName: function () {
        console.log(this.name);
    }
};

var person2 = {
    name: "猪八戒",
    age: 19,
    sayName: function () {
        console.log(this.name);
    }
};

var person3 = {
    name: "沙和尚",
    age: 20,
    sayName: function () {
        console.log(this.name);
    }
};

console.log(person1);
console.log(person2);
console.log(person3);
```

的确，上述代码确实可以创建多个对象，但是，这样的解决方案真的好吗？对于少量对象可能使用，我们假设说，要用循环创建1000个对象，那你这种办法似乎就没用了，我们可以这么做，如下代码：

```
// 使用工厂模式创建对象
function createPerson() {
    // 创建新的对象
    var obj = new Object();
    // 设置对象属性
    obj.name = "孙悟空";
    obj.age = 18;
    // 设置对象方法
    obj.sayName = function () {
        console.log(this.name);
    };
    //返回新的对象
    return obj;
}

var person1 = createPerson();
var person2 = createPerson();
var person3 = createPerson();

console.log(person1);
console.log(person2);
console.log(person3);
```

上述代码看起来更加简洁，但是你会发现每一个人都是孙悟空，我们要是想要给每一个人不同的属性值，请参考：

```
// 使用工厂模式创建对象
function createPerson(name, age) {
    // 创建新的对象
    var obj = new Object();
    // 设置对象属性
    obj.name = name;
    obj.age = age;
    // 设置对象方法
    obj.sayName = function () {
        console.log(this.name);
    };
    //返回新的对象
    return obj;
}

var person1 = createPerson("孙悟空", 18);
var person2 = createPerson("猪八戒", 19);
var person3 = createPerson("沙和尚", 20);

console.log(person1);
console.log(person2);
console.log(person3);
```

现在再看上述代码，发现好像已经完美的解决了创建多个对象的难题，那我们是不是可以用循环批量创建1000个对象了呢？那我们就来试试：

```
// 使用工厂模式创建对象
function createPerson(name, age) {
    // 创建新的对象
    var obj = new Object();
    // 设置对象属性
    obj.name = name;
    obj.age = age;
    // 设置对象方法
    obj.sayName = function () {
        console.log(this.name);
    };
    //返回新的对象
    return obj;
}

for (var i = 1; i <= 1000; i++) {
    var person = createPerson("person" + i, 18);
    console.log(person);
}


```

这样我们就实现了批量创建对象的功能，至于对象的名称和年龄，我们可以通过名称数组和年龄数组来获取，但这并不是我们本小节的重点，我们就忽略了。

#### 2.14.2 用构造函数创建对象

在前一节中，我们学会了使用工厂模式创建对象，但是，你会发现我们所创建的对象类型都是Object，具体代码如下：

```
// 使用工厂模式创建对象
function createPerson(name, age) {
    // 创建新的对象
    var obj = new Object();
    // 设置对象属性
    obj.name = name;
    obj.age = age;
    // 设置对象方法
    obj.sayName = function () {
        console.log(this.name);
    };
    //返回新的对象
    return obj;
}

for (var i = 1; i <= 1000; i++) {
    var person = createPerson("person" + i, 18);
    console.log(typeof person);
}
```



那这有问题吗？看起来有，看起来好像又没有，每创建一个都是对象，但是在实际生活中，人应该是一个确定的类别，属于人类，对象是一个笼统的称呼，万物皆对象，它并不能确切的指明当前对象是人类，那我们要是既想实现创建对象的功能，同时又能明确所创建出来的对象是人类，那么似乎问题就得到了解决，这就用到了构造函数，每一个构造函数你都可以理解为一个类别，用构造函数所创建的对象我们也成为类的实例，那我们来看看是如何做的：

```
// 使用构造函数来创建对象
function Person(name, age) {
    // 设置对象的属性
    this.name = name;
    this.age = age;
    // 设置对象的方法
    this.sayName = function () {
        console.log(this.name);
    };
}

var person1 = new Person("孙悟空", 18);
var person2 = new Person("猪八戒", 19);
var person3 = new Person("沙和尚", 20);

console.log(person1);
console.log(person2);
console.log(person3);
```



那这构造函数到底是什么呢？我来解释一下：

构造函数：构造函数就是一个普通的函数，创建方式和普通函数没有区别，不同的是构造函数习惯上首字母大写，构造函数和普通函数的还有一个区别就是调用方式的不同，普通函数是直接调用，而构造函数需要使用new关键字来调用。

那构造函数是怎么执行创建对象的过程呢？我再来解释一下：

调用构造函数，它会立刻创建一个新的对象

将新建的对象设置为函数中this，在构造函数中可以使用this来引用新建的对象

逐行执行函数中的代码

将新建的对象作为返回值返回

你会发现构造函数有点类似工厂方法，但是它创建对象和返回对象都给我们隐藏了，使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类。我们将通过一个构造函数创建的对象，称为是该类的实例。

现在，this又出现了一种新的情况，为了不让大家混淆，我再来梳理一下：

当以函数的形式调用时，this是window

当以方法的形式调用时，谁调用方法this就是谁

当以构造函数的形式调用时，this就是新创建的那个对象

我们可以使用 instanceof 运算符检查一个对象是否是一个类的实例，它返回true或false

语法格式：

对象 instanceof 构造函数
案例演示：

console.log(person1 instanceof Person);

#### 2.14.3 原型

在前一节中，我们学习了使用构造函数的方式进行创建对象，但是，它还是存在一个问题，那就是，你会发现，每一个对象的属性不一样这是一定的，但是它的方法似乎好像是一样的，如果我创建1000个对象，那岂不是内存中就有1000个相同的方法，那要是有10000个，那对内存的浪费可不是一点半点的，我们有没有什么好的办法解决，没错，我们可以把函数抽取出来，作为全局函数，在构造函数中直接引用就可以了，上代码：

```
// 使用构造函数来创建对象
function Person(name, age) {
    // 设置对象的属性
    this.name = name;
    this.age = age;
    // 设置对象的方法
    this.sayName = sayName
}

// 抽取方法为全局函数
function sayName() {
    console.log(this.name);
}

var person1 = new Person("孙悟空", 18);
var person2 = new Person("猪八戒", 19);
var person3 = new Person("沙和尚", 20);

person1.sayName();
person2.sayName();
person3.sayName();
```



但是，在全局作用域中定义函数却不是一个好的办法，为什么呢？因为，如果要是涉及到多人协作开发一个项目，别人也有可能叫sayName这个方法，这样在工程合并的时候就会导致一系列的问题，污染全局作用域，那该怎么办呢？有没有一种方法，我只在Person这个类的全局对象中添加一个函数，然后在类中引用？答案肯定是有的，这就需要原型对象了，我们先看看怎么做的，然后在详细讲解原型对象。

```
// 使用构造函数来创建对象
function Person(name, age) {
    // 设置对象的属性
    this.name = name;
    this.age = age;
}

// 在Person类的原型对象中添加方法
Person.prototype.sayName = function() {
    console.log(this.name);
};

var person1 = new Person("孙悟空", 18);
var person2 = new Person("猪八戒", 19);
var person3 = new Person("沙和尚", 20);

person1.sayName();
person2.sayName();
person3.sayName();


```


那原型（prototype）到底是什么呢？

我们所创建的每一个函数，解析器都会向函数中添加一个属性prototype，这个属性对应着一个对象，这个对象就是我们所谓的原型对象，即显式原型，原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，我们可以将对象中共有的内容，统一设置到原型对象中。

如果函数作为普通函数调用prototype没有任何作用，当函数以构造函数的形式调用时，它所创建的对象中都会有一个隐含的属性，指向该构造函数的原型对象，我们可以通过proto（隐式原型）来访问该属性。当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用。

以后我们创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中，这样不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了。

2.14.4 原型链
访问一个对象的属性时，先在自身属性中查找，找到返回， 如果没有，再沿着proto这条链向上查找，找到返回，如果最终没找到，返回undefined，这就是原型链，又称隐式原型链，它的作用就是查找对象的属性(方法)。

我们使用一张图来梳理一下上一节原型案例的代码：



注意：Object对象是所有对象的祖宗，Object的原型对象指向为null，也就是没有原型对象

#### 2.14.5 toString方法

toString()函数用于将当前对象以字符串的形式返回。该方法属于Object对象，由于所有的对象都"继承"了Object的对象实例，因此几乎所有的实例对象都可以使用该方法，所有主流浏览器均支持该函数。

```
// 使用构造函数来创建对象
function Person(name, age) {
    // 设置对象的属性
    this.name = name;
    this.age = age;
}

//创建对象的一个实例对象
var p = new Person("张三", 20);
console.log(p.toString());
```


JavaScript的许多内置对象都重写了该函数，以实现更适合自身的功能需要。

类型	行为描述
String	返回 String 对象的值。
Number	返回 Number 的字符串表示。
Boolean	如果布尔值是true，则返回"true"。否则返回"false"。
Object(默认)	返回"[object ObjectName]"，其中 ObjectName 是对象类型的名称。
Array	将 Array 的每个元素转换为字符串，并将它们依次连接起来，两个元素之间用英文逗号作为分隔符进行拼接。
Date	返回日期的文本表示。
Error	返回一个包含相关错误信息的字符串。
Function	返回如下格式的字符串，其中 functionname 是一个函数的名称 此函数的 toString 方法被调用： “function functionname() { [native code] }”
注意：这里我们只是演示toString()方法，其它的一些没有讲到的知识后边会将，我们只看效果就可。

```
// 字符串
var str = "Hello";
console.log(str.toString());

// 数字
var num = 15.26540;
console.log(num.toString());

// 布尔
var bool = true;
console.log(bool.toString());

// Object
var obj = {name: "张三", age: 18};
console.log(obj.toString());

// 数组
var array = ["CodePlayer", true, 12, -5];
console.log(array.toString());

// 日期
var date = new Date(2013, 7, 18, 23, 11, 59, 230);
console.log(date.toString());

// 错误
var error = new Error("自定义错误信息");
console.log(error.toString());

// 函数
console.log(Function.toString());


```



#### 2.14.6 hasOwnProperty方法

前边章节我们学过，如何遍历一个对象所有的属性和值，那我们要是判断当前对象是否包含指定的属性或方法可以使用 in 运算符来检查，如下代码演示：

```
// 创造一个构造函数
function MyClass() {
}

// 向MyClass的原型中添加一个name属性
MyClass.prototype.name = "我是原型中的名字";

// 创建一个MyClass的实例
var mc = new MyClass();
mc.age = 18;

// 使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true
console.log("age" in mc);
console.log("name" in mc);
```


如果我只想要检查自身对象是否含有某个方法或属性，我们可以使用Object的hasOwnProperty()方法，它返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。如下代码演示：

```
// 创造一个构造函数
function MyClass() {
}

// 向MyClass的原型中添加一个name属性
MyClass.prototype.name = "我是原型中的名字";

// 创建一个MyClass的实例
var mc = new MyClass();
mc.age = 18;

// 使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true
console.log("age" in mc);
console.log("name" in mc);

// 可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性，使用该方法只有当对象自身中含有属性时，才会返回true
console.log(mc.hasOwnProperty("age"));
console.log(mc.hasOwnProperty("name"));
```



有同学可能会有疑问，我的这个MyClass类对象中没有hasOwnProperty这个方法啊，它是哪来的？对了，就是原型中的，在执行方法的时候它会通过原型链进行查找，这个方法是Object的特有方法，如下代码演示：

```
// 创造一个构造函数
function MyClass() {
}

// 向MyClass的原型中添加一个name属性
MyClass.prototype.name = "我是原型中的名字";

// 创建一个MyClass的实例
var mc = new MyClass();
mc.age = 18;

// 检查当前对象
console.log(mc.hasOwnProperty("hasOwnProperty"));
// 检查当前对象的原型对象
console.log(mc.__proto__.hasOwnProperty("hasOwnProperty"));
// 检查当前对象的原型对象的原型对象
console.log(mc.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));


```



#### 2.14.7 对象继承

前边我们一直在说继承，那什么是继承？它有什么作用？如何实现继承？将会是本章节探讨的问题。

面向对象的语言有一个标志，那就是它们都有类的概念，而通过类可以创建任意多个具有相同属性和方法的对象。但是在JavaScript中没有类的概念，前边我们说所的类只是我们自己这么叫，大家要清楚。因此它的对象也与基于类的对象有所不同。实际上，JavaScript语言是通过一种叫做原型（prototype）的方式来实现面向对象编程的。

那实现继承有一个最大的好处就是子对象可以使用父对象的属性和方法，从而简化了一些代码。

JavaScript有六种非常经典的对象继承方式，但是我们只学习前三种：

原型链继承

借用构造函数继承

组合继承（重要）

原型式继承

寄生式继承

寄生组合式继承

##### 2.14.7.1 原型链继承

核心思想： 子类型的原型为父类型的一个实例对象

基本做法：

定义父类型构造函数

给父类型的原型添加方法

定义子类型的构造函数

创建父类型的对象赋值给子类型的原型

将子类型原型的构造属性设置为子类型

给子类型原型添加方法

创建子类型的对象: 可以调用父类型的方法

```
案例演示：

// 定义父类型构造函数
function SupperType() {
    this.supProp = 'Supper property';
}

// 给父类型的原型添加方法
SupperType.prototype.showSupperProp = function () {
    console.log(this.supProp);
};

// 定义子类型的构造函数
function SubType() {
    this.subProp = 'Sub property';
}

// 创建父类型的对象赋值给子类型的原型
SubType.prototype = new SupperType();

// 将子类型原型的构造属性设置为子类型
SubType.prototype.constructor = SubType;

// 给子类型原型添加方法
SubType.prototype.showSubProp = function () {
    console.log(this.subProp)
};

// 创建子类型的对象: 可以调用父类型的方法
var subType = new SubType();
subType.showSupperProp();
subType.showSubProp();


```

缺点描述：

原型链继承多个实例的引用类型属性指向相同，一个实例修改了原型属性，另一个实例的原型属性也会被修改

不能传递参数

继承单一

##### 2.14.7.2 借用构造函数继承

核心思想： 使用.call()和.apply()将父类构造函数引入子类函数，使用父类的构造函数来增强子类实例，等同于复制父类的实例给子类

基本做法：

定义父类型构造函数

定义子类型的构造函数

给子类型的原型添加方法

创建子类型的对象然后调用

案例演示：

借用构造函数继承的重点就在于SuperType.call(this, name)，调用了SuperType构造函数，这样，SubType的每个实例都会将SuperType中的属性复制一份。

```
// 定义父类型构造函数
function SuperType(name) {
    this.name = name;
    this.showSupperName = function () {
        console.log(this.name);
    };
}

// 定义子类型的构造函数
function SubType(name, age) {
    // 在子类型中调用call方法继承自SuperType
    SuperType.call(this, name);
    this.age = age;
}

// 给子类型的原型添加方法
SubType.prototype.showSubName = function () {
    console.log(this.name);
};

// 创建子类型的对象然后调用
var subType = new SubType("孙悟空", 20);
subType.showSupperName();
subType.showSubName();
console.log(subType.name);
console.log(subType.age);
```



缺点描述：

只能继承父类的实例属性和方法，不能继承原型属性和方法

无法实现构造函数的复用，每个子类都有父类实例函数的副本，影响性能，代码会臃肿

##### 2.14.7.3 组合继承

核心思想： 原型链+借用构造函数的组合继承

基本做法：

利用原型链实现对父类型对象的方法继承

利用super()借用父类型构建函数初始化相同属性

```
案例演示：

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.setName = function (name) {
    this.name = name;
};

function Student(name, age, price) {
    Person.call(this, name, age); // 为了得到父类型的实例属性和方法
    this.price = price; // 添加子类型私有的属性
}

Student.prototype = new Person(); // 为了得到父类型的原型属性和方法
Student.prototype.constructor = Student; // 修正constructor属性指向
Student.prototype.setPrice = function (price) { // 添加子类型私有的方法 
    this.price = price;
};

var s = new Student("孙悟空", 24, 15000);
console.log(s.name, s.age, s.price);
s.setName("猪八戒");
s.setPrice(16000);
console.log(s.name, s.age, s.price);
```



缺点描述：

父类中的实例属性和方法既存在于子类的实例中，又存在于子类的原型中，不过仅是内存占用，因此，在使用子类创建实例对象时，其原型中会存在两份相同的属性和方法 。 注意：这个方法是JavaScript中最常用的继承模式。

#### 2.14.8 垃圾回收

垃圾回收（GC）：就像人生活的时间长了会产生垃圾一样，程序运行过程中也会产生垃圾，这些垃圾积攒过多以后，会导致程序运行的速度过慢，所以我们需要一个垃圾回收的机制，来处理程序运行过程中产生垃圾。

当一个对象没有任何的变量或属性对它进行引用，此时我们将永远无法操作该对象，此时这种对象就是一个垃圾，这种对象过多会占用大量的内存空间，导致程序运行变慢，所以这种垃圾必须进行清理。

在JS中拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁，我们不需要也不能进行垃圾回收的操作，我们需要做的只是要将不再使用的对象设置null即可。

案例演示：

```
// 使用构造函数来创建对象
function Person(name, age) {
    // 设置对象的属性
    this.name = name;
    this.age = age;
}

var person1 = new Person("孙悟空", 18);
var person2 = new Person("猪八戒", 19);
var person3 = new Person("沙和尚", 20);

person1 = null;
person2 = null;
person3 = null;
```



### 2.15 作用域

作用域指一个变量的作用的范围，在JS中一共有两种作用域：

全局作用域

函数作用域

#### 2.15.1 声明提前

变量的声明提前：使用var关键字声明的变量，会在所有的代码执行之前被声明（但是不会赋值），但是如果声明变量时不使用var关键字，则变量不会被声明提前

函数的声明提前：使用函数声明形式创建的函数 function 函数名(){} ，它会在所有的代码执行之前就被创建，所以我们可以在函数声明前来调用函数。使用函数表达式创建的函数，不会被声明提前，所以不能在声明前调用

#### 2.15.2 作用域

##### 2.15.2.1 全局作用域

直接编写在script标签中的JavaScript代码，都在全局作用域

全局作用域在页面打开时创建，在页面关闭时销毁

在全局作用域中有一个全局对象window，它代表的是一个浏览器的窗口，它由浏览器创建，我们可以直接使用

在全局作用域中：

创建的变量都会作为window对象的属性保存

创建的函数都会作为window对象的方法保存

全局作用域中的变量都是全局变量，在页面的任意的部分都可以访问的到

##### 2.15.2.2 函数作用域

调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁

每调用一次函数就会创建一个新的函数作用域，它们之间是互相独立的

在函数作用域中可以访问到全局作用域的变量，在全局作用域中无法访问到函数作用域的变量

在函数中要访问全局变量可以使用window对象

作用域链：当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用，如果没有则向上一级作用域中寻找，直到找到全局作用域，如果全局作用域中依然没有找到，则会报错ReferenceError

##### 2.15.3 作用域链

多个上下级关系的作用域形成的链，它的方向是从下向上的(从内到外)，查找变量时就是沿着作用域链来查找的。

查找一个变量的查找规则：

在当前作用域下的执行上下文中查找对应的属性，如果有直接返回，否则进入2

在上一级作用域的执行上下文中查找对应的属性，如果有直接返回，否则进入3

再次执行2的相同操作，直到全局作用域，如果还找不到就抛出找不到的ReferenceError异常

# 三.JavaScript常用对象

## 3.1 数组对象

### 3.1.1 概述

数组也是对象的一种，数组是一种用于表达有顺序关系的值的集合的语言结构，也就是同类数据元素的有序集合。

数组的存储性能比普通对象要好，在开发中我们经常使用数组来存储一些数据。但是在JavaScript中是支持数组可以是不同的元素，这跟JavaScript的弱类型有关，此处不用纠结，我们大多数时候都是相同类型元素的集合。数组内的各个值被称作元素，每一个元素都可以通过索引（下标）来快速读取，索引是从零开始的整数。

使用typeof检查一个数组对象时，会返回object。

### 3.1.2 创建数组

#### 3.1.2.1 使用对象创建

同类型有序数组创建：

var arr = new Array();
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
arr[5] = 6;
arr[6] = 7;
arr[7] = 8;
arr[8] = 9;
不同类型有序数组创建：

var arr = new Array();
arr[0] = 1;
arr[1] = "2";
arr[2] = 3;
arr[3] = "4";
arr[4] = 5;
arr[5] = "6";
arr[6] = 7;
arr[7] = "8";
arr[8] = 9;

#### 3.1.2.2 使用字面量创建

var arr = [];
可以创建的时候初始化

var arr = [1,2,3,4];
也可以使用如下方式

var arr = new Array(1,2,3);
注意如上方式的问题,如果括号里的元素大于一个，没有问题，会作为数组的元素，如果只写一个元素，会被认为是创建了一个大小为那个元素的空数组

例如

var arr2 = new Array(10);
相当于是,,,,,,,,,

因为是动态语言，所以里面可以放任意类型的元素，包括函数，数组.

### 3.1.3 遍历数组

除了使用

for (var i=0;i<s.length;i+=1)
  ...
还可以使用forEach()方法，用法如下

arr.forEach(function(a){
   ...
});
JS执行的时候会执行arr.length次括号里的函数，程序会依次传递数组中每一个元素的值,下标，完整的数组作为三个参数传过去，程序只要接受他参数，当然，可以不使用匿名函数,可以给一个函数名

注意，forEach在IE9-不支持

### 3.1.4 数组属性

constructor属性演示：返回创建数组对象的原型函数

var arr = [1,2,3,4];
console.log(arr.constructor);
length属性演示：设置或返回数组元素的个数

var arr = [1,2,3,4];
console.log(arr.length);

### 3.1.5 数组方法

push()方法演示：该方法可以向数组的末尾添加一个或多个元素，并返回数组的新的长度

var arr = ["孙悟空", "猪八戒", "沙和尚"];
var result = arr.push("唐僧", "蜘蛛精", "白骨精", "玉兔精");
console.log(arr);
console.log(result);
pop()方法演示：该方法可以删除数组的最后一个元素，并将被删除的元素作为返回值返回

var arr = ["孙悟空", "猪八戒", "沙和尚"];
var result = arr.pop();
console.log(arr);
console.log(result);
unshift()方法演示：该方法向数组开头添加一个或多个元素，并返回新的数组长度

var arr = ["孙悟空", "猪八戒", "沙和尚"];
var result = arr.unshift("牛魔王", "二郎神");
console.log(arr);
console.log(result);
shift()方法演示：该方法可以删除数组的第一个元素，并将被删除的元素作为返回值返回

var arr = ["孙悟空", "猪八戒", "沙和尚"];
var result = arr.shift();
console.log(arr);
console.log(result);
forEach()方法演示：该方法可以用来遍历数组

forEach()方法需要一个函数作为参数，像这种函数，由我们创建但是不由我们调用的，我们称为回调函数。数组中有几个元素函数就会执行几次，每次执行时，浏览器会将遍历到的元素，以实参的形式传递进来，我们可以来定义形参，来读取这些内容，浏览器会在回调函数中传递三个参数：

第一个参数：就是当前正在遍历的元素

第二个参数：就是当前正在遍历的元素的索引

第三个参数：就是正在遍历的数组

注意：这个方法只支持IE8以上的浏览器，IE8及以下的浏览器均不支持该方法，所以如果需要兼容IE8，则不要使用forEach()，还是使用for循环来遍历数组。

var arr = ["孙悟空", "猪八戒", "沙和尚"];
arr.forEach(function (value, index, obj) {
    console.log(value + " #### " + index + " #### " + obj);
});
slice()方法演示：该方法可以用来从数组提取指定元素，该方法不会改变元素数组，而是将截取到的元素封装到一个新数组中返回

参数：

第一个参数：截取开始的位置的索引，包含开始索引

第二个参数：截取结束的位置的索引，不包含结束索引，第二个参数可以省略不写，此时会截取从开始索引往后的所有元素

注意：索引可以传递一个负值，如果传递一个负值，则从后往前计算，-1代表倒数第一个，-2代表倒数第二个。

var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧", "白骨精"];
var result = arr.slice(1, 4);
console.log(result);
result = arr.slice(3);
console.log(result);
result = arr.slice(1, -2);
console.log(result);
splice()方法演示：该方法可以用于删除数组中的指定元素，该方法会影响到原数组，会将指定元素从原数组中删除，并将被删除的元素作为返回值返回

参数：

第一个参数：表示开始位置的索引

第二个参数：表示要删除的元素数量

第三个参数及以后参数：可以传递一些新的元素，这些元素将会自动插入到开始位置索引前边

var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧", "白骨精"];
var result = arr.splice(3, 2);
console.log(arr);
console.log(result);
result = arr.splice(1, 0, "牛魔王", "铁扇公主", "红孩儿");
console.log(arr);
console.log(result);
concat()方法演示：该方法可以连接两个或多个数组，并将新的数组返回，该方法不会对原数组产生影响

var arr = ["孙悟空", "猪八戒", "沙和尚"];
var arr2 = ["白骨精", "玉兔精", "蜘蛛精"];
var arr3 = ["二郎神", "太上老君", "玉皇大帝"];
var result = arr.concat(arr2, arr3, "牛魔王", "铁扇公主");
console.log(result);
join()方法演示：该方法可以将数组转换为一个字符串，该方法不会对原数组产生影响，而是将转换后的字符串作为结果返回，在join()中可以指定一个字符串作为参数，这个字符串将会成为数组中元素的连接符，如果不指定连接符，则默认使用，作为连接符

var arr = ["孙悟空", "猪八戒", "沙和尚"];
var result = arr.join("@-@");
console.log(result);
reverse()方法演示：该方法用来反转数组（前边的去后边，后边的去前边），该方法会直接修改原数组

var arr = ["孙悟空", "猪八戒", "沙和尚"];
arr.reverse();
console.log(arr);
sort()方法演示：该方法可以用来对数组中的元素进行排序，也会影响原数组，默认会按照Unicode编码进行排序

var arr = ["b", "c", "a"];
arr.sort();
console.log(arr);
注意：即使对于纯数字的数组，使用sort()排序时，也会按照Unicode编码来排序，所以对数字进排序时，可能会得到错误的结果。

var arr = [1, 3, 2, 11, 5, 6];
arr.sort();
console.log(arr);
我们可以自己来指定排序的规则，我们可以在sort()添加一个回调函数，来指定排序规则，回调函数中需要定义两个形参，浏览器将会分别使用数组中的元素作为实参去调用回调函数，使用哪个元素调用不确定，但是肯定的是在数组中a一定在b前边，浏览器会根据回调函数的返回值来决定元素的顺序，如下：

如果返回一个大于0的值，则元素会交换位置

如果返回一个小于0的值，则元素位置不变

如果返回一个等于0的值，则认为两个元素相等，也不交换位置

经过上边的规则，我们可以总结下：

如果需要升序排列，则返回 a-b

如果需要降序排列，则返回 b-a

var arr = [1, 3, 2, 11, 5, 6];
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);

## 3.2 函数对象

### 3.2.1 call()和apply()

call()和apply()这两个方法都是函数对象的方法，需要通过函数对象来调用，当对函数调用call()和apply()都会调用函数执行，在调用call()和apply()可以将一个对象指定为第一个参数，此时这个对象将会成为函数执行时的this，call()方法可以将实参在对象之后依次传递，apply()方法需要将实参封装到一个数组中统一传递，如下演示：

call()方法演示：

function fun(a, b) {
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("fun = " + this);
}

var obj = {
    name: "obj",
    sayName: function () {
        console.log(this.name);
    }
};

fun(2, 3);
console.log("===============");
fun.call(obj, 2, 3);



注意：默认fun()函数调用，this指向的是window对象，你可以使用call()调用函数，在调用的时候传入一个对象，这个对象就是this所指向的对象，也就是说，可以自己指定this的指向，然后从第二个参数开始，实参将会依次传递

apply()方法演示：

function fun(a, b) {
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("fun = " + this);
}

var obj = {
    name: "obj",
    sayName: function () {
        console.log(this.name);
    }
};

fun(2, 3);
console.log("===============");
fun.apply(obj, [2, 3]);

 

注意：默认fun()函数调用，this指向的是window对象，你可以使用apply()调用函数，在调用的时候传入一个对象，这个对象就是this所指向的对象，也就是说，可以自己指定this的指向，然后从第二个参数开始，需要制定一个实参数组进行参数传递.

### 3.2.2 this指向

以函数形式调用时，this永远都是window

以方法的形式调用时，this是调用方法的对象

以构造函数的形式调用时，this是新创建的那个对象

使用call和apply调用时，this是传入的那个指定对象

### 3.2.3 arguments参数

在调用函数时，浏览器每次都会传递进两个隐含的参数：

函数的上下文对象： this

封装实参的对象： arguments

this对象我们已经学习过了，那arguments对象是什么呢？

arguments是一个类数组对象，它也可以通过索引来操作数据，也可以获取长度，在调用函数时，我们所传递的实参都会在arguments中保存，比如：arguments.length 可以用来获取实参的长度，我们即使不定义形参，也可以通过arguments来使用实参，只不过比较麻烦，例如：

arguments[0]：表示第一个实参

arguments[1]：表示第二个实参

…

它里边有一个属性叫做callee，这个属性对应一个函数对象，就是当前正在指向的函数的对象。

arguments对象演示：

function fun(a, b) {
    // 通过下标获取第一个参数
    console.log(arguments[0]);
    // 通过下标获取第二个参数
    console.log(arguments[1]);
    // 获取实参的个数
    console.log(arguments.length);
    // 看看它的函数对象
    console.log(arguments.callee);
    console.log(arguments.callee == fun);
}

fun("Hello", "World");

## 3.3 Date对象

在JavaScript中使用Date对象来表示一个时间，如果直接使用构造函数创建一个Date对象，则会封装为当前代码执行的时间。

var date = new Date();
console.log(date);

console.log(date.getFullYear());//获取当前日期对象的年份(四位数字年份)
console.log(date.getMonth());//获取当前日期对象的月份(0 ~ 11)
console.log(date.getDate());//获取当前日期对象的日数(1 ~ 31)
console.log(date.getHours());//获取当前日期对象的小时(0 ~ 23)
console.log(date.getMinutes());//获取当前日期对象的分钟(0 ~ 59)
console.log(date.getSeconds());//获取当前日期对象的秒钟(0 ~ 59)
console.log(date.getMilliseconds());//获取当前日期对象的毫秒(0 ~ 999)

## 3.4 Math对象

Math和其它的对象不同，它不是一个构造函数，它属于一个工具类不用创建对象，它里边封装了数学运算相关的属性和方法。

/*固定值*/
console.log("PI = " + Math.PI);
console.log("E  = " + Math.E);
console.log("===============");
/*正数*/
console.log(Math.abs(1));        //可以用来计算一个数的绝对值
console.log(Math.ceil(1.1));     //可以对一个数进行向上取整，小数位只有有值就自动进1
console.log(Math.floor(1.99));   //可以对一个数进行向下取整，小数部分会被舍掉
console.log(Math.round(1.4));    //可以对一个数进行四舍五入取整
console.log("===============");
/*负数*/
console.log(Math.abs(-1));       //可以用来计算一个数的绝对值
console.log(Math.ceil(-1.1));    //可以对一个数进行向上取整，小数部分会被舍掉
console.log(Math.floor(-1.99));  //可以对一个数进行向下取整，小数位只有有值就自动进1
console.log(Math.round(-1.4));   //可以对一个数进行四舍五入取整
console.log("===============");
/*随机数*/
//Math.random()：可以用来生成一个0-1之间的随机数
//生成一个0-x之间的随机数：Math.round(Math.random()*x)
//生成一个x-y之间的随机数：Math.round(Math.random()*(y-x)+x)
console.log(Math.round(Math.random() * 10));            //生成一个0-10之间的随机数
console.log(Math.round(Math.random() * (10 - 1) + 1));  //生成一个1-10之间的随机数
console.log("===============");
/*数学运算*/
console.log(Math.pow(12, 3));   //Math.pow(x,y)：返回x的y次幂
console.log(Math.sqrt(4));      //Math.sqrt(x) ：返回x的平方根



## 3.5 String对象

### 3.5.1 概述

在JS中为我们提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象

String()：可以将基本数据类型字符串转换为String对象

Number()：可以将基本数据类型的数字转换为Number对象

Boolean()：可以将基本数据类型的布尔值转换为Boolean对象

但是注意：我们在实际应用中不会使用基本数据类型的对象，如果使用基本数据类型的对象，在做一些比较时可能会带来一些不可预期的结果，在这一章节中，我们重点介绍String()对象的属性和方法。

### 3.5.2、字符串属性

str.charAt()指定位置的元素，与[]方式获取的结果一样

str.charCodeAt()获取指定位置元素的unicode

String.fromCharCode(X)注意前面两个函数是字符串的函数，这个函数是字符串构造函数的，作用是Unicode转文字(支持0x的16进制)

str1.concat(str2,str3...)连接字符串

str1.indexOf(str2)检索字符串str1中是否包含指定内容str2，返回第一次出现的位置，找不到返回-1

str1.indexOf(str2,i)从第i位开始检索字符串中是否包含指定内容，返回第一次出现的位置，找不到返回-1

str1.lastIndexOf(str2,i)与indexOf相同，是从后往前找，注意同样可选i,表示从正数第几个开始往前找

slice()截取字符串

substring() 截取字符串，与slice不同的是不接受负数，遇到负数自动换成0,遇到前大于后会自动调整参数位置

str1.split(str2)用str2为标记拆分str1,返回字符串数组

str.toUpperCase() 字符串转全大写

str.toLowerCase() 字符串转全小写

## 3.6 正则表达式

### 3.6.1 概述

正则表达式用于定义一些字符串的规则，计算机可以根据正则表达式，来检查一个字符串是否符合规则，获取将字符串中符合规则的内容提取出来。

使用typeof检查正则对象，会返回object。

### 3.6.2 创建正则对象

使用对象创建：

var 变量名 = new RegExp("正则表达式","匹配模式");

使用字面量创建：

var 变量名 = /正则表达式/匹配模式;

匹配模式：

i：忽略大小写

g：全局匹配模式

ig：忽略大小写且全局匹配模式

注意：可以为一个正则表达式设置多个匹配模式，且顺序无所谓

### 3.6.3 正则进阶

“a”： 这个正则表示字符串中是否包含"a"

“a|b” 使用|表示或者的意思，也就是匹配a或b

“[ab]” 匹配a或b

“[a-z]” 匹配a到z，相当于匹配所有小写字母

“[A-Z]” 匹配A到Z，相当于匹配所有小写字母

“[A-z]” 匹配A到Z，相当于匹配所有字母

“a[bde]c” 第一个是a,最后是c,中间bcd随意

“ab” 匹配除了ab以外的

“[0-9]” 匹配任意数字

“a{3}” 连续出现三次a的字符串

“(ab){3}” ab连续出现3次

“(ab){1,3}” ab连续出现1-3次(1或2或3)

“(ab){3,}” ab连续出现三次以上

“(ab)+” 至少出现一次，·相当于{1,}

“(ab)*” 有没有都可以, 相当于{0，}

“(ab)?” 0或1个,相当于{0,1}

“^a” 以a开头的，注意于a不同/[(^a)(^b)(^c)]ba{3}/.test("abaaa")区分

“a$” 以a结尾

“^a$” a即使开头也是结尾，注意相当于只能匹配"a"不能是"aaa"

“.” 除了"\n","\r"的任意字符，如果想表示单纯的.可以使用转移.，同理\表示\

“\d” 匹配0-9

“\D” 匹配非数字

“\s” 匹配空格

“\S” 匹配非空格

“\b” 匹配单词边界，就是这个字符是两个单词的分界点

“\B” 匹配非单词边界

"[(^\s)(\s$)]*"开头或者结尾的空格

匹配模式：

“i”: 忽略大小写

“g”: 将所有符合题意的全找到

接受连写

### 3.6.4 正则方法

这些正则方法其实都是字符串的方法，但是它的参数需要传递正则表达式，在这里，我就先称为正则方法。

split()方法演示：该方法可以将一个字符串拆分为一个数组，方法中可以传递一个正则表达式作为参数，这样方法将会根据正则表达式去拆分字符串，这个方法即使不指定全局匹配，也会全都插分

var str = "1a2b3c4d5e6f7";
var result = str.split(/[A-z]/);
console.log(result);
search()方法演示：该方法可以搜索字符串中是否含有指定内容，如果搜索到指定内容，则会返回第一次出现的索引，如果没有搜索到返回-1，它可以接受一个正则表达式作为参数，然后会根据正则表达式去检索字符串，serach()只会查找第一个，即使设置全局匹配也没用

var str = "hello abc hello aec afc";
var result = str.search(/a[bef]c/);
console.log(result);

match()方法演示：该方法可以根据正则表达式，从一个字符串中将符合条件的内容提取出来，默认情况下我们的match()只会找到第一个符合要求的内容，找到以后就停止检索，我们可以设置正则表达式为全局匹配模式，这样就会匹配到所有的内容，可以为一个正则表达式设置多个匹配模式，且顺序无所谓，match()会将匹配到的内容封装到一个数组中返回，即使只查询到一个结果

var str = "1a2a3a4a5e6f7A8B9C";
var result = str.match(/[a-z]/ig);
console.log(result);

replace()方法演示：该方法可以将字符串中指定内容替换为新的内容，默认只会替换第一个，但是可以设置全局匹配替换全部

参数：

第一个参数：被替换的内容，可以接受一个正则表达式作为参数

第二个参数：新的内容

var str = "1a2a3a4a5e6f7A8B9C";
var result = str.replace(/[a-z]/gi, "@_@");
console.log(result);

### 3.6.5正则案例

#### 3.6.5.1 检查手机号

var phoneStr = "15131494600";
var phoneReg = /^1[3-9][0-9]{9}$/;
console.log(phoneReg.test(phoneStr));

#### 3.6.5.2 检查邮箱号

var emailStr = "abc.def@163.com";
var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
console.log(emailReg.test(emailStr));

# 四. JavaScript DOM

4.1 DOM概述
当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

HTML DOM 模型被结构化为 对象树 ：



通过这个对象模型，JavaScript 获得创建动态 HTML 的所有力量：

JavaScript 能改变页面中的所有 HTML 元素

JavaScript 能改变页面中的所有 HTML 属性

JavaScript 能改变页面中的所有 CSS 样式

JavaScript 能删除已有的 HTML 元素和属性

JavaScript 能添加新的 HTML 元素和属性

JavaScript 能对页面中所有已有的 HTML 事件作出反应

JavaScript 能在页面中创建新的 HTML 事件

换言之：HTML DOM 是关于如何获取、更改、添加或删除 HTML 元素的标准。

4.2 DOM文档节点
4.2.1 节点概述
节点Node，是构成我们网页的最基本的组成部分，网页中的每一个部分都可以称为是一个节点。

比如：html标签、属性、文本、注释、整个文档等都是一个节点。

虽然都是节点，但是实际上它们的具体类型是不同的。

比如：标签我们称为元素节点、属性称为属性节点、文本称为 文本节点、文档称为文档节点。

节点的类型不同，属性和方法也都不尽相同。

节点：Node——构成HTML文档最基本的单元。

常用节点分为四类：

文档节点：整个HTML文档

元素节点：HTML文档中的HTML标签

属性节点：元素的属性

文本节点：HTML标签中的文本内容

 

4.2.2 节点属性


4.2.3 文档节点
文档节点（Document）代表的是整个HTML文 档，网页中的所有节点都是它的子节点。

document对象作为window对象的属性存在的，我们不用获取可以直接使用。

通过该对象我们可以在整个文档访问内查找节点对象，并可以通过该对象创建各种节点对象。

4.2.4 元素节点
HTML中的各种标签都是元素节点（Element），这也是我们最常用的一个节点。

浏览器会将页面中所有的标签都转换为一个元素节点， 我们可以通过document的方法来获取元素节点。

例如：document.getElementById()，根据id属性值获取一个元素节点对象。

4.2.5 属性节点
属性节点（Attribute）表示的是标签中的一个一个的属 性，这里要注意的是属性节点并非是元素节点的子节点，而是元素节点的一部分。可以通过元素节点来获取指定的属性节点。

例如：元素节点.getAttributeNode("属性名")，根据元素节点的属性名获取一个属性节点对象。

注意：我们一般不使用属性节点。

4.2.6 文本节点
文本节点（Text）表示的是HTML标签以外的文本内容，任意非HTML的文本都是文本节点，它包括可以字面解释的纯文本内容。文本节点一般是作为元素节点的子节点存在的。获取文本节点时，一般先要获取元素节点，在通过元素节点获取文本节点。

例如：元素节点.firstChild;，获取元素节点的第一个子节点，一般为文本节点。

4.3 DOM文档操作
文档对象代表您的网页,，如果您希望访问 HTML 页面中的任何元素，那么您总是从访问 document 对象开始。

下面是一些如何使用 document 对象来访问和操作 HTML 的实例。

4.3.1 查找 HTML 元素
4.3.1.1 方法介绍



4.3.1.2 方法演示

需求描述：创建一个按钮，通过id获取按钮节点对象

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn">我是按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.getElementById("btn");
    console.log(btn);
</script>
</body>
</html>




需求描述：创建一个按钮，通过标签名获取按钮节点对象数组

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button>我是按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.getElementsByTagName("button");
    console.log(btn);
</script>
</body>
</html>


需求描述：创建一个按钮，通过类名获取按钮节点对象数组

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button class="btn">我是按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.getElementsByClassName("btn");
    console.log(btn);
</script>
</body>
</html>


需求描述：创建一个按钮，通过CSS选择器选择该按钮

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button class="btn">我是按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.querySelector(".btn");
    console.log(btn);
</script>
</body>
</html>


需求描述：创建一个无序列表，通过CSS选择器选择该列表的所有li

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<ul class="list">
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    <li>列表项4</li>
</ul>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var list = document.querySelectorAll(".list li");
    console.log(list);
</script>
</body>
</html>


4.3.2 获取 HTML 的值
4.3.2.1 方法介绍



4.3.2.2 方法演示

需求描述：创建一个按钮，然后获取按钮的文本内容

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn">我是按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.getElementById("btn");
    console.log(btn.innerText);
</script>
</body>
</html>


需求描述：创建一个div，然后在div中插入一个h1标题，获取div中的html代码

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box">
    <h1>我是Box中的大标题</h1>
</div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box = document.getElementById("box");
    console.log(box.innerHTML);
</script>
</body>
</html>


需求描述：创建一个超链接，默认为空，设置href属性为https://www.baidu.com ，使用JavaScript代码读取href属性

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a id="a" href="https://www.baidu.com">打开百度，你就知道！</a>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var a = document.getElementById("a");
    console.log(a.href);
</script>
</body>
</html>


需求描述：创建一个超链接，默认为空，设置href属性为https://www.baidu.com ，使用JavaScript代码读取href属性

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a id="a" href="https://www.baidu.com">打开百度，你就知道！</a>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var a = document.getElementById("a");
    console.log(a.getAttribute("href"));
</script>
</body>
</html>


需求描述：创建一个正方形div，默认颜色为红色，使用JavaScript代码获取div的宽度

注意：如果CSS的样式名中含有-，这种名称在JS中是不合法的比如background-color，需要将这种样式名修改为驼峰命名法，去掉-，然后将-后的字母大写，我们通过style属性设置的样式都是行内样式，同样的获取也是行内样式，而行内样式有较高的优先级，所以通过JS修改的样式往往会立即显示，但是如果在样式中写了!important，则此时样式会有最高的优先级，即使通过JS也不能覆盖该样式，此时将会导致JS修改样式失效，所以尽量不要为样式添加!important

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div style="width: 100px;height: 100px;background: red;" id="box"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box = document.getElementById("box");
    console.log(box.style.width);
</script>
</body>
</html>


拓展知识1：

通过style属性设置和读取的都是内联样式，无法读取样式表中的样式或者说正在应用的样式，如果想要读取当前正在应用的样式属性我们可以使用元素.currentStyle.样式名来获取元素的当前显示的样式，它可以用来读取当前元素正在显示的样式，如果当前元素没有设置该样式，则获取它的默认值，但是currentStyle只有IE浏览器支持，其它的浏览器都不支持，在其它浏览器中可以使用getComputedStyle()这个方法来获取元素当前的样式，这个方法是window的方法，可以直接使用，但是需要两个参数：

第一个参数：要获取样式的元素 第二个参数：可以传递一个伪元素，一般都传null 该方法会返回一个对象，对象中封装了当前元素对应的样式，可以通过 对象.样式名 来读取样式，如果获取的样式没有设置，则会获取到真实的值，而不是默认值，比如：没有设置width，它不会获取到auto，而是一个长度，但是该方法不支持IE8及以下的浏览器。通过currentStyle和getComputedStyle()读取到的样式都是只读的，不能修改，如果要修改必须通过style属性，因此，我们可以写一个适配各个浏览器的读取元素样式的方法。

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        /*样式表的样式*/
        #box {
            width: 200px;
            height: 200px;
            background-color: green;
        }
    </style>
</head>
<body>
<div style="width: 100px;height: 100px;" id="box"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    /*通用的获取元素样式的方法*/
    function getStyle(obj, name) {
        if (window.getComputedStyle) {
            //正常浏览器的方式，具有getComputedStyle()方法
            return getComputedStyle(obj, null)[name];
        } else {
            //IE8的方式，没有getComputedStyle()方法
            return obj.currentStyle[name];
        }
    }

    var box = document.getElementById("box");
    
    console.log(getStyle(box, "width"));
    console.log(getStyle(box, "height"));
    console.log(getStyle(box, "background-color"));
</script>
</body>
</html>




有同学会说，在IE5-IE8 浏览器中，老师这不是还不一样吗？因此我们建议设置颜色数值一般采用rgb或者rgba，最好不要采用英文单词的这种颜色值，这样最终展示出来的效果就一致了。

拓展知识2：编写一段兼容性代码，用来获取任意标签的文本内容

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a href="https://www.baidu.com" id="a">打开百度，你就知道！</a>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var a = document.getElementById("a");

    console.log(getInnerText(a));
    
    /*获取任意标签的内容*/
    function getInnerText(element) {
        // 判断浏览器是否支持textContent,如果支持，则使用textContent获取内容，否则使用innerText获取内容。
        if(typeof element.textContent == "undefined") {
            return element.innerText;
        } else {
            return element.textContent;
        }
    }
</script>
</body>
</html>


4.3.3 改变 HTML 的值
4.3.3.1 方法介绍



4.3.3.2 方法演示

需求描述：创建一个按钮，然后改变按钮的文本内容

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn">我是按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.getElementById("btn");
    btn.innerText = "我是JavaScript的按钮";
    console.log(btn);
</script>
</body>
</html>


需求描述：创建一个div，然后在div中插入一个h1标题

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box = document.getElementById("box");
    box.innerHTML = "<h1>我是Box中的大标题</h1>";
    console.log(box);
</script>
</body>
</html>




需求描述：创建一个超链接，默认为空，使用JavaScript代码设置href属性为https://www.baidu.com

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a id="a" href="">打开百度，你就知道！</a>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var a = document.getElementById("a");
    a.href="https://www.baidu.com";
    console.log(a);
</script>
</body>
</html>




需求描述：创建一个超链接，默认为空，使用JavaScript代码设置href属性为https://www.baidu.com

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a id="a" href="">打开百度，你就知道！</a>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var a = document.getElementById("a");
    a.setAttribute("href", "https://www.baidu.com");
    console.log(a);
</script>
</body>
</html>


需求描述：创建一个正方形div，默认颜色为红色，使用JavaScript代码改变为绿色

注意：如果CSS的样式名中含有-，这种名称在JS中是不合法的比如background-color，需要将这种样式名修改为驼峰命名法，去掉-，然后将-后的字母大写，我们通过style属性设置的样式都是行内样式，同样的获取也是行内样式，而行内样式有较高的优先级，所以通过JS修改的样式往往会立即显示，但是如果在样式中写了!important，则此时样式会有最高的优先级，即使通过JS也不能覆盖该样式，此时将会导致JS修改样式失效，所以尽量不要为样式添加!important

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div style="width: 100px;height: 100px;background: red;" id="box"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box = document.getElementById("box");
    box.style.background = "green";
    console.log(box);
</script>
</body>
</html>


拓展知识1：

修改节点的内容除了常用的innerHTML和innerText之外，还有insertAdjacentHTML和insertAdjacentText方法，可以在指定的地方插入内容。insertAdjacentText方法与insertAdjacentHTML方法类似，只不过是插入纯文本，参数相同。

语法说明：

object.insertAdjacentHTML(where,html);
object.insertAdjacentText(where,text)

参数说明：

where：

beforeBegin：插入到开始标签的前面

beforeEnd：插入到结束标签的前面

afterBegin：插入到开始标签的后面

afterEnd：插入到结束标签的后面



html：一段html代码

text：一段文本值

注意事项：

这两个方法必须等文档加载好后才能执行，否则会出错。

insertAdjacentText只能插入普通文本，insertAdjacentHTML插入html代码。

使用insertAdjacentHTML方法插入script脚本文件时，必须在script元素上定义defer属性。

使用insertAdjacentHTML方法插入html代码后，页面上的元素集合将发生变化。

insertAdjacentHTML方法不适用于单个的空的元素标签(如img，input等)。

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="insert">
    <p>你是我的小丫小苹果</p>
</div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var div = document.getElementById("insert");
    div.insertAdjacentHTML('beforeBegin', '你是我的小丫小苹果');
</script>
</body>
</html>


拓展知识2：编写一段兼容性代码，用来设置任意标签的文本内容

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a href="https://www.baidu.com" id="a">打开百度，你就知道！</a>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var a = document.getElementById("a");

    setInnerText(a, "你要打开百度吗？");
    
    console.log(getInnerText(a));
    
    /*获取任意标签的内容*/
    function getInnerText(element) {
        // 判断浏览器是否支持textContent,如果支持，则使用textContent获取内容，否则使用innerText获取内容。
        if (typeof element.textContent == "undefined") {
            return element.innerText;
        } else {
            return element.textContent;
        }
    }
    
    /*设置任意标签的内容*/
    function setInnerText(element, text) {
        // 判断浏览器是否支持textContent,如果支持，则使用textContent设置内容，否则使用innerText设置内容。
        if (typeof element.textContent == "undefined") {
            return element.innerText = text;
        } else {
            return element.textContent = text;
        }
    }
</script>
</body>
</html>


4.3.4 修改 HTML 元素
4.3.4.1 方法介绍



4.3.4.2 方法演示

案例演示1：创建一个ul列表，然后在该列表中追加4个li标签

第一种方法：

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var ul = document.createElement("ul");

    var li1 = document.createElement("li");
    var text1 = document.createTextNode("列表项1");
    li1.appendChild(text1);
    ul.appendChild(li1);
    
    var li2 = document.createElement("li");
    var text2 = document.createTextNode("列表项2");
    li2.appendChild(text2);
    ul.appendChild(li2);
    
    var li3 = document.createElement("li");
    var text3 = document.createTextNode("列表项3");
    li3.appendChild(text3);
    ul.appendChild(li3);
    
    var li4 = document.createElement("li");
    var text4 = document.createTextNode("列表项4");
    li4.appendChild(text4);
    ul.appendChild(li4);
    
    document.getElementsByTagName("body")[0].appendChild(ul);
</script>
</body>
</html>




第二种方法：

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var ul = document.createElement("ul");

    var li1 = document.createElement("li");
    li1.innerHTML = "列表项1";
    ul.appendChild(li1);
    
    var li2 = document.createElement("li");
    li2.innerHTML = "列表项2";
    ul.appendChild(li2);
    
    var li3 = document.createElement("li");
    li3.innerHTML = "列表项3";
    ul.appendChild(li3);
    
    var li4 = document.createElement("li");
    li4.innerHTML = "列表项4";
    ul.appendChild(li4);
    
    document.getElementsByTagName("body")[0].appendChild(ul);
</script>
</body>
</html>


第三种方法：

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var ul = document.createElement("ul");

    var li1 = "<li>列表项1</li>";
    var li2 = "<li>列表项2</li>";
    var li3 = "<li>列表项3</li>";
    var li4 = "<li>列表项4</li>";
    ul.innerHTML = li1 + li2 + li3 + li4;
    
    document.getElementsByTagName("body")[0].appendChild(ul);
</script>
</body>
</html>


案例演示2：创建一个ul列表，里边有四个li子元素，删除第一个li，替换最后一个li

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<ul id="ul">
    <li id="first">列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    <li id="last">列表项4</li>
</ul>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var ul = document.getElementById("ul");
    var first = document.getElementById("first");
    var last = document.getElementById("last");

    /*删除第一个*/
    ul.removeChild(first);
    
    /*替换最后一个*/
    var replaceLi = document.createElement("li");
    replaceLi.innerHTML = "列表4的替换";
    ul.replaceChild(replaceLi, last);
</script>
</body>
</html>




案例演示3：创建一个ul列表，里边有四个li子元素，在第一个li前边插入一个id为zero的li

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<ul id="ul">
    <li id="first">列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    <li>列表项4</li>
</ul>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var ul = document.getElementById("ul");
    var first = document.getElementById("first");

    var zero = document.createElement("li");
    zero.innerHTML = "列表0的新增";
    
    ul.insertBefore(zero, first);
</script>
</body>
</html>


拓展知识：

动态判断、添加、删除、切换样式，支持IE5-IE11，谷歌浏览器、火狐浏览器等

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        .b1 {
            width: 100px;
            height: 100px;
            background-color: red;
        }

        .b2 {
            width: 300px;
            height: 300px;
            background-color: yellow;
        }
    </style>
</head>
<body>
<button id="btn0">判断b2样式</button>
<button id="btn1">添加b2样式</button>
<button id="btn2">删除b2样式</button>
<button id="btn3">切换b2样式</button>

<br>
<br>

<div id="box" class="b1"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn0 = document.getElementById("btn0");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var box = document.getElementById("box");

    btn0.onclick = function () {
        alert(hasClass(box, "b2"));
    };
    
    btn1.onclick = function () {
        addClass(box, "b2");
    };
    
    btn2.onclick = function () {
        removeClass(box, "b2");
    };
    
    btn3.onclick = function () {
        toggleClass(box, "b2");
    };
    
    /*
     * 判断一个元素中是否含有指定的class属性值
     * 如果有该class，则返回true，没有则返回false
     */
    function hasClass(obj, cn) {
        var reg = new RegExp("\\b" + cn + "\\b");
        return reg.test(obj.className);
    }
    
    /*
     * 向一个元素中添加指定的class属性值
     * 参数:
     *  obj 要添加class属性的元素
     *  cn 要添加的class值
     */
    function addClass(obj, cn) {
        // 检查obj中是否含有cn
        if (!hasClass(obj, cn)) {
            obj.className += " " + cn;
        }
    }
    
    /*
     * 删除一个元素中的指定的class属性
     */
    function removeClass(obj, cn) {
        var reg = new RegExp("\\b" + cn + "\\b");
        obj.className = obj.className.replace(reg, "");
    }
    
    /*
     * toggleClass可以用来切换一个类
     *  如果元素中具有该类，则删除
     *  如果元素中没有该类，则添加
     */
    function toggleClass(obj, cn) {
        // 判断obj中是否含有cn
        if (hasClass(obj, cn)) {
            // 存在，则删除
            removeClass(obj, cn);
        } else {
            // 没有，则添加
            addClass(obj, cn);
        }
    }
</script>
</body>
</html>


4.3.5 查找 HTML 父子
4.3.5.1 方法介绍



4.3.5.2 方法演示

案例演示：

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box">
    <ul id="ul">
        <li><a href="https://www.baidu.com">我是超链接1</a></li>
        <li id="two"><a href="https://www.baidu.com">我是超链接2</a></li>
        <li><a href="https://www.baidu.com">我是超链接3</a></li>
        <li><a href="https://www.baidu.com">我是超链接4</a></li>
    </ul>
</div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box = document.getElementById("box");
    var ul = document.getElementById("ul");
    var two = document.getElementById("two");

    console.log(ul.parentNode);
    console.log(ul.parentElement);
    console.log("===============");
    
    console.log(box.childNodes);
    console.log(box.children);
    console.log("===============");
    
    console.log(ul.firstChild);
    console.log(ul.firstElementChild);
    console.log(ul.lastChild);
    console.log(ul.lastElementChild);
    console.log("===============");
    
    console.log(two.previousSibling);
    console.log(two.previousElementSibling);
    console.log(two.nextSibling);
    console.log(two.nextElementSibling);
</script>
</body>
</html>




兼容性方法：

/*获取任意一个父级元素的第一个子元素*/
function getfirstElementChild(element) {
    if(element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while(node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

/*获取任意一个父级元素的最后一个子元素*/
function getLastElementChild(element) {
    if(element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while(node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}

/*获取任意一个子元素的前一个兄弟元素*/
function getPreviousElementSibling(element) {
    if(element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var node = element.previousSibling;
        while(node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}

/*获取任意一个子元素的后一个兄弟元素*/
function getNextElementSibling(element) {
    if(element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var node = element.nextSibling;
        while(node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}


案例演示：

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="container">
    <p>前面的P标签</p>
    <b>加粗文本</b>
    <a href="https://www.baidu.com" id="a">百度一下</a>
    <i>斜体文本</i>
    <p>最后的P标签</p>
</div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    /*第一个子元素*/
    var firstNode = getfirstElementChild(document.getElementById("container"));
    console.log(firstNode.innerHTML);
    /*最后一个子元素*/
    var lastNode = getLastElementChild(document.getElementById("container"));
    console.log(lastNode.innerHTML);
    /*指定元素的前一个子元素*/
    var node1 = getPreviousElementSibling(document.getElementById("a"));
    console.log(node1.innerHTML);
    /*指定元素的后一个子元素*/
    var node2 = getNextElementSibling(document.getElementById("a"));
    console.log(node2.innerHTML);

    /*获取任意一个父级元素的第一个子元素*/
    function getfirstElementChild(element) {
        if (element.firstElementChild) {
            return element.firstElementChild;
        } else {
            var node = element.firstChild;
            while (node && node.nodeType != 1) {
                node = node.nextSibling;
            }
            return node;
        }
    }
    
    /*获取任意一个父级元素的最后一个子元素*/
    function getLastElementChild(element) {
        if (element.lastElementChild) {
            return element.lastElementChild;
        } else {
            var node = element.lastChild;
            while (node && node.nodeType != 1) {
                node = node.previousSibling;
            }
            return node;
        }
    }
    
    /*获取任意一个子元素的前一个兄弟元素*/
    function getPreviousElementSibling(element) {
        if (element.previousElementSibling) {
            return element.previousElementSibling;
        } else {
            var node = element.previousSibling;
            while (node && node.nodeType != 1) {
                node = node.previousSibling;
            }
            return node;
        }
    }
    
    /*获取任意一个子元素的后一个兄弟元素*/
    function getNextElementSibling(element) {
        if (element.nextElementSibling) {
            return element.nextElementSibling;
        } else {
            var node = element.nextSibling;
            while (node && node.nodeType != 1) {
                node = node.nextSibling;
            }
            return node;
        }
    }
</script>
</body>
</html>


4.4 DOM文档事件
4.4.1 事件概述
HTML事件可以触发浏览器中的行为，比方说当用户点击某个 HTML 元素时启动一段 JavaScript。

4.4.2 窗口事件
由窗口触发该事件 (同样适用于 <body> 标签)：



案例演示1：当窗口失去焦点时，输出“窗口失去焦点”

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    window.onblur = function () {
        console.log("窗口失去焦点");
    };
</script>
</body>
</html>


案例演示2：当窗口获取焦点时，输出“窗口获取焦点”

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    window.onfocus = function () {
        console.log("窗口获取焦点");
    };
</script>
</body>
</html>


案例演示3：当页面文档加载完成后，输出"Hello, World"

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    window.onload = function () {
        console.log("Hello,World");
    };
</script>
</body>
</html>


案例演示4：当调整窗口大小时，输出"窗口大小正在改变"

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    window.onresize = function () {
        console.log("窗口大小正在改变");
    };
</script>
</body>
</html>


4.4.3 表单事件
表单事件在HTML表单中触发 (适用于所有 HTML 元素，但该HTML元素需在form表单内)：



案例演示1：当文本框获取焦点，文本框背景为红色，当文本框失去焦点，文本框背景为黄色

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form>
    <input type="text" id="text">
</form>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var textInput = document.getElementById("text");

    /* 当文本框获取焦点，文本框背景为红色 */
    textInput.onfocus = function () {
        this.style.background = "red";
    };
    
    /* 当文本框失去焦点，文本框背景为绿色 */
    textInput.onblur = function () {
        this.style.background = "green";
    };
</script>
</body>
</html>


注意：这里为什么要用this，你不用this也可以，就直接textInput.style.background = "red";也不是不可以的，但是方法的调用规则就是谁调用this，this就指向谁，这样我们就可以简化代码了

案例演示2：当文本框内容改变时，鼠标离开文本框，自动将文本框的内容输出到控制台

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form>
    <input type="text" id="text">
</form>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var textInput = document.getElementById("text");

    /* 当文本框内容改变时，鼠标离开文本框，自动将文本框的内容输出到控制台 */
    textInput.onchange = function () {
        console.log(this.value);
    };
</script>
</body>
</html>


案例演示3：当文本框内容改变时，立即将改变的内容输出到控制台

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form>
    <input type="text" id="text">
</form>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var textInput = document.getElementById("text");

    /* 当文本框内容改变时，立即将改变的内容输出到控制台 */
    textInput.oninput = function () {
        console.log(this.value);
    };
</script>
</body>
</html>


案例演示4：如果单击“submit”，则不填写文本字段，将发生警报消息

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form>
    <input type="text" id="text" required>
    <input type="submit" value="submit">
</form>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var textInput = document.getElementById("text");

    /* 如果单击“submit”，则不填写文本字段，将发生警报消息 */
    textInput.oninvalid = function () {
        console.log("请您完善表单内容！");
    };
</script>
</body>
</html>


案例演示5：当选中文本框的内容时，输出“您已经选择了文本框内容！”

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form>
    <input type="text" id="text">
</form>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var textInput = document.getElementById("text");

    /* 当选中文本框的内容时，输出“您已经选择了文本框内容！” */
    textInput.onselect = function () {
        console.log("您已经选择了文本框内容！");
    };
</script>
</body>
</html>


案例演示6：当提交表单的时候，在控制台输出“表单提交”

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form id="myform">
    <input type="submit" id="submit">
</form>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var myform = document.getElementById("myform");

    /* 当提交表单的时候，在控制台输出“表单提交” */
    myform.onsubmit = function () {
        console.log("表单提交");
        return false;/* 用来阻止表单提交的，你不写它会跳转请求 */
    };
</script>
</body>
</html>


4.4.4 键盘事件
通过键盘触发事件，类似用户的行为：



案例演示1：当键盘按下判断当前的按键是不是 a ，如果是就输出true，否则输出false


<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    /* 当键盘按下判断当前的按键是不是 a ，如果是就输出true，否则输出false */
    window.onkeydown = function (event) {
        /* 解决兼容性问题 */
        event = event || window.event;

        if (event.keyCode == 65) {
            console.log("true");
        } else {
            console.log("false");
        }
    };
</script>
</body>
</html>

案例演示2：使div可以根据不同的方向键向不同的方向移动

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box" style="width: 100px;height: 100px;background: red;position: absolute;"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box = document.getElementById("box");

    //为document绑定一个按键按下的事件
    document.onkeydown = function (event) {
        event = event || window.event;
    
        // 定义移动速度
        var speed = 10;
    
        // 选择移动方向
        switch (event.keyCode) {
            case 37:
                box.style.left = box.offsetLeft - speed + "px";
                break;
            case 39:
                box.style.left = box.offsetLeft + speed + "px";
                break;
            case 38:
                box.style.top = box.offsetTop - speed + "px";
                break;
            case 40:
                box.style.top = box.offsetTop + speed + "px";
                break;
        }
    };
</script>
</body>
</html>


拓展知识：

当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数。

Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标的状态。

在IE8中，响应函数被触发时，浏览器不会传递事件对象，在IE8及以下的浏览器中，是将事件对象作为window对象的属性保存的。

解决事件对象的兼容性问题：event = event || window.event;

键鼠属性：



4.4.5 鼠标事件
通过鼠标触发事件，类似用户的行为：



案例演示1：创建一个正方形div，默认颜色为黑色，当鼠标移入div，背景颜色变为红色，当鼠标移出div，背景颜色变为绿色

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box" style="width: 100px;height: 100px;background: black;"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box = document.getElementById("box");

    /* 当鼠标移入div，背景颜色变为红色 */
    box.onmouseenter = function () {
        this.style.background = "red";
    };
    
    /* 当鼠标移出div，背景颜色变为绿色 */
    box.onmouseleave = function () {
        this.style.background = "green";
    };
</script>
</body>
</html>

案例演示2：编写一个通用的拖拽元素函数，创建两个div，进行拖拽演示，要求兼容IE8、火狐、谷歌等主流浏览器

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box1" style="width: 100px;height: 100px;background: red;position: absolute;"></div>
<div id="box2" style="width: 100px;height: 100px;background: green;position: absolute;"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");

    drag(box1);
    drag(box2);
    
    /*
     * 提取一个专门用来设置拖拽的函数
     * 参数：开启拖拽的元素
     */
    function drag(obj) {
        //当鼠标在被拖拽元素上按下时，开始拖拽
        obj.onmousedown = function (event) {
            // 解决事件的兼容性问题
            event = event || window.event;
    
            // 设置obj捕获所有鼠标按下的事件
            /**
             * setCapture()：
             * 只有IE支持，但是在火狐中调用时不会报错，
             * 而如果使用chrome调用，它也会报错
             */
            obj.setCapture && obj.setCapture();
    
            // obj的偏移量 鼠标.clentX - 元素.offsetLeft
            // obj的偏移量 鼠标.clentY - 元素.offsetTop
            var ol = event.clientX - obj.offsetLeft;
            var ot = event.clientY - obj.offsetTop;
    
            // 为document绑定一个鼠标移动事件
            document.onmousemove = function (event) {
                // 解决事件的兼容性问题
                event = event || window.event;
                // 当鼠标移动时被拖拽元素跟随鼠标移动
                // 获取鼠标的坐标
                var left = event.clientX - ol;
                var top = event.clientY - ot;
                // 修改obj的位置
                obj.style.left = left + "px";
                obj.style.top = top + "px";
            };
    
            // 为document绑定一个鼠标松开事件
            document.onmouseup = function () {
                // 取消document的onmousemove事件
                document.onmousemove = null;
                // 取消document的onmouseup事件
                document.onmouseup = null;
                // 当鼠标松开时，取消对事件的捕获
                obj.releaseCapture && obj.releaseCapture();
            };
    
            /*
             * 当我们拖拽一个网页中的内容时，浏览器会默认去搜索引擎中搜索内容，
             * 此时会导致拖拽功能的异常，这个是浏览器提供的默认行为，
             * 如果不希望发生这个行为，则可以通过return false来取消默认行为，
             * 但是这招对IE8不起作用
             */
            return false;
        };
    }
</script>
</body>
</html>


4.4.6 媒体事件
通过视频（videos），图像（images）或音频（audio） 触发该事件。





4.4.7 其它事件


4.4.8 事件冒泡
事件的冒泡（Bubble）：所谓的冒泡指的就是事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发，在开发中大部分情况冒泡都是有用的，如果不希望发生事件冒泡可以通过事件对象来取消冒泡。

案例演示1：创建两个div，叠放在一起，分别绑定单击事件，点击最里边的div，会触发两个div的单击事件

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        #div1 {
            width: 200px;
            height: 200px;
            background: pink;
        }

        #div2 {
            width: 100px;
            height: 100px;
            background: coral;
        }
    </style>
</head>
<body>
<div id="div1">
    我是DIV1
    <div id="div2">
        我是DIV2
    </div>
</div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    // 为div1绑定单击事件
    div1.onclick = function () {
        console.log("div1 的单击事件触发了！");
    };
    
    // 为div2绑定单击事件
    div2.onclick = function () {
        console.log("div2 的单击事件触发了！");
    };
</script>
</body>
</html>


案例演示2：创建两个div，叠放在一起，分别绑定单击事件，点击最里边的div，不会触发两个div的单击事件，只会触发自己的单击事件，这时候我们可以取消事件冒泡

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        #div1 {
            width: 200px;
            height: 200px;
            background: pink;
        }

        #div2 {
            width: 100px;
            height: 100px;
            background: coral;
        }
    </style>
</head>
<body>
<div id="div1">
    我是DIV1
    <div id="div2">
        我是DIV2
    </div>
</div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    // 为div1绑定单击事件
    div1.onclick = function () {
        console.log("div1 的单击事件触发了！");
        stopBubble();
    };
    
    // 为div2绑定单击事件
    div2.onclick = function () {
        console.log("div2 的单击事件触发了！");
        stopBubble();
    };
    
    // 取消事件冒泡
    function stopBubble(event) {
        // 如果提供了事件对象，则这是一个非IE浏览器
        if (event && event.stopPropagation) {
            // 因此它支持W3C的stopPropagation()方法
            event.stopPropagation();
        } else {
            // 否则，我们需要使用IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
        }
    }
</script>
</body>
</html>


案例演示3：当点击a标签的时候，阻止a标签的默认跳转事件，采用事件阻止

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        #div1 {
            width: 200px;
            height: 200px;
            background: pink;
        }

        #div2 {
            width: 100px;
            height: 100px;
            background: coral;
        }
    </style>
</head>
<body>
<a href="https://www.baidu.com" id="a">打开百度，你就知道！</a>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var a = document.getElementById("a");

    // 为a绑定单击事件
    a.onclick = function () {
        stopDefault();
    };
    
    // 阻止浏览器的默认行为
    function stopDefault(event) {
        if (event && event.preventDefault) {
            // 阻止默认浏览器动作(W3C)
            event.preventDefault();
        } else {
            // IE中阻止函数器默认动作的方式
            window.event.returnValue = false;
        }
        return false;
    }
</script>
</body>
</html>


4.4.9 事件委派
我们希望只绑定一次事件，即可应用到多个的元素上，即使元素是后添加的，我们可以尝试将其绑定给元素的共同的祖先元素，也就是事件的委派。事件的委派，是指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件。事件委派是利用了事件冒泡，通过委派可以减少事件绑定的次数，提高程序的性能。

案例演示：为ul列表中的所有a标签都绑定单击事件

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<ul id="u1">
    <li><a href="javascript:;" class="link">超链接一</a></li>
    <li><a href="javascript:;" class="link">超链接二</a></li>
    <li><a href="javascript:;" class="link">超链接三</a></li>
</ul>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var u1 = document.getElementById("u1");

    // 为ul绑定一个单击响应函数
    u1.onclick = function (event) {
        event = event || window.event;
        // 如果触发事件的对象是我们期望的元素，则执行，否则不执行
        if (event.target.className == "link") {
            console.log("我是ul的单击响应函数");
        }
    };
</script>
</body>
</html>


4.4.10 事件绑定
我们以前绑定事件代码只能一个事件绑定一个函数，那我们要是想一个事件对应多个函数，并且不存在兼容性的问题该如何解决呢？

接下来，我会直接提供两个已经编写好的事件绑定和事件解绑的兼容性代码，如下：

/*为元素绑定事件兼容性代码*/
function addEventListener(element, type, fn) {
    if(element.addEventListener) {
        element.addEventListener(type, fn, false);
    } else if(element.attachEvent) {
        element.attachEvent("on" + type, fn);
    } else {
        element["on" + type] = fn;
    }
}

/*为元素解绑事件兼容性代码*/
function removeEventListener(element, type, fnName) {
    if(element.removeEventListener) {
        element.removeEventListener(type, fnName, false);
    } else if(element.detachEvent) {
        element.detachEvent("on" + type, fnName);
    } else {
        element["on" + type] = null;
    }
}


案例演示：为按钮1的单击事件绑定两个函数，然后点击按钮2取消按钮1的单机事件绑定函数f1

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn1">按钮1</button>
<button id="btn2">按钮2</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    function f1() {
        console.log("output1 ...");
    };

    function f2() {
        console.log("output2 ...");
    };
    
    // 为按钮1的单击事件绑定两个函数
    addEventListener(document.getElementById("btn1"), "click", f1);
    addEventListener(document.getElementById("btn1"), "click", f2);
    
    // 点击按钮2取消按钮1的单机事件绑定函数f1
    document.getElementById("btn2").onclick = function () {
        removeEventListener(document.getElementById("btn1"), "click", f1);
    };
    
    /*为元素绑定事件兼容性代码*/
    function addEventListener(element, type, fn) {
        if (element.addEventListener) {
            element.addEventListener(type, fn, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, fn);
        } else {
            element["on" + type] = fn;
        }
    }
    
    /*为元素解绑事件兼容性代码*/
    function removeEventListener(element, type, fnName) {
        if (element.removeEventListener) {
            element.removeEventListener(type, fnName, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, fnName);
        } else {
            element["on" + type] = null;
        }
    }
</script>
</body>
</html>




4.4.11 事件传播
事件的传播：关于事件的传播网景公司和微软公司有不同的理解

微软公司认为事件应该是由内向外传播，也就是当事件触发时，应该先触发当前元素上的事件，然后再向当前元素的祖先元素上传播，也就说事件应该在冒泡阶段执行。

网景公司认为事件应该是由外向内传播的，也就是当前事件触发时，应该先触发当前元素的最外层的祖先元素的事件，然后在向内传播给后代元素。

W3C综合了两个公司的方案，将事件传播分成了三个阶段：

捕获阶段：在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件

目标阶段：事件捕获到目标元素，捕获结束开始在目标元素上触发事件

冒泡阶段：事件从目标元素向它的祖先元素传递，依次触发祖先元素上的事件



注意：如果希望在捕获阶段就触发事件，可以将addEventListener()的第三个参数设置为true，一般情况下我们不会希望在捕获阶段触发事件，所以这个参数一般都是false，并且注意，IE8及以下的浏览器中没有捕获阶段，我们可以使用event.stopPropagation();取消事件传播。

第五章 JavaScript BOM
5.1 BOM概述
浏览器对象模型（BOM）使 JavaScript 有能力与浏览器"对话"。

浏览器对象模型（Browser Object Model (BOM)）尚无正式标准。

由于现代浏览器已经（几乎）实现了 JavaScript 交互性方面的相同方法和属性，因此常被认为是BOM的方法和属性。

浏览器对象模型（BOM）可以使我们通过JS来操作浏览器，在BOM中为我们提供了一组对象，用来完成对浏览器的操作，常见的BOM对象如下：

Window：代表的是整个浏览器的窗口，同时window也是网页中的全局对象

Navigator：代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器

Location：代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面

History：代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录，由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只在当次访问时有效

Screen：代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息

这些BOM对象在浏览器中都是作为window对象的属性保存的，可以通过window对象来使用，也可以直接使用。

5.2、Window对象
5.2.1 弹出框
JavaScript 有三种类型的弹出框：警告框、确认框和提示框。

5.2.1.1 警告框

如果要确保信息传递给用户，通常会使用警告框。当警告框弹出时，用户将需要单击“确定”来继续。

语法

window.alert("sometext");
注意：window.alert() 方法可以不带 window 前缀来写。

实例

alert("我是一个警告框！");
5.2.1.2 确认框

如果您希望用户验证或接受某个东西，则通常使用“确认”框。

当确认框弹出时，用户将不得不单击“确定”或“取消”来继续进行。

如果用户单击“确定”，该框返回 true。如果用户单击“取消”，该框返回 false。

语法

window.confirm("sometext");
注意：window.confirm() 方法可以不带 window 前缀来编写。

实例

var r = confirm("请按按钮");
if (r == true) {
    x = "您按了确认！";
} else {
    x = "您按了取消！";
}
5.2.1.3 提示框

如果您希望用户在进入页面前输入值，通常会使用提示框。

当提示框弹出时，用户将不得不输入值后单击“确定”或点击“取消”来继续进行。

如果用户单击“确定”，该框返回输入值。如果用户单击“取消”，该框返回 NULL。

语法

window.prompt("sometext","defaultText");
window.prompt() 方法可以不带 window 前缀来编写。

实例

var person = prompt("请输入您的姓名", "比尔盖茨");
if (person != null) {
    console.log(person);
}
5.2.2 定时事件
JavaScript 可以在时间间隔内执行，这就是所谓的定时事件（ Timing Events）。

window 对象允许以指定的时间间隔执行代码，这些时间间隔称为定时事件。

通过 JavaScript 使用的有两个关键的方法：

setTimeout(function, milliseconds)

在等待指定的毫秒数后执行函数。

setInterval(function, milliseconds)

等同于 setTimeout()，但持续重复执行该函数。

setTimeout() 和 setInterval() 都属于 window 对象的方法。

5.2.2.1 延时器

setTimeout() 方法：延时器

window.setTimeout(function, milliseconds);
注意：window.setTimeout() 方法可以不带 window 前缀来编写。

第一个参数是要执行的函数。

第二个参数指示执行之前的毫秒数。

案例演示：单击按钮，等待 3 秒，然后控制台会输出 "Hello"

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn">按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.getElementById("btn");

    btn.onclick = function () {
        // 创建延时器
        var timer = setTimeout(function () {
            console.log("Hello");
        }, 3000);
        
        // 清除延时器
        // clearTimeout(timer);        
    };
</script>
</body>
</html>


5.2.2.2 定时器

setInterval() 方法：定时器

setInterval() 方法在每个给定的时间间隔重复给定的函数。

window.setInterval(function, milliseconds);
注意：window.setInterval() 方法可以不带 window 前缀来写。

第一个参数是要执行的函数。

第二个参数每个执行之间的时间间隔的长度。

案例演示：单击按钮，每隔一秒向控制台输出 "Hello"

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn">按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.getElementById("btn");

    btn.onclick = function () {
        // 创建定时器
        var timer = setInterval(function () {
            console.log("Hello");
        }, 1000);
    
        // 清除定时器
        // clearInterval(timer);
    };
</script>
</body>
</html>


拓展知识：

做一个通用移动函数来实现小汽车（黑色方块）移动的效果

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        /*控制器样式*/
        .controller {
            width: 600px;
            height: 50px;
            line-height: 50px;
        }

        .controller button {
            outline: none;
            border: none;
            margin: 0px;
            padding: 0px;
            width: 200px;
            height: 50px;
            font-size: 16px;
            line-height: 50px;
            text-align: center;
            background-color: #E9E9E9;
            cursor: pointer;
            float: left;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            border: 2px solid #F0F0F0;
        }
    
        .controller button:hover {
            background-color: #F9F9F9;
        }


        /*公路样式*/
        .road {
            width: 100%;
            height: 100px;
            position: relative;
            margin-top: 50px;
            background: #3DB1FF;
            opacity: .90;
        }
    
        .road800 {
            width: 800px;
            height: 100px;
            background: pink;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 1000;
            opacity: .75;
        }
    
        .road1200 {
            width: 1200px;
            height: 100px;
            background: orange;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 500;
        }


        /*小汽车样式*/
        div#car {
            width: 135px;
            height: 100px;
            display: block;
            background: black;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 1500;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            /*border: 1px solid #F0F0F0;*/
        }
    </style>
</head>
<body>
<div class="controller">
    <button id="btn1">移动到800PX</button>
    <button id="btn2">移动到1200PX</button>
    <button id="btn3">回家</button>
</div>

<div class="road">
    <div class="road800"></div>
    <div class="road1200"></div>
    <div id="car"></div>
</div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    document.getElementById("btn1").onclick = function () {
        move(document.getElementById("car"), 800);
    };

    document.getElementById("btn2").onclick = function () {
        move(document.getElementById("car"), 1200);
    };
    
    document.getElementById("btn3").onclick = function () {
        move(document.getElementById("car"), 0);
    };
    
    /*移动函数*/
    function move(element, target) {
        // 先清理定时器
        clearInterval(element.timeId);
        // 一会要清理定时器(只产生一个定时器)
        element.timeId = setInterval(function () {
            // 获取对象当前的位置
            var current = element.offsetLeft;
            // 每次移动多少像素
            var step = 10;
            // 判断是往正方向走还是往相反方向走
            step = current < target ? step : -step;
            // 每次移动后的距离
            current += step;
            // 判断当前移动后的位置是否到达目标位置
            if (Math.abs(target - current) > Math.abs(step)) {
                element.style.left = current + "px";
            } else {
                // 清理定时器
                clearInterval(element.timeId);
                element.style.left = target + "px";
            }
        }, 20);
    }
</script>
</body>
</html>




5.2.3 常用窗口属性
两个属性可用用于确定浏览器窗口的尺寸。

这两个属性都以像素返回尺寸：

window.innerHeight - 浏览器窗口的内高度（以像素计）

window.innerWidth - 浏览器窗口的内宽度（以像素计）

浏览器窗口（浏览器视口）不包括工具栏和滚动条。

对于 Internet Explorer 8, 7, 6, 5：

document.documentElement.clientHeight

document.documentElement.clientWidth

或

document.body.clientHeight

document.body.clientWidth

一个实用的 JavaScript 解决方案（包括所有浏览器）：该例显示浏览器窗口的高度和宽度（不包括工具栏和滚动条）


<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    
    console.log(w);
    console.log(h);
</script>
</body>
</html>

5.2.4 其它窗口方法
window.open() ：打开新的窗口

语法介绍：

window.open(URL,name,specs,replace);
参数介绍：



案例演示：

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button onclick="openWin()">打开窗口</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    function openWin() {
        myWindow = window.open('', '', 'width=200,height=100');
        myWindow.document.write("<p>这是新建窗口</p>");
    }
</script>
</body>
</html>


window.close() ：关闭当前窗口

语法介绍：

window.close();
案例演示：

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button onclick="openWin()">打开窗口</button>
<button onclick="closeWin()">关闭窗口</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    function openWin() {
        myWindow = window.open('', '', 'width=200,height=100');
        myWindow.document.write("<p>这是新建窗口</p>");
    }

    function closeWin() {
        myWindow.close();
    }
</script>
</body>
</html>


window.moveTo() ：移动当前窗口

语法介绍：

window.moveTo(x,y);
案例演示：

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button onclick="openWin()">打开窗口</button>
<button onclick="moveWin()">移动窗口</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    function openWin() {
        myWindow = window.open('', '', 'width=200,height=100');
        myWindow.document.write("<p>这是新建窗口</p>");
    }

    function moveWin() {
        myWindow.moveTo(300, 300);
        myWindow.focus();
    }
</script>
</body>
</html>


window.resizeTo() ：调整当前窗口

语法介绍：

window.resizeTo(width,height);
案例演示：

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button onclick="openWin()">打开窗口</button>
<button onclick="resizeWin()">调整窗口</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    function openWin() {
        myWindow = window.open('', '', 'width=200,height=100');
        myWindow.document.write("<p>这是新建窗口</p>");
    }

    function resizeWin() {
        myWindow.resizeTo(300, 300);
        myWindow.focus();
    }
</script>
</body>
</html>


5.3 Navigator对象
Navigator代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器，由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了，一般我们只会使用userAgent来判断浏览器的信息，userAgent是一个字符串，这个字符串中包含有用来描述浏览器信息的内容，不同的浏览器会有不同的userAgent，如下代码：

var ua = navigator.userAgent;
console.log(ua);

谷歌浏览器：

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36

火狐浏览器：

Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0

IE11浏览器：

Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko

IE10浏览器：

Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)

IE9浏览器：

Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)

IE8浏览器：

Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)

IE7浏览器：

Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)

于是乎，我们就可以实现对浏览器类型的判断：

var ua = navigator.userAgent;
if (/firefox/i.test(ua)) {
    alert("你是火狐浏览器");
} else if (/chrome/i.test(ua)) {
    alert("你是谷歌浏览器");
} else if (/msie/i.test(ua)) {
    alert("你是IE5-IE10浏览器");
} else if ("ActiveXObject" in window) {
    alert("你是IE11浏览器");
}

注意：在IE11中已经将微软和IE相关的标识都已经去除了，所以我们基本已经不能通过UserAgent来识别一个浏览器是否是IE了，如果通过UserAgent不能判断，还可以通过一些浏览器中特有的对象，来判断浏览器的信息，比如：ActiveXObject

5.4 Location对象
Location对象中封装了浏览器的地址栏的信息，如果直接打印location，则可以获取到地址栏的信息（当前页面的完整路径）

5.4.1常用属性
常用属性：

console.log(location);          //输出location对象
console.log(location.href);     //输出当前地址的全路径地址
console.log(location.origin);   //输出当前地址的来源
console.log(location.protocol); //输出当前地址的协议
console.log(location.hostname); //输出当前地址的主机名
console.log(location.host);     //输出当前地址的主机
console.log(location.port);     //输出当前地址的端口号
console.log(location.pathname); //输出当前地址的路径部分
console.log(location.search);   //输出当前地址的?后边的参数部分

修改地址：

location = "https://www.baidu.com";
location.href = "https://www.baidu.com";
5.4.2 常用方法
assign()：用来跳转到其它的页面，作用和直接修改location一样

location.assign("https://www.baidu.com");
reload()：用于重新加载当前页面，作用和刷新按钮一样，如果在方法中传递一个true，作为参数，则会强制清空缓存刷新页面

location.reload(true);
replace()：可以使用一个新的页面替换当前页面，调用完毕也会跳转页面，它不会生成历史记录，不能使用回退按钮回退

location.replace("https://www.baidu.com");

5.5 History对象
History对象可以用来操作浏览器向前或向后翻页

5.5.1 常用属性
console.log(history);           //输出history对象
console.log(history.length);    //可以获取到当成访问的链接数量
5.5.2 常用方法
back()：可以回退到上一个页面，作用和浏览器的回退按钮一样

history.back();
forward()：可以跳转到下一个页面，作用和浏览器的前进按钮一样

history.forward();
go()：可以用来跳转到指定的页面，它需要一个整数作为参数

1：表示向前跳转一个页面，相当于forward()

2：表示向前跳转两个页面

-1：表示向后跳转一个页面，相当于back()

-2：表示向后跳转两个页面

history.go(-2);
5.6 Screen对象
Screen 对象包含有关客户端显示屏幕的信息。

注意：没有应用于 screen 对象的公开标准，不过所有浏览器都支持该对象。

5.6.1 Screen对象描述
每个 Window 对象的 screen 属性都引用一个 Screen 对象。Screen 对象中存放着有关显示浏览器屏幕的信息。JavaScript 程序将利用这些信息来优化它们的输出，以达到用户的显示要求。例如，一个程序可以根据显示器的尺寸选择使用大图像还是使用小图像，它还可以根据显示器的颜色深度选择使用 16 位色还是使用 8 位色的图形。另外，JavaScript 程序还能根据有关屏幕尺寸的信息将新的浏览器窗口定位在屏幕中间。

5.6.2 Screen对象属性



A-艺凡
关注

————————————————
版权声明：本文为CSDN博主「A-艺凡」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_51717662/article/details/127350191

————————————————
版权声明：本文为CSDN博主「A-艺凡」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_51717662/article/details/127350191