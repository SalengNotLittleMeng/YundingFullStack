# JavaScript

## 第一章  初识JavaScript

### 1.1.  JavaScript 是什么

**解释性语言**

【概念】  JavaScript 是一种运行在<font color='red'>**客户端**</font>的<font color='orange'>**脚本语言**</font>  （ Script 是脚本的意思 ）

**脚本语言** ：不需要编译，运行过程中由js解释器（js 引擎）**逐行**来进行**解释**并执行

解释器是在**运行时进行及时的解释**，并立即执行（当编译器一解释的方式运行的时候，也成为解释器）

也可以基于 Node.js 技术进行服务器端编程

### 1.2. HTML / CSS / JS 的关系

1.  HTML / CSS 标记语言 --  描述类语言
   -  HMTL 决定网页结构和内容（决定看到什么）相当于人的身体
   -  CSS 决定网页呈现给用户的模样 （决定好不好看）相当于给人穿衣服 化妆
2.  JS 脚本语言 --  编程类语言
   -  实现业务逻辑和页面控制（决定功能）相当于人的各种动作

### 1.3. 浏览器执行JS简介

浏览器分成两部分:**渲染引擎**和**JS引擎**

- 渲染引擎：用来解析HTML与CSS,俗称内核。 （比如chrome浏览器的blink , 老版本的webkit）
- JS引擎：也称为JS解释器。用来读取网页中的JavaScript代码,对其处理后运行。

> 浏览器本身并不会执行JS代码,而是通过内置JavaScript引擎(解释器)来执行JS代码。JS 引擎执行代码时逐行解释每一-句源码(转换为机器语言) , 然后由计算机去执行,所以JavaScript语言归为脚本语言,会逐行解释执行。

### 1.4. JS 的组成

JS：ECMAScript、DOM、BOM

1. ECMAScript：规定了JS的一些**基础语法**    ECMAScript 规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准、

2. DOM  ——  文档对象模型

   文档对象模型 ( Document Object Model ,简称DOM)，是W3C组织推荐的处理可扩展标记语言的标准编程接口。通过DOM提供的接口可以对页面上的各种元素进行操作(大小、位置、颜色等) 。

3. BOM  ——  浏览器对象模型

   浏览器对象模型 (Browser Object Model ,简称BOM)，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过BOM可以操作浏览器窗口,比如弹出框、控制浏览器跳转、获取分辨率等。

### 1.5. JS初体验

1. 行内式

   放在<body>里面

   ```html
   <input type="button" value="按钮" onclick="alert('hello world')">
   ```

2. 内嵌式

   放在<head>里面

   ```html
   <script>
       alert('hello world');
   </script>
   ```

3. 外部式

   另创建一个 .js  的文件

   ```html
   <!--引用 .js 文件-->
   <script src="my.js"></script>
   ```



------



## 第二章  JavaScript输入输出语句

|         方法          |                说明                |  归属  |
| :-------------------: | :--------------------------------: | :----: |
|    alert  （输出）    |          浏览器弹出警示框          | 浏览器 |
| console.log  （输出） |      浏览器控制台打印输出信息      | 浏览器 |
|   prompt  （输入）    | 浏览器弹出输入框，用户可以输入信息 | 浏览器 |

```html
<script>
	prompt('请输入您的昵称');
    alert('计算的结果是');
    console.log('我是程序员能看到的');
</script>
```



------



## 第三章  变量

### 3.1. 变量概述

变量在内存中的储存的本质：变量是程序在内存中申请的一块用来存放数据的空间。

### 3.2. 变量的使用

#### 3.2.1. 声明变量及赋值

```html
<script>
	var age;    //age为我们自己声明的变量
    age = 10;
    var myname = '张三';
    console.log(age);
</script>
```

【注意】

```typescript
var a = b = c = 9;
// 相当于 var a = 9; b = 9; c = 9;    
// b c前是没有var声明，当全局变量看
// 集体声明 var a = 9, b = 9, c = 9;
```



#### 3.2.2.  变量  ——  弹出用户名（案例）

```html
<script>
	var myname = prompt('Please input your name');
    alert(myname);
</script>
```

### 3.3. 变量的语法扩展

#### 3.3.1. 更新变量

```html
<script>
    var myname = 'Tom';
    console.log(myname);
    myname = 'Peter';
</script>
```

#### 3.3.2. 声明变量的特殊情况

```html
<script>
    // 1. 只声明 不赋值
    var sex;
    console.log(sex);  // undefined
    // 2. 不声明 不赋值
    console.log(age);  // 报错
    // 3. 不声明 直接用
    age = 18；
    console.log(age);  // 18
</script>
```

### 3.4. 变量声明规范

1. a~z  A~Z 1~9 下划线
2. 不能以数字开头
3. 不能是关键字、保留字

【注意】 name 这个变量可能在有些网站有特殊含义

### 3.5. 交换变量

```html
<script>
    // 类似冒泡排序
    var num1 = 1, num2 = 2, temp;
    temp = num1;
    num1 = num2;
    num2 = temp;
</script>
```

### 3.6 变量的作用域（全局变量和局部变量）

- 全局变量：在全局下都可以使用

  <font color='red'>【注意】</font> 如果在函数内部没有声明直接赋值的变量也属于全局变量

- 局部变量：只能在局部（函数内部）中使用

  <font color='red'>【注意】</font> 函数的形参也可以看作是局部变量

- 从执行效率看全局变量和局部变量

  1. 全局变量：只有浏览器关闭的时候才会销毁，比较占内存资源
  2. 局部变量：当程序执行完毕就会销毁，比较结缘内存资源

```typescript
// 1. 全局变量
var num = 10;
console.log(num);
function fn(){
    console.log(num);
}
fn();
// 2. 局部变量
function fun(aru){
    var num1 = 11;        // 局部变量
    num2 = 22;            // 全局变量
}
fun();
console.log(num1);        // 报错
console.log(num2);        // 22
console.log(aru);
```



------



## 第四章  数据类型

### 4.1. 变量的数据类型

1. **js 的变量数据类型是只有程序在运行过程中根据<font color='red'>*等号右边的值*</font> 来确定的**
2. **js 是动态语言，变量的数据类型是可以变化的**

```html
<script>
    //  int num = 6;   C语言
    var num;       // 这里的 num 是不确定属于哪种数据类型的
    var num = 10;  // num 是属于数字型
    var name = 'Tom';  // name 字符串型
/**************************************************/
    var x = 8;   // x 是数字型
    x = 'Anna';  // x 是字符串型
</script>
```

### 4.2. 数据类型的分类

#### 4.2.1. 简单数据类型

| 简单数据类型 | 说明                                                         | 默认值    |
| ------------ | ------------------------------------------------------------ | --------- |
| Number       | 数字型，包含：整型值、浮点型值 12 3.14  无穷大（Infinity）非数字（NaN） | 0         |
| Boolean      | 布尔值类型，true false 0 1                                   | false     |
| String       | 字符串类型，"Tom"  【注意】js 中字符串都带引号（单引号更好） | ""        |
| Udefined     | var a;  声明了变量 a 但是没有赋值                            | undefined |
| Null         | var a = null;  声明了变量a为空值                             | null      |

##### 1.数字型Number

isNaN() 这个方法用来判断非数字，并且返回一个值。如果是数字返回false，如果不是数字返回的是true

##### 2. 字符串型String

###### 1. 字符串声明

1. 用引号引起来
2. 引号会就近匹配  外单内双，外双内单

######  2. 字符串转义符

（同C语言\n \t \b 空格）

###### 3. 字符串长度

通过字符串的**length**属性可以获取整个字符串的长度

```html
<script>
    var str = 'My name is Tom';
    console.log(str.length);   //14
</script>
```

###### 4. 字符串的拼接

```html
<script>
    console.log('你好'+'世界');  // 你好世界
    console.log('你好'+18);      // 你好18
    console.log('你好'+true);    // 你好true
    console.log(12+12);          // 24
    console.log('10'+12);        // 1012
</script>
//  数值相加，字符相连
```

```html
<script>
    console.log('Tom'+18+'岁');     // Tom18岁
    var age = 10；
    console.log('Tom'+ age +'岁');  // Tom10岁
</script>
```

##### 3. 布尔类型Boolean

```html
<script>
    var flag = true;         // true参与运算当1来看
    var flag1 = false;       // false参与运算当0来看
    console.log(flag+1);     // 2
    console.log(flag1+1);    // 1
</script>
```

##### 4. 未定义类型Udefined  及  空值类型Null

```html
<script>
    var str;
    console.log(str);                 // undefined
    var variable = undefined;
    console.log(varible + 'hello');   // undefinedhello
    console.log(varible + 1);         // NaN
</script>
```

```html
<script>
    var space = null;         
    console.log(space+'你好');     // null你好
    console.log(space+1);          // 1
</script>
```

#### 4.2.2 复杂数据类型（ object ）

### 4.3 获取变量的数据类型

#### 4.3.1 获取检测变量的数据类型

typeof 可以用来检测变量的数据类型

```html
<script>
    var num = 10;
    console.log(typeof num);    // number
    var str = 'Tom';
    console.log(typeof str);    // string
    var flag = true;
    console.log(typeof flag);   // boolean
    var vari = undefined;
    console.log(typeof vari);   // undefined
    var timer = null;
    console.log(typeof timer);  // object
</script>
```

```html
<script>
    // prompt 取过来的值是：字符型的
    var age = prompt('请输入您的年龄');
    console.log(age);          // 18
    console.log(typeof age);   // string
</script>
```

#### 4.3.2 字面量

字面量是在源代码中一个固定值的表示法，通俗来说，就是字面量表示如何表达这个值

- 数字字面量：8，9，10
- 字符串字面量：'字面量'  "你好"
- 布尔字面量：true，false

### 4.4 数据类型转换

- 转换为数字型
- 转换成字符串型
- 转换成布尔型

#### 4.4.1 转换成字符串型

| 方式               | 说明                         | 案例                                |
| ------------------ | ---------------------------- | ----------------------------------- |
| toString()         | 转换成字符串                 | var num = 1; alert(num.toString()); |
| String()           | 转换成字符串                 | var num = 1; alert(String(num));    |
| **加号拼接字符串** | 和字符串拼接的结果都是字符串 | var num = 1; alert(num+'字符串')    |

-  toString() 和 String()  使用方式不一样
- 三种转换方式，更倾向于使用加号拼接字符串方式，也称隐式转换

```html
<script>
    // 1. 吧数字型转换为字符串型
    var num = 10;
    var str = num.toString();
    console.log(str);
    // 2. 利用String()函数实现转换
    console.log(String(num));
    // 3. 利用 + 拼接字符串的方法实现转换效果  隐式转换
    console.log(num + '');
</script>
```

#### 4.4.2 <font color='red'>转换成数字型</font>

| 方式                       | 说明                             | 案例              |
| -------------------------- | -------------------------------- | ----------------- |
| **parseInt(string) 函数**  | 将string类型转换成**整数**数值型 | parseInt('12')    |
| **paseFloat(string) 函数** | 将string类型转换成浮点数         | paseFloat('3.14') |
| Number() 强制转换函数      | 将string类型转换成数值型         | Number('12')      |
| js 隐式转换 （ - * / ）    | 利用算术运算隐式转换为数值型     | '12' - 0          |

```html
<script>
    var age = prompt('请输入您的年龄')；
    // 1. parseInt(变量) 整数
    console.log(parseInt(age));      // 18
    console.log(parseInt('3.14'));   // 3
    console.log(parseInt('120px'));  // 120 会去掉px单位
    // 2. paseFloat(变量) 浮点数
    console.log(parseFloat('3.14'));
    // 3. Number(变量)
    var str = '123';
    console.log(Number(str));
    console.log(Number('12'));
    // 4. 算术运算 - * /
    console.log('12' - 0);        // 12
    console.log('123' - '120');   // 3
</script>
```

#### 4.4.3 转换成布尔型

| 方式               | 说明                 | 案例            |
| ------------------ | -------------------- | --------------- |
| Boolean(变量) 函数 | 其他类型转换成布尔值 | Boolean('true') |

- 代表**空、否定的值**会转换成 false  如 ''、0、NaN、null、undefined
- 其余值都会被转换成 true



------



## 第五章  JavaScript 运算符

### 5.1 算术运算符

同C语言（ + - * / % ）   先乘除，后加减

【注意】浮点数在算术运算里会有问题，精度有问题，不能直接拿浮点数来直接判断是否相等

### 5.2 递增、递减运算符

性质同C语言

### 5.3 比较运算符

- ==  默认转换数据类型，会把字符串型的数据类型转换成数字型

  【要求】**值相等**即可

- ===  全等  

  【要求】两侧的**值**、**数据类型**完全一致才可以

### 5.4 逻辑运算符

【概念】逻辑运算符是用来进行布尔值运算的运算符，其返回值也是布尔值

#### 短路运算（逻辑中断）

【原理】当有多个表达式时，**左边的表达式值**可以**确定结果**时，就**不再继续运算右边**的表达式

##### 1.逻辑与短路运算

- 【语法】表达式1 && 表达式2

- 如果第一个表达式值为真，则返回表达式2

- 如果第一个表达式值为假，则返回表达式1

  ```html
  <script>
      console.log(123 && 456);           // 456
      console.log(0 && 456);             // 0
      console.log(0 || 456);             // 456
      console.log(null && 1+2 && 456);   // null
  </script>
  ```

##### 2. 逻辑或短路运算

- 【语法】表达式1 || 表达式2

- 如果第一个表达式值为真，则返回表达式1

- 如果第一个表达式值为假，则返回表达式2

  ```html
  <script>
      console.log(123 || 456);           // 123
      console.log(0 || 456);             // 456
  /***********************************************/    
      var num = 0;
      console.log(123 || num++);       // 123
      console.log(num);                // 0
  </script>
  ```

### 5.5 赋值运算符

同C语言

### 5.6 运算符优先级

![image-20221220165939005](C:\Users\麻花几路\AppData\Roaming\Typora\typora-user-images\image-20221220165939005.png)

- 一元运算符里面的**逻辑非优先级很高**
- && 比 || 优先级高



------



## 第六章  流程控制

流程控制主要有三种结构，分别是顺序结构、分支结构和循环结构

### 6.1 分支流程控制 （ if    switch  语句 ）

1. if 分支语句

2.  三元表达式 （ 条件表达式 ）

   `条件表达式 ？ 表达式1 ： 表达式2`

3.  switch 分支语句

   - 开发中，表达式经常写成变量
   - 变量的值（数据类型）必须和case的值（数据类型）===（全等），才可以执行case的语句
   - 注意break

### 6.2 循环流程控制

1.  for 分支语句
2.  while 分支语句
3.  do-while 分支语句

### 6.3 continue  break

1.  continue  跳出本次循环，继续下一次循环
2.  break       跳出整个循环，循环结束



------



## 第七章  数组

数组是指**一组数据的集合**，其中的每个数据被称作**元素**,，在数组中可以**存放任意类型的元素**。数组是一种将**一组数据存储在单个变名下**的优雅方式。

数组里**元素类型是没有限制**的。

### 7.1 创建数组

- 利用 **new** 创建数组

  ```typescript
  var 数组名 = new Array();
  var arr = new Array;      // 创建一个新的空数组
  ```

  【注意】Array中的A必须大写

- 利用**字面量**创建数组

  ```typescript
  // 1. 使用数组字面量方式创建空的数组
  var 数组名 = [];
  // 2. 使用数组字面量方式创建带初始值的数组
  var 数组名 = ['Tom', 'Jerry', 'Paky'];
  ```

### 7.2 获取数组元素

数组的索引：用来访问数组元素的序号（从0开始）

数组中没有的元素，最终输出结果是undefined

### 7.3 遍历数组

1. 利用 for 循环，将数组遍历
2. 数组的长度：使用 `数组名.length` 可以访问数组元素的数量

```html
<!-- 求数组中的最大值 -->
<script>
    var arr = [1, 3, 5, 9, 7];
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    console.log('最大值：'+max);
</script>
```

### 7.4 数组中新增元素

1. 通过修改 length 长度新增数组元素

   - 可以通过修改 length 长度来实现数组扩容的目的

   - length 属性是可读写的

2. 通过修改数组索引号新增数组元素

   - 若原索引号未被占用，则追加数组的元素
   - 若原索引号已被占用，则替换原数组的元素

```html
<script>
    // 1. 修改 length 长度
    var arr = ['abc','def','ABC'];
    arr.length = 5;
    // 2. 修改数组索引号
    arr[3] = 'DEF';
    arr[0] = 'opq';
    console.log(arr);     // ['opq','def','ABC']
    arr = 'abcd'；
    console.log(arr);     // 'abcd'
    // 不能直接给数组名赋值，否则里面的数组元素都将被覆盖
</script>
```

```html
<script>
    // 方法1
    var arr = [2, 0, 6, 4, 55, 3, 52, 1, 23, 7];
    var newArr = [];
    var j = 0;
    for ( var i = 0; i < arr.length; i++) {
        if ( arr[i] >= 10 ) {
            newArr[j] = arr[i];
            j++;
        }
    }
    // 方法2
    var arr = [2, 0, 6, 4, 55, 3, 52, 0, 23, 7];
    var newArr = [];
	// 刚开始 newArr.length 为 0
    for ( var i = 0; i < arr.length; i++) {
        if ( arr[i] >= 10 ) {
            newArr[newArr.length] = arr[i];
        }
    }
</script>
```

### 7.5 数组案例

#### 7.5.1 数组去重

```html
<script>
    var arr = [2, 0, 6, 4, 55, 3, 52, 0, 23, 7];
    var newArr = [];
    for ( var i = 0; i < arr.length; i++) {
        if ( arr[i] != 0 ) {
            newArr[newArr.length] = arr[i];
        }
    }
    console.log(newArr);
</script>
```

#### 7.5.2 翻转数组

```html
<script>
    var arr = ['a','b','c','d'];
    var newArr = [];
    for ( var i = arr.length - 1; i >= 0; i-- ) {
        newArr[newArr.length] = arr[i];
    }
    console.log(newArr);      // ['d','c','b','a']
</script>
```

#### 7.5.3 数组排序（ 冒泡排序 ）

```html
<script>
    var arr = [5,4,3,2,1];
    for ( var i = 0; i <= arr.length - 1; i-- ) {
        // 外层循环控制趟数
        for ( var j = 0; j <= arr.length - i - 1; j++) {
            // 内层循环控制每一趟的交换次数
            if ( arr[j] > arr[j+1] ) {
                // 交换两个变量
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
</script>
```



------



## 第八章  函数

### 8.1 函数的声明和调用

**函数**：就是封装了一段可被**重复调用执行**的**代码块**。

```html
<script>
    // 声明函数
    function 函数名( 形参1, 形参2... ) {
        函数体
    }
    // 调用函数
    函数名( 实参1, 实参2... );      // 通过调用函数名来执行函数体代码
</script>
```

- 声明函数

  1. function 声明函数的关键字，全部小写
  2. 函数是做某件事情，函数名一般是动词
  3. 函数不调用，自己不执行

- 调用函数

  ​	调用函数的时候千万不要忘记加小括号哦

### 8.2 函数的参数

目的：利用函数的参数实现函数重复不同的代码

#### 8.2.1 形参与实参

```html
<script>
    function cook(aru) {    // 形参是接受实参的，aru = '酸辣土豆丝'，类似于变量，只不过不需要声明
        console.log(aru);
    }
    cook('酸辣土豆丝');
</script>
```

#### 8.2.2 函数形参与实参个数不匹配的问题

```html
<script>
    function getSum(num1, num2) {
        console.log(num1 + num2);
    }
    // 1. 若实参的个数和形参一致，则输出结果正常
    getSum(1, 2);            // 3
    // 2. 若输出的个数大于形参，则会取到形参的个数
    getSum(1, 2, 3);         // 3
    // 3. 若输出的个数小于形参，多余的形参定义为undefined，最终结果是NaN
    // 形参可以看作是不用声明的变量，num2是一个没有接收值的变量，结果就是undefined
    getSum(1);               // NaN
</script>
```

- 函数可以带参数也可以不带参数
- 声明函数的时候,函数名括号里面的是形参，形参的默认值为undefined调用函数的时候，函数名括号里面的是实参
- **多个参数**中间用**逗号分隔**
- 形参的个数可以和实参个数不匹配，但是结果不可预计，我们尽量要匹配
- 函数的形参也可以看作是**局部变量**

### 8.3 函数的返回值

```html
<script>
    // 格式
    function 函数名() {
        return 需要返回的结果;
    }
    函数名();
</script>
```

【注意】

1. 函数只是实现某种功能，最终的结果需要返回给函数的调用者 “ 函数名() ” ，通过return实现的
2. 只要函数遇到return，就把后面的结果返回狗日函数的调用者，即 函数名() = return后面的结果  
3. 在实际开发中，我们经常使用一个变量来接收函数的返回值

```html
<script>
    function getResult() {
        return 666;
    }
    grtResult();         // grtResult() = 666
    console.log(getResult());
/*********************************************/    
    function getSum (num1, num2) {
        return num1 + num2;
    }
    console.log(getSum(1, 2));
</script>
```

1. return 终止函数：return 语句后的代码不再执行
2. return 的返回值：return **只能返回一个值** ，如果用逗号隔开多个值，以最后一个为准。但我们可以用**数组**来返回多个值
3. 函数没有return，返回undefined

### 8.4 arguments 的使用

当我们不确定有多少个参数传递的时候，可以用 **arguments** 来获取。在JavaScript中，arguments实际上它是当前函数的一个**内置对象**。 所有函数都内置了一个arguments对象，arguments 对象中<font color='red'>**存储了传递的所有实参**</font>。

<font color='#7df46a'>arhuments 展示形式是一个伪数组</font>，因此可以进行遍历

- 具有 **length 属性**
- 按**索引**方式储存数据
- 不具有数组的 push，pop 等方法

<font color='red'>【注意】</font>只有函数才有 arguments 对象，而且每个函数都内置好了这个 arguments

```html
<script>
    function fn() {
        console.log(arguments);          // [1,2,3,4]
        console.log(arguments.length);   // 4
        console.log(arguments[2]);       // 3
    }
    fn(1, 2, 3, 4);
</script>
```

### 8.5 函数的两种声明方式

```html
<script>
    // 1. 利用函数关键字自定义函数
    function 函数名(形参) {
        
    }
    // 2. 函数表达式（匿名函数）
    var 变量名 = function(形参){
        
    }
    // 调用函数
    变量名(实参);
</script>
```

### 8.6 闭包

**闭包函数：**声明在一个函数中的函数，叫做闭包函数。

**闭包：**内部函数总是可以访问其所在的**外部函数**中声明的参数和变量，即使在其外部函数被返回（寿命终结）了之后。

**使用情况：**当我们需要隐藏一些不希望被别人访问的内容时就使用闭包

**构成闭包的要件：**

1. 函数的嵌套
2. 内部函数要引用外部函数中的变量
3. 内部函数要作为返回值返回

闭包利用的就是词法作用域。

**闭包的生命周期：**

1. 闭包在外部函数调用时产生，外部函数每次调用都会产生一个全新的闭包
2. 在内部函数丢失时销毁

```typescript
function outer(){
    let num = 0;
    return() => {
        num++;
        console.log(num);
    }
}
const newFn1 = outer();  // 独立的闭包
const newFn2 = outer();  // 独立的闭包
```

```typescript
// 函数在作用域在函数创建时就已经确定（词法作用域），和调用的位置无关
var a = '全局变量a';
function fn1() {
    console.log(a);
}
function fn2() {
    var a = 'fn中的a';
    fn1();
}
fn2();
function fn3() {
    var a = 'fn3中的a';
    function fn4() {
        console.log(a);
    }
    fn4();
}
fn3();
```

**注意事项：**

- 闭包主要用来隐藏一些不希望被外部访问的内容，者就意味着闭包需要占用一定的内存空间。
- 相较于类来说，闭包比较浪费内存空间（类可以使用原型）。
- 需要执行次数少时，可以使用闭包
- 需要大量创建实例时，使用类



------



## 第九章  预解析

```html
<script>
    // (1)------------------------------------------
    console.log(num);      // 报错
    // (2)------------------------------------------
    console.log(num);      // undefined  坑1
    var num = 10;
/*--------- 相当于 ---------
    var num;
    console.log(num);
    num = 10;      */
    // (3)------------------------------------------
    // fn();
    function fn() {
        console.log(11);   // 11
    }
    fn();   // 函数表达式的调用必须写在函数表达式的下面
    // (4)------------------------------------------
    fun();
    var fun = function() {
        console.log(22);   // 报错  坑2
    }
/*--------- 相当于 ---------
	var fun;
	fun();      所以报错
	fun = function() {
		console.log(22);
	}   */
</script>
```

JavaScript代码是由浏览器中的JavaScript解析器来执行的。JavaScript 解析器在运行JavaScript代码的时候分为两步：预解析和代码执行。

1. JS引擎运行 JS 分为两步：① 预解析   ② 代码执行
   1. 预解析：JS引擎会把JS里面所有的 var 、function 提升到当前作用域的最前面
   2. 代码执行：按照代码书写的顺序从上往下执行
2. 预解析分为：变量预解析（变量提升）和 函数预解析（函数提升）
   1. 变量提升：把所有的变量声明提升到当前的作用域最前面，不提升赋值操作
   2. 函数提升：把所有的函数声明提升到当前的作用域最前面，不调用函数



------



## 第十章  对象

对象是一组无序的相关**属性**和**方法**的集合

- 【属性】事物的<font color='red'>特征</font>，在对象中用属性来表示（常用名词）
- 【方法】事物的<font color='red'>行为</font>，在对象中用方法来表示（常用动词）

### 10.1 创建对象的三种方式

- 利用**字面量**创建对象
- 利用 **new Object** 创建对象
- 利用**构造函数**创建对象

#### 10.1.1 利用字面量创建对象

对象字面量：就是花括号 {} 里面包含了表达这个具体事物（对象）的属性和方法

##### 1. 创建对象

```html
<script>
    // 创建对象
    // var obj = {};  创建一个空的对象
    var obj = {
        uname: 'Tom',
        age: 18,
        sex: 'male',
        sayHi: function() {
            console.log('Hi~');
        }
    }
    //调用对象
    console.log(obj.uname);
    console.log(obj['age']);
    obj.sayHi()
</script>
```

1. {} 里面的属性或者方法采取键值对的形式

   **键（属性名）: 值（属性值）**

2. 多个属性或方法用**逗号**隔开

3. **方法冒号**后面跟的是一个**匿名函数**

##### 2. 使用对象

1.  调用对象的**属性** 

   1.  `对象名. 属性名`
   2.  `对象名['属性名']`

2.  调用对象的**方法**

   `对象名.方法名`

   【注意】记得加小括号

##### 3.  变量、属性、函数、方法 的区别

```html
<script>
    var num = 10;
    var obj = {
        age: 18,
        func = function() {
            
        }
    }
    function func() {
        
    }
</script>
```

1.  变量 属性的相同点：都是用来储存数据的

2.  不同点：

    变量：单独声明并赋值  使用的时候直接写变量名  **单独存在**

    属性：在对象里面的不需要声明  使用的时候必须是 `对象.属性`

3.  函数 方法的相同点：收到实现某种功能 做某件事

4.  不同点：

    函数：单独声明  并且调用的 函数名() **单独存在**

    方法：在对象里面  调用的时候 `对象.方法()`

#### 10.1.2 利用 new Object 创建对象

```html
<script>
    // 创建对象
    var obj = new Object();  // 创建了一个空的对象
    obj.uname = 'Tom';
    obj.age = 18;
    obj.sex = 'male';
    oobj.sayHi = function() {
        console.log('Hi~');
    }
    // 调用对象
    console.log(obj.uname);
    console.log(obj['age']);
    obj.sayHi()
</script>
```

【注意】

1. 利用等号 “=” 赋值的方法，添加对象的属性和方法
2. 每个属性和方法之间用**分号**结束
3. new Object 的O必须大写

#### 10.1.3 利用构造函数创建对象

##### 1. 为什么要使用构造函数？

- 因为前面两种创建对象的方式一次只能创建一个对象
- 因为我们一次创建一个对象里面很多属性和方法的大量相同的，只能复制
- 因此我们可以利用函数的方法重复这些代码，这个函数就称为构造函数
- 这个函数不一样，里面封装的不是普通代码，而是**对象**

构造函数：就是把我们对象里面一些相同的属性和方抽象出来封装到函数里面

构造函数：是一种特殊的函数,主要用来初始化对象,即为对象成员变量赋初始值,它总与new运算符一起使用。我们可以把对象中一些公共的属性和方法抽取出来 ,然后封装到这个函数里面。

##### 1. 构造函数

```html
<!-- 构造函数的语法格式 -->
<script>
    // 构造函数
    function 构造函数名() {
        this.属性 = 值;
        this.方法 = function() {}
    }
    //引用函数
    new 构造函数名();
</script>
```

```html
<script>
    function Star(uname, age, gender) {
        this.name = uname;
        this.age = age;
        this.gender = gender;
        this.sing = function(sing) {
            console.log(sing);
        }
        // uname age gender sing 这些都是形参
    }
    var tom = new Star('Tom', 18, 'male');   // 调用函数返回的是一个对象
    // ('Tom', 18, 'male') 这些都是实参
    console.log(tom.name);                 // Tom
    console.log(tom['gender']);            // male
    tom.sing('hahaha');                    // hahaha
    var jerry = new Star('Jerry', 10, 'female');
    console.log(jerry.name);               // Jerry
    console.log(jerry.age);                // 10
    jerry.sing('hhh');                     // hhh
</script>
```

【注意】

1. 构造函数的名字**首字母要大写**
2. 构造函数**不需要  return**  就可以返回结果
3. 调用构造函数时，必须使用  **new**
4. 只要 new Star() 调用函数就创建一个对象  tom {}  jerry {}
5. 我们的属性和方法必须添加  **this**

##### 3. 构造函数和对象的联系

1. 构造函数：泛指某一大类  （类似于Java里的类class）

2. 对象：特指  是一个具体的事物

   eg:  Tom == { name: 'Tom', age: 18, gender: 'male', sing: 'hahaha' };

3. 利用构造函数创建对象的过程，也称为 **对象的实例化**

   ![image-20221221172144581](C:\Users\麻花几路\AppData\Roaming\Typora\typora-user-images\image-20221221172144581.png)

### 10.2 new 关键字

 new 关键字的执行过程

1. new 构造函数可以在内存中创建一个空的对象
2. this 就会指向刚才创建的空对象
3. 执行构造函数里面的代码，给这个新的空对象添加属性和方法
4. 返回这个对象  （ 所以构造函数里面不需要return ）

### 10.3 遍历对象属性

 **for...in 语句**用于对数组或对象的属性进行循环操作

```html
<script>
    for(变量 in 对象) {
        
    }
</script>
```

```html
<script>
    // 遍历对象
    var obj = {
        name: 'Tom',
        age: 18,
        gender: 'male',
    }
    for (var k in obj) {
        console.log(k);        // k 变量  输出得到的是：属性名
        console.log(obj[k]);   // obj[k]  输出得到的是：属性值
    }
    // 我们使用 for...in  里面是变量习惯用 k 或 key
</script>
```

### 总结

1. 对象可以让代码结构更清晰
2. 对象复杂数据类型object
3. 本质：对象就是一组无序的相关属性和方法的集合。
4. 构造函数泛指某一大类，比如苹果，不管是红色苹果还是绿色草果，都统称为苹果
5. 对象实例特指一个事物,比如这个苹果、正在给你们讲课的pink者师等
6. for..in 语句用于对象的属性进行循环操作。



------



## 第十一章  内置对象

- JavaScript中的对象分为3种:自定义对象、内置对象、 浏览器对象
- 前面两种对象是JS基础内容,属于ECMAScript; 第三个浏览器对象属于我们JS独有的,我们S API讲解
- 内置对象就是指JS语言自带的一些对象,这些对象供开发者使用,并提供了一些常用的或是 最基本而必要的功能(属性和方法)
- 为置对象最大的优点就是帮助我们快速开发
- JavaScript提供了多个内置对象：Math、 Date、Array、 string等

### 11.1 Math 属性

- `Math` 是一个内置对象，它拥有一些数学常数属性和数学函数方法。`Math` 不是一个函数对象。
- 与其他全局对象不同的是，`Math` 不是一个构造器。`Math` 的所有属性与方法都是静态的。引用圆周率的写法是 `Math.PI`，调用正余弦函数的写法是 `Math.sin(x)`，`x` 是要传入的参数。`Math` 的常量是使用 JavaScript 中的全精度浮点数来定义的。
- `Math`数学对象不是一个构造函数，所以我们<font color='red'>**不需要`new`来调用**</font>，二十直接使用里面的属性和方法即可

```typescript
// 常用Math属性
Math.PI;           // 圆周率
Math.floor();      // 向下取整
Math.ceil();       // 向上取整
Math.round();      // 四舍五入 就近取整 但是.5特殊，往大取
Math.abs();        // 绝对值
Math.max;          // 最大值
```

```typescript
/* Math.max */
console.log(Math.max(1,2,99));      // 99
console.log(Math.max(-1,-9));       // -1
console.log(Math.max(1,'hh',99));   // NaN
console.log(Math.max());            // -Infinity

/* Math.abs */
console.log(Math.abs(1));           // 1
console.log(Math.abs(-1));          // 1
console.log(Math.abs('-1'));        // 1
console.log(Math.abs('hhh'));       // NaN

/* Math.floor() */
console.log(Math.floor(1.1));       // 1
console.log(Math.floor(1.9));       // 1

/* Math.ceil() */
console.log(Math.ceil(1.1));        // 2
console.log(Math.ceil(1.9));        // 2

/* Math.round() */
console.log(Math.round(1.2));       // 1
console.log(Math.round(1.9));       // 2
console.log(Math.round(-1.2));      // -1
console.log(Math.round(-1.5));      // -1
```

#### 随机数方法  Math.random( )

- `Math.random()` 函数返回一个浮点数，伪随机数在范围 [ 0,1 )，然后您可以缩放到所需的范围。实现将初始种子选择到随机数生成算法;它不能被用户选择或重置。
- `Math.random()`里面不跟参数

##### 1.得到两个数之间的随机整数

```typescript
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
```

##### 2.得到两个数之间的随机整数（包括两个数在内）

```typescript
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
```

### 11.2 Date 属性

#### 11.2.1 Date 语法

```typescript
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

> **备注：** 创建一个新`Date`对象的唯一方法是通过`new`操作符，例如：`let now = new Date();` 若将它作为常规函数调用（即不加 `new` 操作符），将返回一个字符串，而非 `Date` 对象。

- 如果没有提供参数，那么新创建的 Date 对象表示实例化时刻的日期和时间。
- 如果没有输入任何参数，则 Date 的构造器会依据系统设置的当前时间来创建一个 Date 对象。
- 如果提供了至少两个参数，其余的参数均会默认设置为 1（如果没有指定 day 参数）或者 0（如果没有指定 day 以外的参数）。
- JavaScript 的时间由世界标准时间（UTC）1970 年 1 月 1 日开始，用毫秒计时，一天由 86,400,000 毫秒组成。`Date` 对象的范围是 -100,000,000 天至 100,000,000 天（等效的毫秒值）。
- `Date` 对象为跨平台提供了统一的行为。时间属性可以在不同的系统中表示相同的时刻，而如果使用了本地时间对象，则反映当地的时间。
- `Date` 对象支持多个处理 UTC 时间的方法，也相应地提供了应对当地时间的方法。UTC，也就是我们所说的格林威治时间，指的是 time 中的世界时间标准。而当地时间则是指执行 JavaScript 的客户端电脑所设置的时间。
- 以一个函数的形式来调用 `Date` 对象（即不使用`new`操作符）会返回一个代表当前日期和时间的字符串。

```typescript
// Date() 日期对象是一个构造函数，必须使用new来调用创建我们的日期对象
// 1. 使用Date  如果没有参数，返回当前系统的当前时间
var date = new Date();
console.log(date);
// 2. 参数常用写法
// 数字型 2023,1,4   字符串型'2023-1-4 11:18:15'
var date1 = new Date(2023,1,4);
console.log(date1);  // 2023 2 4 比实际大一个月
var date2 = new Date('2023-1-4 11:18:15');
console.log(date2);  // 2023 1 4
```

#### 11.2.2 日期格式化

![image-20230104113631740](C:\Users\麻花几路\AppData\Roaming\Typora\typora-user-images\image-20230104113631740.png)

```typescript
var date = new Date();
console.log(date.getFullYear());  // 2023
console.log(date.getMonth()+1);   // 1 (记得月份+1)
console.log(date.getDate());      // 4
console.log(date.getDay());       // 3  周一返回1，周六返回6，但是周日返回0
```

```typescript
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();
var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
var week = date.getDay();
console.log('今天是：' + year + '年' + month + '月' + day + '日 ' + arr[week]);
```

```typescript
function getTimer() {
    var time = new Date();
    var h = time.getHours();
    h = h < 10 ? '0' + h : h;
    var m = time.getMinutes();
    m = m < 10 ? '0' + m : m;
    var s = time.getSeconds();
    s = s < 10 ? '0' + s : s;
    return h + ':' + m + ':' + s;
}
console.log(getTimer());
```

#### 11.2.3 获取毫秒数（时间戳）

获得Date总的毫秒数不是当前事件的毫秒数，而是距离1970年1月1号过了多少毫秒数

```typescript
// 1. 通过 valueOf()  getTime()
var date = new Date();
console.log(date.valueOf());
console.log(date.getTime());
// 2. 简单的写法
var date1 = +new Date();
console.log(date1);
// 3. H5新增的写法
console.log(Date.now());
```

### 11.3 Array 属性

```typescript
var arr1 = new Array(2);   // 表示数组的长度为2，里面有2个空的数组元素
var arr1 = new Array(2,3); // 等价于[2,3]
```

```typescript
// 检测是否为数组
// (1) instanceof 运算符
var arr = [];
var obj = {};
console.log(arr instanceof Array); // true
console.log(obj instanceof Array); // false
// (2) Array.isArray(参数)
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));
```

#### 11.3.1 添加删除数组元素的方法

| 方法名            | 说明                                                 | 返回值               |
| ----------------- | ---------------------------------------------------- | -------------------- |
| push(参数1...)    | 末尾添加一个或多个元素，注意修改原数组               | 并返回新的长度       |
| pop()             | 删除数组最后一个元素，数组长度减1 无参数、修改原数组 | 返回它删除的元素的值 |
| unshift(参数1...) | 开头添加一个或多个元素，注意修改原数组               | 并返回新的长度       |
| shift()           | 删除数组的第一个元素，数组长度减1 无参数、修改原数组 | 并返回第一个元素的值 |

```typescript
let arr = [1,2,3];
arr.push(4,'hhh');
arr.unshift('hello',0);
/* 1. push() 是可以给数组追加新的元素
   2. push() 参数直接写数组元素就可以了
   3. push() 完毕之后，返回的结果是新数组的长度
   4. 原数组也会发生变化 */
```

```typescript
let arr = [1,2,3];
arr.pop();
arr.shift();
/* 1. pop() 删除数组最后一个元素
   2. pop() 没有参数
   3. pop() 完毕之后，返回的结果是删除的元素
   4. 原数组也会发生变化 */
```

#### 11.3.2 数组排序

| 方法名    | 说明                         | 是否修改原数组                     |
| --------- | ---------------------------- | ---------------------------------- |
| reverse() | 颠倒数组中元素的顺序，无参数 | 该方法会改变原来的数组，返回新数组 |
| sort()    | 对数组的元素进行排序         | 该方法会改变原来的数组，返回新数组 |

```typescript
// 1. 翻转数组
let arr1 = [1,2,3,4];
arr.reverse();
console.log(arr1);         // [4,3,2,1]
// 2. 数组排序
let arr2 = [2,4,1,3];
arr2.sort();
console.log(arr2);         // [1,2,3,4]
let arr3 = [13,4,1,7,77];
arr3.sort(function(a,b){
    return a - b;  // 升序排列
//  return b - a;     降序排列  
});
cpnsole.log(arr3);        // [1,4,7,13,77]
```

#### 11.3.3 获取数组索引的方法

| 方法名        | 说明                           | 返回值                                                       |
| ------------- | ------------------------------ | ------------------------------------------------------------ |
| indexOf()     | 数组中查找给定元素的第一个索引 | 如果存在，返回索引号<br>如果不存在，返回-1<br>如果重复存在，只返回第一次出现的索引号 |
| lastIndexOf() | 在数组中的最后一个的索引       | 如果存在，返回索引号<br>如果不存在，返回-1<br>如果重复存在，只返回从后往前第一次出现的索引号 |

```typescript
<!-- 数组去重案例 -->
function unique(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
let demo = unique([1,2,3,4,3,2]);
console.log(demo);         // [1,2,3,4]
```

#### 11.3.4 数组转换为字符串

| 方法名         | 说明                               | 返回值         |
| -------------- | ---------------------------------- | -------------- |
| toString()     | 把数组转换成字符串，逗号分隔每一项 | 返回一个字符串 |
| join('分隔符') | 把数组中所有元素转换为一个字符串   | 返回一个字符串 |

```typescript
// 1. toString()
let arr = [1,2,3];
console.log(arr);              // 1,2,3
// 2. join('分隔符')
let arr1 = [1,2,3];
console.log(arr1.join('-'));   // 1-2-3
console.log(arr1.join('&'));   // 1&2&3
```

#### 11.3.5 操作数组

| 方法名   | 说明                                   | 返回值                                           |
| -------- | -------------------------------------- | ------------------------------------------------ |
| concat() | 连接两个或多个数组，不影响原数组       | 返回一个新的数组                                 |
| slice()  | 数组截取slice(begin,end)               | 返回被截取项目的新数组                           |
| splice() | 数组删除splice(第几个开始，要删除个数) | 返回被删除项目的新数组  【注意】这个会影响原数组 |

### 11.4 String 属性

#### 11.4.1 基本包装类型

基本包装类型就是把简单数据类型包装成为复杂数据类型，这样基本数据类型就有了属性和方法

```typescript
let str = 'Tom';
// 1. 生成临时变量，把简单类型包装为复杂数据类型
let temp = new String('Tom');
// 2. 赋值给我们声明的字符变量
str = temp;
// 3. 销毁临时变量
temp = null;
```

#### 11.4.2 字符串的不可变

指的是里面的值不可变，虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间

```typescript
let str = 'abc';
str = 'ABC';
/*
	当重新给 str 赋值时，常量'abc'不会被修改，依然在内存中
	重新给字符串赋值，会重新在内存中开辟空间，这个特点就是字符串的不可变
	由于字符串的不可变，在大量拼接字符串时会有效率问题
*/
let str = '';
for(let i = 0; i < 100000; i++){
    str += i;
}
console.log(str);  // 这个结果需要花费大量时间来显示
```

#### 11.4.3 根据字符返回位置

字符串的所有方法，都不会修改字符串本身（字符串是不可变的），操作完成会返回一个新的字符串

| 方法名                             | 说明                                                         |
| ---------------------------------- | ------------------------------------------------------------ |
| indexOf('要查找的字符',开始的位置) | 返回指定内容在字符串中的位置，如果找不到就返回-1，开始的位置是index的索引号 |
| lasrIndexOf()                      | 从后往前找，只找第一个匹配的                                 |

```typescript
let str = '改革春风吹满地，春天来了';
console.log(str.indexOf('春'));       // 2
console.log(str.indexOf('春',3));     // 8
```

#### 11.4.4 根据位置返回字符

| 方法名              | 说明                                     | 使用                            |
| ------------------- | ---------------------------------------- | ------------------------------- |
| `charAt(index)`     | 返回指定位置的字符(index 字符串的索引号) | `str.charAt(0)`                 |
| `charCodeAt(index)` | 获取指定位置出字符的ASCII码(index索引号) | `str.charCodeAt(0)`             |
| `str[index]`        | 获取指定位置字符                         | HTML5，IE8+支持，和charAt()等效 |

```typescript
// 1. charAt(index) 返回指定位置的字符
let str = 'abc';
console.log(str.charAt(1));       // b
// 2. charCodeAt(index) 返回指定位置出字符的ASCII码
console.log(str.charCodeAt(0));   // 97
// 3. str[index] H5新增
console.log(str[0]);              // a
```

#### 11.4.5 字符串操作方法（重点）

| 方法名                 | 说明                                                         |
| ---------------------- | ------------------------------------------------------------ |
| `concat(str1,str2...)` | concat() 方法用于连接两个或多个字符串。拼接字符串，等效于+   |
| `substr(start,length)` | 从 start 位置开始（索引号），length 取的个数                 |
| `slice(start,end)`     | 从 start 位置开始，截取到 end 位置，end 取不到               |
| `substring(start,end)` | 从 start 位置开始，截取到 end 位置，end 取不到。基本与 slice 相同，但是不接受负值 |

```typescript
// 1. substr('截取的起始位置',‘截取几个字符)
 let str = '改革春风吹满地';
console.log(str.substr(2,2));  // 春风
```

#### 11.4.6 替换、分隔字符串

```typescript
// 1. 替换字符 replace('被替换的字符','替换为的字符')
let str1 = 'abc';
console.log(str1.replace('a','A'));   // 'Abc'
// 2. split() 把字符转换为数组
let str2 = 'a,b,c';
console.log(str2.split(','));     // [a,b,c]
let str3 = 'a&b&c';
console.log(str3.split('&'));     // [a,b,c]
```



### 11.5 正则表达式

- 正则表达式用来定义一个规则
- 通过这个规则计算机可以检查一个字符串是否符合规则，或者将字符串中符合规则的内容提取出来
- 正则表达式也是JS中的一个对象，所以要使用正则表达式需要先创建正则表达式的对象

#### 11.5.1 创建正则表达式

```typescript
// 1. new RegExp(正则,匹配模式) 可以接收两个参数(字符串)
let reg = new RegExp("a","i");
//【优点】可以传入变量
// 2. 使用字面量   /正则/匹配模式
reg = /a/i;
```

```typescript
let reg = new RegExp("a");  // 检查一个字符串是否有a
reg = /a/;
let result = reg.test("a"); // true
result = reg.test("b");     // false
result = reg.test("abc");   // true
result = reg.test("cba");   // true
```

#### 11.5.2 语法

1. 在正则表达式中大部分字符都可以直接写

2. | 在正则表达式中表示或

3. [ ] 表示或 （字符集）  [a-z]、[A-Z]、[a-zA-Z] 表示任意的字母

4. [^] 表示除了

5. . 表示除了换行外的任意字符

6. \ 表示转义字符

7. 其他字符集

   |  字符  | 含义                                                         |
   | :----: | :----------------------------------------------------------- |
   |  `\d`  | 匹配**任何数字** (阿拉伯数字)。相当于 `[0-9]`。例如，`/\d/` 或 `/[0-9]/` 匹配“B2is the suite number”中的“2”。 |
   |  `\D`  | 匹配任何**非数字** (阿拉伯数字) 的字符。相当于`[^0-9]`。例如，`/\D/` 或者 `/[^0-9]/` 匹配“B2 is the suite number”中的“B”。 |
   |  `\w`  | 匹配基本拉丁字母中的任**何字母数字字符**，包括下划线。相当于 `[A-Za-z0-9_]`。例如，`/\w/` 匹配“apple”中的“a”，匹配“$5.28”中的“5”，匹配“3D”中的“3”，以及匹配“Émanuel”中的“m”。 |
   |  `\W`  | 匹配任何**不是来自基本拉丁字母的单词字符**。相当于 `[^A-Za-z0-9_]`。例如，`/\W/` 或者 `/[^A-Za-z0-9_]/` 匹配“50%”中的“%”，以及匹配“Émanuel”中的“É”。 |
   |  `\s`  | 匹配**单个空白字符**，包括空格、制表符、换页符、换行符和其他 Unicode 空格。相当于 `[ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`。例如，`/\s\w*/` 匹配“foo bar”中的“bar”。 |
   |  `\S`  | 匹配除**空格以外的单个字符**。相当于 `[^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`。例如，`/\S\w*/` 匹配“foo bar”中的“foo”。 |
   |  `\t`  | 匹配水平制表符。                                             |
   |  `\r`  | 匹配回车符。                                                 |
   |  `\n`  | 匹配换行符。                                                 |
   |  `\v`  | 匹配垂直制表符。                                             |
   |  `\f`  | 匹配换页符。                                                 |
   | `[\b]` | 匹配退格键。                                                 |
   |  `\0`  | 匹配一个 NUL 字符。不要在此后面加上另一个数字。              |

   ```typescript
   let re = /[a-zA-Z]/;
   re = /[a-z]/i;         // 匹配模式i表示忽略大小写
   ```

8. 开头和结尾

   - ^ 表示字符串的开头

     `reg = /^a/`   表示匹配开始位置的a

   - $ 表示字符串的结尾

     `reg = /a$/`   表示匹配结束位置的a

   - `reg = /^a$/` 表示只匹配字母a，完全匹配，要求字符串必须和正则完全一致

#### 11.5.3 量词

量词只对前面一个字母起作用

- {n} 表示 正好n个  
  - `reg = /a{3}/` 表示 出现3个a 
  - `reg = /(ab){3}/` 表示 出现3个ab
- {n,} 表示 至少n个
  - `reg = /^[a-z]{1,}/` 表示 至少一个字母
- {n,m} 表示 n到m个
  - `reg = /^[a-z]{1,3}/` 表示 1到3个字母
- “+” 表示 一个以上，相当于{1, }
  - `reg = /^ba+$/` 表示 至少出现一个a
- “ * ” 表示 任意数量的a
- “?” 表示 0~1次，相当于{0,1}

#### 11.5.4 re.exec( )

【作用】获取字符串中符合正则表达式的内容

```typescript
let str = 'abcascadcafc';
// 提取出str中符合axc格式的内容
let re = /a[a-z]c/ig;  // g 表示 全局匹配
let result = re.exec(str);
console.log(result);
```

#### 11.5.5 正则与字符串

- `split()` 可以根据正则表达式来对一个字符串进行拆分
- `search()` 可以去搜索符合正则表达式的内容第一次在字符串中出现的位置
- `replace()` 根据正则表达式替换字符串中的指定内容
- `match()` 根据正则表达式去匹配字符串中符合要求的内容，返回一个数组
- `matchAll()` 根据正则表达式去匹配字符串中符合要求的内容，但是必须设置g全局匹配，返回一个迭代器

 

------



## 第十二章  面向对象

> 面向对象不是新的东西，它只是过程式代码的一种高度封装，目的在于提高代码的开发效率和可维护性。

面向对象编程 —— Object Oriented Programming，简称 OOP ，是一种编程开发思想。 它将真实世界各种复杂的关系，抽象为一个个对象，然后由对象之间的分工与合作，完成对真实世界的模拟。

在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工，可以完成接受信息、处理数据、发出信息等任务。 因此，面向对象编程具有灵活、代码可复用、高度模块化等特点，容易维护和开发，比起由一系列函数或指令组成的传统的过程式编程（procedural programming），更适合多人合作的大型软件项目。

面向对象与面向过程：

- 面向过程就是亲力亲为，事无巨细，面面俱到，步步紧跟，有条不紊
- 面向对象就是找一个对象，指挥得结果
- 面向对象将执行者转变成指挥者
- 面向对象不是面向过程的替代，而是面向过程的封装

面向对象的特性：封装性、继承性、[多态性]抽象

### 12.1 类（ class ）

1. 类是对象的模板，可以将对象中的属性和方法直接定义在类中
2. 通过同一个类创建的对象，称为同类对象

   - 可以通过 instanceof 来检查一个对象是否是由某个类创建。如果某个对象是由某个类创建的，则称该对象是这个类的实例 `console.log(变量名 instanceof 类名)`
   - instanceof 检查的是对象的原型链上是否有该类实例，只要原型链上有该实例，就会返回true
   - Object是所有对象发原型，所有任何对象和Object进行 instanceof 运算都会返回true

```typescript
class 类名 {          // 类名首字母要大写
}   
new 类()
```

```typescript
class Person{
    // 实例属性
    name = 'Tom'   // p1.name   p1.age
    age = 10       // 实例属性只能通过实例访问
    // 静态属性（类属性）
    static test = 'test静态属性'
    // 使用static声明的属性，是静态属性（类属性）
    // 静态属性只能通过类去访问   Person.test
    sayHello(){
        console.log('Helo,'+this.name)
    }
}
const p1 = new Person()    // p1为实例
const p2 = new Person()
```

### 12.2 构造函数（构造器）

```typescript
class Person{
    // 在类中可以添加一个特殊的方法 constructor (构造函数)
    // 构造函数会在我们调用类创建的对象时进行
    constructor(name, age, gender){
        // 可以在构造函数中，为实例属性进行赋值
        // 在构造函数中，this表示当前所创建的对象
        this.name = name;
        this.name = age;
        this.gender = gender;
    }
}
const p1 = new Person('Tom', 18, 'male');
const p2 = new Person('Jerry', 10, 'male');
```

### 12.3 面向对象的特性

- 封装 —— 安全性
- 继承 —— 扩展性
- 多态 —— 灵活性

#### 12.3.1 封装

- “装”：对象是一个用来储存不同属性的容器

- “封”：对象不仅负责存储属性，还负责数据的安全

  直接添加到对象中的属性并不安全，因为它们可以被任意的修改

如何确保数据的安全

1. 私有化数据：将需要保护的数据设置为私有，只能在类的内部使用

   【注意】私有化数据必须先#声明，再访问

2. 提供setter和getter方法来开放对数据的操作

   优点：

   1. 可以控制对象的读写权限
   2. 可以在方法中对对象的值进行验证 

```typescript
class Person{
    #name;
    #age;
    #gender;
    constructor(name,age,gender){
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
    }
    sayHello(){
        console.log(this.#name);
    }
    // getter方法，用来读取属性
    getName(){
        return this.#name;
    }
    // setter方法，用来设置属性
    setName(){
        this.#name = name;
    }
    // getter方法
    get age(){
        return this.#age;
    }
    // setter方法
    set age(age){
        this.#age = age;
    }
}
const p1 = new Person('Tom', 18, 'male');
```

#### 12.3.2 多态

- 在JS中不会检查参数的类型，任何数据都可以作为参数传递
- 要调用某个函数，无需指定类型，只要对象满足某些条件即可
- 多态为我们提供了代码的灵活性

```typescript
class Person{
    constructor(name){
        this.name = name;
    }
}
class Dog{
    constructor(name){
        this.name = name;
    }
}
const person = new Person('Tom');
const dog = new Dog('Parky');
function sayHello(obj){
    console.log('Hello,' + obj.name);
}
sayHello(person);
```

#### 12.3.3 继承

- 可以通过extends关键字来完成继承
- 当一个类继承另一个类时，相当于复制给他
- 继承发生时，被继承的类称为**父类**（超类） 继承的类叫子类
- 【优点】可以减少重复的代码，并且可以在不修改一个了的前提下对其进行扩展

```typescript
class Animal{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log('hi~');
    }
}
class Cat extends Animal{
    // 在子类中，可以通过创建同名方法来重写父类的方法
    sayHello(){
        console.log('喵喵喵');
    }
}
class Dog extends Animal{
    // 重写构造函数
    // 重写构造函数时，够好函数的第一行代码必须写super()
    constructor(name){
        super(name);    // 调用父类的构造函数
    }
    sayHello(){
        super.sayHello();
        console.log('汪汪汪');
    }
}
```

### 12.4 对象的结构

对象在存储对象的区域有两个

1. 对象自身
   - 直接通过对象添加的属性，位于对象自身中
   - 在类中通过 x = y 的形式添加的属性，位于对象自身中

2. 原型对象（ prototype ）

   - 对象中还有一些内容会存储到其他的对象（原型对象）里

   - 在对象中会有一个属性用来存储原型对象，这个属性叫`__proto__` 

   - 原型对象也负责为对象存储属性

     - 当我们访问对象中的属性时，会优先访问对象自身的属性
     - 对象自身不包含该属性时，才会去原型对象中去寻找

   - 会添加到原型对象中的情况

     1. 在类中通过xxx(){ }方式添加的方法，位于原型中
     2. 主动向原型中添加的属性或方法

   - 访问方法 `对象.__proto__` `Object.getPrototypeOf(对象)`

   - 原型对象中的数据

     1. 对象中的数据（属性、方法等）
     2. constructor （对象的构造函数）

   - 【注意】原型对象也有原型，这样就构成了一条原型链；根据对象的复杂程度不同，原型链的长度也不同

     p对象的原型链：p对象 --> 原型 --> 原型 --> null

     obj对象的原型链：obj对象 --> 原型 --> null

   - 原型链：

     - 读取对象属性时，会优先对象自身属性
     - 如果对象中有，则使用，反之去对象的原型中找
     - 如果原型中有，则使用，反之去原型的原型中找
     - 直到找到Object对象的原型（null）
     - 如果依然没有找到，则返回undefined

   - 所有的同类型对象它们的原型对象、原型链都是同一个

   - 【作用】原型就相当于是一个公共的区域，可以被所有该类的实例访问，可以将一个该类的实例中所有的公共属性（方法）统一存储到原型中。这样我们只需要创建一个属性，即可被所有实例访问

   - JS中继承就是通过原型来实现的。当继承时，子类的原型就是一个父类的实例

   - 使用 in 运算符检查实现时，无论属性在对象自身还是在原型中，都会返回true

   - hasOwnProperty：`Object.hasOwn(对象,属性名)` 用来检查一个对象的自身是否含有某个属性



------



## 第十三章  DOM

### 13.1 DOM  简介

#### 13.1.1 什么是 DOM

文档对象模型（ Docoment Objecr Model ），是W3C组织推荐的处理可扩展标记语言（ HTML或XML ）的标准<font color='red'>**编程接口**</font>

W3C 已经定义了一系列的 DOM 接口，通过这些 DOM 接口可以改变网页的内容、结构和样式

获取过来的DOM元素是一个**对象(object)**，所以称为文档对象模型

#### 13.1.2 DOM 树

![image-20221228103147770](C:\Users\麻花几路\AppData\Roaming\Typora\typora-user-images\image-20221228103147770.png)

- 文档：一个页面就是一个文档，DOM中用 docoment 表示
- 元素：页面中的所有标签都是元素，DOM 中用 element 表示
- 节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM 中用 node 表示

### 13.2 获取元素

- 根据 ID 获取
- 根据标签名获取
- 通过 HTML5 新增的方法获取
- 特殊元素获取

#### 13.2.1 根据 ID 获取

```html
<body>
    <div id='time'>2022-12-28</div>
    <script>
        // 1. 因为恶魔文档页面从上往下加载，使用先得有标签，使用我们script写到标签的下面
        // 2. 参数 id是大小写敏感的字符串
    	var timer = document.getElementsById('time');
        console.log(timer);   // 返回的是一个元素对象
        // console.dir 打印我们返回的元素对象，更好的查看里面的属性和方法
        console.dir(timer);
    </script>
</body>
```

#### 13.2.2 根据标签名获取

使用 `getElementsByTagName()` 方法可以返回i带有指定标签名的<font color='red'>**对象的集合**</font>。

```html
<body>
    <ul>
        <li>11111</li>
        <li>22222</li>
        <li>33333</li>
    </ul>
    <script>
        // 返回的是获取过来元素对象的集合，以伪数组的形式存储的
    	var lis = docoment.getElementsByTagName('li');
        console.log(lis);
        console.log(lis[0]);
    </script>
</body>
```

【注意】

1. 因为得到的的是一个对象的集合，使用我们想要操作里面的元素就需要遍历
2. 得到元素对象是动态的
3. 如果页面中只有一个li  返回的还是伪数组的形式
4. 如果页面中没有这个元素  返回的是空的伪数组的形式

还可以获取某个元素（父元素）内部使用指定标签名的子元素

```typescript
element.getElementsByTagName('标签名')；
```

【注意】父元素必须是<font color='red'>单个对象（必须指定是哪一个元素对象）</font>，获取的时候不包括父元素自己。

```typescript
var ol = document.getElementsByTagName('ol');
consolo.log(ol[0].getElementsByTagName('li'));
```

#### 13.2.3 通过 HTML5 新增的方法获取

```html
<body>
    <div class="box">盒子</div>
    <div class="box">盒子</div>
    <div id="nav">
        <ul>
            <li>首页</li>
            <li>产品</li>
        </ul>
    </div>
    <script>
        // 1. getElementsByClassName 根据类名获得某些元素集合
    	var boxs = document.getElementsByClassName('box');
        console.log(boxs);
        // 2. querySelector 根据指定选择器返回第一个元素对象
        var firstBox = document.querySelector('.box');
        var nav = document.querySelector('#nav');
        // 【注意】里面的选择器需要加符号  类. id#
        // 3. querySelectoAll 返回指定选择器的所有元素对象集合
        var allBox = document.querySelectorAll('.box');
        console.log(allBox);
    </script>
</body>
```

#### 13.2.4 特殊元素获取

```typescript
// 获取 body 元素
document.body;               // 返回 body 元素对象
// 获取 html 元素
document.documentElement;    // 返回 html 元素对象
```

### 13.3 事件基础

事件：触发响应机制

事件三要素：事件源  事件类型  事件处理程序

- 事件源：事件被触发的对象
- 事件类型：如何触发 什么事件  eg：鼠标点击 鼠标经过...
- 事件处理程序：通过一个**函数赋值**的方式完成

```html
<button id="btn">Button</button>
<script>
	var btn = document.getElementById('btn');
    btn.onclick = function() {
        alert('Hello,World~');
    }
</script>
```

执行事件的步骤：

1. 获取事件源
2. 注册事件（绑定事件）
3. 添加事件处理程序（采取函数赋值形式）

### 13.4 操作元素

#### 13.4.1 改变元素的内容

```typescript
element.innerText   // 从起始位置到终止位置的内容，但不识别html标签，同时空格和换行也会去掉
element.innerHTML   // 起始位置到终止位置的全部内容，会识别html标签，同时保留空格和换行
```

```html
<body>
    <div>123</div>
    <script>
    	var div = document.querySelector('div');
        div.innerText = 'hello';
    </script>
</body>
```

#### 13.4.2 表单元素的属性操作

```html
<body>
    <button>Button</button>
    <input type="text" value="请输入内容">
    <script>
    	var btn = document.querySelector('button');
        var input = document.querySelector('input');
        btn.onclick = function() {
            // 表单里的值是通过value来修改的
            input.value = '被点击了';
            this.disable = true;   // this指的是事件函数的调用者
        }
    </script>
</body>
```

```html
<script>
    var eye = documrnt.getElementById('eye');
    var pwd = documrnt.getElementById('pwd');
    var flag = 0;
    eye.onclick = function() {
        // 点击一次后一定要发生变化
        if (flag == 0) {
            pwd.type = 'text';
            eye.src = 'imges/open.png';
            falg = 1;
        }
        else {
            pwd.type = 'password';
            eye.src = 'imges/close.png';
            falg = 0;
        }
    }
</script>
```

#### 13.4.3 样式属性操作

```typescript
// 1. 行内样式操作
element.style
// 2. 类名样式操作
element.className
```

```html
<div></div>
<style>
    div{
        width:50px;
        height:50px;
        background-color:red;
    }
</style>
<script>
	var div = document.querySelector('div');
    div.onclick = function() {
        this.style.backgroundColor = 'blue';
        this.style.width = '100px';
    }
</script>
```

【注意】

1. JS 里面的样式采取驼峰命名法  例如 fontSize  banckgroundColor
2. JS 修改 style 样式操作，产生的是行内样式，CSS 权重比较高 

```html
<head>
    <style>
        .change{
            width:50px;
            height:80px;
            background-color:blue;
        }
    </style>
</head>
<body>
    <div>hhh</div>
    <script>
    	var test = document.querSelector('div');
        test.onclick = function() {
            this.className = 'change';
        }
    </script>
</body>
```

【注意】

1. 如果样式修改较多，可以采取操作类名方式更改颜色样式

2. class 因为是个保留字，因此使用className来操作样式类名属性

3. className 会直接更改颜色的类名，会覆盖原先的类名

   `this.className = 'first change';` 多类名选择器

#### 13.4.5 自定义属性的操作

1. 获取元素属性值
   - element.属性
     - 获取内置属性值（元素本身自带的属性）
   - element.getAtrribute( ' 属性 ' );
     - 主要获得自定义的属性（标准）
2. 设置元素属性值
   - element.属性 = ' 值 ' ;
   - element.setAtrribute( ' 属性 ' , ' 值 ' );
3. 移除元素属性
   - removeAtrribute(属性)

```html
<body>
    <div id="demo" index="1"></div>
    <script>
        // 1. 获取元素属性
    	var div = document.querySelector('div');
        console.log(div.getAtrribute('index'));
        // 2. 设置元素属性
        div.id = 'text';
        div.setAtrribute('index',2);
        // 3. 移除元素属性
        div.removeAtrribute('index');
    </script>
</body>
```

### 13.5 节点操作

利用节点层级关系获取元素

- 利用父子兄节点关系获取元素
- 逻辑性强，但是兼容性稍差

#### 13.5.1 节点概述

- 元素节点  nodeType  为 1

- 属性节点  nodeType  为 2

- 文本节点  nodeType  为 3 （文本节点包含文字、空格、换行等）

  【注意】在实际开发中，节点操作主要操作的是**元素节点**

#### 13.5.2 节点层级

##### 1. 父级节点

```typescript
node.parentNode
```

- parentNode 属性可返回某节点的父节点

  【注意】是**最近的一个父节点**

- 如果指定的节点没有父节点，则返回 null

##### 2. 子节点

```typescript
1.parentNode.childNodes
// parentNode.childNodes 返回包含指定节点的子节点的集合，该集合为即时更新的集合
```

【注意】返回值里面不会了所有的子节点，包括元素节点、文本节点等。如果只想要获得里面的元素节点，则需要专门处理。所以我们一般不提倡使用childNodes

```typescript
var ul = document.querySelector('ul');
        for(var i = 0; i < ul.childNodes.length; i++){
            if(ul.childNodes[i].nodeType == 1){
                // ul.childNodes[i] 是元素节点
                console.log(ul.childNodes[i]);
            }
        }
```

```typescript
2.parentNode.children
// parentNode.children 是一个只读属性，返回所有的子元素节点。它只返回子元素节点，其余节点不返回
```

```typescript
3.parentNode.firstChild
4.parentNode.lastChild
// 此方法会获取所有节点类型（文本节点、元素节点等）
```

```typescript
5.parentNode.firstElementChild
6.parentNode.lastElementChild
// 【注意】这两个方法有兼容性问题，IE9以上才支持
```

```typescript
/* 可以通过获取children的元素角标来获取子节点 */
console.log(children[0]);
console.log(children[ol.children.length - 1]);
```

##### 3.兄弟节点

```typescript
1.node.nextSibling
2.node.previousSibling
// nextSibling 返回当前元素的下一个兄弟节点（所有类型的节点）
```

```typescript
3.node.nextElementSibling
4.node.previousElementSibling
// 【注意】这两个方法有兼容性问题，IE9以上才支持
```

#### 13.5.3 创建、添加节点

```typescript
document.createElement('tagName')
// document.creatElement()方法创建由 tagName 指定的HTML元素。因为这些元素原先不存在，是根据我们的需求动态生成的，所以我们也称动态创建元素节点
```

```typescript
1.node.appendChild(child)
// 该方法将一个节点添加到指定父节点的子节点列表末尾。类似于css里面after元素
2.node.insertBefore(child,指定元素)

```

```html
<body>
    <ul></ul>
    <script>
        // 1. 创建节点元素节点
    	var li = document.createElement('li');
        // 2. 添加节点 node.appendChild(child) node-父级  child-子级  后面添加元素
        var ul = document.querySelector('ul');
        ul.appendChild(li);
        var lili = document.createElement('li');
        ul.insertBefore(lili,ul.children[0]);
    </script>
</body>
```

#### 13.5.4 删除节点

```typescript
node.removeChild(child)//删除的是父节点里的一个子节点
// node.removeChild(child)方法从DOM中删除一个子节点，返回删除的节点
```

#### 13.5.5 复制节点

```typescript
node.cloneNode()
// node.cloneNode() 方法返回调用该方法的节点的一个副本
```

【注意】

1. 如果括号参数为**空或false**，则是**浅拷贝**，只克隆复制节点本身，不克隆里面的子节点
2. 如果括号参数为**true**，则是**深拷贝**，会复制节点本身以及里面所有的子节点

#### 13.5.6 三种动态创建元素的区别

- `document.write()`
- `element.innerHTML`
- `document.creatElement()`

【区别】

1. `document.write()`是直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘
2. `element.innerHTML`是将内容写入到某个 DOM 节点，不会导致页面全部重绘
3. `element.innerHTML`创建多个元素效率更高（不要拼接字符串，漕渠数组形式拼接），结构稍微复杂
4. `document.creatElement()`创建多个元素效率低一点点，但是结构更清晰

【总结】不同浏览器下，`innerHTML`的效率要比 `createElement` 高

### 13.6 事件的 function( e ) 中的 e 和 e.target

当在一个父元素上绑定了此事件时，但其子元素触发了事件，那么e就指向了子元素，而不是父元素。

```typescript
var ul=document.querySelector('ul');
        ul.addEventListener('click',function(e){
            console.log(e);
        })
```

- 我们可以使用`e.target`来获取事件触发的元素内容
- 也可以使用以下方法获取元素的标签名（如li，div），id名，类名等
  - `e.target.nodeName`      获取标签名
  - `e.target.id`                 获取id
  - `e.target.className`     获取类名
  - `e.target.innerHTML`     获取触发事件元素的内容

### 13.7 addEventListener()方法 （监视器）

```typescript
element.addEventListener(event, function, useCapture);
/* 第一个参数是事件的类型 (如 "click" 或 "mousedown")
   第二个参数是事件触发后调用的函数。
   第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。
   【注意】不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"   */
```

- addEventListener() 方法用于向指定元素添加事件句柄。
- addEventListener() 方法添加的事件句柄不会覆盖已存在的事件句柄。
- 你可以向一个元素添加多个事件句柄。
- 你可以向同个元素添加多个同类型的事件句柄，如：两个 "click" 事件。
- 你可以向任何 DOM 对象添加事件监听，不仅仅是 HTML 元素。如： window 对象。
- addEventListener() 方法可以更简单的控制事件（冒泡与捕获）。
- 当你使用 addEventListener() 方法时, JavaScript 从 HTML 标记中分离开来，可读性更强， 在没有控制HTML标记时也可以添加事件监听。
- 你可以使用 removeEventListener() 方法来移除事件的监听。
