class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    console.log("Woof!");
  }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

// @ts-expect-error - Dynamically adding to prototype
Dog.prototype.play = () => console.log("Playing now!");

// @ts-expect-error - Calling dynamically added method
dog1.play();

class SuperDog extends Dog {
  fly() {
    console.log("Flying!");
  }
}

const dog4 = new SuperDog("Daisy");
dog4.bark();
dog4.fly();
