/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let rangeArray = new Array();
    let first = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i+1]-1) {
            if (i == first) {
                rangeArray.push(nums[i].toString());
            }
            else {
                rangeArray.push(nums[first].toString() + "->" + nums[i].toString());
            }
            first = i + 1;
        }
    }
    return rangeArray;
};

// ex:
// nums = [0,1,2,4,5,7]
// output = ["0->2","4->5","7"]