const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

export const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`Proxy: the value of ${prop} is ${obj[prop]}`);
    return obj[prop];
  },
  set: (obj, prop, value) => {
    console.log(`Proxy: changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
    return obj[prop];
  },
});
