# js常用的对象

## 一.MAP

### 1.定义

map用来存储键值对结构的数据（key-value)

obj存储的数据可以认为是一种键对值结构

### 2.区别

obj属性只能是字符串或符号，如果传递了其他类型的属性名，js解释器会把它自动转换成字符串，MAP中任何类型都可以成为数据的key

### 3.set添加属性

![image-20230111162941127](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230111162941127.png)

name

![image-20230111163151250](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230111163151250.png)

### 4.属性和方法

创建 new Map()

属性和方法：

map.size()获取map中键对值的数量

map.set(key,value)向map中添加键对值

map.get(key)根据key获取值

map.delete(key)删除指定数据

map.keys()获取map所有的key

map.values()获取map的所有value

## 二.SET

用来创建一个集合

他的功能和数组类似**，不同点在于Set不能存储重复的**数据

### 使用方式

创建：

new Set()

new Set([...])

### 方法

size获取数据

add()添加元素

has()检查元素

delete()删除元素

## 三.math

一个工具类

math为我们提供了一些数学运算相关的常量和方法

相关可去MDN上查

### 常用方法

Math.ABS()一个数的绝对值。

Math.min()求多个值中的最小值

Math.max()求多个值中的最大值

Math.pow()求x的y次幂 等价于x ** y

Math.sqrt()求给一个值开方 4 ** .5

Math.floor()向下取整 Math.floor(2.9)=2  Math.floor(-2.9)=-3

Math.ceil()向上取整

Math.round()四舍五入取整

Math.trunc()直接去除小数位

Math.random()生成0-1之间的伪随机数

生成 0-x之间的随机数：

```javascript
Math.round(Math.random() * x);
Math.floor(Math.random() * (x+1));
```

生成min-max之间的随机数

```
Math.floor(Math.random() * (max-min))+min;
```

## 四.date对象

js中表示时间的对象

### 1.date()

直接通过new Date()创建时间对象的时候，它创建的是当前时间的对象

```javascript
let a = new Date();
```

可以在Date()的构造函数中，传递一个表示时间的字符串

字符串的格式： 月/日/年 时:分:秒     或者 2019-6-26T23：34：56

```javascript
let a = new Date("2019-6-26T23：34：56");
```

日期对象最少有年月日

```
let a = new Date(年，月，日，时，分，秒，毫秒);
```

### 2.getTime()

返回当前日期对象的时间戳

时间戳：自1970年1月1日0时0分到当前时间所经历的毫秒数

计算机底层存储时间用的都是时间戳

### 3.Date.now()

直接获取当前时间的时间戳

![image-20230112104322392](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230112104322392.png)

### 4.日期的格式化

.toLocalDateString将日期转换伪本地的字符串

参数:

1.描述语言和国家信息的字符串

​	 zh-CN中文中国   zh-HK中文香港  zh-TW中文台湾  en-US英文美国

2.需要一个对象作为参数，在对象中可以通过对象的属性来对日期的格式进行配置

​			dateStyle 日期的风格

​			timeStyle 时间的风格

​					full  long medium short(默认)

​			hour12 是否采用12小时制  true flase 

​			weekday星期的显示方式 true flase

​			year  numeric 

![image-20230112110856617](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230112110856617.png)

.toLocalTimeString将时间转换为本地的字符串