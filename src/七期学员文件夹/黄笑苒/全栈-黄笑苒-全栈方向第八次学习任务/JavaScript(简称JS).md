# JavaScript(简称JS)

### 作用：

可以让网页呈现各种动态效果，与用户进行交互，增加用户的上网体验

## 1.如何插入JS

### (1)使用script标签

- 例：![image-20230104150919613](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230104150919613.png)

- 注：<script>标签要成对出现，并把JavaScript代码写在<script></script>之间。

### (2)引入JS外部文件

- 方法：

  把HTML文件和JS代码分开,并单独创建一个JavaScript文件(简称JS文件),其文件后缀通常为.js，然后将JS代码直接写在JS文件中

- 注：

  - JS文件不能直接运行，需嵌入到HTML文件中执行，我们需在HTML中添加如下代码，就可将JS文件嵌入HTML文件中。

    ```
    <script src="script.js"></script>
    ```

  - 由于浏览器从上到下的载入顺序，故如果将引入JS文件的代码写在head标签中，浏览器就会先载入JS部分的内容，但是当JS部分的内容载入完成后便不会在向后进行，故JS部分后的HTML内容及CSS的内容可能由于未被浏览器载入而不会在浏览器中运行呈现出来，因此一般将引入JS文件的代码写在body的结束标签与html的结束标签之间

  例：![image-20230104152020399](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230104152020399.png)


在开发过程中，当代码量较多，最好使用外部文件来写JS代码，方便后期维护

### (3)写入属性中

- 例：

  ![image-20230104163630238](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230104163630238.png)

![image-20230104163702727](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230104163702727.png)

## 2.输出语句

### (1)alert

- 例：![image-20230104154006893](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230104154006893.png)

- 效果：

  ![image-20230104155055073](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230104155055073.png)

即在网页中弹出警告框

### (2)console.log

- 例：![image-20230104154332855](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230104154332855.png)

- 效果：

  ![image-20230104154834698](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230104154834698.png)

即在网页控制台【打开网页右键菜单栏中的检查选项中（快捷键为F12）】中输出语句

### (3)document.write

- 例：![image-20230104154738534](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230104154738534.png)

- 效果：

  ![image-20230104154957684](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230104154957684.png)

## 3.字面量与变量

### (1)字面量

![image-20230104174121732](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230104174121732.png)

### (2)变量

![image-20230104174212768](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230104174212768.png)

- 使用：

  ![image-20230104174330803](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230104174330803.png)

- 注：1）为了方便，通常使用变量是声明和赋值同时进行

  ​        2）声明变量通常使用let，因为使用var声明会出现没有块作用域的问题

-  变量的内存结构：

变量并不存储任何值，而是存储其对应值的内存地址

### (3)常量

实际上就是不能改变的变量

- 注：

  1）在JS中使用const声明常量，且通常使用纯大写字母来命名

  2）常量只能赋值一次，重复赋值会报错

  3）JS中除了常规的常量(如圆周率)外，有一些对象类型的数据也会声明为常量

### (4)标识符

![image-20230105162547491](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230105162547491.png)

## 4.数据类型(分为原始值和对象)

### <1>原始值

#### (1)数值

![image-20230105165337337](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230105165337337.png)

#### (2)大整数

![image-20230105165420833](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230105165420833.png)

#### 补：1）其他进制的数字

二进制数：以0b开头

八进制数：以0o开头

十六进制数：以0x开头

#### 2）typeof运算符

- 作用：用来检查不同的值的类型，它会根据不同的值返回不同的结果

#### (3)字符串

- 语法：在JS中使用单引号或双引号来表示字符串

补：

1）转义字符  \ (反斜杠)

\ "   输出结果>"

\ '   输出结果>'

\ \   输出结果>\

\t    ——>制表符(相当于空格)    

\n   ——>换行

2）模板字符串

![image-20230105190500807](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230105190500807.png)

例：![image-20230105190646770](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230105190646770.png)

- 使用typeof检查一个字符串时会返回string

#### (4)布尔值(boolean)

- 布尔值主要用来进行逻辑判断
- 布尔值只有两个，分别是true和false
- 使用typeof检查一个布尔值时会返回"boolean"

#### (5)空值(null)

![image-20230105194452420](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230105194452420.png)

#### (6)未定义(undefined)

![image-20230105194621244](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230105194621244.png)

注：null与undefined的区别在于undefined一般是JS在识别到未定义的值时为了不报错而自己使用的一个值，代码编辑者一般不会使用；而编辑者想定义一个空值时可以使用null

#### (7)符号(symbol)

- 用来创建一个唯一的标识   (有一些对象中的属性不希望被用户访问到，故创建一个symbol，它相当于一个钥匙，只有拿到它才能访问其中的内容)

- 使用typeof检查符号时会返回"symbol"

- 使用：

  ![image-20230111145530228](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230111145530228.png)

#### 小结

七种原始值是构成各种数据的基石，原始值在JS中是不可变类型，一旦创建就不能修改

### <2>对象

#### (1)定义

对象是JS中的一种复合数据类型，它相当于一个容器，在对象中可以储存各种不同类型的数据（而原始值只能用来表示一些简单的数据，不能表示复杂数据）

- 例：

![image-20230106112716314](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230106112716314.png)

- 注：如果读取的是一个对象中没有的属性，不会报错而是undefined

![image-20230106112810625](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230106112810625.png)

#### (2)对象的属性

- 属性名：

  -  

  ![image-20230106150825989](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230106150825989.png)

  

  例：![image-20230106151134868](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230106151134868.png)

  

  - ![image-20230106151338091](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230106151338091.png)

    例：![image-20230106154112445](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230106154112445.png)

     

  - ![image-20230106155158476](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230106155158476.png)

​     例：

![image-20230106155414541](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230106155414541.png)

 

- 属性值：

  ![image-20230106154423561](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230106154423561.png)

  

- 使用typeof检查一个对象时，会返回object
- in 运算符

​       ![image-20230106155713929](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230106155713929.png)

## 5.类型转换

- 类型转换指将一种数据类型转换为其他类型
- 类型转换主要指将其他类型转换为字符串、数值和布尔值，其他类型转换基本不会使用
- 由于原始值都是不可变类型，故JS中的类型转换在内存结构中实际上是重新开辟了一个新的空间来存储新的类型

### (1)转换为字符串

- 调用toString()方法将其他类型转换为字符串

  例：![image-20230112005643997](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112005643997.png)

  

  ![image-20230112005741018](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112005741018.png)

  -  补：调用xxx的yyy方法   转换为代码——>xxx.yyy()
  - 由于null和undefined中没有toString()，所以对这两个东西调用toString()时会报错

- 调用String()函数将其他类型转换为字符串

  例：![image-20230112010545666](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112010545666.png)

  

  ![image-20230112010617369](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112010617369.png)

  

  

  -  补：调用xxx函数方法   转换为代码——>xxx()
  - 第二种方法对于第一种方法的区别就在与也能将null和undefined转换为相应的字符串，相比较更加灵活
  - 原理：
    -  对于拥有toString()方法的值调用String()函数时，实际上就是在调用toString()方法；
    - 对于null，则直接转换为字符串"null";
    - 对于undefined，则直接转换为字符串"undefined"

### (2)转换为数值

#### <1>使用Number()函数来将其他类型转换为数值

- 转换的情况：

  -  字符串:

    ![image-20230112121932156](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112121932156.png)

  - 布尔值：true转换为1，false转换为0

  - null转换为0

  - undefined转换为NaN

- 例：![image-20230112123304837](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112123304837.png)

  

  ![image-20230112123356850](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112123356850.png)

#### <2>专门用来将字符串转换为数值的两个方法

- parseInt()   ——>将一个字符串转换为一个整数

  -  该方法相较于第一种方法区别在于解析时，会自左向右读取一个字符串，直到读取到字符串中的所有有效整数，故遇到不合法数字，不一定会转换为NaN

  - 也可以使用parseInt()来对一个数字进行取整(虽然不是最优方法，但是可以使用)

    -  例：![image-20230112153234099](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112153234099.png)

      

      ![image-20230112153317878](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112153317878.png)

    

- parseFloat   ——>将一个字符串转换为浮点数

  -  该方法相较于第一种方法区别在于解析时，会自左向右读取一个字符串，直到读取到字符串中的所有有效小数，故遇到不合法数字，不一定会转换为NaN

### (3)转换为布尔值

#### 使用Boolean()函数来将其他类型转换为布尔值

- 例：![image-20230112154319250](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112154319250.png)

  

  ![image-20230112154345475](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112154345475.png)

- 转换的情况：

  -  数字：
    -   0和NaN转换为false
    - 其余的转换为true
  - 字符串：
    -  空串转换为false
    - 其余转换为true
  - null和undefined都转换为false
  - 对象会转换为true

- 所有表示空性的、没有的、错误的值都会转换为false
  -  例：0,NaN,空串,null,undefined,false

## 6.运算符

- 运算符可以用来对一个或多个操作数(值)进行运算

### (1)算术运算符

- +：加法运算符
- -：减法运算符
- *：乘法运算符
- /：除法运算符
- **：幂运算
- %：模运算（两个数相除取余数）
- 注：
  -  算术运算时，除了字符串的加法，其他运算的操作数是非数值时，都会转换为数值然后再运算(这是因为JS是一门弱类型语言，当进行运算时会通过自动的类型转换来完成运算)
    -  例：<img src="https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112172654293.png"/>

- 当任意一个值和字符串做加法运算时，它会先将其他值转换为字符串（实际上相当于做了一个隐式类型转换），然后再做拼串的操作

  -  例：![image-20230112173117468](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112173117468.png)

    

    ![image-20230112173148522](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112173148522.png)

  - 可以利用这一特点来完成类型转换

    -  可以通过为任意类型 + 一个空串的形式来将其转换为字符串（其原理和String()函数[显式类型转换]相同，但使用起来更加简洁）

    - 例：![image-20230112173945132](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112173945132.png)

      

      ![image-20230112174009199](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230112174009199.png)

    

## 函数(function)

- 注：![image-20230106161037518](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230106161037518.png)
- 作用：基于以上特性，故使用函数能大大减少代码量，方便使用
- 使用typeof检查函数对象时会返回function

### (1)语法

![image-20230106161141494](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230106161141494.png)

### (2)调用函数

![image-20230106161246052](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230106161246052.png)

### (3)定义方式

<1>函数声明

![image-20230106161141494](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230106161141494.png)

<2>函数表达式

![image-20230110123443690](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230110123443690.png)

<3>箭头函数

![image-20230110123626233](https://image--01.oss-cn-beijing.aliyuncs.com/image-20230110123626233.png)

### (4)参数

- 形式参数：
  -  在定义函数时，可以在函数中指定数量不等的形式参数（形参）
  - 在函数中定义形参，就相当于在函数内部声明了对应的变量但没赋值

- 实际参数：
  -  在调用函数时，可以在函数的()中传递数量不等的实参
  - 实参会赋值给其对应的形参

- 注：
  -  如果参数和形参数量相同，则对应的实参赋值给对应的形参
  - 如果实参多于形参，则多余的实参不会使用
  - 如果形参多于实参，则多余的形参为undefined

- 参数类型：

  JS中不会检查参数的类型，可以传递任何类型的值作为参数

（这样虽然控制台不会报错，但是可能由于用户输入不同类型的参数而导致内部出现错误，故书写代码时可能还需增加验证参数类型的代码来确保参数类型对应）