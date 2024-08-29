# Javascript Part
[[toc]]
## js数据类型有哪些？都存储在内存的什么位置？ <Badge type="tip" text="primary" />
::: details 回答
数据类型 | 类型 | 存储位置
-|-|-
基本类型 | Number（-2^53 ~ 2^53）、String、Boolean、Null、Undefined、Sybmol、BigInt | 栈
引用类型 | Object(Function Array Date RegExp)  | 数据在堆，引用在栈
>堆和栈的区别
- 堆比栈空间大，栈比堆运行速度快。
- 堆内存是无序存储，可以根据引用直接获取。
- 基础数据类型比较稳定，而且相对来说占用的内存小。
- 引用数据类型大小是动态的，而且是无限的。
:::
## es6 新增数据类型 Set WeakSet Map WeakMap 是什么，如何使用 <Badge type="tip" text="primary" />
::: details 回答
数据类型 | 键可允许类型 | 值可允许类型 | 是否可用for of迭代 | 是否可转数组 | 方法
-|-|- |- | - | -
Set | 无 | 任何值 | 是 | 是 | add、delete、has、clear、size(属性)、forEach、entries、values、keys、intersection、union、difference
WeakSet | 无 | 对象 | 是 | 否 | add、delete、has
Map | 任何值 | 任何值 | 是 | 是 | set、get、has、delete、clear、size(属性)、forEach、entries、values、keys
WeakMap | 对象 | 任何值 | 是 | 否| set、get、has、delete
>堆和栈的区别
- 堆比栈空间大，栈比堆运行速度快。
- 堆内存是无序存储，可以根据引用直接获取。
- 基础数据类型比较稳定，而且相对来说占用的内存小。
- 引用数据类型大小是动态的，而且是无限的。
:::
## js 数组和伪数组的区别，常见的伪数组有哪些？如何转换成数组<Badge type="tip" text="primary" />
::: details 回答
>常见的伪数组
- arguments
- DOM操作返回的 NodeList， HTMLCollection
- jQuery 对象 $('div')   
>转换
- Array.prototype.slice.call(arrLike)
- Array.from(arrLike)
- ... 拓展运算符
- $('div').get();
:::
##  如何判断数据类型，有何区别 <Badge type="tip" text="primary" />
::: details 回答
方式 | 区别
-|-
typeof var | 返回值有string、number、boolean、undefined、function、object、symbol,只能判断基本类型和函数，null和引用类型都返回object
var instanceof constructor | 返回值有Boolean 检查一个对象是否是某个特定类的实例，不能判断null和undefined
var.constructor === constructor | 返回值有Function、Array、Date、RegExp等，不能判断null和undefined
Object.prototype.toString.call(var) | 返回值有[object Object]、[object Array]、[object Date]、[object RegExp]、[object Function]、[object Boolean]、[object Number]、[object String]、[object Symbol] 可以判断引用类型的具体类型
:::
##  数组的常用方法有哪些，改变原数组的有哪些 <Badge type="tip" text="primary" />
::: details 回答
方法 | 用法 | 是否改变原数组 | 返回值 | 传参
-|-|-|- | -
push | 尾加| 是 | newLength | （item）
unshift | 头加 | 是 | newLength |  （item）
pop | 尾减 | 是 | deleteItem  |  无
shift | 头减 | 是 | deleteItem | 无
splice |增删| 是 | deleteItem  | （start，dCount?，item?）
sort | 排序 | 是 | sortArr | (fn?: (a，b) => Boolean)
reverse| 倒序 | 是 | reverseArr | 无
fill | 填充 | 是 | newArr | （item，start?，end?）
flat | 扁平化 | 否 | newArr （n）
join | 拼接 | 否 | str | （separator= ','）
includes | 包含 | 否 | Boolean | （item，start）
indexOf | 查找下标 | 否 | elementIndex | （item，start）
lastIndexOf | elementLastIndex | 否 | 元素下标 | （item，start）
concat | 合并 | 否 | newArr | （...item?）
slice | 剪切 | 否 | newArr | （start，end）   
map | 派生 | 否 | newArr  | （item，index，arr）
filter | 过滤 | 否 | newArr | （item，index，arr）
forEach | 循环 |否 | undefined | （item，index，arr）
every | 全满足 | 否 | Boolean | （item，index，arr）
some | 有满足 |否 | Boolean | （item，index，arr）
find | 查找某项| 否 | item | （item，index，arr）
findIndex |查找下标 | 否 | itemIndex | （item，index，arr）
reduce |累积操作 | 否 | initV | （cb(pre，cur，index?，arr? ), initV?）
:::
## 如何实现数组去重，如何实现数组扁平化？ <Badge type="tip" text="primary" />
::: details 回答
> 数组去重
```js
// 基本类型数组
let arr = [1,2,3,4,5,2,2,1,5];
let newArr = [...new Set(arr)];
// 引用类型数组
// let newArr = [...new Set(arr.map((item)=>JSON.stringify(item)))].map((item)=>JSON.parse(item));
function unique(arr) {
    return arr.reduce((prev,next)=>{
        prev.find(item => item.id === next.id) ? '' : prev.push(next);
        return prev;
    },[]);  
}
unique([{id: 1,name: 'a'},{id:2,name: 'b'},{id:1,name: 'a'},{id:3,name: 'c'}]);// [{id: 1,name: 'a'},{id:2,name: 'b'},{id:3,name: 'c'}]
```
> 数组扁平化
```js
// 系统方法  
// let newArr = arr.flat(Infinity);
function flatten(arr) {
    return arr.reduce((prev,next)=>{
        prev = Array.isArray(next) ? prev.concat(flatten(next)) : prev.concat(next);
        return prev;
    },[])
}
flatten([1,[2,3],[[4,5]]]); // [1, 2, 3, 4, 5]
```
>对象扁平化
```js
 var entryObj = {
    a: {
        b: {
            c: {
                    dd: 'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
}
// 要求转换成如下对象
var outputObj = {
	'a.b.c.dd': 'abcdd',
	'a.d.xx': 'adxx',
	'a.e': 'ae'
}

function flat(obj, path = '', res = {}, isArray) {
    for (let [k, v] of Object.entries(obj)) {
        if (Array.isArray(v)) {
            let _k = isArray ? `${path}[${k}]` : `${path}${k}`;
            flat(v, _k, res, true);
        } else if (typeof v === 'object') {
            let _k = isArray ? `${path}[${k}].` : `${path}${k}.`;
            flat(v, _k, res, false);
        } else {
            let _k = isArray ? `${path}[${k}]` : `${path}${k}`;
            res[_k] = v;
        }
    }
    return res;
}
   
```
:::
##  常见的数组排序方法有哪些，各自的时间复杂度是多少 <Badge type="warning" text="middle" />

::: details 回答
>冒泡排序
```js
function bubbleSort(arr) {
    for(let i = 0; i < arr.length -1; i++) {
        let isChange = false;
        for (let j = 0;j < arr.length - 1 - i;j++) {
            if(arr[j] > arr[j+1]) {
                isChange = true;
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
        if(!isChange) return arr;
    }
    return arr;
}
bubbleSort([4,2,3,1,5]);  // [1, 2, 3, 4, 5]
```
>快速排序 
```js
function quickSort(arr) {
    if(arr.length <=1) return arr;
    const pivotIndex = Math.floor(arr.length / 2),
          pivot = arr[pivotIndex],
          left = [],
          right = [];
    for(let i = 0;i < arr.length;i++) {
        if(i !== pivotIndex) {
            arr[i] < pivot? left.push(arr[i]) : right.push(arr[i]);
        }
    }
    // 递归调用
    return quickSort(left).concat(pivot,quickSort(right));
}
quickSort([4,2,3,1,5]);  // [1, 2, 3, 4, 5]
```

>选择排序 
```js
function selectSort (arr) {
   for(let i = 0; i < arr.length; i ++ ){
       let min = i;
       for(let j = i + 1; j < arr.length; j ++){
            if(arr[min] > arr [j]) {
                min = j
            }
       }
       [arr[i],arr[min]] = [arr[min], arr[i]]
   }
    return arr;
}
selectSort ([4,2,5,1,3]) // [1, 2, 3, 4, 5]
```
>插入排序   
>希尔排序   
>归并排序   
>堆排序   

:::
##  手写一个对象的深拷贝方法，考虑循环引用，栈溢出的情况 <Badge type="warning" text="middle" />
::: details 回答
```js
function deepClone(obj, map = new WeakMap()) {
    if(typeof obj !== 'object' || obj === null) return obj;
    let newObj = Array.isArray(obj) ? [] : {};
    // 解决循环引用 没有这个map 会出现栈溢出
    if(map.has(obj)) return map.get(obj);
    map.set(obj, newObj);
    for(let key in obj) {
        if(obj[key] instanceof Object) {
            newObj[key] = deepClone(obj[key], map);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
deepClone({a:1,b:[2,{c:3}]});
```
:::
##  树，数组数据格式互相转换 <Badge type="warning" text="middle" />
::: details 回答
>树转数组
```js
let tree = [
{
  id: 1,
  name: 'root',
  children: [
    { id: 2, name: 'child1', parentId: 1 },
    { id: 3, name: 'child2', parentId: 1, children: [
        { id: 4, name: 'child2-1', parentId: 3 }
      ] }
  ]
}, 
{
    id: 5, name: 'root2',
}
];
function treeToArr(tree, changeOrign = false) {
    let res = [];
    if(!Array.isArray(tree) || !tree) return res;
    let copyTree = changeOrign ? tree : JSON.parse(JSON.stringify(tree));
    function travers(arr) {
         for(let i = 0;i < arr.length;i++) {
            res.push(arr[i]);
            if(arr[i].children && arr[i].children.length > 0) {
                travers(arr[i].children);
                delete arr[i].children;
            }
            
        }   
    }
    travers(copyTree);
    return res;
}
```
>数组转树
```js
let array = [
  { id: 1, name: 'root', parentId: 'undefined' },
  { id: 2, name: 'child1', parentId: 1 },
  { id: 3, name: 'child2', parentId: 1 },
  { id: 4, name: 'child2-1', parentId: 3 }
];
function arrToTree(arr) {
    let res = [],
        arrMap = {};
    for (let i = 0; i < arr.length; i++) {
        arrMap[arr[i].id] = {...arr[i],children: []}
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].parentId) {
            arrMap[arr[i].parentId].children.push(arrMap[arr[i].id])
        } else {
            res.push(arrMap[arr[i].id]);
        }
    }
    return res;
}
```
:::
##  路由模式history，hash模式的区别，原理，实现方式 <Badge type="warning" text="middle" />
::: details 回答
模式 | 原理 | 实现方式| 优点 | 缺点
---|---|---|--- | ----
hash | 监听location对象hash值的变化来实现页面部分的更新，通过改变hash值来达到切换路由的效果 | 主要通过window.onhashchange事件监听hash值的变化，当hash值改变时，更新页面内容 | 兼容性好 | 地址栏中会显示 #，不利于SEO优化
history | 使用浏览器的History API来管理路由，可以在不重新加载页面的情况下修改URL | 通过监听window的popstate事件，通过pushState和replaceState改变url，但是不会触发页面刷新 | 美观 | 不兼容IE9
:::
##  call,apply,bind 的作用，手写一个call,apply,bind方法 <Badge type="warning" text="middle" /> 
::: details 回答
*call和apply都是为了改变某个函数中this的指向，call和apply的区别在于传参的方式不同*
>call 实现
```js
Function.prototype.myCall = function (context, ...args) {
     context = context || window;
     const fn = Symbol('当前函数');
     context[fn] = this;
     const result = context[fn](...args);
     delete context[fn];
     return result;
}
let a = 'haha';
let obj = {a: 'xixi'};
function fn (...params) {
    console.log(this.a, params);
}
fn.myCall(obj,1,2);
```
>apply 实现
```js
Function.prototype.myApply = function (context, args) {
     context = context || window;
     const fn = Symbol('当前函数');
     context[fn] = this;
     const result =  context[fn](...args);
     delete context[fn];
     return result;
}
let a = 'haha';
let obj = {a: 'xixi'};
function fn (params) {
    console.log(this.a, params);
}
fn.myApply(obj,[1,2]);
```
>bind 实现
```js
Function.prototype.myBind = function (context, ...args1) {
    return (...args2) => this.apply(context, [...args1, ...args2])
}
let a = 'haha';
let obj = {a: 'xixi'};
function aaa (params) {
    console.log(this.a, params);
}
aaa.myBind(obj,1)();
```

:::
##  说说堆，栈区别特点 <Badge type="warning" text="middle" />
::: details 回答
>栈(stack)是一种遵循后进先出（LIFO）原则的有序集合。新添加的或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。   
>JavaScript中的堆（Heap）是一块用于存储动态分配内存的区域。在这个堆里，我们可以存储复杂的数据结构，比如对象和数组。不同于栈（Stack），堆的大小不是固定的，而是可以根据需要动态扩展
:::
##  什么是防抖，什么是节流，有何区别，实现节流，防抖函数 <Badge type="warning" text="middle" />
::: details 回答
名称 | 定义 | 场景
---|--- | --- 
防抖 | 确保在指定的时间间隔结束后执行一次函数。如果在这段时间内多次触发事件，则只有最后一次事件会在延迟后执行函数。（回城） | 搜索框输入、表单验证
节流 | 确保在指定的时间间隔内最多执行一次函数。无论在这段时间内触发了多少次事件，只有第一次事件会立即执行函数。（技能） | 滚动事件、按钮点击   
>防抖实现
```js
function debounce(fn, delay) {
    let timer = null;
    return  (...args) => {
        if (timer) {
           clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}
```
>节流实现
```js
function throttle(fn, delay) {
    let flag = false;
    return  (...args) => {
        if(!flag) {
            flag = true;
            setTimeout(() => {
                fn.apply(this, args);
                flag = false;
            }, delay);
        }
    }
}
```
:::
##  什么是事件循环，宏任务和微任务，事件循环的执行顺序,如下代码输出顺序 <Badge type="warning" text="middle" />
```js
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');
```
::: details 回答
1. script start   
2. async1 start   
3. async2   
4. promise1   
5. script end 
6. async1 end  
7. promise2   
8. setTimeout   

>定义：当主线程执行完当前的同步任务后，会检查事件队列中是否有待处理的任务。如果有，主线程会取出事件并执行对应的回调函数。这个循环的过程被称为事件循环（Event Loop），它由主线程和任务队列两部分组成。主线程负责执行同步任务，而异步任务则通过任务队列进行处理。这种机制保证了异步任务在适当的时机能够插入执行，从而实现了JavaScript的非阻塞异步执行。    
>宏任务和微任务：宏任务包括：script、setTimeout、setInterval、setImmediate、I/O、UI rendering、requestAnimationFrame，微任务包括：Promise、MutationOberver、process.nextTick（nodejs）、queueMicrotask（nodejs）   
>事件循环的执行顺序：同步任务 -> 微任务 -> 宏任务   

:::
##  什么是闭包，闭包的优缺点，使用场景 <Badge type="warning" text="middle" />
::: details 回答
- 闭包是指那些能够访问独立(自由)变量的函数(变量在本地使用, 但定义在一个封闭的作用域中). 换句话说, 这些函数可以「记忆」它被创建时候的环境. -- MDN      
- 闭包是有权访问另一个函数作用域的函数. -- 《JavaScript 高级程序设计(第 3 版)》      
- 函数对象可以通过作用域链相互关联起来, 函数体内部的变量都可以保存在函数作用域内, 这种特性在计算机科学文献中称为闭包. -- 《JavaScript 权威指南(第 6 版)》     
- 当函数可以记住并访问所在的词法作用域时, 就产生了闭包, 即使函数是在当前词法作用域之外执行. -- 《你不知道的 JavaScript(上卷)》   
>使用场景：保护变量，缓存计算结果，模块化防止全局污染，防抖，节流   
>缺点：内存占用，性能损耗
:::
##  说说垃圾回收机制 <Badge type="warning" text="middle" />
::: details 回答 [参考链接](https://juejin.cn/post/7173644980240515085?searchId=20240821104155F4B5956AB80C8E3BFB6E)
方式 | 定义 | 规则 | 优点 | 缺点
-| - | - | - | - 
引用计数法 | 引用计数（Reference Counting）算法通过跟踪每个对象被引用的次数来确定对象是否为垃圾 |  每个对象都有一个引用计数器，当一个对象被创建时，其引用计数器初始化为1，当该对象被其他对象引用时，引用计数器加1， 当该对象不再被其他对象引用时，引用计数器减1， 当引用计数器减至0时，意味着该对象不再被引用，可以被垃圾收集器回收 | 实时回收 | 循环引用，计数开销        
标记清除 | 标记-清除（Mark and Sweep）算法通过标记不再使用的对象，然后清除这些对象的内存空间，以便后续的内存分配使用。 | 它分为两个阶段：标记阶段和清除阶段。标记阶段：在标记阶段，垃圾回收器会对内存中的所有对象进行遍历，从根对象开始（通常是全局对象）递归地遍历对象的引用关系。对于每个被访问到的对象，垃圾回收器会给它打上标记，表示该对象是可达的，即不是垃圾。这个过程确保了所有可达对象都会被标记。清除阶段：在清除阶段，垃圾回收器会遍历整个内存，对于没有标记的对象，即被判定为垃圾的对象，会被立即回收，释放内存空间。这样，只有被标记的对象会被保留在内存中，而垃圾对象会被清除。 | 简单有效, 处理循环引用 | 垃圾回收过程中的停顿， 内存碎片化   

[V8垃圾回收参考链接](https://juejin.cn/post/7173644980240515085?searchId=20240821104155F4B5956AB80C8E3BFB6E)   

:::
##  什么是原型，原型链是如何产生的，原型链的查找机制  <Badge type="warning" text="middle" />
::: details 回答 [参考链接](https://blog.csdn.net/m0_55734030/article/details/127971640)
>显示原型：每一个类（构造函数）都有一个显示原型prototype（本质就是个对象）   
>隐式原型：每一个实例对象都有一个隐式原型__proto__，指向构造函数的原型prototype   
>原型链：查找对象实例的方法和属性时，先在自身找，找不到则沿着__proto__（可以通过Object.getPrototypeOf(obj)获取实例原型）向上查找，我们把查找__proto__形成的链条关系称原型链（实现了js继承）
:::
##  js的继承方式有哪些，如何实现继承 <Badge type="warning" text="middle" />
::: details 回答
- 原型链继承
- 构造函数继承
- 组合继承（原型链加构造函数）
- 原型式继承
- 寄生式继承
- ES6 的 class 的 extends 关键字（语法糖，底层还是原型链）
- 混合模式继承（原型链与构造函数的组合）
- ES6 的 Proxy 和 Reflect 实现继承
:::
## IntersectionObserver, MutationObserver, ResizeObserver API 是做什么的，如何使用 <Badge type="warning" text="middle" />
::: details 回答
名称 | 定义 | 应用场景 | 优点 
-| - | - | - 
IntersectionObserver | 用于监听元素是否进入视口，进入视口时触发回调函数 | 懒加载，图片预加载，虚拟列表，实现无限滚动 | 监听不随着目标元素的滚动而触发，性能消耗极低。 
MutationObserver | 监听DOM变化，如新增节点、修改属性、删除节点等 |自动保存表单，自动加载数据，观察者模式 | 兼容性较好，性能消耗低  
ResizeObserver | 监听元素大小变化，如窗口大小变化等 | 实现自适应布局，响应式设计 | 可以监听任意元素大小变化
>IntersectionObserver  使用
```js
// 构造函数 IntersectionObserver(callback, options)
// callback回调参数entries: 监听器所监听的目标元素集合
// 回调函数中entries参数是一个数组，每个元素都是一个IntersectionObserverEntry对象
// IntersectionObserverEntry对象的属性
// intersectionRatio：出现在视口中的元素与整体的比例
// boundingClientRect：元素的大小及位置信息
// intersectionRect：元素出现在视口中这部分的大小及位置信息
// rootBounds：root 的大小及位置信息
// target：被监听的元素
// time：触发该事件的时间，单位为毫秒，页面加载时为 0
// isIntersecting：是出现还是消失

// options 参数
// root：根元素，默认值为null，即整个视口
// rootMargin：root的margin，默认值为0
// threshold：阈值，默认值为0
const observer = new IntersectionObserver(entries => {
    console.log(entries)
}, {
    thresold: 1,
})
observer.observe(document.getELementById('target'))
```
>MutationObserver  使用
```js
// 构造函数 MutationObserver(callback)
// callback回调参数mutationList: 监听器所监听的目标元素集合
// 回调函数中mutationList参数是一个数组，每个元素都是一个MutationRecord对象
// MutationRecord对象的属性
// type：监听的事件类型，如attributes、characterData、childList,subtree
// target：被监听的元素
// addedNodes：新增的节点集合
// removedNodes：删除的节点集合
// previousSibling：前一个兄弟节点
// nextSibling：后一个兄弟节点
// attributeName：属性名称，如class,style等
// attributeNamespace：属性命名空间，如xmlns,http://www.w3.org/1999/xhtml等
// oldValue：属性值，如class="a"中的a

// config:MutationObserverInit对象
// attributes：是否监听属性变化，默认值为false
// childList：是否监听子节点变化，默认值为false
// characterData：是否监听文本内容的变化，默认值为false
// subtree：是否监听后代节点变化，默认值为false

const config = {
   attributes: true, // 监听属性变化
   childList: true, // 监听子节点变化
   characterData: true, // 监听文本内容的变化
   subtree: true // 监听后代节点变化
}
const observer = new MutationObserver(mutationList => {
    console.log(mutationList)
})
observer.observe(document.getELementById('target'), config);
```
>ResizeObserver  使用
```js
// 构造函数 ResizeObserver(callback)
// callback回调参数entries: 监听器所监听的目标元素集合
// 回调函数中entries参数是一个数组，每个元素都是一个ResizeObserverEntry对象
// ResizeObserverEntry对象的属性
// contentRect：元素的大小及位置信息
// borderBoxSize：元素的大小信息
// devicePixelContentBoxSize：元素的大小信息，以设备像素为单位
// target：被监听的元素
// contentBoxSize：元素的大小信息，以CSS像素为单位

const observer = new ResizeObserver(entries => {
    console.log(entries)
})
observer.observe(document.getELementById('target'))
```

## 手撕：写一个高阶函数，第一个参数传递一个函数，第二个参数传递执行的次数，第三个参数传递时间间隔，要求它返回一个新的函数，调用新函数时，它每个时间间隔执行对应的参数函数，执行一定次数后结束。 <Badge type="warning" text="middle" />
::: details 回答 
```js
function timer(fn, times = 3, interval = 3000) {
     return  (...arg) => {
        for(let i = 0; i < times; i ++) {
            setTimeout(function () {
                fn.call(this, ...arg);
            }, interval/3 * i, i)
        }  
    }
}
```
:::

## 函数柯里化 <Badge type="warning" text="middle" />
::: details 回答  [参考链接](https://blog.csdn.net/2301_78542842/article/details/140484283)
>函数柯里化是指将一个多参数的函数转换成多个单参数函数，并且返回一个新的函数。
> 实现
```js
function curry(fn) {
    return function _curry(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function(...args2) {
                return _curry(...args.concat(args2))
            }
        }
    }
}
// 示例函数
function add(a, b, c) {
  return a + b + c;
}

// 柯里化add函数
const curriedAdd = curry(add);

// 使用柯里化后的函数
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2)(3)); // 6
```
> 柯里化使用场景
- 计算器函数
```js
function add(x) {
  return function (y) {
    return x + y;
  };
}
 
const addTen = add(10);
console.log(addTen(5)); // 输出 15
console.log(addTen(10)); // 输出 20
```
- 函数组合
```js

function addTwo(x) {
  return x + 2;
}
 
function multiplyByThree(x) {
  return x * 3;
}
 
const compose = (f, g) => (x) => f(g(x));
 
const addTwoAndMultiplyByThree = compose(multiplyByThree, addTwo);
console.log(addTwoAndMultiplyByThree(4)); // 输出 18
```
- 校验函数
```js
 
function validate(rule) {
  return function (data) {
    // 执行校验规则并返回结果
    // ...
  };
}
 
const validateEmail = validate("email");
console.log(validateEmail("example@example.com")); // 输出 true
 
const validateNumber = validate("number");
console.log(validateNumber("10")); // 输出 false  
```
- 优点：提高函数复用性，延迟执行，参数复用
- 缺点：难以理解和维护，性能影响
:::
:::
##  如何实现大文件上传，如何实现分片上传,如何实现断点续传 <Badge type="danger" text="senior" />
::: details 回答  [参考链接](https://juejin.cn/post/7312723512723488822?searchId=202408261110269E84D48A929E3B5265E6)
- 计算文件MD5,需要用到 ‘spark-md5’依赖包，直接 npm i spark-md5 即可
- 文件分片，用到文件的 “slice” api,将文件进行切割
- 调用服务端主要是为了确认相同文件是否上传，如果已有MD5证明已经上传过，接着上传之前失败的分片
:::
##  如何一次性渲染十万条数据还能保证页面不卡顿 <Badge type="danger" text="senior" />
::: details 回答 
>时间分片，下拉太快会有闪屏  [参考链接](https://juejin.cn/post/7354940230301057033)
```js
function timeSlice (total = 100000, once = 20, ul = document.getElementById("container");) {
    function loop(curTotal) {
      if (curTotal <= 0) return;
      let pageCount = Math.min(curTotal, once);
      window.requestAnimationFrame(() => {
        let fragment = document.createDocumentFragment(); // 创建一个虚拟文档碎片
        for (let i = 0; i < pageCount; i++) {
          let li = document.createElement("li");
          li.innerHTML = ~~(Math.random() * total);
          fragment.appendChild(li); // 挂到fragment上
        }
        ul.appendChild(fragment); // 现在才回流
        loop(curTotal - pageCount);
      });
    }
    loop(total);
}
```
>虚拟滚动  [参考链接](https://juejin.cn/post/7354940230301057033)
```js

```
:::

