# Engineering Part (前端工程化部分) 
## Webpack 配置有哪些？ <Badge type="tip" text="primary" />
::: details answer
- entry 指定Webpack打包的入口文件。可以是单个或多个javascrit文件。这个配置决定了Webpack从哪个模块开始生成依赖关系图
- output 设置Webpack打包后的文件输出路径和文件名,包括path、filename和publicPath等。
- module 配置不同的loaders来处理不同的模块，例如，对于CSS文件，可以使用css-loader和style-loader。
- resolve 设置Webpack如何解析模块依赖，包括alias、extensions和modules等。
- plugins 用于以各种方式自定义Webpack构建过程。webpack 附带各种内置插件，可以通过webpack.[plugin-name] 访问这些插件
- devServer 提供一个简单的web服务器和实时重载功能，可通过devServer.port,devServer.host和devServer.proxy配置这些功能。
- optimization 用于配置Webpack的优化选项，包括minimize、splitChunks和runtimeChunk等。
- externals  配置选项提供了「从输出的 bundle 中排除依赖」的方法
- devtool 此选项控制是否生成，以及如何生成 source map
- context 基础目录，绝对路径。用于从配置中解析入口点（entry point）和加载器 （loader）
- target 指定Webpack编译的目标环境
- performance 输出文件的性能检查配置
- noParse 不用解析和处理的模块
- stats 控制台输出日志控制
:::
## loader 和 plugin 的区别？ <Badge type="tip" text="primary" />
::: details answer
名称 | 功能 | 用法 | 配置方法
---|---|--- | ---
loader | 用于对模块的源代码进行转换 | 打包处理 CSS、图片、JS 等文件 | module.rules 中配置，类型是对象数组，⾥⾯描述了对于什么类型的⽂件（ test ），使⽤什么加载( loader )和使⽤的参数（ options 
plugin | 用于对整个构建过程进行干预 | 打包优化、资源管理、注入环境变量 | plugins 中配置，类型是对象， 每一项是一个 Plugin 的实例，参数都通过构造函数传入
:::
## 什么是 webpack 的热更新（Hot Module Replacement）？原理是什么？ <Badge type="warning" text="middle" />
::: details answer
>概念：Webpack 热更新（Hot Module Replacement）是指，在应用程序运行过程中，替换、添加或删除模块，而不需要重新加载页面。
>原理：HRM的原理实际上是webpack-dev-server（WDS）和浏览器之间维护了一个websocket服务，当本地资源发生变化后，webpack会先将打包生成的新的模块代码放入内存中，然后WDS向浏览器推送更新，并附带上构建时的hash，让客户端和上一次的资源进行对比，如果不同就更新，如果相同就不做任何操作。
:::
## webpack 的构建流程 <Badge type="warning" text="middle" />
::: details answer
1. 初始化参数： 解析Webpack配置参数，合并Shell传入和webpack.config.js文件配置的参数，形成最终的配 置结果。
2. 开始编译： 使用上一次得到的参数初始化compiler对象，注册所有配置的插件，插件监听Webpack构建生命周期的事件节点，做出相应的反应，执行对象的run方法开始执行编译。
3. 确定入口： 从配置的entry入口，开始解析文件构建AST语法树，找出依赖，递归下去。
4. 编译模块： 递归中根据文件类型和loader配置，调用所有配置的loader对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
5. 完成模块编译： 完成模块编译。在经过第四步使用Loader翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
6. 输出资源： 根据入口和模块之间的依赖关系，组装成一个个包含多个模块的Chunk，再把每个Chunk转换成单独的文件加入到输出列表，这步是可以修改输出内容的最后机会。
7. 输出完成： 在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。
:::
## 什么是Code Splitting <Badge type="tip" text="primary" />
::: details answer
>概念：Code Splitting 代码分割，是一种优化技术，它允许将一个大的chunk拆分成多个小的chunk，从而实现按需加载，减少初始加载时间，并提高应用程序的性能
>开启方式： 在webpack的配置文件中，配置optimization.splitChunksk
:::

## Webpack的Source Map 是什么？如何配置生成Source Map? <Badge type="tip" text="primary" />
::: details answer
>概念：Source Map 是源代码和构建后代码的映射关系。通常在开发阶段开启，用来调试代码，定位问题
>配置方式： 在webpack的配置文件中，配置devtool:'source-map'
:::

## Webpack的Tree Shaking原理 <Badge type="warning" text="middle" />
::: details answer
>概念：Tree Shaking 是一个利用ES6模块静态结构特性[^1]来去除生产环境下不必要代码的优化过程
>原理： 1.当Webpack分析代码时，它会标记出所有的import，export语句
        2. 然后，当Webpack确定某个模块没有被导入时，它会在生成的bundle中排除这个模块的代码
        3.Webpack、还会进行递归的标记清理，以确保所有未使用的依赖项都不会出现在最终的bundle中  
```js
optimization: {
    usedExports: true,
    concatenateModules: true,
    minimize: true
}
```

[^1]:静态结构特性：ES6模块的引入和导出是静态的， 这意味着在编译时就能确定模块的依赖关系，避免了运行时动态加载的复杂性。这种静态特性有助于优化捆绑，消除未引用的代码，加快import查找速度，并支持变量检查‌
:::

## 如何减少打包后的代码体积？ <Badge type="warning" text="middle" />
- 代码分割：将应用程序的代码划分为多个代码块，按需加载
- Tree Shaking： 配置Webpack的Tree Shaking机制，去除未使用的代码
- 代码压缩： 使用工具如UglifyJS或Terser来压缩JavaScript代码
- 使用生产模式： 在Webpack中使用生产模式，通过设置mode: 'production'来启用优化
- 使用压缩工具： 使用现代的压缩工具，如Brotli和Gzip，来对静态资源进行压缩
- 使用CDN： 将项目中引用的静态资源路径修改为CDN上的路径，减少图片、字体等静态资源等打包

## 如何提高Webpack的打包速度？ <Badge type="warning" text="middle" />
- 使用缓存：利用Webpack的持久缓存功能，避免重复构建没有变化的代码
- 使用多进程/多线程构建：使用thread-loader,happypack等插件可以将构建过程分解为多个进程或线程
- 使用DllPlugin和HardSourceWebpackPlugin：DllPlugin 可以将第三方库预先打包成独立的文件，减少构建时间，HardSourceWebpackPlugin 可以缓存中间文件，加速后续构建过程
- 使用Tree Shaking：启用Tree Shaking，去除未使用的代码
- 移除不必要的插件：避免不必要的复杂性和性能开销


- [参考链接](https://juejin.cn/post/7350535815132659749?searchId=20240828104154DF81436634F7543C129B)
