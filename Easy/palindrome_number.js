/**
 * Description
 *
 * @param {number} x
 * @return {boolean}
 *
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward.
 * For example, 121 is a palindrome while 123 is not.
 *
 * Example 1:
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 *
 * Example 2:
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 */

//Test Cases
//Copy the below to a test file having a .test.js extension and run `npm run test` in your terminal.

describe('Tests', () => {
	it('test', () => {
		Test.assertEquals(
			isPalindrome(121),
			true,
		)
		Test.assertEquals(
			isPalindrome(-121),
			false,
		)
	})
})
