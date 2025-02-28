// Fill in the /* TODO */ sections to complete each exercise.
// Test your solutions with the given example calls or expected output.
// Think about how TypeScript helps enforce stricter and safer code as you solve each one.

// --- 1. ---
// Create a function `formatValue` that accepts either a number or a string.
// If the input is a number, return it formatted as currency. If it's a string, return it in uppercase.

function formatValue(value /*:  TODO */): string {
  // Implement logic based on the type of `value`
  return ""; // Placeholder
}

console.log(formatValue(100)); // Expected: "$100.00"
console.log(formatValue("hello")); // Expected: "HELLO"

// --- 2. ---
// Define a type `Person` and a type `Employee`. Combine them into a new type.
// Create an object `john` using the combined type.

type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

// TODO: Combine Person and Employee into a single type
const john /*:  TODO */ = {
  name: "John",
  age: 30,
  employeeId: 101,
  department: "Engineering",
};

// --- 3. ---
// Implement a function `wrapInArray` that takes any type of input and wraps it in an array.
// The function should work for strings, numbers, and custom objects.

function wrapInArray(item /*:  TODO */) {
  return []; // Placeholder
}

console.log(wrapInArray(42)); // Expected: [42]
console.log(wrapInArray("hello")); // Expected: ["hello"]

// --- 4. ---
// Write a function `isString` that checks if a value is a string.
// Use the function to filter strings from an array of mixed types.

function isString(value: unknown) /*:  TODO */ {
  return false; // Placeholder
}

const items = [42, "hello", true, "world"];
const strings = items.filter(/* TODO */);
console.log(strings); // Expected: ["hello", "world"]

// --- 5. ---
// Define an object `colors` that contains three properties: red, green, and blue.
// Ensure the properties cannot be changed or widened.

const colors = /* TODO */ {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

// Expected: `colors.red` should only be "#ff0000"

// --- 6. ---
// TODO: gebruik function overload
// Create a function `describe` that accepts either a string or an array of strings.
// If it's a string, return its length. If it's an array, return the total number of characters.

function describe(value /*:  TODO */): number {
  return 0; // Placeholder
}

console.log(describe("hello")); // Expected: 5
console.log(describe(["hello", "world"])); // Expected: 10

// --- 7. ---
// Define a type `Task` and create a function `updateTask`.
// The function should accept an object containing some (but not all) properties of `Task`.

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function updateTask(task: Task, updates /*:  TODO */): Task {
  return { ...task, ...updates }; // Placeholder
}

const task = { id: 1, title: "Learn TypeScript", completed: false };
const updatedTask = updateTask(task, { completed: true });

// Expected: { id: 1, title: "Learn TypeScript", completed: true }

// --- 8. ---
// Define a type `User` and create a new type that only includes the `id` and `name` properties.

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

// TODO: Use utility type to pick specific properties
const user /*:  TODO */ = {
  id: 1,
  name: "Alice",
};

// --- 9. ---
// Define a type `Post` and create a new type that excludes the `author` property.

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

// TODO: Use utility type to exclude a property
const post /*:  TODO */ = {
  id: 101,
  title: "TypeScript Tips",
  content: "Use utility types to simplify your code.",
};

// --- 10. ---
// Define a type `Settings` where all properties are optional.
// Create a function `applyDefaults` that makes all properties required.

type Settings = {
  theme?: string;
  notifications?: boolean;
};

function applyDefaults(config /*:  TODO */) /* : TODO */ {
  return { theme: "light", notifications: true, ...config };
}

const defaultSettings = applyDefaults({ notifications: false });
// Expected: { theme: "light", notifications: false }

// --- 11. ---
// Define a type `Car` and create a new type where all properties are read-only.
// Try modifying a property to see the error.

type Car = {
  make: string;
  model: string;
  year: number;
};

// TODO: Create a readonly version of Car
const myCar /*:  TODO */ = {
  make: "Tesla",
  model: "Model 3",
  year: 2023,
};

// Uncommenting the next line should cause an error
// myCar.year = 2024;

// --- 12. ---
// Create an object `options` that must satisfy a type but not allow excess properties.
// Use the `satisfies` keyword to enforce type checking.

type Config = {
  debug: boolean;
  logLevel: "info" | "warn" | "error";
};

const options = {
  debug: true,
  logLevel: "info",
  extraOption: 123, // This should not be allowed
}; /* TODO */
