/**
 *  TODO Find the missing letter
 *  *Write a method that takes an array of consecutive (increasing)
 *  *letters as input and that returns the missing letter in the array.
 *  *You will always get an valid array. And it will be always exactly one letter be missing.
 *  *The length of the array will always be at least 2. The array will always contain letters in only one case
 */

function findMissingLetter(array: string[]): string {
  for (let i: number = 0; i < array.length; i++) {
    if (array[i].charCodeAt(0) + 1 !== array[i + 1].charCodeAt(0)) {
      return String.fromCharCode(array[i].charCodeAt(0) + 1);
    }
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));
