# Engineering Part (前端工程化部分) 
## 什么是webpack？它的作用是什么 <Badge type="tip" text="primary" />
::: details 展开查看
Webpack是一个模块打包工具，它将多个模块打包成一个或多个文件，以便在浏览器中使用。它的作用是将前端开发中的各种资源（如JavaScript、CSS、图片等）进行打包，以便在浏览器中使用。Webpack可以将这些资源进行压缩、合并、分割等操作，以提高页面加载速度和性能。
主要作用:
- 模块打包：将多个模块打包成一个或多个文件，以便在浏览器中使用。
- 依赖管理：管理项目中的依赖关系，自动解析处理模块间的依赖关系,减少手动管理依赖的复杂性,确保每个模块的正确加载。
- 代码分割：将代码分割成多个模块，以便按需加载，提高页面加载速度。
- 代码转换：将ES6+代码转换为ES5代码，以便在浏览器中使用。
- 插件扩展：通过插件扩展Webpack的功能，如代码压缩、代码分割、资源管理等。
- 开发环境支持：提供开发环境支持，如热更新、调试等。
- 生产环境支持：提供生产环境支持，如代码压缩、资源管理等。
:::
## Webpack 配置有哪些？ <Badge type="tip" text="primary" />
::: details 展开查看
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
::: details 展开查看
名称 | 功能 | 用法 | 配置方法
---|---|--- | ---
loader | 本质是函数,对接受到的内容践行转换,返回转换后的结果 | 打包处理 CSS、图片、JS 等文件 | module.rules 中配置，类型是对象数组，⾥⾯描述了对于什么类型的⽂件（ test ），使⽤什么加载( loader )和使⽤的参数（ options 
plugin | 插件,基于事件流框架Tapbale,拓展webpack功能,webpack运行生命周期中会广播很多事件,plugin可以监听事件,在合适时机通过webpack API改变输出结果 | 打包优化、资源管理、注入环境变量 | plugins 中配置，类型是对象， 每一项是一个 Plugin 的实例，参数都通过构造函数传入
:::

## 有哪些常见的Loader？如何配置loader?你用过哪些loader? <Badge type="tip" text="primary" />
::: details 展开查看
- babel-loader 用于将ES6+代码转换为ES5代码
- css-loader 用于加载CSS文件
- style-loader 用于将CSS代码注入到HTML文件中
- file-loader 用于加载文件
- url-loader 用于加载文件，并将文件转换为base64编码
- eslint-loader 用于检查代码是否符合ESLint规则
- ts-loader 用于加载TypeScript文件
- vue-loader 用于加载Vue文件
- postcss-loader 用于加载PostCSS文件
- less-loader 用于加载Less文件
- sass-loader 用于加载Sass文件
- stylus-loader 用于加载Stylus文件
- json-loader 用于加载JSON文件
- source-map-loader 用于加载Source Map文件
- vue-template-compiler 用于编译Vue文件中的模板
  
在webpack的配置文件中，配置module.rules,类型是对象数组，⾥⾯描述了对于什么类型的⽂件（ test ），使⽤什么加载( loader )和使⽤的参数（ options ）
也可以通过插件的形式来配置loader,例如babel-loader,css-loader,style-loader等
:::
## 有哪些常见的Plugin？如何配置Plugin?你用过哪些Plugin? <Badge type="tip" text="primary" />
::: details 展开查看
- html-webpack-plugin 用于生成HTML文件
- clean-webpack-plugin 用于清理dist目录
- copy-webpack-plugin 用于复制文件
- uglifyjs-webpack-plugin 用于压缩JS代码
- extract-text-webpack-plugin 用于提取CSS代码
- optimize-css-assets-webpack-plugin 用于压缩CSS代码
- webpack-bundle-analyzer 用于分析打包后的文件
- webpack-dev-server 用于开发服务器
- webpack-merge 用于合并配置
- webpack-hot-module-replacement-plugin 用于热更新
- webpack-define-plugin 用于定义环境变量
- speed-measure-webpack-plugin 用于测量构建时间
- ingnore-emit-webpack-plugin 用于忽略某些文件

在webpack的配置文件中，配置plugins
:::

## Webpack的事件机制了解吗？ <Badge type="tip" text="middle" />
::: details 展开查看
- beforeRun 开始执行构建之前触发,可以用于清理上一次构建的临时文件或状态
- run 开始执行构建时触发
- beforeCompile 编译开始之前触发,可以用于添加一些额外的编译配置或者预处理代码
- compile 开始编译时触发,用于监听编译过程或者处理编译过程中的错误
- thisCompilation 创建新的 compilation 时触发,代表当前编译过程中的所有状态和信息
- compilation 编译过程中触发,可用于监听编译过程或者处理编译过程中的错误
- emit 生成资源文件之前触发,修改输出文件或者生成附加文件
- afterEmit 生成资源文件之后触发,可用于清理中间文件
- done 编译完成之后触发,用于生产构建报告
:::

## 什么是Code Splitting <Badge type="tip" text="primary" />
::: details 展开查看
>概念：Code Splitting 代码分割，是一种优化技术，它允许将一个大的chunk拆分成多个小的chunk，从而实现按需加载，减少初始加载时间，并提高应用程序的性能
>开启方式： 在webpack的配置文件中，配置optimization.splitChunksk
:::

## Webpack的Source Map 是什么？如何配置生成Source Map? <Badge type="tip" text="primary" />
::: details 展开查看
>概念：Source Map 是源代码和构建后代码的映射关系。通常在开发阶段开启，用来调试代码，定位问题
>配置方式： 在webpack的配置文件中，配置devtool:'source-map'
:::
## 什么是 webpack 的热更新（Hot Module Replacement）？原理是什么？ <Badge type="warning" text="middle" />
::: details 展开查看
>概念：Webpack 热更新（Hot Module Replacement）是指，在应用程序运行过程中，替换、添加或删除模块，而不需要重新加载页面。
>原理：HRM的原理实际上是webpack-dev-server（WDS）和浏览器之间维护了一个websocket服务，当本地资源发生变化后，webpack会先将打包生成的新的模块代码放入内存中，然后WDS向浏览器推送更新，并附带上构建时的hash，让客户端和上一次的资源进行对比，如果不同就更新，如果相同就不做任何操作。
:::
## webpack 的构建流程 <Badge type="warning" text="middle" />
::: details 展开查看
1. 初始化参数： 解析Webpack配置参数，合并Shell传入和webpack.config.js文件配置的参数，形成最终的配 置结果。
2. 开始编译： 使用上一次得到的参数初始化compiler对象，注册所有配置的插件，插件监听Webpack构建生命周期的事件节点，做出相应的反应，执行对象的run方法开始执行编译。
3. 确定入口： 从配置的entry入口，开始解析文件构建AST语法树，找出依赖，递归下去。
4. 编译模块： 递归中根据文件类型和loader配置，调用所有配置的loader对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
5. 完成模块编译： 完成模块编译。在经过第四步使用Loader翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
6. 输出资源： 根据入口和模块之间的依赖关系，组装成一个个包含多个模块的Chunk，再把每个Chunk转换成单独的文件加入到输出列表，这步是可以修改输出内容的最后机会。
7. 输出完成： 在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。
:::

## Webpack的Tree Shaking原理? 触发条件? <Badge type="warning" text="middle" />
::: details 展开查看
>概念：Tree Shaking 是一个利用ES6模块静态结构特性[^1]来去除生产环境下不必要代码的优化过程   
>原理： 
1. 当Webpack分析代码时，它会标记出所有的import，export语句   
2. 然后，当Webpack确定某个模块没有被导入时，它会在生成的bundle中排除这个模块的代码
3. Webpack、还会进行递归的标记清理，以确保所有未使用的依赖项都不会出现在最终的bundle中  
>触发条件: 
1. 通过解构的方式引用方法
2. 调用npm包必须使用ESM
3. 同一文件的treeshaking有触发条件,    mode=production
4. 一定要使用解构来加载模块 
```js
optimization: {
    usedExports: true,
    concatenateModules: true,
    minimize: true
}
```
:::

## 如何减少打包后的代码体积？ <Badge type="warning" text="middle" />
::: details 展开查看
- 代码分割：将应用程序的代码划分为多个代码块，按需加载
- Tree Shaking： 配置Webpack的Tree Shaking机制，去除未使用的代码
- 代码压缩： 使用工具如UglifyJS或Terser来压缩JavaScript代码
- 使用生产模式： 在Webpack中使用生产模式，通过设置mode: 'production'来启用优化
- 使用压缩工具： 使用现代的压缩工具，如Brotli和Gzip，来对静态资源进行压缩
- 使用CDN： 将项目中引用的静态资源路径修改为CDN上的路径，减少图片、字体等静态资源等打包
:::
## ES Modules (ESM) 有哪些特性？如何开启ESM规范 <Badge type="warning" text="middle" />
::: details 展开查看
- 使用: 直接在script标签使用type=module 开启以ESM规范执行JS代码
- 特性:
- 自动使用严格模式,忽略“”use strict“
- 每一个module都运行在单独的私有作用域中
- ESM是通过CORS去请求外部JS模块的
- ESM的script标签会延迟执行脚本,相当于添加defer属性
:::
## ES Modules (ESM) 与CommonJS 规范的区别 <Badge type="warning" text="middle" />
::: details 展开查看
维度 | ESM | CommonJs  
-|-|-   
模块输出 | 值的引用 | 值的拷贝  
运行时机 | 编译时 | 运行时  
导出数量 | 多个导出 | 单个导出  
执行逻辑 | 同步,异步 | 同步  
this指向 | undefined | 当前模块  
使用方法 | import, export | require,modules.export  
:::
## vite 开发环境为什么比 webpack 快？<Badge type="warning" text="middle" />
::: details 展开查看
1. 原生 ESM 支持
   - Vite 利用了现代浏览器对 ES Modules（ESM）的原生支持。在开发环境下，Vite 可以直接运行源代码，无需像 Webpack 那样先进行打包。由于省去了打包过程，Vite 的启动速度非常快。
2. 按需编译
   - Vite 采用了按需编译的策略，只有当请求某个模块时，才会对该模块进行编译。这种按需加载的方式极大地缩减了编译时间。相比之下，Webpack 在构建时会对整个项目进行扫描和分析，无论模块是否被使用，都会被打包进最终的输出文件中，增加了构建时间。
3. 内存中的模块处理
    - Vite 将开发环境下的模块处理放在内存中，而不是像 Webpack 那样将所有模块都写入磁盘再进行读取。这种内存中的模块处理方式消除了磁盘读写的开销，提高了开发过程中的速度
4. 高效的 HMR（热模块替换）
    - Vite 通过利用 ES 模块的特性和内存中的模块处理，实现了高效的 HMR 机制。它能够在开发过程中快速捕捉到代码的变化，并立即将更新的模块发送给浏览器，实现即时的局部刷新。相比之下，Webpack 的 HMR 机制在配置和实现上相对较为复杂
:::

## 如何提高Webpack的打包速度？ <Badge type="warning" text="middle" />
::: details 展开查看
- 使用缓存：利用Webpack的持久缓存功能，避免重复构建没有变化的代码
- 使用多进程/多线程构建：使用thread-loader,happypack等插件可以将构建过程分解为多个进程或线程
- 使用DllPlugin和HardSourceWebpackPlugin：DllPlugin 可以将第三方库预先打包成独立的文件，减少构建时间，HardSourceWebpackPlugin 可以缓存中间文件，加速后续构建过程
- 使用Tree Shaking：启用Tree Shaking，去除未使用的代码
- 移除不必要的插件：避免不必要的复杂性和性能开销
:::


[^1]:静态结构特性：ES6模块的引入和导出是静态的， 这意味着在编译时就能确定模块的依赖关系，避免了运行时动态加载的复杂性。这种静态特性有助于优化捆绑，消除未引用的代码，加快import查找速度，并支持变量检查‌



- [参考链接](https://juejin.cn/post/7350535815132659749?searchId=20240828104154DF81436634F7543C129B)
