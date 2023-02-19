// A power function
function pow(num, expo) {
  return num ** expo;
}

// Convert number to string and split the string into an array
function numToArray(number) {
  const strNum = number.toString();

  return strNum.split("");
}

// Return the sum of a number[]
function reducer(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

function narcissistic(number) {
  const strArray = numToArray(number);
  const expo = strArray.length;
  const raisedArray = strArray.map((ele) => pow(parseInt(ele), expo));
  const sum = reducer(raisedArray);

  return sum === number;
}

const num = 153;

console.log(`${num} is a Narcissistic Number: ${narcissistic(153)}`);
