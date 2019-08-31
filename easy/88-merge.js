/**
 * @url https://leetcode-cn.com/problems/merge-sorted-array/
 * @description
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 说明：
 * - 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * - 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * @example
 * ```
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * ```
 * 
 * @summary
 * 这次思路完成完美
 * 用while来循环的话会更简洁
 * 
 * 双指针 / 从后往前遍历
 * 时间复杂度：O(n+m)
 * 空间复杂度：O(1)
 */



/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var k = n+m;
    for(var i=k-1; i>=0; i--) {
        if(n === 0) {
            break;
        }else if(m === 0) {
            nums1[i] = nums2[n-1];
            n--;
            continue;
        }
        if(nums2[n-1] > nums1[m-1]) {
            nums1[i] = nums2[n-1];
            n--;
        } else {
            nums1[i] = nums1[m-1]
            m--;
        }
    }
};