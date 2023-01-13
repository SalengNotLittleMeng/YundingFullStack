# JavaScript复习笔记

## 一、[js基础](https://so.csdn.net/so/search?q=js基础&spm=1001.2101.3001.7020)知识 （变量、数据类型、运算符）

```js
prompt('请输入')
alert('请输入')
console.log(1);

```

### 1.变量（存放数据的容器；申请内存中空间）

#### 1.1 声明变量及初始化

```js
var age
      //赋值
age = 10
      //变量的初始化
var myname = 'zt'
```

#### 1.2 变量更新

```js
var myname = 'zt'
myname = 'tz'
console.log(myname); //tz
```

#### 1.3变量命名

```
1.字母，数字，下划线，美元符号
2.区分大小写
3.不能以数字开头
4.驼峰命名法 首字母小写，后面单词首字母大写 myFirstName
name 不要用
```

#### 1.4 交换两个变量的值

需要一个临时变量temp

![在这里插入图片描述](https://meijiaqin.oss-cn-beijing.aliyuncs.com/d2e8c96db9444e189d384416f2865375.jpeg)

```javascript
var apple1, apple2, temp
apple1 = '青苹果'
apple2 = '红苹果'
temp = apple1
apple1 = apple2
apple2 = temp
```

### 2. 数据类型

> 不同数据**占用存储空间不同**，才定义了不同数据类型
> 变量的数据类型

> js的变量数据类型只有在程序运行过程中，**根据等号右边的值**来确定
> js是动态语言，**数据类型可变**

```javascript
 var x = 10
 x = 'zt'          //体现了数据类型可变
```

#### 2.1 数据类型分类

```
简单（Number,String,Boolean,Undefined,Null），复杂（object）
```

##### 2.1.1 Number

```
八进制 数字前面加0 十六进制 数字前面加0x
```

```javascript
         数字型最大值  
 console.log(Number.MAX_VALUE);
 		 数字型最小值
 console.log(Number.MIN_VALUE);

```

```javascript
         无穷大
 console.log(Number.MAX_VALUE * 2);    //Infinity
	     无穷小
 console.log(Number.MIN_VALUE * 2);    //-Infinity

```

#### 注意：

```javascript
NaN 非数字
NaN是一个特殊的（数字值） （typeof NaN的结果为number）
NaN是唯一一个和自身不相等的值

 console.log('zt' - 10);            //NaN
       isNaN() 					    判断非数字，并返回布尔值 是数字false 不是数字true
 console.log(isNaN(12));           //false
 console.log(isNaN('zt'));         //true

```

##### 2.1.2 String

引号嵌套，内双外单，内单外双

```javascript
 var str = '我是"高富帅"程序员'
 var str1 = "我是'高富帅'程序员"

```

字符串转义符 \

检测获取字符串长度length

```javascript
 var str = 'sasascadcac'
 console.log(str.length);

```
字符串拼接+ 数值相加，字符相连
引引加加 ’ ‘+ +’ ’

```javascript
console.log('沙漠' + '骆驼');
console.log('zt' + 18);
console.log('zt' + true);

```



##### 2.1.3 Boolean

true,false 参与加法运算 当1，0

```javascript
 console.log(true + 1);     //2
 console.log(false + 1);    //1

```



##### 2.1.4.Undefined

声明变量没有赋值

```javascript
 var v = undefined
 console.log(undefined + 1);        //NaN
 console.log(undefined + true);     //NaN

```

##### 2.1.5 Null

```javascript
var space = null
 console.log(space + 1);            //1

```

获取检测变量的数据类型 typeof

```javascript
var num = 10
 console.log(typeof num);		   //number
 var timer = null
 console.log(typeof timer);        //object

```



#### 2.2数据类型转换(转化为字符串，数字型，布尔型)

##### 2.2.1 转化为字符串

```javascript
toString() String() 字符串拼接

 var num = 10
 var str = num.toString()
 console.log(str);

 String()
 console.log(String(10));
```

##### 2.2.2 转化为数字型

parseInt() 得到整数
parseFloat() 可得到小数
Number()

```javascript
 var age = '12'
 console.log(parseInt(age));
 console.log(parseInt('120px'));    //120    会去掉单位
       
 Number()
 var str = '123'
 console.log(Number(str));

 隐式转换
 console.log('12' - 0);// 12
 console.log('123' - '120');// 3
```

##### 2.2.3 转化为布尔型

Boolean() 代表 空，否定 的值都转化为false
‘’ 0 NaN null undefined 都转化为false 其余都为true

```javascript
 小练习
 var name = prompt('请输入姓名')
 var age = prompt('请输入年龄')
 var sex = prompt('请输入性别')
 alert('您的姓名是:' + name + '\n您的年龄是:' + age + '\n您的性别是:' + sex)

```

### 3. 运算符

#### 3.1 数据类型



```
+— * / %(取余)

浮点数 算数运算里会有问题 有精度问题
```

```
console.log(0.1+0.2);                   //0.3000000000000004
余数为零，证明这个数能被整除表达式： 
数字，运算符，变量组成 都有返回值

```



#### 3.2.递增递减运算符

```
前置 ++n --n 后置n++ n–

前置 先加一 后返回值 后置 先返回原值 后加一
```

#### 3.3 比较运算符 返回布尔值

```
== 会转型（隐式转换） 把字符串型转换为数字型
```



```javascript
console.log(18 == '18');                  //true
```



#### 3.4 逻辑运算符

&& || ！多个条件的判断 返回值也是布尔

```javascript
逻辑与&&  逻辑中断（短路）
 console.log(123 && 456); //456           表达式1为真，返回表达式2
 console.log(0 && 456); //0               表达式1为假，返回表达式1
逻辑或 短路
 console.log(123 || 456); //123           表达式1为真，返回表达式1
 console.log(0 || 456); //456             表达式1为假，返回表达式2
```





#### 3.5 赋值运算符

```
= += -= *= /= %=
```



#### 3.6 优先级问题

```
1.小括号
2.一元运算符    ++  --  !
3.算术运算符    先*/后 +-
4.关系运算符    >  >=  <  <=
5.相等运算符    ==  !=  === !==
6.逻辑运算符    先&& 后||
7.赋值运算符    =
8.逗号运算符    ,
```





## 二、js流程控制 （条件、循环）



### 1. 条件语句

流程控制 : 顺序 分支 循环## 1. 分支流程控制 if switch

闰年案例 能被4整除且不能被100整除,或能被400整除

```javascript
var year = prompt('请输入年份')
 if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
     alert(year + '是润年')
 } else {
     alert(year + '是平年')
 }    

```



```
switch 利用特定值 匹配时是全等
```



```javascript
switch (表达式) {
 case value1:
     执行语句1
     break;
 case value2:
     执行语句2
     break;
 default:
     执行最后的语句;
 }
```



### 2. 循环

#### 2.1 for循环

#### 2.2while循环

```javascript
 var m = prompt('你爱我吗？')
 while (m !== '我爱你') {
     m = prompt('你爱我吗？')
 }
 alert('我也爱你啊！')
```

#### 2.3 do while循环

```
do{ }while()
continue跳出本次循环，继续下一个循环 break跳出整个循环
```

```
求1到100间，除了能被7整除外的整数和
```

```javascript
 var sum = 0
 for (var i = 1; i <= 100; i++) {
     if (i % 7 == 0) {
         continue
     }
     sum += i
 }
 console.log(sum);
```

## 三、js函数 （附加数组）

### 1 数组

#### 1.1 创建数组

```
var arr=new Array();
```

```
利用数组字面量创建数组
字面量：一看就知道什么数据类型
```



```javascript
 var arr = []
 var arr1 = [1, 2, 'zt', true]  
```



#### 1.2 获取数组元素

```
数组名[索引号]
```

```
 console.log(arr1[2]);
```

**注意：没有数组元素输出的话，返回undefined**



#### 1.3 遍历数组（从头到尾访问一次）

```javascript
for (var i = 0; i < arr1.length; i++) {
     console.log(arr1[i]);
 }
```

#### 1.4 新增数组元素 （修改length长度 新的值是undefind）

```
数组翻转
```

```javascript
var arr = [1, 2, 3, 4]
 var newArr = []
 for (var i = arr.length - 1; i >= 0; i--) {
     newArr[newArr.length] = arr[i]
 }
 console.log(newArr);
```



```
数组排序，冒泡排序
原理：一次比较两个元素，如果错误就交换，一个元素交换为一趟交换次数
双重for循环
```



```javascript
var arr = [5, 4, 3, 2, 1]
 for (var i = 0; i <= arr.length - 1; i++) {            //外层循环管趟数
     for (var j = 0; j <= arr.length - i - 1; j++) {    //里层循环管每一趟交换
         if (arr[j] > arr[j + 1]) {
             var temp = arr[j]
             arr[j] = arr[j + 1]
             arr[j + 1] = temp
         }
     }
 }
 console.log(arr);
```



### 2.函数  (封装了一段可以被重复执行调用的代码块 让大量代码重复使用)

#### 2.1 函数的声明和调用

```
第一种声明函数
```



```javascript
function 函数名() {
     函数体
 }
```





```javascript
 function sayHi() {
     console.log('hi');
 }
```



```
第二种声明函数
```



```javascript
 函数表达式(匿名函数)  跟声明变量差不多
 
 var fun = function() {
     console.log('我是函数表达式');
 }
 fun()
```



```
调用函数
函数名()
```



```
 sayHi()
```



```
立即执行函数
```



```javascript
 (function(){})()    
        
 (function(){}())
```



#### 2.2 函数的参数



```
形参和实参
形参是接受实参的，相当于一个变量（不用声明的
```



```javascript
function cook(a) {
     console.log(a);
 }
 cook('酸辣土豆丝')
```



```
函数的返回值
函数将值返回给调用者，用到return
函数名()=return后面的结果
```



```javascript
 function 函数名(){
     return 需要返回的结果
 }
 函数名()
```



```javascript
 function cook(aru) {
     return aru
 }
 console.log(cook('大肘子'));
 function getSum(n1, n2) {
     return n1 + n2
 }
 console.log(getSum(1, 2));

```



```
终止函数 return 后面的代码不会执行
只能返回一个值
```



```
求任意两个数的加减乘除结果
```



```
 function getResult(n1, n2) {
     return [n1 = n2, n1 - n2, n1 * n2, n1 / n2]
 }
 var re = getResult(1, 2)
 console.log(re);
```



```
没有return 则返回undefined
```



```
 function fun() {
 }
 console.log(fun());//undefined
```



#### 2.3 arguments的使用（只有函数有，已经内置好了



```
存储了传递的所有实参
展示的是一个伪数组
有数组的length属性 按照索引存储 没有真正数组的一些方法
```



```javascript
function fn() {
     console.log(arguments);          //1,2,3
     console.log(arguments.length);   //3
     console.log(arguments[2]);       //3
     //       可以按照数组的方法遍历arguments
     for (var i = 0; i < arguments.length; i++) {
         console.log(arguments[i]);
     }
 }
 fn(1, 2, 3)
```



```
利用函数求任意个数的最大值
```



```javascript
function getMax() {
     var max = arguments[0]
     for (var i = 0; i < arguments.length; i++) {
         if (arguments[i] > max) {
             max = arguments[i]
         }
     }
     return max
 }
 console.log(getMax(1, 2, 3));
 console.log(getMax(1, 2, 3, 4, 5));
 console.log(getMax(1, 2, 3, 33, 55));
```



```
函数可以调用另一个函数
```



```
function fn1() {
     console.log(11);
     fn2()
 }
 fn1()
 function fn2() {
     console.log(22);
 }
```



```
用户输入年份，输出当前年份2月天数
```



```
function backDay() {
     var year = prompt('请输入年份')
     if (isRunYear(year)) {
         alert('2月有29天')
     } else {
         alert('2月有28天')
     }
 }
 backDay()
 function isRunYear(year) {
     var flag = false
     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
         flag = true
     }
     return flag
 }

```



## 四、js对象 （附加作用域）



### 1 作用域

```
代码名字在某个范围起作用 减少命名冲突
全局作用域 整个script标签 或者一个单独js文件
局部作用域（函数作用域） 函数内部
```



#### 1.1 变量的作用域



全局变量 局部变量
注意 函数内部，**没有声明直接赋值**的变量也是**全局变量**
函数的**形参**也是**局部变量**



```javascript
 function fun() {
     var num1 = 10
     num2 = 20
 }
 fun()
 console.log(num1);     //报错
 console.log(num2);     //20
```



```
全局变量只有在浏览器关闭才会销毁，比较占资源
局部变量当程序执行完毕后就会销毁，比较节约资源
作用域链（内部函数访问外部函数变量，采取链式查找） 就近原则 链式查找
```



#### 1.2 预解析 变量提升 函数提升



```
js引擎运行js分两步： 预解析 代码执行
预解析：js引擎会把js里所有var 和function提升到当前作用域的最前面
代码执行：按照书写顺序从上往下执行
```



##### 1.2.1 变量提升 (提升声明，不提升赋值)



```
 console.log(num);
 var num = 10
 
 相当于
 
 var num
 console.log(num);
 num = 10

```



##### 1.2.2 函数表达式提升



```javascript
 fun()
 var fun = function() {
     console.log(22);
 }
 
 相当于
 
 var fun
 fun()
 fun = function() {
     console.log(22);
 }

```



##### 1.2.3 函数提升 (提升声明 不提升调用)



```
 var a = b = c = 9//相当于
 var a = 9
 b = 9
 c = 9
 f1()
 console.log(c);
 console.log(b);
 console.log(a);
 function f1() {
     var a = b = c = 9
     console.log(a);
     console.log(b);
     console.log(c);
 }
 
 相当于
 
 function f1() {
     var a
     a = b = c = 9
     console.log(a);    //9
     console.log(b);    //9
     console.log(c);    //9
 }
 f1()
 console.log(c);        //9    不声明只赋值是全局变量 
 console.log(b);        //9
 console.log(a);       //报错

```



### 2.js对象



```
对象（一组 无序 的相关 属性 和 方法 的集合） 一个具体的事物
所有的事物都是对象 字符串，数值，数组，函数
保存一个值时可以用变量，保存多个值（一组值）可以用数组，保存一个人完整信息用对象
```



#### 2.1 创建对象三种方式

##### 2.1.1 字面量创建对象



```
创建一个空的对象
```



```javascript
 var obj = {}  
```



```
采取键值对 多个属性方法用 ，号隔开 方法后面跟一个匿名函数
```



```
var obj = {
    uname: '张三丰',
    age: 18,
    sex: 男,x
    sayHi: function() {
        console.log('hi');
    }
}
```



```
使用对象
调用对象属性 1.对象名.属性名 (.理解为 的) 2.对象名[‘属性名’
```



```
 console.log(obj.uname);
 console.log(obj['age']);
```



```
调用对象方法 对象名.方法名()
```



```
 obj.sayHi()
```



##### 2.1.2 new Object创建对象



```
利用等号赋值方法添加属性方法
```



```
var obj = new Object()        //创建一个空对象
obj.uname = 'zt'
obj.age = 18
obj.sex = '男'
obj.sayHi = function() {
    console.log('hi');
}
```



##### 2.1.3 利用构造函数创建对象



```javascript
function 构造函数名() {
    this.属性 = 值
    this.方法 = function() {}
}
new构造函数名()

```



```javascript
function Star(uname, age, sex) {         //构造函数名首字母大写
    this.name = uname                    //必须加this
    this.age = age
    this.sex = sex
    this.sing=function(song){
        console.log(song);
    }
}
var ldh= new Star('刘德华', 18, '男')    //调用构造函数  必须用new  
    //只要new Star() 调用函数就创建一个对象
console.log(ldh);                        //构造函数不需要return，就可以返回结果
ldh.sing('冰雨')

```





#### 2.2 变量、属性 和 函数、方法 区别



##### 2.2.1 变量和属性

```
相同点:都是用来存储数据的
不同点:变量 单独声明并赋值 使用时直接写变量名 单独存在
属性 在对象里面不需要声明 使用必须对象.属性
```



```javascript
var num = 10
var obj = {
    age: 18
}
```



##### 2.2.2 函数和方法

```javascript
相同点 都是实现某种功能 做某事
不同点 函数 单独声明 调用 使用时直接写函数名()调用 单独存在
方法 在对象里面不需要声明 使用必须对象.方法()
```



#### 2.3 构造函数和对象总结



```
构造函数 明星 泛指一个大类，类似于Java里的类
对象 是一个具体的事物

构造函数创建对象的过程我们也称为对象实例化
```



```
new 关键字的执行过程
new在内存中创建了一个空的对象
this会指向刚才创建的对象
执行构造函数里面代码 给这个空对象添加属性方法
返回这个对象

生宝宝举例
生一个宝宝 必须是亲生this指向 教孩子读书添加东西 长大挣钱return父母
```



#### 2.4 遍历对象 for in



```javascript
var obj = {
    name: 'pink老师',
    age: 18,
    sex: '男'
}

for (var k in obj) {
    console.log(k);
    console.log(obj[k]);
}

```





## 五、js内置对象



```
s对象有三种
自定义对象 内置对象 浏览器对象
内置对象就是指JS语言自带的一些对象，这些对象供开发者使用，并提供一些常用的或者是最基本的而必要的功能（属性和方法）
```



### 1 Math对象



```
不是一个构造函数，不用new调用，直接使用里面方法和属性
```



```javascript
 console.log(Math.PI);
 console.log(Math.max(1, 99, 3));
 console.log(Math.max(1, 99, 'zt'));       //NaN
 console.log(Math.max());                  //-Infinity

```



```
封装一个自己的数学对象
```





```javascript
var myMath = {
     PI: 3.1415926535,
     max: function() {
         var max = arguments[0]
         for (var i = 1; i < arguments.length; i++) {
             if (arguments[i] > max) {
                 max = arguments[i]
             }
         }
         return max
     },
     min: function() {
         var min = arguments[0]
         for (var i = 1; i < arguments.length; i++) {
             if (arguments[i] < min) {
                 min = arguments[i]
             }
         }
         return min
     }
 }
 console.log(myMath.PI);
 console.log(myMath.max(1, 5, 9));
 console.log(myMath.min(1, 5, 9));

```



```
得到两个数之间随机整数
```



```javascript
function getRandom(min, max) {
     Math.floor(Math.random() * (max - min + 1)) + min  }

```



### 2. Date对象



```
日期时间 是一个构造函数 必须使用new
```



```javascript
 var date = new Date()                  //没参数  返回当前系统时间
 var date = new Date(2019, 10, 1)       //数字型 2019，10，1   字符串型  '2019-10-1 8:8:8'
 console.log(date);

```



```
日期格式化
```



```
 console.log(date.getFullYear());    //返回当前日期年
 console.log(date.getMonth());       //返回当前日期月     0-11 所以要加一
 console.log(date.getDate());        //返回当前日期日
 console.log(date.getDay());         //返回当前日期星期   周日返回的是0

```



```javascript
 var date = new Date()
 var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
 var day = date.getDay()
 console.log(arr[day]);
 console.log(date.getHours());      //时
 console.log(date.getMinutes());    //分
 console.log(date.getSeconds());    //秒
 function getTime() {
     var time = new Date()
     var h = time.getHours()
     h = h < 10 ? '0' + h : h
     var m = time.getMinutes()
     m = m < 10 ? '0' + m : m
     var s = time.getSeconds()
     s = s < 10 ? '0' + s : s
     return h + ':' + m + ':' + s
 }
 console.log(getTime());

```



### 3 数组对象

```
是一个构造函数 需要new
```



```javascript
 var arr = new Array()             //创建了一个空数组   里面参数只有一个的话表示数组元素个数
 var arr1 = new Array(2, 3)        //里面有两个元素，2和3，必须写两个以上

```



#### 3.1 检测是否为数组



```
instanceof 运算符 可以检测是否为数组
```



```javascript
 var arr = []
 var obj = {}
 console.log(arr instanceof Array);  //true
 console.log(obj instanceof Array);  //false

```



#### 3.2 添加和删除元素



```
push() 在数组后面添加 返回值时数组的长度
```



```
 var arr = []
 arr.push(1,'zt')
 console.log(arr);      //[ 1 , 'zt' ]

```



```
unshift() 在数组的前面添加 返回值是数组长度
```



```
 var arr = [1, 23, 4]
 arr.unshift('zt')
 console.log(arr);      //['zt', 1 , 23 , 4]

```



```
删除数组元素
pop() 删除最后一个元素 返回值是删除的元素
```



```
 var arr = [1, 23, 4]
 arr.pop()
 console.log(arr);					//[1 , 23]
 console.log(arr.pop());			// 4 

```



```
shift() 删除第一个元素 返回值是删除元素
```



```
 var arr = [1, 23, 4]
 arr.shift()
 console.log(arr);                 //[23 , 4]
 console.log(arr.shift());         // 1

```





#### 3.3 数组排序、翻转数组



```
数组排序 sort()
数组翻转 reverse()
```



```
var arr = [1, 23, 4]
arr.reverse()
console.log(arr);        //[4, 23, 1]

```



```
arr.sort()                 //只能一位数
arr.sort(function(a, b) {  //升序的顺序   b-a  降序
        return a - b
    })
console.log(arr);

```



#### 3.4 数组索引



```
indexOf() 返回该数组元素索引 只返回第一个满足 找不到返回-1
lastIndexOf() 从后往前查
```



```javascript
 var arr = ['red', 'bule', 'green']
 console.log(arr.indexOf('bule'));    // 1

```



#### 3.5 数组去重



```
遍历旧数组，放到新数组 再利用indexOf() 返回-1说明没查到，就可以往里插入了
```





```javascript
 function unique(arr) {
    var newArr = []
    for (var i = 0; i < arr.lenght; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
 }
 var demo = unique(['a', 'a', 'b'])
 console.log(demo);                //['a' , 'b']

```





#### 3.6 数组转化为字符串



```javascript
toString() join(‘分隔符’)
```



### 4 字符串对象



```
基本包装类型
把简单数据类型包装成 复杂数据类型 (String Number Boolean)
```



```
 var str='zt'
 console.log(str.length);
 
      包装成
      
 var temp =new String('zt')
 str=temp
 temp=null

```





```
根据字符返回位置 str.indexOf(‘要查找的字符’,[起始的位置])
返回字符位置和次数
```





```javascript
var str = 'absxascasbcabsbzz'
var index = str.indexOf('a')
var num = 0
while (index != -1) {
    console.log(index);
    num++
    str.indexOf('a', index + 1)
}
console.log('次数' + num);

```





```
根据位置返回字符
charAt(index)返回本身 charCodeAt(index)返回ASC码 str[index]
```



### 5. RegExp对象 （正则表达式）



#### 5.1 创建



```
var 变量名 = new RegExp(“正则表达式”,“匹配模式”);
```

```
匹配模式

i： 忽略大小写
g： 全局匹配模式
ig： 忽略大小写且全局匹配模式
```



```
使用字面量创建
var 变量名 = /正则表达式/匹配模式;
```



```javascript
   i： 忽略大小写
   g： 全局匹配模式
   m： 执行多行匹配

[ ] 里的内容也是或的关系
[a - z]： 任意小写字母
[A - Z]： 任意大写字母
[A - z]： 任意字母
[0 - 9]： 任意数字

```



```
检查一个字符串中是否含有abc或adc或aec
```



```javascript
  var reg = /a[bde]c/;
  var str = "abc123";
  var result = reg.test(str);
  console.log(result);

```



```
[ ^ a - z]： 除了任意小写字母
[ ^ A - Z]： 除了任意大写字母
[ ^ A - z]： 除了任意字母
[ ^ 0 - 9]： 除了任意数字
```



```
检查一个字符串中是否除了数字还有其它字母
```



```javascript
 var reg = /[^0-9]/;
 var str = "0123456789";
 var result = reg.test(str);
 console.log(result);

```



#### 5.2 正则方法



```
search()方法演示：该方法可以搜索字符串中是否含有指定内容，
如果搜索到指定内容，则会返回第一次出现的索引，如果没有搜索到返回-1
```



```javascript
 var str = "hello abc hello aec afc";
 var result = str.search(/a[bef]c/);
 console.log(result);

```



```
match()方法演示：该方法可以根据正则表达式，从一个字符串中将符合条件的内容提取出来，
默认情况下我们的match()只会找到第一个符合要求的内容
```



```javascript
 var str = "1a2a3a4a5e6f7A8B9C";
 var result = str.match(/[a-z]/ig);
 console.log(result);

```





```
replace()方法演示：该方法可以将字符串中指定内容替换为新的内容，默认只会替换第一个
```





```javascript
 var str = "1a2a3a4a5e6f7A8B9C";
 var result = str.replace(/[a-z]/gi, "@_@");
 console.log(result);

```





#### 5.3 正则量词

```
{n} ：          正好出现n次
{m,} ：         出现m次及以上
{m,n} ：        出现m-n次
+ ：            至少一个，相当于{1,}
* ：            0个或多个，相当于{0,}
? ：            0个或1个，相当于{0,1}
^ ：            表示开头，注意它在[^字符序列]表达的意思不一样
$ ：            表示结尾
\w ：           任意字母、数字、_，相当于[A-z0-9_]
\W ：           除了字母、数字、_，相当于[^A-z0-9_]
\d ：           任意的数字，相当于[0-9]
\D ：           除了任意的数字，相当于[^0-9]
\s ：           空格
\S ：           除了空格
\b ：           单词边界
\B ：           除了单词边界

```



### 6 简单与复杂数据类型



```
简单数据类型（值类型）储存值本身
复杂数据类型（引用数据类型）储存的仅仅是地址

简单 string number boolea undefined null（返回一个空对象） 引用
通过new创建的对象（系统，自定义） 如Object，Array，Date

堆（引用） 首先在栈里面存放地址（十六进制表示） 然后地址指向堆里数据
栈（简单） 里面直接开辟一个新空间，存放的是值

```





















































































