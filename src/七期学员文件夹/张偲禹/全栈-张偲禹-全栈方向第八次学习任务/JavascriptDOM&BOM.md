# DOM&BOM

## 1.DOM&BOM

#### 1-1 文档对象模型（DOM）

> 文档对象类型（Document Object Model），简称DOM，将所有页面内容表示为可以修改的对象。

`document`对象是页面的主要“入口点”，我们可以用它来更改或创建页面上的任何内容。

例如：

```javascript
//将背景颜色改为红色
document.body.style.background = "red";

//在1秒后将其修改回来
setTimeout(() => docuemnt.body.style.background =  "",1000);
```

*DOM不仅仅用于浏览器。*

#### 1-2 浏览器对象模型（BOM）

> 浏览器对象模型（Browser Object Model），简称BOM，表示由浏览器（主机环境）提供的用于处理文档（document）之外的所有内容的其他对象。

例如：

- navigator对象提供了有关浏览器和操作系统的背景信息。navigator有许多属性，但是最广为人知的两个属性是：`navigator.userAgent`——关于当前浏览器；`navigator.platform`——关于平台（有助于区分Windows/Linux/Mac等）。
- location对象允许我们读取当前URL，并且可以将浏览器重定向到新的URL。

```javascript
alert(location.href);	//显示当前URL
if(comfirm("Go to Wikipedia?")){
	location.href = "https://wikipedia.org";	//将浏览器重定向到另一个URL
}
```

函数`alert/confirm/prompt`也是BOM的一部分：它们与文档（document）没有直接关联，但它代表了与用户通信的纯浏览器方法。

*BOM是通用HTML规范的一部分。*



## 2.DOM树

根据文档对象类型（DOM），每个HTML标签都是一个对象；嵌套的标签是闭合标签的“子标签（children）”；标签内的文本也是一个对象。

例如，`document.body`是表示`<body>`标签的对象。

```javascript
document.body.style.background = 'red';	//将背景设置为红色

setTimeout(() => document.body.style.background = '',3000);	//3s后恢复
```

属性：

- `style.background`——节点的背景颜色。
- `innerHTML`——节点的HTML内容。
- `offsetWIdth`——节点宽度（以像素度量）。
- ......等。

#### 2-1 DOM的例子

```javascript
<!DOCTYPE HTML>
<html>
<head>
    <title>About elk</title>
</head>
<body>
        The truth about elk.        
</body>
</html>
```

标签被称为**元素节点**（或者仅仅是元素）；元素内的文本形成**文本节点**，被标记为`#text`，一个文本节点只包含一个字符串。

文本节点中的特殊字符：

- 换行符：`↵`（在 JavaScript 中为 `\n`）
- 空格：`␣`

空格和换行符都是完全有效的字符，它们形成文本节点并成为DOM的一部分。所以例如，在上面的示例中，`<head>`标签中的`<title>`标签前面包含了一些空格，并且该文本变成了一个`#text`节点（它只包含一个换行符和一些空格）。

只有两个顶级排除项：

- 由于历史原因，`<head>`之前的空格和换行符均被忽略。
- 如果我们在`</body>`之后放置一些东西，那么它会被自动移到`body`内，并处于`body`中的最下方，因为HTML规范要求所有内容必须位于`<body>`内。所以`</body>`之后不能有空格。

#### 2-2 自动修正

如果浏览器遇到格式不正确的HTML，它会在形成DOM时自动更正。

- 顶级标签总是`<html>`。即使它不存在于文档中——它也会出现在 DOM 中，因为浏览器会创建它。对于 `<body>` 也是一样。
- 如果一个 HTML 文件中只有一个单词 “Hello”，浏览器则会把它包装到 `<html>` 和 `<body>` 中，并且会添加所需的 `<head>`。
- 表格永远有`<tbody>`。按照 DOM 规范，它们必须具有 `<tbody>` 标签，但 HTML 文本可能会忽略它。然后浏览器在创建 DOM 时，自动地创建了 `<tbody>`。

#### 2-3 其他节点类型

- 注释——**comment节点**，被标记为`#comment#`。
- 表示整个文档的`document`对象，在形式上也是一个DOM节点。

**HTML中的所有内容，甚至注释，都会成为DOM的一部分。**

一共有12种节点类型。通常用4种：

1. `document`——DOM的“入口点”。
2. 元素节点——HTML标签，构建树块。
3. 文本节点——包含文本。
4. 注释——有时我们可以将一些信息放入其中，它不会显示，但JS可以从DOM中读取它。

#### 2-4 与控制台交互

##### 2-4-1 在控制台（Console）中获取元素（Elements）选项卡中的节点

- 在元素（ELements）选项卡中选择元素节点。
- 按下`Esc`——它将在元素（Elements）选项卡下方打开控制台（Console）。
- 选中的元素可以通过`$0`来进行操作。

##### 2-4-2 在控制台（Console）中使用命令 `inspect(node)`

- 如果存在引用 DOM 节点的变量，那么我们可以在控制台（Console）中使用命令 `inspect(node)`，来在元素（Elements）选项卡中查看它。
- 或者我们可以直接在控制台（Console）中输出 DOM 节点，并“就地”探索。



### 3.遍历DOM

对DOM的所有操作都是以`document`对象开始，它是DOM的主“入口点”。

#### 3-1 在最顶层：documentELement和body

最顶层的树节点可以直接作为`document`的属性来使用：

`<html>`=`document.documentElement`

`<body>`=`document.body`

`<head>`=`document.head`

**问题：`document.body`的值可能是`null`。**

脚本无法访问在运行时不存在的元素。

尤其是，如果一个脚本是在`<head>`中，那么脚本是访问不到`document.body`元素的，因为浏览器还没有读到它。

例如：

```js
<html>

<head>
	<script>
    	alert("From HEAD:" + document.body );	//null,这里目前还没有<body>
	</script>
</head>

<body>
	<script>
        alert("From BODY:" + document.body );	//HTMLBodyElement,现在存在了
	</script>
</body>
</html>
```

**在DOM的世界中，`null`就意味着“不存在”或者“没有这个节点”。**

#### 3-2 子节点：childNodes，firstChild，lastChild

- **子节点（或者叫做子）**——对应的是直系的子元素。换句话说，它们被完全嵌套在给定的元素中。
- **子孙元素**——嵌套在给定元素中的所有元素，包括子元素，以及子元素的子元素等。

**`childNodes`集合列出了所有子节点，包括文本节点。**

**`firstChild`和`lastChild`属性是访问第一个和最后一个子元素的快捷方式。**

```js
//如果元素存在子节点，下面脚本运行结果将是true。
elem.childNodes[0] === elem.firstChild	//简写
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild	//简写
```

**这里还有一个特别的函数`elem.hasChildNodes()`用于检查节点是否有子节点。**

#### 3-3 DOM集合

`childNodes`看起来就像一个数组，但实际上它并不是一个数组，而是一个**集合**——一个类数组的可迭代对象。

1. 我们可以使用`for...of`来迭代它。

   ```js
   for(let node of document.body.childNodes){
       alert(node);	//显示集合中的所有节点
   }
   ```

   这是因为集合是可迭代的（提供了所需要的`Symbol.iterator`属性）。

2. 无法使用数组的方法，因为它不是一个数组。

   *如果我们想要使用数组的方法的话，我们可以使用`Array.from`方法来从集合创建一个“真”数组。*

   ```js
   alert(Array.from(document.body.childNodes).filter);	//function
   ```

- DOM集合是只读的
- DOM集合是实时的
- 不要使用`for...in`来遍历集合

#### 3-4 兄弟节点和父节点

**兄弟节点（sibling）**是指有同一个父节点的节点。

例如，`<head>`和`<body>`就是兄弟节点：

```js
<html>
    <head>...</head><body>...</body>
</html>
```

- `<body>`可以说是`<head>`的“下一个”或者“右边”兄弟节点。
- `<head>`可以说是`<body>`的“前一个”或者“左边”兄弟节点。

下一个兄弟节点在`nextSibling`属性中，上一个是在`previousSibling`属性中。

可以通过`parentNode`来访问父节点。

例如：

```js
// <body> 的父节点是 <html>
alert( document.body.parentNode === document.documentElement ); // true

// <head> 的后一个是 <body>
alert( document.head.nextSibling ); // HTMLBodyElement

// <body> 的前一个是 <head>
alert( document.body.previousSibling ); // HTMLHeadElement
```

#### 3-5 纯元素导航

上述列出的导航（navigation）属性引用**所有**节点。

下述列出的导航更多只考虑**元素节点**。

- `children`——仅那些作为元素节点的子代的节点。
- `firstElementChild`，`lastElementChild`——第一个和最后一个子元素。
- `previousElementSibling`,`nextElementSibling`——兄弟元素。
- `parentElement`——父元素。

##### ***`parentElement`与`parentNode`：***

`parentElement` 属性返回的是“元素类型”的父节点，而 `parentNode` 返回的是“任何类型”的父节点。这些属性通常来说是一样的：它们都是用于获取父节点。

唯一的例外就是 `document.documentElement`：

```js
alert( document.documentElement.parentNode );		 // document
alert( document.documentElement.parentElement ); 	 // null
```

因为根节点 `document.documentElement`（`<html>`）的父节点是 `document`。但 `document` 不是一个元素节点，所以 `parentNode` 返回了 `document`，但 `parentElement` 返回的是 `null`。

从任意节点 `elem` 到 `<html>` 而不是到 `document` 时:

```js
while(elem = elem.parentElement) {		 // 向上，直到 <html>
  alert( elem );
}
```

#### 3-6 表格

`<table>`元素支持（除了上面给出的，之外）以下属性：

- `table.rows`——`<tr>`元素的集合。
- `table.caption/tHead/tFoot`——引用元素`<caption>`,`<thead>`,`<tfoot>`。
- `table.tBodies`——`<tbody>`元素的集合（根据标准还有很多元素，但是这里至少会有一个——即使没有被写在HTML源文件中，浏览器也会将其放入DOM中）。

**`<theand>`,`<tbody>`,`<tbody>`**元素提供了`rows`属性：

- `tbody.rows`——表格内部`<tr>`元素的集合。

**`<tr>`:**

- `tr.cells`——在给定`<tr>`中的`<th>`和`<td>`单元格的集合。
- `tr.sectionRowIndex` —— 给定的 `<tr>` 在封闭的 `<thead>/<tbody>/<tfoot>` 中的位置（索引）。
- `tr.rowIndex` —— 在整个表格中 `<tr>` 的编号（包括表格的所有行）。

**`<td>`和`<th>`:**

- `td.cellIndex` —— 在封闭的 `<tr>` 中单元格的编号。

用法：

```js
<table id="table">
  <tr>
    <td>one</td><td>two</td>
  </tr>
  <tr>
    <td>three</td><td>four</td>
  </tr>
</table>

<script>
  // 获取带有 "two" 的 td（第一行，第二列）
  let td = table.rows[0].cells[1];
  td.style.backgroundColor = "red"; // highlight it
</script>
```



### 4.搜索

- `querySelector`：
  - 搜索方式：CSS-selector；
  - 可以在元素上调用；
  - `elem.querySelector(css)`调用会返回给定CSS选择器的第一个元素。
- `querySelectorAll`：
  - 搜索方式：CSS-selector；
  - 可以在元素上调用；
  - `elem.querySelectorAll(css)`返回`elem`中与给定CSS选择器匹配的所有元素。
- `getElementById`：
  - 搜索方式：id；
  - `document.getElementById(id)`。
- `getElementsByName`：
  - 搜索方式：name；
  - 实时的；
  - `document.getElementsByName(name)` 返回在文档范围内具有给定 `name` 特性的元素，很少使用。
- `getElementsByTagName`：
  - 搜索方式：tag or  `*`；
  - 可以在元素上调用；
  - 实时的；
  - `elem.getElementsByTagName(tag)` 查找具有给定标签的元素，并返回它们的集合。`tag` 参数也可以是对于“任何标签”的星号 `"*"`。
- `getElementsByClassName`：
  - 搜索方式：class；
  - 可以在元素上调用；
  - 实时的；
  - `elem.getElementsByClassName(className)` 返回具有给定CSS类的元素。

