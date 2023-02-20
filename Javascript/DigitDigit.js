function squareDigits(num) {
  const numStr = String(num);
  const strArr = numStr.split("");
  const squaredArr = strArr.map((ele) => String(Number(ele) ** 2));

  return Number(squaredArr.join(""));
}

console.log(squareDigits(123));
