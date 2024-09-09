import{_ as n,B as r,c as p,j as i,a as l,G as a,a2 as s,o}from"./chunks/framework.s54Xu68I.js";const P=JSON.parse('{"title":"Engineering Part (前端工程化部分)","description":"","frontmatter":{},"headers":[],"relativePath":"src/engineering.md","filePath":"src/engineering.md","lastUpdated":1725846101000}'),d={name:"src/engineering.md"},k={id:"webpack-配置有哪些",tabindex:"-1"},u={id:"loader-和-plugin-的区别",tabindex:"-1"},b={id:"什么是code-splitting",tabindex:"-1"},m={id:"webpack的source-map-是什么-如何配置生成source-map",tabindex:"-1"},g={id:"什么是-webpack-的热更新-hot-module-replacement-原理是什么",tabindex:"-1"},h={id:"webpack-的构建流程",tabindex:"-1"},y={id:"webpack的tree-shaking原理",tabindex:"-1"},c={id:"如何减少打包后的代码体积",tabindex:"-1"},x={id:"vite-开发环境为什么比-webpack-快",tabindex:"-1"},w={id:"如何提高webpack的打包速度",tabindex:"-1"};function f(S,e,E,W,v,C){const t=r("Badge");return o(),p("div",null,[e[30]||(e[30]=i("h1",{id:"engineering-part-前端工程化部分",tabindex:"-1"},[l("Engineering Part (前端工程化部分) "),i("a",{class:"header-anchor",href:"#engineering-part-前端工程化部分","aria-label":'Permalink to "Engineering Part (前端工程化部分)"'},"​")],-1)),i("h2",k,[e[0]||(e[0]=l("Webpack 配置有哪些？ ")),a(t,{type:"tip",text:"primary"}),e[1]||(e[1]=l()),e[2]||(e[2]=i("a",{class:"header-anchor",href:"#webpack-配置有哪些","aria-label":'Permalink to "Webpack 配置有哪些？ <Badge type="tip" text="primary" />"'},"​",-1))]),e[31]||(e[31]=s('<details class="details custom-block"><summary>展开查看</summary><ul><li>entry 指定Webpack打包的入口文件。可以是单个或多个javascrit文件。这个配置决定了Webpack从哪个模块开始生成依赖关系图</li><li>output 设置Webpack打包后的文件输出路径和文件名,包括path、filename和publicPath等。</li><li>module 配置不同的loaders来处理不同的模块，例如，对于CSS文件，可以使用css-loader和style-loader。</li><li>resolve 设置Webpack如何解析模块依赖，包括alias、extensions和modules等。</li><li>plugins 用于以各种方式自定义Webpack构建过程。webpack 附带各种内置插件，可以通过webpack.[plugin-name] 访问这些插件</li><li>devServer 提供一个简单的web服务器和实时重载功能，可通过devServer.port,devServer.host和devServer.proxy配置这些功能。</li><li>optimization 用于配置Webpack的优化选项，包括minimize、splitChunks和runtimeChunk等。</li><li>externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法</li><li>devtool 此选项控制是否生成，以及如何生成 source map</li><li>context 基础目录，绝对路径。用于从配置中解析入口点（entry point）和加载器 （loader）</li><li>target 指定Webpack编译的目标环境</li><li>performance 输出文件的性能检查配置</li><li>noParse 不用解析和处理的模块</li><li>stats 控制台输出日志控制</li></ul></details>',1)),i("h2",u,[e[3]||(e[3]=l("loader 和 plugin 的区别？ ")),a(t,{type:"tip",text:"primary"}),e[4]||(e[4]=l()),e[5]||(e[5]=i("a",{class:"header-anchor",href:"#loader-和-plugin-的区别","aria-label":'Permalink to "loader 和 plugin 的区别？ <Badge type="tip" text="primary" />"'},"​",-1))]),e[32]||(e[32]=s('<details class="details custom-block"><summary>展开查看</summary><table tabindex="0"><thead><tr><th>名称</th><th>功能</th><th>用法</th><th>配置方法</th></tr></thead><tbody><tr><td>loader</td><td>用于对模块的源代码进行转换</td><td>打包处理 CSS、图片、JS 等文件</td><td>module.rules 中配置，类型是对象数组，⾥⾯描述了对于什么类型的⽂件（ test ），使⽤什么加载( loader )和使⽤的参数（ options</td></tr><tr><td>plugin</td><td>用于对整个构建过程进行干预</td><td>打包优化、资源管理、注入环境变量</td><td>plugins 中配置，类型是对象， 每一项是一个 Plugin 的实例，参数都通过构造函数传入</td></tr></tbody></table></details>',1)),i("h2",b,[e[6]||(e[6]=l("什么是Code Splitting ")),a(t,{type:"tip",text:"primary"}),e[7]||(e[7]=l()),e[8]||(e[8]=i("a",{class:"header-anchor",href:"#什么是code-splitting","aria-label":'Permalink to "什么是Code Splitting <Badge type="tip" text="primary" />"'},"​",-1))]),e[33]||(e[33]=i("details",{class:"details custom-block"},[i("summary",null,"展开查看"),i("blockquote",null,[i("p",null,"概念：Code Splitting 代码分割，是一种优化技术，它允许将一个大的chunk拆分成多个小的chunk，从而实现按需加载，减少初始加载时间，并提高应用程序的性能 开启方式： 在webpack的配置文件中，配置optimization.splitChunksk")])],-1)),i("h2",m,[e[9]||(e[9]=l("Webpack的Source Map 是什么？如何配置生成Source Map? ")),a(t,{type:"tip",text:"primary"}),e[10]||(e[10]=l()),e[11]||(e[11]=i("a",{class:"header-anchor",href:"#webpack的source-map-是什么-如何配置生成source-map","aria-label":'Permalink to "Webpack的Source Map 是什么？如何配置生成Source Map? <Badge type="tip" text="primary" />"'},"​",-1))]),e[34]||(e[34]=i("details",{class:"details custom-block"},[i("summary",null,"展开查看"),i("blockquote",null,[i("p",null,"概念：Source Map 是源代码和构建后代码的映射关系。通常在开发阶段开启，用来调试代码，定位问题 配置方式： 在webpack的配置文件中，配置devtool:'source-map'")])],-1)),i("h2",g,[e[12]||(e[12]=l("什么是 webpack 的热更新（Hot Module Replacement）？原理是什么？ ")),a(t,{type:"warning",text:"middle"}),e[13]||(e[13]=l()),e[14]||(e[14]=i("a",{class:"header-anchor",href:"#什么是-webpack-的热更新-hot-module-replacement-原理是什么","aria-label":'Permalink to "什么是 webpack 的热更新（Hot Module Replacement）？原理是什么？ <Badge type="warning" text="middle" />"'},"​",-1))]),e[35]||(e[35]=i("details",{class:"details custom-block"},[i("summary",null,"展开查看"),i("blockquote",null,[i("p",null,"概念：Webpack 热更新（Hot Module Replacement）是指，在应用程序运行过程中，替换、添加或删除模块，而不需要重新加载页面。 原理：HRM的原理实际上是webpack-dev-server（WDS）和浏览器之间维护了一个websocket服务，当本地资源发生变化后，webpack会先将打包生成的新的模块代码放入内存中，然后WDS向浏览器推送更新，并附带上构建时的hash，让客户端和上一次的资源进行对比，如果不同就更新，如果相同就不做任何操作。")])],-1)),i("h2",h,[e[15]||(e[15]=l("webpack 的构建流程 ")),a(t,{type:"warning",text:"middle"}),e[16]||(e[16]=l()),e[17]||(e[17]=i("a",{class:"header-anchor",href:"#webpack-的构建流程","aria-label":'Permalink to "webpack 的构建流程 <Badge type="warning" text="middle" />"'},"​",-1))]),e[36]||(e[36]=i("details",{class:"details custom-block"},[i("summary",null,"展开查看"),i("ol",null,[i("li",null,"初始化参数： 解析Webpack配置参数，合并Shell传入和webpack.config.js文件配置的参数，形成最终的配 置结果。"),i("li",null,"开始编译： 使用上一次得到的参数初始化compiler对象，注册所有配置的插件，插件监听Webpack构建生命周期的事件节点，做出相应的反应，执行对象的run方法开始执行编译。"),i("li",null,"确定入口： 从配置的entry入口，开始解析文件构建AST语法树，找出依赖，递归下去。"),i("li",null,"编译模块： 递归中根据文件类型和loader配置，调用所有配置的loader对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。"),i("li",null,"完成模块编译： 完成模块编译。在经过第四步使用Loader翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。"),i("li",null,"输出资源： 根据入口和模块之间的依赖关系，组装成一个个包含多个模块的Chunk，再把每个Chunk转换成单独的文件加入到输出列表，这步是可以修改输出内容的最后机会。"),i("li",null,"输出完成： 在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。")])],-1)),i("h2",y,[e[18]||(e[18]=l("Webpack的Tree Shaking原理 ")),a(t,{type:"warning",text:"middle"}),e[19]||(e[19]=l()),e[20]||(e[20]=i("a",{class:"header-anchor",href:"#webpack的tree-shaking原理","aria-label":'Permalink to "Webpack的Tree Shaking原理 <Badge type="warning" text="middle" />"'},"​",-1))]),e[37]||(e[37]=s(`<details class="details custom-block"><summary>展开查看</summary><blockquote><p>概念：Tree Shaking 是一个利用ES6模块静态结构特性<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>来去除生产环境下不必要代码的优化过程<br> 原理：</p></blockquote><ol><li>当Webpack分析代码时，它会标记出所有的import，export语句</li><li>然后，当Webpack确定某个模块没有被导入时，它会在生成的bundle中排除这个模块的代码</li><li>Webpack、还会进行递归的标记清理，以确保所有未使用的依赖项都不会出现在最终的bundle中</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">optimization</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    usedExports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    concatenateModules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    minimize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details>`,1)),i("h2",c,[e[21]||(e[21]=l("如何减少打包后的代码体积？ ")),a(t,{type:"warning",text:"middle"}),e[22]||(e[22]=l()),e[23]||(e[23]=i("a",{class:"header-anchor",href:"#如何减少打包后的代码体积","aria-label":'Permalink to "如何减少打包后的代码体积？ <Badge type="warning" text="middle" />"'},"​",-1))]),e[38]||(e[38]=i("details",{class:"details custom-block"},[i("summary",null,"展开查看"),i("ul",null,[i("li",null,"代码分割：将应用程序的代码划分为多个代码块，按需加载"),i("li",null,"Tree Shaking： 配置Webpack的Tree Shaking机制，去除未使用的代码"),i("li",null,"代码压缩： 使用工具如UglifyJS或Terser来压缩JavaScript代码"),i("li",null,"使用生产模式： 在Webpack中使用生产模式，通过设置mode: 'production'来启用优化"),i("li",null,"使用压缩工具： 使用现代的压缩工具，如Brotli和Gzip，来对静态资源进行压缩"),i("li",null,"使用CDN： 将项目中引用的静态资源路径修改为CDN上的路径，减少图片、字体等静态资源等打包")])],-1)),i("h2",x,[e[24]||(e[24]=l("vite 开发环境为什么比 webpack 快？")),a(t,{type:"warning",text:"middle"}),e[25]||(e[25]=l()),e[26]||(e[26]=i("a",{class:"header-anchor",href:"#vite-开发环境为什么比-webpack-快","aria-label":'Permalink to "vite 开发环境为什么比 webpack 快？<Badge type="warning" text="middle" />"'},"​",-1))]),e[39]||(e[39]=s('<details class="details custom-block"><summary>展开查看</summary><ol><li>原生 ESM 支持 <ul><li>Vite 利用了现代浏览器对 ES Modules（ESM）的原生支持。在开发环境下，Vite 可以直接运行源代码，无需像 Webpack 那样先进行打包。由于省去了打包过程，Vite 的启动速度非常快。</li></ul></li><li>按需编译 <ul><li>Vite 采用了按需编译的策略，只有当请求某个模块时，才会对该模块进行编译。这种按需加载的方式极大地缩减了编译时间。相比之下，Webpack 在构建时会对整个项目进行扫描和分析，无论模块是否被使用，都会被打包进最终的输出文件中，增加了构建时间。</li></ul></li><li>内存中的模块处理 <ul><li>Vite 将开发环境下的模块处理放在内存中，而不是像 Webpack 那样将所有模块都写入磁盘再进行读取。这种内存中的模块处理方式消除了磁盘读写的开销，提高了开发过程中的速度</li></ul></li><li>高效的 HMR（热模块替换） <ul><li>Vite 通过利用 ES 模块的特性和内存中的模块处理，实现了高效的 HMR 机制。它能够在开发过程中快速捕捉到代码的变化，并立即将更新的模块发送给浏览器，实现即时的局部刷新。相比之下，Webpack 的 HMR 机制在配置和实现上相对较为复杂</li></ul></li></ol></details>',1)),i("h2",w,[e[27]||(e[27]=l("如何提高Webpack的打包速度？ ")),a(t,{type:"warning",text:"middle"}),e[28]||(e[28]=l()),e[29]||(e[29]=i("a",{class:"header-anchor",href:"#如何提高webpack的打包速度","aria-label":'Permalink to "如何提高Webpack的打包速度？ <Badge type="warning" text="middle" />"'},"​",-1))]),e[40]||(e[40]=s('<details class="details custom-block"><summary>展开查看</summary><ul><li>使用缓存：利用Webpack的持久缓存功能，避免重复构建没有变化的代码</li><li>使用多进程/多线程构建：使用thread-loader,happypack等插件可以将构建过程分解为多个进程或线程</li><li>使用DllPlugin和HardSourceWebpackPlugin：DllPlugin 可以将第三方库预先打包成独立的文件，减少构建时间，HardSourceWebpackPlugin 可以缓存中间文件，加速后续构建过程</li><li>使用Tree Shaking：启用Tree Shaking，去除未使用的代码</li><li>移除不必要的插件：避免不必要的复杂性和性能开销</li></ul></details><ul><li><a href="https://juejin.cn/post/7350535815132659749?searchId=20240828104154DF81436634F7543C129B" target="_blank" rel="noreferrer">参考链接</a></li></ul><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>静态结构特性：ES6模块的引入和导出是静态的， 这意味着在编译时就能确定模块的依赖关系，避免了运行时动态加载的复杂性。这种静态特性有助于优化捆绑，消除未引用的代码，加快import查找速度，并支持变量检查‌ <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>',4))])}const F=n(d,[["render",f]]);export{P as __pageData,F as default};
