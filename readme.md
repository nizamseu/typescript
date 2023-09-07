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

## Can you give an example of how to use generics in TypeScript?

For generic Type we use Angular Brackets (<>).inside the bracket we define the type.Normaly Developer use _T_ for Single Parameter .if there is more than one Parameter then Developer use _T_, _X_, _Y_.
