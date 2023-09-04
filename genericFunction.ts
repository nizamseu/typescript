// Arrow Function

const createArray = (param: String): String[] => {
  return [param];
};

const result1 = createArray("Bangladesh");
console.log(result1);

// Using Generic

const createArray2 = <T>(param: T): T[] => {
  return [param];
};

// srting
const result11 = createArray2<String>("Bangladesh");

// Number
const result13 = createArray2<Number>(10);

// object

type Name = {
  name: String;
};
const result14 = createArray2<Name>({ name: "Nizam" });

// .........................................
const spreedFunction = (myInfo: object) => {
  const country = "Bangladesh";
  const newData = { ...myInfo, country };
  return newData;
};
const myInfo = {
  name: "mnizam",
  age: 27,
  salary: 35,
};

const inffo = spreedFunction(myInfo);

// -------------------------------------
const spreedFunction2 = <T>(myInfo: T) => {
  const country = "Bangladesh";
  const newData = { ...myInfo, country };
  return newData;
};
const myInfo2 = {
  name: "mnizam",
  age: 27,
  salary: 35,
};

const inffo2 = spreedFunction2(myInfo2);
