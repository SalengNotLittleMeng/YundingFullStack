# JS入门知识

## 一.基础知识

### 1.是什么

JS是一种脚本语言，是说不具备开发操作系统能力只能用来编写其他大型应用程序的脚本



### 2.使用

​	使用<script>标签在HTML网页中插入JavaScript代码。注意， <script>标签要成对出现，并把JavaScript代码写在`<script></script>`之间。

<script type="text/javascript">表示在<script></script>之间的是文本类型(text),javascript是为了告诉浏览器里面的文本是属于JavaScript语言。


### 3.引用外部文件

我们可以把HTML文件和JS代码分开,并单独创建一个JavaScript文件(简称JS文件),其文件后缀通常为.js，然后将JS代码直接写在JS文件中。

**注意:在JS文件中，不需要<script>标签,直接编写JavaScript代码就可以了。**

JS文件不能直接运行，需嵌入到HTML文件中执行，我们需在HTML中添加如下代码，就可将JS文件嵌入HTML文件中。

```js
<script src="script.js"></script>
```

### 4.位置

我们可以将JavaScript代码放在html文件中任何位置，但是我们一般放在网页的head或者body部分。
**放在<head>部分**
最常用的方式是在页面中head部分放置<script>元素，浏览器解析head部分就会执行这个代码，然后才解析页面的其余部分。
**放在<body>部分**
JavaScript代码在网页读取到该语句的时候就会执行。

**注意:** javascript作为一种脚本语言**可以放在html页面中任何位置**，但是浏览器解释html时是按先后顺序的，所以前面的script就先被执行。比如进行页面显示初始化的js必须放在head里面，因为初始化都要求提前进行（如给页面body设置css等）；而如果是通过事件调用执行的function那么对位置没什么要求的。

### 5.符号和语句和注释

**每一句JavaScript代码格式:**` 语句;

注释// /*/

### 6.变量

```js
var 变量名
```

**命名规则:**

  1.变量必须使用字母、下划线(_)或者美元符($)开始。

  2.然后可以使用任意多个英文字母、数字、下划线(_)或者美元符($)组成。

  3.不能使用JavaScript关键词与JavaScript保留字。

**变量要先声明再赋值，如下：**

```
var mychar;
mychar="javascript";
var mynum = 6;
```

### 7.定义

#### 1.Let

ES2015 引入了两个重要的 JavaScript 新关键词：`let` 和 `const`。

这两个关键字在 JavaScript 中提供了块作用域（*Block Scope*）变量（和常量）。

在 ES2015 之前，JavaScript 只有两种类型的作用域：*全局作用域*和*函数作用域*。

*全局*变量可以在 JavaScript 程序中的任何位置访问

*局部*变量只能在它们被声明的函数内访问。

JavaScript 块作用域

通过 `var` 关键词声明的变量没有块*作用域*。

在块 *{}* 内声明的变量可以从块之外进行访问

可以使用 `let` 关键词声明拥有块作用域的变量。

在块 *{}* 内声明的变量无法从块外访问：

![image-20221227094853015](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227094853015.png)

##### 重新声明变量

使用 `var` 关键字重新声明变量会带来问题。

在块中重新声明变量也将重新声明块外的变量：

![image-20221227094933153](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227094933153.png)

##### 循环作用域

在循环中使用 `var`： var是全局变量   let只是块作用域

![image-20221227095154230](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227095154230.png)

![image-20221227095210078](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227095210078.png)

##### 函数作用域

在函数内声明变量时，使用 `var` 和 `let` 很相似。

![image-20221227095308211](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227095308211.png)

![image-20221227095317306](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227095317306.png)

![image-20221227095527263](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227095527263.png)

![image-20221227095600921](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227095600921.png)

通过 `let` 关键词定义的全局变量不属于 window 对象：

![image-20221227095613076](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227095613076.png)

##### 重新声明

允许在程序的任何位置使用 `var` 重新声明 JavaScript 变量：

在相同的作用域，或在相同的块中，通过 `let` 重新声明一个 `var` 变量是不允许的：

![image-20221227095724966](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227095724966.png)

在相同的作用域，或在相同的块中，通过 `let` 重新声明一个 `let` 变量是不允许的

在相同的作用域，或在相同的块中，通过 `var` 重新声明一个 `let` 变量是不允许的：

在不同的作用域或块中，通过 `let` 重新声明变量是允许的：

##### 提升

通过 `var` 声明的变量会*提升*到顶端。如果您不了解什么是提升（Hoisting），请学习我们的提升这一章。

您可以在声明变量之前就使用它：

通过 `let` 定义的变量不会被提升到顶端。

在声明 `let` 变量之前就使用它会导致 ReferenceError。

变量从块的开头一直处于“暂时死区”，直到声明为止：

#### 2.Const

通过 `const` 定义的变量与 `let` 变量类似，但不能重新赋值：

##### 块作用域

在*块作用域*内使用 `const` 声明的变量与 `let` 变量相似。

在本例中，x 在块中声明，不同于在块之外声明的 x：

##### 在声明时赋值

JavaScript `const` 变量必须在声明时赋值：

![image-20221227100343035](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227100343035.png)

##### 不是真正的常数

关键字 `const` 有一定的误导性。

它没有定义常量值。它定义了对值的常量引用。

因此，我们不能更改常量原始值，但我们可以更改常量对象的属性

##### 原始值

如果我们将一个原始值赋给常量，我们就不能改变原始值：

![image-20221227100536139](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227100536139.png)

##### 常量对象可以更改

您可以更改常量对象的属性：

![image-20221227100610251](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227100610251.png)

但是您无法重新为常量对象赋值：

![image-20221227100834043](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227100834043.png)

##### 常量数组可以更改

您可以更改常量数组的元素

![image-20221227100933974](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227100933974.png)

但是您无法重新为常量数组赋值：

![](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227101031572.png)

**在同一作用域或块中，不允许将已有的 `var` 或 `let` 变量重新声明或重新赋值给 `const`**

![image-20221227101227458](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227101227458.png)

在同一作用域或块中，为已有的 const 变量重新声明声明或赋值是不允许的

![image-20221227101314546](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227101314546.png)

在另外的作用域或块中重新声明 `const` 是允许的：

![image-20221227101436753](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227101436753.png)

通过 `const` 定义的变量不会被提升到顶端。

`const` 变量不能在声明之前使用

### 8.区块

JavaScript 使用大括号，将多个相关的语句组合在一起，称为“区块”。

var作用于全局作用域

## 二.语句

### 1.判断语句

#### 1.if-else

if...else语句是在指定的条件成立时执行代码，在条件不成立时执行else后的代码。

**语法****:**

```
if(条件)
{ 条件成立时执行的代码 }
else
{ 条件不成立时执行的代码 }
```

#### 2.switch语句

多个`if...else`连在一起使用的时候，可以转为使用更方便的`switch`结构。

```js
 复制代码switch (fruit) {  case "banana":    // ...    break;  case "apple":    // ...    break;  default:    // ...}
```

上面代码根据变量`fruit`的值，选择执行相应的`case`。如果所有`case`都不符合，则执行最后的`default`部分。需要注意的是，每个`case`代码块内部的`break`语句不能少，否则会接下去执行下一个`case`代码块，而不是跳出`switch`结构。

#### 3.三元运算符？

JavaScript 还有一个三元运算符（即该运算符需要三个运算子）`?:`，也可以用于逻辑判断。

```
(条件) ? 表达式1 : 表达式2
```

上面代码中，如果“条件”为`true`，则返回“表达式1”的值，否则返回“表达式2”的值。

```
var even = (n % 2 === 0) ? true : false;
```

### 2.函数

函数是完成某个特定功能的一组语句。

```js
function 函数名()
{
     函数代码;
}
```

**说明:**

1. function定义函数的关键字。

2. "函数名"你为函数取的名字。

3. "函数代码"替换为完成特定功能的代码。

函数引用 函数名()

### 3.输出语句

#### 1.ducoment

`document.write()` 可用于直接向 HTML 输出流写内容。简单的说就是直接在网页中输出内容。

**第一种****:****输出内容用""括起，直接输出****""****号内的内容。**

```js
<script type="text/javascript">
  document.write("I love JavaScript！"); //内容用""括起来，""里的内容直接输出。
</script>
```

**第二种****:****通过变量，输出内容**

```js
<script type="text/javascript">
  var mystr="hello world!";
  document.write(mystr);  //直接写变量名，输出变量存储的内容。
</script>
```

**第三种****:****输出多项内容，内容之间用****+****号连接。**

```js
<script type="text/javascript">
  var mystr="hello";
  document.write(mystr+"I love JavaScript"); //多项内容之间用+号连接
</script>
```

**第四种****:****输出****HTML****标签，并起作用，标签使用""括起来。**

```js
<script type="text/javascript">
  var mystr="hello";
document.write(mystr+"<br>");//输出hello后，输出一个换行符
  document.write("JavaScript");
</script>
```

**关于JS输出空格问题，如果想要实现输出空格，可以使用特殊字符“ ”实现**

```js
<script type="text/javascript">
  document.write("&nbsp;");//输出空格
</script>
```

#### 2.alert消息对话框

一个小窗口，上面写着一段提示信息文字。如果你不点击“确定”，就不能对网页做任何操作，这个小窗口就是使用alert实现的。

**语法:**

```js
alert(字符串或变量);  
```

#### 3.confirm对话消息框

confirm 消息对话框通常用于允许用户做选择的动作，如：“你对吗？”等。弹出对话框(包括一个确定按钮和一个取消按钮)。

**语法:**

```javascript
confirm(str);
```

**参数说明:**

```javascript
str：在消息对话框中要显示的文本
返回值: Boolean值
```

**返回值:**

```javascript
当用户点击"确定"按钮时，返回true
当用户点击"取消"按钮时，返回false
```

**注:** **通过返回值可以判断用户点击了什么按钮**

#### 4.prompt提问

**`prompt`**弹出消息对话框,通常用于询问一些需要与用户交互的信息。弹出消息对话框（包含一个确定按钮、取消按钮与一个文本输入框）。

**语法:**

```
prompt(str1, str2);
```

**参数说明：**

```javascript
str1: 要显示在消息对话框中的文本，不可修改
str2：文本框中的内容，可以修改
```

**返回值:**

```javascript
1. 点击确定按钮，文本框中的内容将作为函数返回值
2. 点击取消按钮，将返回null
```

#### 5.打开新窗口window.open

open() 方法可以查找一个已经存在或者新建的浏览器窗口。

**语法：**

```
window.open([URL], [窗口名称], [参数字符串])
```

**参数说明:**

```js
URL：可选参数，在窗口中要显示网页的网址或路径。如果省略这个参数，或者它的值是空字符串，那么窗口就不显示任何文档。
窗口名称：可选参数，被打开窗口的名称。
    1.该名称由字母、数字和下划线字符组成。
    2."_top"、"_blank"、"_self"具有特殊意义的名称。
       _blank：在新窗口显示目标网页
       _self：在当前窗口显示目标网页
       _top：框架网页中在上部窗口中显示目标网页
    3.相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。
   4.用''连接。
```

![image-20221221111349597](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221221111349597.png)

#### 6.关闭窗口

close()关闭窗口

**用法：**

```javascript
window.close();   //关闭本窗口
```

或

```javascript
<窗口对象>.close();   //关闭指定的窗口
```

窗口对象可以open函数结果赋值一个变量

### 4.循环语句

#### 1.while 循环

`While`语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块。

```
while (条件)  语句;// 或者while (条件) 语句;
```

`while`语句的循环条件是一个表达式，必须放在圆括号中。代码块部分，如果只有一条语句，可以省略大括号，否则就必须加上大括号。

#### 2.for 循环

`for`语句是循环命令的另一种形式，可以指定循环的起点、终点和终止条件。它的格式如下。

```
for (初始化表达式; 条件; 递增表达式)  语句// 或者for (初始化表达式; 条件; 递增表达式) {  语句}
```

`for`语句后面的括号里面，有三个表达式。

- 初始化表达式（initialize）：确定循环变量的初始值，只在循环开始时执行一次。
- 条件表达式（test）：每轮循环开始时，都要执行这个条件表达式，只有值为真，才继续进行循环。
- 递增表达式（increment）：每轮循环的最后一个操作，通常用来递增循环变量。

#### 3.do-while循环

`do...while`循环与`while`循环类似，唯一的区别就是先运行一次循环体，然后判断循环条件。

```
do  语句while (条件);// 或者do {  语句} while (条件);
```

不管条件是否为真，`do...while`循环至少运行一次，这是这种结构最大的特点。另外，`while`语句后面的分号注意不要省略。

#### 4.foreach循环

增强型for循环

foreach的语法：

for（元素类型 元素名称 ： 遍历数组（集合）（或者能进行迭代的））{

}

foreach在作用上和for循环在循环数组时是相同，都是可以实现遍历数组的目的，但二者之间略有差别。

for**循环遍历数组本质上是遍历数组下标，即先找到索引，再连接数组元素**，而foreach循环是基于来实现一种迭代器来实现的，所以foreach是每次访问该元素的下一个元素的地址，来实现的直接元素访问。



我们讨论了二者之间差别，那我们也要考虑他们的效率问题：

需要循环数组结构的数据时，建议使用普通for循环，因为for循环采用下标访问，对于数组结构的数据来说，采用下标访问比较好。

需要循环链表结构的数据（集合）时，一般不要使用普通for循环，这种做法很糟糕，数据量大的时候有可能会导致系统崩溃。

所以当我们循环集合时采用foreach效率会有所提高，当我们循环数组时，二者效率相差不多，为方便删除数组元素，可以使用标准的for循环。

### 5.跳转语句

#### 1.break语句

`break`语句用于跳出代码块或循环。

`for`循环也可以使用`break`语句跳出循环。

#### 2.continue语句

`continue`语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环。

### 6.标签

JavaScript 语言允许，语句的前面有标签（label），相当于定位符，用于跳转到程序的任意位置，标签的格式如下。

```
label:  语句
```

标签可以是任意的标识符，但不能是保留字，语句部分可以是任意语句。

标签通常与`break`语句和`continue`语句配合使用，跳出特定的循环。

![image-20221221144017617](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221221144017617.png)

![image-20221221144036193](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221221144036193.png)

