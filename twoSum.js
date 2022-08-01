/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSumBruteForce = function(nums, target) {
    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i]+nums[j] == target) {
                let result = [i, j];
                return result;
            }
        }
    }    
};

var twoSumUsingMap = function(nums, target) {
    let map = {};
    for (let i = 0; i<nums.length; i++) {
        let n = nums[i];
        if (map[target-n]>=0){
            return [map[target-n],i]
        } else {
            map[n] = i;
        }
    }
}