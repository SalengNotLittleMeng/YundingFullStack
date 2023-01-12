# DOM

文档对象模型（Document Object Model），简称 DOM，将所有页面内容表示为可以修改的对象，这些对象称为节点（node）。

模型用来表示对象间的关系。

### DOM树

**HTML 中的所有内容，甚至注释，都会成为 DOM 的一部分。**甚至 HTML 开头的<!DOCTYPE...>指令也是一个 DOM 节点。它在 DOM 树中位于<html>之前。

1. `document` 对象是页面的主要“入口点”。我们可以使用它来更改或创建页面上的任何内容。在形式上也是一个DOM节点。

2. 标签被称为**元素节点**（或者仅仅是元素），并形成了树状结构：<html>在根节点，<head> 和<body>是其子项。

3. **comment节点(注释)**，被标记为 `#comment` 。有时我们可以将一些信息放入其中，它不会显示，但 JS 可以从 DOM 中读取它 。

4. 元素内的文本形成**文本节点**，被标记为 `＃text`。一个文本节点只包含一个字符串。它没有子项，并且总是树的叶子。

请注意文本节点中的特殊字符：

- 换行符：`↵`（在 JavaScript 中为 `\n`）
- 空格：`␣`

空格和换行符都是完全有效的字符，就像字母和数字。它们形成文本节点并成为 DOM 的一部分。



### 遍历DOM

对DOM的所有操作都是以`document`对象开始，它是DOM的主“入口点”。从它我们可以访问任何节点。 

最顶层的树节点可以直接作为 `document` 的属性来使用：

-  <html> = `document.documentElement`

  最顶层的document节点是 `document.documentElement`。这是对应<html>标签的 DOM 节点。

- <body> = `document.body`

  另一个被广泛使用的 DOM 节点是<body>元素 —— `document.body`。

- <head> = document.head

  
  <head>标签可以通过 document.head 访问。

**`document.body` 的值可能是 `null`**。如果一个脚本是在<head>中，那么脚本是访问不到 `document.body` 元素的，因为浏览器还没有读到它，脚本无法访问在运行时不存在的元素。在 DOM 中，`null` 值就意味着“不存在”或者“没有这个节点”。 



### 节点间的关系

- **子节点（或者叫作子）** —— 对应的是直系的子元素。**`childNodes` 集合列出了所有子节点，包括文本节点。** **`firstChild` 和 `lastChild` 属性是访问第一个和最后一个子元素的快捷方式。`elem.hasChildNodes()` 用于检查节点是否有子节点。** 
- **子孙元素** —— 嵌套在给定元素中的所有元素，包括子元素，以及子元素的子元素等。
- 父——直接被父元素包含的元素是父元素。可以通过 `parentNode` 来访问父节点。
- 祖先——包含后代元素的元素是祖先元素。
- 后代——被祖先元素包含的元素是后代元素。
- 兄弟——拥有相同父元素的元素是兄弟元素。下一个兄弟节点在 `nextSibling` 属性中，上一个是在 `previousSibling` 属性中。



#### 子节点

`childNodes` 获取当前元素的子节点，包含空白的子节点。看起来就像一个数组。但实际上它并不是一个数组，而是一个 **集合** —— 一个类数组的可迭代对象。这个性质会导致两个重要的结果：

1. 我们可以使用 `for..of` 来迭代它，这是因为集合是可迭代的（提供了所需要的 `Symbol.iterator` 属性）。：

```javascript
for (let node of document.body.childNodes) {
  alert(node); // 显示集合中的所有节点
}
```

2. 无法使用数组的方法，因为它不是一个数组：

```javascript
alert(document.body.childNodes.filter); // undefined（这里没有 filter 方法！）

// 如果我们想要使用数组的方法的话，我们可以使用 `Array.from` 方法来从集合创建一个“真”数组：
alert( Array.from(document.body.childNodes).filter ); // function
```

- **DOM 集合是只读的**。我们不能通过类似 `childNodes[i] = ...` 的操作来替换一个子节点。 
- **DOM 集合是实时的**。 如果我们保留一个对 `elem.childNodes` 的引用，然后向 DOM 中添加/移除节点，那么这些节点的更新会自动出现在集合中。 
- **不要使用** `for..in` **来遍历集合**。



#### 元素节点

上面列出的导航（navigation）属性引用 **所有** 节点。但是对于很多任务来说，我们并不想要文本节点或注释节点。我们希望操纵的是代表标签的和形成页面结构的元素节点。所以，让我们看看更多只考虑 **元素节点** 的导航链接（navigation link）：

这些链接和我们在上面提到过的类似，只是在词中间加了 `Element`：

- `children` —— 仅那些作为元素节点的子代的节点。
- `firstElementChild`，`lastElementChild` —— 第一个和最后一个子元素。
- `previousElementSibling`，`nextElementSibling` —— 兄弟元素。
- `parentElement` —— 父元素。
- `tageName`——获得当前元素的标签名。



### 获取元素

#### `document.getElementById(id)`

 `document.getElementById(id)` 方法根据id获取元素节点，例如：

```javascript
<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // 获取该元素
  let elem = document.getElementById('elem');
  // 将该元素背景改为红色
  elem.style.background = 'red';
</script>
```

此外，还有一个通过 `id` 命名的全局变量，它引用了元素：

```javascript
<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // elem 是对带有 id="elem" 的 DOM 元素的引用
  elem.style.background = 'red';
  // id="elem-content" 内有连字符，所以它不能成为一个变量
  // ...但是我们可以通过使用方括号 window['elem-content'] 来访问它
</script>
```

除非我们声明一个具有相同名称的 JavaScript 变量，否则它具有优先权：

```javascript
<div id="elem"></div>

<script>
  let elem = 5; // 现在 elem 是 5，而不是对 <div id="elem"> 的引用
  alert(elem); // 5
</script>
```

**请不要使用以 id 命名的全局变量来访问元素**。因为这可能会造成命名冲突。另外，当人们阅读 JavaScript 代码且看不到对应的 HTML 时，变量的来源就会不明显。

`id` 必须是唯一的。在文档中，只能有一个元素带有给定的 `id`。

**只有 `document.getElementById`，没有 `anyElem.getElementById`**

`getElementById` 方法只能被在 `document` 对象上调用。它会在整个文档中查找给定的 `id`。



#### `getElementsBy*`

- `elem.getElementsByClassName(className)` 返回具有给定class属性的元素。

- `elem.getElementsByTagName(tag)` 查找具有给定标签的元素，根据标签名获得一组元素节点对象，并返回它们的集合。`tag` 参数也可以是对于“任何标签”的星号 `"*"`。例如：

  ```javascript
  // 获取文档中的所有 div
  let divs = document.getElementsByTagName('div');
  ```

- `document.getElementsByName(name)` 返回在文档范围内具有给定 `name` 属性的元素。主要用于表单项。

  ```javascript
  <form name="my-form">
    <div class="article">Article</div>
    <div class="long article">Long article</div>
  </form>
  
  <script>
    // 按 name 特性查找
    let form = document.getElementsByName('my-form')[0];
    // 在 form 中按 class 查找
    let articles = form.getElementsByClassName('article');
    alert(articles.length); // 2, found two elements with class "article"
  </script>
  ```

**`getElementById` 中没有字母 `"s"`，是因为它只返回单个元素。但是 `getElementsByTagName` 返回的是元素的集合，所以里面有 `"s"`。**

**它返回的是一个集合，不是一个元素！**



#### `querySelectorAll`

到目前为止，最通用的方法是 `elem.querySelectorAll(css)`，它返回 `elem` 中与给定 CSS 选择器匹配的所有元素，可以使用任何 CSS 选择器。例如：我们查找所有为最后一个子元素的`<li>`元素：

```javascript
<ul>
  <li>The</li>
  <li>test</li>
</ul>
<ul>
  <li>has</li>
  <li>passed</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');
  for (let elem of elements) {
    alert(elem.innerHTML); // "test", "passed"
  }
</script>
```

CSS 选择器的伪类，例如 `:hover` 和 `:active` 也都是被支持的。例如，`document.querySelectorAll(':hover')` 将会返回鼠标指针正处于其上方的元素的集合（按嵌套顺序：从最外层<html>到嵌套最多的元素）。



#### `querySelector`

`elem.querySelector(css)` 调用会返回给定 CSS 选择器的第一个元素。

换句话说，结果与 `elem.querySelectorAll(css)[0]` 相同，但是后者会查找 **所有** 元素，并从中选取一个，而 `elem.querySelector` 只会查找一个。



所有的 `"getElementsBy*"` 方法都会返回一个 **实时的（live）** 集合。这样的集合始终反映的是文档的当前状态，并且在文档发生更改时会“自动更新”。 

 相反，`querySelectorAll` 返回的是一个 **静态的** 集合。就像元素的固定数组。 



#### matches

之前的方法是搜索 DOM。`elem.matches(css)`不会查找任何内容，它只会检查 `elem` 是否与给定的 CSS 选择器匹配。它返回 `true` 或 `false`。当我们遍历元素（例如数组或其他内容）并试图过滤那些我们感兴趣的元素时，这个方法会很有用。例如：

```javascript
<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>

<script>
  // 不一定是 document.body.children，还可以是任何集合
  for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      alert("The archive reference: " + elem.href );
    }
  }
</script>
```



#### closest

`elem.closest(css)` 方法会查找与 CSS 选择器匹配的最近的祖先。`elem` 自己也会被搜索。方法 `closest` 在元素中得到了提升，并检查每个父级。如果它与选择器匹配，则停止搜索并返回该祖先。例如：

```javascript
<h1>Contents</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">Chapter 1</li>
    <li class="chapter">Chapter 2</li>
  </ul>
</div>

<script>
  let chapter = document.querySelector('.chapter'); // LI

  alert(chapter.closest('.book')); // UL
  alert(chapter.closest('.contents')); // DIV

  alert(chapter.closest('h1')); // null（因为 h1 不是祖先）
</script>
```



有 6 种主要的方法，可以在 DOM 中搜索元素节点：

| 方法名                   | 搜索方式     | 可以在元素上调用？ | 实时的？ |
| ------------------------ | ------------ | ------------------ | -------- |
| `querySelector`          | CSS-selector | ✔                  | -        |
| `querySelectorAll`       | CSS-selector | ✔                  | -        |
| `getElementById`         | `id`         | -                  | -        |
| `getElementsByName`      | `name`       | -                  | ✔        |
| `getElementsByTagName`   | tag or `'*'` | ✔                  | ✔        |
| `getElementsByClassName` | class        | ✔                  | ✔        |

目前为止，最常用的是 `querySelector` 和 `querySelectorAll`，但是 `getElement(s)By*` 可能会偶尔有用，或者可以在旧脚本中找到。

此外：

- `elem.matches(css)` 用于检查 `elem` 与给定的 CSS 选择器是否匹配。
- `elem.closest(css)` 用于查找与给定 CSS 选择器相匹配的最近的祖先。`elem` 本身也会被检查。

另一种用来检查子级与父级之间关系的方法：

- 如果 `elemB` 在 `elemA` 内（`elemA` 的后代）或者 `elemA==elemB`，`elemA.contains(elemB)` 将返回 true。