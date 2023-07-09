let findDuplicates = function (nums) {
  // pseudo code

  // findDuplicates(nums):
  // duplicates = empty array

  // for i = 0 to length of nums:
  //     while nums[i] is not equal to nums[nums[i] - 1]:
  //         correctIndex = nums[i] - 1
  //         swap elements at index i and correctIndex in nums

  //     if i is not equal to nums[i] - 1 and nums[i] is not in duplicates:
  //         add nums[i] to duplicates

  // return duplicates

  const duplicates = [];

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== nums[nums[i] - 1]) {
      const correctIndex = nums[i] - 1;
      [nums[correctIndex], nums[i]] = [nums[i], nums[correctIndex]];
    }

    if (i !== nums[i] - 1 && !duplicates.includes(nums[i])) {
      duplicates.push(nums[i]);
    }
  }

  return duplicates;
};

module.exports = findDuplicates;
