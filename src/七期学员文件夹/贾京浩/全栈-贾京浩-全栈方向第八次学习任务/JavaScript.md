# JavaScript

## 浅浅了解

### 写入JS代码：

**使用<script>标签在html网页中插入js代码**

```html
<script type="text/javascript">
......
</script>
```

*ps：其中text表示<script></script>之间的是文本类型，而javascript则是为了告诉浏览器里面的文本属于Javascript语言*

**但是！将js代码直接加进html中显然不是一个优雅的人做出来的事，所以，为了让代码更加优雅、明了，我们可以让js与html分开，就像css一样：**

```html
<script src="./script.js"></script>
```

### 注释：

单行注释在注释前加符号“//”，多行注释使用“ /* ”   “ */ ”

### 变量：

```javascript
var mychar;
mychar="javascript"
var mynum=6;
```

*ps：javascript中是区分大小写的，所以变量mynum和myNum是不一样的*，变量命名必须使用数字下划线或美元符开始

### 判断语句：

*和c语言差不多*

```html
<script type="text/javascript">
    var myage=18;
    if(myage>=18){
        document.write("你是成年人。");
    }
    else{
        document.write("未满十八岁，你不是成年人。");
    }
</script>
```

### 函数：

定义函数的关键字是function，后边的如add()是函数名，要自己起

要调用函数还是和c语言中一样，在后边直接调用

```html
<script type="text/javascript">
    function add2(){
        var sum=3+2;
        alert(sum);
    }
    add();
</script>
```

## 互动方法

### 输出内容：

**直接输出内容：**

```html
<script type="text/javascript">
	document.write("I Love Javacript!");
</script>
```

**通过变量输出内容：**

```html
<script type="text/javascript">
    var mystr="Hello"
	document.write(mystr);
</script>
```

**同时输入多项内容，内容之间用+连接：**

*也可以输出html标签，如换行符或者空格字符*

```html
<script type="text/javascript">
    var mystr="Hello"
	document.write(mystr+"I Love Javacript!"+"<br/>"+"&nbsp");
</script>
```

***ps:除了变量，其他的都要加双引号。***

### 警告（alert消息对话框）：

**alert消息对话框通常用于调试程序**

```html
<script type="text/javascript">
	var mynum=30;
    alert("hello!");
    alert(mynum);
</script>
```

### 确认（confirm消息对话框）：

**confirm消息对话框常用于允许用户做选择的动作**

```html
<script type="text/javascript">
	var mymessage=confirm("你喜欢JavaScript吗？");
    if(mymessage==true){
        document.write("很好，加油！");
    }
    else{
        document.write("JS功能强大，要学习奥！");
    }
</script>
```

***返回值：Boolean值。boolean数据类型只能是ture，false***

### 提问（prompt消息对话框）：

**prompt消息对话框常用于询问一些需要与用户交互的信息**

```html
<script type="text/javascript">
	var myname=prompt("请输入你的姓名：");
    if(myname!=null){
        alert("你好"+myname);
    }
    else{
        alert("你好 my friend.");
    }
</script>
```

***prompt(str1,str2)括号中的str1是对话框中的文本内容，不可修改；str2是文本框中的内容，可以修改；且str2可以省略不写***

