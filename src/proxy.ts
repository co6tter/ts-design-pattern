const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

type Person = typeof person;

const personProxy = new Proxy(person, {
  get: (obj: Person, prop: keyof Person) => {
    if (!obj[prop]) {
      console.log(`Hmm.. this property doesn't seem to exist`);
    } else {
      // console.log(`The value of ${prop} is ${obj[prop]}`);
      // NOTE: Reflect
      console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
    }
  },
  set: (obj: Person, prop: keyof Person, value: Person[keyof Person]) => {
    if (prop === "age" && typeof value !== "number") {
      console.log("Sorry, you can only pass numeric values for age.");
    } else if (prop === "name" && typeof value === "string" && value.length < 2) {
      console.log("You need to provide a valid name.");
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
      // (obj[prop] as Person[keyof Person]) = value;
      // NOTE: Reflect
      Reflect.set(obj, prop, value);
    }
    return true;
  },
});

personProxy.name;
personProxy.age = 43;
personProxy.name = "Jane Doe";
