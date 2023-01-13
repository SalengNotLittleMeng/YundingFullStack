### BOM

#### window 对象

BOM 的核心是 window 对象，表示浏览器的实例。window 对象在浏览器中有两重身份，一个是 ECMAScript 中的 Global 对象，另一个就是浏览器窗口的 JavaScript 接口。这意味着网页中定义的所有 对象、变量和函数都以 window 作为其 Global 对象，都可以访问其上定义的 parseInt()等全局方法。

注意 因为 window 对象的属性在全局作用域中有效，所以很多浏览器 API 及相关构造函数 都以 window 对象属性的形式暴露出来。另外，由于实现不同，某些 window 对象的属性在不同浏览器间可能差异很大。

#### 窗口关系

top 对象始终指向最上层（最外层）窗口，即浏览器窗口本身。而 parent 对象则始终指向当前窗 口的父窗口。如果当前窗口是最上层窗口，则 parent 等于 top（都等于 window）。最上层的 window 如果不是通过 window.open()打开的，那么其 name 属性就不会包含值，本章后面会讨论。 还有一个 self 对象，它是终极 window 属性，始终会指向 window。实际上，self 和 window 就 是同一个对象。之所以还要暴露 self，就是为了和 top、parent 保持一致。 这些属性都是 window 对象的属性，因此访问 window.parent、window.top 和 window.self 都可以。这意味着可以把访问多个窗口的 window 对象串联起来，比如 window.parent.parent。

#### 窗口大小

在不同浏览器中确定浏览器窗口大小没有想象中那么容易。所有现代浏览器都支持 4 个属性： innerWidth、innerHeight、outerWidth 和 outerHeight。outerWidth 和 outerHeight 返回浏 览器窗口自身的大小（不管是在最外层 window 上使用，还是在窗格中使用）。innerWidth 和 innerHeight 返回浏览器窗口中页面视口的大小（不包含浏览器边框和工具栏）。 document.documentElement.clientWidth 和document.documentElement.clientHeight 返回页面视口的宽度和高度。

#### 视口位置

浏览器窗口尺寸通常无法满足完整显示整个页面，为此用户可以通过滚动在有限的视口中查看文 档。度量文档相对于视口滚动距离的属性有两对，返回相等的值：window.pageXoffset/window.  scrollX 和 window.pageYoffset/window.scrollY。 可以使用 scroll()、scrollTo()和 scrollBy()方法滚动页面。这 3 个方法都接收表示相对视口距 离的 x 和 y 坐标，这两个参数在前两个方法中表示要滚动到的坐标，在最后一个方法中表示滚动的距离。

#### 导航与打开新窗口

window.open()方法可以用于导航到指定 URL，也可以用于打开新浏览器窗口。这个方法接收 4 个参数：要加载的 URL、目标窗口、特性字符串和表示新窗口在浏览器历史记录中是否替代当前加载页 面的布尔值。通常，调用这个方法时只传前 3 个参数，最后一个参数只有在不打开新窗口时才会使用。 如果 window.open()的第二个参数是一个已经存在的窗口或窗格（frame）的名字，则会在对应的 窗口或窗格中打开 URL。

#### 定时器

​		JavaScript 在浏览器中是单线程执行的，但允许使用定时器指定在某个时间之后或每隔一段时间就 执行相应的代码。setTimeout()用于指定在一定时间后执行某些代码，而 setInterval()用于指定 每隔一段时间执行某些代码。

​		setTimeout()方法通常接收两个参数：要执行的代码和在执行回调函数前等待的时间（毫秒）。第 一个参数可以是包含 JavaScript 代码的字符串（类似于传给 eval()的字符串）或者一个函数，比如： // 在 1 秒后显示警告框 setTimeout(() => alert("Hello world!"), 1000);

​		第二个参数是要等待的毫秒数，而不是要执行代码的确切时间。JavaScript 是单线程的，所以每次 只能执行一段代码。为了调度不同代码的执行，JavaScript 维护了一个任务队列。其中的任务会按照添 加到队列的先后顺序执行。setTimeout()的第二个参数只是告诉 JavaScript 引擎在指定的毫秒数过后 把任务添加到这个队列。如果队列是空的，则会立即执行该代码。如果队列不是空的，则代码必须等待 前面的任务执行完才能执行。

​		//？调用 setTimeout()时，会返回一个表示该超时排期的数值 ID。这个超时 ID 是被排期执行代码的 唯一标识符，可用于取消该任务。要取消等待中的排期任务，可以调用 clearTimeout()方法并传入超 时 ID。

#### location 对象

location 是最有用的 BOM 对象之一，提供了当前窗口中加载文档的信息，以及通常的导航功能。 这个对象独特的地方在于，它既是 window 的属性，也是 document 的属性。也就是说， window.location 和 document.location 指向同一个对象。location 对象不仅保存着当前加载文 档的信息，也保存着把 URL 解析为离散片段后能够通过属性访问的信息。

#### navigator 对象

属性/方法 		说 明 

activeVrDisplays 返回数组，包含 ispresenting 属性为 true 的 VRDisplay 实例 

appCodeName 即使在非 Mozilla 浏览器中也会返回"Mozilla" 

appName 浏览器全名 

appVersion 浏览器版本。通常与实际的浏览器版本不一致 

battery 返回暴露 Battery Status API 的 BatteryManager 对象 

buildId 浏览器的构建编号 

connection 返回暴露 Network Information API 的 NetworkInformation 对象 

cookieEnabled 返回布尔值，表示是否启用了 cookie  

credentials 返回暴露 Credentials Management API 的 CredentialsContainer 对象 

deviceMemory 返回单位为 GB 的设备内存容量 

doNotTrack 返回用户的“不跟踪”（do-not-track）设置 

geolocation 返回暴露 Geolocation API 的 Geolocation 对象 

getVRDisplays() 返回数组，包含可用的每个 VRDisplay 实例 

getUserMedia() 返回与可用媒体设备硬件关联的流 

hardwareConcurrency 返回设备的处理器核心数量 

javaEnabled 返回布尔值，表示浏览器是否启用了 Java  

language 返回浏览器的主语言 

languages 返回浏览器偏好的语言数组

.............

#### history 对象

history 对象表示当前窗口首次使用以来用户的导航历史记录。因为 history 是 window 的属性， 所以每个 window 都有自己的 history 对象。出于安全考虑，这个对象不会暴露用户访问过的 URL， 但可以通过它在不知道实际 URL 的情况下前进和后退。

​		go()方法可以在用户历史记录中沿任何方向导航，可以前进也可以后退。这个方法只接收一个参数， 这个参数可以是一个整数，表示前进或后退多少步。负值表示在历史记录中后退（类似点击浏览器的“后 退”按钮），而正值表示在历史记录中前进（类似点击浏览器的“前进”按钮）

【在旧版本的一些浏览器中，go()方法的参数也可以是一个字符串，这种情况下浏览器会导航到历 史中包含该字符串的第一个位置。最接近的位置可能涉及后退，也可能涉及前进。如果历史记录中没有 匹配的项，则这个方法什么也不做】

go()有两个简写方法：back()和 forward()。

history 对象还有一个 length 属性，表示历史记录中有多个条目。这个属性反映了历史记录的数 量，包括可以前进和后退的页面。对于窗口或标签页中加载的第一个页面，history.length 等于 1。

通过以下方法测试这个值，可以确定用户浏览器的起点是不是你的页面： if (history.length == 1){  // 这是用户窗口中的第一个页面 }