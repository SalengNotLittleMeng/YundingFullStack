## 函数

[TOC]

### 函数声明

使用 **函数声明** 创建函数。

#### function命令

`function` 关键字首先出现，然后是 **函数名**，然后是括号之间的 **参数**列表（用逗号分隔），最后是花括号之间的代码（函数体）。

```javascript
function name(parameter1, parameter2, ... parameterN) {
  ...body...
}
```



#### 函数表达式（变量赋值）

将一个匿名函数赋值给变量，这个匿名函数又称**函数表达式**。采用函数表达式声明函数时，`function`命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。

```javascript
var print = function(s) {
	console.log(s);
};
```

这种写法的用处有两个，一是可以在函数体内部调用自身，二是方便除错（除错工具显示函数调用栈时，将显示函数名，而不再显示这里是一个匿名函数）。因此，下面的形式声明函数也非常常见。

```javascript
var f = function f() {};
```

需要注意的是，函数的表达式需要在语句的结尾加上分号，表示语句结束。而函数的声明在结尾的大括号后面不用加分号。例如：

```javascript
function sayHi() {   // (1) 创建
  alert( "Hello" );
}

let func = sayHi;    // (2) 复制

func(); // Hello     // (3) 运行复制的值，正常运行！
sayHi(); // Hello    //     这里也能运行
```

上段代码发生的细节：

1. `(1)` 行声明创建了函数，并把它放入到变量 `sayHi`。 论函数是如何创建的，**函数都是一个值**。 
2. `(2)` 行将 `sayHi` 复制到了变量 `func`。请注意：`sayHi` 后面没有括号。如果有括号，`func = sayHi()` 会把 `sayHi()` 的调用结果写进`func`，而不是 `sayHi` **函数** 本身。
3. 现在函数可以通过 `sayHi()` 和 `func()` 两种方式进行调用。



#### 函数名的提升

JavaScript 引擎将函数名视同变量名，所以采用`function`命令声明函数时，整个函数会像变量声明一样，被提升到代码头部。表面上，上面代码好像在声明之前就调用了函数`f`。但是实际上，**由于“变量提升”，函数`f`被提升到了代码头部，也就是在调用之前已经声明了**。

```javascript
f();
function f() {} // 不会报错
```

但是，如果采用赋值语句定义函数，JavaScript 就会报错。

```javascript
f();
var f = function (){};
// TypeError: undefined is not a function

// 等同于以下形式

var f; 
f(); //f只是被声明，并没有被赋值，等于 undefined ，所以此时调用 f 会报错
f = function () {};
```

采用`function`命令和`var`赋值语句声明同一个函数，由于存在函数提升，最后会采用`var`赋值语句的定义。 



#### 变量的提升

使用var声明的变量会在所有代码执行前被声明，但不会被赋值。可以在变量声明前就访问该变量，但访问的结果是undefined。

使用let声明的变量实际也会提升，但是在赋值之前解释器禁止对该变量访问。



#### 函数的重复声明

如果同一个函数被多次声明，后面的声明就会覆盖前面的声明。而且由于函数名的提升，前一次声明在任何时候都是无效的。

```javascript
function f() {
    console.log(1);
}
f() // 2

function f() {
    console.log(2);
}
f() // 2
```



### 函数的调用

新函数可以通过名称调用。调用函数时要使用圆括号运算符，函数名后面紧跟一对圆括号，就会调用这个函数。圆括号之中，可以加入函数的参数。

```javascript
function add(x, y) {
    return x + y;
}

add(1, 1) // 2
```



### 参数

函数不会区分参数的类型，可以将任意类型的值作为参数传递给函数。 当函数被调用时，给定值被复制到了局部变量中，然后函数使用它们进行计算。函数会修改局部变量，但在函数外部看不到更改，因为函数修改的是复制的变量值副本。

- 参数（parameter）是函数声明中括号内列出的变量（它是函数声明时的术语）。在函数中定义参数，相当于在函数内部声明了对应的变量，但是没有赋值。形式参数。
- 参数（argument）是调用函数时传递给函数的值（它是函数调用时的术语）。其值会赋给函数中声明的形式参数。实际参数。

我们声明函数时列出它们的参数（parameters），然后调用它们传递参数（arguments）。

#### 默认值

如果一个函数被调用，但有参数（argument）未被提供，那么相应的值就会变成 `undefined`。 所以定义参数时可以指定默认值，当该参数没有对应实参时生效。**函数每次调用，都会重新创建默认值**。

```javascript
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
```

现在如果 `text` 参数未被传递，它将会得到值 `"no text given"`。

这里 `"no text given"` 是一个字符串，但它可以是更复杂的表达式，并且只会在缺少参数时才会被计算和分配。如果传递了参数 `text`，那么 `anotherFunction()` 就不会被调用。如果没传递参数 `text`，那么 `anotherFunction()` 就会被调用。

```javascript
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() 仅在没有给定 text 时执行
  // text 的值为 anotherFunction() 的运行结果
}
```

几年前，JavaScript 不支持默认参数的语法。所以人们使用其他方式来设置默认参数。如今，我们会在旧代码中看到它们。

#### 后备的默认参数

将参数默认值的设置放在函数执行（相较更后期）而不是函数声明时也行得通。可以通过将参数与 `undefined` 进行比较，来检查该参数是否在函数执行期间被传递进来：

```javascript
function showMessage(text) {
  // ...

  if (text === undefined) { // 如果参数未被传递进来
    text = 'empty message';
  }
  alert(text);
}

showMessage(); // empty message
```

 `||` 运算符：

```javascript
function showMessage(text) {
  // 如果 text 为 undefined 或者为假值，那么将其赋值为 'empty'
  text = text || 'empty';
  ...
}
```

空值合并运算符`??`，它在大多数假值（例如 `0`）应该被视为“正常值”时更具优势：

```javascript
function showCount(count) {
  // 如果 count 为 undefined 或 null，则提示 "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```



### 返回值

函数可以将一个值返回到调用代码中作为结果。指令 `return` 可以在函数的任意位置。当执行到达时，函数停止，并将值返回给调用代码。最简单的例子是将两个值相加的函数，返回值分配给代码中的 `result`：

```javascript
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
```

在一个函数中可能会出现很多次 `return`。例如：

```javascript
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Got a permission from the parents?');
  }
}
```

只使用 `return` 但没有返回值也是可行的，但这会导致函数立即退出，后面即使还有语句，也不会得到执行。**空值的 `return` 或没有 `return` 的函数返回值为 `undefined`**。空值的 `return` 和 `return undefined` 等效，如果函数无返回值，它就会像返回 `undefined` 一样：

```javascript
function doNothing() { /* 没有代码 */ }

function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true
```

**不要在 `return` 与返回值之间添加新行。**对于 `return` 的长表达式，可能你会很想将其放在单独一行，但这不行，因为 JavaScript 默认会在 `return` 之后加上分号。因此，实际上它的返回值变成了空值。

如果我们想要将返回的表达式写成跨多行的形式，那么应该在 `return` 的同一行开始写此表达式。或者按照如下的方式：

```javascript
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
```



### 函数命名

函数就是行为（action）。所以它们的名字通常是动词。它应该简短且尽可能准确地描述函数的作用。这样读代码的人就能清楚地知道这个函数的功能。

一种普遍的做法是用动词前缀来开始一个函数，这个前缀模糊地描述了这个行为。有了前缀，只需瞥一眼函数名，就可以了解它的功能是什么，返回什么样的值。例如，以 `"show"` 开头的函数通常会显示某些内容。

函数以 XX 开始……

- `"get…"` —— 返回一个值，
- `"calc…"` —— 计算某些内容，
- `"create…"` —— 创建某些内容，
- `"check…"` —— 检查某些内容并返回 boolean 值，等。

这类名字的示例：

```javascript
showMessage(..)     // 显示信息
getAge(..)          // 返回 age（gets it somehow）
calcSum(..)         // 计算求和并返回结果
createForm(..)      // 创建表单（通常会返回它）
checkPermission(..) // 检查权限并返回 true/false
```

一个函数应该只包含函数名所指定的功能，而不是做更多与函数名无关的功能。两个独立的行为通常需要两个函数，即使它们通常被一起调用（在这种情况下，可以创建第三个函数来调用这两个函数）。

有几个违反这一规则的例子：

- `getAge` —— 如果它通过 `alert` 将 age 显示出来，那就有问题了（只应该是获取）。
- `createForm` —— 如果它包含修改文档的操作，例如向文档添加一个表单，那就有问题了（只应该创建表单并返回）。
- `checkPermission` —— 如果它显示 `access granted/denied` 消息，那就有问题了（只应执行检查并返回结果）。



### 函数作用域

作用域指的是一个变量的可见区域。

全局作用域在网页运行时创建，在网页关闭时销毁，所有直接编写在script标签中的代码都位于全局作用域中。全局作用域中的变量可以在任意位置访问。

块作用域是一种局部作用域。块作用域在代码块执行时创建，代码块执行完毕后销毁。在块作用域中声明的变量是局部变量，只能在块内部访问，外部无法访问。

var没有块作用域，但有函数作用域。

#### 局部变量

在函数中声明的变量只在该函数内部可见。

例如：

```javascript
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // 局部变量

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- 错误！变量是函数的局部变量
```

#### 全局变量

任何函数之外声明的变量，都被称为 **全局** 变量。函数可以访问外部变量，函数对外部变量拥有全部的访问权限。函数也可以修改外部变量。例如：

```javascript
let userName = 'John';

function showMessage() {
  userName = "Bob"; // 改变外部变量,注意与声明同名变量的区别
  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John 在函数调用之前

showMessage();

alert( userName ); // Bob，值被函数修改了
```

函数只有在没有局部变量的情况下才会使用外部变量。如果在函数内部声明了同名变量，那么函数会**遮蔽**外部变量。例如在下面的代码中，函数使用局部的 `userName`，而外部变量被忽略：

```javascript
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // 声明一个局部变量
  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// 函数会创建并使用它自己的 userName
showMessage();

alert( userName ); // John，这时全局变量未被更改，函数没有访问外部变量。
```

全局变量在任意函数中都是可见的（除非被局部变量遮蔽）。减少全局变量的使用是一种很好的做法。但是有时候，全局变量能够用于存储项目级别的数据。 



### 内建函数

与用户交互的 3 个浏览器的特定函数：

- `alert()`

  显示信息。

- `prompt`

  显示信息要求用户输入文本。点击确定返回文本，点击取消或按下 Esc 键返回 `null`。

  ```javascript
  result = prompt(title, [default]);
  // title 显示给用户的文本
  // default 可选参数，指定input框的初始值
  ```

  访问者可以在提示输入栏中输入一些内容，然后按“确定”键。 `prompt` 将返回用户在 `input` 框内输入的文本 ，或者他们可以按取消键或按 Esc 键取消输入，然后我们得到 `null` 作为 `result`。 

- `confirm`

  `confirm` 函数显示一个带有 `question` 以及确定和取消两个按钮的模态窗口。点击确定返回 `true`，点击取消返回 `false`。

这些方法都是模态的：它们暂停脚本的执行，并且不允许用户与该页面的其余部分进行交互，直到窗口被解除。

上述所有方法共有两个限制：

1. 模态窗口的确切位置由浏览器决定。通常在页面中心。
2. 窗口的确切外观也取决于浏览器。我们不能修改它。