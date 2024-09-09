# Javascript Part
[[toc]]
## js数据类型有哪些？都存储在内存的什么位置？ <Badge type="tip" text="primary" />
::: details 展开查看
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
##  ES6是什么？新增的功能特性有哪些？ <Badge type="tip" text="primary" />
::: details 展开查看 <p>[参考链接1](https://blog.csdn.net/qq_39540458/article/details/140987269) [参考链接2](https://es6.ruanyifeng.com/#docs/let)</p> 
>概念：ECMAScript 6（简称ES6）是于2015年6月正式发布的JavaScript语言的标准，正式名为ECMAScript 2015（ES2015）。     
#### 新增的功能特性：
- let、const 关键字: 引入了块级作用域的变量声明方式，let用于可重新赋值的变量，而const用于声明常量，避免了变量提升的问题。    
- 模板字符串: 使用反引号（`）和${}来嵌入表达式，简化了字符串的拼接操作，并且支持多行字符串。    
- 箭头函数: 提供了更简洁的函数书写方式，并且没有自己的this上下文，通常用于回调函数。
- 解构赋值: 允许从数组或对象中快速提取值并分配给变量，简化了数据的交换和属性的提取。
- 函数默认参数:允许在函数定义时为参数提供默认值，使得函数调用更为灵活。
- 扩展运算符:用于将数组或对象的元素展开到新的数组或对象中，简化了数组和对象的操作。
- 类:虽然JavaScript是基于原型的语言，但ES6的类语法为面向对象的编程提供了更为清晰和结构化的方式。
- 模块化: 原生支持模块的导入（import）和导出（export），促进了代码的模块化和重用。
- Promise对象: 为异步编程提供了一种更加优雅和强大的处理方式，避免了回调地狱问题。
- Symbol类型: 引入了一种新的原始数据类型，Symbol值是唯一的，常用于对象属性的键。
- Map、Set数据结构:提供了新的数据结构，Map类似于对象，但可以有更复杂的键类型；Set用于存储唯一的值。
- 迭代器和生成器:：提供了一种遍历器接口，允许对数据集合进行更细粒度的遍历控制，而生成器允许你以懒加载的方式生成数据。
- Proxy和Reflect API:提供了对对象的代理机制和反射操作，使得开发者可以自定义对象的行为。
- 新的字符串，数组和对象方法: 如String.includes(),String.startsWidth(), Array.from(), Array.of(), Object.assign(), Object.is()等，这些方法提供了更多的数组和对象操作能力。
:::


## JS function 传参按什么传递 <Badge type="tip" text="primary" />
::: details 展开查看
- 在JavaScript中，函数的参数是通过值传递的。这意味着当你调用一个函数并为其传递参数时，函数接收的是参数值的一个副本，而不是原始的值本身。这种传递方式被称为“按值传递”;   
- 如果函数参数是对象，那么传递的是对象的引用地址，但是在函数内部对该参数对象的修改将不会影响函数外部的原始对象，因为它们引用的是同一个对象实例。
```js
function fn(param) {
  param.key = 2; // 情况1：会改变原对象， 修改参数的属性值，参数使用的是传递的实参的引用地址，
  param = { key: 3 }; // 情况2：不会改变原对象， 引用地址改变了
}
const obj = { key: 1 }
fn(obj);
console.log(obj); // { key: 2 }
```
:::
## Script 的 async 和 defer 的区别？ <Badge type="tip" text="primary" />
::: details 展开查看
 ```js
<script src='a.js'></script> 
问题1：下载 a.js 的过程，是否会停止 html 渲染？ 会
问题2：下载 a.js 完之后是否会立即执行？会
<script src="b.js" async></script>
问题1：下载 b.js 的过程，是否会停止 html 渲染？ 异步下载，不会
问题2：下载 b.js 完之后是否会立即执行？会
<script src="c.js" defer></script>
问题1：下载 c.js 的过程，是否会停止 html 渲染？ 异步下载，不会
问题2：下载 c.js 完之后是否会立即执行？不会 什么时候执行？html 解析完成
 ```
 名称 | 加载时机 | 执行顺序 | 使用场景
 -|-|- | -
 普通 | 同步加载 | 阻塞页面执行  | 需要立即执行
 async(异步) | async 属性告诉浏览器立即下载脚本，并且一旦下载完成，就立即执行脚本，而不等待页面中的其他脚本或文档解析完成。 | 由于脚本是异步加载的，因此不能保证脚本按照它们在HTML中出现的顺序执行。这意味着，如果两个脚本都使用了 async 属性，那么它们的执行顺序可能是不确定的。| async 属性适用于那些不依赖于页面其他脚本或DOM元素的独立脚本。
 defer（延迟） | defer 属性也会告诉浏览器异步加载脚本，但与 async 不同的是，脚本会等待整个文档被解析完成后（DOMContentLoaded事件触发前），再按照它们在HTML中出现的顺序执行。 | 使用 defer 属性的脚本会按照它们在HTML文件中出现的顺序执行，这对于那些依赖于页面其他脚本或DOM元素的脚本来说非常重要。| defer 属性适用于那些需要等待DOM完全加载和解析后才能执行的脚本，特别是那些操作DOM或依赖于DOM元素的脚本。
:::

## es6 新增数据类型 Set WeakSet Map WeakMap如何使用 <Badge type="tip" text="primary" />
::: details 展开查看 [参考链接](https://juejin.cn/post/7183237715217874999?searchId=20240905173514257739D41874E42BAE44)
数据类型 | 键可允许类型 | 值可允许类型 | 是否可转数组 | 方法
-|-|- |- | -
Set | 无 | 任何值  | 是 | add、delete、has、clear、size(属性)、forEach、entries、values、keys、intersection、union、difference
WeakSet | 无 | 对象或Symbol值  | 否 | add、delete、has
Map | 任何值 | 任何值 | 是 | set、get、has、delete、clear、size(属性)、forEach、entries、values、keys
WeakMap | 对象或Symbol值 | 任何值  | 否| set、get、has、delete
::: tip 提示
- WeakSet 的值， WeakMap 键对某个对象的引用,不会影响其垃圾回收,如果引用的键被垃圾回收清除掉了,其对应的 键/值对 也会被清除掉，能用WeakMap,WeakSet 尽量用，WeakMap,WeakSet不可遍历
:::
## 数组和伪数组的区别,常见的伪数组有哪些,如何转换成数组<Badge type="tip" text="primary" />
::: details 展开查看
>区别   

名称 | 原型链 | 方法使用 | 定义   
-| - | - | -  
数组 | Array.prototype | push、pop、shift、unshift、splice、sort、reverse、concat、slice、join等 | 数组是一种特殊的对象，其属性由数字索引和值组成，并且拥有一个特殊的.length属性    
伪数组 | Object.prototype | 通过Array.prototype上的方法间接使用 |也称为类数组对象, 是那些具有.length属性但没有继承Array.prototype上方法的对象,伪数组可以像数组那样通过索引来访问元素，但它不能使用数组的方法

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
::: details 展开查看
方式 | 区别
-|-
typeof var | 返回值有string、number、boolean、undefined、function、object、symbol,只能判断基本类型和函数，null和引用类型都返回object
var instanceof constructor | 返回值有Boolean 检查一个对象是否是某个特定类的实例，不能判断null和undefined
var.constructor === constructor | 返回值有Function、Array、Date、RegExp等，不能判断null和undefined
Object.prototype.toString.call(var) | 返回值有[object Object]、[object Array]、[object Date]、[object RegExp]、[object Function]、[object Boolean]、[object Number]、[object String]、[object Symbol] 可以判断引用类型的具体类型
:::
##  数组的常用方法有哪些，改变原数组的有哪些 <Badge type="tip" text="primary" />
::: details 展开查看
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
::: details 展开查看
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

::: details 展开查看
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
##  Object.keys 和 Reflect.ownKeys 的区别？ <Badge type="warning" text="middle" />
::: details 展开查看
名称 | 功能 | 返回值 | 用途
-- | -- | -- | -- 
Object.keys() | 获取对象自身可枚举属性的数组 | 返回一个数组，数组中包含的是对象自身的可枚举属性键（字符串） | 主要用于遍历对象的可枚举属性，或者获取对象可枚举属性的键名数组     
Reflect.ownKeys() | 获取对象自身的所有属性（字符串和Symbol） |返回一个数组，数组中包含的是对象自身的所有键（字符串和 Symbol），不考虑枚举性 | 用于获取对象自身的所有键（包括不可枚举的属性键和 Symbol 类型的键（判断对象是否为空数组）
```js
const obj = {
  a: 1,
  [Symbol('b')]: 2,
  c: 3,
  d: undefined,
  e: null,
  f: function() {},
};

Object.defineProperty(obj, 'g', {
  value: 4,
  enumerable: false,
});

console.log(Object.keys(obj));  // ["a", "c", "d", "e", "f"]
console.log(Reflect.ownKeys(obj));  // ['a', 'c', 'd', 'e', 'f', 'g', Symbol(b)]
// 注意："b" 是一个 Symbol 类型的键，而 "g" 是一个不可枚举的键
```

:::

## ES6 的Proxy ，Reflect分别是什么，什么场景使用？ <Badge type="warning" text="middle" />
::: details 展开查看
- Proxy 是 ES6 引入的一个新的内置对象，用于定义某些操作的自定义行为（如属性查找、赋值、枚举、函数调用等）;
- Reflect 是一个内置对象，它提供了一系列与对象操作相关的方法，这些方法在功能上与 Object 对象的某些方法相似，但 Reflect 的设计初衷是提供更统一和更方便的操作接口
```js
// 应用 Proxy 实现数据倒序访问，
// 如： const  arr=[1, 2, 3, 4]; arr[-1] 返回 4，arr[-2] 返回 3。
// 具体实现代码：
let arr = [1,2,3,4];
const p = new Proxy(arr, {
     get (target, key, receiver) {
        if(!Array.isArray(target)) throw new Error('代理目标不是数组');
         const len = target.length;
         key = + key;
         let i;
         if(key> len - 1) {
           throw new Error('超出数组范围')
         } else if(key < 0) {
            if(Math.abs(key) <= len) {
                i = len + key
            } else {
                throw new Error('超出数组范围')
            }
         } else {
            i = key
         }
         return Reflect.get(target, i,receiver)
     }
})


```

:::

##  手写一个对象的深拷贝方法，考虑循环引用，栈溢出的情况 <Badge type="warning" text="middle" />
::: details 展开查看
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
::: details 展开查看
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
::: details 展开查看
模式 | 原理 | 实现方式| 优点 | 缺点
---|---|---|--- | ----
hash | 监听location对象hash值的变化来实现页面部分的更新，通过改变hash值来达到切换路由的效果 | 主要通过window.onhashchange事件监听hash值的变化，当hash值改变时，更新页面内容 | 兼容性好 | 地址栏中会显示 #，不利于SEO优化
history | 使用浏览器的History API来管理路由，可以在不重新加载页面的情况下修改URL | 通过监听window的popstate事件，通过pushState和replaceState改变url，但是不会触发页面刷新 | 美观 | 不兼容IE9
:::
##  call,apply,bind 的作用，手写一个call,apply,bind方法 <Badge type="warning" text="middle" /> 
::: details 展开查看
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
::: details 展开查看
>栈(stack)是一种遵循后进先出（LIFO）原则的有序集合。新添加的或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。   
>JavaScript中的堆（Heap）是一块用于存储动态分配内存的区域。在这个堆里，我们可以存储复杂的数据结构，比如对象和数组。不同于栈（Stack），堆的大小不是固定的，而是可以根据需要动态扩展
:::
##  什么是防抖，什么是节流，有何区别，实现节流，防抖函数 <Badge type="warning" text="middle" />
::: details 展开查看
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
    let timer = null;
    return  (...args) => {
        if(!timer) {
         timer = setTimeout(() => {
                fn.apply(this, args);
                timer = null;
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
::: details 展开查看
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
::: details 展开查看
- 闭包是指那些能够访问独立(自由)变量的函数(变量在本地使用, 但定义在一个封闭的作用域中). 换句话说, 这些函数可以「记忆」它被创建时候的环境. -- MDN      
- 闭包是有权访问另一个函数作用域的函数. -- 《JavaScript 高级程序设计(第 3 版)》      
- 函数对象可以通过作用域链相互关联起来, 函数体内部的变量都可以保存在函数作用域内, 这种特性在计算机科学文献中称为闭包. -- 《JavaScript 权威指南(第 6 版)》     
- 当函数可以记住并访问所在的词法作用域时, 就产生了闭包, 即使函数是在当前词法作用域之外执行. -- 《你不知道的 JavaScript(上卷)》   
>使用场景：保护变量，缓存计算结果，模块化防止全局污染，防抖，节流   
>缺点：内存占用，性能损耗
:::
##  说说垃圾回收机制 <Badge type="warning" text="middle" />
::: details 展开查看 [参考链接](https://juejin.cn/post/7173644980240515085?searchId=20240821104155F4B5956AB80C8E3BFB6E)
方式 | 定义 | 规则 | 优点 | 缺点
-| - | - | - | - 
引用计数法 | 引用计数（Reference Counting）算法通过跟踪每个对象被引用的次数来确定对象是否为垃圾 |  每个对象都有一个引用计数器，当一个对象被创建时，其引用计数器初始化为1，当该对象被其他对象引用时，引用计数器加1， 当该对象不再被其他对象引用时，引用计数器减1， 当引用计数器减至0时，意味着该对象不再被引用，可以被垃圾收集器回收 | 实时回收 | 循环引用，计数开销        
标记清除 | 标记-清除（Mark and Sweep）算法通过标记不再使用的对象，然后清除这些对象的内存空间，以便后续的内存分配使用。 | 它分为两个阶段：标记阶段和清除阶段。标记阶段：在标记阶段，垃圾回收器会对内存中的所有对象进行遍历，从根对象开始（通常是全局对象）递归地遍历对象的引用关系。对于每个被访问到的对象，垃圾回收器会给它打上标记，表示该对象是可达的，即不是垃圾。这个过程确保了所有可达对象都会被标记。清除阶段：在清除阶段，垃圾回收器会遍历整个内存，对于没有标记的对象，即被判定为垃圾的对象，会被立即回收，释放内存空间。这样，只有被标记的对象会被保留在内存中，而垃圾对象会被清除。 | 简单有效, 处理循环引用 | 垃圾回收过程中的停顿， 内存碎片化   

[V8垃圾回收参考链接](https://juejin.cn/post/7173644980240515085?searchId=20240821104155F4B5956AB80C8E3BFB6E)   

:::
##  什么是原型，原型链是如何产生的，原型链的查找机制  <Badge type="warning" text="middle" />
::: details 展开查看 [参考链接](https://blog.csdn.net/m0_55734030/article/details/127971640)
>显示原型：每一个类（构造函数）都有一个显示原型prototype（本质就是个对象）   
>隐式原型：每一个实例对象都有一个隐式原型__proto__，指向构造函数的原型prototype   
>原型链：查找对象实例的方法和属性时，先在自身找，找不到则沿着__proto__（可以通过Object.getPrototypeOf(obj)获取实例原型）向上查找，我们把查找__proto__形成的链条关系称原型链（实现了js继承）
:::
##  js的继承方式有哪些，如何实现继承 <Badge type="warning" text="middle" />
::: details 展开查看
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
::: details 展开查看
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
:::

## 手撕：写一个高阶函数，第一个参数传递一个函数，第二个参数传递执行的次数，第三个参数传递时间间隔，要求它返回一个新的函数，调用新函数时，它每个时间间隔执行对应的参数函数，执行一定次数后结束。 <Badge type="warning" text="middle" />
::: details 展开查看 
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
::: details 展开查看  [参考链接](https://blog.csdn.net/2301_78542842/article/details/140484283)
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

##  如何实现大文件上传，如何实现分片上传,如何实现断点续传 <Badge type="danger" text="senior" />
::: details 展开查看  [参考链接](https://juejin.cn/post/7312723512723488822?searchId=202408261110269E84D48A929E3B5265E6)
- 计算文件MD5,需要用到 ‘spark-md5’依赖包，直接 npm i spark-md5 即可
- 文件分片，用到文件的 “slice” api,将文件进行切割
- 调用服务端主要是为了确认相同文件是否上传，如果已有MD5证明已经上传过，接着上传之前失败的分片
:::
##  如何一次性渲染十万条数据还能保证页面不卡顿 <Badge type="danger" text="senior" />
::: details 展开查看 
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

