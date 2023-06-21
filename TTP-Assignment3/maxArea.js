function maxArea(height) {
  let maxArea = 0; // Variable to store the maximum area
  let left = 0; // Left pointer
  let right = height.length - 1; // Right pointer

  while (left < right) {
    const minHeight = Math.min(height[left], height[right]); // Minimum height between the two lines
    const width = right - left; // Width between the two lines
    const area = minHeight * width; // Calculate the area

    maxArea = Math.max(maxArea, area); // Update the maximum area if necessary

    if (height[left] < height[right]) {
      // Move the left pointer if the left line is shorter
      left++;
    } else {
      // Move the right pointer if the right line is shorter or equal
      right--;
    }
  }

  return maxArea; // Return the maximum area
}

module.exports = maxArea;
