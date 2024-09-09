/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 双层for循环 + if
// var twoSum = function(nums, target) {
//     const len = nums.length;
//     for(let i = 0; i < len - 1; i ++){
//         for(let j = i + 1; j < len; j ++){
//             if(nums[i] + nums[j] === target){
//                 return [i,j]
//             }
//         }
//     }
//     return [];
// };
// 使用Map
var twoSum = function(nums, target) {
    const resMap = new Map();
    for(let i = 0; i < nums.length; i ++){
        // ps 设置map的值的位置放在这里，和放在if下有什么区别
        resMap.set(nums[i], i);
        if(resMap.has(target - nums[i])) {
            return [resMap.get(target - nums[i], i)]
        }
    }
    return [];
};
// @lc code=end

