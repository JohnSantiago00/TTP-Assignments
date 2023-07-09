let missingNumber = function (nums) {
  // pseudo code

  //   missingNumber(nums):
  //   cyclicSort(nums)
  //   return findMissingNumber(nums)

  // cyclicSort(nums):
  //   i = 0

  //   while i < length of nums:
  //       value = nums[i]
  //       correctIndex = value - 1

  //       if value is not equal to nums[correctIndex]:
  //           swap elements at index i and correctIndex in nums
  //       else:
  //           increment i by 1

  // findMissingNumber(nums):
  //   cyclicSort(nums)

  //   for i = 0 to length of nums:
  //       if nums[i] is not equal to i + 1:
  //           return i + 1

  //   return length of nums + 1

  function cyclicSort(nums) {
    let i = 0;

    while (i < nums.length) {
      const value = nums[i];
      const correctIndex = value - 1;

      if (value !== nums[correctIndex]) {
        [nums[correctIndex], nums[i]] = [nums[i], nums[correctIndex]];
      } else {
        i++;
      }
    }
  }

  function findMissingNumber(nums) {
    cyclicSort(nums);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        return i + 1;
      }
    }
    return nums.length + 1;
  }

  return findMissingNumber(nums);
};

module.exports = missingNumber;
