/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Return number of elements in the array after removing duplicates.
 *  
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    for (let i=0; i<nums.length; i++){
    	let count = 0;
        for (let j=i+1; j<=nums.length; j++) {
            if (nums[i] == nums[j]) {
                count++;
            } else {
                if (count > 0) {
                    nums.splice(i+1,count);
                    break;
                } else break;
            }
        }
    }
    return nums.length;
};