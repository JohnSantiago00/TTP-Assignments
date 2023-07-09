let twoSum = function (numbers, target) {
  // pseudo code

  // twoSum(numbers, target):
  //     left = 0
  //     right = length of numbers - 1

  //     while left < right:
  //         sum = numbers[left] + numbers[right]
  //         if sum is equal to target:
  //             return [left + 1, right + 1]
  //         else if sum > target:
  //             decrement right by 1
  //         else:
  //             increment left by 1

  //     return [-1, -1]

  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
};

module.exports = twoSum;
