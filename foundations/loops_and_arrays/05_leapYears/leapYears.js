const leapYears = function(year) {
    const divisibleByFour = year % 4 === 0
    const divisibleByOneHundred = year % 100 === 0 // isn't a leap year unless divisible by 400
    const divisibleByFourHundred = year % 400 === 0

    return divisibleByFour && !divisibleByOneHundred || divisibleByFourHundred
};

// Do not edit below this line
module.exports = leapYears;
