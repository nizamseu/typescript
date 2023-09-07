class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends Shape {
  length: number;
  width: number;

  constructor(length: number, width: number) {
    super();
    this.length = length;
    this.width = width;
  }
  getArea(): number {
    return this.length * this.width;
  }
}
