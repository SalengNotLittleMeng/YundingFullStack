# javascript进阶

#### 1.JavaScript HTML DOM

##### 1.查找 HTML 元素

###### 通过 id 查找 HTML 元素

###### 通过标签名查找 HTML 元素

本例查找 id="main" 的元素，然后查找 id="main" 元素中的所有 <p> 元素

var x=document.getElementById("main");
        var y=x.getElementsByTagName("p");

#### 2.改变 HTML

改 HTML 内容的最简单的方法是使用 innerHTML 属性。

document.getElementById(*id*).innerHTML=*新的 HTML*

本例改变了 <img> 元素的 src 属性：

<!DOCTYPE html>
<html>
<body>

<script>
document.getElementById("image").src="landscape.jpg";
</script>

</body>
</html>

#### 3.改变CSS

document.getElementById(*id*).style.*property*=*新样式*

#### 4. DOM 元素 (节点)

1.创建 <p> 元素:

```
var para = document.createElement("p");
```

为 <p> 元素创建一个新的文本节点：

```
var node = document.createTextNode("这是一个新的段落。");
```

将文本节点添加到 <p> 元素中：

```
para.appendChild(node);
```

2,创建新的 HTML 元素 (节点) - insertBefore()

**appendChild()** 方法，它用于添加新元素到尾部。

如果我们需要将新元素添加到开始位置，可以使用 **insertBefore()** 方法:

3.移除已存在的元素

var parent = document.getElementById("div1"); 

var child = document.getElementById("p1"); 

parent.removeChild(child);

4.替换 HTML 元素 - replaceChild()

var para = document.createElement("p");

var node = document.createTextNode("这是一个新的段落。"); 

para.appendChild(node);  

var parent = document.getElementById("div1"); 

var child = document.getElementById("p1"); 

parent.replaceChild(para, child);

#### 5.DOM 节点列表

1.获取 <p> 元素的集合：

```
var myNodelist = document.querySelectorAll("p");
```

显示节点列表的元素个数：

```
document.getElementById("demo").innerHTML = myNodelist.length;
```

#### 6.Date（日期） 对象

[Date()](https://www.runoob.com/try/try.php?filename=tryjsref_date)
如何使用 Date() 方法获得当日的日期。

[getFullYear()](https://www.runoob.com/try/try.php?filename=tryjsref_getfullyear)
使用 getFullYear() 获取年份。

[getTime()](https://www.runoob.com/try/try.php?filename=tryjsref_gettime)
getTime() 返回从 1970 年 1 月 1 日至今的毫秒数。

[setFullYear()](https://www.runoob.com/try/try.php?filename=tryjsref_setfullyear2)
如何使用 setFullYear() 设置具体的日期。

[toUTCString()](https://www.runoob.com/try/try.php?filename=tryjsref_toutcstring)
如何使用 toUTCString() 将当日的日期（根据 UTC）转换为字符串。

[getDay()](https://www.runoob.com/try/try.php?filename=tryjsref_date_weekday)
如何使用 getDay() 和数组来显示星期，而不仅仅是数字。

#### 7.JavaScript Window - 浏览器对象模型(BOM)

1.Windows方法:

- window.open() - 打开新窗口
- window.close() - 关闭当前窗口
- window.moveTo() - 移动当前窗口
- window.resizeTo() - 调整当前窗口的尺寸

2.Window Screen

**window.screen**对象在编写时可以不使用 window 这个前缀。

一些属性：

- screen.availWidth - 可用的屏幕宽度
- screen.availHeight - 可用的屏幕高度

###### Window Screen 可用宽度

screen.availWidth 属性返回访问者屏幕的宽度，以像素计，减去界面特性，比如窗口任务栏。

###### Window Screen 可用高度

screen.availHeight 属性返回访问者屏幕的高度，以像素计，减去界面特性，比如窗口任务栏。

###### Window Location

- location.hostname 返回 web 主机的域名
- location.pathname 返回当前页面的路径和文件名
- location.port 返回 web 主机的端口 （80 或 443）
- location.protocol 返回所使用的 web 协议（http: 或 https:）

###### Window Location href

**location.href** 属性返回当前页面的 URL。

###### Window Location pathname

**location.pathname** 属性返回 URL 的路径名。

###### Window Location assign

**location.assign()** 方法加载新的文档。

###### Window History

为了保护用户隐私，对 JavaScript 访问该对象的方法做出了限制。

一些方法：

- history.back() - 与在浏览器点击后退按钮相同
- history.forward() - 与在浏览器中点击向前按钮相同

###### Window history.back()

history.back() 方法加载历史列表中的前一个 URL。

这与在浏览器中点击后退按钮是相同的

###### Window history.forward()

history forward() 方法加载历史列表中的下一个 URL。

这与在浏览器中点击前进按钮是相同的

###### Window Navigator

(来自 navigator 对象的信息具有误导性)

#### 8.弹窗

1.警告框:**alert()**方法。

2.确认框:window.confirm("*sometext*");

3.提示框:window.prompt("*sometext*","*defaultvalue*");

#### 9. 计时事件

- setInterval() - 间隔指定的毫秒数不停地执行指定的代码。
- setTimeout() - 在指定的毫秒数后执行指定代码。

clearTimeout() 方法用于停止执行setTimeout()方法的函数代码。

#### 10.Cookie

function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}
function checkCookie(){
    var user=getCookie("username");
    if (user!=""){
        alert("欢迎 " + user + " 再次访问");
    }
    else {
        user = prompt("请输入你的名字:","");
          if (user!="" && user!=null){
            setCookie("username",user,30);
        }
    }
}