import{_ as i,D as r,c as s,j as e,a as t,I as a,a4 as o,o as n}from"./chunks/framework.uym2WrGe.js";const U=JSON.parse('{"title":"React Part","description":"","frontmatter":{},"headers":[],"relativePath":"src/react.md","filePath":"src/react.md","lastUpdated":1724913643000}'),c={name:"src/react.md"},d=o('<h1 id="react-part" tabindex="-1">React Part <a class="header-anchor" href="#react-part" aria-label="Permalink to &quot;React Part&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#简述react的生命周期">简述React的生命周期</a></li><li><a href="#react组件传值有哪些方式">React组件传值有哪些方式</a></li></ul></nav><h2 id="简述react的生命周期" tabindex="-1">简述React的生命周期 <a class="header-anchor" href="#简述react的生命周期" aria-label="Permalink to &quot;简述React的生命周期&quot;">​</a></h2>',3),p={class:"details custom-block"},_=o("<p>Reat组件的生命周期分为三个阶段：MOUNTING、RECEIVE_PROPS、UNMOUNTING</p><ul><li>组件挂载时（组件状态的初始化。读取初始state和props以及两个生命周期方法，只会再初始化时运行一次） <ol><li>componentWillMount 会在render之前调用（在此调用setState,时不会触发re-render的，而是会进行state的合并。因此此时的this.state不是最新的，在render中才可以获取更新后的this.state）</li><li>componentDidMount 会在render之后调用（此时this.state和this.props都是最新的，可以获取到DOM节点）</li></ol></li><li>组件更新时（组件的更新过程是指父组件向下传递props或者组件自身执行setState方法时发生的一系列更新的动作） <ul><li>组件自身的state发生改变时更新，依次执行 <ol><li>shouldComponentUpdate 会接收需要更新的props和state，返回一个布尔值。如果返回false，则停止更新，组件不再向下执行生命周期方法</li><li>componentWillUpdate 会在组件更新之前调用</li><li>render 会在组件更新之后调用</li><li>componentDidUpdate 会在组件更新之后调用</li></ol></li><li>父组件更新props时更新 <ol><li>componentWillReceiveProps 在此调用setState不会触发re-render，而是会进行state的合并。</li><li>shouldComponentUpdate</li><li>componentWillUpdate</li><li>render</li><li>componentDidUpdate</li></ol></li></ul></li><li>组件卸载时 <ol><li>componentWillUnmount 会在组件卸载和销毁之前直接调用</li></ol></li></ul>",2),u=e("h2",{id:"react组件传值有哪些方式",tabindex:"-1"},[t("React组件传值有哪些方式 "),e("a",{class:"header-anchor",href:"#react组件传值有哪些方式","aria-label":'Permalink to "React组件传值有哪些方式"'},"​")],-1),m={class:"details custom-block"},h=e("ul",null,[e("li",null,"父组件向子组件传值：通过props传递"),e("li",null,"子组件向父组件传值：通过回调函数传递"),e("li",null,"跨级组件传值：通过context传递"),e("li",null,"兄弟组件传值：通过中间组件传递"),e("li",null,"全局状态管理：通过redux或者mobx"),e("li",null,"自定义事件：通过eventbus传递"),e("li",null,"跨域传值：通过jsonp或者postMessage"),e("li",null,"路由传值：通过路由传递"),e("li",null,"ref：通过ref获取DOM节点或者组件实例")],-1);function f(P,R,T,x,N,S){const l=r("Badge");return n(),s("div",null,[d,e("details",p,[e("summary",null,[t("回答 "),a(l,{type:"tip",text:"primary"})]),_]),u,e("details",m,[e("summary",null,[t("回答 "),a(l,{type:"tip",text:"primary"})]),h])])}const D=i(c,[["render",f]]);export{U as __pageData,D as default};
