TypeScript is a programming language that builds on JavaScript . It is often referred to as a "superset" of JavaScript. TypeScript is the valid JavaScript code, but TypeScript have some additional features and syntax for checking type .

There are some key differences between JavaScript and TypeScript.

1.Interfaces and Custom Types
2.Static Typing
3.Type Annotations and Inference:

## Q2 :Can you explain the difference between "interface" and "type" in TypeScript?

Type Alias and interface both are almost simillar and some times we can choose both of them. Almost all the feature of an interface are available in type alias. Most of the time we use interface for object. but we can also use type alis for object

````js
//type Alis >

type User = {
name: string;
age: number;
};

// interface >

interface IUser {
name: string;
age: number;
}
```js
````

## Q 3: Can you give an example of how to use generics in TypeScript?

For generic Type we use Angular Brackets (<>).inside the bracket we define the type.Normaly Developer use **T** for Single Parameter .if there is more than one Parameter then Developer use **T**, **X** , **Y** .

```js
function getFirstElement<T>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
}

// Example usage:

const numbers: number[] = [1, 2, 3, 4, 5];
const firstNumber: number | undefined = getFirstElement(numbers);
console.log(firstNumber); // Output: 1

const strings: string[] = ["apple", "banana", "cherry"];
const firstString: string | undefined = getFirstElement(strings);
console.log(firstString); // Output: "apple"

const emptyArray: number[] = [];
const firstEmpty: number | undefined = getFirstElement(emptyArray);
console.log(firstEmpty); // Output: undefined
```

## Q5: Can you give an example of how to use enums in TypeScript?

there are some example of **enum**

```js
enum Color {
  Red,       // this is 0
  Green,     // this is 1
  Blue,      // this is 2
  Yellow,    // this is 3
}

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Using of them
let selectedColor: Color = Color.Red;
let currentDirection: Direction = Direction.Right;

//used in conditionals
if (selectedColor === Color.Green) {
  console.log("Selected color is green");
} else {
  console.log("Selected color is not green");
}

```
