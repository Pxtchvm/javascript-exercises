const fibonacci = function (number) {
  if (typeof number === "string") {
    number = +number;
  }
  if (number < 0) {
    return "OOPS";
  }
  if (number === 1) {
    return 1;
  }
  let fibonacci = 1;
  let previous = 0;
  let sum = 0;
  for (let i = 1; i < number; i++) {
    sum = fibonacci + previous;
    previous = fibonacci;
    fibonacci = sum;
  }
  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
