import useState from "./useState";

/**
 * *Creates a mathematical counter. Takes a starting value
 * *Uses react hook like function to create and change a counter.
 * @param {number} start
 * @returns {function} inc, dec
 */

function counter(start: number) {
  const [ count, changeCount ] = useState(start);

  const inc = () => changeCount(count() + 1);
  const dec = () => changeCount(count() - 1);

  return Object.freeze({ inc, dec });
}

const numberCounter = counter(14);

console.log("numberCounter.dec(): ", numberCounter.dec());
console.log("numberCounter.inc(): ", numberCounter.inc());
