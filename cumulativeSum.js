/**
 *
 * Description: Function returns a cumulative sum of array.
 *
 * @param {Array} nums -> Array of integers
 *
 * @return {Array} Will return a cumulative sum of array.
 */

function cumulativeSum (nums) {
    for(let i = 1; i < nums.length; i++) {
        nums[i] += nums[i-1]
    }
    return nums
}
console.log(cumulativeSum([1,2,3,4,5])) // It will log [ 1, 3, 6, 10, 15 ]