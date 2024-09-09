# Algorithm Part

## 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1：
>输入：digits = [1,2,3]   
>输出：[1,2,4]   
>解释：输入数组表示数字 123。

>示例 2：      
>输入：digits = [4,3,2,1]   
>输出：[4,3,2,2]   
>解释：输入数组表示数字 4321。   

>示例 3：
>输入：digits = [0]    
>输出：[1]   

>提示：    
>1 <= digits.length <= 100   
>0 <= digits[i] <= 9    

::: details 展开查看  [题目来源](https://leetcode.cn/problems/plus-one/?envType=study-plan-v2&envId=top-interview-150)
 ```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   for(let i = digits.length - 1;i >= 0;i--){
       digits[i] ++;
       digits[i] = digits[i] % 10;
       if(digits[i] != 0) return digits;
   }
   // 如果能执行到这里，说明数组的每一项都是9，[9,9,9...]，需要将数组最前面添加一个1 [1,0,0...]
   digits.unshift(1);
   return digits;
};
 ```
:::