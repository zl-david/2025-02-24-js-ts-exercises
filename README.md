# 2025-02-24-js-ts-exercises

## Scope, Closure, Hoisting, Execution Context

- [Visualize execution context, scope & closure](https://tylermcginnis.com/javascript-visualizer/)
- [Visualize event loop](https://www.jsv9000.app/)

## Functions

- [Exercise](./01-functions/)

## ES6+

- [ES6](./02-es6)
- [Array Methods](./03-array-methods)

## Async/Await

- [Async/Await & Fetch](./04-async)
- [Orval.js](./05-async-orval)

# TypeScript

## 07 New TS Project

Initialize project

```sh
mkdir 07-new-ts-project
cd 07-new-ts-project
npm init -y
```

Install TypeScript

```sh
npm install --save-dev typescript
```

Generate a tsconfig.json File

```sh
npx tsc --init
```

Open `tsconfig.json` and change out directory to './dist'

```json
{
  //...
  "outDir": "./dist"
  //...
}
```

Create a file `index.ts` in a `src` folder

```typescript
// src/index.ts
const message: string = "Hello, TypeScript!";
console.log(message);
```

Compile TypeScript

```sh
npx tsc
```

Execute

```sh
node dist/index.js
```

## TypeScript

- [Basic types](./08-typescript-basic-types)
- [Classes](./09-classes)
- [Advanced types](./10-advanced-types)
- [More generics](https://github.com/zl-david/typescript-generics)
