class PPerson {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  getDetails() {
    return `name:${this.name}, age: ${this.age}`;
  }
}

class SStudent extends PPerson {
  private grade: string;
  constructor(grade: string, name: string, age: number) {
    super(name, age);
    this.grade = grade;
  }
  getGrade() {
    return `grade:${this.grade}`;
  }
}
