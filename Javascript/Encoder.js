// Duplicate Encoder
// Array.protype.reduce()

//  - Executes a user specified "reducer" callback function
//  - for each element of an array in order
//  - Returns a single value

function duplicateEncode(word) {
  const wordArr = word.toLowerCase().split("");
  return wordArr.reduce(reducer, "");
}

// (accumulator, current value, index, array) => {}
const reducer = (acc, curr, idx, arr) => {
  const encodeLetter =
    arr.filter((letter) => letter === curr).length < 2 ? "(" : ")";
  return acc + encodeLetter;
};

const str = "Success";

console.log(duplicateEncode(str));
