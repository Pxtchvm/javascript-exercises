const sumAll = function(firstNumber, secondNumber) {
    let largerNumber;
    let smallerNumber;
    let sum = 0;
    
    if (!(typeof firstNumber === "number") || !(typeof secondNumber === "number")) {
        return "ERROR";
    }

    if (firstNumber < 0 || secondNumber < 0) {
        return "ERROR";
    }
    
    if (!(Number.isInteger(firstNumber)) || !(Number.isInteger(secondNumber))) {
        return "ERROR";
    }

    if (firstNumber > secondNumber) {
        largerNumber = firstNumber;
        smallerNumber = secondNumber;
    } else {
        largerNumber = secondNumber;
        smallerNumber = firstNumber;
    }

    for (let i = smallerNumber; i <= largerNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
