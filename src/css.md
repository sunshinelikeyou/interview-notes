# CSS Part
[[toc]]
## 什么是margin塌陷，margin合并，如何避免 <Badge type="tip" text="primary" />
::: details answer [参考链接](https://blog.csdn.net/Celester_best/article/details/127455732)
- margin塌陷（父子元素）：当一个元素有margin值，并且这个元素的父级元素没有边框、内边距和外边距时，那么这个元素的margin会设置到父级元素上。
>现象：第一个蓝色盒子与顶部的距离应该只是example元素的padding值20px, 而实际上是20px+50px，因为蓝色盒子里面的白色盒子设置了margin-top: 50px; 塌陷到蓝色盒子上了。    
>解决：给蓝色盒子设置一个边框或者内边距。或者触发[BFC](#什么是bfc-如何触发) 
<div class="example">
    <div class="parent error">
        <div class="child"></div>
    </div>
    <div class="parent right">
        <div class="child"></div>
    </div>
</div>

- margin合并（兄弟元素）：当两个相邻元素的同一个方向都设置了margin值，那么这两个元素的margin会取最大的而不是累加。
>现象：第二个蓝色盒子与顶部的距离应该是20px+50px，但实际上是50px，因为蓝色盒子设置的margin-top: 50px; 合并到第一个蓝色盒子上了。   
>解决：触发蓝色盒子[BFC](#什么是bfc-如何触发) 
:::
## 什么是BFC，如何触发 <Badge type="tip" text="primary" />
::: details answer
- 概念：BFC（Block Formatting Context）块级格式化上下文，它规定了内部的块级元素如何布局，并且与这个块级元素外部毫不相干。
- 特性：
    1. 内部的Box会在垂直方向上一个接一个的放置。
    2. 垂直方向上的距离由margin决定。
    3. bfc的区域不会与float的元素区域重叠。
    4. 计算bfc的高度时，浮动元素也参与计算
    5. bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。
- 触发条件：
     1. 浮动元素，float 除 none 以外的值 
     2. 绝对定位元素，position 除 static 以外的值
     3. display 为以下其中之一的值 inline-block，table-cell，table-caption、flex
     4. overflow 除了 visible 以外的值（hidden，auto，scroll）
     5. body 根元素
:::
## css3有哪些新特性 <Badge type="tip" text="primary" />
::: details answer [参考链接](https://blog.csdn.net/Feng_warm/article/details/140721144)
1. 新增选择器
    - 属性选择器：允许根据元素的属性及属性值来选择元素，例如 [type=“text”]
    - 伪类选择器：用于定义元素的特殊状态，如 :hover、:active、:visited等。
    - 伪元素选择器：如::before，::after,::first-latter,::first-line等，允许在元素的内容前后插入新的内容或样式化元素的一部分。
2. 盒模型
    - css3引入了box-sizing属性，允许开发者在包括边框和内边距内的盒模型中更容易地工作，通过box-sizing：boder-box；。
3. 图片边框
    - boder-radius：允许创建圆角边框。
    - border-image：允许将图片用作边框。
4. 背景
    - 多重背景：background-image属性现在可以包含多个URL，允许单个元素有多个背景图像。
    - background-size：允许你指定背景图像的大小。
    - background-origin和background-clip提供了更多的背景定位和裁剪选项。
5. 渐变
    - 线性渐变和径向渐变允许创建平滑的颜色过渡效果，无需使用图像。
6. 文本效果
    - text-shadow：允许给文本添加阴影。
    - @font-face：允许使用网络上的字体文件，而不仅仅是用户计算机上已经安装的字体
7. 转换
    - 允许元素进行旋转、缩放、倾斜或移动。。transition属性配合transform-origin属性可以实现这些效果。
8. 过渡
    - 允许css属性值的变化在指定的持续时间内平滑过渡，增强了用户界面的交互性和视觉效果。
9. 动画
    - 通过@keyframes规则，可以定义动画序列，然后使用animation属性将其应用到元素上。
10. 媒体查询
    - 允许根据不同的媒体类型和条件应用不同的样式规则，是响应式网页设计的重要组成部分。
11. 多列布局
    - 使用column-count，column-gap，column-rule等属性可以创建多列文本布局。
12. 弹性盒子
    - 提供了一种更有效的方式布局、对齐和分配在容器中项目空间，即使他们的大小未知或是动态变化的。
13. 网格布局
    - 一个二维布局系统，用于通过创建复杂的网格和对齐内容来布局网页。
:::
## 浏览器渲染网页的过程 <Badge type="warning" text="middle" />
::: details answer
1. 解析HTML，构建DOM树。
2. 解析CSS，构建CSSOM树。
3. 将DOM树和CSSOM树合并成渲染树。
4. 根据渲染树进行绘制。
:::
## 浏览器输入URL发生了什么 <Badge type="warning" text="middle" />
::: details answer
- URL 解析
- DNS 查询
- TCP 连接
- 处理请求
- 接受响应
- 渲染页面
:::



<style lang="scss"> 
.example{
    border: 1px solid #eee;
    padding: 20px;
    border-radius: 3px;
    .parent{
        width: 100px;
        height: 100px;
        background-color: skyblue;
        border-radius: 3px;
        margin-bottom: 20px;
        text-align: center;
    }
    .child{
        width: 50px;
        height: 50px;
        background-color: #eee;
        border-radius: 3px;
        margin-top: 50px;
        box-sizing: border-box;
        color: #000;
        text-align: center;
        line-height: 50px;
    }
    .parent.right{
        /* overflow: hidden; */
        /* border: 1px solid #eee; */
        /* padding: 1px; */
    }
}

</style>