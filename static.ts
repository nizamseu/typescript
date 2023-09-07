// class Counter {
//   counter: number;
//   constructor(counter: number) {
//     this.counter = counter;
//   }
//   increment() {
//     this.counter = this.counter + 1;
//   }
//   decrement() {
//     this.counter = this.counter - 1;
//   }
// }

// const increment = new Counter(0);
// const decrement = new Counter(1);

class Counter {
  static counter: number = 0;

  static increment() {
    Counter.counter = Counter.counter + 1;
  }
  static decrement() {
    Counter.counter = Counter.counter - 1;
  }
}

const increment = Counter.increment();
const decrement = Counter.decrement();
