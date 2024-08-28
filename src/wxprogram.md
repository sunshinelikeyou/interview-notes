# wxprogram
## 小程序有哪几种类型文件？ <Badge type="tip" text="primary" />
::: details answer
- WXML： 微信自己定义的一套组件
- WXSS : 用于描述 WXML 的组件样式
- js : 逻辑处理
- json : 小程序页面配置
:::

## 小程序怎么跟随事件传值？ <Badge type="tip" text="primary" />
::: details answer
- 在 页面标签上通过 绑定 data-key = value ， 然后绑定点击通过 e.currentTarget.dataset.key 来获取标签上绑定的值。
```js
    <button bindtap="get"  data-name="测试"> 拿到传值</button>
    get(e) {
        console.log(e.currentTarget.dataset.name)
    }
```
:::
## 小程序wxss 与 css 的区别 <Badge type="tip" text="primary" />
::: details answer
- wxss 背景图片只能使用网络路径，不能使用本地路径
- 小程序样式使用@import 引入外部样式
- 尺寸单位为 rpx，rpx 可以根据屏幕宽度进行自适应
:::
## 小程序的双向绑定和Vue哪里不一样？ <Badge type="tip" text="primary" />
::: details answer
小程序必须使用this.setData()方法来改变data中的值, 直接修改data中的值，视图不会更新
:::
## 小程序的生命周期？ <Badge type="tip" text="primary" />
::: details answer
- onLoad 页面加载时触发。一个页面只会调用一次，用于获取用户提供的信息，做初始化数据获取操作。参数可以获取打开当前页面路径中的参数
- onShow 页面显示/切入前台时触发。
- onReady 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
- onHide 页面隐藏/切入后台时触发。 如进入其他页面，最小化等
- onUnload 页面卸载时触发。如使用back返回上一页，或navigateTo或redirectTo或navigateBack回到原页面
:::
## 小程序怎么实现下拉刷新？ <Badge type="tip" text="primary" />
::: details answer
- 需要在app.json中配置window选项，设置enablePullDownRefresh为true
- 在需要下拉刷新的页面json文件中配置"enablePullDownRefresh": true
:::
## bindtap和catchtap的区别？ <Badge type="tip" text="primary" />
::: details answer
- 都是点击事件
- bindtap 不会阻止冒泡事件向上冒泡，catchtap可以阻止冒泡事件向上冒泡
:::
## 小程序有哪些传递数据的方法？ <Badge type="tip" text="primary" />
::: deatils answer
- 页面跳转传递参数: wx.navigateTo({url: '/pages/index/index?id=1'}), 然后再目标页面通过onLoad方法获取参数
- 全局变量传递参数：App({globalData:{id:1}})，然后在目标页面通过getApp().globalData.id获取
- 页面缓存传递参数：wx.setStorageSync('id', 1), 然后在目标页面通过wx.getStorageSync('id')获取
- 事件传递参数：在父组件中绑定事件，然后在子组件中通过this.triggerEvent('事件名',{参数})传递
:::
## 简述下 wx.naivageTo(), wx.redirectTo(),  wx.switchTab(), wx.navigateBack(), wx.reLaunch() 的区别？ <Badge type="tip" text="primary" />
::: details answer
- wx.naivageTo() 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面
- wx.redirectTo() 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
- wx.switchTab() 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
- wx.navigateBack() 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层
- wx.reLaunch() 关闭所有页面，打开到应用内的某个页面
:::
## 小程序wx:if 和 hidden的区别？ <Badge type="tip" text="primary" />
::: details answer
- wx:if 条件渲染，在页面中隐藏或显示某个元素，如果为true则显示该元素，如果为false则不显示该元素 相当于vue中的v-if
- hidden 条件渲染，在页面中隐藏或显示某个元素，如果为true则不显示该元素，如果为false则显示该元素 相当于vue中的v-show
:::
## app,json 全局配置文件描述？ <Badge type="tip" text="primary" />
::: details answer
- window 用于设置小程序的状态栏、导航条、标题、窗口背景色
- tabBar 如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 设置 tab 栏的表现，包括颜色、字体、位置, 最多可以设置5个tab，最少2个tab
- pages 用于描述小程序所有页面路径，数组的第一项代表小程序的初始页面
:::