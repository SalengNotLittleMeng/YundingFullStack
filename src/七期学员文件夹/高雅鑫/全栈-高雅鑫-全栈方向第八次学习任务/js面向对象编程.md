# 面向对象编程



##  严格模式

![image-20221227160932163](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221227160932163.png)

## 实例对象与 new 命令

### 1.对象是什么

**（1）对象是单个实物的抽象。**

**（2）对象是一个容器，封装了属性（property）和方法（method）。**

### 2.构造函数

JavaScript 语言使用构造函数（constructor）作为对象的模板。所谓”构造函数”，就是专门用来生成实例对象的函数。它就是对象的模板，描述实例对象的基本结构。一个构造函数，可以生成多个实例对象，这些实例对象都有相同的结构。

```javascript
var Vehicle = function () {
  this.price = 1000;
};
```

#### new 命令

##### 基本用法

`new`创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

命令的作用，就是执行构造函数，返回一个实例对象。

```javascript
var Vehicle = function () {
  this.price = 1000;
};
var v = new Vehicle();
v.price // 1000
```

上面代码通过`new`命令，让构造函数`Vehicle`生成一个实例对象，保存在变量`v`中。这个新生成的实例对象，从构造函数`Vehicle`得到了`price`属性。`new`命令执行时，构造函数内部的`this`，就代表了新生成的实例对象，`this.price`表示实例对象有一个`price`属性，值是1000。

使用`new`命令时，根据需要，构造函数也可以接受参数。

```javascript
var Vehicle = function (p) {
  this.price = p;
};
var v = new Vehicle(500);
```

![image-20221229111700997](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229111700997.png)

## ![image-20221229111808417](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229111808417.png)面向对象编程

![image-20221229091848915](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229091848915.png)

![image-20221229091902227](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229091902227.png)

**事物的数据到了对象中，体现为属性**

**事物的功能到了对象中，体现为方法**

3.面向对象的编程，程序中所有的操作都是通过对象来完成的，做任何事情之前都要找到它的对象

4.使用object创建对象的问题：

1）.无法区分出不同类型的对象

2）.不方便批量创建对象

### 1.类

![image-20221229094647795](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229094647795.png)

![image-20221229094705114](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229094705114.png)

![image-20221229094727280](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229094727280.png)

### 2.属性

类的代码块是用来设置对象属性的，不是什么代码都能写。

实例属性只能用实例访问。

静态属性，类属性

使用static声明的属性是静态属性，是类属性 。

静态属性只能通过类去访问。

### 3.方法

#### 实例方法

![image-20221229100841156](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229100841156.png)

#### 静态方法

通过类来调用

![image-20221229101108075](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229101108075.png)

**静态方法中的this就是当前类**

当我们在类中直接指定实例属性的值时，意味着我们所创建的所有对象属性都是这个值。

![image-20221229103044268](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229103044268.png)

![image-20221229103200323](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229103200323.png)

### 4.封装

![image-20221229104206098](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229104206098.png)

实例使用#开头就变成了私有4属性，私有属性只能在类内部访问。

getter方法，用来读取属性

setter方法，用来设置属性

![image-20221229105224427](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229105224427.png)

![image-20221229110400952](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229110400952.png)

### 5.多态

![image-20221229112448833](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229112448833.png)

### 6.继承

![image-20221229113026025](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229113026025.png)

![image-20221229114321819](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229114321819.png)

在子类中，可以通过创建同名方法来重写父类的方法

重写构造函数时，构造函数的第一行代码一定为super()

super(name)是调用父类的构造函数

通过继承可以在不修改一个类的情况下对其进行扩展。

![image-20221229150453653](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229150453653.png)

### 7.对象的结构

![image-20221229152308789](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229152308789.png)

![image-20221229152322109](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229152322109.png)

![image-20221229152338751](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229152338751.png)

![image-20221229153610171](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229153610171.png)

![image-20221229153551389](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229153551389.png)

### 8.原型链

![image-20221229154551462](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229154551462.png)

![image-20221229161130391](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229161130391.png)

修改：

通过对象修改原型，向原型中添加方法，修改后所有的同类实例都能访问该方法

大部分情况下，不需要修改原型对象

注意：千万不要通过类的实例去修改原型：

1.通过一个对象影响所有同类对象，这么做不合适。

2.修改原型要先创建实例，很麻烦

3.通过对象修改原型，向原型中添加方法，修改后所有同类实例都能访问这个方法。

![image-20221229165031527](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229165031527.png)

原则：

1.原型尽量不要修改

2.要修改也不要通过实例对象去改

3.通过类.prototype属性去修改

4.最好不要直接给prototype去赋值

### 9.instanceof和hasOwn

A instanceof B:检查A这个对象是不是属于这个B实例

并不是直接检查 检查的是对象的原型链上是否有该类实例

只要原型链上有这类实例，就会返回true

![image-20221229172941870](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229172941870.png)

![image-20221229173836352](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229173836352.png![image-20221229173931014](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221229173931014.png)

### 10.旧类

![image-20221230093814203](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221230093814203.png)

​	在构造函数中，this表示新建的对象。

![image-20221230094347205](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221230094347205.png)

### 11.本质

**面向对象的编程，编写代码时所有的操作都是通过对象来进行的。**

### 12.步骤

1.找对象

2.搞对象（剩余所有步骤）

### 13.学习对象

1.明确对象代表什么，有什么用。

2.如何获取到这个对象

3.如何使用对象(对象中的属性和方法)

### 14.对象的分类

内建对象：

1.由ES标准所定义的对象

比如：object function string number

宿主对象：

由浏览器提供的对象

如：BOM,DOM

自定义对象：由开发人员自己创建的对象

### 15.对象的复制

如何负责制一个对象，复制必须要产生新的对象

当调用slice时，会产生一个新的数组对象，从而完成对数组的赋值

##### Object.assign(目标对象，被复制的对象)

将被复制对象中的属性复制到目标对象里，并将目标对象返回，比较麻烦，也可以用展开运算符

```javascript
const arr3={"address:家里"...obj}
```



### 16.深拷贝和浅拷贝

数组的存放的是地址，地址再存放地址，地址指向孙悟空的地址

#### slice()浅拷贝

![image-20221230112148643](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221230112148643.png)

通常对对象的拷贝都是浅拷贝，前进拷贝顾名思义，只对对象的浅层进行复制（只复制一层),如果对象中储存的数据是原始值，俺么拷贝的深浅是不重要的，浅拷贝只会对对象本身进行复制，不会复制对象中的属性（或元素）

#### 深拷贝strucuredClone(arr)

深拷贝不止复制对象本身，还复制对象中的元素和属性。

通常情况下不太使用深拷贝，性能比较差

### 17.包装类（JS自用）

在JS 中，除了直接创建原始值外，也可以创建原始值对象

通过 new String 可以创建String类型的对象

通过 new Number 可以创建Number类型的对象

通过 new Boolean 可以创建Boolean类型的对象

对象比较的时候比较的是内存地址是否相同

js中一共有个包装类  通过包装类可以把一个原始值包装成一个对象
string 

number

boolean

BigInt

Symbol

当我们对一个原始值调用方法或属性时，js解释亲会临时将原始值包装为对应的对象，然后调用这个对象的属性或方法