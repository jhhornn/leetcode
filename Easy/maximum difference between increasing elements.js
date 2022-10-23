/**
 * Description
 * Array Problem
 * 
 * @param {number[]} prices
 * @return {number}
 * 
 * Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].

 * Return the maximum difference. If no such i and j exists, return -1.
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: nums = [7,1,5,4]
 * Output: 4
 * Explanation:
 * The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4.
 * Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6, but i > j, so it is not valid.
 * Example 2:
 * 
 * Input: nums = [9,4,3,2]
 * Output: -1
 * Explanation:
 * There is no i and j such that i < j and nums[i] < nums[j].
 * Example 3:
 * 
 * Input: nums = [1,5,2,10]
 * Output: 9
 * Explanation:
 * The maximum difference occurs with i = 0 and j = 3, nums[j] - nums[i] = 10 - 1 = 9.
 */

//Solution

var maximumDifference = function (
  nums
) {
  let minIndex = 0
  let maxIndex = 1
  let maxDiff = -1
  while (maxIndex < nums.length) {
    if (
      nums[maxIndex] > nums[minIndex]
    ) {
      let diff =
        nums[maxIndex] - nums[minIndex]
      maxDiff = Math.max(diff, maxDiff)
    } else {
      minIndex = maxIndex
    }
    maxIndex += 1
  }
  return maxDiff
}

//Test Cases
//Copy the below to a test file having a .test.js extension and run `npm run test` in your terminal.

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(
      maximumDifference([7, 1, 5, 4]),
      4
    )
    Test.assertEquals(
      maximumDifference([9, 4, 3, 2]),
      -1
    )
    Test.assertEquals(
      maximumDifference([1, 5, 2, 10]),
      9
    )
  })
})
