#                                      JS笔记

## 数据类型

JavaScript 中的值都具有特定的类型。例如，字符串或数字。在 JavaScript 中有 8 种基本的数据类型（译注：7 种原始类型和 1 种引用类型）。

我们可以将任何类型的值存入变量。例如，一个变量可以在前一刻是个字符串，下一刻就存储一个数字：

`// 没有错误
let message = "hello";
message = 123456;`

### Number类型

*number* 类型代表整数和浮点数。

数字可以有很多操作，比如，乘法 `*`、除法 `/`、加法 `+`、减法 `-` 等等。

除了常规的数字，还包括所谓的“特殊数值（“special numeric values”）”也属于这种类型：`Infinity`、`-Infinity` 和 `NaN`。

***Infinity 代表数学概念中的 无穷大 ∞。是一个比任何数字都大的特殊值。***

***NaN 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果***

### BigInt类型

在 JavaScript 中，“number” 类型无法安全地表示大于 (253-1)（即 9007199254740991），或小于 -(253-1) 的整数。有时候我们需要整个范围非常大的整数，例如用于密码学或微秒精度的时间戳。

BigInt 类型是最近被添加到 JavaScript 语言中的，用于表示任意长度的整数。

可以通过将 n 附加到整数字段的末尾来创建 BigInt 值。

`// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;`

### String类型

JavaScript 中的字符串必须被括在引号里。

`let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;`

在 JavaScript 中，有三种包含字符串的方式。

双引号："Hello".
单引号：'Hello'.
反引号：`Hello`.
双引号和单引号都是“简单”引用，在 JavaScript 中两者几乎没有什么差别。

反引号是 功能扩展 引号。它们允许我们通过将变量和表达式包装在 ${…} 中，来将它们嵌入到字符串中。

### Boolean类型（逻辑类型）

boolean 类型仅包含两个值：true 和 false。

这种类型通常用于存储表示 yes 或 no 的值：true 意味着 “yes，正确”，false 意味着 “no，不正确”。

布尔值也可作为比较的结果。

### Null值

相比较于其他编程语言，JavaScript 中的 null 不是一个“对不存在的 object 的引用”或者 “null 指针”。

JavaScript 中的 null 仅仅是一个代表“无”、“空”或“值未知”的特殊值。

### undefined值

特殊值 undefined 和 null 一样自成类型。

undefined 的含义是 未被赋值。

如果一个变量已被声明，但未被赋值，那么它的值就是 undefined。

### Object类型和Symbol类型

object 类型是一个特殊的类型。

其他所有的数据类型都被称为“原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）。相反，object 则用于储存数据集合和更复杂的实体。

因为它非常重要，所以我们对其进行单独讲解。在充分学习了原始类型后，我们将会在 对象 一章中介绍 object。

symbol 类型用于创建对象的唯一标识符。

### typeof运算符

typeof 运算符返回参数的类型。当我们想要分别处理不同类型值的时候，或者想快速进行数据类型检验时，非常有用。

对 typeof x 的调用会以字符串的形式返回数据类型：

`typeof undefined // "undefined"`

`typeof 0 // "number"`

`typeof 10n // "bigint"`

`typeof true // "boolean"`

`typeof "foo" // "string"`

`typeof Symbol("id") // "symbol"`

## JS与用户的交互方式

### 警示框

**语法：**alert(message)

**作用：**弹出一个警示框,并给出提示信息

### 对话输入框

**语法:**prompt(str1, str2);

**str1:** 要显示在消息对话框中的文本，不可修改

**str2：**文本框中的内容，可以修改

**返回值:**

1. 点击确定按钮，文本框中的内容将作为函数返回值
2. 点击取消按钮，将返回null

### 控制台输入（打印输出语句）

**语法：**console.log(msg)

**作用：***在控制台输出信息（可以是字符串，也可以是其他数据类型，包括对象）

**注意：**该方法一般用于调试程序

### 页面输出（在浏览器网页上打印）

**语法：**document.write(markup)

**作用：**向浏览器页面输出内容

**注意：**主要用于输出html代码字符串

### confirm (消息对话框)

confirm 消息对话框通常用于允许用户做选择的动作，如：“你对吗？”等。弹出对话框(包括一个确定按钮和一个取消按钮)。

**语法:** confirm(str);

**str：**在消息对话框中要显示的文本

**返回值:**

当用户点击"确定"按钮时，返回true

当用户点击"取消"按钮时，返回false

### 打开新窗口（window.open）

**语法：**window.open([URL], [窗口名称], [参数字符串])

**URL：**可选参数，在窗口中要显示网页的网址或路径。如果省略这个参数，或者它的值是空字符串，那么窗口就不显示任何文档。

**窗口名称：**可选参数，被打开窗口的名称。

​    1.该名称由字母、数字和下划线字符组成。

​    2."_top"、"_blank"、"_self"具有特殊意义的名称。

​       _blank：在新窗口显示目标网页

​       _self：在当前窗口显示目标网页

​       _top：框架网页中在上部窗口中显示目标网页

​    3.相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。

​    4.name 不能包含有空格。

**参数字符串：**可选参数，设置窗口参数，各参数用逗号隔开。

## JS中定义变量

js中三种定义变量的方式：const， var， let。

**const定义的变量不可以修改，而且必须初始化。**

`const b = 2;//正确
// const b;//错误，必须初始化 
console.log('函数外const定义b：' + b);//有输出值
// b = 5;
// console.log('函数外修改const定义b：' + b);//无法输出 `

**var定义的变量可以修改，如果不初始化会输出undefined，不会报错。**

`var a = 1;
// var a;//不会报错
console.log('函数外var定义a：' + a);//可以输出a=1
function change(){
a = 4;
console.log('函数内var定义a：' + a);//可以输出a=4
} 
change();
console.log('函数调用后var定义a为函数内部修改值：' + a);//可以输出a=4`

**let是块级作用域，函数内部使用let定义后，对函数外部无影响。**

`let c = 3;
console.log('函数外let定义c：' + c);//输出c=3
function change(){
let c = 6;
console.log('函数内let定义c：' + c);//输出c=6
} 
change();
console.log('函数调用后let定义c不受函数内部定义影响：' + c);//输出c=3`

## 数组

—数组也是一种复合数据类型，在数组可以存储多个不同类型的数据

—数组中存储的是有序的数据，数组中的每个数据都有一个唯一的索引，可以通过索引来操作获取数据

—数组中存储的数据叫做元素

—创建数组：通过Array()来创建数组，也可通过[ ]来创建

—索引(index)是一组大于0的整数

—向数组中添加元素：数组[索引]

—读取数组中的元素：数组[索引]

—如果读取了一个不存在的元素，不会报错而是返回undefined

### length

—获取数组的长度

—获取的实际值就是数组的最大索引+1

—向数组最后添加元素：数组[数组.length]=元素

—length是可以修改的

### for-of语句

for-of语句可以用来遍历可迭代对象

**语法：**for(变量 of 可迭代的对象) {语句······}

**执行流程：**for-of的循环体会执行多次，数组中有几个元素就会执行几次，每次执行时都会将一个元素赋值给变量

`const arr = [1,2,3,4]`

`for(let value of arr){`

`console.log(value)`

`}`也可

`for(let value of "hello"){`

`console.log(value)`

`}`

### 数组的方法

**join() （数组转字符串）**

数组转字符串，方法只接收一个参数：即默认为逗号分隔符（）

`<script>
	var arr=[1,2,3,4];
	console.log(arr.join()); //1,2,3,4
	console.log(arr.join(":")); //1:2:3:4
	console.log(arr); //[1,2,3,4],原数组不变
</script>`

join()实现重复字符串

`<script>
    function repeatStr(str, n) {
        return new Array(n + 1).join(str);
    }
	console.log(repeatStr("嗨",3)); //嗨嗨嗨
	console.log(repeatStr("Hi",3)); //HiHiHi
	console.log(repeatStr(1,3));    //111
</script>`

**push()和pop()（数组尾操作）**

push()：方法可向数组的末尾添加一个或多个元素，并返回新的长度。

pop()：方法用于删除并返回数组的最后一个元素。

`<script>
	var arr=[1,2,3,4];
	//push
	var push_arr=arr.push("Tom","Sun");
	console.log(arr); //[1,2,3,4,"Tom","Sun"];
	console.log(push_arr); // 6
	//pop
	var pop_arr=arr.pop();
	console.log(arr); //[1,2,3,4,"Tom"];
	console.log(pop_arr); // Sun	
</script>`

**shift() 和 unshift()（数组首操作）**

shift()：方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。

unshift()：方法可向数组的开头添加一个或更多元素，并返回新的长度。

`<script>
	var arr=[1,2,3,4];
	//shift
	var shift_arr=arr.shift();
	console.log(arr); // [2, 3, 4]
	console.log(shift_arr); // 1
	//unshift
	var unshift_arr=arr.unshift("Tom");
	console.log(arr); // ["Tom", 2, 3, 4]
	console.log(unshift_arr); // 4
</script>`

**sort()（排序）**

升序：

`<script>
	var arr=[1,100,5,20];
	function sortNumber(a,b){return a - b};
	console.log(arr.sort(sortNumber)); //[1, 5, 20, 100]
	console.log(arr); //[1, 5, 20, 100] (原数组改变)
</script>`

降序：

`<script>
	var arr=[1,100,5,20];
	function sortNumber(a,b){return b - a};
	console.log(arr.sort(sortNumber)); // [100, 20, 5, 1]
	console.log(arr); // [100, 20, 5, 1] (原数组改变)
</script>`

**concat() （连接两个或多个数组）**

concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本。

`<script>
	var arr=[1,2,3,4];
	var arr2=[11,12,13] 
	var arrCopy = arr.concat(arr2);
	console.log(arr.concat()); // [1, 2, 3, 4] (复制数组)
	console.log(arrCopy); // [1, 2, 3, 4, 11, 12, 13]
	console.log(arr); // [1, 2, 3, 4] (原数组未改变)
</script>`

concat方法只能将传入数组中的每一项添加到数组中，如果传入数组中有些项是数组，那么也会把这一数组项当作一项添加到arrCopy中。

**slice()（数组截取）**

arr.slice(start , end);

**start：**可选。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。

**end：**可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。

**返回值：**返回一个新的数组，包含从 start 到 end （不包括该元素）的 arr 中的元素。

`<script>
	var arr = [1,4,6,8,12];
	var arrCopy1 = arr.slice(1);	
	var arrCopy2 = arr.slice(0,4);	
	var arrCopy3 = arr.slice(1,-2);
	var arrCopy4 = arr.slice(-5,4);
	var arrCopy5 = arr.slice(-4,-1)
	console.log(arrCopy1);  // [4, 6, 8, 12]
	console.log(arrCopy2);  // [1, 4, 6, 8] 
	console.log(arrCopy3);  // [4, 6] 
	console.log(arrCopy4);  // [1, 4, 6, 8]
	console.log(arrCopy5);  // [4, 6, 8]
	console.log(arr);  // [1, 4, 6, 8, 12] (原数组未改变) 
</script>`

**索引方法：indexOf()**

indexOf()--------array.indexOf(item,start) （从数组的开头（位置 0）开始向后查找）

item： 必须。查找的元素。

start：可选的整数参数。规定在数组中开始检索的位置。如省略该参数，则将从array[0]开始检索。

**索引方法：lastIndexOf()**

lastIndexOf()--------array.lastIndexOf(item,start) （从数组的末尾开始向前查找）

item： 必须。查找的元素。

start：可选的整数参数。规定在数组中开始检索的位置。如省略该参数，则将从 array[array.length-1]开始检索。

`<script>
	var arr = [1,4,7,10,7,18,7,26];
	console.log(arr.indexOf(7));        // 2
	console.log(arr.lastIndexOf(7));    // 6
	console.log(arr.indexOf(7,4));      // 4
	console.log(arr.lastIndexOf(7,2));  // 2
	console.log(arr.indexOf(5));        // -1		
</script>`
