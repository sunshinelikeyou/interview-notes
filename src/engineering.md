# Engineering Part (前端工程化部分)

## 什么是 webpack？它的作用是什么 <Badge type="tip" text="primary" />

::: details 展开查看
Webpack 是一个模块打包工具，它将多个模块打包成一个或多个文件，以便在浏览器中使用。它的作用是将前端开发中的各种资源（如 JavaScript、CSS、图片等）进行打包，以便在浏览器中使用。Webpack 可以将这些资源进行压缩、合并、分割等操作，以提高页面加载速度和性能。
主要作用:

- 模块打包：将多个模块打包成一个或多个文件，以便在浏览器中使用。
- 依赖管理：管理项目中的依赖关系，自动解析处理模块间的依赖关系,减少手动管理依赖的复杂性,确保每个模块的正确加载。
- 代码分割：将代码分割成多个模块，以便按需加载，提高页面加载速度。
- 代码转换：将 ES6+代码转换为 ES5 代码，以便在浏览器中使用。
- 插件扩展：通过插件扩展 Webpack 的功能，如代码压缩、代码分割、资源管理等。
- 开发环境支持：提供开发环境支持，如热更新、调试等。
- 生产环境支持：提供生产环境支持，如代码压缩、资源管理等。
  :::

## 为什么使用 pnpm + monorepo？[参考链接](https://www.cnblogs.com/chenghuayike/p/18944858)

::: details 展开查看

> 概念:

1. pnpm: 新一代包管理工具,相比于 npm,yarn,它安装依赖速度更快,还能大幅节约磁盘空间,依赖集中处理,不同项目的依赖通过“软链接”的方式使用,避免重复存储
2. monorepo 架构：将多个项目的代码都放在同一个仓库里管理。就像把不同类型的玩具收纳在一个大箱子里，方便统一整理、查找和维护。
3. 两者结合：pnpm 和 monorepo 搭配使用，能高效处理项目依赖问题，还能轻松管理多个项目，让开发更有序。

> 优点

1. 解决幽灵依赖：在传统包管理中，可能会出现没主动安装却能使用的包，这就是 “幽灵依赖”，容易引发代码错误。pnpm 只会安装项目配置文件中明确声明的依赖，从根源上杜绝这个问题。
2. 解决依赖冲突：不同项目或同一项目的不同部分，可能需要同一依赖的不同版本，这就会产生依赖冲突。pnpm 能智能地找到最合适的依赖版本，让不同依赖和谐共存。
3. 本地包调试：借助 monorepo 架构，组件库和项目在同一个仓库。修改组件库代码后，不需要重新发布，项目里能立刻看到修改效果，极大提升调试效率。
4. 提升安装和构建速度：pnpm 的并行安装和高效缓存机制，搭配 monorepo 的统一管理，能让项目依赖安装和整体构建的速度大幅提升，节省大量时间。
5. 简化代码共享：monorepo 架构下，多个项目在同一仓库，公共组件、工具函数等代码可以轻松共享，一处修改，相关项目都能同步更新。
6. 优化版本管理和发布：多个项目的版本更新、发布操作可以在同一仓库内统一进行，不需要在多个仓库之间来回切换，流程更简单。

[pnpm+monorepo 项目 demo](https://gitee.com/sunshinelikeyou/pnpm-monorepo)
:::

## Webpack 配置有哪些？ <Badge type="tip" text="primary" />

::: details 展开查看

- entry 指定 Webpack 打包的入口文件。可以是单个或多个 javascrit 文件。这个配置决定了 Webpack 从哪个模块开始生成依赖关系图
- output 设置 Webpack 打包后的文件输出路径和文件名,包括 path、filename 和 publicPath 等。
- module 配置不同的 loaders 来处理不同的模块，例如，对于 CSS 文件，可以使用 css-loader 和 style-loader。
- resolve 设置 Webpack 如何解析模块依赖，包括 alias、extensions 和 modules 等。
- plugins 用于以各种方式自定义 Webpack 构建过程。webpack 附带各种内置插件，可以通过 webpack.[plugin-name] 访问这些插件
- devServer 提供一个简单的 web 服务器和实时重载功能，可通过 devServer.port,devServer.host 和 devServer.proxy 配置这些功能。
- optimization 用于配置 Webpack 的优化选项，包括 minimize、splitChunks 和 runtimeChunk 等。
- externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法
- devtool 此选项控制是否生成，以及如何生成 source map
- context 基础目录，绝对路径。用于从配置中解析入口点（entry point）和加载器 （loader）
- target 指定 Webpack 编译的目标环境
- performance 输出文件的性能检查配置
- noParse 不用解析和处理的模块
- stats 控制台输出日志控制
  :::

## loader 和 plugin 的区别？ <Badge type="tip" text="primary" />

::: details 展开查看
名称 | 功能 | 用法 | 配置方法
---|---|--- | ---
loader | 本质是函数,对接受到的内容践行转换,返回转换后的结果 | 打包处理 CSS、图片、JS 等文件 | module.rules 中配置，类型是对象数组，⾥⾯描述了对于什么类型的⽂件（ test ），使⽤什么加载( loader )和使⽤的参数（ options
plugin | 插件,基于事件流框架 Tapbale,拓展 webpack 功能,webpack 运行生命周期中会广播很多事件,plugin 可以监听事件,在合适时机通过 webpack API 改变输出结果 | 打包优化、资源管理、注入环境变量 | plugins 中配置，类型是对象， 每一项是一个 Plugin 的实例，参数都通过构造函数传入
:::

## 有哪些常见的 Loader？如何配置 loader?你用过哪些 loader? <Badge type="tip" text="primary" />

::: details 展开查看

- babel-loader 用于将 ES6+代码转换为 ES5 代码
- css-loader 用于加载 CSS 文件
- style-loader 用于将 CSS 代码注入到 HTML 文件中
- file-loader 用于加载文件
- url-loader 用于加载文件，并将文件转换为 base64 编码
- eslint-loader 用于检查代码是否符合 ESLint 规则
- ts-loader 用于加载 TypeScript 文件
- vue-loader 用于加载 Vue 文件
- postcss-loader 用于加载 PostCSS 文件
- less-loader 用于加载 Less 文件
- sass-loader 用于加载 Sass 文件
- stylus-loader 用于加载 Stylus 文件
- json-loader 用于加载 JSON 文件
- source-map-loader 用于加载 Source Map 文件
- vue-template-compiler 用于编译 Vue 文件中的模板

在 webpack 的配置文件中，配置 module.rules,类型是对象数组，⾥⾯描述了对于什么类型的⽂件（ test ），使⽤什么加载( loader )和使⽤的参数（ options ）
也可以通过插件的形式来配置 loader,例如 babel-loader,css-loader,style-loader 等
:::

## 有哪些常见的 Plugin？如何配置 Plugin?你用过哪些 Plugin? <Badge type="tip" text="primary" />

::: details 展开查看

- html-webpack-plugin 用于生成 HTML 文件
- clean-webpack-plugin 用于清理 dist 目录
- copy-webpack-plugin 用于复制文件
- uglifyjs-webpack-plugin 用于压缩 JS 代码
- extract-text-webpack-plugin 用于提取 CSS 代码
- optimize-css-assets-webpack-plugin 用于压缩 CSS 代码
- webpack-bundle-analyzer 用于分析打包后的文件
- webpack-dev-server 用于开发服务器
- webpack-merge 用于合并配置
- webpack-hot-module-replacement-plugin 用于热更新
- webpack-define-plugin 用于定义环境变量
- speed-measure-webpack-plugin 用于测量构建时间
- ingnore-emit-webpack-plugin 用于忽略某些文件

在 webpack 的配置文件中，配置 plugins
:::

## Webpack 的事件机制了解吗？ <Badge type="tip" text="middle" />

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

## 什么是 Code Splitting <Badge type="tip" text="primary" />

::: details 展开查看

> 概念：Code Splitting 代码分割，是一种优化技术，它允许将一个大的 chunk 拆分成多个小的 chunk，从而实现按需加载，减少初始加载时间，并提高应用程序的性能
> 开启方式： 在 webpack 的配置文件中，配置 optimization.splitChunksk
> :::

## Webpack 的 Source Map 是什么？如何配置生成 Source Map? <Badge type="tip" text="primary" />

::: details 展开查看

> 概念：Source Map 是源代码和构建后代码的映射关系。通常在开发阶段开启，用来调试代码，定位问题
> 配置方式： 在 webpack 的配置文件中，配置 devtool:'source-map'
> :::

## 什么是 webpack 的热更新（Hot Module Replacement）？原理是什么？ <Badge type="warning" text="middle" />

::: details 展开查看

> 概念：Webpack 热更新（Hot Module Replacement）是指，在应用程序运行过程中，替换、添加或删除模块，而不需要重新加载页面。
> 原理：HRM 的原理实际上是 webpack-dev-server（WDS）和浏览器之间维护了一个 websocket 服务，当本地资源发生变化后，webpack 会先将打包生成的新的模块代码放入内存中，然后 WDS 向浏览器推送更新，并附带上构建时的 hash，让客户端和上一次的资源进行对比，如果不同就更新，如果相同就不做任何操作。
> :::

## webpack 的构建流程 <Badge type="warning" text="middle" />

::: details 展开查看

1. 初始化参数： 解析 Webpack 配置参数，合并 Shell 传入和 webpack.config.js 文件配置的参数，形成最终的配 置结果。
2. 开始编译： 使用上一次得到的参数初始化 compiler 对象，注册所有配置的插件，插件监听 Webpack 构建生命周期的事件节点，做出相应的反应，执行对象的 run 方法开始执行编译。
3. 确定入口： 从配置的 entry 入口，开始解析文件构建 AST 语法树，找出依赖，递归下去。
4. 编译模块： 递归中根据文件类型和 loader 配置，调用所有配置的 loader 对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
5. 完成模块编译： 完成模块编译。在经过第四步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
6. 输出资源： 根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成单独的文件加入到输出列表，这步是可以修改输出内容的最后机会。
7. 输出完成： 在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。
   :::

## Webpack 的 Tree Shaking 原理? 触发条件? <Badge type="warning" text="middle" />

::: details 展开查看

> 概念：Tree Shaking 是一个利用 ES6 模块静态结构特性[^1]来去除生产环境下不必要代码的优化过程  
> 原理：

1. 当 Webpack 分析代码时，它会标记出所有的 import，export 语句
2. 然后，当 Webpack 确定某个模块没有被导入时，它会在生成的 bundle 中排除这个模块的代码
3. Webpack、还会进行递归的标记清理，以确保所有未使用的依赖项都不会出现在最终的 bundle 中
   > 触发条件:
4. 通过解构的方式引用方法
5. 调用 npm 包必须使用 ESM
6. 同一文件的 treeshaking 有触发条件, mode=production
7. 一定要使用解构来加载模块

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
- Tree Shaking： 配置 Webpack 的 Tree Shaking 机制，去除未使用的代码
- 代码压缩： 使用工具如 UglifyJS 或 Terser 来压缩 JavaScript 代码
- 使用生产模式： 在 Webpack 中使用生产模式，通过设置 mode: 'production'来启用优化
- 使用压缩工具： 使用现代的压缩工具，如 Brotli 和 Gzip，来对静态资源进行压缩
- 使用 CDN： 将项目中引用的静态资源路径修改为 CDN 上的路径，减少图片、字体等静态资源等打包
  :::

## ES Modules (ESM) 有哪些特性？如何开启 ESM 规范 <Badge type="warning" text="middle" />

::: details 展开查看

- 使用: 直接在 script 标签使用 type=module 开启以 ESM 规范执行 JS 代码
- 特性:
- 自动使用严格模式,忽略“”use strict“
- 每一个 module 都运行在单独的私有作用域中
- ESM 是通过 CORS 去请求外部 JS 模块的
- ESM 的 script 标签会延迟执行脚本,相当于添加 defer 属性
  :::

## ES Modules (ESM) 与 CommonJS 规范的区别 <Badge type="warning" text="middle" />

::: details 展开查看
维度 | ESM | CommonJs  
-|-|-  
模块输出 | 值的引用 | 值的拷贝  
运行时机 | 编译时 | 运行时  
导出数量 | 多个导出 | 单个导出  
执行逻辑 | 同步,异步 | 同步  
this 指向 | undefined | 当前模块  
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
4. 高效的 HMR（热模块替换） - Vite 通过利用 ES 模块的特性和内存中的模块处理，实现了高效的 HMR 机制。它能够在开发过程中快速捕捉到代码的变化，并立即将更新的模块发送给浏览器，实现即时的局部刷新。相比之下，Webpack 的 HMR 机制在配置和实现上相对较为复杂
   :::

## 如何提高 Webpack 的打包速度？ <Badge type="warning" text="middle" />

::: details 展开查看

- 使用缓存：利用 Webpack 的持久缓存功能，避免重复构建没有变化的代码
- 使用多进程/多线程构建：使用 thread-loader,happypack 等插件可以将构建过程分解为多个进程或线程
- 使用 DllPlugin 和 HardSourceWebpackPlugin：DllPlugin 可以将第三方库预先打包成独立的文件，减少构建时间，HardSourceWebpackPlugin 可以缓存中间文件，加速后续构建过程
- 使用 Tree Shaking：启用 Tree Shaking，去除未使用的代码
- 移除不必要的插件：避免不必要的复杂性和性能开销
  :::

[^1]: 静态结构特性：ES6 模块的引入和导出是静态的， 这意味着在编译时就能确定模块的依赖关系，避免了运行时动态加载的复杂性。这种静态特性有助于优化捆绑，消除未引用的代码，加快 import 查找速度，并支持变量检查 ‌

- [参考链接](https://juejin.cn/post/7350535815132659749?searchId=20240828104154DF81436634F7543C129B)
