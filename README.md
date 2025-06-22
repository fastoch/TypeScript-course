src = https://www.youtube.com/watch?v=SpwzRDUQ1GI

# Intro

This course gives you an understanding of the fundamentals of TS and why it's so useful.  
instructor = Bob Ziroll

# Reasons to use TS

- app-crashing runtime errors are dramatically reduced by TS, which checks the code at compile time before it ever gets deployed
- using TS "turns on" a number of neat features that make your dev life a lot easier:
  - autocompletion
  - refactoring capabilities
  - immediate error checking
  - and more
- TS is now considered a critical skill by most companies, knowing a little TS can set you apart from other junior dev candidates

# Overview

- Basic, literal, and custom types
- optional properties
- union types
- type narrowing
- built-in utility types
- generics: allow you to create your own utility types, or to make your functions and other types more flexible

# Pizza App

no HTML or anything else, just a very simple console-based application  
- start by writing in JS, then refactor to TS
- the initial file is named `index.js`
- it runs well when executed in the terminal via `node index.js`
- however, TS will show us why our code is prone to errors and not very robust

# Moving to TS

Let's rename our `index.js` into `index.ts`, and see how many red squigglies we get with a functional JS code.  


# Primitive Data Types

- `string`
- `number`
- `boolean`

# Custom type

```ts
type Pizza = {
  topping: string,
  size: string
  price: number
}
```

# Optional properties

```ts
type Pizza = {
  topping: string,
  size: string
  price: number
  extraCheese?: boolean
}
```

The `?` makes the property optional, which can be very convenient. However, it comes with some **caveat**.  
Indeed, if you try to access the `extraCheese` property from a Pizza object that doesn't have it, you'll get an error.  
TS will be happy with your code, but the runtime will throw an error.  


---
@45/126
