/*

There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.



Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0

Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

*/

const findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
  var size1 = nums1.length;
  var size2 = nums2.length;
  var size = size1 + size2;

  var mid = (size - 1) / 2;
  var l = 0;
  var r = size1 - 1;

  while (l <= r) {
    var m1 = l + ((r - l) >> 1);
    var m2 = mid - m1;

    if (nums1[m1] > nums2[m2]) var r = m1 - 1;
    else var l = m1 + 1;
  }

  var a = Math.max(
    r >= 0 ? nums1[r] : Number.MIN_SAFE_INTEGER,
    mid - l >= 0 ? nums2[mid - l] : Number.MIN_SAFE_INTEGER,
  );

  if (size & 1) return a;
  var b = Math.min(
    l < size1 ? nums1[l] : Number.MAX_SAFE_INTEGER,
    mid - r < size2 ? nums2[mid - r] : Number.MAX_SAFE_INTEGER,
  );
  return (a + b) / 2.0;
};

test = ({ description, condition, expectedValue }) =>
  console.log(`Description: ${description}
Result: ${
    JSON.stringify(condition) === JSON.stringify(expectedValue)
      ? "PASSED"
      : "FAILED"
  }
Condition: ${JSON.stringify(condition)}
Expected Value: ${JSON.stringify(expectedValue)}
    `);

test({
  description: "Common array",
  condition: findMedianSortedArrays([1, 20, 25], [0, 75]),
  expectedValue: 20,
});

test({
  description: "Array with duplicated value",
  condition: findMedianSortedArrays([0, 1, 20, 25], [0, 75]),
  expectedValue: 20,
});

test({
  description: "Array with duplicated values",
  condition: findMedianSortedArrays([0, 1, 20, 25], [0, 25, 75]),
  expectedValue: 20,
});

test({
  description: "Arrays with single value",
  condition: findMedianSortedArrays([0], [25]),
  expectedValue: 12.5,
});
