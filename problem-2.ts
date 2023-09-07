interface IPerson {
  name: string;
  age: number;
}

function filterAdultPerson(params: IPerson[]): IPerson[] {
  return params.filter((person) => person.age >= 18);
}
const data: IPerson[] = [
  { name: "Nizam", age: 27 },
  { name: "Aman", age: 30 },
  { name: "Babu", age: 10 },
];

const results: IPerson[] = filterAdultPerson(data);
console.log(results);
