# Html Part
[[toc]]
## html 常见的块标签，行内标签，单标签分别有哪些，有何区别？ <Badge type="tip" text="primary" />
::: details answer *[参考链接](https://juejin.cn/post/7359567256592449571)*
特性 | 块级元素 | 行内元素
-|-|-
布局 | 通常开始于新的一行 | 在同一行内水平排列
宽度 | 默认填满父容器宽度 | 宽度由内容决定
高度 | 可以设置高度 | 高度通常由内容决定
外边距 | 可以设置上下左右的外边距 | 只能设置左右外边距
内边距 | 可以设置上下左右的内边距 | 只能设置左右内边距
内容 | 可以包含其他块级或行内元素 | 通常包含文本或数据
堆叠方式 | 垂直堆叠 | 水平方堆放齐
盒模型 | 表现为完整的盒子模型 | 只表现部分盒子模型
换行 | 前后有换行空间 | 默认没有前后换行空间
常见标签 | \<div>, \<p>, \<section>, \<h1> 等 | \<span>, \<a>, \<strong>, \<em>, \<img> 等

块元素 <p style="width: 100%;height: 25px;margin:5px 10px; padding: 2px">我是块元素,f12 查看我设置的css属性已经生效</p> 
<div style ="margin: 10px 0">
    <span style="width: 80px;height: 25px;margin:5px 10px; padding: 2px">我是行内元素,f12 查看我的属性，只有横向的属性生效</span>
</div>                
可以通过display属性来设置块级元素和行内元素的显示方式
:::
## 常见的盒模型有哪些？有什么区别？ <Badge type="tip" text="primary" />
::: details answer
属性 | 标准盒模型 | IE盒模型 (怪异盒模型)
-|-|-
box-sizing | content-box | border-box
width | content | content + padding-left + padding-right + border
height | content | content + padding-top + padding-bottom + border

:::
## h5 新特性  <Badge type="tip" text="primary" />
::: details answer *[参考链接](https://blog.csdn.net/weixin_62421736/article/details/139924871)*
1. 语义元素
- \<article>，\<section>，\<nav>，\<aside>，\<header>，\<footer> 等元素，提供了更多的网页结构信息，使内容更加语义化。
2. 表单改进
- 新的表单元素 \<datalist>、\<output>，新的input类型如 email，url，number 等，以及自定义表单控件的样式。
3. 视频和音频支持
- \<video> 和 \<audio> 元素，允许直接在浏览器中嵌入视频和音频，支持多种格式如MP4, WebM等。
4. 画布元素 （canvas）
- \<canvas> 元素，用于绘制图形、制作动画、创建游戏等，可以通过JavaScript脚本控制。
5. 地理定位
- \<geolocation> 元素，允许网页获取用户当前位置信息。
6. 本地存储
- 提供无须数据库的本地存储，Local Storage 存储持久数据，而 Session Storage 存储会话数据。
7. Web Workers
- Web Workers 允许主线程以外的后台线程执行JavaScript，用于处理复杂计算，避免阻塞用户界面。
8. WebSocket
- WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。
9. 拖放API
- 允许用户将元素从一个地方拖放到另一个地方，而无需依赖任何插件。
10. 应用缓存
- 利用 applicationCache API，可以使网页和资源在没有网络的情况下也能被访问。 manifest   
:::