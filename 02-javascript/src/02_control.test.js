import { describe, it, expect } from "vitest";
import {
  findMax,
  countOccurrences,
  filterEvenNumbers,
  calculateFactorial,
  fizzBuzz,
} from "./02_control.js";

describe("Control Flow Exercises", () => {
  // Test for findMax
  describe("findMax", () => {
    it("should return the maximum number in the array", () => {
      expect(findMax([1, 3, 2, 5, 4])).toBe(5);
    });
    it("should return the only element for a single-element array", () => {
      expect(findMax([10])).toBe(10);
    });
    it("should handle negative numbers correctly", () => {
      expect(findMax([-10, -3, -20, -5])).toBe(-3);
    });
  });

  // Test for countOccurrences
  describe("countOccurrences", () => {
    it("should count the number of times a value occurs in an array", () => {
      expect(countOccurrences([1, 2, 3, 2, 4, 2], 2)).toBe(3);
    });
    it("should return 0 if the value does not occur", () => {
      expect(countOccurrences([1, 2, 3], 4)).toBe(0);
    });
    it("should work with strings", () => {
      expect(countOccurrences(["a", "b", "a", "c"], "a")).toBe(2);
    });
  });

  // Test for filterEvenNumbers
  describe("filterEvenNumbers", () => {
    it("should return only even numbers", () => {
      expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });
    it("should return an empty array if no even numbers are present", () => {
      expect(filterEvenNumbers([1, 3, 5])).toEqual([]);
    });
    it("should handle an empty array", () => {
      expect(filterEvenNumbers([])).toEqual([]);
    });
  });

  // Test for calculateFactorial
  describe("calculateFactorial", () => {
    it("should return 1 for 0!", () => {
      expect(calculateFactorial(0)).toBe(1);
    });
    it("should correctly calculate the factorial of a positive number", () => {
      expect(calculateFactorial(5)).toBe(120);
    });
    it("should correctly calculate the factorial for 1", () => {
      expect(calculateFactorial(1)).toBe(1);
    });
  });

  // Test for fizzBuzz
  describe("fizzBuzz", () => {
    it("should return correct FizzBuzz output for n=15", () => {
      expect(fizzBuzz(15)).toEqual([
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
      ]);
    });
    it("should return an empty array for n=0", () => {
      expect(fizzBuzz(0)).toEqual([]);
    });
    it("should return correct output for n=3", () => {
      expect(fizzBuzz(3)).toEqual([1, 2, "Fizz"]);
    });
  });
});
