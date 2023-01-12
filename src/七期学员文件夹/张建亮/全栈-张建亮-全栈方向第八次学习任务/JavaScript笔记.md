# JavaScript基础语法

## 1.let和var区别

### 一、变量提升（声）
当浏览器开辟出供代码执行的栈内存后，代码并没有自上而下立即执行，而是继续做了一些事情：把当前作用域中所有带var/function关键字的进行提前的声明和定义 => 变量提升机制

带var的只是提前声明（declare）var a;，如果只声明没有赋值，默认值是undefined
例如：

```javascript
console.log(a);
var a = 13;
```

输出：undefined
相当于：

输出：undefined
相当于：

```javascript
var a;		// 只声明没有赋值，默认为undefined
console.log(a);
a = 13;
```


带function的不仅声明，而且还定义了（defined），准确来说就是让变量和某个值进行关联。


### 二、let和var的区别

1. let和const不存在变量提升机制
创建变量的六种方式中：var/function有变量提升，而let/const/class/import都不存在这个机制

2. var允许重复声明，而let不允许重复声明
在相同的作用域（或执行上下文中）

如果使用var/function关键词声明变量并且重复声明，是不会有影响的（声明第一次之后，之后再遇到就不会再重复声明了）
但使用let/const就不行，浏览器会校验当前作用域中是否已经存在这个变量了，如果已经存在了，则再次基于let等重新声明就会报错
在浏览器开辟栈内存供代码自上而下执行之前，不仅有变量提升的操作，还有很多其他的操作 => “词法解析”或者“词法检测”：就是检测当前即将要执行的代码是否会出现“语法错误 SyntaxError”，如果出现错误，代码将不会再执行（第一行都不会执行）

console.log(1)  // => 这行代码就已经不会执行了
let a = 12
console.log(a)
let a = 13      // => 此行出错：SyntaxError: Identifier 'a' has already been declared
console.log(a)
所谓重复就是：不管之前通过什么方法，只要当前栈内存中存在了这个变量，我们使用let/const等重复再声明这个变量就是语法错误。eg：

console.log(a)
var a = 12
let a = 13  // => SyntaxError: Identifier 'a' has already been declared
console.log(a)
console.log(a)
let a = 13
var a = 12  // => SyntaxError: Identifier 'a' has already been declared
console.log(a)




# JavaScript常用对象

## 1.枚举属性，指将对象中的所有的属性全部获取

#### for-in语句

  \- 语法：

​        for(let propName in 对象){

​          语句...

​        }



​      \- for-in的循环体会执行多次，有几个属性就会执行几次，

​        每次执行时，都会将一个属性名赋值给我们所定义的变量

​      

​      \- 注意：并不是所有的属性都可以枚举，比如 使用符号添加的属性

## 2.对象创建

### 使用Object创建对象的问题：

​          \1. 无法区分出不同类型的对象

​          \2. 不方便批量创建对象



​        在JS中可以通过类（class）来解决这个问题：

​          \1. 类是对象模板，可以将对象中的属性和方法直接定义在类中

​            定义后，就可以直接通过类来创建对象

​          \2. 通过同一个类创建的对象，我们称为同类对象

​            可以使用instanceof来检查一个对象是否是由某个类创建

​            如果某个对象是由某个类所创建，则我们称该对象是这个类的实例



​        语法：

​          class 类名 {} // 类名要使用大驼峰命名

​          const 类名 = class {}  

​          

### 通过类创建对象

​       

```javascript
   new 类()

 <script>
        /* 
            类是创建对象的模板，要创建第一件事就是定义类
        */



        class Person{
            /* 
                类的代码块，默认就是严格模式，
                    类的代码块是用来设置对象的属性的，不是什么代码都能写
            */
           name = "孙悟空" // Person的实例属性name p1.name
           age = 18       // 实例属性只能通过实例访问 p1.age

           static test = "test静态属性" // 使用static声明的属性，是静态属性（类属性） Person.test
           static hh = "静态属性"   // 静态属性只能通过类去访问 Person.hh
```

### 构造函数的方法创建对象

```javascript
 class Person{
            
            // 在类中可以添加一个特殊的方法constructor
            // 该方法我们称为构造函数（构造方法）
            // 构造函数会在我们调用类创建对象时执行
            constructor(name, age, gender){
                // console.log("构造函数执行了~", name, age, gender)
                // 可以在构造函数中，为实例属性进行赋值
                // 在构造函数中，this表示当前所创建的对象
                this.name = name
                this.age = age
                this.gender = gender

            }

        }

        const p1 = new Person("孙悟空", 18, "男")
        const p2 = new Person("猪八戒", 28, "男")
        const p3 = new Person("沙和尚", 38, "男")

        console.log(p1)
        console.log(p2)
        console.log(p3)
//我们可以使用 instanceof 运算符检查一个对象是否是一个类的实例，它返回true或false
```



## 数组

  数组（Array）

​          \- 数组也是一种复合数据类型，在数组可以存储多个不同类型的数据

​          \- 数组中存储的是有序的数据，数组中的每个数据都有一个唯一的索引

​            可以通过索引来操作获取数据

​          \- 数组中存储的数据叫做元素

​          \- 索引（index）是一组大于0的整数

​          \- 创建数组

​            通过Array()来创建数组，也可以通过[]来创建数组



​          \- 向数组中添加元素

​            语法：

​              数组[索引] = 元素



​          \- 读取数组中的元素

​            语法：

​              数组[索引]

​              \- 如果读取了一个不存在的元素，不好报错而是返回undefined



​          \- length

​            \- 获取数组的长度

​            \- 获取的实际值就是数组的最大索引 + 1

​            \- 向数组最后添加元素：

​              数组[数组.length] = 元素

​            \- length是可以修改的

 ### for-of语句可以用来遍历可迭代对象

​        语法：

​          for(变量 of 可迭代的对象){

​            语句...

​          }



​        执行流程：

​          for-of的循环体会执行多次，数组中有几个元素就会执行几次，

​            每次执行时都会将一个元素赋值给变量

## 封装、继承和多态

### 1.封装

​        \- 对象就是一个用来存储不同属性的容器

​        \- 对象不仅存储属性，还要负责数据的安全

​        \- 直接添加到对象中的属性，并不安全，因为它们可以被任意的修改

​        \- 如何确保数据的安全：

​          1.私有化数据

​            \- 将需要保护的数据设置为私有，只能在类内部使用

​          2.提供setter和getter方法来开放对数据的操作

​            \- 属性设置私有，通过getter setter方法操作属性带来的好处

​              \1. 可以控制属性的读写权限

​              \2. 可以在方法中对属性的值进行验证



​        \- 封装主要用来保证数据的安全

​        \- 实现封装的方式：

​          1.属性私有化 加#

​          2.通过getter和setter方法来操作属性

​            get 属性名(){

​              return this.#属性

​            }



​            set 属性名(参数){

​              this.#属性 = 参数

​            }

​    */

   

```javascript
   class Person {
      // #address = "花果山" // 实例使用#开头就变成了私有属性，私有属性只能在类内部访问
      #name
      #age
      #gender
      constructor(name, age, gender) {

        this.#name = name

        this.#age = age

        this.#gender = gender

      }

      sayHello() {

        console.log(this.#name)

      }
     // getter方法，用来读取属性

     getName(){

       return this.#name
     }
     // setter方法，用来设置属性
     setName(name){
       this.#name = name
     }
     getAge(){
       return this.#age
     }
     setAge(age){
 const p1 = new Person("孙悟空", 18, "男")
      // p1.age = "hello"
      // p1.getName()
      p1.setAge(-11) // p1.age = 11  p1.age
     // p1.setName('猪八戒')
      p1.gender = "女"
     console.log(p1.gender)
```



### 2.继承

定义：A对象通过继承 B 对象，就能直接拥有 B 对象的所有属性和方法。

 #### Es6继承

```javascript
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    say(){   //Person.prototype
        return this.name+','+this.age;
    }
}
class Student extends Person {
   constructor(name,age,school){
       super(name,age);		//获得父类的属性
       this.school = school 
   }
   say(){
       return super.say()+","+this.school;	//super.say()继父类的方法
   }
}
var s = new Student("法外狂徒张三",15,"清华");

console.log(s.say());

```

**原型对象中的数据有**：

1.对象中的数据（属性，方法等）

2.construtor（对象的构造函数）

#### 原型链：

​            \-读取对象属性时，会优先对象自身属性

​              如果对象中有，则使用，没有则去对象的原型中寻找

​              如果原型中有，则使用，没有则去原型的原型中寻找

​              直到找到Object对象的原型（Object的原型没有原型（为null））

​              如果依然没有找到，则返回undefined

我们可以通过`_proto_`访问一个对象的原型` 对象.__proto__`

## 数组对象

### 1.创建数组

```javascript
var arr = new Array();
arr[0] = 1;
arr[1] = "2"

//使用字面量创建
var arr = [1,"2"];

//遍历数组（循环遍历）
for (var i = 0;i < arr.length;i++){
    console.log(arr[i]);
}
//for of方法
for(var item of arr){
//item遍历的数组元素,如下操作会把数组依次打印出来
    console.log(item)
}
```

### 2.数组属性

```javascript
//constructor,返回创建对象数组的原型函数,如下图
var arr=[1,2,3,4];
console.log(arr.constructor);

//length，设置或返回数组元素的个数
console.log(arr.length);
```

![img](https://typora--image1.oss-cn-beijing.aliyuncs.com/980c0ed39d3282e2b8e77253c8bf098b.png)

![img](https://typora--image1.oss-cn-beijing.aliyuncs.com/d5b5c2bc0e188b9d4feec0c58c69c244.png)

### 3.数组方法

```javascript
//push():向数组末尾添加一个或多个元素，并返回数组新的长度
var arr=["孙悟空","猪八戒","沙和尚"];
var result=arr.push("唐僧","白龙马","白骨精","玉兔精");
console.log(arr);
console.log(result);
```

![img](https://typora--image1.oss-cn-beijing.aliyuncs.com/7aae1c9934e6bba6de27079ceb77ec36.png)



```javascript
//pop():删除数组最后一个元素，并将被删除的元素作为返回值返回
var arr=["孙悟空","猪八戒","沙和尚"];
var result=arr.pop();
console.log(arr);
console.log(result);
```

![img](https://typora--image1.oss-cn-beijing.aliyuncs.com/043cc91f4298568ea371a41dd605ac72.png)



```javascript
//unshift():向数组开头添加一个或多个元素，并返回新的数组长度
var arr=["孙悟空","猪八戒","沙和尚"];
var result=arr.unshift("牛魔王", "二郎神");
console.log(arr)
console.log(result);
```

![img](https://typora--image1.oss-cn-beijing.aliyuncs.com/a5a0ced2f25131ef28b91ce82c35581f.png)



```javascript
//shift:删除数组第一个元素，并将被删除的元素作为返回值返回
var arr = ["孙悟空", "猪八戒", "沙和尚"];
var result= arr.shift();
console.log(arr);
console.log(result);
```

![img](https://typora--image1.oss-cn-beijing.aliyuncs.com/dd77a3a74059c9856680794c3b349bab.png)



```javascript
//forEach():可用于遍历数组
var arr = ["孙悟空", "猪八戒", "沙和尚"];
arr.forEach(function(value,index,obj){
    console.log(value+"####"+index+"####"+obj);
});
```

![img](https://typora--image1.oss-cn-beijing.aliyuncs.com/23e5a69cb38d91535b27ab372e689258.png)



forEach()方法需要一个函数作为参数，像这种由我们创建但是不由我们使用的，称为回调函数。每次遍历执行时，浏览器会将遍历到的元素以实参的形式传递进来，我们可以定义形参用于读取：

- 第一个参数：就是当前正在遍历的元素
- 第二个参数：就是当前正在遍历的元素的索引
- 第三个参数：就是正在遍历的数组



```javascript
//slice():从数组中获取指定元素，不改变原数组，将截取到的元素封装到一个新数组中返回
var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧", "白骨精"];
var result= arr.(1,4);
console.log(result);
result= arr.slice(3);
console.log(result);
result= arr.slice(1,-2);
console.log(result);
```

![img](https://typora--image1.oss-cn-beijing.aliyuncs.com/18ad817362706339461665656b5b81bd.png)

- 第一个参数：截至开始的位置的索引，包含开始索引
- 第二个参数：截取结束位置的索引，不包含结束索引。（当省略不写时，则会截取从开始索引往后的所有元素）

注：索引可以传递一个负值，此时方法从后往前计算，-1表示倒数第一个，-2表示倒数第二个。



```javascript
//splice():从数组中删除指定元素，会影响原数组，并将被删除的元素作为返回值返回
var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧", "白骨精"];
var result= arr.splice(3,2);
console.log(arr);
console.log(result);
result=arr.splice(1,0,"牛魔王""铁扇公主""红孩儿");
console.log(arr);
console.log(result);
```

![img](https://typora--image1.oss-cn-beijing.aliyuncs.com/45074ba5bb641f6dc53536e6471f1fd2.png)

- 第一个参数：开始位置的索引
- 第二个参数：删除的元素数量
- 第三个及以后参数：可以传递一些新的元素，这些元素将会自动插入到开始位置索引**前边**



```javascript
//concat()：连接两个或多个数组，并将新的数组返回，不会对原数组产生影响
var arr = ["孙悟空", "猪八戒", "沙和尚"];
var arr2 = ["白骨精", "玉兔精", "蜘蛛精"];
var arr3 = ["二郎神", "太上老君", "玉皇大帝"];
var result= arr.concat(arr2,arr3,"牛魔王""铁扇公主")；
console.log(result);
```

![img](https://typora--image1.oss-cn-beijing.aliyuncs.com/12c0858ad255003ba9ddd66ebb9a0df2.png)

```javascript
//join:可以将数组转换为一个字符串，不会对原数组产生影响，将转换后的字符串作为结果返回，可以指定一个字符串作为参数，这个字符串会成为数组元素中的连接符，默认为“，”
var arr = ["孙悟空", "猪八戒", "沙和尚"];
var result=arr.join("@-@");
console.log(result);
```

![img](https://typora--image1.oss-cn-beijing.aliyuncs.com/891029712402377b772676696ae3ec72.png)



```javascript
//reverse():用于反转数组（前面去后面，后面去前面），会直接修改原函数
var arr = ["孙悟空", "猪八戒", "沙和尚"];
arr.reverse();
console.log(arr);
```

![image-20201018122520134](https://typora--image1.oss-cn-beijing.aliyuncs.com/e7a4076da2a80e71ea4ce4c6e5010656.png)



```javascript
//sort():用于排序，会影响原数组，默认按照Unicode编码进行排序
var arr=["b","c","a"];
arr.sort()
consolr.log(arr);
```

![image-20201018123042465](https://typora--image1.oss-cn-beijing.aliyuncs.com/59057f1ac69677343efe214d0582f5d7.png)

- 注：即使对于纯数字的数组，使用sort()排序时，也会遵循上述规则，所以可能会导致错误结果

```javascript
var arr=[1,3,2,11,5,6];
arr.sort();
console.log(arr)
```

![image-20201018123124230](https://typora--image1.oss-cn-beijing.aliyuncs.com/248ba29f0450aba65c0f1015b35b6fe3.png)

我们可以自己定义排序的规则，在sort()添加一个回调函数，回调函数中需定义两个形参，浏览器将会分别使用数组中的元素作为实参去调用回调函数，顺序规则如下：

- 如果返回一个大于0的值，则元素会交换位置
- 如果返回一个小于0的值，则元素位置不变
- 如果返回一个等于0的值，则认为两个元素相等，也不交换位置

综上，总结如下：

- 升序排序，返回a-b

- 降序排序，返回b-a

  

```javascript
var arr=[1,3,2,11,5,6];
arr.sort(function(a,b){
return a-b;
})
console,log(arr);
```

![image-20201018123008856](https://typora--image1.oss-cn-beijing.aliyuncs.com/ed84d161d2ae11b8981ea2edae1eabbd.png)



## 函数对象

### 1.call()和apply()

call()与apply()这两个方法都是函数对象的方法，作用都是**改变this指向**，需要通过函数对象来调用，调用call(),apply()可以将一个对象指定为第一个参数，此时这个对象将会成为函数执行时的this，call()方法可以将实参在对象之后依次传递，apply()方法需要将实参封装到一个数组中统一传递。

```javascript
//call()方法
function fun(a,b){
    console.log("a="+a);
    console.log("b="+b);
    console.log("fun="+this);
}
var obj={
    name:"obj",
    sayName:function(){
        console.log(this.name);
    }
};
fun(2,3);
console.log("==========;======")
fun.call(obj,2,3)
```

![image-20201018124051021](https://typora--image1.oss-cn-beijing.aliyuncs.com/9367eeccb7a3dc02fd5827257e5ade96.png)

> 注：默认fun()函数调用，this指向windows对象，可以使用call()调用函数，在调用时传入一个对象，这个对象就是this所指对象，也就是说，可以自己指定this的指向，然后从第二个参数开始，实参会依次传递



```javascript
//appply()方法
function fun(a,b){
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("fun = " + this);
}
var obj={
    name:"obj",
    sayName:function(){
        console.log(this.name);
    }
};
fun(2,3);
console.log("===============");
fun.apply(obj,[2,3]);
```

![img](https://typora--image1.oss-cn-beijing.aliyuncs.com/23760ffdfa7792bce72a94e90b62c3f1.png)

> ​	注：默认fun()函数调用，this指向的是windows对象，可以使用apply()调用函数，调用时传入一个对象，这个对象就是this所指对象，也就是说，可以自己指定this的指向，然后从第二个参数开始，需要制定一个实参数组进行传递

### 2.this指向

- 以函数形式调用时，this永远都是window
- 以方法的形式调用时，this是调用方法的对象
- 以构造函数的形式调用时，this是新创建的对象
- 使用call和apply调用时，this是指定的对象

### 3.arguments参数

在调用函数时，浏览器每回都会传递两个隐含的参数：

1. 函数的上下文对象：this
2. 封装实参的对象：arguments

argument是一个类数组对象，它也可以通过索引来操作数据，也可以获取长度，在调用函数时，我们所传递的实参都会在arguments中保存，比如arguments.length可以用来获取实参的长度，我们即使不定义形参，也可以通过arguments来使用实参，不过较为麻烦

- arguments[0]：表示第一个实参
- arguments[1]:   表示第二个实参

它里面有一个属性叫做callee，这个属性对应一个函数对象，就是当前正在指向的对象。

```javascript
function fun(a,b){
    //通过下标获取第一个参数
    console.log(arguments[0]);
    //通过下标获取第二个参数
    console.log(arguments[1]);
    //获取实参的个数
    console.log(arguments.length);
    //查看函数对象
    console.log(arguments.callee);
    console.log(arguments.callee == fun);
}
fun("Hello","world");
```

![img](https://typora--image1.oss-cn-beijing.aliyuncs.com/3b55a97ff8f86bdbea0bae14b0298a06.png)



## Data对象

在JavaScript中使用Date对象来表示一个时间,如果直接使用构造函数创建一个Data对象,则会封装为当前代码执行的时间

```javascript
var date=new Date();
console.log(date);
console.log(date.getFullYear());//获取当前日期对应的年份
console.log(date.getMonth());//获取当前日期对象的月份(0~11)
console.log(date.getDate());//获取当前对象的日期(1~31)
console.log(date.getHours());//获取当前对象的小时(0~23)
console.log(date.getMinutes());//获取当前对象的分钟(0~59)
console.log(date.getSeconds());//获取当前对象的秒钟(0~59)
console.log(date.getMilliseconds());//获取当前对象的毫秒(0~999)
```

![image-20230108164901932](https://typora--image1.oss-cn-beijing.aliyuncs.com/image-20230108164901932.png)



## Math对象

Math对象和其他对象不同,他不是一个构造函数,它属于一个工具类不用创建对象,里面封装了数学运算相关属性和方法

```javascript
//固定值
console.log("PE="+Math.PI);
console.log("E="+Math.E);
console.log("=============");
//正数
console.log(Math.abs(1));//计算一个数的绝对值
console.log(Math.ceil(1.1))//对一个数向上取整,小数位有值自动进一
console.log(Math.floor(1.99))//对一个数向下取整,小数部分会被舍掉
console.log(Math.round(1.4))//对一个数四舍五入取整
//负数
console.log(Math.abs(-1));//计算一个数的绝对值
console.log(Math.ceil(-1.1))//对一个数向上取整,小数位有值自动进一
console.log(Math.floor(-1.99))//对一个数向下取整,小数部分会被舍掉
console.log(Math.round(-1.4))//对一个数四舍五入取整
//随机数
//Math.random():可以用来生成一个0~1之间的随机数
//生成一个0~x之间的随机数:Math.round(Math.random()*x)
//生成一个x~y之间的随机数:Math.round(Math.random()*(y-x)+x)
console.log(Math.round(Math.random()*10));//生成一个0~10之间的随机数
console.log(Math.round(Math.random()*(10-1)+1));//生成一个1~10之间的随机数
//数学运算
console.log(Math.pow(12,3));//Math.pow(x,y):返回x的y次幂
console.log(Math.sqrt(4));//Math.sqrt(x):返回x的平方根


```

![image-20201018132005284](https://typora--image1.oss-cn-beijing.aliyuncs.com/e533a1267ab2c8fe8d2497baa2cb23fb.png)



## string对象

### 1.概述

在JS中为我们提供了三个包装类,通过这三个包装类可以将基本数据类型转换为对象

- String():可以将基本数据类型字符串转换为String对象
- Number():可以将基本数据类型的数字转换为Number对象
- Boolean():可以将基本数据类型的布尔值转换为Boolean对象

注意:在实际使用中不会使用基本数据类型对象,容易出现错误

### 2.字符串属性

- constructor:返回创建字符串对象的原型函数

```javascript
var str="Hello,World";
console.log(str.constructor);
```

![image-20201018152739858](https://typora--image1.oss-cn-beijing.aliyuncs.com/96b81bd4968fcb14ad0575f7d55f1010.png)

- length:用于获取字符串的长度

```javascript
var str="Hello,World";
console.log(str.length);
```

![image-20201018152511480](https://typora--image1.oss-cn-beijing.aliyuncs.com/c0f40802f9a0e11f45574f494c15381c.png)

### 3.字符串方法

- charAt():可以根据索引获取指定位置字符

```javascript
var str="Hello,World";
console.log(str.cahrAt(1));
```

![image-20201018153002150](https://typora--image1.oss-cn-beijing.aliyuncs.com/762781eebb3617228550594503fc4316.png)



- charCodeAt():获取指定位置字符串的字符编码(Unicode编码)

```javascript
var str= "Hello,World";
console.log(str.charCodeAt(1));
```

![image-20201018153218872](https://img-blog.csdnimg.cn/img_convert/ad3be8e9fb9508f9c930501166be335d.png)



- concat():用于连接两个或多个字符串

```javascript
var str = "Hello,World";
console.log(str.concat("你好,","世界!"));
```

![image-20201018153504935](https://img-blog.csdnimg.cn/img_convert/33dde050d46ecb020361b5c926db7d6b.png)



- indexOf():检索一个字符串中是否含有指定内容,如果字符串中含有该内容,则会返回其第一次出现的索引,如果没有找到指定的内容,则返回-1,可以指定一个第二个参数,指定开始查找的位置

```javascript
var str="Hello,World";
console.log(str.indexOf("o"));
console.log(str.indexOf("o",5));
```

![image-20201018160212146](https://typora--image1.oss-cn-beijing.aliyuncs.com/9f06bce7729598899f4b2185ea999f32.png)



- lastIndexOf():用法与indexOf()一样,但是是从后往前,也可指定开始的位置

```javascript
var str= "Hello,World";
console.log(str.lastIndexOf("o"));
console.log(str.lastIndexOf("o",5));
```

- slice():从字符串中指定截取内容,不会影响原字符串,而是将截取内容返回
- 第一个参数:开始位置的索引(包含)
- 第二个参数:结束位置的索引(不包含),省略则会截取后面所有的

> 注:第二个参数可以是负数,负数的话会从后面计算

```javascript
var str="Hello,World";
var restult=str.slice(1,4);
console.log(result);
result=str.slice(1);
console.log(result);
result=str.slice(1,-1);
console.log(result);
```

![image-20201018160909634](https://typora--image1.oss-cn-beijing.aliyuncs.com/224c58a44617a2687c8a7b1192d0c10d.png)



- substring():用来截取一个字符串,与slice()类似,不同的在于这个方法不能接受负值作为参数,如果传递了一个负值,则默认使用0,而且可以自动调整参数的位置,如果第二个数小于第一个,则自动交换

```javascript
var str="Hello,World";
var result=str.substring(1,4);
console.log(result);
result=str.substring(1);
console.log(result);
result=str.substring(1,-1);
console.log(result);
```

![image-20201018160942481](https://typora--image1.oss-cn-beijing.aliyuncs.com/3fd21d1ce6e521c3d809c43cffee13f0.png)



- substr():用于截取字符串
- 第一个参数:截取位置开始的索引
- 第二个参数:截取的长度

```javascript
var str="Hello,World!";
var result=str.substr(6,6);
console.log(result);
```

![image-20201018161859192](https://typora--image1.oss-cn-beijing.aliyuncs.com/a2e08ece31ebafc8158b8361b12626ba.png)

- split():可以将一个字符串拆分为一个数组;需要一个字符串作为参数,将会根据该字符串去拆分数组

```javascript
var str="Hello,World";
var result=str.split(",");
console.log(result);
```

![image-20201018162029011](https://typora--image1.oss-cn-beijing.aliyuncs.com/e3d890ba555951588bb43b629ecf1966.png)

- toUpperCase():将一个字符串转化为大写并返回
- toLowerCase():将一个字符串转化为小写并返回

```javascript
var str="Hello,World";
var result=str.toUpperCase();
console.log(result);
result=str.toLowerCase();
console.log(result);
```

![image-20201018162118218](https://typora--image1.oss-cn-beijing.aliyuncs.com/422f98ce2a511c228816c8043c8095b3.png)

![image-20201018162241087](https://typora--image1.oss-cn-beijing.aliyuncs.com/2dfc8bed3884f0db0360d80d76ce1b05.png)





## RegExp对象

### 概述

正则表达式用于定义一些字符串的规则,

使用typeof检查正则对象,会返回object

### 创建正则对象

1. 使用对象创建

```javascript
var 变量名=new RegExp("正则表达式","匹配模式");
```

> 匹配模式:
>
> - i:忽略大小写
> - g:全局匹配模式
> - ig:忽略大小写且全局匹配模式

```javascript
//这个正则表达式可以用来检查一个字符串中是否含有a
var reg = new RegExp("ab","i");
var str = "Abc";
var result = reg.test(str);
console.log(result);
```

![image-20201018163156692](https://typora--image1.oss-cn-beijing.aliyuncs.com/3de3a4f311d8e818a57dddae72dcd497.png)

2. 使用字面量创建

```javascript
var 变量名 = /正则表达式/匹配模式;
```

> ​	匹配模式:
>
> - i:忽略大小写
> - g:全局匹配模式
> - m:执行多行匹配

注:可以为一个正则表达式设置多个匹配模式,且顺序无所谓

```javascript
//这个正则表达式可以检查字符串中是否含有a
var reg = /a/i;
var str = "Abc";
var result = reg.test(str);
console.log(result);
```

![image-20201018163156692](https://typora--image1.oss-cn-beijing.aliyuncs.com/3de3a4f311d8e818a57dddae72dcd497.png)



### 正则进阶

- 语法格式:使用"|"表示或者的意思

```javascript
//这个正则表达式可以检查一个字符串中是否含有a或b或c
var reg = /a|b|c/;
var str = "Abc";
var result = reg.test(str);
console.log(result);
```

![image-20201018164941099](https://typora--image1.oss-cn-beijing.aliyuncs.com/c377efe675435e89e278d9a0dc1ff3d3.png)



- 语法格式:[ ]里的内容也是或的关系

```javascript
//这个正则表达式可以检查一个字符串中是否含有字母
var reg = /[A-z]/;
var str = "Abc";
var result = reg.test(str);
console.log(result);
```

![image-20201018171936882](https://typora--image1.oss-cn-beijing.aliyuncs.com/f1a2578a46f59e6d39637b115f799062.png)

>常见组合:
>
>- [a-z] :任意小写字母
>
>- [A-Z] :任意大写字母
>- [A -z] : 任意字母
>- [0-9] :任意数字
>- [^a-z] :除了任意小写字母
>- [A-Z] :除了任意大写字母
>- [A -z] : 除了任意字母
>- [0-9] :除了任意数字

```javascript
//这个正则表达式可以检查一个字符串中是否含有abc或adc或aec
var reg = /a[bde]c/;
var str = "abc123";
var result = reg.test(str);
console.log(result);
//这个正则表达式可以用来检查一个字符串中是否除了数字还有其他字母
var reg = /[^0-9]/;
var str = "0123456789";
var result = reg.test(str);
console.log(result);
```



### 正则方法

- spilit():可以将一个字符串拆分为一个数组,方法中可以传递一个正则表达式作为参数,这样方法会根据正则表达式去拆分字符串,这个方法即使不指定全局匹配,也会全部插分

```javascript
var str = "1a2b3c4d5e6f7";
var result = str.split(/[A-z]/);
console.log(result);
```

![image-20201018212920528](https://typora--image1.oss-cn-beijing.aliyuncs.com/63fc37cd99f403812856c9c60ddb2c08.png)



- search():可以搜索字符串中是否含有指定内容,如有,则会返回第一次出现的索引,没有则返回-1,它只可以检索第一个,即使设置全局匹配也没用

```javascript
var str = "hello abc hello aec afc";
var result = str.search(/a[bef]c/);
console.log(result);
```

![image-20201018213217017](https://typora--image1.oss-cn-beijing.aliyuncs.com/8ba6eb1153172af98f7b11e8f3b0b0f9.png)



- match():可以根据正则表达式从字符串中检索内容,默认情况只会匹配第一个,找到即停止;可以设置正则表达式为全局匹配,也可以为一个表达式设置多个匹配模式,match()会将匹配到的内容封装到一个数组中返回,即使只有一个结果

  

> 匹配模式:
>
> - i:忽略大小写
> - g:全局匹配模式
> - ig:忽略大小写且全局匹配模式

```javascript
var str = "1a2a3a4a5e6f7A8B9C";
var result = str.match(/[a-z]/ig);
console.log(result);
```

![image-20201018212920528](https://typora--image1.oss-cn-beijing.aliyuncs.com/63fc37cd99f403812856c9c60ddb2c08.png)



- replace():可以将字符串指定内容替换为新的内容,默认只会替换第一个,但是可以设置全局匹配替换全部

  > - 第一个参数:被替换的内容,可以接受一个正则表达式作为参数
  > - 第二个参数:新的内容

```javascript
var str = "1a2a3a4a5e6f7A8B9C";
var result = str.replace(/[a-z]/gi,"@-@");
console.log(result);
```

![image-20201018213653322](https://typora--image1.oss-cn-beijing.aliyuncs.com/588f6ab348d21f0bcd080929ca09d10c.png)



### 正则量词

通过量词可以设置一个内容出现的次数,量词**只对它前面的一个内容**起作用,如果有多个内容可以使用()扩起来,常见量词如下:

- {n}:正好出现n次
- {m,}:出现m次及以上
- {m,n}:出现m~n次
- +:至少一个,相当于{1,}
- *:0个或多个,相当于{0,}
- ?:0个或多个,相当于{0,1}

```javascript
var str = "abbc";
reg = /(ab){3}/;
console.log(reg.test(str));
console.log("==============");
reg = /b{3}/;
console.log(reg.test(str));
console.log("==============");
reg = /ab{1,3}c/;
console.log(reg.test(str));
console.log("==============");
reg = /ab{3,}c/;
console.log(reg.test(str));
console.log("==============");
reg = /ab+c/;
console.log(reg.test(str));
console.log("==============");
reg = /ab*c/;
console.log(reg.test(str));
console.log("==============");
reg = /ab?c/;
console.log(reg.test(str));
console.log("==============");
```

![image-20201018214346309](https://typora--image1.oss-cn-beijing.aliyuncs.com/fdb8c9ee6adea6a14e18374c788f85e7.png)

### 正则高阶

使用`^`he`$`检查或判断是否以某个字符或字符序列开头或结尾

- `^`:表示开头
- `$`:表示结尾

```javascript
//检查一个字符串是否以a开头
var str = "abcabca"
var reg = /^a/;
console.log(reg.test(str));
//检查一个字符串是否以a结尾
var str = "abcabca";
var reg = /$a/;
console.log(reg.test(str));
```

![image-20201018214857304](https://typora--image1.oss-cn-beijing.aliyuncs.com/5c5989022efc8ce11868c4804fc8fc77.png)



检查一个字符串中是否含有`.`和`\`就会使用转移字符

- `\.`:表示`.`
- `\\`:表示`\`

> 注:在使用构造函数时,由于他的参数是一个字符串,而``\`是字符串中转义字符,如果要使用`\`则需要使用`\\`来代替

```javascript
var reg1 = /\./;
var reg2 = /\\/;
var reg3 = new RegExp("\\.");
var reg4 = new RegExp("\\\\");
```

除此之外,还有以下:

- `\w` : 任意字母,数字,`-`,相当于[A-z0-9]
- `\W` : 除了任意字母,数字,`-`,相当于[ ^A-z0-9_]
- `\d` : 任意的数字,相当于于`[0-9]`
- `\D` : 除了任意的数字,相当于[ ^ 0-9]
- `\s` : 空格
- `\S` : 除了空格
- `\b` : 单词边界
- `\B` : 除了单词边界 

```javascript
//创建一个正则表达式,去除字符串中前后的空格
var str = "  hello  child   "
var reg = /^s*|\s*/g
console.log(str);
str = str.replace(reg,"");
console.log(str)
```

![image-20201018220522294](https://typora--image1.oss-cn-beijing.aliyuncs.com/2a12f2a885901b15c8d1bf8cab4cf0d1.png)

```javascript
//检查字符串中是否含有单词child
var str = "hello child";
var reg = /\bchild\b/;
console.log(reg.test(str));
```

![image-20201018220305875](https://typora--image1.oss-cn-beijing.aliyuncs.com/5722c7e9902b36d90565949787051b76.png)

### 检查手机号

```javascript
var phoneStr = "1521314600"
var phoneReg = /^1[3-9][0-9]{9}$/;
console.log(phoneReg.test(phoneStr));
```

![image-20201018220305875](https://typora--image1.oss-cn-beijing.aliyuncs.com/8add452c5bd9cef4daaba4ee1cb67bb1.png)



### 检查邮箱号

```javascript
var emailStr = "abc.def@163.com";
var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
console.log(emailReg.test(emailStr));
```

![image-20201018220717578](https://typora--image1.oss-cn-beijing.aliyuncs.com/5ffafe5f8f29c55fd80f9b07fb079c09.png)



# 第四章 JavaScript DOM

## DOM概述

当网页被加载时,浏览器会创建页面的文档对象模型(Document Object Model)

HTML DOM 模型被结构化为对象树

![image-20201019104459658](https://typora--image1.oss-cn-beijing.aliyuncs.com/910bb72bbde0f438991f02a6cda866d7.png)

通过这个对象模型,JavaScript获得创建动态HTML的所有力量:

- 能改变页面中所有HTML元素
-  能改变页面中所有HTML属性
-  能改变页面中所有的CSS样式
- 能删除已有的HTML元素和属性
- 能添加新的HTML元素和属性
- 能对页面中已有的HTML事件作出反应
- 能在页面中创建新的HTML事件

综上,HTML DOM 是关于如何获取,更改,添加或删除HTML元素的标准

## DOM文档节点

### 概述

字节Node,是构成我们网页最基本的组成部分,网页中的每一个部分都可以称为一个节点,

比如: HTML标签,属性,文本,注释,整个文档等都是一个节点

节点:Node--构成HTML文档的最基本的单元

常用节点有四类:

- 文档节点: 整个HTML文档
- 元素节点: HTML文档中的HTML标签
- 属性节点: 元素的属性
- 文本节点: HTML标签中的文本内容

![image-20201019115515595](https://img-blog.csdnimg.cn/img_convert/6c58b926da64501f486305b5afe3d9f8.png)

### 节点属性

![image-20201019115655478](https://img-blog.csdnimg.cn/img_convert/2271dc3f0f61e890fe4cb76817fc6942.png)

### 文档节点

文档节点(Document)代表的是zhenggeHTML文档,网页中的所有节点都是他的子节点

document对象作为window对象的属性是存在的,我们不用获取可直接使用

通过该对象我们可以在整个文档访问内查找结点对象,并可以通过该对象创建各种节点对象

### 元素节点

HTML中的各种标签都是元素节点(Element),这也是最常用的

浏览器会将页面中的所有标签都转化为一个元素节点,我们可以通过document的方法来获取元素节点

例如: `document.getElement()`,根据元素节点的属性名获取一个属性节点对象

### 属性节点

属性节点(Attribute)表示的是标签中的一个一个的属性,但属性节点并非是元素节点的子节点,而是元素节点的一部分,可以通过元素节点来获取指定的属性节点

例如: `元素节点.getAttributeNode("属性名")`,根据元素节点的属性名获取一个属性节点对象

> ​	注:一般不使用属性节点

### 文本节点

文本节点(Text)表示的是HTML标签以外的文本内容,任意非HTML的文本节点,它包括可以以字面解释的纯文本内容,文本节点一般是作为元素节点的子节点存在的获取文本节点时,一般先要获取元素节点,再通过元素节点获取文本节点

例如: `元素节点.firstChild;`,获取元素的第一个子节点,一般为文本节点

## DOM文档操作

### 查找HTML元素

#### 1.方法介绍

| 方法                                  | 描述                      |
| ------------------------------------- | ------------------------- |
| document.getElementByid(id)           | 通过元素id来查找元素      |
| document.getElementsByTagName(name)   | 通过签名来查找元素        |
| document.getElementsByClassName(name) | 通过类名来查找元素        |
| document.querySelector(CSS选择器)     | 通过CSS选择器选择一个元素 |
| document.querySelectorAll(CSS选择器)  | 通过CSS选择器选择多个元素 |

#### 2.方法演示

```javascript
//创建一个按钮,通过id获取按钮节点对象
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
</head>
<body> 
        <button id = "btn">我是按钮</button>
    <script>
var btn = document.getElementById("btn");
console.log(btn);
    </script>
</body>
</html>
```

![image-20201019140936584](https://img-blog.csdnimg.cn/img_convert/a4a12435040d0fb10c21046d3da4f685.png)



```javascript
//创建一个按钮通过标签名获取节点对象数组
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button>我是按钮</button>
<script>
    var btn = document.getElementsByTagName("button");
    console.log(btn);
</script>
</body>
</html>
```

![image-20201019141202534](https://img-blog.csdnimg.cn/img_convert/e9e294078eb1d88399cf087561187bc4.png)



```javascript
//创建一个按钮,通过类名获取节点对象数组
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button class="btn">我是按钮</button>
<script>
   var btn = document.getElementsByClassName("btn");
console.log(btn);
</script>
</body>
</html>

```

![image-20201019141405002](https://img-blog.csdnimg.cn/img_convert/cbf99da44967f7bd855435581c483059.png)



```javascript
//创建一个按钮,通过CSS选择器选择该按钮
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button class="btn">我是按钮</button>
<script>
    var btn = document.querySelector(".btn");
    console.log(btn);
</script>
</body>
</html>

```

![image-20201020090857926](https://img-blog.csdnimg.cn/img_convert/1f0792d8e76b9363a509ad6ac7d85244.png)



```javascript
//创建一个无序列表,tgCSS选择器选择该列表的所有li
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<ul class="list">
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    <li>列表项4</li>
</ul>
<script>
    var list = document.querySelectorAll(".list li");
    console.log(list);
</script>
</body>
</html>

```

![image-20201020091354415](https://typora--image1.oss-cn-beijing.aliyuncs.com/80f710098d194f71233b1fcfb324f4e2.png)



### 获取HTML的值

| 方法                             | 描述                     |
| -------------------------------- | ------------------------ |
| 元素节点.innerText               | 获取HTML元素的inner Text |
| 元素节点.innerHTNL               | 获取HTML元素的inner HTML |
| 元素节点.属性                    | 获取HTNL元素的属性值     |
| 元素节点.getAttribute(attribute) | 获取HTML元素的属性值     |
| 元素节点.style.样式              | 获取HTML元素的行内样式值 |

```javascript
//创建一个按钮,获取按钮的文本内容
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn">我是按钮</button>
<script>
    var btn = document.getElementById("btn");
    console.log(btn.innerText);
</script>
</body>
</html>

```

![image-20201020093332082](https://typora--image1.oss-cn-beijing.aliyuncs.com/d836aa32b6a43979de51338534ba2bf9.png)



```javascript
//创建一个div,在div中插入一个h1标题,获取div中的html代码
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box">
    <h1>我是Box中的大标题</h1>
</div>
<script>
    var box = document.getElementById("box");
    console.log(box.innerHTML);
</script>
</body>
</html>

```

![image-20201020093459855](https://typora--image1.oss-cn-beijing.aliyuncs.com/4a8f1dd5b26a043cd7b9078c0cfd0421.png)



```javascript
//创建一个超链接,默认为空,设置href属性为https://www.baidu.com ,使用JavaScript代码读取href属性
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a id="a" href="https://www.baidu.com">打开百度，你就知道！</a>
<script>
    var a = document.getElementById("a");
    console.log(a.href);
</script>
</body>
</html>
//下面采用`元素节点.getAttribute(attribute)`方法,结果相同
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a id="a" href="https://www.baidu.com">打开百度，你就知道！</a>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var a = document.getElementById("a");
    console.log(a.getAttribute("href"));
</script>
</body>
</html>

```

![image-20201020093633259](https://typora--image1.oss-cn-beijing.aliyuncs.com/8758c3b09d1558dac07d0732a14a629b.png)



```javascript
//创建一个正方形div,默认颜色为红色,使用JavaScript代码获取div的宽度
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div style="width: 100px;height: 100px;background: red;" id="box"></div>
<script>
    var box = document.getElementById("box");
    console.log(box.style.width);
</script>
</body>
</html>

```

![image-20201020094411123](https://typora--image1.oss-cn-beijing.aliyuncs.com/3ee1de03ba68d6321c0b6922c74ebd52.png)

> - 注:在JavaScript中`-`是不合法的,需要将以这种样式名修改为驼峰命名法,去掉`-`,将其后字母大写
> - 通过style属性设置的样式都是行内样式,获取的也是行内样式但是如果在样式中写了!important，则此时样式会有最高的优先级，即使通过JS也不能覆盖该样式，此时将会导致JS修改样式失效，**所以尽量不要为样式添加!important**

**扩展1**:

通过style属性设置和读取的都是内联样式,无法读取样式表中或者说正在应用的样式,我们可以通过使用元素`元素.currentstyle.样式名`来获取元素当前显示样式,如果未设置该样式,则获取默认值,但只有IE浏览器支持,其他浏览器可使用getComputedStyle()来获取元素当前样式,他有两个参数

- 第一个参数: 要获取样式的元素
- 第二个参数: 可以传递一个伪元素,一般传null

该方法会返回一个对象,对象中封装了当前元素对应的样式,可以通过`对象.样式名`来读取样式,

如果获取样式没有设置,则会获取真实的值,而不是默认值

```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        /*样式表的样式*/
        #box {
            width: 200px;
            height: 200px;
            background-color: green;
        }
    </style>
</head>
<body>
<div style="width: 100px;height: 100px;" id="box"></div>
<script>
    /*通用的获取元素样式的方法*/
    function getStyle(obj, name) {
        if (window.getComputedStyle) {
            //正常浏览器的方式，具有getComputedStyle()方法
            return getComputedStyle(obj, null)[name];
        } else {
            //IE8的方式，没有getComputedStyle()方法
            return obj.currentStyle[name];
        }
    }

    var box = document.getElementById("box");

    console.log(getStyle(box, "width"));
    console.log(getStyle(box, "height"));
    console.log(getStyle(box, "background-color"));
</script>
</body>
</html>

```

IE9-IE11 浏览器：

![image-20230111100805893](https://typora--image1.oss-cn-beijing.aliyuncs.com/image-20230111100805893.png)

> 注:颜色数值一般采用rgb或者rgba,为确保最终呈现效果一致,最好不要使用英文单词

**扩展2**:编写一段兼容性代码,用来获取任意标签的文本内容

```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a href="https://www.baidu.com" id="a">打开百度，你就知道！</a>
<script>
var a = document.getElementById("a");
console.log(getInnerText(a));
//获取任意标签的内容
function getInnerText(element){
    //判断浏览器是否支持textContent,如果支持,则使用textContent获取内容,否则使用innerText获取内容
    if(typeof element.textContent == "undefined"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}
</script>
</body>
</html>

```

IE5-IE11浏览器：

![image-20201021141805607](https://typora--image1.oss-cn-beijing.aliyuncs.com/53431bc5beb1b82d241e2666a56f28e4.png)



### 改变HTML的值

| 方法                                   | 描述                     |
| -------------------------------------- | ------------------------ |
| 元素节点.innerText = new text content  | 改变元素的inner Text     |
| 元素节点.innerHTML = new html content  | 改变元素的inner HTML     |
| 元素节点.属性 = new value              | 改变元素的属性值         |
| 元素节点,setAttribute(attribute,value) | 改变HTML元素的属性值     |
| 元素节点.style.样式 = new style        | 改变HTML元素的行内样式值 |

```javascript
//创建一个按钮,改变按钮的文本内容
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn">我是按钮</button>
<script>
   var btn =document.getElementById("btn");
btn.innerText = "我是JavaScript的按钮";
console.log(btn);
</script>
</body>
</html>

```

![image-20201019142137016](https://typora--image1.oss-cn-beijing.aliyuncs.com/56582292e6ee61fccb1dc8c90e55972c.png)



```javascript
//创建一个div,在div中插入一个h1标题
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box"></div>
<script>
    var box = document.getElementById("box");
	box.innerHTML = "<h1>我是Box中的大标题</h1>";
	console.log(box);
</script>
</body>
</html>

```

![image-20201019152023559](https://typora--image1.oss-cn-beijing.aliyuncs.com/a010c647556b98b0de90a75c1ff08cdc.png)



```javascript
//创建一个超链接,默认为空,使用JavaScript设置href属性为https://www.baidu.com 
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a id="a" href="">打开百度，你就知道！</a>
<script>
    var a = document.getElementById("a");
	a.href = "https://www.baidu.com ";
console.log(a);
</script>
</body>
</html>
//
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a id="a" href="">打开百度，你就知道！</a>
<script>
    var a = document.getElementById("a");
    a.setAttribute("href", "https://www.baidu.com");
    console.log(a);
</script>
</body>
</html>

```

![image-20201019152337340](https://typora--image1.oss-cn-beijing.aliyuncs.com/71fb6639e98948a6ca3ee290f44f8012.png)



```JavaScript
//创建一个正方形,默认颜色为红色,使用JavaScript代码改为绿色
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div style="width: 100px;height: 100px;background: red;" id="box"></div>
<script>
    var box = document.getElementById("box");
	box.style.background = "green";
	console.og(box);
</script>
</body>
</html>

```

![image-20201019152811146](https://img-blog.csdnimg.cn/img_convert/0564f9033a71ffc937e9f87f1a65c378.png)



**扩展1:**

修改节点的内容除了常用的innerHTML和innerText之外,还有insertAdjacentHTML和insertAdjacentText()方法,可以在指定位置插入内容

语法:

- where:
  - beforeBegin: 插入到开始标签的前面
  - beforeEnd: 插入到结束标签的后面
  - afterBegin: 插入到开始标签后面
  - afterEnd: 插入到结束标签后面

![img](https://img-blog.csdnimg.cn/img_convert/dae7b01cf5aa68e8b71b939b4aea1a9b.png)

​     

- html: 一段html代码
- text: 一段文本值

注意事项:

 1. 这两个方法必须等文档加载好才能执行,否则会出错

 2. insertAdjacentText只能插入普通文本,insertAdjacentHTML插入HTML代码

    

```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="insert">
    <p>薇尔莉特</p>
</div>
<script>
    var div = document.getElementById("insert");
    div.insertAdjacentHTML('beforeBegin', '薇尔莉特');
</script>
</body>
</html>

```

![image-20230111150822513](C:%5CUsers%5C86132%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20230111150822513.png)



### 修改HTML元素

| 方法                               | 描述                             |
| ---------------------------------- | -------------------------------- |
| document.creatElement(element)     | 创建HTML元素节点                 |
| document.creatAttribute(attribute) | 创建HTML属性节点                 |
| document.creatTextNode(text)       | 创建HTML文本节点                 |
| 元素节点.removeChild(element)      | 删除HTML元素                     |
| 元素节点.replaceChild(element)     | 替换HTML元素                     |
| 元素节点.appendChild(element)      | 添加HTML元素                     |
| 元素节点.insertBefore(element)     | 在指定的子节点前面插入新的子节点 |

```html
//创建一个ul列表,在列表中追加四个li标签(法1)
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script>
    var ul = document.createElement("ul");
	
	var li1 = document.createElement("li");
	var text = document.createElement("列表项1");
	li1.appendChild(text1);
	ul.appendChild(li1)

    var li2 = document.createElement("li");
    var text2 = document.createTextNode("列表项2");
    li2.appendChild(text2);
    ul.appendChild(li2);

    var li3 = document.createElement("li");
    var text3 = document.createTextNode("列表项3");
    li3.appendChild(text3);
    ul.appendChild(li3);

    var li4 = document.createElement("li");
    var text4 = document.createTextNode("列表项4");
    li4.appendChild(text4);
    ul.appendChild(li4);

	document.getElementByTagName("body")[0].appendChild(ul);
</script>
</body>
</html>

```

![image-20201020111240435](https://img-blog.csdnimg.cn/img_convert/f807b292838456cc317d127c135fca49.png)

```html
//法2
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <script>
    var ul = document.createElement("ul");

    var li1 = document.createElement("li");
    li1.innerHTML = "列表项1";
    ul.appendChild(li1);

    var li2 = document.createElement("li");
    li2.innerHTML = "列表项2";
    ul.appendChild(li2);

    var li3 = document.createElement("li");
    li3.innerHTML = "列表项3";
    ul.appendChild(li3);

    var li4 = document.createElement("li");
    li4.innerHTML = "列表项4";
    ul.appendChild(li4);

    document.getElementsByTagName("body")[0].appendChild(ul);
</script>
</body>
</html>

```

![image-20201020111408190](https://img-blog.csdnimg.cn/img_convert/4e1853b78d8f391e2bb2ee86a16bc733.png)

```html
//法3
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script>
    var ul = document.createElement("ul");

    var li1 = "<li>列表项1</li>";
    var li2 = "<li>列表项2</li>";
    var li3 = "<li>列表项3</li>";
    var li4 = "<li>列表项4</li>";
    ul.innerHTML = li1 + li2 + li3 + li4;

    document.getElementsByTagName("body")[0].appendChild(ul);
</script>
</body>
</html>

```

![image-20201020111719891](https://img-blog.csdnimg.cn/img_convert/812211288b9c0fef95fadb038fdf1c84.png)



```html
//创建一个ul列表,里面有四个li子元素,删除第一个li,替换最后一个li
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<ul id="ul">
    <li id="first">列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    <li id="last">列表项4</li>
</ul>
<script>
    var ul = document.getElementById("ul");
    var first = document.getElementById("first");
    var last = document.getElementById("last");

    /*删除第一个*/
    ul.removeChild(first);

    /*替换最后一个*/
    var replaceLi = document.createElement("li");
    replaceLi.innerHTML = "列表4的替换";
    ul.replaceChild(replaceLi, last);
</script>
</body>
</html>

```

![image-20201020113211173](https://img-blog.csdnimg.cn/img_convert/235c25b41f1db4ad92f3f7e9397a3dc8.png)



```html
//创建一个ul列表,里面有四个li子元素,在第一个li前边插入一个id为zero的li
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<ul id="ul">
    <li id="first">列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    <li>列表项4</li>
</ul>
<script>
    var ul = document.getElementById("ul");
    var first = document.getElementById("first");

    var zero = document.createElement("li");
    zero.innerHTML = "列表0的新增";
    
    ul.insertBefore(zero, first);
</script>
</body>
</html>

```

![image-20201020115016443](https://img-blog.csdnimg.cn/img_convert/836f305b817ee0ea7c0368405b20835c.png)



**扩展:**动态判断,添加,删除,切换样式

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        .b1 {
            width: 100px;
            height: 100px;
            background-color: red;
        }

        .b2 {
            width: 300px;
            height: 300px;
            background-color: yellow;
        }
    </style>
</head>
<body>
<button id="btn0">判断b2样式</button>
<button id="btn1">添加b2样式</button>
<button id="btn2">删除b2样式</button>
<button id="btn3">切换b2样式</button>

<br>
<br>

<div id="box" class="b1"></div>
<script>
    var btn0 = document.getElementById("btn0");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var box = document.getElementById("box");

    btn0.onclick = function () {
        alert(hasClass(box, "b2"));
    };

    btn1.onclick = function () {
        addClass(box, "b2");
    };

    btn2.onclick = function () {
        removeClass(box, "b2");
    };

    btn3.onclick = function () {
        toggleClass(box, "b2");
    };

    /*
     * 判断一个元素中是否含有指定的class属性值
     * 如果有该class，则返回true，没有则返回false
     */
    function hasClass(obj, cn) {
        var reg = new RegExp("\\b" + cn + "\\b");
        return reg.test(obj.className);
    }

    /*
     * 向一个元素中添加指定的class属性值
     * 参数:
     * 	obj 要添加class属性的元素
     *  cn 要添加的class值
     */
    function addClass(obj, cn) {
        // 检查obj中是否含有cn
        if (!hasClass(obj, cn)) {
            obj.className += " " + cn;
        }
    }

    /*
     * 删除一个元素中的指定的class属性
     */
    function removeClass(obj, cn) {
        var reg = new RegExp("\\b" + cn + "\\b");
        obj.className = obj.className.replace(reg, "");
    }

    /*
     * toggleClass可以用来切换一个类
     * 	如果元素中具有该类，则删除
     * 	如果元素中没有该类，则添加
     */
    function toggleClass(obj, cn) {
        // 判断obj中是否含有cn
        if (hasClass(obj, cn)) {
            // 存在，则删除
            removeClass(obj, cn);
        } else {
            // 没有，则添加
            addClass(obj, cn);
        }
    }
</script>
</body>
</html>

```



## 文档事件

HTML事件可以触发浏览器中的行为

### 窗口事件

| 属性      | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| onblur    | 当窗口失去焦点时运行脚本                                     |
| onfocus   | 当窗口获得焦点时运行脚本                                     |
| onload    | 当文档加载之后运行脚本。                                     |
| onresize  | 当调整窗口大小时运行脚本                                     |
| onstorage | 当 Web Storage 区域更新时（存储空间中的数据发生变化时）运行脚本。 |

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script>
    //当窗口失去焦点时
    window.onblur = function () {
        console.log("窗口失去焦点");
    };
    //当窗口获得焦点时
      window.onfocus = function () {
        console.log("窗口获取焦点");
    };
    //当文档加载之后运行脚本。
       window.onload = function () {
        console.log("Hello,World");
    };
    //当调整窗口大小时
       window.onresize = function () {
        console.log("窗口大小正在改变");
    };
</script>
</body>
</html>

```



### 表单事件

表单事件在HTML表单中触发(适用于所有HTML元素,但该HTML元素须在form表单内):

| 属性      | 描述                         |
| --------- | ---------------------------- |
| onblur    | 当元素失去焦点时运行脚本     |
| onfocus   | 当元素获得焦点时运行脚本     |
| onchange  | 当元素改变时运行脚本         |
| oninput   | 当元素获得用户输入时运行脚本 |
| oninvalid | 当元素无效时运行脚本         |
| onselect  | 当选取元素时运行脚本         |
| onsubmit  | 当提交表单时运行脚本         |

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form>
    <input type="text" id="text">
</form>
<script>
    var textInput = document.getElementById("text");

    //当文本框获取焦点，文本框背景为红色 
    textInput.onfocus = function () {
        this.style.background = "red";
    };
	//也可写成 textInput.style.background = "red";
    //当文本框失去焦点，文本框背景为绿色 
    textInput.onblur = function () {
        this.style.background = "green";
    };
    //当文本框内容改变时，鼠标离开文本框，自动将文本框的内容输出到控制台
    textInput.onchange = function () {
        console.log(this.value);
    };
    //当文本框内容改变时，立即将改变的内容输出到控制台 
    textInput.oninput = function () {
        console.log(this.value);

    //如果单击“submit”，则不填写文本字段，将发生警报消息
    textInput.oninvalid = function () {
        console.log("请您完善表单内容！");
    }; 
    //当选中文本框的内容时，输出“您已经选择了文本框内容！” 
    textInput.onselect = function () {
        console.log("您已经选择了文本框内容！");
    };
        var myform = document.getElementById("myform");

    //当提交表单的时候，在控制台输出“表单提交” 
    myform.onsubmit = function () {
        console.log("表单提交");
        return false;//用来阻止表单提交的，你不写它会跳转请求 
    };
</script>
</body>
</html>

```



### 键盘事件

| 属性       | 描述                       |
| ---------- | -------------------------- |
| onkeydown  | 当按下按键时运行脚本       |
| onkeyup    | 当松开按键时运行脚本       |
| onkeypress | 当按下并松开按键时运行脚本 |

```html
//当键盘按下判断当前的按键是不是 a ，如果是就输出true，否则输出false
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script>
    // 当键盘按下判断当前的按键是不是 a ，如果是就输出true，否则输出false 
    window.onkeydown = function (event) {
        /* 解决兼容性问题 */
        event = event || window.event;

        if (event.keyCode == 65) {
            console.log("true");
        } else {
            console.log("false");
        }
    };
</script>
</body>
</html>

```



```html
//使div可以根据不同的方向键向不同的方向移动
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box" style="width: 100px;height: 100px;background: red;position: absolute;"></div>
<script>
    var box = document.getElementById("box");

    //为document绑定一个按键按下的事件
    document.onkeydown = function (event) {
        event = event || window.event;

        // 定义移动速度
        var speed = 10;

        // 选择移动方向
        switch (event.keyCode) {
            case 37:
                box.style.left = box.offsetLeft - speed + "px";
                break;
            case 39:
                box.style.left = box.offsetLeft + speed + "px";
                break;
            case 38:
                box.style.top = box.offsetTop - speed + "px";
                break;
            case 40:
                box.style.top = box.offsetTop + speed + "px";
                break;
        }
    };
</script>
</body>
</html>

```



**扩展:**

当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数。

Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标的状态。

解决事件对象的兼容性问题：`event = event || window.event;`

键鼠属性:

| 属性     | 描述                                       |
| -------- | ------------------------------------------ |
| ctrlKey  | 返回当事件被触发时，“CTRL” 键是否被按下    |
| altKey   | 返回当事件被触发时，“ALT” 是否被按下       |
| shiftKey | 返回当事件被触发时，“SHIFT” 键是否被按下   |
| clientX  | 返回当事件被触发时，鼠标指针的水平坐标     |
| clientY  | 返回当事件被触发时，鼠标指针的垂直坐标     |
| screenX  | 返回当某个事件被触发时，鼠标指针的水平坐标 |
| screenY  | 返回当某个事件被触发时，鼠标指针的垂直坐标 |



### 鼠标事件

| 属性         | 描述                                             |
| ------------ | ------------------------------------------------ |
| onclick      | 当单击鼠标时运行脚本                             |
| ondbclick    | 当双击鼠标时运行脚本                             |
| onmousedown  | 当按下鼠标按钮时运行脚本                         |
| onmouseup    | 当松开鼠标按钮时运行脚本                         |
| onmousemove  | 当鼠标指针移动时运行脚本                         |
| onmouseout   | 当鼠标指针移出元素时运行脚本，不可以阻止冒泡     |
| onmouseover  | 当鼠标指针移至元素之上时运行脚本，不可以阻止冒泡 |
| onmouseenter | 当鼠标指针移至元素之上时运行脚本，可以阻止冒泡   |
| onmouseleave | 当鼠标指针移出元素时运行脚本，可以阻止冒泡       |
| onmousewheel | 当转动鼠标滚轮时运行脚本                         |
| onscroll     | 当滚动元素的滚动条时运行脚本                     |

```html
//创建一个正方形div，默认颜色为黑色，当鼠标移入div，背景颜色变为红色，当鼠标移出div，背景颜色变为绿色
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box" style="width: 100px;height: 100px;background: black;"></div>
<script>
    var box = document.getElementById("box");

    /* 当鼠标移入div，背景颜色变为红色 */
    box.onmouseenter = function () {
        this.style.background = "red";
    };

    /* 当鼠标移出div，背景颜色变为绿色 */
    box.onmouseleave = function () {
        this.style.background = "green";
    };
</script>
</body>
</html>

```



```html
//编写一个通用的拖拽元素函数，创建两个div，进行拖拽演示
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box1" style="width: 100px;height: 100px;background: red;position: absolute;"></div>
<div id="box2" style="width: 100px;height: 100px;background: green;position: absolute;"></div>
<script>
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");

    drag(box1);
    drag(box2);

    /*
     提取一个专门用来设置拖拽的函数
     参数：开启拖拽的元素
     */
    function drag(obj) {
        //当鼠标在被拖拽元素上按下时，开始拖拽
        obj.onmousedown = function (event) {
            // 解决事件的兼容性问题
            event = event || window.event;

            // 设置obj捕获所有鼠标按下的事件
            /**
             * setCapture()：
             * 只有IE支持，但是在火狐中调用时不会报错，
             * 而如果使用chrome调用，它也会报错
             */
            obj.setCapture && obj.setCapture();

            // obj的偏移量 鼠标.clentX - 元素.offsetLeft
            // obj的偏移量 鼠标.clentY - 元素.offsetTop
            var ol = event.clientX - obj.offsetLeft;
            var ot = event.clientY - obj.offsetTop;

            // 为document绑定一个鼠标移动事件
            document.onmousemove = function (event) {
                // 解决事件的兼容性问题
                event = event || window.event;
                // 当鼠标移动时被拖拽元素跟随鼠标移动
                // 获取鼠标的坐标
                var left = event.clientX - ol;
                var top = event.clientY - ot;
                // 修改obj的位置
                obj.style.left = left + "px";
                obj.style.top = top + "px";
            };

            // 为document绑定一个鼠标松开事件
            document.onmouseup = function () {
                // 取消document的onmousemove事件
                document.onmousemove = null;
                // 取消document的onmouseup事件
                document.onmouseup = null;
                // 当鼠标松开时，取消对事件的捕获
                obj.releaseCapture && obj.releaseCapture();
            };

            /*
             * 当我们拖拽一个网页中的内容时，浏览器会默认去搜索引擎中搜索内容，
             * 此时会导致拖拽功能的异常，这个是浏览器提供的默认行为，
             * 如果不希望发生这个行为，则可以通过return false来取消默认行为，
             * 但是这招对IE8不起作用
             */
            return false;
        };
    }
</script>
</body>
</html>

```



### 媒体事件

通过视频（videos），图像（images）或音频（audio） 触发该事件。

| 属性               | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| onabort            | 当发生中止事件时运行脚本                                     |
| oncanplay          | 当媒介能够开始播放但可能因缓冲而需要停止时运行脚本。         |
| oncanplaythrough   | 当媒介能够无需因缓冲而停止即可播放至结尾时运行脚本。         |
| ondurationchange   | 当媒介长度改变时运行脚本。                                   |
| onemptied          | 当媒介资源元素突然为空时（网络错误、加载错误等）运行脚本。   |
| onended            | 当媒介已抵达结尾时运行脚本。                                 |
| onerror            | 当在元素加载期间发生错误时运行脚本。                         |
| onloadeddata       | 当加载媒介数据时运行脚本。                                   |
| onloadedmetadata   | 当媒介元素的持续时间以及其它媒介数据已加载时运行脚本。       |
| onloadstart        | 当浏览器开始加载媒介数据时运行脚本。                         |
| onpause            | 当媒介数据暂停时运行脚本。                                   |
| onplay             | 当媒介数据将要开始播放时运行脚本。                           |
| onplaying          | 当媒介数据已开始播放时运行脚本。                             |
| onprogress         | 当浏览器正在取媒介数据时运行脚本。                           |
| onratechange       | 当媒介数据的播放速率改变时运行脚本。                         |
| onreadystatechange | 当就绪状态（ready-state）改变时运行脚本。                    |
| onseeked           | 当媒介元素的定位属性不再为真且定位已结束时运行脚本。         |
| onseeking          | 当媒介元素的定位属性为真且定位已开始时运行脚本。             |
| onstalled          | 当取回媒介数据过程中（延迟）存在错误时运行脚本。             |
| onsuspend          | 当浏览器已在取媒介数据但在取回整个媒介文件之前停止时运行脚本 |
| ontimeupdate       | 当媒介改变其播放位置时运行脚本。                             |
| onvolumechange     | 当媒介改变音量亦或当音量被设置为静音时运行脚本。             |
| onwaiting          | 当媒介已停止播放但打算继续播放时运行脚本。                   |



### 事件冒泡

时间的冒泡(Bubble): 所谓的冒泡指的是事件的向上传导,当后代元素的事件被触发时,其祖先元素的相同事件也会被触发



```html
//创建两个div,叠放在一起，分别绑定单击事件，点击最里边的div，会触发两个div的单击事件
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        #div1 {
            width: 200px;
            height: 200px;
            background: pink;
        }

        #div2 {
            width: 100px;
            height: 100px;
            background: coral;
        }
    </style>
</head>
<body>
<div id="div1">
    我是DIV1
    <div id="div2">
        我是DIV2
    </div>
</div>
<script>
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    // 为div1绑定单击事件
    div1.onclick = function () {
        console.log("div1 的单击事件触发了！");
    };

    // 为div2绑定单击事件
    div2.onclick = function () {
        console.log("div2 的单击事件触发了！");
    };
</script>
</body>
</html>

```

![image-20201021135641651](https://img-blog.csdnimg.cn/img_convert/ba87c18f487c6526af5a8a97a10c68bc.png)



```html
//创建两个div，叠放在一起，分别绑定单击事件，点击最里边的div，不会触发两个div的单击事件，只会触发自己的单击事件，这时候我们可以取消事件冒泡
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        #div1 {
            width: 200px;
            height: 200px;
            background: pink;
        }

        #div2 {
            width: 100px;
            height: 100px;
            background: coral;
        }
    </style>
</head>
<body>
<div id="div1">
    我是DIV1
    <div id="div2">
        我是DIV2
    </div>
</div>
<script>
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    // 为div1绑定单击事件
    div1.onclick = function () {
        console.log("div1 的单击事件触发了！");
        stopBubble();
    };

    // 为div2绑定单击事件
    div2.onclick = function () {
        console.log("div2 的单击事件触发了！");
        stopBubble();
    };

    // 取消事件冒泡
    function stopBubble(event) {
        // 如果提供了事件对象，则这是一个非IE浏览器
        if (event && event.stopPropagation) {
            // 因此它支持W3C的stopPropagation()方法
            event.stopPropagation();
        } else {
            // 否则，我们需要使用IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
        }
    }
</script>
</body>
</html>

```



```html
//当点击a标签的时候，阻止a标签的默认跳转事件，采用事件阻止
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        #div1 {
            width: 200px;
            height: 200px;
            background: pink;
        }

        #div2 {
            width: 100px;
            height: 100px;
            background: coral;
        }
    </style>
</head>
<body>
<a href="https://www.baidu.com" id="a">打开百度，你就知道！</a>
<script>
    var a = document.getElementById("a");

    // 为a绑定单击事件
    a.onclick = function () {
        stopDefault();
    };

    // 阻止浏览器的默认行为
    function stopDefault(event) {
        if (event && event.preventDefault) {
            // 阻止默认浏览器动作(W3C)
            event.preventDefault();
        } else {
            // IE中阻止函数器默认动作的方式
            window.event.returnValue = false;
        }
        return false;
    }
</script>
</body>
</html>

```



### 事件委派

事件的委派，是指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件。事件委派是利用了事件冒泡，通过委派可以减少事件绑定的次数，提高程序的性能。

```html
//为ul列表中的所有a标签都绑定单击事件
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<ul id="u1">
    <li><a href="javascript:;" class="link">超链接一</a></li>
    <li><a href="javascript:;" class="link">超链接二</a></li>
    <li><a href="javascript:;" class="link">超链接三</a></li>
</ul>
<script>
    var u1 = document.getElementById("u1");

    // 为ul绑定一个单击响应函数
    u1.onclick = function (event) {
        event = event || window.event;
        // 如果触发事件的对象是我们期望的元素，则执行，否则不执行
        if (event.target.className == "link") {
            console.log("我是ul的单击响应函数");
        }
    };
</script>
</body>
</html>

```





### 事件绑定

```javascript
/*为元素绑定事件兼容性代码*/
function addEventListener(element, type, fn) {
	if(element.addEventListener) {
		element.addEventListener(type, fn, false);
	} else if(element.attachEvent) {
		element.attachEvent("on" + type, fn);
	} else {
		element["on" + type] = fn;
	}
}

/*为元素解绑事件兼容性代码*/
function removeEventListener(element, type, fnName) {
	if(element.removeEventListener) {
		element.removeEventListener(type, fnName, false);
	} else if(element.detachEvent) {
		element.detachEvent("on" + type, fnName);
	} else {
		element["on" + type] = null;
	}
}

```



```html
//为按钮1的单击事件绑定两个函数，然后点击按钮2取消按钮1的单机事件绑定函数f1
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn1">按钮1</button>
<button id="btn2">按钮2</button>
<script>
    function f1() {
        console.log("output1 ...");
    };

    function f2() {
        console.log("output2 ...");
    };

    // 为按钮1的单击事件绑定两个函数
    addEventListener(document.getElementById("btn1"), "click", f1);
    addEventListener(document.getElementById("btn1"), "click", f2);

    // 点击按钮2取消按钮1的单机事件绑定函数f1
    document.getElementById("btn2").onclick = function () {
        removeEventListener(document.getElementById("btn1"), "click", f1);
    };

    /*为元素绑定事件兼容性代码*/
    function addEventListener(element, type, fn) {
        if (element.addEventListener) {
            element.addEventListener(type, fn, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, fn);
        } else {
            element["on" + type] = fn;
        }
    }

    /*为元素解绑事件兼容性代码*/
    function removeEventListener(element, type, fnName) {
        if (element.removeEventListener) {
            element.removeEventListener(type, fnName, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, fnName);
        } else {
            element["on" + type] = null;
        }
    }
</script>
</body>
</html>

```

![image-20201021144005993](https://img-blog.csdnimg.cn/img_convert/3165e958579ea6d89a76a30a2aea4eb5.png)

### 事件传播

![image-20201021145200137](https://img-blog.csdnimg.cn/img_convert/606369d19295725d727fd8a04285f3e2.png)





# JavaScript BOM

### BOM概述

浏览器对象模型（BOM）使 JavaScript 有能力与浏览器"对话"。

浏览器对象模型（BOM）可以使我们通过JS来操作浏览器，在BOM中为我们提供了一组对象，用来完成对浏览器的操作，常见的BOM对象如下：

- Window：代表的是整个浏览器的窗口，同时window也是网页中的全局对象
- Navigator：代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器
- Location：代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面
- History：代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录，由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只在当次访问时有效
- Screen：代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息
  这些BOM对象在浏览器中都是作为window对象的属性保存的，可以通过window对象来使用，也可以直接使用。


## Window对象

### 弹出框

**JavaScript 有三种类型的弹出框：警告框、确认框和提示框。**

### 警告框

当警告框弹出时，用户将需要单击“确定”来继续。

```javascript
window.alert("sometext");
//window.alert()方法可以不带window前缀来写
```



### 确认框

当确认框弹出时，用户将不得不单击“确定”或“取消”来继续进行。

如果用户单击“确定”，该框返回 true。如果用户单击“取消”，该框返回 false。

```javascript
window.confirm("sometext");
//window.confiem()方法可以不带window前缀来写
```



### 提示框

当提示框弹出时，用户将不得不输入值后单击“确定”或点击“取消”来继续进行。

如果用户单击“确定”，**该框返回输入值**。如果用户单击“取消”，该框返回 NULL。

```javascript
window.prompt("sometext","defaultText");
//window.prompt()方法可以不带window前缀来写
```



### 定时事件

JavaScript 可以在时间间隔内执行，这就是所谓的定时事件（ Timing Events）。

window 对象允许以指定的时间间隔执行代码，这些时间间隔称为定时事件。

通过 JavaScript 使用的有两个关键的方法：

- setTimeout(function, milliseconds)

  在等待指定的毫秒数后执行函数。

- setInterval(function, milliseconds)

  等同于 setTimeout()，但持续重复执行该函数。

setTimeout() 和 setInterval() 都属于 window 对象的方法。

```html
//单击按钮，每隔一秒向控制台输出 "Hello"
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn">按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.getElementById("btn");

    btn.onclick = function () {
        // 创建定时器
        var timer = setInterval(function () {
            console.log("Hello");
        }, 1000);

        // 清除定时器
        // clearInterval(timer);
    };
</script>
</body>
</html>

```



```html
//做一个通用移动函数来实现小汽车（黑色方块）移动的效果
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        /*控制器样式*/
        .controller {
            width: 600px;
            height: 50px;
            line-height: 50px;
        }

        .controller button {
            outline: none;
            border: none;
            margin: 0px;
            padding: 0px;
            width: 200px;
            height: 50px;
            font-size: 16px;
            line-height: 50px;
            text-align: center;
            background-color: #E9E9E9;
            cursor: pointer;
            float: left;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            border: 2px solid #F0F0F0;
        }

        .controller button:hover {
            background-color: #F9F9F9;
        }


        /*公路样式*/
        .road {
            width: 100%;
            height: 100px;
            position: relative;
            margin-top: 50px;
            background: #3DB1FF;
            opacity: .90;
        }

        .road800 {
            width: 800px;
            height: 100px;
            background: pink;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 1000;
            opacity: .75;
        }

        .road1200 {
            width: 1200px;
            height: 100px;
            background: orange;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 500;
        }


        /*小汽车样式*/
        div#car {
            width: 135px;
            height: 100px;
            display: block;
            background: black;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 1500;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            /*border: 1px solid #F0F0F0;*/
        }
    </style>
</head>
<body>
<div class="controller">
    <button id="btn1">移动到800PX</button>
    <button id="btn2">移动到1200PX</button>
    <button id="btn3">回家</button>
</div>

<div class="road">
    <div class="road800"></div>
    <div class="road1200"></div>
    <div id="car"></div>
</div>
<script>
    document.getElementById("btn1").onclick = function () {
        move(document.getElementById("car"), 800);
    };

    document.getElementById("btn2").onclick = function () {
        move(document.getElementById("car"), 1200);
    };

    document.getElementById("btn3").onclick = function () {
        move(document.getElementById("car"), 0);
    };

    /*移动函数*/
    function move(element, target) {
        // 先清理定时器
        clearInterval(element.timeId);
        // 一会要清理定时器(只产生一个定时器)
        element.timeId = setInterval(function () {
            // 获取对象当前的位置
            var current = element.offsetLeft;
            // 每次移动多少像素
            var step = 10;
            // 判断是往正方向走还是往相反方向走
            step = current < target ? step : -step;
            // 每次移动后的距离
            current += step;
            // 判断当前移动后的位置是否到达目标位置
            if (Math.abs(target - current) > Math.abs(step)) {
                element.style.left = current + "px";
            } else {
                // 清理定时器
                clearInterval(element.timeId);
                element.style.left = target + "px";
            }
        }, 20);
    }
</script>
</body>
</html>

```



### 常用窗口属性

两个属性可用用于确定浏览器窗口的尺寸。

这两个属性都以像素返回尺寸：

- window.innerHeight - 浏览器窗口的内高度（以像素计）
- window.innerWidth - 浏览器窗口的内宽度（以像素计）

浏览器窗口（浏览器视口）不包括工具栏和滚动条。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    console.log(w);
    console.log(h);
</script>
</body>
</html>

```



### 其他窗口方法

**window.open() ：打开新的窗口**

```javascript
window.open(URL,name,specs,replace);
```

![image-20201022094734710](https://img-blog.csdnimg.cn/img_convert/786bc5b7eacc1a8aba149c0741484aee.png)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button onclick="openWin()">打开窗口</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    function openWin() {
        myWindow = window.open('', '', 'width=200,height=100');
        myWindow.document.write("<p>这是新建窗口</p>");
    }
</script>
</body>
</html>

```

**window.close() ：关闭当前窗口**

```javascript
window.close();
```



```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button onclick="openWin()">打开窗口</button>
<button onclick="closeWin()">关闭窗口</button>
<script>
    function openWin() {
        myWindow = window.open('', '', 'width=200,height=100');
        myWindow.document.write("<p>这是新建窗口</p>");
    }

    function closeWin() {
        myWindow.close();
    }
</script>
</body>
</html>

```









