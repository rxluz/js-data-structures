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

const isEven = num => num % 2 !== 0;

const removeDuplicates = singleArray => {
  const uniqueListObj = {};

  return singleArray.reduce(
    (accumulator, value) => {
      const isDuplicated = uniqueListObj[`list-${value}`] === value;

      if (!isDuplicated) {
        accumulator.push(value);
        uniqueListObj[`list-${value}`] = value;
      }

      return accumulator;
    },

    [],
  );
};

const median = singleArray => {
  const singleArrayWithoutDuplicates = removeDuplicates(singleArray);

  const totalItems = singleArrayWithoutDuplicates.length;
  const mediamIndex = totalItems / 2 - 1;

  if (isEven(totalItems)) {
    // console.log("isEven");
    return singleArrayWithoutDuplicates[Math.ceil(mediamIndex)];
  }

  const medianLeftValue = singleArrayWithoutDuplicates[mediamIndex];
  const medianRightValue = singleArrayWithoutDuplicates[mediamIndex + 1];

  return (medianLeftValue + medianRightValue) / 2;
};

const findMedianSortedArrays = (firstArray, secondArray) =>
  median([...firstArray, ...secondArray].sort());

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
