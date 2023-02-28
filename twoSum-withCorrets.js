"use strict";

class TwoSumValidator {
  static isIndexCorret(index) {
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

  const differences = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];

    if (!Number.isInteger(sum)) {
      return [];
    }

    const currentDifference = sum - currentValue;

    if (differences.has(currentDifference)) {
      return [differences.get(currentDifference), i];
    }
    differences.set(currentValue, i);
  }

  return [];
}
