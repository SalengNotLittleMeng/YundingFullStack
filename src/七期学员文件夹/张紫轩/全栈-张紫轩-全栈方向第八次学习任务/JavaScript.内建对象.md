# 内建对象

## 解构赋值

const arr3 = [["孙悟空", 18, "男"], ["猪八戒" ,28, "男"]]

let [[name, age, gender], obj] = arr3

### 对象的解构

const obj = { name: "孙悟空", age: 18, gender: "男" }

1）let {name:a, age:b, gender:c, address:d="花果山"} = obj

2）({ name, age, gender } = obj)

### 对象的序列化

对象的序列化

JS中的对象使用时都是存在于计算机的内存中的
存储的格式
在JS中对象的序列化通常是将一个对象转换为字符串（JSON字符串）

序列化的用途（对象转换为字符串有什么用）：

对象转换为字符串后，可以将字符串在不同的语言之间进行传递
甚至人可以直接对字符串进行读写操作，使得JS对象可以不同的语言之间传递

用途：
1. 作为数据交换的格式
2. 用来编写配置文字
3. 如何进行序列化：

在JS中有一个工具类 JSON （JavaScript Object Notation） JS对象表示法

JS对象序列化后会转换为一个字符串，这个字符串我们称其为JSON字符串  

也可以手动的编写JSON字符串，在很多程序的配置文件就是使用JSON编写的

编写JSON的注意事项：

1. JSON字符串有两种类型：
    JSON对象 {}
    JSON数组 []
2. JSON字符串的属性名必须使用双引号引起来
3. JSON中可以使用的属性值（元素）
    - 数字（Number）
    - 字符串（String） 必须使用双引号
    - 布尔值（Boolean）
    - 空值（Null）
    - 对象（Object {}）
    - 数组（Array []）
4. JSON的格式和JS对象的格式基本上一致的，
    注意：JSON字符串如果属性是最后一个，则不要再加

### 深复制

1）浅复制

const obj2 = object.**assign**({},obj)

2）深复制

const obj3 = **structuredClone**(obj)

3）利用Json来完成

const str = JSON.**stringify**(obj)

const obj4 = JSON.**parse**(str)

## map

Map用来存储键值对结构的数据（key-value）

Object中存储的数据就可以认为是一种键值对结构
别：

- Object中的属性名只能是字符串或符号，如果传递了一个其他类型的属性名，
    JS解释器会自动将其转换为字符串
- Map中任何类型的值都可以称为数据的key

## set

Set用来创建一个集合

它的功能和数组类似，不同点在于Set中不能存储重复的数据

使用方式：

​          创建

​            new Set()

​            new Set([...])

方法

​            size 获取数量

​            add() 添加元素

​            has() 检查元素

​            delete() 删除元素

## math

Math一个工具类

​          Math中为我们提供了数学运算相关的一些常量和方法

​          常量：

​            Math.PI 圆周率

​          方法：

​            Math.abs() 求一个数的绝对值

​            Math.min() 求多个值中的最小值

​            Math.max() 求多个值中的最大值

​            Math.pow() 求x的y次幂

​            Math.sqrt() 求一个数的平方根

​            Math.floor() 向下取整

​            Math.ceil() 向上取整

​            Math.round() 四舍五入取整

​            Math.trunc() 直接去除小数位

​            Math.random() 生成一个0-1之间的随机数

## Date

### Date

​          \- 在JS中所有的和时间相关的数据都由Date对象来表示

​          \- 对象的方法：

​            getFullYear() 获取4位年份

​            getMonth() 返当前日期的月份（0-11）

​            getDate() 返回当前是几日

​            getDay() 返回当前日期是周几（0-6） 0表示周日

​            getTime() 返回当前日期对象的时间戳

​              时间戳：自1970年1月1日0时0分0秒到当前时间所经历的毫秒数

​              计算机底层存储时间时，使用都是时间戳

​            Date.now() 获取当前的时间戳

### toLocaleString()

可以将一个日期转换为本地时间格式的字符串

1. 描述语言和国家信息的字符串
    zh-CN 中文中国
    zh-HK 中文香港
    en-US 英文美国
2. 需要一个对象作为参数，在对象中可以通过对象的属性来对日期的格式进行配置
        dateStyle 日期的风格
        timeStyle 时间的风格
            full
            long
            medium
            short
        hour12 是否采用12小时值
            true
            false
        weekday 星期的显示方式
            long
            short
            narrow

    ​    year
    ​        numeric
    ​        2-digit

## 包装

在JS中，除了直接创建原始值外，也可以创建原始值的对象



​          通过 new String() 可以创建String类型的对象

​          通过 new Number() 可以创建Number类型的对象

​          通过 new Boolean() 可以创建Boolean类型的对象

​        **但是千万不要这么做**

​        包装类：

JS中一共有5个包装类

​            String --> 字符串包装为String对象

​            Number --> 数值包装为Number对象

​            Boolean --> 布尔值包装为Boolean对象

​            BigInt --> 大整数包装为BigInt对象

​            Symbol --> 符号包装为Symbol对象

通过包装类可以将一个原始值包装为一个对象，

当我们对一个原始值调用方法或属性时，JS解释器会临时将原始值包装为对应的对象，然后调用这个对象的属性或方法

由于原始值会被临时转换为对应的对象，这就意味着对象中的方法都可以直接通过原始值来调用

## 字符串的方法

length 获取字符串的长度

 字符串[索引] 获取指定位置的字符

str.at() 

根据索引获取字符，可以接受负索引

str.**charAt**()

根据索引获取字符

str.**concat**()

用来连接两个或多个字符串

str.**includes**()

用来检查字符串中是否包含某个内容

​                有返回true

​                没有返回false

str.**indexOf**()

str.**lastIndexOf**()

查询字符串中是否包含某个内容

str.**startsWith**()

检查一个字符串是否以指定内容开头

str.**endsWith**()

检查一个字符串是否以指定内容结尾

str.**padStart**()

通过添加指定的内容，使字符串保持某个长度

str.**replace**()

使用一个新字符串替换一个指定内容

str.replaceAll()  

使用一个新字符串替换所有指定内容

str.**slice**()

对字符串进行切片

str.**substring**()

截取字符串

str.**split**()

用来将一个字符串拆分为一个数组

str.**toLowerCase**()

将字符串转换为小写

str.**toUpperCase**()

将字符串转换为大写

str.**trim**()

去除前后空格

str.**trimStart**()

str.**trimEnd**()

去除结束空格