class Person {
  name: String;
  age: Number;
  address: String;

  constructor(name: String, age: number, address: String) {
    (this.name = name), (this.age = age), (this.address = address);
  }
  goToSleep(hr: number) {
    return `${this.name} will sleep for ${hr}`;
  }
}

// .......................
class Student extends Person {
  constructor(name: String, age: number, address: String) {
    super(name, age, address);
  }
}

// .....................
class Teacher extends Person {
  designation: String;

  constructor(name: String, age: number, address: String, designation: String) {
    super(name, age, address);
    this.designation = designation;
  }
  takeClass(hr: number) {
    return `${this.name} will Take class for ${hr}`;
  }
}

const teacher1 = new Teacher("nizam", 24, "Comilla", "Teacher");
console.log(teacher1.goToSleep(10));
