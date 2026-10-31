const add = function(n1, n2) {
	return n1 + n2
};

const subtract = function(n1, n2) {
	return n1 - n2
};

const sum = function(arrOfNums) {
	return arrOfNums.reduce((total, num) => total + num, 0)
};

const multiply = function(arrOfNums) {
  return arrOfNums.reduce((total, num) => total * num)
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(num) {
	let result = 1;

  for (let i = num; i > 0; i--) {
    result *= i
  }

  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
