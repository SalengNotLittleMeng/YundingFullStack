# JS核心

## 一.JS的组成

### 1.语法

### 2.DOM页面文档对象模型  

### 3.BOM浏览器对象模型

### 4.区别

![image-20230102145321354](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230102145321354.png)

![image-20230102145654147](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230102145654147.png)

### 5.APi和webAPI

![image-20230102151611868](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230102151611868.png)

![image-20230102151938672](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230102151938672.png)

![image-20230102152037843](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230102152037843.png)

## 二.DOM

### 1.什么是DOM

![image-20230102152649928](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230102152649928.png)

2.DOM树

![image-20230102153246148](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230102153246148.png)

### 2.获取页面元素

#### 1.如何获取

##### 1.根据ID获取document.getElementById('')

id是大小写敏感的字符

document.getElementById('') 会返回匹配搭配ID的DOMelement对象，若没有找到，则返回null

文档页面从上向下，所以要先有标签，把script写在下面

id是字符串 引号加'' id是唯一的

返回的是元素对象object返回元素的属性和方法

console.dir()打印

##### 2.根据标签名获取document.getElementByTagName('')

返回的是 获取过来元素对象的集合 以伪数组的形式存储的

想要依次打印里面的元素对象按照遍历的形式

得到的元素对象是动态的

```javascript
var lis=document.getElementsByTagName('li');
for(var i=;i<lis.length;i++){
	console.log(lis[i]);	
}
```

如果页面中只有一个li 返回的还是伪数组的形式

若页面中没有这个元素 返回空的为数组

**element**.getElementsByTagName('ol');**获取父元素中的子元素**时

一定要指明是哪一个

##### 3.通过HTML5新增的方法获取document.getElementsByClassName

document.querySelector('.box')

返回指定选择器的第一个元素对象 里面的的选择器需要加符号 .box #nav

document.querySelectorAll('.box')

返回指定选择器的所有元素对象集合

```
console.log(allBox)
```

##### 4.特殊元素获取

![image-20230102171619216](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230102171619216.png)

### 3.事件基础

js使我们有能力创建动态页面，事件是可以被js侦测到的行为，简单理解：触发——响应机制

网页中的每个元素都可以产生某些可以触发js事件，例如，我们可以在用户点击某个按钮时产生一个时间，然后去执行某些操作。

#### 1.事件三要素

事件由三部分组成：事件源 事件类型 事件处理成勋 我们也称为事件三要素

（1）事件源：事件被触发的对象 谁 按钮

（2）事件类型 ：如何触发的 什么时间 如鼠标点击（onclick） 鼠标经过 键盘按下

（3）事件处理程序 通过一个函数赋值的方式 完成

```javascript
var btn = document.getElementById('btn');
btn.onclick = function(){
    alert('点秋香');
}
```

#### 2.执行事件的步骤

1.获取事件源

```javascript
var div = document.querySelector('div');
```

2.注册事件（绑定事件）

```javascript
div.conclick
```

3.添加事件处理程序（采取函数赋值形式）

```javascript
div.conclick=function(){

}
```

#### 3.常见鼠标事件

![image-20230103095557241](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230103095557241.png)

#### 4.操作属性

js的DOM操作可以改变网页内容，结构和颜色过后，我们可以利用DOM操作元素来改变元素里面的内容，属性等。

##### 4.1改变元素的内容

从起始位置到终止位置的内容，但他去除html标签，同时空格和换行也会去掉

```javascript
element.innerText
element.innerHTML
```

起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行

eg:

```javascript
<button>显示当前系统时间</button>
<div>某个时间</div>
<script>
	var btn = document.querySelector('button');
	var div = document.querySelector('div');
	btn.onclick = function() {
        div.innerText = '2019-6-6';
    }
```

**区别：**

1.innerText不识别html标签 去除空格和换行  innerHTML识别html标签 保留空格和换行的

2.这两个属性是可以读写的 可以获取元素里面的内容

**3.这些都是普通盒子里面有的** 比如div啥的

##### 4.2修改元素的属性操作

1.获取元素 

```javascript
var ldh = document.getElementById('ldh');
var ldh = document.getElementById('zxy');
var img = document.getElementById('img');
zxy.onclick = function () {
	img.src = 'images/zxy.jpg';
    img.title = 'zxy';
}
ldh.onclick = function () {
	img.src = 'images/ldh.jpg';
    img.title = 'ldh';
}
```

2.注册事件 处理程序

![image-20230103105626719](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230103105626719.png)

##### 4.3操作元素修改表单属性

![image-20230103105643694](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230103105643694.png)

表单里面的值 文字内容是通过value来修改的

input.value = '被点击了';

想要表单禁用 用disabled

this.disabled = true;

this指向的是事件函数的调用者

###### 案例分析：京东密码框

点击从密码框变成文本框

![image-20230103112246946](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230103112246946.png)

把password改成text

![image-20230103114013302](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230103114013302.png)

![image-20230103114523830](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230103114523830.png)

![image-20230103115734824](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230103115734824.png)

##### 4.4样式属性操作

element.style行内样式操作 里面的属性采取驼峰命名法 和CSS不同

element.className类名样式操作

注意：

1.JS里面修改style样式，产生的是行内样式，比CSS权重高

使用className修改样式属性

element.style 适合样式比较少 或功能简单的情况下使用

className直接换一个className即可

![image-20230103151741692](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230103151741692.png)

![image-20230103151808436](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230103151808436.png)

![image-20230103151918330](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230103151918330.png)

如果想要保留原先的类名 我们可以用多类名选择器

this.className = 'first change'

###### 案例分析：淘宝二维码

![image-20230103132301120](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230103132301120.png)

##### 4.5循环精灵图

精灵图片有规律

让循环里的i索引号*44就是每个图片的y坐标

坐标的原点为左上角

 **con.style.backgroundPosition=x+"px "+y+"px";**

![image-20230103143939319](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230103143939319.png)

**注意：负号在前面那个引号中间**

###### 案例分析：显示隐藏文本框内容

1.placeholder标签

placeholder 属性提供可描述输入字段预期值的提示信息（hint）。

该提示会在输入字段为空时显示，并会在字段获得焦点时消失。

**注释：**placeholder 属性适用于以下的 <input> 类型：text, search, url, telephone, email

```javascript
<input placeholder="text" value="手机">;
```

2.分析：

表单里两个新时间：获得焦点onfocus  失去焦点onblur

如果获得焦点，判断表单里面的内容是否为默认文字，如果是默认文字，就清空表单内容；如果失去焦点，判断表单内容是否为空，如果为空，则表单内容为默认文字。

![image-20230103145309333](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230103145309333.png)

###### 案例分析：密码框验证信息

首先表单失去焦点

如果输入正确有小绿点 不符合要求为红色

里面样式变换较多 采取className修改样式

||是或者的意思

![image-20230103154142378](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230103154142378.png)

4.6操作元素总结

![image-20230103154322037](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230103154322037.png)

##### 4.6排他思想

伪数组：不能用内置对象的数组

如果有同一组元素，我们想要某一个元素实现某种样式，就要用大炮循环的排他思想：

1.所有元素全部清除样式

2.给当前元素设置眼视光hi

3.注意顺序不能颠倒，首先干掉别人，再设置自己

###### 案例分析：表格隔行变色

鼠标事件：鼠标经过onmouseover 鼠标离开onmouseout

核心思路：鼠标经过te 当前的行变背景颜色

注意：第一行不变色 获取tbody里面的行

![image-20230104092546235](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104092546235.png)

![image-20230104092829288](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104092829288.png)

###### 案例分析：表单取消全选

![image-20230104093946461](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104093946461.png)

![image-20230104094152138](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104094152138.png)

![image-20230104095152430](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104095152430.png)

##### 4.7获取自定义属性值

1.获取元素的属性值

element.属性

element.getAttribute('属性')

区别：

element.属性获取内置属性值（元素本身自带的属性）

element.getAttribute('属性') 主要获得自定义的属性（标准） 是程序员自定义的属性

![image-20230104100434038](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104100434038.png)

2.设置属性值

element.属性='值';

element.setAttribute('属性','值'); 主要针对于自定义属性

3.移除属性removeAttribute('index');

###### 案例分析：tab栏切换

![image-20230104101343830](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104101343830.png)

上面的模块选项卡，点击某一个，当前这一个底色是红色，其余不变（排他思想）修改类名的方式

![image-20230104102030431](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104102030431.png)

下面的内容随着上面的变化而变化，也要写道点击事件里面

核心思路：给上面tab_list里面所有的小li添加自定义属性，属性值从0开始编号，当点击时，让下面的内容序号对应显示，其他的隐藏。

![image-20230104103709200](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104103709200.png)

4.8 H5自定义属性

![image-20230104104217972](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104104217972.png)

或者用js设置

```javascript
element.setAttribute('data-index',2);
```

2.获取方法

element.getAttribute('data-index');

element.dataset.index 或者 element.dataset['index']

dataset是一个集合 里面存放了所有以data开头的自定义属性

如果里面有两个   data-list-name="andy";

console.log(div.dataset.listName)  要用驼峰命名法

### 4.节点

![image-20230104110448151](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104110448151.png)

![image-20230104110643147](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104110643147.png)

#### 1.节点操作

![image-20230104110730799](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104110730799.png)

##### 1.父节点

![image-20230104111442295](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104111442295.png)

##### 2.子节点

![image-20230104111902152](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104111902152.png)

![image-20230104112118049](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104112118049.png)

##### 3.第一个子元素和最后一个子元素

![image-20230104112311503](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104112311503.png)

不管是元素节点还是文本节点

![image-20230104112410149](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104112410149.png)

![image-20230104112644413](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104112644413.png)

实际开发中的写法

##### 4.兄弟节点

![image-20230104143740131](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104143740131.png)![image-20230104143811356](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104143811356.png)

解决兼容性问题

![image-20230104144219574](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104144219574.png)

##### 5.创造节点和添加节点

###### 1.创建元素节点

```javascript
var li = document.Element('li');
```

###### 2.添加元素节点

```javascript
var ul = document.querySelector('ul');
```

node 父级 child 子级

是在后面追加元素 类似数组中的push

![image-20230104150321938](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104150321938.png)

###### 3.添加节点

node.insertBefore(lchild,指定元素);

###### 4.想要页面添加一个新的元素：1.创建元素 2.添加元素

###### 5.删除节点

ul.removeChild从DOM中删除一个子节点 返回删除的节点

删除第一个节点之后第二个直接继承上一个节点

###### 6.复制节点

克隆

var lili=node.cloneNode()括号为空或者是flase为浅拷贝只复制标签

不复制里面的内容 浅拷贝 如果里面是true就连里面的内容也要复制

7.创建元素

1.document.write()创建元素

将内容直接写入页面的内容，但是文档流执行完毕，则它会导致页面全部重绘，就是说这个页面的内容就剩它了

2.innerHTML创建元素

通过拼接字符串很费时 涉及开辟空间  效率很低  并且不支持换行

![image-20230104161625854](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104161625854.png)

3.document.createElement()创建元素

![image-20230104162008049](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104162008049.png)

![image-20230104162057586](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104162057586.png)

##### 6.DOM重点核心

![image-20230104162654964](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104162654964.png)

![image-20230104163318545](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104163318545.png)

![image-20230104163327636](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104163327636.png)

![image-20230104163337017](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104163337017.png)

![image-20230104163344383](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104163344383.png)

![image-20230104163400807](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104163400807.png)

![image-20230104163706760](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104163706760.png)

![image-20230104163722773](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104163722773.png)

### 5.事件高级

#### 1.注册事件

##### 1.注册概述

两种方法

![image-20230104164052555](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104164052555.png)

![image-20230104164514852](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104164514852.png)

同一个元素同一个事件可以注册多个监听器 按照注册顺序依次执行

##### 2.addEvenntListener事件监听方式

![image-20230104164651289](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104164651289.png)

里面的事件类型是字符串 必定加引号 而且不带ion

同一个元素 同一个事件可以添加多个监听器

![image-20230104165601437](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104165601437.png)

##### 3.attachEvent事件监听方式

![image-20230104171145159](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104171145159.png)

![image-20230104171201551](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104171201551.png)

i9以前才支持

##### 4.删除事件的方式

![image-20230104183608214](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104183608214.png)

1.直接让事件=null

2.删除事件

##### 5.DOM事件流

![image-20230104184628307](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104184628307.png)

![image-20230104184726725](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104184726725.png)

![image-20230104200120949](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104200120949.png)

![image-20230104202955291](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104202955291.png)

只点了son 按照顺序传播

![image-20230104203133194](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104203133194.png)

在实际开发中很少用事件捕获，更关注事件冒泡

有些事件是没有冒泡的，比如onclur,onfocus,onmouseenter,onmouseleave

#### 2.事件对象

![image-20230104204153314](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104204153314.png)

##### 1.定义

![image-20230104204419370](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104204419370.png)

![image-20230104204449879](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104204449879.png)

##### 2.常见的属性和方法

![image-20230104205032929](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104205032929.png)

###### 1.e.target

返回的是触发事件的对象（元素） this返回的是绑定事件的对象（元素）

区别：e.target 点击了哪个元素，就返回哪个元素

this是这个元素绑定了这个点击事件，就返回谁

![image-20230104205944195](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104205944195.png)

###### 2.阻止默认行为

让链接不跳转 或者让提交按钮不提交

![image-20230104210846195](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104210846195.png)

可以利用/return false也能组织默认行为 没有兼容性问题 特点：return后面的代码不执行了 而且只限于传统的组测方式

###### 3.阻止事件冒泡

![image-20230104212500492](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104212500492.png)

![image-20230104212517278](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104212517278.png)

###### 4.事件委托代理

核心原理：给父节点添加侦听器，利用事件冒泡影响每一个子节点

![image-20230104213620577](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104213620577.png)

![image-20230104213505460](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104213505460.png)

![image-20230104213637139](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104213637139.png)

###### 5.禁止选中文件和右键菜单

![image-20230104214317398](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104214317398.png)

###### 6.获得鼠标的坐标

![image-20230104214730043](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104214730043.png)

F12按下后的是可视区

![image-20230104215254776](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104215254776.png)

###### 7.常用的键盘事件

1.按下松开

![image-20230104215358896](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104215358896.png)

![image-20230104220832537](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104220832537.png)

2.判断用户按下哪个键

keyCode

![image-20230104222028730](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104222028730.png)

![image-20230104222041445](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230104222041445.png)

### 6.BOM导读

#### 1.概述

![image-20230105083743620](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105083743620.png)

浏览器页面下方除了导航栏的部分是DOM  浏览器为带页面上方的所有BOM

![image-20230105084222277](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105084222277.png)

![image-20230105090246050](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105090246050.png)

#### 2.页面加载事件

windows.onload等所有事件加载完成之后再执行 放在任何一个地方都可以

![image-20230105091028396](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105091028396.png)

![image-20230105091552973](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105091552973.png)

![image-20230105091817330](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105091817330.png)

#### 3.调整窗口大小事件

![image-20230105093018070](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105093018070.png)

#### 4.定时器setTimeout

![image-20230105093626556](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105093626556.png)

![image-20230105093842758](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105093842758.png)

![image-20230105094757064](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105094757064.png)

![image-20230105094829290](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105094829290.png)

也称为回调函数callback

![image-20230105095525337](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105095525337.png)

![image-20230105095540825](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105095540825.png)

#### 5.停止计时器

![image-20230105100056089](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105100056089.png)



![image-20230105100116058](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105100116058.png)

#### 6.定时器setInterval()

![image-20230105100439713](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105100439713.png)

![image-20230105100538585](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105100538585.png)

![image-20230105100604969](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105100604969.png)

#### 7.清除计时器

![image-20230105101232385](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105101232385.png)

#### 8.this指向问题

一般情况下this/的最终指向是那个调用它的对象

![image-20230105102450728](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105102450728.png)

![image-20230105102508472](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105102508472.png)

![image-20230105102522096](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105102522096.png)

#### 9.js执行机制

##### 9.1js是单线程的

![image-20230105103331521](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105103331521.png)

##### 9.2同步和异步

![image-20230105103757309](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105103757309.png)

**本质区别：这条流水线上各个流程的执行顺序不同**

##### 9.3同步任务和异步任务的执行过程

![image-20230105104120220](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105104120220.png)

异步任务相关回调函数添加到任务队列中（任务队列也称为消息队列）

![image-20230105104414122](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105104414122.png)

##### 9.4执行机制

![image-20230105110026140](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105110026140.png)

##### 9.5location对象

![image-20230105110942603](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105110942603.png)

![image-20230105111003182](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105111003182.png)

![image-20230105110824815](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105110824815.png)

9.51location常用的方法

![image-20230105111859943](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105111859943.png)

![image-20230105112247378](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105112247378.png)

9.6navigator对象

![image-20230105112518949](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105112518949.png)

##### 9.6history对象

![image-20230105113201215](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105113201215.png)

![image-20230105113314718](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105113314718.png)

## 三.封装函数

### 1.原因

让一段代码可以多次利用 把他封装起来

函数封装是一种函数的功能，它把一个程序员写的一个或者多个功能通过函数、类的方式封装起来，对外只提供一个简单的函数接口。当程序员在写程序的过程中需要执行同样的操作时，程序员（调用者）不需要写同样的函数来调用，直接可以从函数库里面调用。

filter()函数用来对数组进行过滤

![image-20230105145926450](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105145926450.png)

![image-20230105145513542](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105145513542.png)

### 2.回调函数

一个函数的参数也可以是函数，如果把函数作为参数传递，那么我们就成这个函数为回调函数(callback)

条件发生了改变的话 上面的封装函数就不能用了 可以用回调函数来用

![image-20230105153356966](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105153356966.png)

动态设置的代码放在回调函数里就可以

### 3.高阶函数

一个函数的参数或者返回值是函数，那么这个函数就叫做高阶函数

将函数作为参数 意味着可以可以对另一个函数动态的传递代码

![image-20230105161824524](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105161824524.png)

![image-20230105161948610](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105161948610.png)

![image-20230105162450603](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105162450603.png)

### 4.闭包

闭包就是能访问到外部函数作用域中变量的函数

构成的要件：1.函数的嵌套2.内部函数要引用外部函数中的变量内部函数作为返回值返回出去

![image-20230105164427078](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105164427078.png)

![image-20230105165900205](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230105165900205.png)

闭包的生命周期：

1.闭包在外部函数调用时产生，外部函数每次调用都会产生一个全新的闭包

2.在内部函数丢失时销毁（内部函数被垃圾回收了）

闭包定义类浪费内存

相对于类来说，闭包比较浪费内存孔家（类可以使用原型而闭包不能）

需要执行次数比较少的时候，使用闭包

需要大量创建实例时，使用类

### 5.递归

调用自身的函数叫做递归函数

递归的作用和循环基本一致

递归的核心思想就是将一个大的问题拆分为一个一个小的问题，小的问题解决了，大的问题也就解决了

