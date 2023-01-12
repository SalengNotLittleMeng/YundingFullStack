# 数据类型

[TOC]



## 简单数据类型

### 原始值

原始值都属于**不可变类型**，一旦创建就无法修改

在内存中不会创建重复的原始值

在存储时变量中存储的值时值本身

#### 数值（Number）

- js中所有的整数和浮点数都是Number类型

- js中的数值并不是无限大，当数值超过一定范围后会显示近似值/科学计数法

- Infinity是一个特殊数值，表示无穷

- 在js中进行一些精度比较高的运算时要十分注意

- NaN 也是一个特殊的数值，表示非法的数值

#### 大整数（BigInt）

- 大整数用来表示一些比较大的整数

- 大整数使用n结尾，可以表示的数字范围时无限大

##### 其他进制的数字

- 二进制 0b

- 八进制 0o

- 十六进制 0x

##### 类型检查

typeof预算符

- 用来检查不同的值的类型

- 它会根据不同的值返回不同的结果

#### 字符串（String）

在js中使用单引号或者双引号来表示字符串

##### 转义字符

![image-20221227162331878](https://yunding7.oss-cn-beijing.aliyuncs.com/image-20221227162331878.png)

##### 模板字符串

- 使用反单引号`来表示模板字符串

- 模板字符串中可以嵌入变量*`${变量名}`*

- 使用typeof检查一个字符串时会返回“string”

#### 布尔值（Boolean）

- 只能用来逻辑判断

- 只有两个 true和false

- 使用typeof检查一个布尔值时会返回“boolean”

#### 空值（Null）

- 用来表示空对象

- 只有一个 null

- 使用typeof检查一个空值时会返回“object”

- 使用typeof无法检查空值

#### 未定义（Undefined）

- 当声明一个变量而没有赋值时，它的值就是undefined

- 只有一个 undefined

- 使用typeof检查一个Undefined类型的值时会返回“undefined”

#### 符号（Symbol）

- 用来创建唯一的标识

- 使用typeof检查符号时会返回“symbol”

七种原始值是构成各种数据的基石

原始值在js中是不可变类型，一旦创建就不能修改

### 类型转换

类型转换指讲将一种数据类型转换为其他类型

​		将其他类型转换为（字符串、数值和布尔值）

![image-20230104174544331](https://yunding7.oss-cn-beijing.aliyuncs.com/image-20230104174544331.png)

#### 转换为字符串

1.调用toString（）方法将其他类型转换为字符串

- 调用xxx的yyy方法-->xxx.yyy（）![image-20221227205605347](https://yunding7.oss-cn-beijing.aliyuncs.com/image-20221227205605347.png)

- 由于null和undefined中没有toString（） 所以对这两个东西调用toString（）时会报错

2.调用String（）函数将其他类型转换为字符串

- 调用xxx函数-->xxx（）

原理：对于拥有toString（）方法的值调用String（）函数时，实际就是在调用toString（）方法

​			对于null 则直接转换为“null”

​			对于undefined 则直接转换为“undefined”

#### 转换为数值

1.使用Number（）函数来将其他类型转换为数值![image-20230103104329536](https://yunding7.oss-cn-beijing.aliyuncs.com/image-20230103104329536.png)

转化的情况：

- 字符串 如果字符串是一个合法的数字，则会自动转换为对应的数字；如果不是一个合法的数字，则转换为NaN；如果是空串或纯空格的字符串，则转换为0

- 布尔值 true转换为1，false转换为0

- null转换为0

- undefined转换为NaN

2.专门同来将字符串转换为数值的两个方法

- parseInt（） 将一个字符串转换为一个整数

  可用来取整，不好用

  原理：解析时，会自左向右读取一个字符串，指导读取字符串中所有的有效整数

- parseFloat（） 将一个字符串转换为浮点数

  原理：解析时，会自左向右读取一个字符串，指导读取字符串中所有的有效浮点数

#### 转换为布尔值

使用Boolean（）函数来将其他类型转换为布尔值![image-20230103105555517](https://yunding7.oss-cn-beijing.aliyuncs.com/image-20230103105555517.png)

转换的情况：

- 数字 和NaN转换为false，其余是true 

- 字符串  空串转换为false，其余是true 

- null和undefined都转换为false 

- 对象 会转换为true

#### 自动转换

js是一门弱类型语言，当进行运算时会通过自动的类型转换来完成运算

## 复合数据类型

### 对象

### 函数

### 数组