/**
 * *Write a function that, given two objects, returns whether or not the two are deeply equivalent -
 * *meaning the contents of the two objects are equal for all keys and sub-keys.
 * TODO find if there is an object method to perform deep equal and try it out.
 *
 * @param {object} obj1 The first object to be compared
 * @param {object} obj2 The second object to be compared
 * @returns {boolean}
 */

const deepEquals = (obj1: IPerson, obj2: IPerson): boolean =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

interface IPerson {
  name: string;
  address: {
    line1: string;
    line2: string;
  };
}

const johnA: IPerson = {
  name: "John",
  address: {
    line1: "321 Anytown",
    line2: "Stoke-on-Trent"
  }
};

const johnB: IPerson = {
  name: "John",
  address: {
    line1: "321 Anytown",
    line2: "Stoke-on-Trent"
  }
};

const johnC: IPerson = {
  name: "John Charles",
  address: {
    line1: "321 Anytown",
    line2: "Stoke-on-Trent"
  }
};

console.log("deepEquals(johnA, johnB): ", deepEquals(johnA, johnB));
console.log("deepEquals(johnA, johnC): ", deepEquals(johnA, johnC));
