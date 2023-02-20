function containsOnlyNumbers(str) {
  return /^[0-9]+$/.test(str);
}

function validatePIN(pin) {
  return /^[0-9]+$/.test(pin) && (pin.length === 4 || pin.length === 6)
    ? true
    : false;
}

console.log(validatePIN("13s4"));
