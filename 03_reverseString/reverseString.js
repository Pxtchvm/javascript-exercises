const reverseString = function(string) {
    let stringArray = string.split('');
    let stringReverse = '';

    for (let i = string.length - 1; i >= 0; i--) {
        stringReverse += stringArray[i];
    }

    return stringReverse;
};

// Do not edit below this line
module.exports = reverseString;
