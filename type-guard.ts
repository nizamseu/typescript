// instanceof Guard

class AnimalClass {
  name: String;
  spaecies: String;

  constructor(name: String, spaecies: String) {
    (this.name = name), (this.spaecies = spaecies);
  }
  makeSound() {
    console.log("making Sound ........");
  }
}
class Dog extends AnimalClass {
  constructor(name: String, spaecies: String) {
    super(name, spaecies);
  }
  makeBarking() {
    console.log(" Dog is Barking");
  }
}

class Cat extends AnimalClass {
  constructor(name: String, spaecies: String) {
    super(name, spaecies);
  }
  makeMeaw() {
    console.log(" Cat is Make Meawing");
  }
}

function getAnimal(obj: AnimalClass) {
  if (obj instanceof Dog) {
    obj.makeBarking();
  } else if (obj instanceof Cat) {
    obj.makeMeaw();
  } else obj.makeSound;
}

const animal1 = new Dog("German Shephard", "Dog");
const animal2 = new Cat("MR.Cat", "Cat");

getAnimal(animal2);
