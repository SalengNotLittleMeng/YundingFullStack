# 第一章 JavaScript基础知识

```js
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charest="UTF-8">
	<meta http-equiv="X-UA-Compatible" Content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<title></title>
```



## 1.1 JavaScript入门

### 1.1.1JavaScript基本介绍

可以让网页呈现各种动态效果，只要有文本编辑器，就能编写JavaScript程序，可以用简单命令，完成一些基本操作。

- JavaScript 最开始是专门为浏览器设计的一门语言，但是现在也被用于很多其他的环境。
- JavaScript 作为被应用最广泛的浏览器语言，且与 HTML/CSS 完全集成，具有独特的地位。
- 有很多其他的语言可以被“编译”成 JavaScript，这些语言还提供了更多的功能。建议最好了解一下这些语言，至少在掌握了 JavaScript 之后大致的了解一下。

### 1.1.2 插入JS

把JavaScript代码写在`<script></script>`之间用以插入 HTML 网页。

~~[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e31ea8000149f406440218.jpg)](https://img.mukewang.com/52e31ea8000149f406440218.jpg)~~

`<script type="text/javascript">`表示在`<script>` `</script>`之间的是文本类型(text),javascript是为了告诉浏览器里面的文本是属于JavaScript语言。

### 1.1.3 引用JS外部文件

可以把HTML文件和JS代码分开,并单独创建一个JavaScript文件(简称JS文件),其文件后缀通常为.js，然后将JS代码直接写在JS文件中。

![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52898b400001d04005500266.jpg)

**注意:在JS文件中，不需要`<script>`标签,直接编写JavaScript代码就可以了。**

JS文件不能直接运行，需嵌入到HTML文件中执行，需在HTML中添加如下代码，就可将JS文件嵌入HTML文件中。

```
<script src="script.js"></script>
```

![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52898b6900018aeb05540284.jpg)

### 1.1.4 JS在页面中的位置

可以将JavaScript代码放在html文件中任何位置，但是我们一般放在网页的head或者body部分。
**放在`<head>`部分**
最常用的方式是在页面中head部分放置`<script>`元素，浏览器解析head部分就会执行这个代码，然后才解析页面的其余部分。
**放在`<body>`部分**
JavaScript代码在网页读取到该语句的时候就会执行。

[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52a6ad240001086506440600.jpg)](https://img.mukewang.com/52a6ad240001086506440600.jpg)

**注意:** javascript作为一种脚本语言可以放在html页面中任何位置，但是浏览器解释html时是按先后顺序的，所以前面的script就先被执行。比如进行页面显示初始化的js必须放在head里面，因为初始化都要求提前进行（如给页面body设置css等）；而如果是通过事件调用执行的function那么对位置没什么要求的。

### 1.1.5 语句和符号

JavaScript语句是发给浏览器的命令。这些命令的作用是告诉浏览器要做的事情。

**每一句JavaScript代码格式:**` 语句;`

例子：

```
<script type="text/javascript">
   alert("hello!");
</script>
```

例子中的`alert("hello!");`就是一个JavaScript语句。

一行的结束就被认定为语句的结束，通常在结尾加上一个分号`";"`来表示语句的结束。

**ps：**JS 中具有自动添加分号的机制，如果不写分号，解释器会自动添加

### 1.1.6 注释

**单行注释，在注释内容前加符号 “//”。**

```
<script type="text/javascript">
  document.write("单行注释使用'//'");  // 我是注释，该语句功能在网页中输出内容
</script>
```

**多行注释以"/\*"开始，以"\*/"结束。**

```
<script type="text/javascript">
   document.write("多行注释使用/*注释内容*/");
   /*
    多行注释
    养成书写注释的良好习惯
   */
</script>
```

**不支持注释嵌套！**会报错无法执行！

### 1.1.7 字面量和变量

**字面量**

— 字面量其实就是一个值，它所代表的含义就是它字面的意思

— 比如：1  2  3  4  100  “hello”  true null . . . . . .

— 在 JS 中所有的字面量都可以直接使用，但是直接使用字面量并不方便

**变量**

变量并不存储任何值，而是存储值的内存地址！

变量可以用来“存储”字面量

```js
var 变量名 //有时出错
let 变量名 //推荐方法
```

**变量名可以任意取名，但要遵循命名规则:**

  1.变量必须使用字母、下划线(_)或者美元符($)开始。

  2.然后可以使用任意多个英文字母、数字、下划线(_)或者美元符($)组成。

  3.不能使用JavaScript关键词与JavaScript保留字。

**变量要先声明再赋值，如下：**

```
(var/)let mychar;
mychar="javascript";
(var/)let mynum = 6;
```

**变量可以重复赋值，如下：**

```
(var/)let mychar;
mychar="javascript";
mychar="hello";
```

**注意:**

1、在JS中区分大小写，如变量mychar与myChar是不一样的，表示是两个变量。

2、 变量虽然也可以不声明，直接使用，但不规范，需要先声明，后使用。

**举例：**可以声明两个变量，然后将其中一个变量的数据拷贝到另一个变量。

```javascript
let hello = 'Hello world!';
let message;
// 将字符串 'Hello world' 从变量 hello 拷贝到 message

message = hello;
// 现在两个变量保存着相同的数据

alert(hello); // Hello world!
alert(message); // Hello world!
```

**声明两次会触发 error**

一个变量应该只被声明一次。

对同一个变量进行重复声明会触发 error：

```javascript
let message = "This";

// 重复 'let' 会导致 error
let message = "That"; // SyntaxError: 'message' has already been declared
```

**区分大小写**

命名为 `apple` 和 `APPLE` 的变量是不同的两个变量。

**允许非英文字母，但不推荐**

可以使用任何语言，包括西里尔字母（cyrillic letters）甚至是象形文字，就像这样：

```javascript
let имя = '...';
let 我 = '...';
```

从技术上讲，这样没问题。这样的命名是完全允许的，但是用英文进行变量命名是国际惯例。哪怕我们正在写一个很小的脚本，它也有可能会被使用很久。某个时候，来自其他国家的人可能会需要阅读它。

### 1.1.8 常量

使用 `const` 声明的变量称为“常量”。常量只赋值一次，重复赋值会报错：

```javascript
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // 错误，不能对常量重新赋值
```

大写形式的常数

一个普遍的做法是将常量用作别名，以便记住那些在执行之前就已知的难以记住的值。

使用大写字母和下划线来命名这些常量。

例如，以所谓的“web”（十六进制）格式为颜色声明常量：

```javascript
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ……当我们需要选择一个颜色
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

好处：

- `COLOR_ORANGE` 比 `"#FF7F00"` 更容易记忆。
- 比起 `COLOR_ORANGE` 而言，`"#FF7F00"` 更容易输错。
- 阅读代码时，`COLOR_ORANGE` 比 `#FF7F00` 更易懂。

作为一个“常数”，意味着值永远不变。但是有些常量在执行之前就已知了（比如红色的十六进制值），还有些在执行期间被“计算”出来，但初始赋值之后就不会改变。

例如：

```javascript
const pageLoadTime = /* 网页加载所需的时间 */;
```

`pageLoadTime` 的值在页面加载之前是未知的，所以采用常规命名。但是它仍然是个常量，因为赋值之后不会改变。

换句话说，大写命名的常量仅用作“硬编码（hard-coded）”值的别名。

**总结：**

- `let` — 现代的变量声明方式。
- `var` — 老旧的变量声明方式。一般情况下，不会再使用它。但是，要理解`var` 和 `let` 的微妙差别，以防需要它们。
- `const` — 类似于 `let`，但是变量的值无法被修改。

变量应当以一种容易理解变量内部是什么的方式进行命名。

### **补充：标识符**

在 JS 中，所有可以自主命名的内容，都可以认为是一个标识符。像 变量名 函数名 类名 ......

使用标识符需要遵循如下的命名规范：

1、标识符只能含有字母、数字、下划线、$，且不能以数字开头

2、标识符不能是 JS 中的关键字和保留字，也不建议使用内置的函数或类名作为变量名（例如 alert）

3、命名规范：

通常使用驼峰命名法：

首字母小写，每个单词开头大写

类名会使用大驼峰命名法：

首字母大写，每个单词开头大写

常量的字母会全部大写，例如 PI、MAX_LENGTH

https://img.mukewang.com/5419430400012de808370459.jpg)

## 1.2 数据类型

### 1.2.1 数据类型基本介绍

JavaScript 中有 8 种基本的数据类型（译注：7 种原始类型和 1 种引用类型）。

可以将任何类型的值存入变量。例如，一个变量可以在前一刻是个字符串，下一刻就存储一个数字：

```javascript
// 没有错误
let message = "hello";
message = 123456;
```

允许这种操作的编程语言，例如 JavaScript，被称为“动态类型”（dynamically typed）的编程语言，意思是虽然编程语言中有不同的数据类型，但是所定义的变量并不会在定义后，被限制为某一数据类型。

#### (1) Number类型

代表整数和浮点数，数字可以有加减乘除等操作，还包括所谓的“特殊数值（“special numeric values”）”：`Infinity`、`-Infinity` 和 `NaN`。**特殊的数值属于number类型但并不是数字**。

JS 中的数值并不是无限大的，当数值超过一定范围后会显示近似值。

在 JS 中进行一些精度比较高的运算时要十分注意

- `Infinity` 代表无穷大∞。是一个比任何数字都大的特殊值。

  可以通过除以 0 来得到：

  ```javascript
  alert( 1 / 0 ); // Infinity
  ```

  或者在代码中直接使用：

  ```javascript
  alert( Infinity ); // Infinity
  ```

- `NaN` 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果，比如：

  ```javascript
  alert( "not a number" / 2 ); // NaN，这样的除法是错误的
  ```

  `NaN` 是粘性的。任何对 `NaN` 的进一步数学运算都会返回 `NaN`：

  ```javascript
  alert( NaN + 1 ); // NaN
  alert( 3 * NaN ); // NaN
  alert( "not a number" / 2 - 1 ); // NaN
  ```

  所以，如果在数学表达式中有一个 `NaN`，会被传播到最终结果（只有一个例外：`NaN**0` 结果为 `1`）。

#### (2) BigInt类型

表示任意长度的整数。（范围非常大的整数用于密码学或微秒精度的时间戳。）

“number” 类型可以存储更大的整数（最多 `1.7976931348623157 * 10的308次方`），但超出安全整数范围 `±(2的53次方-1)` 会出现精度问题，因为并非所有数字都适合固定的 64 位存储。因此，可能存储的是“近似值”。例如，这两个数字（正好超出了安全整数范围）是相同的：

```javascript
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
```

可以通过将 `n` 附加到整数字段的末尾来创建 `BigInt` 值。

```javascript
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```

#### (3) String类型

在 JavaScript 中，有三种包含字符串的方式。

1. 双引号：`"Hello"`.

2. 单引号：`'Hello'`.

3. 反单引号（以下为模板字符串）：

   ```
   `Hello`
   ```

双引号和单引号都是“简单”引用，在 JavaScript 中两者几乎没有什么差别，二者都不能跨行使用。

反引号是 **功能扩展** 引号。它们允许我们通过将变量和表达式包装在 `${…}` 中，来将它们嵌入到字符串中，而且允许跨行使用。例如：

```javascript
let name = "John";

// 嵌入一个变量
alert( `Hello, ${name}!` ); // Hello, John!

// 嵌入一个表达式
alert( `the result is ${1 + 2}` ); // the result is 3
```

`${…}` 内的表达式会被计算，计算结果会成为字符串的一部分。可以在 `${…}` 内放置任何东西：诸如名为 `name` 的变量，或者诸如 `1 + 2` 的算数表达式，或者其他一些更复杂的。

转义字符 \

`\"` --> "

`\'` --> '

`\\` --> \

`\t` --> 制表符，相当于 Tab键 缩进 

`\n` --> 换行

#### (4) Boolean类型（布尔值）（逻辑类型）

使用 Boolen( ) 函数来将其他类型转换为布尔值

boolean 类型仅包含两个值：`true`和 `false`。

通常用于存储表示 yes 或 no 的值：`true` 意味着 “yes，正确”，`false` 意味着 “no，不正确”。

0、NaN、空串、null、undefined 会转换为 false，其余全转换为 true

比如：

```javascript
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
```

布尔值也可作为比较的结果：

```javascript
let isGreater = 4 > 1;

alert( isGreater ); // true（比较的结果是 "yes"）
```

#### (5) null值（空值）

JavaScript 中的 `null` 仅仅是一个代表“无”、“空”或“值未知”的特殊值。

空值只有一个 null。

用 typeof 检查一个空值时会返回 object （这是历史悠久的缺陷），使用 typeof 无法检查空值。

#### (6) undefined值（未定义）

`undefined` 的含义是 `未被赋值`。

如果一个变量已被声明，但未被赋值，那么它的值就是 `undefined`：

```javascript
let age;

alert(age); // 弹出 "undefined"
```

#### (7) Object类型和Symbol类型

`object`为非原始数据类型。

其他所有的数据类型都被称为“原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他），且七种原始类型一旦被创建就不可被修改。相反，`object` 则用于储存数据集合和更复杂的实体。

`symbol` 类型用于创建对象的唯一标识符。

#### (8) typeof 运算符

`typeof 运算符` 用来检查（变量储存地址对应的）值的类型，而不是变量的类型！

对 `typeof x` 的调用会以字符串的形式返回数据类型：

```javascript
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

最后三行可能需要额外的说明：

1. `Math` 是一个提供数学运算的内建 `object`。
2. `typeof null` 的结果为 `"object"`。这是官方承认的 `typeof` 的错误，这个问题来自于 JavaScript 语言的早期阶段，并为了兼容性而保留了下来。`null` 绝对不是一个 `object`。`null` 有自己的类型，它是一个特殊值。`typeof` 的行为在这里是错误的。
3. `typeof alert` 的结果是 `"function"`，因为 `alert` 在 JavaScript 语言中是一个函数。在 JavaScript 语言中没有一个特别的 “function” 类型。函数隶属于 `object` 类型。但是 `typeof` 会对函数区分对待，并返回 `"function"`。这也是来自于 JavaScript 语言早期的问题。从技术上讲，这种行为是不正确的，但在实际编程中却非常方便。

另一种语法：`typeof(x)`。它与 `typeof x` 相同。

`typeof` 是一个操作符，不是一个函数。这里的括号不是 `typeof` 的一部分。它是数学运算分组的括号。通常，这样的括号里包含的是一个数学表达式，从语法上讲，它们允许在 `typeof` 运算符和其参数之间不打空格，有些人喜欢这样的风格。

### 1.2.2 类型转换

无法实现直接转换，实质上是创建了新的类型值  

有三种常用的类型转换：转换为 string 类型、转换为 number 类型和转换为 boolean 类型。

**转换为字符串**

1、调用 toString( ) 方法将其他类型转换为字符串

- 调用xxx的yyy方法 ---> xxx.yyy( )
- 由于 null 和 undefined 中没有 toString( ) ,所以对这两个东西调用 toString( ) 时会报错

2、调用 String( ) 函数将其他类型转换为字符串

- 调用xxx函数 ---> xxx( )
- 原理：

​		对于拥有 toString( ) 方法的值，调用 String( ) 与其等价

​		对于 null ,则直接转换为 `"null"`

​		对于 undefined ,则直接转换为 `"undefined"`

3、隐式转换  +" "

**数字型转换**

1、进行算术操作时，比如，当把除法 `/` 用于非 number 类型：

```javascript
alert( "6" / "2" ); // 3, string 类型的值被自动转换成 number 类型后进行计算
```

2、`Number(value)` 进行显式转换。

```javascript
let str = "123"; alert(typeof str);//string 
let num = Number(str);//变成 number 类型 123 alert(typeof num);//number
```

数字型转换遵循以下规则：

| 值             | 变成……                                                       |
| :------------- | :----------------------------------------------------------- |
| `undefined`    | `NaN`                                                        |
| `null`         | `0`                                                          |
| `true / false` | `1 / 0`                                                      |
| `string`       | “按原样读取”字符串，两端的空白字符（空格、换行符 `\n`、制表符 `\t` 等）会被忽略。空字符串变成 `0`。转换出错则输出 `NaN`。 |

例子：

```javascript
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN（从字符串“读取”数字，读到 "z" 时出现错误）
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```

3、专门用来 将字符串转换为数值的两个方法

（1）parseInt( ) ——将一个字符串转换为一个整数

解析时，会自左向右读取一个字符串中所有的有效的整数

也可以使用parseInt( )对一个数字进行取整

（2）parseFloat( ) ——将一个字符串转换为浮点数 

解析时，会自左向右读取字符串中所有的有效的小数

4、隐式转换  +  

**布尔型转换** 

1、隐式转换 `!!value`

2、`Boolean(value)` 进行显式转换。

布尔型转换遵循以下规则：

| 值                                    | 变成……  |
| :------------------------------------ | :------ |
| `0`, `null`, `undefined`, `NaN`, `""` | `false` |
| 其他值                                | `true`  |

注意：

- 对 `undefined` 进行数字型转换时，输出结果为 `NaN`，而非 `0`。
- 对 `"0"` 和只有空格的字符串（比如：`" "`）进行布尔型转换时，输出结果为 `true`。

## 1.3 运算符

### 1.3.1术语：“一元运算符”，“二元运算符”，“运算元”

- **运算元** —— 运算符应用的对象。比如说乘法运算 `5 * 2`，有两个运算元：左运算元 `5` 和右运算元 `2`。有时候也称其为“参数”而不是“运算元”。

- 如果一个运算符对应的只有一个运算元，那么它是 **一元运算符**。比如说一元负号运算符`-`，它的作用是对数字进行正负转换

- 如果一个运算符拥有两个运算元，那么它是 **二元运算符**。减号存在二元运算符形式：

  ```javascript
  let x = 1, y = 3; alert( y - x ); // 2，二元运算符减号做减运算
  ```

### 1.3.2数学运算

支持以下数学运算：

- 加法 `+`,
- 减法 `-`,
- 乘法 `*`,
- 除法 `/`,
- 取余 `%`,
- 求幂 `**`.

#### 取余 %

取余运算符与百分数无关联，`a % b` 的结果是 `a` 整除 `b` 的 余数。

#### 求幂 **

求幂运算 `a ** b` 将 `a` 提升至 `a` 的 `b` 次幂。

在数学运算中将其表示为 a的b次方。

### 1.3.3用二元运算符 + 连接字符串

如果加号 `+` 被应用于字符串，它将合并（连接）各个字符串，例如：

```javascript
let s = "my" + "string"; 
alert(s); // mystring
```

注意：只要任意一个运算元是字符串，那么另一个运算元也将被转化为字符串。

举个例子：

```javascript
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
```

```javascript
alert(2 + 2 + '1' ); // "41"，不是 "221"
```

在这里，运算符是按顺序工作。第一个 `+` 将两个数字相加，所以返回 `4`，然后下一个 `+` 将字符串 `1` 加入其中，所以就是 `4 + '1' = '41'`。

```javascript
alert('1' + 2 + 2); // "122"，不是 "14"
```

这里，第一个操作数是一个字符串，所以编译器将其他两个操作数也视为了字符串。`2` 被与 `'1'` 连接到了一起，也就是像 `'1' + 2 = "12"` 然后 `"12" + 2 = "122"` 这样。

二元 `+` 是唯一一个以这种方式支持字符串的运算符。其他算术运算符只对数字起作用，并且总是将其运算元转换为数字。

下面是减法和除法运算的示例：

```javascript
alert( 6 - '2' ); // 4，将 '2' 转换为数字
alert( '6' / '2' ); // 3，将两个运算元都转换为数字
```

### 1.3.4数字转化，一元运算符 + 

加号 `+` 有两种形式：二元运算符，一元运算符

一元运算符加号 应用于单个值，对数字没有任何作用。但是如果运算元不是数字，加号 `+` 则会将其转化为数字。效果和 `Number(...)` 相同，但是更加简短。例如：

```javascript
// 对数字无效
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// 转化非数字
alert( +true ); // 1
alert( +"" );   // 0
```

### 1.3.5逻辑运算符

! 逻辑非

- ! 可以用来对一个值进行非运算

- 可以对一个布尔值进行取反操作

  true ---> false

  false ---> true

- 如果对一个非布尔值进行取反，它会先将其转化为布尔值然后再取反

&& 逻辑与

- 可以对两个值进行与运算
- 当&&左右都为true时，则返回true，否则返回false（全真则真，一假则假）
- 如果第一个值为false，则不继续看第二个，直接返回第一个值；如果第一个值为true，则返回第二个值（与运算是找false的）
- 对于非布尔值进行与运算，它会转换为布尔值然后运算，但最终会返回原值

|| 逻辑或

- 可以对两个值进行或运算
- 当||左右有true时，则返回true，否则返回false（一真则真，全假则假）
- 如果第一个值为true，则不看第二个，直接返回第一个；如果第一个值为false，则返回第二个

### 1.3.6关系运算符

关系运算符用来检查两个值之间的关系是否成立：成立返回true，不成立返回false

`>` 、`>=`、`<`、`<=`

**注意：**

1、当对非数值进行关系运算时，它会先将前转换为数值然后再比较

```js
let result = "1" > false //true 这里将字符串"1"转换为1，将false转换为0
```

2、当当关系运算符的两端是两个字符串，它不会将字符串转换为数值，而是**逐位**的比较字符的Unicode编码，利用这个特点可以对字符串按照字母排序

```js
result = "a" < "b" //true
result = "abc" < "b" //true 两个字符串逐位比较字符，a编码小于b，返回结果，后面不再比较
result = "12" < "2" //true 两个字符串逐位比较字符，1小于2，返回结果，后面不再比较
```

3、比较两个字符串格式的数字时一定要进行类型转换（只要两个对象有其一转换成数字型即可比较数字大小）

```js
result = +"12" > "2" //true
result = +"12" > +"2" //true
```

### 1.3.7相等运算符

== 相等运算符，用来比较两个值是否相等

- 使用相等运算符比较两个不同类型的值时，它会将其转换为相同的类型（通常转换为数值）然后再比较，类型转换后值相同会返回true

  ```js
  let result = 1 == "1" //true
  result = true == "1" //true
  ```

- null和undefined进行相等比较时会返回true

  ```js
  result = null == undefined //true
  ```

- NaN不和任何值相等，包括它自身

  ```js
  result = NaN == NaN //false
  ```

=== 全等运算符，用来比较两个值是否全等

- 它不会进行自动的类型转换，如果两个值的类型不同直接返回false

  ```js
  result = 1 === "1" //false
  ```

- null和undefined进行全等比较时会返回false

!=  不等，用来检查两个值是否不相等

- 会自动的进行类型转换

!==  不全等，比较两个值是否不全等

- 不会自动地进行类型转换

### 1.3.8条件运算符

`条件表达式 ? 表达式1 : 表达式2`

- 执行顺序：

  条件运算符在执行时，会先对条件表达式进行求值判断，

  ​	如果结果为true，则执行表达式1

  ​	如果结果为false，则执行表达式2

```js
let a = 100;
let b = 200;
let max = a > b ? a : b;
```

### 1.3.9运算符的优先级

可以通过优先级的表格来查询运算符优先级http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

在表格中位置越靠上的优先级越高，优先级越高越先执行，优先级一样自左向右执行

优先级不需要记忆，因为（）拥有最高的优先级，使用运算符时，如果遇到拿不准的，可以直接通过（）来改变优先级

## 1.4 流程控制

流程控制语句可以用来改变程序执行的顺序

1、条件判断语句

2、条件分支语句

3、循环语句

### 1.4.1代码块

使用 { } 来创建代码块，代码块可以用来对代码进行分析，同一个代码块中的代码，就是同一组代码，要么都执行要么都不执行

let 和 var

- 在 JS 中，使用 let 声明的变量具有块作用域，在代码块中声明的变量无法在代码块的外部访问
- 使用var声明的变量，不具有块作用域

### 1.4.2 if语句

语法：

`if(条件表达式){`

`语句`

`}`

执行流程：

if语句在执行时会先对if后的条件表达式进行求值判断，

​	结果为true，则执行if后的语句

​	结果为false，则不执行

​	如果 if 后的条件表达式不是布尔值，会转换为布尔值然后再运算

### 1.4.3 if...else语句

**语法**:

```js
if(条件)
{ 条件成立时执行的代码 }
else
{ 条件不成立时执行的代码 }
```

### 1.4.4 switch语句

语法：

```js
switch(表达式){
	case 表达式:
		代码...
		break //根据实际情况决定执不执行后面的代码
	case 表达式:
		代码...
        break
	case 表达式:
		代码...
        break
    default: //default语句无论写在什么位置，都优先执行前面的case语句
    	代码...
        break
}
```

执行的流程：

switch 语句在执行时，会依次将 switch 后的表达式和 case 后的表达式进行**全等**比较

​	如果比较结果为 true ，则自当前 case 处开始执行代码

​	如果比较结果为 false ，则继续比较其他 case 后的表达式，直到找到 true 为止

​	如果所有的比较结果都是 false ，则执行 default 后的语句

**注意：**当比较结果为 true 时，会从当前 case 处开始执行代码，也就是说 case 是代码执行的起始位置，这就意味着只要是当前 case 后的代码，都会执行 

```js
let num = +prompt('请输入一个数字')
switch(num){
    case 1:
        alert('壹')
    case 2:
        alert('贰')
    case 3:
        alert('叁')
} //当输入1时，结果为 壹 贰 叁；当输入2时，结果为 贰 叁
```

---> 可以使用 break 来避免执行其他的 case

```js
let num = +prompt('请输入一个数字')
switch(num){
    case 1:
        alert('壹')
        break
    case 2:
        alert('贰')
        break
    case 3:
        alert('叁')
        break
}
```

### 1.4.5 循环语句

三种：while语句、do-while语句、for语句

通常写一个循环，要有三个条件：

1、初始化表达式（初始化变量）

2、条件表达式（设置循环运行的条件）

3、更新表达式（修改初始化变量）

**while语句**

语法：

```js
while(条件表达式){
    语句...
}
```

当一个循环的条件表达式恒为 true 时，这个循环就是一个死循环，会一直执行

```js
let a = 0; //初始化表达式
while(a < 5){ //条件表达式
    console.log(a);
    a++; //更新表达式
}
```

**do-while语句**

语法：

```js
do{
    语句...
}while(条件表达式)
```

执行顺序：

语句执行时，会先执行 do 后的循环体，执行完毕后，会对 while 后的条件表达式进行判断

​	如果为false，则循环终止

​	如果为true，则继续执行循环体，以此类推

**ps:** 和 do-while 的区别

while语句是先判断再执行，do-while语句是先执行再判断

do-while语句可以确保循环至少执行一次

**for循环**

语法：

```js
for(初始化表达式；条件表达式；更新表达式){
    语句...
}
```

for循环中的三个表达式可以任意省略。

使用 let 在 for 循环的（）中声明的变量是局部变量，只能在 for 循环内部访问；

使用 var 在 for 循环的（）中声明的变量可以在 for 循环的外部访问。

**总结：创建死循环的方式**

```js
while(1){}
for(;;){}
```

### 1.4.6 break和continue

**break**

break用来终止switch和循环语句。break执行后，当前的switch或循环会立刻停止。

break会终止离它最近的循环（即循环后续不会再进行判断输出）

**continue**

continue用来跳过当次循环（表示只影响这一次循环，循环后续继续进行判断输出）

## 1.5对象

### 1.5.1 对象

对象是 JS 中的一种复合数据，它相当于一个容器，在对象中可以存储多个各种不同类型数据

```js
let obj = Object() //创建对象
```

对象中存储的数据，称为属性

向对象中添加属性：   对象.属性名 = 属性值

读取对象中的属性：   对象.属性名

**ps:**  如果读取的是一个对象中没有的属性，不会报错而是返回undefined

修改属性：   对象.属性名 = 新的属性值

删除属性：   delete 对象.属性名

### 1.5.2 对象的属性

属性名

- 通常属性名就是一个字符串，所以属性名可以是任何值，没有什么特殊要求

  但是如果属性名太特殊，不能直接使用，需要使用 [ ] 来设置

  ```js
  obj["123@#@!3#"] = "呵呵" //不建议这样起名
  ```

  虽然如此，还是强烈建议属性名也按照标识符的规范命名

- 也可以使用符号（symbol）作为属性名，来添加属性。获取这种属性时，也必须使用symbol

  使用mySymbol添加的属性，通常是那些不希望被外界访问的属性

  ```js
  let mySymbol = Symbol(); //mySymbol相当于一把钥匙
  obj[mySymbol] = "通过symbol添加的属性"；
  console.log(obj[mySymbol]);
  ```

- 使用 [ ] 去操作属性时，可以使用变量，但不要给变量加引号

  ```js
  let str = "address"；
  obj[str] = "花果山"；//等价于 obj["address"] = "花果山"
  obj.str = "哈哈"；//使用.的形式添加属性时，不能使用变量，这里.后面是什么，属性名就是什么
  ```

属性值：可以是任意的数据类型，也可以是一个对象（套娃）

使用 typeof 检查一个对象时，会返回 object

in 运算符

- 用来检查对象中是否含有某个属性

- 语法：   "属性名" in obj

- 如果有返回true，没有返回false

  ```js
  obj.name = "孙悟空"；
  console.log("name" in obj); //true
  console.log("hehe" in obj); //false
  ```

### 1.5.3对象字面量

对象字面量

- 可以直接使用 { } 来创建对象

  ```js
  let obj = Object();
  obj.name = "hehe";
  //两种方法等效，第二种更简便
  let obj2 = {};
  obj2.name = "hehe"
  ```

- 使用 { } 所创建的对象，可以直接向对象中添加属性

- 语法：

  `{`

  ​	`属性名：属性值，`

  ​	`[属性名]：属性值，`

  `}`

  ```js
  let mySymbol = Symbol();
  let obj2 = {
      name:"孙悟空",
      age:18，
  	["gender"]:"男"，
      [mySymbol]:"特殊的属性"
  }
  ```

### 1.5.4枚举属性

枚举属性，指将对象中所有的属性全部获取

for-in 语句

- 语法：

  `for(let propName in 对象){`

  ​	`语句...`

  `}`

- for-in 的循环会执行多次，有几个属性就会执行几次，每次执行时，都会有一个属性名赋值给所定义的变量

  ```js
  let obj = {
      name:"孙悟空",
      age:18,
      gender:"男",
      address:"花果山",
      [Symbol()]:"测试的属性" //符号添加的属性是不能枚举的
  }
  
  for(let propName in obj){
      console.log(propName,obj[propName]) //不能写obj.propName因为propName是变量而不是属性名
  } //返回 name 孙悟空
  		age 18
  		gender 男
          address 花果山
  ```

### 1.5.5可变类型

原始值都属于不可变类型，一旦创建就无法修改。在内存中不会创建重复的原始值

对象属于可变类型，对象创建完成后，可以任意地添加删除修改对象中的属性

```js
let a = 10;
let b = 10;
a = 12;//当为一个变量重新赋值时，绝对不会影响其他变量
```

**注意：**

1、当对两个对象进行相等或全等比较时，比较的是对象的内存地址

2、如果有两个变量同时指向一个对象，通过一个变量修改对象时，对另外一个变量也会产生影响

```js
let obj = Object();
obj.name = "孙悟空";
obj.age = 18;
let obj4 = obj;
obj4.name = "猪八戒";//obj的name属性值也被改为猪八戒。
//当修改一个对象时，所有指向该对象的变量都会受到影响
```

### 1.5.6改变量和改对象

**修改对象**时，如果有其他变量指向该对象，则所有指向该对象的变量都会受到影响

**修改变量**时，只会影响当前的变量

在使用变量存储对象时，很容易因为改变变量指向的对象，提高代码的复杂度。所以通常情况下，声明存储对象的变量时会使用const

**注意：**const只是禁止变量被重新赋值，对对象的修改没有任何影响

### 1.5.7 方法

当一个对象的属性指向一个函数，则称这个函数是该对象的方法，调用函数就称为调用对象的方法

函数也可以成为一个对象的属性

```js
obj.sayHello = function(){
    alert("hello")
} //调用obj的sayHello方法
```

## 1.6 函数

**ps：**求和函数 sum(a,b) 指的是求a+b的值

### 1.6.1 认识函数

函数也是一个对象，它具有其他对象所有的功能。

**基本语法：**

```
function 函数名()
{
     语句...;
}
```

编写一个实现两数相加的简单函数,并给函数起个有意义的名字：“add2”，代码如下：

```
function add2(){
   let sum = 3 + 2;
   alert(sum);
}
```

**函数调用:**

函数定义好后，是不能自动执行的，所以需调用它,只需直接在需要的位置写函数就ok了,**代码如下:**

![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/5419430400012de808370459.jpg)

使用typeof检查函数对象时会返回function

### 1.6.2函数的创建方式

1、函数声明

```js
function 函数名（[参数]）{
	语句...
}
```

2、函数表达式

```js
const 变量 = function([参数]){
    语句...
}
```

3、箭头函数

当箭头函数{ }内只有一条语句时，可以省略{ }

```js
const 变量 = ([参数]) => {
    语句...}
```

### 1.6.3参数

形式参数

- 在定义函数时，可以在函数中指定数量不等的形式参数（形参）。

- 在函数中定义参数，就相当于在函数内部声明了对应的变量但是没有赋值

实际参数

- 在调用函数时，可以在函数的（）传递数量不等的实参

- 实参会赋值给对应的形参

- 参数：

  1、如果实参和形参数量相同，则对应的实参赋值给对应的形参

  2、如果实参多于形参，则多余的实参不会使用

  3、如果形参多于实参，则多余的形参为undefined

- 参数的类型

  JS 中不会检查参数的类型，可以传递任何类型的值作为参数。这就需要书写代码时保证用户不会输入错误类型，可能用到更多判断、转换类型的代码。

### 1.6.4箭头函数的参数

当箭头函数中只有一个参数时，可以省略 ( )

```js
const fn = a => {
    console.log("a =",a);
}
```

定义参数时，可以为参数指定默认值

默认值，会在没有对应实参时生效

```js
const fn = (a=10,b=20,c=30) => {
    console.log("a =",)
}
```

### 1.6.5 使用对象作为参数

对象可以作为实参传递。传递实参时，传递的并不是变量本身，而是变量中存储的值

```js
function fn(a){
    console.log(a)
}
let obj = {name:"孙悟空"}
fn(obj) //打印结果 name:"孙悟空"
```

```js
function fn(a){
    console.log(a.name)
}
let obj = {name:"孙悟空"}
fn(obj) //打印结果 孙悟空
```

函数每次调用，都会重新创建默认值

### 1.6.6函数作为参数

在 JS 中，函数也是一个对象（一等函数）。别的对象能做的事情，函数也可以

```js
function fn(a){
    console.log("a =",a)
}

let obj = {name:"孙悟空"}

functoin fn2(){
    console.log("我是fn2")
}

fn(fn2) //写法一：这里把函数fn2()当作参数传进fn()里

fn(function(){
    console.log("我是匿名函数~")
}) //写法二：匿名函数直接写进fn()中

fn(() => console.log("我是箭头函数")) //写法三：箭头函数
```

### 1.6.7函数的返回值

在函数中，可以通过 return 关键字来指定函数的返回值。返回值就是函数的执行结果，函数调用完毕返回值便会作为结果返回。任何值都可以作为返回值使用（包括对象和函数之类）

如果return后不跟任何值，则相当于返回undefined；如果不写return，那么函数的返回值依然是undefined

return一执行函数立即结束（类似于循环中的break）

### 1.6.8箭头函数的返回值

箭头函数的返回值可以直接写在箭头后（返回值为单一简洁语句时用）

```js
const sum = (a,b) => a+b
```

如果直接在箭头后设置对象字面量为返回值时，对象字面量必须使用（）括起来

```js
const fn = () => ({name:"孙悟空"}) //{name:"孙悟空"}

const fn = () => {name:"孙悟空"} //undefined 这里无法识别{}整体到底是对象还是代码块，默认为代码块，无法执行

let result = fn()
console.log(result) 
```

### 1.6.9作用域

作用域指的是一个变量的可见区域。作用域有全局作用域和局部作用域。

全局作用域

- 全局作用域在网页运行时创建，在网页关闭时消除
- 所有直接编写到script标签中的代码都位于全局作用域中
- 全局作用域中的变量是全局变量，可以在任意位置被访问

局部作用域

- 块作用域
  - 块作用域是一种局部作用域
  - 块作用域在代码块执行时创建，代码块执行完毕他就销毁
  - 在块作用域中声明的变量是局部变量，只能在块内部访问，外部无法访问

- 函数作用域

  - 函数作用域也是一种局部作用域

  - 在函数**调用时**产生，调用结束后销毁

  - 函数每次调用都会产生一个全新的函数作用域

  - 在函数内部定义的变量是局部变量，只能在函数内部访问，外部无法访问

    ```js
    function fn(){
        let a = "fn中的变量a"
        console.log(a)
    }
    fn()
    console.log(a) //会报错
    ```

### 1.6.10作用域链

当我们使用 一个变量时，JS 解释器会优先在当前作用域中寻找变量，如果找到了则直接使用，如果没找到，则取上一层作用域中寻找，找到了则使用，如果没找到，则继续去上一层寻找，以此类推...如果一直到全局作用域都没找到，则报错 xxx is not defined

### 1.6.11 window对象

在浏览器中，浏览器为我们提供了一个window对象，可以直接访问。window对象代表的是浏览器窗口，通过该对象可以对浏览器窗口进行各种操作，除此之外window对象还负责存储 JS 中的内置对象和浏览器的宿主对象。

window对象的属性可以通过window对象访问，也可以直接访问。函数就可以认为是window对象的方法

```js
String()
Number() //以上两种都是内置对象，可以直接调用无需声明

alert(123) <=> window.alert(123)
console.log("hh") <=> window.console.log("hh") //以上两者都是浏览器的宿主对象
```

向window对象中添加的属性会自动成为全局变量

```js
window.a = 10
```

var 用来声明变量，作用和 let 相同，但是 var 不具有块作用域。

在全局中使用 var 声明的变量，都会作为 window 对象的属性保存；使用 function 声明的函数，都会作为 window 的方法保存；使用 let 声明的变量不会存储在window，而是存在一个秘密的小地方（无法访问）

```js
let c = 33
console.log(window.c) //undefined
```

var虽然没有块作用域，但有函数作用域

```js
function fn(){
    var d = 10 //这里的d属于函数作用域
}
fn()
console.log(d) //undefined 不能全局调用
```

在局部作用域中，如果没有使用var或let声明变量，则变量会自动成为window对象的属性，也就是全局变量

```js
function fn(){
    d = 10 //这种操作很不好，一定要声明
}
fn()
console.log(d) //10 在全局变量中访问到了d
```

### 1.6.12 提升

变量的提升：使用var声明的变量，它会在所有代码执行前被**声明**（注意这里仅仅指被声明，不包括被赋值），所以可以在变量声明前就访问变量

函数的提升：使用**函数声明**（一定用function声明）创建的函数，会在其他代码执行前被创建，所以可以在函数声明前调用函数

```js
fn()
function fn(){
    alert("我是fn函数~")
}
```

let声明的变量实际也会提升，但是在赋值之前禁止访问该变量

# 第二章 常用互动方法

## 2.1 输出内容（document.write）

语法：`document.write()`

**第一种:输出内容用""括起，直接输出""号内的内容。**

```js
<script type="text/javascript">
  document.write("I love JavaScript！"); //内容用""括起来，""里的内容直接输出。
</script>
```

**第二种:通过变量，输出内容**

```js
<script type="text/javascript">
  let mystr="hello world!";
  document.write(mystr);  //直接写变量名，输出变量存储的内容。
</script>
```

**第三种：输出多项内容，内容之间用+号连接。**

```js
<script type="text/javascript">
  let mystr="hello";
  document.write(mystr+"I love JavaScript"); //多项内容之间用+号连接
</script>
```

**第四种:输出HTML标签，并起作用，标签使用""括起来。**

```js
<script type="text/javascript">
  let mystr="hello";
document.write(mystr+"<br>");//输出hello后，输出一个换行符
  document.write("JavaScript");
</script>
```

**关于JS输出空格问题，如果想要实现输出空格，可以使用特殊字符`&nbsp`实现**

```js
<script type="text/javascript">
  document.write("&nbsp;");//输出空格
</script>
```

## 2.2 警告（alert 消息对话框）

在访问网站的时候，有时会突然弹出一个小窗口，上面写着一段提示信息文字。如果不点击“确定”，就不能对网页做任何操作，这个小窗口就是使用alert实现的。

**语法:**

```js
alert(字符串或变量);  
```

**看下面的代码:**

```js
<script type="text/javascript">
   let mynum = 30;
   alert("hello!");
   alert(mynum);
</script>
```

**注:**alert弹出消息对话框(包含一个确定按钮)。

**结果:按顺序弹出消息框**

**[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e362430001bdd204850354.jpg)](https://img.mukewang.com/52e362430001bdd204850354.jpg)**

[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e362850001024d04840353.jpg)](https://img.mukewang.com/52e362850001024d04840353.jpg)

**注意:**

1、在点击对话框"确定"按钮前，不能进行任何其它操作。

2、消息对话框通常可以用于调试程序。

3、alert输出内容，可以是字符串或变量，与document.write 相似。

## 2.3 确认（confirm 消息对话框）

**语法:**

```js
confirm(str);
```

**参数说明:**

```js
str：在消息对话框中要显示的文本
返回值: Boolean值
```

**返回值:**

```js
当用户点击"确定"按钮时，返回true
当用户点击"取消"按钮时，返回false
```

**注:** **通过返回值可以判断用户点击了什么按钮**

看下面的代码:

```js
<script type="text/javascript">
    let mymessage=confirm("你喜欢JavaScript吗?");
    if(mymessage==true)
    {   document.write("很好,加油!");   }
    else
    {  document.write("JS功能强大，要学习噢!");   }
</script>
```

结果:

![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e35bc60001f01a04230353.jpg)

**注: 消息对话框是排它的，即用户在点击对话框按钮前，不能进行任何其它操作。**

## 2.4 提问（prompt 消息对话框）

**`prompt`**弹出消息对话框,通常用于询问一些需要与用户交互的信息。弹出消息对话框（包含一个确定按钮、取消按钮与一个文本输入框）。

**语法:**

```js
prompt(str1, str2);
```

**参数说明：**

```js
str1: 要显示在消息对话框中的文本，不可修改
str2：文本框中的内容，可以修改
```

**返回值:**

```js
1. 点击确定按钮，文本框中的内容将作为函数返回值
2. 点击取消按钮，将返回null
```

看看下面代码:

```js
let myname=prompt("请输入你的姓名:");
if(myname!=null)
  {   alert("你好"+myname); }
else
  {  alert("你好 my friend.");  }
```

**结果:**

**[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e360780001ede107090353.jpg)](https://img.mukewang.com/52e360780001ede107090353.jpg)**

**注:在用户点击对话框的按钮前，不能进行任何其它操作。**

## 2.5 打开新窗口（window.open）

open() 方法可以查找一个已经存在或者新建的浏览器窗口。

**语法：**

```js
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
    4.name 不能包含有空格。

参数字符串：可选参数，设置窗口参数，各参数用逗号隔开。
```

**参数表:**

**[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e3677900013d6a05020261.jpg)](https://img.mukewang.com/52e3677900013d6a05020261.jpg)**

例如:打开`http://www.imooc.com`网站，大小为300px * 200px，无菜单，无工具栏，无状态栏，有滚动条窗口：

```js
<script type="text/javascript"> window.open('http://www.imooc.com','_blank','width=300,height=200,menubar=no,toolbar=no, status=no,scrollbars=yes')
</script>
```

**注意：**运行结果考虑浏览器兼容问题。

## 2.6 关闭窗口（window.close）

close()关闭窗口

**用法：**

```js
window.close();   //关闭本窗口
```

或

```js
<窗口对象>.close();   //关闭指定的窗口
```

例如:关闭新建的窗口。

```js
<script type="text/javascript">
   let mywin=window.open('http://www.imooc.com'); //将新打的窗口对象，存储在变量mywin中
   mywin.close();
</script>
```

**注意:上面代码在打开新窗口的同时，关闭该窗口，看不到被打开的窗口。**

# 第三章 DOM操作

## 3.1 认识DOM

文档对象模型DOM（Document Object Model）定义访问和处理HTML文档的标准方法。DOM 将HTML文档呈现为带有元素、属性和文本的树结构（节点树）。

**HTML文档可以说由节点构成的集合，三种常见的DOM节点:**

**1. 元素节点：**`<html>`、`<body>`、`<p>`等都是元素节点，即标签。

**2. 文本节点:**向用户展示的内容，如`<li>...</li>`中的JavaScript、DOM、CSS等文本。

**3. 属性节点:**元素属性，如`<a>`标签的链接属性`href="http://www.imooc.com"`

例子：

```
<a href="http://www.imooc.com">JavaScript DOM</a>
```

[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e4bdb80001064c04480196.jpg)](https://img.mukewang.com/52e4bdb80001064c04480196.jpg)

## 3.2 通过ID获取元素

在网页中，通过id先找到标签，然后进行操作。

**语法:**

```js
document.getElementById("id") 
```

例子:

**[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e4c5950001054207900423.jpg)](https://img.mukewang.com/52e4c5950001054207900423.jpg)**

**结果:null或[object HTMLParagraphElement]，要想获取p标签里的文字内容，需要在document.write()括号内最元素后加.innerHTML**

**[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e4c6080001734c03800275.jpg)](https://img.mukewang.com/52e4c6080001734c03800275.jpg)**

注:获取的元素是一个对象，如想对元素进行操作，要通过它的属性或方法。

## 3.3 innerHTML 属性

用于获取或替换 HTML 元素的内容。

**语法:**

```js
Object.innerHTML
```

**注意:**

1.Object是获取的元素对象，如通过document.getElementById("ID")获取的元素。

2.注意书写，innerHTML区分大小写。

**通过id="con"获取`<p>` 元素，并将元素的内容输出和改变元素内容，代码如下:**

**[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e4cd080001f01507220418.jpg)](https://img.mukewang.com/52e4cd080001f01507220418.jpg)**

**结果:**

**[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e4cb5c000187ce03740251.jpg)](https://img.mukewang.com/52e4cb5c000187ce03740251.jpg)**

## 3.4 改变 HTML 样式

**语法:**

```js
Object.style.property=new style;
```

**注意:**Object是获取的元素对象，如通过document.getElementById("id")获取的元素。

**基本属性表（property）:**

**[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e4d4240001dd6c04850229.jpg)](https://img.mukewang.com/52e4d4240001dd6c04850229.jpg)**

**注意:**该表只是一小部分CSS样式属性，其它样式也可以通过该方法设置和修改。

**例子：**

改变 `<p> `元素的样式，将颜色改为红色，字号改为20,背景颜色改为蓝：

```js
<p id="pcon">Hello World!</p>
<script>
   let mychar = document.getElementById("pcon");
   mychar.style.color="red";
   mychar.style.fontSize="20";
   mychar.style.backgroundColor ="blue";
</script>
```

**结果:**

[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e4d6ae000177d203770253.jpg)](https://img.mukewang.com/52e4d6ae000177d203770253.jpg)

## 3.5 显示和隐藏（display属性）

**语法：**

```js
Object.style.display = value
```

**注意:**Object是获取的元素对象，如通过document.getElementById("id")获取的元素。

**value取值:**

**[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e4dba5000179da04110095.jpg)](https://img.mukewang.com/52e4dba5000179da04110095.jpg)**

例子：

**[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e4dcf50001bead09310689.jpg)](https://img.mukewang.com/52e4dcf50001bead09310689.jpg)**

## 3.6 控制类名（className 属性）

className 属性设置或返回元素的class 属性。

**语法：**

```js
object.className = classname
```

**作用:**

1、获取元素的class 属性

2、为网页内的某个元素指定一个css样式来更改该元素的外观

例子，**获得` <p>` 元素的 class 属性和改变className：**

[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e4e28c0001c97f07980838.jpg)](https://img.mukewang.com/52e4e28c0001c97f07980838.jpg)

**结果:**

**[![img](https://yayabucket.oss-cn-wulanchabu.aliyuncs.com/52e4e711000135d903810270.jpg)](https://img.mukewang.com/52e4e711000135d903810270.jpg)** 