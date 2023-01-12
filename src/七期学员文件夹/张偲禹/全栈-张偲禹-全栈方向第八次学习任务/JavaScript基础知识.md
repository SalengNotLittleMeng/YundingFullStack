# JavaScript基础知识

## 0.初识JS

#### 0-1 什么是JavaScript

JavaScript最初被创建的目的是“使网页更加生动”。

这种编程语言写出来的程序被称为脚本。它们可以被直接写在网页的HTML中，在页面加载的时候自动执行。

脚本被以纯文本的形式提供和执行。它们不需要特殊的准备或编译即可运行。

如今，JavaScript不仅可以在浏览器中执行，也可以在服务端执行，甚至可以在任意搭载了JavaScript引擎的设备中执行。

#### 0-2 JavaScript引擎

浏览器中嵌入了JavaScrip引擎，有时也称作“JavaScript"虚拟机。

- V8——Chrome、Opera和Edge中的JavaScript引擎。
- SpiderMonkey——Firefox中的JavaScript引擎。
- ……还有其他一些代号，像 “Chakra” 用于 IE，“JavaScriptCore”、“Nitro” 和 “SquirrelFish” 用于 Safari，等等。

**引擎是如何工作的？**

1. 引擎（如果是浏览器，则引擎被嵌入在其中）读取（“解析”）脚本。
2. 然后，引擎将脚本转化（“编译”）为机器语言。
3. 然后，机器代码快速地执行。

引擎会对流程中的每个阶段都进行优化。它甚至可以在编译的脚本运行时监视它，分析流经该脚本的数据，并根据获得的信息进一步优化机器代码。

#### 0-3 JavaScript能做什么

- 在网页中添加新的 HTML，修改网页已有内容和网页的样式。
- 响应用户的行为，响应鼠标的点击，指针的移动，按键的按动。
- 向远程服务器发送网络请求，下载和上传文件（所谓的 [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming)) 和 [COMET](https://en.wikipedia.org/wiki/Comet_(programming)) 技术）。
- 获取或设置 cookie，向访问者提出问题或发送消息。
- 记住客户端的数据（“本地存储”）。

#### 0-4 是什么使得JavaScript与众不同？

- 与HTML/CSS完全集成
- 简单的事，简单地完成。
- 被所有的主流浏览器支持，并且默认开启。

## 1.请做好准备

#### 1-1 如何插入JS

- JavaScript代码写在`<script></script>`之间。
- `<script type="text/javascript">`表示在`<script></script>`之间的是文本类型(text),javascript是为了告诉浏览器里面的文本是属于JavaScript语言。

*`<script></script>`标签有一些现在很少用到的特性(attribute):*

*`type`特性、`language`特性在现代HTML标准中声明现在已经不再需要。*

#### 1-2 引用JS外部文件

**将JS代码写在.js文件中：不需要`<script>`标签，直接编写JavaScript代码就可以了。**

将JS文件嵌入HTML文件中：`<script src="script.js"></script>`。

*要附加多个脚本，请使用多个标签。*

***如果设置了`src`特性，`script`标签内容将会被忽略。***

#### 1-3 JS在页面中的位置

可以将JavaScript代码放在html文件中任何位置，但一般放在网页的head或body部分。

**放在`<head>`部分：**浏览器解析head部分就会执行这个代码，然后才解析页面的其余部分。

**放在`<body>`部分**：JavaScript代码在网页读取到该语句就会执行。

*javascript作为一种脚本语言可以放在html页面中任何位置，但是浏览器解释html时是按先后顺序的，所以前面的script就先被执行。比如进行页面显示初始化的js必须放在head里面，因为初始化都要求提前进行（如给页面body设置css等）；而如果是通过事件调用执行的function那么对位置没什么要求的。*

#### 1-4 语句和符号

JavaScript语句是发给浏览器的命令，作用是告诉浏览器要做的事情。

**JavaScript代码格式：**`语句;`

*最好不要省略`;`*

#### 1-5 注释

单行注释：//

多行注释：/*	*/

**不支持注释嵌套！**

*快捷键：`Ctrl+/`快捷键进行单行注释；`Ctrl+Shift+/`快捷键进行多行注释（选择代码，然后按下快捷键）。*

#### 1-6 变量

**定义变量：**`var 变量名`or`let 变量名`

*var定义全局、let定义局部*

**命名规则：**

1. 必须使用字母、下划线(_)或者美元符($)开始；
2. 可以使用任意多个英文字母、数字、下划线(_)或者美元符($)组成；
3. 不能用JavaScript关键字与JavaScript保留字。

- 变量要先声明再赋值。
- 变量可以重复赋值。
- 变量区分大小写。
- 一个变量应该只被声明一次。

***函数式语言：***

*禁止更改变量值的函数式编程语言，比如Scala或Erlang。在这种类型的语言中，一旦值保存在盒子中，就永远存在。如果你试图保存其他值，它会强制创建一个新盒子（声明一个新变量），无法重用之前的变量。*

#### 1-7 常量

**声明常量：**`const 常量名`

*大写形式的常量：*

*一个普遍的做法是将常量用作别名，以便记住那些**在执行之前就已知的难以记住的值**。使用大写字母和下划线来命名这些常量。比如“web”（十六进制）格式为颜色声明常量。*

#### 1-8 判断语句(if...else)

```javascript
if(条件)
{条件成立时执行的代码;}
else
{条件不成立时执行的代码;}
```

*问号运算符：*

```javascript
(条件)?条件成立时执行的代码:条件不成立时执行的代码;
```

*不建议这么使用，问号的作用是根据条件返回其中一个值。*

#### 1-9 函数

**定义函数：**

- 作为参数传递给函数的值，会被复制到函数的局部变量。
- 函数可以访问外部变量，但它只能从内到外起作用。函数外部的代码看不到函数内的局部变量。
- 函数可以返回值；如果没有返回值，则其返回的结果是`undefined`。

```javascript
//方法1
function 函数名(参数){
    函数代码;
}
//方法2
let 函数名 = function(参数){
	expression;
}
//箭头函数
let func = (arg1,arg2,...,argN) => expression;	//对expression求值同时返回计算结果。 
//多行箭头函数
let func = (arg1,arg2,...,argN) => {
	expression;
    return ...;	//如果我们使用了花括号，那我们需要一个显式的"return"
}
```

**函数命名：**

- `"get..."`——返回一个值；
- `"calc..."`——计算某些内容；
- `"create..."`——创建某些内容；
- `"check..."`——检查某些内容并返回Boolean值。

```javascript
//示例
showMessage(...)	//显示信息
getAge(...)	        //返回age(gets it somehow)
calcSum(...)		//计算求和并返回结果
createForm			//创建表单（通常会返回它）
checkPermission(...)//检查权限并返回true/false
```

#### 1-10 现代模式

**`”use strict"`**该命令处于脚本文件的顶部时，则整个脚本文件都将以“现代”模式进行工作。

**`"use strict"` **可以被放在函数体的开头，这样则可以只在该函数中启用严格模式，但通常人们会在整个脚本中启用严格模式。

#### 1-11 数据类型

- Number类型：代表整数和浮点数；`Infinity`代表数学概念中的无穷大；`NaN`代表一个计算错误，它是一个不正确的或者一个未定义的数学操作所得到的结果（`NaN`是粘性的；任何对`NaN`的进一步数学运算都会返回`NaN`；只有一个例外：`NaN**0`结果为`1`）。
- BigInt类型：用于表示任意长度的整数；可以通过将 `n` 附加到整数字段的末尾来创建 `BigInt` 值。
- String类型：JavaScript中的字符串必须被括在引号里；一个字符串可以包含零个（为空）、一个或多个字符。

双引号和单引号都是简单引用；反引号` `` `是**功能扩展**引号：它允许我们通过将变量和表达式包装在`${...}`中，来将他们嵌入到字符串中；`${...}` 内的表达式会被计算，计算结果会成为字符串的一部分;可以在 `${...}` 内放置任何东西：变量、算数表达式，或者其他一些更复杂的；反引号允许字符跨行。

**JavaScript中没有character类型！**

- Boolean类型（逻辑类型）：Boolean类型仅包含两个值`true`和`false`。
- null值：独立的类型。
- undefined值：独立的类型。
- Object类型：用于储存数据集合和更复杂的实体。

```javascript
//我们可以通过使用带有可选属性列表的花括号 {…} 来创建对象。一个属性就是一个键值对（“key: value”），其中键（key）是一个字符串（也叫做属性名），值（value）可以是任何值。
//我们可以用以下两种语法的任意一种来创建一个空的对象（“空柜子”）：
let user = new Object();//“构造函数”的语法
let user = {};//“字面量”的语法

let user = {			//一个对象
	name:"John",		//键“name”，值“John”
    age:30,				//键“age”，值“30”
    "likes birds":true,	//多词属性名必须加括号
    //列表中的最后一个属性应以逗号结尾：这叫做尾随逗号或悬挂逗号。
}

//读取文件的属性：使用点符号访问属性值
user.name;
user.age;
object.键；
//对于多词属性，点操作就不能用了。
//点符号要求key是有效的变量标识符，这意味着：不包含空格，不以数字开头，也不包含特殊字符（允许使用$和_)。
//使用方括号，可用于任何字符串。
user["likes birds"];
//方括号提供了一种可以通过任意表达式来获取属性名的方式——与文本字符串不同
let key="likes birds";
user[key]=true;

//属性的值可以是任意类型，让我们加个布尔类型
user.isAdmin = true;

//我们可以用delete操作符移除属性：
delect user.age;

//计算属性
//当创建一个对象时，我们可以再对象字面量中使用方括号。
let fruit = prompt("which fruit to buy?","apple");
let bag = {
    [fruit]:5;	//属性名是从fruit变量中得到的。例如：一个用户输入apple，bag将变为{apple：5}。
}
```

- Symbol类型：用于创建对象。

**typeof运算符：`typeof` 运算符返回参数的类型；对 `typeof x` 的调用会以字符串的形式返回数据类型。**

#### 1-12 类型转换

1. 字符串转换：alert()会自动将任何值都转换为字符串以进行显示；调用String()。

2. 数字型转换：在算术函数和表达式中会自动进行number类型转换；显式调用Number()。

   *number类型转换规则：*

   ![](https://uu--image.oss-cn-zhangjiakou.aliyuncs.com/number%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2%E8%A7%84%E5%88%99.jpg)

3.  布尔型转换：发生在逻辑运算中；调用Boolean(value)显式转换。

   *转换规则：*

   - 直观上为“空”的值（如`0`、空字符串、`null`、`undefined`和`NaN`）将变为`false`。
   - 其他值变成`true`。
   - 包含0的字符串`"0"`或包含空格的字符串` " "`（非空的字符串）都是`true`。



## 2.请和我互动（交互）

#### 2-1 输出

`document.write()`可用于直接向HTML输出流写内容。

1. ```html
   <script type="text/javascript">
   	document.write("I Love JavaScript!");	//	内容用""括起来，""里的内容直接输出。
   </script>
   ```

2. ```html
   <script type="text/javascript">
       var mystr="hello world!";
       document.write(mystr);	//直接写变量名，输出变量储存的内容。
   </script>
   ```

3. ```html
   <script type="text/javascript">
       var mystr="hello";
       document.write(mystr+"I Love JavaScript");	//多项内容之间用+号连接
   </script>
   ```

   *用二元运算符`+`连接字符串：只要任意一个运算元是字符串，那么另一个运算元也将被转化为字符串。**运算符按顺序工作。***
   
   ```javascript
   alert('1'+2+2);	//"122",不是"14"
   alert(2+2+'1');	//"41",不是"221"
   ```
   
4. ```html
   <script type="text/javascript">
       var mystr="hello";
       document.write(mystr+"<br />");	//输出HTML标签，并起作用，标签使用""括起来。
       document.write("JavaScript");
   </script>
   ```

5. ```html
   <script type="text/javascript">
       document.write("&nbsp;");	//输出空格
   </script>
   ```

#### 2-2 提示语

*我们在访问网站的时候，有时会突然弹出一个小窗口（**模态窗**），上面写着一段提示信息文字。如果你不点击“确定”，就不能对网页做任何操作，这个小窗口就是使用alert实现的。*

*altert弹出消息对话框（包含一个确定按钮）。*

**语法：**

```javascript
alert(字符串或变量);
```

#### 2-3 确认

**语法：**

```javascript
confirm(str);
```

**参数说明：**

```
str:在消息对话框中要显示的文本
返回值：Boolean值
```

**返回值：**

```
当用户点击“确定”按钮时，返回true
当用户点击“取消”按钮时，返回false
```

*消息对话框是排它的，即用户在点击对话框按钮前，不能进行任何其它操作。*

#### 2-4 提问

**语法：**

```javascript
promot(str1,[str2]);
```

**参数说明：**

```
str1:要显示在消息对话框中的文本，不可修改。
str2:文本框中的内容，可以修改。
```

*语法中的方括号`[...]`:表示该参数是可选的，不是必须的。*

**返回值：**

```
1.点击确定按钮，文本框中的内容将作为函数返回值
2.点击取消按钮，将返回null
```

#### 2-5 打开新窗口

**语法：**

```javascript
window.open([URL],[窗口名称],[参数字符串])
```

**参数说明：**

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

**参数表：**

![](https://uu--image.oss-cn-zhangjiakou.aliyuncs.com/%E5%8F%82%E6%95%B0%E8%A1%A8.jpg)

#### 2-6 关闭窗口

**语法：**

```javascript
window.close();		//关闭本窗口
//或
<窗口对象>.close;		//关闭指定的窗口
```

**such us:**

```html
<script type="text/javascript">
    var mywin=window.open('http://www.immoc.com');
    mywin.close();
</script>
```

*上面代码在打开新窗口的同时，关闭该窗口，看不到被打开的窗口。*

#### 2-7 数学运算

- 运算元：运算符应用的对象。有时候人们也称其为“参数”。
- 一元运算符：一个运算符对应的只有一个运算元。
- 二元运算符：一个运算符拥有两个运算元。
- 取余`%`：`a%b`的结果是`a`整除`b`的余数。
- 求幂`**`：`a**b`将`a`提升至`a`的`b`次幂（b可以是非整数）。
- 一元运算符的优先级大于二元运算符。
- “修改并赋值”运算符在大多数其他运算之后执行。
- 自增/自减运算符的优先级比绝大部分的算数运算符高。
- 严格相等运算符`===`在进行比较时不会做任何类型的转换。
- 严格不相等运算符`!==`

#### 2-8 运算符`+`

- 二元运算符`+`：连接字符串；
- 一元运算符`+`：数字转化（如果运算元不是数字，加号则会将其转化为数字）。

```javascript
//对数字无效
let x=1;
alert(+x);	//1

let y=-2;
alert(+y);	//-2

//转化非数字
alert(+true);	//1
alert(+"");	//0
```

#### 2-9 逻辑运算符

##### 2-9-1 或逻辑运算符`||`

**或运算寻找第一个真值：**

给定多个参与或运算的值：

```javascript
result=value1||value2||value3
```

- 从左到右依次计算操作数。

- 处理每一个操作数时，都将其转化为布尔值。如果结果是`true`，就停止计算，返回这个操作数的初始值。

- 如果所有的操作数都被计算过（也就是，转换结果都是`false`），则返回最后一个操作数。

  *返回的值是操作数的初始形式，不会做布尔转换。*

  *换句话说，一个或运算`||`的链，将返回第一个真值，如果不存在真值，就返回该链的最后一个值。*

  *对alert()调用没有返回值，或者说返回的是`undefined`。*

1. 获取变量列表或表达式中的第一个真值。

   ```javascript
   let firstName="";
   let lastName="";
   let nickName="SuperCoder";
   
   alert(firstName||lastName||nickName||"Anonymous");		//SuperCoder
   ```

2. 短路求值（Short-circuit evaluation)

```javascript
true||alert("not printed");
false||alert("printed");
```

*在第一行中，或运算符||在遇到true时立即停止运算，所以alert没有运行。*

*有时，人们利用这个特性，只在左侧的条件为假时才执行命令。*

##### 2-9-2 与逻辑运算符`&&`

**与运算寻找第一个假值：**

```javascript
result=value1&&value2&&value3；
```

- 从左到右依次计算操作数。
- 在处理每一个操作数时，都将其转化为布尔值。如果结果是`false`，就停止计算，并返回这个操作数的初始值。
- 如果所有的操作数都被计算过（例如都是真值），则返回最后一个操作数。

​		*换句话说，与运算返回第一个假值，如果没有假值就返回最后一个值。*

***与运算`&&`在或运算`||`之前进行：***与运算的优先级比或运算要高。

##### 2-9-3 非逻辑运算符`!`

1. 将操作数转化为布尔类型：`true/false`。
2. 返回相反的值。

*两个非运算`！！`有时候用来将某个值转化为布尔类型。*

*有一个略显冗长的方式也可以实现同样的效果——一个内建的`Boolean`函数。*

***非运算符！的优先级在所有逻辑运算符里面最高，所以它总是在&&和||之前执行。***

##### 2-9-4 空值合并运算符`??`

`a??b`的结果是：

- 如果a是已定义的，则结果为a；如果a不是已定义的，则结果为b。
- 换句话说，如果第一个参数不是`null/undefined`，则`??`返回第一个参数。否则，返回第二个参数。

*`??`与`||`的重要区别：*

*`||`返回第一个**真**值；`??`返回第一个**已定义的**值。*

*`||`运算符的优先级与`??`相同。*

*如果没有明确添加括号，不能将其与`||`或`&&`一起使用。*

#### 2-10 值的比较

- 比较结果为Boolean类型：所有比较运算符均返回布尔值。
- 当对不同类型的值进行比较时，JavaScript会首先将其转化为数字（number)再判定大小：对于布尔类型值，true会被转化为1、false转化为0。
- `==`不能区分出`0`和`false`；也同样无法区分空字符串和`false`。
- **严格相等运算符 `===` 在进行比较时不会做任何的类型转换。**
- 在非严格相等 `==` 下，`null` 和 `undefined` 相等且各自不等于任何其他的值。
- 在使用 `>` 或 `<` 进行比较时，需要注意变量可能为 `null/undefined` 的情况。比较好的方法是单独检查变量是否等于 `null/undefined`。

​		

## 3.认识DOM

#### 3-1 认识DOM

文档对象模型DOM（Document Object Model）定义访问和处理HTML文档的标准方法。DOM 将HTML文档呈现为带有元素、属性和文本的树结构（节点树）。

**将HTML代码分解为DOM节点层次图：**

![](https://uu--image.oss-cn-zhangjiakou.aliyuncs.com/DOM%E8%8A%82%E7%82%B9%E5%B1%82%E6%AC%A1%E5%9B%BE.jpg)

**HTML文档可以说由节点构成的集合，三种常见的DOM节点：**

1. **元素节点：**`<html>`、`<body>`、`<p>`等都是元素节点，即标签。
2. **文本节点：**向用户展示的内容。
3. **属性节点：**元素属性。

#### 3-2 通过ID获取元素

**语法：**

```javascript
document.getElementById("id");
```

**结果:null或[object HTMLParagraphElement]**

*获取的元素是一个对象，如果想对元素进行操作，我们要通过它的属性或方法。*

#### 3-3 innerHTML属性

inner HTML属性用于获取或替换HTML元素的内容。

**语法：**

```javascript
Object.innerHTML
```

- Object是获取的元素对象。
- inner HTML区分大小写。

#### 3-4 改变HTML样式

HTML DOM允许JavaScript改变HTML元素的样式。

**语法：**

```javascript
Object.style.property=new style;
```

#### 3-5 显示和隐藏

**语法：**

```javascript
Obeject.style.display:value
```

**value取值：**

![](https://uu--image.oss-cn-zhangjiakou.aliyuncs.com/value%E5%8F%96%E5%80%BC.jpg)

#### 3-6 控制类名

className属性设置或返回元素的class属性。

**语法：**

```javascript
object.className=classname;
```

**作用：**

1. 获取元素的class属性。
2. 为网页内的某个元素指定一个css样式来更改元素的外观。



## 4.内存

- js内存分为栈内存和堆内存。


- 7种原始值——直接储存到栈内存。

- 对象——储存到堆内存。

- 变量obj的本质是存储地址，所以称之为引用数据类型。