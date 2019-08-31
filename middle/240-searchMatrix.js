/**
 * @url https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
 * @description
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：
 * - 每行的元素从左到右升序排列。
 * - 每列的元素从上到下升序排列。
 * 
 * @example
 * ```
 * [
 *   [1,   4,  7, 11, 15],
 *   [2,   5,  8, 12, 19],
 *   [3,   6,  9, 16, 22],
 *   [10, 13, 14, 17, 24],
 *   [18, 21, 23, 26, 30]
 * ]
 * ```
 * 
 * @summary
 * 我的思路是先从第一行开始比较，遍历比较迂回。
 * 优化思路， 从最后的开始，不会迂回。
 * 更加优化， 如果数据很大的话，用二分法应该会效率高一点
 * 初始化一个指向矩阵左下角的，若目标值大于当前值则列数下标+1，若目标值小于当前值则行数-1，直至找到目标值或行列下标溢界。
 * 时间复杂度：O(n+m)
 * 空间复杂度：O(1)
 */


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0 || matrix[0].length === 0){
        return false;
    }
    var i = 0,
        j = 0,
        ilen = matrix.length,
        jlen = matrix[0].length;
        for(j = 0; j< jlen; j++) {
            if(matrix[i][j] > target) {
                break;
            } 
        }
    while(true) {
        if(i >= ilen || j <0) return false;
        if(matrix[i][j] === target) return true;
        if(matrix[i][j] < target) {
            i++;
        } else {
            j--;
        }
    }
};