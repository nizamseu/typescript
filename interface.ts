console.log("hi");
// this is for primitive type data
type User = {
  name: string;
  age: number;
};

// this is for object

interface IUser {
  name: string;
  age: number;
}

const userWithTypeAlias: User = {
  name: "nizam",
  age: 27,
};

const userWithInterface: IUser = {
  name: "nizam",
  age: 25,
};

console.log("name:", userWithInterface.name);

// extended using type Alias

type User1 = {
  name: string;
  age: number;
};

type User2 = {
  role: string;
};

type extendedAliasUser1 = User1 & {
  skill: string;
};
const testUser: extendedAliasUser1 = {
  name: "babu",
  age: 25,
  skill: "python",
};

console.log(testUser.skill);

type extendedAliasUser2 = User1 &
  User2 & {
    level: string;
  };

// interface extended

interface IExtendUser extends IUser {
  role: string;
}

const newUser: IExtendUser = {
  name: "Aman",
  age: 27,
  role: "developer",
};

// typescript Function

const AddNumber = (number1: number, number2: number): number =>
  number1 + number2;

const AddNumber2 = (number1: number, number2: number): number => {
  return number1 + number2;
};

// function using typeAlias

type AddNum = (number1: number, number2: number) => number;
const AddNumber3: AddNum = (number1, number2) => number1 + number2;

// function using interface

interface IAddNum {
  (number1: number, number2: number): number;
}

const AddNumber4: IAddNum = (number1, number2) => number1 + number2;

console.log(AddNumber4(10, 30));

// array in typescript

const rollNumber: number[] = [1, 2, 3, 4];

// using typeAlias
type RollNumbers = number[];
const studentRoll: RollNumbers = [1, 2, 3, 4, 5, 6];

// using interface
interface IRollNumbers {
  [index: number]: number;

  // here ,we know tha array index always number type ,thats why indexe:number
  // after : ( [index:number]:number) it will be array type
}
const studentRolls: IRollNumbers = [1, 2, 3, 4, 5, 6];

interface IRollNumbers2 {
  [index: number]: string;
}
const studentRolls2: IRollNumbers2 = ["1", " 2", "3"];
