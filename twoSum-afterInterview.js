"use strict";

class TwoSumValidator {
  static isIndexCorrect(index) {
    return index !== -1;
  }

  static areIndexesTheSame(indexA, indexB) {
    return indexA === indexB;
  }
}

/**
 * @param {number[]} nums
 * @param {number} sum
 *
 * @returns {number[]}
 */
function twoSum(nums, sum) {
  if (!Array.isArray(nums)) {
    return [];
  }

  if (nums.length < 1) {
    return [];
  }

  if (!Number.isInteger(sum)) {
    return [];
  }

  for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
    const currentValue = nums[currentIndex];

    if (!Number.isInteger(currentValue)) {
      return [];
    }

    const diff = sum - currentValue;

    // nie najbardziej optymalne podejście
    const indexToFind = nums.findIndex((el) => {
      return el === diff;
    });

    if (
      !TwoSumValidator.isIndexCorrect(indexToFind) ||
      TwoSumValidator.areIndexesTheSame(currentIndex, indexToFind)
    ) {
      continue;
    }

    const isSumCorrect = currentValue + nums[indexToFind] === sum;

    if (isSumCorrect) {
      // (test 9) przyjmuje inną kolejność dlatego potrzebny jest ten fix
      // z tego co zauważyłem, kolejność indexów nie powinna mieć znaczenia
      // return [i, indexToFind]; <--- poprawny return
      return currentIndex > indexToFind
        ? [indexToFind, currentIndex]
        : [currentIndex, indexToFind];
    }
  }

  return [];
}
