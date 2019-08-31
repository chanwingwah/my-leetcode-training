
/**
 * @url https://leetcode-cn.com/problems/majority-element/
 * @description
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 * 
 * @example
 * ```
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 3
 * ```
 * 
 * @summary
 * Boyer-Moore
 * 投票算法，是比较好的解决方案
 * 而我自己的思路是 用对象键值对来存储大小，如果大于n/2 就可以return了
 * 
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var mapping = {};
    for(var i=0, len=nums.length; i<len; i++) {
        if(mapping[nums[i]]) {
            mapping[nums[i]]++;
        } else {
            mapping[nums[i]] = 1;
        }
        if(mapping[nums[i]] >= len/2) {
            return nums[i];
        }
    };
    
};