let maxArea = function (height) {
  // pseudo code

  // maxArea(height):
  // left = 0
  // right = length of height - 1
  // max = 0

  // while left < right:
  //   if height[left] > height[right]:
  //     area = height[right] * (right - left)
  //     max = maximum of max and area
  //     decrement right by 1
  //   else:
  //     area = height[left] * (right - left)
  //     max = maximum of max and area
  //     increment left by 1

  // return max

  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    if (height[left] > height[right]) {
      max = Math.max(max, height[right] * (right - left));
      right--;
    } else {
      max = Math.max(max, height[left] * (right - left));
      left++;
    }
  }
  return max;
};

module.exports = maxArea;
