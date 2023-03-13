## 对象

对象用来存储键值对和更复杂的实体。原始值属于不可变类型，一旦创建就无法修改，在内存中不会创建重复的原始值。对象属于可变类型，对象创建完成后，可以任意地添加、删除、修改对象中的属性。

[TOC]

### 创建对象

可以用下面两种语法中的任一种来创建一个空的对象（“空柜子”）：

```javascript
let user = new Object(); // “构造函数” 的语法
let user = {};  // “字面量” 的语法
```

在创建对象的时候，可以立即将一些属性以键值对的形式放到 `{ }` 中。属性有键（或者也可以叫做“名字”或“标识符”），位于冒号 `":"` 的前面，冒号的后边是值，值可以是任意类型：

```javascript
let user = {     // 一个对象
  name: "John",  // 键 "name"，值 "John"
  age: 30,       // 键 "age"，值 30
  "likes birds": true,  
// 也可以用多字词语来作为属性名，多词属性名必须加引号
// 最后一个属性应以逗号结尾。这叫做尾随（trailing）或悬挂（hanging）逗号。
// 这样便于我们添加、删除和移动属性。
};
// 生成的 user 对象可以被想象为一个放置着两个标记有 “name” 和 “age” 的文件的柜子


// 读取文件的属性（可以使用点符号访问属性值）：
alert( user.name ); // John
alert( user.age ); // 30


// 多词属性不是有效的变量标识符，此时点操作就不能用了，它认为我们在处理 user.likes
// 在遇到意外的 birds 时给出了语法错误：
user.likes birds = true
// 方括号可用于任何字符串：
user["likes birds"] = true;
alert(user["likes birds"]); // true，读取


// 用 delete 操作符移除属性：
delete user.age;
delete user["likes birds"];
```



#### 方括号

点符号要求 `key` 是有效的变量标识符。这意味着：不包含空格，不以数字开头，也不包含特殊字符（允许使用 `$` 和 `_`）。

有另一种方法，就是使用方括号，可用于任何字符串。请注意方括号中的字符串要放在引号中，单引号或双引号都可以。方括号同样提供了一种可以通过任意表达式来获取属性名的方式：

```javascript
let user = {};
let key = "likes birds";

// 跟 user["likes birds"] = true; 一样
user[key] = true; // 在对象user中添加属性 "likes birds" = true
```

变量 `key` 可以是程序运行时计算得到的，也可以是根据用户的输入得到的。然后我们可以用它来访问属性，点符号不能以类似的方式使用。例如：

```javascript
let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// 访问变量
alert( user[key] ); // John（如果输入 "name"）
```



#### 计算属性

当创建一个对象时，我们可以在对象字面量中使用方括号，这叫做**计算属性**。计算属性的含义很简单：`[fruit]` 含义是属性名应该从 `fruit` **变量**中获取。例如：

```javascript
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // 属性名是从 fruit 变量中得到的
};
alert( bag.apple ); // 5 如果 fruit="apple"

// 本质上，这跟下面的语法效果相同：
let fruit = prompt("Which fruit to buy?", "apple"); //用户输入的值赋给fruit
let bag = {};
// 从 fruit 变量中获取值
bag[fruit] = 5;
```

我们可以在方括号中使用更复杂的表达式：

```javascript
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
```

方括号比点符号更强大。它允许任何属性名和变量，但写起来也更加麻烦。所以，大部分时间里，当属性名是已知且简单的时候，就使用点符号。如果我们需要一些更复杂的内容，那么就用方括号。



#### 属性值简写

在实际开发中，我们通常用已存在的变量当做属性名。例如：

```javascript
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ……其他的属性
  };
}

let user = makeUser("John", 30); //给对象 user 通过函数添加属性
alert(user.name); // John
```

在上面的例子中，属性名跟变量名一样。这种通过变量生成属性的应用场景很常见，在这有一种特殊的 **属性值缩写** 方法，使属性名变得更短。可以用 `name` 来代替 `name:name` 像下面那样：

```javascript
function makeUser(name, age) {
  return {
    name, // 与 name: name 相同
    age,  // 与 age: age 相同
    // ...
  };
}
```

我们可以把属性名简写方式和正常方式混用：

```javascript
let user = {
  name,  // 与 name:name 相同
  age: 30
};
```



#### 属性名的限制

变量名不能是编程语言的某个保留字，如 “for”、“let”、“return” 等。但属性命名没有限制，属性名可以是任何字符串或者 symbol ，**其他类型会被自动地转换为字符串**。

例如，当数字 `0` 被用作对象的属性的键时，会被转换为字符串 `"0"`：

```javascript
let obj = {
  0: "test" // 等同于 "0": "test"
};

// 都会输出相同的属性（数字 0 被转为字符串 "0"）
alert( obj["0"] ); // test
alert( obj[0] ); // test (相同的属性)
```

我们不能将 **`__proto__` 属性**设置为一个非对象的值：

```javascript
let obj = {};
obj.__proto__ = 5; // 分配一个数字
alert(obj.__proto__); // [object Object] —— 值为对象，与预期结果不同
```

我们从代码中可以看出来，把它赋值为 `5` 的操作被忽略了。



### 属性存在测试

#### ”in“操作符

相比于其他语言，JavaScript 的对象有一个需要注意的特性：能够被访问任何属性。即使属性不存在也不会报错。读取不存在的属性只会得到 `undefined`。所以我们可以很容易地判断一个属性是否存在：

```javascript
let user = {};
alert( user.noSuchProperty === undefined ); 
// true 读取不存在的属性得到 undefined，两者比较后相等得到 ture 意思是没有这个属性
```

这里还有一个特别的，检查属性是否存在的操作符 `"in"`。用`"in"`运算符检查属性时，无论属性在自身对象中还是在原型中，都会返回true。

```javascript
let user = { name: "John", age: 30 };

// in 的左边必须是属性名，通常是一个带引号的字符串：
alert( "age" in user ); // true，user.age 存在
alert( "blabla" in user ); // false，user.blabla 不存在。

// 如果省略引号，就意味着左边是一个变量，它应该包含要判断的实际属性名。
let key = "age";
alert( key in user ); // true，属性 "age" 存在
```

大部分情况下与 `undefined` 进行比较来判断就可以了。但有一个例外情况，那就是属性存在，但存储的值是 `undefined` 的时候：

```javascript
let obj = {
  test: undefined
};

alert( obj.test ); // 显示 undefined，所以属性不存在？

alert( "test" in obj );
// true，属性 obj.test 事实上是存在的，所以 in 操作符检查通过
```



#### for...in循环

为了遍历一个对象的所有键（key），可以使用一个特殊形式的循环：`for..in`。这跟 `for(;;)` 循环是完全不一样的东西。

语法：

```javascript
for (key in object) {
  // 遍历每个属性，此处添加对此对象属性中的每个键执行的代码
}
```

例如列出 `user` 所有的属性：

```javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // 属性键的值
  alert( user[key] ); // John, 30, true
}
```

所有的 “for” 结构体都允许我们在循环中定义变量，像这里的 `let key`。我们可以用其他属性名来替代 `key`。例如 `"for(let prop in obj)"` 也很常用。



#### 属性的顺序

属性有特别的顺序：整数属性会被进行排序，其他属性则按照创建的顺序显示。这里的“整数属性”指的是一个可以在不做任何更改的情况下与一个整数进行相互转换的字符串。例如，让我们考虑一个带有电话号码的对象：

```javascript
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for(let code in codes) {
  alert(code); // 1, 41, 44, 49
}
```

对象可用于面向用户的建议选项列表。如果我们的网站主要面向德国观众，那么我们可能希望 `49` 排在第一。`"49"` 是一个整数属性名，因为我们把它转换成整数，再转换回来，它还是一样的。但是 “+49” 和 “1.2” 就不行了：

```javascript
// Number(...) 显式转换为数字
// Math.trunc 是内建的去除小数部分的方法。
alert( String(Math.trunc(Number("49"))) ); // "49"，相同，整数属性
alert( String(Math.trunc(Number("+49"))) ); // "49"，不同于 "+49" ⇒ 不是整数属性
alert( String(Math.trunc(Number("1.2"))) ); // "1"，不同于 "1.2" ⇒ 不是整数属性
```

如果属性名不是整数，那它们就按照创建时的顺序来排序，所以，为了解决电话号码的问题，我们可以使用非整数属性名来 **欺骗** 程序。只需要给每个键名加一个加号 `"+"` 前缀就行了。



### 对象的引用和复制

**对象通过引用被赋值和拷贝。赋值了对象的变量存储的不是对象本身，而是该对象“在内存中的地址” ，就是对该对象的“引用”。当一个对象变量被复制，只是引用被复制，而该对象自身并没有被复制。** 因此，拷贝此类变量或将其作为函数参数传递时，所拷贝的是引用，而不是对象本身。所有通过被拷贝的引用的操作（如添加、删除属性）都作用在同一个对象上。

对象与原始类型的根本区别之一是，对象是通过引用（传递地址）存储和复制的，而原始类型：字符串、数字、布尔值等 —— 总是“作为一个整体”复制。 

例如，现在我们有了两个变量，它们保存的都是对同一个对象的引用，我们可以通过其中任意一个变量来访问该对象并修改它的内容：

```javascript
let user = { name: 'John' };
let admin = user;
admin.name = 'Pete'; // 通过 "admin" 引用来修改
alert(user.name); // 'Pete'，修改能通过 "user" 引用看到
```

这就像我们有一个带有两把钥匙的柜子，使用其中一把钥匙（`admin`）打开柜子并更改了里面的东西。那么，如果我们稍后用另一把钥匙（`user`），我们仍然可以打开同一个柜子并且可以访问更改的内容。

通过引用对对象进行存储的一个重要的副作用是**声明为 `const` 的对象可以被修改**。例如：

```javascript
const user = {
  name: "John"
};
user.name = "Pete"; // (*)
alert(user.name); // Pete
```

看起来 `(*)` 行的代码会触发一个错误，但实际并没有。`user` 的值是一个常量，它必须始终引用同一个对象，但该对象的属性可以被自由修改。只有当我们尝试将 `user=...` 作为一个整体进行赋值时，`const user` 才会报错。



### 对象的比较

仅当两个对象为同一对象时，两者才相等。例如，这里 `a` 和 `b` 两个变量都引用同一个对象，所以它们相等：

```javascript
let a = {};
let b = a; // 复制引用

alert( a == b ); // true，都引用同一对象
alert( a === b ); // true
```

而这里两个独立的对象则并不相等，即使它们看起来很像（都为空）：

```javascript
let a = {};
let b = {}; // 两个独立的对象

alert( a == b ); // false
```

对于类似 `obj1 > obj2` 的比较，或者跟一个原始类型值的比较 `obj == 5`，对象都会被转换为原始值。



### 对象的序列化

序列化指将对象转换为一个可以储存的格式。JS中对象的序列化通常是将一个对象转换为字符串，称为JS字符串。对象转换为字符串后，可以在不同的语言之间进行传递。

JS中有一个工具类 JSON（Javascript Object Notation）JS对象表示法。

```javascript
const obj = {
    name:"小明"
    age = 18
}

// 将obj转换为 JSON 格式字符串:
const str = JSON.stringify(obj)

// 将 JSON 格式字符串转换为对象：
const newObj = JSON.parse(str)
```

可以手动编写 JSON 字符串，很多程序的配置文件就是使用JOSN编写的。

编写时要注意：

1. JSON 字符串有两种类型：
   - JSON对象{}
   - JSON数组[]
2. JSON字符串的属性名必须使用双引号引起来。
3. JSON中可以使用的 属性值（元素）
   - 数字（Number）
   - 字符串（String）
   - 布尔值（Boolean）
   - 空值（Null）
   - 对象（Object{}）
   - 数组（Array[]）

4. JSON的格式和JS对象的格式基本上是一致的，注意最后一个属性后不要加逗号。



### 对象的克隆与合并

拷贝一个对象变量会又创建一个对相同对象的引用。若要复制一个对象，可以创建一个新对象，通过遍历已有对象的属性，并在原始类型值的层面复制它们，以实现对已有对象结构的复制。

```javascript
let user = {
  name: "John",
  age: 30
};

let clone = {}; // 新的空对象

// 将 user 中所有的属性拷贝到其中
for (let key in user) {
  clone[key] = user[key];
}

// 现在 clone 是带有相同内容的完全独立的对象
clone.name = "Pete"; // 改变了其中的数据

alert( user.name ); // 原来的对象中的 name 属性依然是 John
```

#### Object.assign方法（浅拷贝）

语法是：

```javascript
Object.assign(dest, [src1, src2, src3...])
```

- 第一个参数 `dest` 是指目标对象。
- 更后面的参数 `src1, ..., srcN`（可按需传递多个参数）是源对象。
- 该方法将所有源对象的属性拷贝到目标对象 `dest` 中。换句话说，从第二个开始的所有参数的属性都被拷贝到第一个参数的对象中。
- 调用结果返回 `dest`。

可以用 `Object.assign` 代替 `for..in` 循环来进行简单克隆：

```javascript
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);
// 它将 user 中的所有属性拷贝到了一个空对象中，并返回这个新的对象。
```

我们可以用它来合并多个对象：

```javascript
let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// 将 permissions1 和 permissions2 中的所有属性都拷贝到 user 中：
Object.assign(user, permissions1, permissions2);
// 现在 user = { name: "John", canView: true, canEdit: true }

// 如果被拷贝的属性的属性名已经存在，那么它会被覆盖：
Object.assign(user, { name: "Pete" });
alert(user.name); // 现在 user = { name: "Pete" }
```

#### 深层克隆

到现在为止，我们都假设 `user` 的所有属性均为原始类型。但属性可以是对其他对象的引用。例如：

```javascript
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height ); // 182
```

现在这样拷贝 `clone.sizes = user.sizes` 已经不足够了，因为 `user.sizes` 是个对象，它会以引用形式被拷贝。因此 `clone` 和 `user` 会共用一个 sizes：

```javascript
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true，同一个对象

// user 和 clone 分享同一个 sizes
user.sizes.width++;       // 通过其中一个改变属性值
alert(clone.sizes.width); // 51，能从另外一个获取到变更后的结果
```

为了解决这个问题，并让 `user` 和 `clone` 成为两个真正独立的对象，我们应该使用一个拷贝循环来检查 `user[key]` 的每个值，如果它是一个对象，那么也复制它的结构。这就是所谓的“深拷贝”。



#### 总结

对象是具有一些特殊特性的关联数组。我们可以通过使用带有可选 **属性列表** 的花括号 `{…}` 来创建对象，一个属性就是一个键值对（“key: value”），其中键（`key`）是一个字符串（也叫做属性名），值（`value`）可以是任何值。

它们存储属性（键值对），其中：

- 属性的键必须是字符串或者 symbol，通常是字符串。
- 值可以是任何类型。

我们可以用下面的方法访问属性：

- 点符号: `obj.property`。
- 方括号 `obj["property"]`，方括号允许从变量中获取键，例如 `obj[varWithKey]`。

其他操作：

- 删除属性：`delete obj.prop`。
- 检查是否存在给定键的属性：`"key" in obj`。
- 遍历对象：`for(let key in obj)` 循环。

我们学习的叫做“普通对象（plain object）”，或者就叫对象。

JavaScript 中还有很多其他类型的对象：

- `Array` 用于存储有序数据集合，
- `Date` 用于存储时间日期，
- `Error` 用于存储错误信息。
- ……等等。

它们有着各自特别的特性。有时候大家会说“Array 类型”或“Date 类型”，但其实它们并不是自身所属的类型，而是属于一个对象类型即 “object”。它们以不同的方式对 “object” 做了一些扩展。