/**
 * Description:
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */


// Solution

var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (
			let k = i + 1;
			k < nums.length;
			k++
		) {
			if (nums[i] + nums[k] == target) {
				return [i, k]
			}
		}
	}
}

//Test Cases
//Copy the below to a test file having a .test.js extension and run `npm run test` in your terminal.

describe('Tests', () => {
	it('test', () => {
		Test.assertEquals(
			twoSum([2, 7, 11, 15], 9),
			[0, 1],
		)
		Test.assertEquals(
			twoSum([3, 2, 4], 6),
			[1, 2],
		)
	})
})
