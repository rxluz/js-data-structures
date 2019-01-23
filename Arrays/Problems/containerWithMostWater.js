/*
Given n non-negative integers a1, a2, ..., an , 
where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints 
of line i is at (i, ai) and (i, 0). 

Find two lines, which together with x-axis forms a container, 
such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Input: [1,8,6,2,5,4,8,3,7]
Output: 49

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(points) {
  let maxArea = 0;

  for (let index = 0; index < points.length; index++) {
    for (let innerIndex = index + 1; innerIndex < points.length; innerIndex++) {
      const minValue = Math.min(points[index], points[innerIndex]);
      const distance = innerIndex - index;
      const currentArea = minValue * distance;
      if (currentArea > maxArea) {
        maxArea = currentArea;
      }
    }
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
