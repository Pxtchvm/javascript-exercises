const findTheOldest = function (array) {
  return array.reduce(
    (oldestPerson, currentPerson) => {
      let currentPersonAge;
      let oldestPersonAge;
      if (currentPerson.yearOfDeath === undefined) {
        currentPersonAge = new Date().getFullYear() - currentPerson.yearOfBirth;
      } else {
        currentPersonAge =
          currentPerson.yearOfDeath - currentPerson.yearOfBirth;
      }
      if (oldestPerson.yearOfDeath === undefined) {
        oldestPersonAge = new Date().getFullYear() - oldestPerson.yearOfBirth;
      } else {
        oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
      }
      if (currentPersonAge > oldestPersonAge) {
        return currentPerson;
      }
      return oldestPerson;
    });
};

// Better Solution:
/* 
const findTheOldest = function(array) {
  return array.reduce((oldestPerson, currentPerson) => {
    // Calculate current person's age
    const currentPersonAge = currentPerson.yearOfDeath 
      ? currentPerson.yearOfDeath - currentPerson.yearOfBirth 
      : new Date().getFullYear() - currentPerson.yearOfBirth;
    
    // Calculate oldest person's age found so far
    const oldestPersonAge = oldestPerson.yearOfDeath 
      ? oldestPerson.yearOfDeath - oldestPerson.yearOfBirth 
      : new Date().getFullYear() - oldestPerson.yearOfBirth;
    
    // Return the person with the higher age
    return currentPersonAge > oldestPersonAge ? currentPerson : oldestPerson;
  });
}; */

// Do not edit below this line
module.exports = findTheOldest;
