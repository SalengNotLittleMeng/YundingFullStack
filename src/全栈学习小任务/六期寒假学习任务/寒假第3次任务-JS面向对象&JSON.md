# 云顶书院六期全栈方向寒假第三次学习任务
经过响应式的洗礼，大家一定可以满怀期待地迎接面向对象的学习了

## 学习任务

#### 1.复习JavaScript的基本语法
大家首先要先复习JavaScript的基本语法

参考资料：https://zh.javascript.info/

#### 2. 学习JavaScript面向对象的编程方法
参考资料：https://zh.javascript.info/class

视频资料：https://www.bilibili.com/video/BV1Kt411w7MP?from=search&seid=17010663689262791172&spm_id_from=333.337.0.0

推荐先观看22p以前的内容

#### 3.了解json相关的内容

json作为一种交换和储存数据的格式，在我们之后学习网络请求时会经常使用的，目前对这部分的知识了解即可，推荐阅读文档：

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON

https://juejin.cn/post/7037015740410494983

大家对json有一个基本了解就可以了，暂时无需深入

------



## 本次作业
### 1.面向对象编程入门

实现一个MyArray类，这个类要求传入的参数是一个数组，如果传入的参数不是数组，应该**抛出一个异常**

关于抛出异常的方法可以看这里：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/throw

这个类拥有三个方法：

* 1. checkArray方法，接受一个数组作为参数，检查数组的每一位是否都是数字，返回一个布尔值
* 2. addAll方法，不接受任何参数，返回传入构造函数的参数（一个数组）每一项的值的和
* 3. uniquel方法，不接受任何参数，返回一个数组，这个数组是传入构造函数的参数去重后的结果

调用实例：

	`let args = [1, 2, 3, 4, 6, 6] //这是传入构造函数的参数
	let arr = new MyArray(args) //args是一个数组，正常执行
	console.log(arr.checkArray([1, 1, 1, '2', 1])) //false,因为[1, 1, 1, '2', 1]中的每一项不都是数字（'2'是字符）
	console.log(arr.addAll()) //22，1+2+3+4+6+6=22
	console.log(arr.uniquel()) //[1,2,3,4,6],除去了数组中的重复元素
	let arr0 = new MyArray('1234566') //抛出错误，因为'1234566不是一个数组'`
	``

##### 2.组件开发

开发一个二级菜单组件，要求：

* 最开始所有菜单都处于闭合状态
* 点击某一个一级菜单时，对应的二级菜单显示，其他的二级菜单全部关闭
* 一个已经展开的菜单，再次点击时会闭合
* 组件的所有样式可以自己设计，不做强制要求

具体效果会在QQ群里发布视频

进阶要求（进阶要求不强制要求完成）

* 用面向对象的方式编写程序
* 给组件一个回调函数，当点击菜单中不同的选项时，能够将被点击选项的innerText作为参数传入回调函数并执行


1.2022年1月25日晚上10点前将作业提交至开源仓库中自己的文件夹中，并将作业文件夹的网址链接发送给自己项目组的全栈学长学姐**作业提交的时间以发送链接时间为准**

2.文件夹命名格式：全栈-闫韬蒙-寒假JavaScript第一次任务

3.提交内容： 将文件夹提交至开源仓库，文件夹命名格式：全栈-闫韬蒙-寒假JavaScript第一次任务，文件夹内须包含：

* 1.两个文件夹，分别命名为“面向对象”和“组件开发”
* 2.第一个文件夹中包含：一个名为index.html的html文件和一个名为index.js的js文件，要求在JS文件中写出调用实例并打印到控制台上，调用实例跟作业描述中的调用实例一样

* 3.第二个文件夹内包含：
![](https://beyondclouds.oss-cn-beijing.aliyuncs.com/blog/images/b39646a0-d7f6-4bf6-b06a-8e68148590b4.png)

* 4.不得无故不交作业，不得抄袭