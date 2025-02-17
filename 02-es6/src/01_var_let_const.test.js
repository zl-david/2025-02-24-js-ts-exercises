// to do: Replace var/let/const with the correct var/let/const to fix the unit tests
import { expect, test, describe } from 'vitest'
import { exercise1, exercise2, exercise3, exercise4, exercise5 } from "./01_var_let_const";

// 01.1: var or let

describe("var or let?", () => {
  test("Exercise 1", () => {
    expect(exercise1()).toEqual("banana");
  });

  test("Exercise 2", () => {
    expect(exercise2()).toEqual(10);
  });

  test("Exercise 3", () => {
    expect(exercise3()).toEqual("pear");
  });
});

// 01.2: var or const

describe("var or const?", () => {
  test("Exercise 4 - const values cannot be changed", () => {
    expect(exercise4).toThrow();
  });

  test("Exercise 5 - properties in const Objects can be changed", () => {
    expect(exercise5()).toEqual("black");
  });
});
