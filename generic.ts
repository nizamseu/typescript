console.log("generic");

// array

const num: number[] = [1, 2, 3];

const num2: Array<number> = [1, 2, 3];
const num3: Array<string> = ["1", "2", "3"];

// array of object

const arrayOfObject: Array<{ name: string; age: number }> = [
  { name: "nizam", age: 23 },
  { name: "babu", age: 45 },
];

// main

type genericArray<T> = Array<T>;

const num4: genericArray<number> = [1, 2, 3];
const num5: genericArray<string> = ["1", "2", "3"];
//  ekhane type ta dynamic kora hyese

// ami ekhane genericArray<number> er modde je type debo oita ekhane " genericArray<T>" er T er modde  receive kore   Array<T> te pathiye debe

const arrayOfObject2: genericArray<{ name: string; age: number }> = [
  { name: "nizam", age: 23 },
  { name: "babu", age: 45 },
];

// using type Alis
type User22 = {
  name: string;
  age: number;
};

const arrayOfObject3: genericArray<User22> = [
  { name: "nizam", age: 23 },
  { name: "babu", age: 45 },
];

// using type Interface
interface User23 {
  name: string;
  age: number;
}
const arrayOfObject4: genericArray<User23> = [
  { name: "nizam", age: 23 },
  { name: "babu", age: 45 },
];

// 3-4: Generic in Interface

interface GInterface<T> {
  name: string;
  age: number;
  husband: T;
}

const data2: GInterface<Boolean> = {
  name: "nizam",
  age: 23,
  husband: false,
};
