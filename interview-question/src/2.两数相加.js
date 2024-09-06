/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let len1 = l1.length,
        len2 = l2.length,
        maxLen = Math.max(len1,len2), 
        result = new Array(maxLen).fill(0);
    for (let i = maxLen - 1; i >= 0; i--) {
        const validLi1Item = l1[i] ? l1[i] : 0;
        const validLi2Item = l2[i] ? l2[i] : 0;
        const sum = validLi1Item + validLi2Item + result[i];
        if(sum > 9){
            result.push(sum % 10);
            result[i - 1] ++;
        } else {
            result.push(sum);
        }
    }
    return result;
};
// @lc code=end

