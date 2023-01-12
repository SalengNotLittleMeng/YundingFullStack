## 数组与字符串

[TOC]

对象不能提供能够管理元素顺序的方法，不能在已有的元素“之间”插入一个新的属性，而一个特殊的数据结构**数组**能存储有序的集合。

数组是一种特殊的对象。使用方括号来访问属性 `arr[0]` 实际上是来自于对象的语法。它其实与 `obj[key]` 相同，其中 `arr` 是对象，而数字用作键。

任何类型的值都可以成为数组中的元素，但创建数组时尽量确保数组中储存的数据类型是相同的。

### 数组的声明

创建一个空数组有两种语法：

```javascript
let arr = new Array();
let arr = []; //大多数情况下使用
```

在方括号中可以添加初始元素，数组可以储存任何类型的元素。数组元素从 0 开始编号，通过方括号中的数字获取元素：

```javascript
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

fruits[2] = 'Pear'; // 替换元素，现在变成了 ["Apple", "Orange", "Pear"]
fruits[3] = 'Lemon'; // 添加元素，现在变成 ["Apple", "Orange", "Pear", "Lemon"]
alert( fruits.length ); // length 属性的值是数组中元素的总个数：3
alert( fruits ); // Apple,Orange,Plum，用alert来显示整个数组
```

数组就像对象一样，可以以逗号结尾，使得插入/移除项变得更加简单。 

修改数组时，`length` 属性会自动更新。它实际上不是数组里元素的个数，而是最大的数字索引值加一。`length` 属性是可写的，如果减少它，数组就会被截断，且该过程是不可逆的。清空数组最简单的方法就是：`arr.length = 0;`。

```javascript
let arr = [1, 2, 3, 4, 5];

arr.length = 2; // 截断到只剩 2 个元素
alert( arr ); // [1, 2]

arr.length = 5; // 又把 length 加回来
alert( arr[3] ); // undefined：被截断的那些数值并没有回来
```



### 获取最后一个元素

一些编程语言允许我们使用负数索引来实现这一点，例如 `fruits[-1]`。但在 JavaScript 中这行不通，返回的结果将是 `undefined`，因为方括号中的索引是被按照其字面意思处理的。

可以显式地计算最后一个元素的索引，然后访问它：`fruits[fruits.length - 1]`。

也可以使用更简短的语法 `fruits.at(-1)`：

```javascript
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[fruits.length-1] ); // Plum
alert( fruits.at(-1) ); // Plum，与 fruits[fruits.length-1] 的效果相同
```

`arr.at(i)`的用法：

- 如果 `i >= 0`，则与 `arr[i]` 完全相同。
- 对于 `i` 为负数的情况，它则从数组的尾部向前数。



### pop/push  shift/unshift方法

`push/pop` 方法运行的比较快，而 `shift/unshift` 比较慢。 

JavaScript 中的数组既可以用作队列，也可以用作栈，允许从首端/末端来添加/删除元素。允许这样的操作的数据结构被称为**双端队列**。

#### 队列

**队列**是最常见的使用数组的方法之一，表示支持两个操作的一个有序元素的集合：

- `push` 在末端添加一个元素.
- `shift` 取出队列首端的一个元素并返回它（整个队列往前移，这样原先排第二的元素现在排在了第一）。

这两种操作数组都支持。

队列的应用在实践中经常会碰到。例如需要在屏幕上显示消息队列。



#### 数据结构栈

它支持两种操作：

- `push` 在末端添加一个元素.调用 `fruits.push(...)` 与 `fruits[fruits.length] = ...` 是一样的。
- `pop` 从末端取出一个元素并返回它. `fruits.pop()` 和 `fruits.at(-1)` 都返回数组的最后一个元素，但 `fruits.pop()` **同时也删除了数组的最后一个元素**，进而修改了原数组。

对于栈来说，最后放进去的内容是最先接收的，栈通常被被形容成一叠卡片：要么在最上面添加卡片，要么从最上面拿走卡片，所以新元素的添加和取出都是从“末端”开始的。



`unshift`在数组的**首端**添加元素，`push` 和 `unshift` 方法都可以一次添加多个元素：

```javascript
let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

alert( fruits );// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
```



### 遍历数组

使用 `for` 循环遍历数组：

```javascript
let arr = ["Apple", "Orange", "Pear"];
for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}
```

`for..of` 不能获取当前元素的索引，只是获取元素值。`for..of`遍历数组：

```javascript
let fruits = ["Apple", "Orange", "Plum"];

// 遍历数组元素
// 循环体多次执行，数组中有几个元素执行几次，每次将一个元素复制给变量（如fruit）。
for (let fruit of fruits) {
  alert( fruit );
}
```

因为数组也是对象，所以使用 `for..in` 也是可以的：

```javascript
let arr = ["Apple", "Orange", "Pear"];
for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}
```

通常来说，我们不应该用 `for..in` 来处理数组。这样会有一些潜在问题存在：

1. `for..in` 循环会遍历 **所有属性**，不仅仅是这些数字属性。

   在浏览器和其它环境中有一种称为“类数组”的对象，它们 **看似是数组**。也就是说，它们有 `length` 和索引属性，但是也可能有其它的非数字的属性和方法，这通常是我们不需要的。`for..in` 循环会把它们都列出来。所以如果我们需要处理类数组对象，这些“额外”的属性就会存在问题。

2. `for..in` 循环适用于普通对象，并且做了对应的优化。但是不适用于数组，因此速度要慢。



### 数组方法

#### splice

`delete obj.key` 是通过 `key` 来移除对应的值。 元素被删除了，但数组仍然有元素个数不变。对于对象来说是可以的，但是对于数组来说，我们通常希望剩下的元素能够移动并占据被释放的位置。我们希望得到一个更短的数组。所以应该使用特殊的方法。

arr.splice 可以添加，删除和插入元素。语法是：

```javascript
arr.splice(start, deleteCount, elem1, ..., elemN)
// 从索引 start 开始修改 arr。
// 删除 deleteCount 个元素并在当前位置插入 elem1, ..., elemN。
// 最后返回被删除的元素所组成的数组。
```

例如，从索引 `1` 开始删除 `1` 个元素（当只填写了 `splice` 的 `start` 参数时，将删除从索引 `start` 开始的所有数组项）：

```javascript
let arr = ["I", "study", "JavaScript"];

// 从索引 1 开始删除 1 个元素
arr.splice(1, 1); 
alert( arr ); // ["I", "JavaScript"]
```

删除了 3 个元素，并用另外两个元素替换它们：

```javascript
let arr = ["I", "study", "JavaScript", "right", "now"];

// 删除数组的前三项，并使用其他内容代替它们
arr.splice(0, 3, "Let's", "dance");
alert( arr ) // 现在 ["Let's", "dance", "right", "now"]
```

我们可以将 `deleteCount` 设置为 `0`，`splice` 方法就能够插入元素而不用删除任何元素：

```javascript
let arr = ["I", "study", "JavaScript"];

// 从索引 2 开始
// 删除 0 个元素
// 然后插入 "complex" 和 "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"
```



#### slice

它和字符串的 `str.slice` 方法有点像，就是把子字符串替换成子数组。它会返回一个新数组，将所有从索引 `start` 到 `end`（不包括 `end`）的数组项复制到一个新的数组。`start` 和 `end` 都可以是负数，在这种情况下，从末尾计算索引。语法是：

```javascript
arr.slice([start], [end])
```

例如：

```javascript
let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s（复制从位置 1 到位置 3 的元素）

alert( arr.slice(-2) ); // s,t（复制从位置 -2 到尾端的元素）
```

我们也可以不带参数地调用它：`arr.slice()` 会创建一个 `arr` 的副本。其通常用于获取副本，以进行不影响原始数组的进一步转换。



#### sort

把数组中的任意元素转换为字符串，按照Unicode编码对数组进行升序排序，会改变原数组。对数字进行排序时可能会得到一个不正确的结果。

对数字进行排序时，可以传递一个回调函数作为参数，指定排序的规则：

```javascript
let sort = []
arr.sort((a,b) => a-b) // 升序排列
arr.sort((a,b) => b-a) // 降序排列
```



#### forEach

用来遍历数组，需要一个回调函数作为参数，数组中有几个元素，回调函数就会调用几次，每次调用都会将数组中的数据当作参数传递。

回调函数中有三个参数：

- element 当前的元素
- index 当前元素的索引
- array 被遍历的数组

```javascript
arr = []
arr.forEach((element, index, array) =>{
    console.log(element) // 打印元素
})
```



#### filter

将数组中符合的条件的元素保存到一个新数组中返回。需要一个回调函数作为参数，会为每一个元素调用回调函数，并根据返回值来判断是否将元素添加到新数组中。例如：

```javascript
arr = [1, 2, 3, 4, 5]
// 获取数组中的所有偶数
let result = arr.filter(ele => ele % 2 === 0)
```



#### map

根据当前数组生成一个新数组，需要一个回调函数作为参数，回调函数的返回值会成为新数组中的元素。可以简化许多操作。

```javascript
arr = [1, 2, 3, 4, 5]
// 新数组中每个元素都是原来的二倍
let result = arr.map(ele => ele * 2)

// 给原数组的每个元素添加<li></li>标签
let result = arr.map(ele => '<li>' + ele + '</li>')
```



#### reduce

可以将一个数组中的所有元素整合为一个值。

参数：

1. 回调函数：指定合并的规则。
2. 初始值（可选参数）。

```javascript
arr = [1, 2, 3, 4, 5]
let result = arr.reduce((a,b) => { 
    // a是上一次运算的结果，b是下一次要进行运算的数据
    return a + b
})
// 可以指定初始值：
let result = arr.reduce((a,b) => a + b, 10)
```



### 解构赋值

JavaScript 中最常用的两种数据结构是 `Object` 和 `Array`。

- 对象是一种根据键存储数据的实体。
- 数组是一种直接存储数据的有序列表。

但是，当我们把它们传递给函数时，函数可能不需要整个对象/数组，而只需要其中一部分。

**解构赋值** 是一种特殊的语法，它使我们可以将数组或对象“拆包”至一系列变量中，有时这样做更方便。解构操作对那些具有很多参数和默认值等的函数也很奏效。

```javascript
// 我们有一个存放了名字和姓氏的数组
let arr = ["John", "Smith"]

// 解构赋值。解构并不意味着破坏。它拆开了数组或对象，将其中的各元素复制给一些变量。
// 原来的数组或对象自身没有被修改。
// 相当于设置 firstName = arr[0]，以及 surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith，我们可以使用这些变量而非原来的数组项了。

// 使用解构赋值来交换变量：
[firstName, surname] = [surname, firstName]
```

当与 `split` 函数（或其他返回值为数组的函数）结合使用时，看起来更优雅：

```javascript
let [firstName, surname] = "John Smith".split(' ');
alert(firstName); // John
alert(surname);  // Smith
```

可以通过添加额外的逗号来丢弃数组中不想要的元素：

```javascript
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
/* 数组的第二个元素被跳过了，第三个元素被赋值给了 title 变量。数组中剩下的元素也都被跳过了（因为在这没有对应给它们的变量）。 */
alert( title ); // Consul

// 如果我们还想收集其余的数组项，我们可以使用三个点 "..." 来再加一个参数以获取其余数组项：
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest 是包含从第三项开始的其余数组项的数组
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
```


