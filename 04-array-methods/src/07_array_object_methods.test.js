import { describe, test, expect } from 'vitest';
import {
  arrayIncludes,
  getObjectEntries,
  getObjectValues,
  mergeObjects,
  flattenArray,
  flatMapArray,
  objectFromEntries,
  findLastElement,
  findLastIndex,
  reverseArray,
  sortArray,
  spliceArray,
  replaceElement
} from './07_array_object_methods';

describe('ES7 - Array.prototype.includes()', () => {
  test('should return true if the array includes the value', () => {
    expect(arrayIncludes([1, 2, 3], 2)).toBe(true);
  });
  
  test('should return false if the array does not include the value', () => {
    expect(arrayIncludes([1, 2, 3], 4)).toBe(false);
  });
});

describe('ES8 - Object.entries() and Object.values()', () => {
  test('should return the correct entries for an object', () => {
    const obj = { a: 1, b: 2 };
    expect(getObjectEntries(obj)).toEqual([['a', 1], ['b', 2]]);
  });

  test('should return the correct values for an object', () => {
    const obj = { a: 1, b: 2 };
    expect(getObjectValues(obj)).toEqual([1, 2]);
  });
});

describe('ES9 - Object rest/spread properties', () => {
  test('should merge two objects correctly', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2, a: 99 };
    expect(mergeObjects(obj1, obj2)).toEqual({ a: 99, b: 2 });
  });
});

describe('ES10 - Array.prototype.flat(), flatMap() & Object.fromEntries()', () => {
  test('should flatten a nested array using flat()', () => {
    const nested = [[1, 2], [3, 4]];
    expect(flattenArray(nested)).toEqual([1, 2, 3, 4]);
  });

  test('should use flatMap to replace each element with [element, element*2]', () => {
    expect(flatMapArray([1, 2, 3])).toEqual([1, 2, 2, 4, 3, 6]);
  });

  test('should convert an array of entries into an object', () => {
    const entries = [['a', 1], ['b', 2]];
    expect(objectFromEntries(entries)).toEqual({ a: 1, b: 2 });
  });
});

describe('ES14 - New Array Methods', () => {
  test('should find the last element that satisfies the predicate', () => {
    const arr = [1, 2, 3, 4, 5];
    const predicate = (x) => x % 2 === 0;
    expect(findLastElement(arr, predicate)).toBe(4);
  });

  test('should return undefined if no element satisfies the predicate', () => {
    const arr = [1, 3, 5];
    const predicate = (x) => x % 2 === 0;
    expect(findLastElement(arr, predicate)).toBeUndefined();
  });

  test('should find the last index of the element satisfying the predicate', () => {
    const arr = [1, 2, 3, 4, 5];
    const predicate = (x) => x % 2 === 0;
    expect(findLastIndex(arr, predicate)).toBe(3);
  });

  test('should return -1 if no element satisfies the predicate', () => {
    const arr = [1, 3, 5];
    const predicate = (x) => x % 2 === 0;
    expect(findLastIndex(arr, predicate)).toBe(-1);
  });

  test('should return a new reversed array using toReversed()', () => {
    const original = [1, 2, 3];
    const reversed = reverseArray(original);
    expect(reversed).toEqual([3, 2, 1]);
    // Check immutability:
    expect(original).toEqual([1, 2, 3]);
  });

  test('should return a new sorted array in ascending order using toSorted()', () => {
    const original = [3, 1, 2];
    const sorted = sortArray(original);
    expect(sorted).toEqual([1, 2, 3]);
    expect(original).toEqual([3, 1, 2]);
  });

  test('should return a new array with splice modifications using toSpliced()', () => {
    const original = [1, 2, 3, 4];
    const spliced = spliceArray(original, 1, 2, 9, 10);
    expect(spliced).toEqual([1, 9, 10, 4]);
    expect(original).toEqual([1, 2, 3, 4]);
  });

  test('should return a new array with the element replaced using with()', () => {
    const original = [1, 2, 3];
    const modified = replaceElement(original, 1, 99);
    expect(modified).toEqual([1, 99, 3]);
    expect(original).toEqual([1, 2, 3]);
  });
});
