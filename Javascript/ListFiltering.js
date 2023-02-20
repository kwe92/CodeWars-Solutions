// Return a new array with the strings filtered out

function filter_list(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(`Filtered list ${filter_list([1, 2, "aasf", "1", "123rew", 123])}`);
