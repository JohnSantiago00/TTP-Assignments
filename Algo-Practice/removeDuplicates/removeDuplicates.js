let removeDuplicates = function (nums) {
  // pseudo code

  // removeDuplicates(nums):
  //   if length of nums is 0:
  //       return 0

  //   slow = 0
  //   for fast = 1 to length of nums - 1:
  //       if nums[fast] is not equal to nums[slow]:
  //           increment slow by 1
  //           set nums[slow] to nums[fast]

  //   return slow + 1

  if (nums.length === 0) {
    return 0;
  }

  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
};

module.exports = removeDuplicates;
