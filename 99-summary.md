# Summary JavaScript

## Links

- [JavaScript Roadmap](https://roadmap.sh/javascript)
- Visualize scope / hoisting / closure: [https://tylermcginnis.com/javascript-visualizer](https://tylermcginnis.com/javascript-visualizer)
- Visualize event loop: [https://www.jsv9000.app/](https://www.jsv9000.app/)
- Browser don’t support all new features immediately. See [https://caniuse.com](https://caniuse.com).
- [MDN Docs](https://developer.mozilla.org/en-US/)

## Primitives vs Non-primitives

Primitives:

1. **Undefined** (undefined), used for unintentionally missing values.
2. **Null** (null), used for intentionally missing values.
3. **Boolean** (true and false), used for logical operations.
4. **Number** (-100, 3.14, and others), used for math calculations.
5. **String** ("hello", "abracadabra", and others), used for text.
6. **BigInt** (uncommon and new), used for math on big numbers.
7. **Symbol** (uncommon), used to perform rituals and hide secrets.

Non-primitives:

8. **Object** ({} and others), used to group related data and code.
9. **Function** (x => x \* 2 and others), used to refer to code.

## Rules

1. Primitives are immutable, non-primitives not
2. We pass values, not variables
3. Variables are not values, variables point to values when you use =
4. Properties can't be added to primitives, only to non-primitives

## Scope / Hoisting / Closure

- Scope: To what an execution context has access. Execution context has access to outer scopes up to the global scope.
- Hoisting: Declarations of variables and functions are "lifted" to the beginning of their scope. You can use a variable or function before it is declared in the code.
- Closure: A closure is created when a function is defined inside another function, and the inner function retains access to the outer function's variables and scope even after the outer function has finished executing.

# ES6+

- 💡 Always try to write your code in such a way that you can use const. When that's not possible, use let. Avoid var.

Here's a list of most commonly used JavaScript features, grouped per version:

### ES6 (ECMAScript 2015)

1. **Let and Const**: Block-scoped variables.
2. **Arrow Functions**: Shorter syntax for defining functions.
3. **Template Literals**: String interpolation and multi-line strings.
4. **Destructuring Assignment**: Easier extraction of values from arrays and objects.
5. **Default Parameters**: Default values for function parameters.
6. **Rest and Spread Operators**: Handy for working with arrays and objects.
7. **Classes**: Syntactic sugar for working with prototypes and object-oriented programming.
8. **Promises**: Managing asynchronous operations.
9. **Array Methods (map, filter, reduce)**: Essential methods for working

### ES7 (ECMAScript 2016)

1. **Exponentiation Operator**: `**` (exponential).
2. **Array.prototype.includes()**: Checks if an array contains a certain value.

### ES8 (ECMAScript 2017)

1. **Async/Await**: Syntax for writing asynchronous code.
2. **Object.entries() and Object.values()**: Extracting properties from an object.

### ES9 (ECMAScript 2018)

1. **Rest/Spread Properties**: More capabilities for objects.
2. **Asynchronous Iteration**: `for-await-of` loop for async iterations.

### ES10 (ECMAScript 2019)

1. **Array.prototype.flat() and flatMap()**: Flattening nested arrays.
2. **Object.fromEntries()**: Create an object from a list of key-value pairs.

### ES11 (ECMAScript 2020)

1. **Dynamic Import**: Asynchronously importing modules.
2. **BigInt**: Support for very large integers.
3. **Optional Chaining Operator**: Easily access deeply nested object properties without explicit null-checks.
4. **Nullish Coalescing Operator**: `??` operator for null or undefined values.

### ES12 (ECMAScript 2021)

1. **Logical Assignment Operators**: `||=`, `&&=`, `??=`.
2. **String.prototype.replaceAll()**: Replace all matching substrings.
3. **Promise.any()**: Returns the first successful Promise.

### ES13 (ECMAScript 2022)

1. **Class Fields**: Easier way to declare properties of a class.
2. **Top-Level await**: Await async operations at the top level.

### ES14 (ECMAScript 2023)

1. **Array Methods**: findLast(), findLastIndex(), toReversed(), toSorted(), toSpliced(), and with().

### ES15 (ECMAScript 2024)

1. **Object.groupBy() and Map.groupBy()**: Group elements of an object or map.
2. **Temporal API**: Modern date

## Async

- Prefer Async/Await, as it makes your asynchronous code read more like synchronous code.

## Other

- Avoid `this` keyword.

# Summary TypeScript

## Links

- [TypeScript Roadmap](https://roadmap.sh/typescript)
- [TypeScript Reference](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [YouTube - Enum vs as const](https://www.youtube.com/watch?v=Anu8vHXsavo)

## JS vs TS

| Feature        | JavaScript                        | TypeScript                                                        |
| -------------- | --------------------------------- | ----------------------------------------------------------------- |
| File extension | .js                               | .ts                                                               |
| Environment    | Native (browser, NodeJS)          | Needs transpilation for browser / alternative to NodeJS: bun/deno |
| Typing         | Dynamic (type checked at runtime) | Static (type checked during development)                          |
| Error Handling | Errors only appear at runtime     | Errors caught during compilation                                  |
| IDE Support    | Limited (no type hints)           | Excellent (type hints, autocomplete)                              |
| Features       | ES5/ES6+                          | ES6+ plus advanced features (e.g., interfaces, enums)             |

Example using [Bun](https://bun.sh/):

```json
{
  "scripts": {
    "check-types": "tsc --noEmit",
    "build": "bun build src/index.ts --outdir ./dist",
    "typebuild": "npm run check-types && npm run build"
  }
}
```

## Type vs Interface

- If you're not working with Classes, prefer Type Alias, Interface can be interesting if you need [merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)
- `type` or `interface` behave almost exactly the same
- You can do more with `type` (union, intersection, alias for primitives & tuples)
- Interface in typescript doesn't behave the same as in other languages, and can be confusing:

| Feature               | TypeScript                  | Java / C#                           |
| --------------------- | --------------------------- | ----------------------------------- |
| Type checking         | Duck typing (structural)    | Nominal (explicit `implements`)     |
| Runtime presence      | Compile-time only           | Exists at runtime                   |
| Objects and functions | Interfaces describe both    | Mostly for classes only             |
| Merging               | Automatic merging supported | Not possible                        |
| Union types           | Supported                   | Not possible or requires workaround |

## Arrays, Objects and Tuples

```typescript
const myArray: number[] = [1, 2, 3];
const myArray2: Array<number> = [1, 2, 3];

const myObject: object = { name: "John" };
const myObject2: { name: string } = { name: "John" };
```

1. **Tuple**: `[number, string]` , bv `const RGB: [red: number, green: number, blue: number] = [0,0,0]`
2. **Record**: `Record<string, Person>`
3. **Enum**: `enum X { a, b }`
