# WebPack相关内容整合：

#### 1.path模块的使用：

​	●获取路径相关信息：

​		■dirname：获取文件的**父文件夹的路径**  (path.dirname(filepath))

​		■basename：获取该文件名称  (path.basename(filepath))

​		■extname：获取文件**扩展名**  (path.extname(filepath))

​	●文件路径的拼接：

​		■path.join    (将多个路径进行拼接)

​		■path.resolve     **(拼接绝对路径)**：

​					●它会把一个路径或路径片段的序列解析为一个**绝对路径**;

​					●给定的路径的序列是从右往左被处理的，后面每个path被依次解析,直到构造完成一个绝对路径;

​					●如果在处理完所有给定path的段之后，还没有生成绝对路径，**则使用当前工作目录;**

​					●生成的路径被规范化并删除尾部斜杠，**零长度path段被忽略;**

​					●如果没有path传递段，path.resolve()将**返回当前工作目录的绝对路径;**

```javascript
path.resolve("./a/b","../c","./d.txt") => C://a/c/d.txt
```

#### 2.初识WebPack：

​	●**WebPack是一个静态的为现代的JavaScript应用工具的模块化打包工具**

​		■静态的：webpack最终会将代码打包成静态资源（部署到静态服务器）

​		■现代的：正是为了解决如今前端开发面临的各种各样问题才催生了webpack

​		■模块化：其默认支持各种模块化开发，ES Module，CommonJS，AMD等

​		■打包：可以帮助我们继续打包，其是一个打包工具

​	●WebPack安装方法：

​		npm install webpack webpack-cli -D(--save-dev)

#### 3.WebPack配置(webpack.config.js):

```javascript
const path = require("path")
const { VueLoaderPlugin } = require("vue-loader/dist/index")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack") //此插件无需安装由webpack内部提供
module.exports = {
    
    //mode配置默认为production，还有development与none两个选项
    //development打包后，一些没有依赖的方法、变量、文件会保留；而 production 则会移除。
    //production 打包后，代码会进行压缩，比 development 的文件小。
    mode:"production",
    
    //设置打包的文件入口
    entry:"./src/index.js",
    
    //设置打包完成后的内容
    output: {
		//设置打包后的文件名称
    	filename:"bundle.js",
    	
        //设置打包后的文件夹名称(仅支持绝对路径)
        path:path.resolve( __dirname, "./build"),
        
        //与CleanWebpackPlugin插件有着相同的效果
        clean: true
	}，
    
    //设置文件打包时所用到的模块
    module:{
    	rules:[
    		{
        	//利用正则表达式规定限制的文件类型
    		test:/\.css$/,
    		
    		//对于此类型文件用到的操作
    		use:[
    			
    			//loader可以用于对模块(import css 文件后css会被当成一个模块)的源代码进行转换	
    			//由于css-loader只是负责将.css文件解析，不会将css插入到页面中
    			//因此需要用到style-loader来讲css插入到页面中
    			<!--   注：多个loader的使用顺序是 从后往前 或 从下往上   --!>
    			{ loader: "css-loader" },
    			{ loader: "style-loader" },
    			{ 
    				//利用postcss-loader来提前对浏览器CSS属性进行设置
    				//loader会读取options内的数据进行操作
    				loader: "postcss-loader",
    				options: {
                        postcssOptions:{
                            plugins:[
                                //该插件用于自动将供应商前缀添加到需要它们的 CSS 属性中
                                "autoprefixer"
                                
                                //postcss-preset-env除了autoprefixer的功能外还有许多其余的功能
                                //帮助我们将一些现代的CSS特性转成大多数浏览器认识的CSS并根据所需添								   加polyfill
                                "postcss-preset-env"
                            	]
                        	}
                    	}
                	}
    			]
            //use:[ "css-loader", "style-loader" ]
				},
            {
                test: /\.vue$/
                use:[
					{ loader: "vue-loader" }
                  	{
                  		//利用babel-loader将ES6+的语法转化为ES5
                  		loader: "babel-loader", 
                 	 	options: {
                      		plugins: [
                          		"@babel/preset-env"
                      		]
                  		}
                  	},
                ]
            }
            
            {	
                //对于图片等资源的配置
            	test:/\.(png|jpe?g|svg|gif)$/
                
                //打包图片，每张图片都有自己的地址
                //缺点：进行了两次网络请求
                type:"asset/resource",
                
                //将图片进行base64的编码，并且直接打包至生成的js文件中
                //缺点：造成js文件过大，代码下载与解析时间过长
                type:"asset/inline",
                
                //自动选择方式
                type:"asset",
                
                //规定两种方式的界限(仅适用于type为asset的情况下)
                parser: {
                	dataUrlCondition: {
                        //以60kb大小为界限
                        maxSize:60 * 1024 //(此处单位为byte(字节) 1kb == 1024byte)
                    }    
                },
                
                //设置生成的文件的相关内容    
               	generator: {
                    //利用占位符来实现名称传递
                    //name：指向原来的图片名称
                    //ext：扩展名
                    //hash：webpack生成的hash编码
                    
                    filename: "img/[name]_[hash:8][ext]"
                    //上述做法会将图片存放至img文件夹中
                }
            }

    	]
	},
    
   	plugins:{
        //解析.vue文件除了vue-loader外还需要VueLoaderPlugin来支撑(处理css属性)
        new VueLoaderPlugin(),
        
        //每次打包时对于原来已经打包好的文件进行清除
        new CleanWebpackPlugin(),
        
        //每次打包额外生成一个html文件来提供浏览
        new HtmlWebpackPlugin({
            //设置页面名称
            title:"页面名称"
            
            //页面依据的模板(例如vue的html需要使用)
            template:"./index.html"
        }),
        
        //类似于对名称进行的全局定义
        //内部还有一个默认属性process.env.NODE_ENV其依附于mode属性的配置
          	//为development时为模块与chunk启用有效的名，production时启用确定性的混淆名
        new DefinePlugin({
            //引号内部犹如eval算法，因此若需要传入路径等相关应再加一层单引号
            BASE:" './' ",
            code:" 'coder' "
        })
    }
       
}
```

##### Loader与Plugin:

​	■Loader用于对**特定的模块类型**进行转换。

​	■Plugin用于**执行更加广泛的任务**，比如打包优化，资源管理，环境变量注入等。



#### 3.WebPack搭建本地服务器：

​	■webpack watch mode

​	■webpack-dev-serve (常用)	

​	■webpack-dev-middleware

```javascript
//第一步先安装包：
npm i webpack-dev-serve -D

//可以package.json中设置脚本
"scripts": {
    "serve": "webpack serve"
}

//在webpack中的配置
module.exports = {
    devServer: {
        //是否启动热更新
        hot: true,
        
        //设置主机地址
        host: "localhost",
        
        //设置监听端口
        port:8888,
        
        //是否打开浏览器
        open:true,
        
        //是否启用gzip压缩
        //gzip 压缩 用于减少服务器向前端传输的数据量，提高浏览的速度
        compress:true,
    }
}

//利用模块热更新来保证所涉及元素变化时不会刷新整个页面
//指定哪些模块发生更新时进行HMR，而不刷新整个页面
if(module.hot) {
    module.hot.accept("./index.js")
}
```

#### 4.babel与postcss的配置：

​	■babel会自动读取babel.config.js文件中的内容。

​	■postcss会自动读取postcss.config.js文件中的内容。

​	■因此可以将其从loader配置中分离出来。

```javascript
//babel.config.js
module.exports = {
	presets: {
		"@babel/preset-env"
	}
}

//postcss.config.js
module.exports = {
	plugins: {
		"autoprefixer",
		"postcss-preset-env"
	}
}
```

