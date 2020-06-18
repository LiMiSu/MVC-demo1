以下代码快速写法：
```
<body>
<div id="app1"></div>
#app2+#app3+#app4
<script src="main.js"></script>
</body>
```
tab键，变成：
```
<div id="app1"></div>
<div id="app2"></div>
<div id="app3"></div>
<div id="app4"></div>
<script src="main.js"></script>
</body>
```
引入外部文件（css、jquery等）新写法：
在js文件里用`import`引入（注入依赖文件）
![image.png](https://upload-images.jianshu.io/upload_images/12081122-b2f480422c0fb119.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
（以前：1.html中<script>、<link>标签引入；2. css中@import "路径"引入。（这个相比于js里引入性能比较低，一般不用））
引入JQuery：
先初始化，避免以后改动影响到配置文件，出错。
```
npm init -y
npm install jquery / npm i jquery  缩写
或者（推荐使用yarn）
yarn init -y
yarn add jquery
```
init之后会默认生成一个初始化配置文件
![image.png](https://upload-images.jianshu.io/upload_images/12081122-fa51dbdd707b438b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/12081122-5aa107b7512a6470.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/12081122-56fa5401b5348431.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

验证MVC
![image.png](https://upload-images.jianshu.io/upload_images/12081122-8b6ace7d8d23965f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

功能：每个模块像一个工具，用户使用的时候感觉几个模块都是互相独立的。
小bug，不并排，两个宽度是476，整个paga宽度是935，相差17个像素——滚动条的宽度（14-19）
如果发现差值是14到19之间，那就是滚动条导致的。
![image.png](https://upload-images.jianshu.io/upload_images/12081122-38ae6e77daed0fcc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
那怎么办呢
可以把body干掉，但这样做始终不太好
![image.png](https://upload-images.jianshu.io/upload_images/12081122-67a765eb78b72484.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
还可以给父级加上width: 100vw;([参考：https://stackoverrun.com/cn/q/8124122](https://stackoverrun.com/cn/q/8124122))
![image.png](https://upload-images.jianshu.io/upload_images/12081122-85cf240ea4df9bae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/12081122-67e1ab34b2330b98.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
现在main.js里面的代码分工不太好
![image.png](https://upload-images.jianshu.io/upload_images/12081122-3520d2c71a1f8df7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
模块化操作，功能分离，main.js只做收集依赖文件，引入html的功能
![image.png](https://upload-images.jianshu.io/upload_images/12081122-024e4b4bfd1abe24.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/12081122-9be92377a0a4a24f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
给tab分页添加点击事件

![image.png](https://upload-images.jianshu.io/upload_images/12081122-16d0bef50fb63b0b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/12081122-b4dce5ccea408df1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/12081122-7ea8dbc368971be9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
但是永远都不要用.css这种写法
![image.png](https://upload-images.jianshu.io/upload_images/12081122-c77c4e03565db4e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
也永远都不要用.show.hide，哈哈哈
用什么呢
用class，js就不参与css的工作了，上面的写法都是在js里写css代码，我们要写样式行为相分离的代码风格
（记住一句话：JS永远都不要操作CSS）
![image.png](https://upload-images.jianshu.io/upload_images/12081122-25c74cddf6572636.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
一开始默认显示一个：
可以在html里面改
![image.png](https://upload-images.jianshu.io/upload_images/12081122-cbc09bcca381a0ea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
也可以一开始自己点一下.trigger手动调用
![image.png](https://upload-images.jianshu.io/upload_images/12081122-61a9c9a941cee35b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
所以main.js还可以再优化，只引入js和必要的css
![image.png](https://upload-images.jianshu.io/upload_images/12081122-5cbcd65719033902.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
第三个模块，点击动画
vh、vw可以不对应height和width写啊
![image.png](https://upload-images.jianshu.io/upload_images/12081122-0b4292fa620f6373.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/12081122-b58c4f2424c08e90.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/12081122-f8d8a50d0ce3370d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
就只是一个相对单位，看相对于谁而已
![image.png](https://upload-images.jianshu.io/upload_images/12081122-fc3aaabf48e1a282.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/12081122-a0cbac4d1c5b6d13.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

