// Function to find indices of two numbers that add up to the target
function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in map) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return [];
}

module.exports = twoSum;
