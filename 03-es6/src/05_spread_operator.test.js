// To do: Fix the unit tests, leave the expect lines unchanged.
import { expect, test, describe } from 'vitest'
import {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
  exercise8,
  exercise9,
  exercise10,
} from "./05_spread_operator";

// 05.1: Spread syntax

describe("Spread syntax", () => {
  test("expands the items of an array by prefixing it with `...`", () => {
    expect(exercise1()).toEqual([0, 1, 2, 3, 4]);
  });

  test("an empty array expanded is the same as no item", () => {
    expect(exercise2()).toEqual([0, 1]);
  });

  test("prefix with `...` to spread as function params", () => {
    const fn = (magicA, magicB) => {
      expect(1).toEqual(magicA);
      expect(2).toEqual(magicB);
    };

    exercise3(fn); // ← Change
  });
});

// 05.2: Rest syntax

describe("Rest syntax", () => {
  test("collect remaining items", () => {
    expect(exercise4()).toEqual([3, 4, 5]);
  });

  test("rest syntax to collect all arguments", () => {
    expect(exercise5()).toEqual([55, 42, 78]);
  });
});

// 05.3: Rest + Spread

describe("Combining Rest and Spread", () => {
  test("use `...` to both expand all items and collect them", () => {
    expect(exercise6()).toEqual([1, 2, 3, 4, 5]);
  });

  test("rest syntax must be last in an array, spread can be used in any place", () => {
    const { a, b, rest } = exercise7();

    expect(a).toEqual(1);
    expect(b).toEqual(2);
    expect(rest).toEqual([3, 4, 5]);
  });
});

// 05.4: Rest & Spread for objects

describe("Rest & Spread for objects", () => {
  test("merge 2 objects", () => {
    const { merged, mergedES6 } = exercise8();
    expect(mergedES6).toEqual(merged);
  });

  test("merging overrides existing properties", () => {
    const { merged, mergedES6 } = exercise9();
    expect(mergedES6).toEqual(merged);
  });

  test("get remaining properties", () => {
    expect(exercise10()).toEqual({ b: 2, c: 3 });
  });
});
