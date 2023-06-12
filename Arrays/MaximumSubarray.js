/**
 *
 * SubArray -> continous sequence
 *
 * Given An Integer array nums, Find the subarray with the largest sum, and return its sum
 *
 * nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output -> 6
 * The subarray [4,-1,2,1] has the largest sum 6.
 */

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let n = nums.length;
function subArraySum(arr) {
  let n = arr.length;
  let Maximum_Sum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;

      for (let k = i; k <= j; k++) {
        sum = sum + arr[k];
      }
      Maximum_Sum = Math.max(Maximum_Sum, sum);
    }
  }
  return Maximum_Sum;
}
console.log(subArraySum(nums));

function BetterApproach(arr, n) {
  let maximum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum = sum + arr[j];
      maximum = Math.max(maximum, sum);
    }
  }
  return maximum;
}
console.log(BetterApproach(nums, n));
