# Markdown 常用语法{#index}
## 标题

**Input**

```md
# 标题
## 标题
### 标题
#### 标题
##### 标题
###### 标题
```

## Ouput
# 标题
## 标题
### 标题
#### 标题
##### 标题
###### 标题

## 字体
**Input**
```md
*斜体*   正常  **加粗**   ***斜体加粗***     ~~删除线~~
```
**Output**   
_斜体_ 正常 **加粗** **_斜体加粗_** ~~删除线~~

## 代码块
**Input**
````
``` ↩ 代码块 ↩ ```   ↩ 代表回车
````
**Output**
```md
代码块
```

## 链接
**Input**
```md
[链接](https://github.com/vuejs/vitepress)
```
**Output**
[链接](https://github.com/vuejs/vitepress)

## 引用
**Input**
```md
> 引用
>> 多级引用
```
**Output**
> 引用
>
> > 多级引用

## 无序列表
**Input**
```md
- 列表
* 列表
+ 列表
```
**Output**
- 列表
* 列表
+ 列表

## 有序列表
**Input**
```md
1. 列表
```
**Output**
1. 列表

## 表格
**Input**
```md
姓名|学号|分数
-|-|-
张三|001|95
李四|002|96
```
**Output**
| 姓名 | 学号 | 分数 |
| ---- | ---- | ---- |
| 张三 | 001  | 95   |
| 李四 | 002  | 96   |

## 锚点
**Input**
```md
跳转[顶部](#index)
```
**Output**
跳转[顶部](#index)

## Custom Containers
**Input**
```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
