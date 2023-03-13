<div align="center"><font size="7" color="blue" >DOM</font></div>

## 获取节点

<font color="aqua" size="5"> document.getElementById()</font>

根据id获取一个元素节点对象

<font color="aqua" size="5">document.getElementsByClassName()</font>

根据元素的class属性值获取一组元素节点对象

返回的是一个类数组对象

该方法返回的结果是一个实时更新的集合

当网页中新添加元素时，集合也会实时的刷新

<font color="aqua" size="5">document.getElementsByTagName()</font>

根据标签名获取一组元素节点对象

返回的结果是可以实时更新的集合

document.getElementsByTagName("*") 获取页面中所有的元素

<font color="aqua" size="5">document.getElementsByName()</font>

根据name属性获取一组元素节点对象

返回一个实时更新的集合

主要用于表单项

<font color="aqua" size="5">document.querySelectorAll()</font>

根据选择器去页面中查询元素

会返回一个类数组（不会实时更新）

<font color="aqua" size="5">document.querySelector()</font>

根据选择器去页面中查询第一个符合条件的元素

### 节点操作

<font color="aqua" size="5">element.parentNode</font>

父节点

<font color="aqua" size="5">element.childNode</font>

子节点 （所有节点）

<font color="aqua" size="5">element.children</font>

子节点（元素节点）

<font color="aqua" size="5">element.nextSibing</font>

下一个兄弟节点。（包含元素节点或文本节点等等）

<font color="aqua" size="5">element.previousSibing</font>

上一个兄弟节点。（包含元素节点或文本节点等等）

<font color="aqua" size="5">element.nextElementSibing</font>

下一个兄弟节点（元素节点）

<font color="aqua" size="5">element.previousElementSibing</font>

上一个兄弟节点（元素节点）

### 添加节点

<font color="aqua" size="5">node.appendChild(child)</font>

将一个节点加到指定父节点列表的末尾

<font color="aqua" size="5">node.insertBefore(child,指定元素)</font>

将一个节点加到指定父节点列表某元素的前面

1.创建元素节点

var li = document.createElement('li');

2.添加节点

父级.appendChild(li)；

## 删除和复制节点

<font color="aqua" size="5">node.removeChild(child)</font>

删除节点返回被删节点

<font color="aqua" size="5">node.cloneNode()</font>

复制节点,如果括号为空或false，仅仅复制节点，不复制内容（浅拷贝)

如果括号内为true，则全部拷贝（深拷贝）

## 修改内容

### 1.修改文本内容

<font color="aqua" size="5">element.innerText</font>（非标准）

不识别HTML标签

去除文本内的空格和换行

<font color="aqua" size="5">element.innerHTML</font>（w3c标准）

识别HTML标签

保留文本内的空格和换行



## 2.修改元素内容

<font color="aqua" size="5">element.style</font>

行内样式操作

<font color="aqua" size="5">element.className</font>

类名样式操作

## 3.获取属性值

<font color="aqua" size="5">element.属性；</font>

获取内置属性值（元素本身自带的属性）

eg.div.id='text'

<font color="aqua" size="5">element.setAttribute('属性')；</font>

主要获取自定义的属性（标准） 我们程序员自定义的属性（H5规范：必须以data- 开头   如果自定义属性里面有多个-链接的单词，我们获取的时候采取驼峰命名法）

eg.  div.setAttribute('index',2);

<font color="red">H5新增的获取自定义属性方法</font>：

element.dataest.index

或者

element.dataest['index']

<font color="aqua" size="5">element.removeAttribute('属性')；</font>

移除当前属性

# 操作元素

<font color="brown" size=5px>onclick</font>

点击事件

<font color="brown" size=5px>onblur</font>

失去焦点

<font color="brown" size=5px>onfocus</font>

得到焦点

<font color="brown" size=5px>onmouseover</font>

鼠标经过

<font color="brown" size=5px>onmouseout</font>

鼠标离开

<font color="brown" size=5px>onmousemose</font>

鼠标移动触发

<font color="brown" size=5px>onmouseup</font>

鼠标弹起触发

<font color="brown" size=5px>onmousedown</font>

鼠标按下触发

#### 补充

<font color="gold" size=5>element.checked</font>可以得到当前复选框的选中状态

阻止链接跳转需要添加JavaScriptvoid(0);或javascript:;

