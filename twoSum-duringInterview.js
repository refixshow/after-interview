"use strict";

class Validator {
  static isIndexCorrect(index) {
    return index !== -1;
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

  for (let i = 0; i < nums.length; i++) {
    const diff = sum - nums[i];

    const indexToFind = nums.findIndex((el) => {
      return el === diff;
    });

    // console.log({diff, indexToFind, currentIndex: i});

    if (!Validator.isIndexCorrect(indexToFind)) {
      return [];
    }
    // console.log({indexToFind})

    // console.log(nums[i], nums[indexToFind]);

    const isSumCorrect = nums[i] + nums[indexToFind] === sum;

    if (isSumCorrect) {
      return [i, indexToFind];
    }
  }

  return [];
}
