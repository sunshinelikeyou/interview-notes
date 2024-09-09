# React Part
[[toc]]
## 简述React的生命周期
::: details 展开查看 <Badge type="tip" text="primary" />

Reat组件的生命周期分为三个阶段：MOUNTING、RECEIVE_PROPS、UNMOUNTING
- 组件挂载时（组件状态的初始化。读取初始state和props以及两个生命周期方法，只会再初始化时运行一次）
    1. componentWillMount 会在render之前调用（在此调用setState,时不会触发re-render的，而是会进行state的合并。因此此时的this.state不是最新的，在render中才可以获取更新后的this.state）
    2. componentDidMount 会在render之后调用（此时this.state和this.props都是最新的，可以获取到DOM节点）
- 组件更新时（组件的更新过程是指父组件向下传递props或者组件自身执行setState方法时发生的一系列更新的动作）
    - 组件自身的state发生改变时更新，依次执行
        1. shouldComponentUpdate 会接收需要更新的props和state，返回一个布尔值。如果返回false，则停止更新，组件不再向下执行生命周期方法
        2. componentWillUpdate 会在组件更新之前调用
        3. render 会在组件更新之后调用
        4. componentDidUpdate 会在组件更新之后调用
    - 父组件更新props时更新
        1. componentWillReceiveProps 在此调用setState不会触发re-render，而是会进行state的合并。
        2. shouldComponentUpdate
        3. componentWillUpdate
        4. render
        5. componentDidUpdate
- 组件卸载时
    1. componentWillUnmount 会在组件卸载和销毁之前直接调用
:::
## React组件传值有哪些方式
::: details 展开查看 <Badge type="tip" text="primary" />
- 父组件向子组件传值：通过props传递
- 子组件向父组件传值：通过回调函数传递
- 跨级组件传值：通过context传递
- 兄弟组件传值：通过中间组件传递
- 全局状态管理：通过redux或者mobx
- 自定义事件：通过eventbus传递
- 跨域传值：通过jsonp或者postMessage
- 路由传值：通过路由传递
- ref：通过ref获取DOM节点或者组件实例

:::