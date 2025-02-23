// To do: Fix these tests with one liners!
import { expect, test, describe } from 'vitest'
import { exercise1, exercise10, exercise11, exercise12, exercise13, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8, exercise9 } from "./04_destructuring";

// 04.1: destructuring - array

describe("destructuring arrays makes shorter code", () => {
  test("extract value from array", () => {
    expect(exercise1()).toEqual(1);
  });

  test("extract multiple values from array", () => {
    const { firstValue, secondValue } = exercise2();

    expect(firstValue).toEqual(1);
    expect(secondValue).toEqual(2);
  });

  test("extract multiple, non successive, values from array", () => {
    const { firstValue, fourthValue } = exercise3();

    expect(firstValue).toEqual(1);
    expect(fourthValue).toEqual(4);
  });

  test("extract nested values from array", () => {
    const { firstName, lastName, age } = exercise4();

    expect(`${firstName} ${lastName} is ${age} years`).toEqual(
      "John Doe is 30 years"
    );
  });
});

// 04.2: destructuring - object

describe("destructuring objects", () => {
  test("extract value from object", () => {
    const name = exercise5();

    expect(name).toEqual("John");
  });

  test("extract multiple values from object", () => {
    const {name, age} = exercise6();

    expect(name).toEqual("John");
    expect(age).toEqual(30);
  });

  test("extract nested values from object", () => {
    const { firstName, lastName, age} = exercise7()

    expect(`${firstName} ${lastName} is ${age} years`).toEqual(
      "John Doe is 30 years"
    );
  });

  test("Assign a property name to a new variable name", () => {
    const personLocation = exercise8();

    expect(personLocation).toEqual("Antwerp");
  });
});

// 04.3: destructuring - function parameters

describe("destructuring function parameters", () => {
  test("extract multiple params from object", () => {
    const log = exercise9();
    expect(log).toEqual("John is 30 years old.");
  });

  test("extract rest params from object", () => {
    const log = exercise10();
    expect(log).toEqual("John is 30 years old and lives in Antwerp.");
  });
});

// 04.4: destructuring - default values

describe("destructuring default values", () => {
  test("for a missing array value", () => {
    expect(exercise11()).toEqual(2);
  });

  test("for a missing object value", () => {
    // don't change ↓
    expect(exercise12()).toEqual("Belgium");
  });

  test("function parameter", () => {
    expect(exercise13()).toEqual("John lives in Belgium");
  });
});
