### 如何插入JS

- 可以使用<script>标签将 JavaScript 程序插入到 HTML 文档的任何位置。
- `type` 和 `language` 特性（attribute）不是必需的。
- 外部的脚本可以通过在<head></head>中写入`<script src="path/to/script.js"><script>`的方式插入。注意：一个单独的<script>标签不能同时有 `src` 特性和内部包裹的代码。**如果设置了 `src` 特性，`script` 标签内容将会被忽略。**
 ### 基本语句

1. **每一句JavaScript代码格式:**` 语句;` 。一行的结束就被认定为语句的结束，通常在结尾加上一个分号`";"`来表示语句的结束。

2.  **单行注释，在注释内容前加符号 “//”。**  **多行注释以"/\*"开始，以"\*/"结束。** 

3. **定义变量使用关键字var或let,语法如下：**

```
var 变量名
let 变量名
```

 **变量名(标识符：变量名、函数名、类名...)可以任意取名，但要遵循命名规则:**

 1.变量必须使用字母、下划线(_)或者美元符($)开始,不能以数字开头。

 2.然后可以使用任意多个英文字母、数字、下划线(_)或者美元符($)组成。

 3.不能使用JavaScript关键词与JavaScript保留字。

 **变量要先声明再赋值，如下：**

   ```javascript
var mychar;
mychar="javascript";
var mynum = 6;
   ```
**变量可以重复赋值，如下：**

   ```javascript
var mychar;
mychar="javascript";
mychar="hello";
   ```
   **注意:**

   \1. 在JS中区分大小写，如变量mychar与myChar是不一样的，表示是两个变量。

   \2. 变量虽然也可以不声明，直接使用，但不规范，需要先声明，后使用。

   \3.变量中不存储任何值，而是存储值的内存地址。 

4. **常量**：用**const**进行声明，不能重复赋值。一般取名时采用**大写字母**



### 数据类型

指的是变量中储存的值的类型，而不是变量本身的类型，变量本身没有类型。

原始值在JS中是不可变类型，一旦创建就不能修改。

JavaScript 中有八种基本的数据类型（译注：前七种为基本数据类型，也称为原始数据类型，而 `object` 为复杂数据类型）。

- 七种原始数据类型：
  - `number` 用于任何类型的数字：整数或浮点数，在 `±(253-1)` 范围内的整数。
  - `bigint` 用于任意长度的整数。
  - `string` 用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。
  - `boolean` 用于 `true` 和 `false`。
  - `null` 用于未知的值 —— 只有一个 `null` 值的独立类型。
  - `undefined` 用于未定义的值 —— 只有一个 `undefined` 值的独立类型。
  - `symbol` 用于唯一的标识符。
- 以及一种非原始数据类型：
  - `object` 用于更复杂的数据结构。



**typeof运算符**用来检查不同值的类型，根据不同的值返回不同的结果，例如：

```javascript
let a=10;
console.log(typeof a); // number
```

- 通常用作 `typeof x`，但 `typeof(x)` 也可行。
- 以字符串的形式返回类型名称，例如 `"string"`。
- `typeof null` 会返回 `"object"` —— 这是 JavaScript 编程语言的一个错误，实际上它并不是一个 `object`。



#### number

*umber* 类型代表**整数和浮点数**。

数字可以有很多操作，比如，乘法 `*`、除法 `/`、加法 `+`、减法 `-` 等等。

除了常规的数字，还包括所谓的“特殊数值（“special numeric values”）”也属于这种类型：`Infinity`、`-Infinity` 和 `NaN`。

 “number” 类型可以存储更大的整数（最多 `1.7976931348623157 * 10308`），但超出安全整数范围 `±(253-1)` 会出现精度问题，**可能存储的是“近似值”，**在进行精度比较高的运算时要注意。

- `Infinity` 代表数学概念中的 [无穷大](https://en.wikipedia.org/wiki/Infinity) ∞。是一个比任何数字都大的特殊值。

- `NaN` 代表一个计算错误（**非法的数值**）。它是一个不正确的或者一个未定义的数学操作所得到的结果，比如：

  ```javascript
  alert( "not a number" / 2 ); // NaN，这样的除法是错误的
  ```

  `NaN` 是粘性的。任何对 `NaN` 的进一步数学运算都会返回 `NaN`。所以，如果在数学表达式中有一个 `NaN`，会被传播到最终结果（只有一个例外：`NaN ** 0` 结果为 `1`）。



#### BigInt

`BigInt` 类型用于表示任意长度的整数，可以表示的数字范围是内存的无限大。

可以通过将 `n` 附加到整数字段的末尾来创建 `BigInt` 值。

不能与其他类型的数值进行计算。

```javascript
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```



#### 字符串string

在 JavaScript 中，有三种包含字符串的方式。

1. 双引号：`"Hello"`.
2. 单引号：`'Hello'`.
3. 反引号：``Hello``(模板字符串).

双引号和单引号都是“简单”引用，两者几乎没有什么差别。

反引号是 **功能扩展** 引号。它们允许我们通过将变量和表达式包装在 `${ }` 中，来将它们嵌入到字符串中。`${ }` 内的表达式会被计算，计算结果会成为字符串的一部分。可以在 `${ }` 内放置任何东西：诸如名为 `name` 的变量，或者诸如 `1 + 2` 的算数表达式，或者其他一些更复杂的。例如：

```javascript
let name = "John";

// 嵌入一个变量
alert( `Hello, ${name}!` ); // Hello, John!

// 嵌入一个表达式
alert( `the result is ${1 + 2}` ); // the result is 3
```

需要注意的是，这仅仅在反引号内有效，其他引号不允许这种嵌入。

使用反引号的另一个优点是它们允许字符串跨行。单引号和双引号内需要使用转义字符。所有的特殊字符都以反斜杠字符 `\` 开始。它也被称为“转义字符”。 还有其他不常见的“特殊”字符：

| 字符                                    | 描述                                                         |
| :-------------------------------------- | :----------------------------------------------------------- |
| \n                                      | 换行                                                         |
| \r                                      | 在 Windows 文本文件中，两个字符 `\r\n` 的组合代表一个换行。而在非 Windows 操作系统上，它就是 `\n`。这是历史原因造成的，大多数的 Windows 软件也理解 `\n`。 |
| `\'`, `\"`                              | 引号                                                         |
| `\\`                                    | 反斜线                                                       |
| `\t`                                    | 制表符                                                       |
| `\b`, `\f`, `\v`                        | 退格，换页，垂直标签 —— 为了兼容性，现在已经不使用了。       |
| `\xXX`                                  | 具有给定十六进制 Unicode `XX` 的 Unicode 字符，例如：`'\x7A'` 和 `'z'` 相同。 |
| `\uXXXX`                                | 以 UTF-16 编码的十六进制代码 `XXXX` 的 Unicode 字符，例如 `\u00A9` —— 是版权符号 `©` 的 Unicode。它必须正好是 4 个十六进制数字。 |
| `\u{X…XXXXXX}`（1 到 6 个十六进制字符） | 具有给定 UTF-32 编码的 Unicode 符号。一些罕见的字符用两个 Unicode 符号编码，占用 4 个字节。这样我们就可以插入长代码了。 |



#### boolean

boolean 类型仅包含两个值：`true` 和 `false`。布尔值主要用来逻辑判断，这种类型通常用于存储表示 yes 或 no 的值：`true` 意味着 “yes，正确”，`false` 意味着 “no，不正确”。

布尔值也可作为比较的结果：

```javascript
let isGreater = 4 > 1;
alert( isGreater ); // true（比较的结果是 "yes"）
```

使用typeof检查布尔值时会返回一个'boolean'。



#### null

特殊的 `null` 值不属于上述任何一种类型。

它构成了一个独立的类型，只包含 `null` 值：

```javascript
let age = null;
```

上面的代码表示 `age` 是未知的。 

相比较于其他编程语言，JavaScript 中的 `null` 不是一个“对不存在的 `object` 的引用”或者 “null 指针”。JavaScript 中的 `null` 仅仅是一个代表“无”、“空”或“值未知”的特殊值。

用typeof检查空值时会返回一个'object'，即无法检查空值。



#### undefined

`undefined` 的含义是 `未被赋值`。

如果一个变量已被声明，但未被赋值，那么它的值就是 `undefined`：

```javascript
let age;
alert(age); // 弹出 "undefined"
```

从技术上讲，可以显式地将 `undefined` 赋值给变量，但是不建议这样做。通常，使用 `null` 将一个“空”或者“未知”的值写入变量中，而 `undefined` 则保留作为未进行初始化的事物的默认初始值。



### 数据类型转换

大多数情况下，运算符和函数会自动将赋予它们的值转换为正确的类型。

比如，`alert` 会自动将任何值都转换为字符串以进行显示。算术运算符会将值转换为数字。

#### 数字类型

在算术函数和表达式中，会自动进行 number 类型转换。

比如，当把除法 `/` 用于非 number 类型， string 类型的值被自动转换成 number 类型后进行计算：

```javascript
alert( "6" / "2" ); // 3
```

当我们从 string 类型源（如文本表单）中读取一个值，但期望输入一个数字时，通常需要进行显式转换。

1. **使用`Number(value)`** 显式地将这个 `value` 转换为 number 类型。

   ```javascript
   let str = "123";
   alert(typeof str); // string
   let num = Number(str); // Number(str)使str转换成 number 类型 123 ,然后要将其赋值
   alert(typeof num); // number
   ```

   number 类型转换规则：

   | 值              | 变成……                                                       |
   | :-------------- | :----------------------------------------------------------- |
   | `undefined`     | `NaN`                                                        |
   | `null`          | `0`                                                          |
   | `true 和 false` | `1` and `0`                                                  |
   | `string`        | 去掉首尾空白字符（空格、换行符 `\n`、制表符 `\t` 等）后的纯数字字符串中含有的数字。**如果剩余字符串为空，则转换结果为 `0`**。**如果该字符串不是一个有效的数字，类型转换出现 error ，返回 `NaN`。** |

   请注意 `null` 和 `undefined` 在这有点不同：`null` 变成数字 `0`，`undefined` 变成 `NaN`。

2. **专门用来将字符串转换为数值的两个方法**：

   1.`ParseInt()`：将字符串转换为一个整数。自左向右读取字符串，直到读取到字符串中所有的有               效整数。

   2.`ParseFloat()`：将字符串转换为一个浮点数。自左向右读取字符串，直到读取到字符串中所有的有效小数。
   
   `Number`函数将字符串转为数值，要比`parseInt`函数严格很多。基本上，只要有一个字符无法转成数值，整个字符串就会被转为`NaN`。  另外，`parseInt`和`Number`函数都会自动过滤一个字符串前导和后缀的空格。 



#### 字符串类型

1.`String`函数可以将任意类型的值转化成字符串，转换规则如下。

- **数值**：转为相应的字符串。
- **字符串**：转换后还是原来的值。
- **布尔值**：`true`转为字符串`"true"`，`false`转为字符串`"false"`。
- **undefined**：转为字符串`"undefined"`。
- **null**：转为字符串`"null"`。

2.调用`toString()`函数将其他类型转换为字符串，对null和undefined调用时会报错。

```javascript
let a = 10;
a = a.toString(); 
alert(typeof a); // string
```



#### 布尔类型

转换规则如下：

- 直观上为“空”的值（如 `0`、空字符串、`null`、`undefined` 和 `NaN`）将变为 `false`。
- 其他值变成 `true`。

```javascript
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
```

**请注意：包含 0 的字符串 `"0"` 是 `true`**

```javascript
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // 空格，也是 true（任何非空字符串都是 true）
```



### 自动类型转换

#### 自动转换为数值

JS是一门弱类型语言，除了**加法运算符（`+`）有可能把运算子转为字符串**，其他运算符都会把运算子自动转成数值。  如果是两个字符串相加，这时加法运算符会变成连接运算符，返回一个新的字符串，将两个原字符串连接在一起。 当任意一个值和字符串进行加法运算时，会将值转换为字符串，然后进行拼串操作。

```javascript
a='hello'+'world'// "helloworld" 拼串
a='1'+2// "12"
a=1+''// "1",可以通过 任意类型+'' 的形式来将其转换为字符串，其原理与String()函数相同
```

 注意：`null`转为数值时为`0`，而`undefined`转为数值时为`NaN`。 

**一元运算符会把运算子转成数值**（可以利用这一特点进行类型转换）。

```javascript
+'abc' // NaN
-'abc' // NaN
+true // 1
-false // 0
```



## 运算符

### 算数运算符

#### 赋值运算符

**=** ：用来将一个值赋给一个变量：将符号右边的值赋给左边的变量。一个变量只有在等号左边时才是变量，在等号右边时它是值。

**??=**：空赋值。**只有当变量值为null或undefined时才会对变量进行赋值。**

**复合的赋值运算符**： 赋值运算符还可以与其他运算符结合，这些复合的赋值运算符都是先进行指定运算，然后将得到值返回给左边的变量。 



#### 指数运算符

指数运算符（`**`）完成指数运算，前一个运算子是底数，后一个运算子是指数。 

指数运算符是右结合，而不是左结合。即**多个指数运算符连用时，先进行最右边的计算**{（先从后边算）。



#### 数值运算符  负数值运算符

数值运算符（`+`）同样使用加号，但它是一元运算符（只需要一个操作数），而加法运算符是二元运算符（需要两个操作数）。

数值运算符的作用在于可以**将任何值转为数值（与`Number()`函数的作用相同）**。数值运算符号和负数值运算符，都会返回一个新的值，而**不会改变原始变量的值**。

```javascript
+true // 1
+[] // 0
+{} // NaN
```

非数值经过数值运算符以后，都变成了数值（最后一行`NaN`也是数值）。

**负数值运算符（`-`），也同样具有将一个值转为数值的功能，同时对数值进行符号位取反**。连用两个负数值运算符，等同于数值运算符。

```javascript
var x = 1;
-x // -1
-(-x) // 1
```



### 逻辑运算符(布尔运算符)

#### 取反运算符

取反运算符是一个感叹号(!)，用于将布尔值变为相反值，即`true`变成`false`，`false`变成`true`。

```javascript
!true // false
!false // true
```

**对于非布尔值，取反运算符会将其转为布尔值。以下六个值取反后为`true`，其他值都为`false`。**

- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- 空字符串（`''`）

不管`x`是什么类型的值，经过两次取反运算后，变成了与`Boolean`函数结果相同的布尔值。所以，两次取反就是将一个值转为布尔值的简便写法。

```javascript
!!x// 等同于Boolean(x)
```



#### 且运算符

且运算符（`&&`）往往用于多个表达式的求值。

对于非布尔值，它的运算规则是：如果第一个运算子的布尔值为`true`，则返回第二个运算子的原值（不是布尔值）；如果第一个运算子的布尔值为`false`，则直接返回第一个运算子的原值，且不再对第二个运算子求值。

```javascript
var x = 1;
(1 - 1) && ( x += 1) // 0
x // 1  
/* 由于且运算符的第一个运算子的布尔值为false，则直接返回它的值0，而不再对第二个运算子求值，所以变量x的值没变。 */
```

这种跳过第二个运算子的机制，被称为**“短路”**。有些程序员喜欢用它取代`if`结构，比如下面是一段`if`结构的代码，就可以用且运算符改写。

```javascript
if (i) {
	doSomething();
}

// 等价于
i && doSomething();
```

上面代码的两种写法是等价的，但是后一种不容易看出目的，也不容易除错，建议谨慎使用。

且运算符可以多个连用，这时**返回第一个布尔值为`false`的表达式的值**。**如果所有表达式的布尔值都为`true`，则返回最后一个表达式的值。**



#### 或运算符

或运算符（`||`）也用于多个表达式的求值。

对于非布尔值，它的运算规则是：如果第一个运算子的布尔值为`true`，则返回第一个运算子的值，且不再对第二个运算子求值；如果第一个运算子的布尔值为`false`，则返回第二个运算子的值。 短路规则同样适用或运算符，第一个运算子为`true`，则直接返回`true`，不再运行第二个运算子 。 

或运算符可以多个连用，**这时返回第一个布尔值为`true`的表达式的值。如果所有表达式都为`false`，则返回最后一个表达式的值。** 

**即找到`ture`直接返回`ture`，没有`ture`才返回最后一个`false`。**



#### 三元条件运算符

三元条件运算符由问号（?）和冒号（:）组成，分隔三个表达式。它是 JavaScript 语言唯一一个需要三个运算子的运算符。如果第一个表达式的布尔值为`true`，则返回第二个表达式的值，否则返回第三个表达式的值。

```javascript
't' ? 'hello' : 'world' // "hello"
0 ? 'hello' : 'world' // "world"
```

上面代码的`t`和`0`的布尔值分别为`true`和`false`，所以分别返回第二个和第三个表达式的值。

通常来说，三元条件表达式与`if...else`语句具有同样表达效果，前者可以表达的，后者也能表达。但是两者具有一个重大差别，`if...else`是语句，没有返回值；三元条件表达式是表达式，具有返回值。所以，在需要返回值的场合，只能使用三元条件表达式，而不能使用`if..else`。

```
console.log(true ? 'T' : 'F');
```

上面代码中，`console.log`方法的参数必须是一个表达式，这时就只能使用三元条件表达式。如果要用`if...else`语句，就必须改变整个代码写法了。



#### 空值合并运算符

空值合并运算符的写法为两个问号 `??`。

由于它对待 `null` 和 `undefined` 的方式类似，所以在本文中我们将使用一个特殊的术语对其进行表示。为简洁起见，当一个值既不是 `null` 也不是 `undefined` 时，我们将其称为“已定义的（defined）”。

`a ?? b` 的结果是：

- 如果 `a` 是已定义的，则结果为 `a`，
- 如果 `a` 不是已定义的，则结果为 `b`。

换句话说，如果第一个参数不是 `null/undefined`，则 `??` 返回第一个参数。否则，返回第二个参数。

例如，在这里，如果 `user` 的值不为 `null/undefined` 则显示 `user`，否则显示 `匿名`：

```javascript
let user = "John";
alert(user ?? "匿名"); // John（user 已定义）
```

 **`||` 与 `??` 的重要区别是：**

- `||` 返回第一个 **真** 值。
- `??` 返回第一个 **已定义的** 值。

换句话说，`||` 无法区分 `false`、`0`、空字符串 `""` 和 `null/undefined`。它们都一样 —— 假值。如果其中任何一个是 `||` 的第一个参数，那么我们将得到第二个参数作为结果。不过在实际中，我们可能只想在变量的值为 `null/undefined` （当该值确实未知或未被设置）时使用默认值。



### 关系运算符

比较运算符用于比较两个值的大小，然后返回一个布尔值，表示是否满足指定的条件。

```
2 > 1 // true
```

上面代码比较`2`是否大于`1`，返回`true`。

> 注意，比较运算符可以比较各种类型的值，不仅仅是数值。

JavaScript 一共提供了8个比较运算符。

- `>` 大于运算符
- `<` 小于运算符
- `<=` 小于或等于运算符
- `>=` 大于或等于运算符
- `==` 相等运算符
- `===` 严格相等运算符
- `!=` 不相等运算符
- `!==` 严格不相等运算符

这八个比较运算符分成两类：相等比较和非相等比较。

#### 非相等比较

对于非相等的比较，算法是**先看两个运算子是否都是字符串**，如果是的，就按照字典顺序比较（实际上是**逐位比较**字符串中字符的 Unicode 码点），不会将字符串转换为数字；

```javascript
result = "abc" < "b" // ture,只比较第一位的编码
result = "bbc" < "b" // false，第一位比较不出来，再比较下一位
result = "12" < "2" //ture,比较的不是数值而是字符串，即'1'与'2'的编码进行比较，所以比较字符串类型的数字时一定要进行类型转换
result = +"12" < +"2" // false
result = +"12" < "2" // false，有一个不是字符串，另一个会进行自动类型转换
```

如果两个运算子之中，至少有一个不是字符串，需要分成以下两种情况。 

（1）原始类型值

字符串和布尔值都会先转成数值，再进行比较。

这里需要注意与`NaN`的比较。任何值（包括`NaN`本身）与`NaN`比较，返回的都是`false`。

（2）对象

 如果两个运算子之中，至少有一个不是字符串，需要分成以下两种情况。 

#### 相等比较

它们的区别是相等运算符（`==`）比较两个值是否相等，严格相等运算符（`===`）比较它们是否为“同一个值”。如果两个值不是同一类型，严格相等运算符（`===`）直接返回`false`，而相等运算符（`==`）会将它们转换成同一个类型，再用严格相等运算符进行比较。 

-  十进制的`1`与十六进制的`1`，因为类型和值都相同，返回`true`。 
-  `NaN`与任何值都不相等（包括自身）。
-  正`0`等于负`0`。 
-  两个复合类型（对象、数组、函数）的数据比较时，不是比较它们的值是否相等，而是比较它们是否指向同一个地址。 
-  `undefined`和`null`与自身严格相等。
-  `undefined`和`null`相等，但不严格相等。