import { describe, it, expect } from "vitest";
import {
  // IF STATEMENTS
  checkNumberSign,
  isEven,
  isVowel,
  // FOR LOOP
  sumArrayWithForLoop,
  productArrayWithForLoop,
  countEvenNumbers,
  // FOR...IN LOOP
  countProperties,
  sumObjectValues,
  truthyKeys,
  // FOR...OF LOOP
  joinArrayElements,
  uppercaseArray,
  findStringWithPrefix,
} from "./01_if_for.js";

// ==========================
// IF STATEMENTS TESTS
// ==========================
describe("If Statements Exercises", () => {
  describe("checkNumberSign", () => {
    it('should return "positive" for a positive number', () => {
      expect(checkNumberSign(5)).toBe("positive");
    });
    it('should return "negative" for a negative number', () => {
      expect(checkNumberSign(-3)).toBe("negative");
    });
    it('should return "zero" for zero', () => {
      expect(checkNumberSign(0)).toBe("zero");
    });
  });

  describe("isEven", () => {
    it("should return true for an even number", () => {
      expect(isEven(2)).toBe(true);
    });
    it("should return false for an odd number", () => {
      expect(isEven(3)).toBe(false);
    });
    it("should return true for zero", () => {
      expect(isEven(0)).toBe(true);
    });
  });

  describe("isVowel", () => {
    it("should return true for a lowercase vowel", () => {
      expect(isVowel("a")).toBe(true);
    });
    it("should return true for an uppercase vowel", () => {
      expect(isVowel("E")).toBe(true);
    });
    it("should return false for a non-vowel character", () => {
      expect(isVowel("b")).toBe(false);
    });
  });
});

// ==========================
// FOR LOOP (STANDARD) TESTS
// ==========================
describe("For Loop Exercises", () => {
  describe("sumArrayWithForLoop", () => {
    it("should return the sum of the array elements", () => {
      expect(sumArrayWithForLoop([1, 2, 3, 4])).toBe(10);
    });
    it("should return 0 for an empty array", () => {
      expect(sumArrayWithForLoop([])).toBe(0);
    });
  });

  describe("productArrayWithForLoop", () => {
    it("should return the product of the array elements", () => {
      expect(productArrayWithForLoop([1, 2, 3, 4])).toBe(24);
    });
    it("should return 1 for an empty array", () => {
      expect(productArrayWithForLoop([])).toBe(1);
    });
    it("should return the same number for a single-element array", () => {
      expect(productArrayWithForLoop([5])).toBe(5);
    });
  });

  describe("countEvenNumbers", () => {
    it("should return the count of even numbers in the array", () => {
      expect(countEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(3);
    });
    it("should return 0 when no even numbers are present", () => {
      expect(countEvenNumbers([1, 3, 5])).toBe(0);
    });
    it("should return 0 for an empty array", () => {
      expect(countEvenNumbers([])).toBe(0);
    });
  });
});

// ==========================
// FOR...IN LOOP TESTS
// ==========================
describe("For...in Loop Exercises", () => {
  describe("countProperties", () => {
    it("should return the number of properties in an object", () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(countProperties(obj)).toBe(3);
    });
    it("should return 0 for an empty object", () => {
      expect(countProperties({})).toBe(0);
    });
  });

  describe("sumObjectValues", () => {
    it("should return the sum of numeric values in an object", () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(sumObjectValues(obj)).toBe(6);
    });
    it("should return 0 for an empty object", () => {
      expect(sumObjectValues({})).toBe(0);
    });
  });

  describe("truthyKeys", () => {
    it("should return an array of keys with truthy values", () => {
      const obj = { a: 0, b: 1, c: false, d: "hello", e: null };
      expect(truthyKeys(obj)).toEqual(["b", "d"]);
    });
    it("should return an empty array for an empty object", () => {
      expect(truthyKeys({})).toEqual([]);
    });
  });
});

// ==========================
// FOR...OF LOOP TESTS
// ==========================
describe("For...of Loop Exercises", () => {
  describe("joinArrayElements", () => {
    it("should join array elements with the given delimiter", () => {
      expect(joinArrayElements(["apple", "banana", "cherry"], ", ")).toBe(
        "apple, banana, cherry"
      );
    });
    it("should return an empty string for an empty array", () => {
      expect(joinArrayElements([], ", ")).toBe("");
    });
  });

  describe("uppercaseArray", () => {
    it("should return a new array with all strings uppercased", () => {
      expect(uppercaseArray(["hello", "world"])).toEqual(["HELLO", "WORLD"]);
    });
    it("should return an empty array when given an empty array", () => {
      expect(uppercaseArray([])).toEqual([]);
    });
  });

  describe("findStringWithPrefix", () => {
    it("should return the first string that starts with the given prefix", () => {
      expect(findStringWithPrefix(["apple", "banana", "cherry"], "ba")).toBe(
        "banana"
      );
    });
    it("should return the first matching string when multiple strings match", () => {
      expect(findStringWithPrefix(["dog", "cat", "cow", "cattle"], "ca")).toBe(
        "cat"
      );
    });
    it("should return undefined if no string starts with the given prefix", () => {
      expect(
        findStringWithPrefix(["apple", "banana", "cherry"], "z")
      ).toBeUndefined();
    });
  });
});
