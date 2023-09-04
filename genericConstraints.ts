// Generic constraints holo kichu filed ke mandetory kore deya,je field gula mendatory thakbeoi gula deya lag bei

const spreedFunction3 = <T extends { name: String; age: Number }>(
  myInfo: T
) => {
  const country = "Bangladesh";
  const newData = { ...myInfo, country };
  return newData;
};
const myInfo3 = {
  name: "mnizam",
  age: 27,
  salary: 35,
};

// .................................

// using type
type myInfoType = {
  name: String;
  age: Number;
};
const spreedFunction4 = <T extends myInfoType>(myInfo: T) => {
  const country = "Bangladesh";
  const newData = { ...myInfo, country };
  return newData;
};
const myInfo4 = {
  name: "mnizam",
  age: 27,
  salary: 35,
};

//   using interface

interface ImyInfoType {
  name: String;
  age: Number;
}
const spreedFunction5 = <T extends ImyInfoType>(myInfo: T) => {
  const country = "Bangladesh";
  const newData = { ...myInfo, country };
  return newData;
};
const myInfo5 = {
  name: "mnizam",
  age: 27,
  salary: 35,
};

// ..........................

// generic keyof-constraints
type PersonType = {
  name: String;
  age: Number;
  address: String;
};

type newType = "name" | "age" | "address";

type newTypeUsingKeyOf = keyof PersonType;

// they are same

// const a: newTypeUsingKeyOf = "name";
// const b: newType = "name";

const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
  obj[key];
};

const prropery = getProperty({ name: "Nizam", age: 27 }, "age");

// ekhan theke ami age property ta ber korbo

const prropery2 = getProperty({ name: "Nizam", age: 27 }, "name");
function getArrayItem<T, K extends keyof T>(
  arr: T[],
  index: number,
  key: K
): T[K] {
  const item = arr[index];

  return item[key];
}

const users = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
];

console.log(getArrayItem(users, 0, "name"));
