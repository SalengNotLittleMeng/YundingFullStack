### map

map可以将某个value与某个key绑定，只有特定的key才能拿到特定的value，一把钥匙开一把锁。

```js
//创建一个map
const map=new Map();
```

map的属性与方法：

- map.size()，获取map中的键值对数量
- map.set(key,value)，向map中添加键值对
- map.get(key)，根据key获取值
- map.delete(key)，删除指定数据
- map.has(key)，检查map中是否包含指定键
- map.clear()，删除全部的键值对

使用Array.from()方法可以将map转为二维数组。

### set

set可以创建一个容器，这个容器中不会出现重复的东西。

```js
//创建一个set
const set=new Set();
//向set中添加数据
set.add(10);
set.add("孙悟空");
set.add(10);//由于前面添加过10了，所以这句执行后set中任然只有10和“孙悟空”这两个元素
const arr=[...set];//将set中的数据弄进数组
```

set的方法：

1. size()，获取数据的数量
2. add()，添加元素
3. has()，检查元素
4. delete()，删除元素

### Math

Math时js中提供的一个工具类，Math中提供了数学运算相关的一些常量和方法。

```js
Math.PI//圆周率

Math.abs()//求一个数的绝对值
Math.min()//求多个值中的最小值
Math.max()//求多个值中的最大值
Math.pow(x,y)//求x的y次幂
Math.sqrt()//求一个数的平方根

Math.floor()//向下取整
Math.ceil()//向上取整
Math.round()//四舍五入取整
Math.trunc()//直接去除小数位

Math.random()//生成一个0-1之间的随机数
```

### Date

在js中所有和时间有关的数据都由Date对象来表示。

```js
let d=new Date();//直接通过new Date()创建时间对象时，它创建的是当前时间对象

/*
可以在Date()构造函数中传递一个表示时间的字符串
字符串的格式：月/日/年 时:分:秒
			年-月-日T时:分:秒
*/
d=new Date("2019-6-12T12:20:23");
//new Date(年,月,日,时,分,秒,毫秒)
```

Date对象的方法：

- getFullYear()  获取4位年份
- getMonth()  返回当前月份(0-11)
- getDate() 返回当前是几日
- getDay() 返回当前日期是周几(0-6)  0表示周日
- getTime() 返回当前日期对象的时间戳
- Date.now() 获取当前时间戳
- toLocaleDateString() 将日期转换为本地的字符串
- toLocaleTimeString() 将时间转换为本地的字符串

