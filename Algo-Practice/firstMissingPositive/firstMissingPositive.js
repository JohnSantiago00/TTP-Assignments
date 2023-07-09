let firstMissingPositive = function (nums) {
  //psuedo code

  // firstMissingPositive(nums):
  //     i = 0

  // while i < length of nums:
  //   value = nums[i]

  //  if value > 0 and value <= length of nums and nums[value - 1] is not equal to value:
  //      swap elements at index value - 1 and i in nums
  //  else:
  //      increment i by 1

  //  for i = 0 to length of nums:
  //   if nums[i] is not equal to i + 1:
  //    return i + 1

  // return length of nums + 1

  let i = 0;

  while (i < nums.length) {
    const value = nums[i];

    if (value > 0 && value <= nums.length && nums[value - 1] !== value) {
      [nums[value - 1], nums[i]] = [nums[i], nums[value - 1]];
    } else {
      i++;
    }
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
};

module.exports = firstMissingPositive;
