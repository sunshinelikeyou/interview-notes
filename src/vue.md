# Vue Part
[[toc]]
## 什么是MVVM模型？和MVC有什么区别？ <Badge type="tip" text="primary" />
::: details 回答
>MVVM是Model-View-ViewModel的缩写。它是一种基于前端开发的架构模式，m表示模型（model），v表示视图（view），vm是视图模型（view-model）的缩写，用于连接视图和数据。和MVC架构不同的是，它采用双向绑定，数据的变化会自动更新到视图，视图的变化也会自动更新到数据。用户只需要关注数据的变化，而不需要手动操作DOM。降低耦合，有利于前后端分离开发。
:::
## vue的生命周期有哪些？各个生命周期的作用是什么？ <Badge type="tip" text="primary" />
::: details 回答 
vue2生命周期 | vue3生命周期 | 调用时机
-|- |-
beforeCreate| setup | 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
created | setup | 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
beforeMount | onBeforeMount | 在挂载开始之前被调用，相关的 render 函数首次被调用。此时模板编译完成，但是还未将模板渲染成dom
mounted | onMounted | el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
beforeUpdate | onBeforeUpdate | 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
updated | onUpdated | 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
beforeDestroy | onBeforeUnmount |  实例销毁之前调用。在这一步，实例仍然完全可用。
destroyed | onUnmounted | 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁

:::
## vue中computed和watch的区别是什么？ <Badge type="tip" text="primary" />
::: details 回答
名称 | 作用 | 区别
--- | --- | --- 
computed | 计算属性 | 计算属性值会基于其响应式依赖被缓存,只有依赖值发生变化才会重新计算,Getter 不应有副作用,避免直接修改计算属性值
watch | 监听属性 | 不缓存,监听属性值的变化,更改 DOM，动画效果，或是根据异步操作的结果去修改另一处的状态,监听多个数据源变化，更灵活
function | 方法 | 不依赖收集，不缓存
:::
## vue的组件通信有哪些方式？都在什么场景下使用？ <Badge type="tip" text="primary" />
::: details 回答
场景 | 通信方式 
--- | --- 
父子组件 | props、$emit、$parent、$children、ref、provide、inject
兄弟组件 | eventBus、vuex、pinia、mitt
:::
## vue的双向数据绑定原理是什么？为什么vue3的性能更好？diff算法，ast 模板解析 <Badge type="warning" text="middle" />
::: details 回答
vue2双向数据绑定是通过Object.defineProperty()来实现的。vue2通过递归遍历所有属性，给每个属性添加getter和setter方法。通过getter和setter方法来监听数据变化，当数据发生变化时，触发对应属性的setter方法，从而改变对应的DOM。对于对象属性的新增和删除，vue2无法监听到变化。只能通过vue.set()方法来新增和删除属性。 数据劫持 =》 依赖收集 =》 视图更新   
vue3通过proxy实现，proxy比defineProperty更优。Proxy可以直接监听数组和嵌套对象的变化，在初次渲染和更新时减少了需手动递归处理的性能开销。

- 源码组织方式变化：使用 TS 重写
- 支持 Composition API：基于函数的API，更加灵活组织组件逻辑（vue2用的是options api）
- 响应式系统提升：Vue3中响应式数据原理改成proxy，可监听动态新增删除属性，以及数组变化
- 编译优化：vue2通过标记静态根节点优化diff，Vue3 标记和提升所有静态根节点，diff的时候只需要对比动态节点内容
- 打包体积优化：移除了一些不常用的api（inline-template、filter）
- 生命周期的变化：使用setup代替了之前的beforeCreate和created

:::