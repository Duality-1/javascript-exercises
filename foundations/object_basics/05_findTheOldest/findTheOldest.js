function verifyAge(birth, death) {
    death ??= new Date().getFullYear(); // if undefined or null, it sets its death variable to the current year

    return death - birth; // if alive its currYear - birthYear, if dead, then its deathYear - birthYear
}

const findTheOldest = function(arrOfObjs) {
    return arrOfObjs.reduce((oldest, currentPerson) => {   
        oldestAge = verifyAge(oldest.yearOfBirth, oldest.yearOfDeath);
        currentPersonAge = verifyAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return oldestAge > currentPersonAge ? oldest : currentPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
