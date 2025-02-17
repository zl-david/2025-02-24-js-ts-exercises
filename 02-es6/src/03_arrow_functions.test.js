// To do: replace regular function declarations with arrow functions. Make the functions as short as possible!
// Make sure all tests keep working, leave the expect lines unchanged.
import { expect, test, describe } from 'vitest'
import { exercise1, exercise2, exercise3 } from "./03_arrow_functions";

// 03.1: arrow functions

describe("arrow functions", () => {
  test("single line statement - one argument - implicit return value", () => {
    const addOne = exercise1();
    
    expect(addOne(2)).toEqual(3);
  });

  test("single line statement - multiple arguments - implicit return value", () => {
    // ↓ Change: Rewrite to arrow function on single line
    const add = exercise2();

    expect(add(2, 3)).toEqual(5);
  });

  test("return object literal", () => {
    const getCat = exercise3();

    expect(getCat()).toEqual({ name: "Mikado", age: 5 });
  });
});
