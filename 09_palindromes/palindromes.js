/**
 *
 * @param {String} string
 */
const palindromes = function (string) {
  let formattedString = removePunctuation(string.toLowerCase());
  let middleIndex = Math.floor(formattedString.length / 2);
  if (formattedString.length % 2 === 0) {
    return (
      formattedString.slice(0, middleIndex) ===
      reverse(formattedString.slice(middleIndex, formattedString.length))
    );
  }
  return (
    formattedString.slice(0, middleIndex) ===
    reverse(formattedString.slice(middleIndex + 1, formattedString.length))
  );
};

function reverse(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string.at(i);
  }
  return reversedString;
}

function removePunctuation(string) {
  const punctuationArray = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
    " ",
  ];
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let currentChar = string.at(i);
    if (punctuationArray.includes(currentChar)) {
      continue;
    }
    newString += currentChar;
  }
  return newString;
}
// Do not edit below this line
module.exports = palindromes;
