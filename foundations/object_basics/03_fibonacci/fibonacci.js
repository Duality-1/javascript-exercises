const fibonacci = function(num) {
    if (num <= 0 || typeof num !== 'number' || !Number.isInteger(num)) return 'OOPS';

    let afterTheFirst = 1; // explaining: 0... 1, 0 is the first
    let beforeTheSecond = 0;

    for (let i = 2; i <= num; i++) {
        const currentNum = afterTheFirst + beforeTheSecond;
        [beforeTheSecond, afterTheFirst] = [afterTheFirst, currentNum];
    }

    return afterTheFirst;
};

// Do not edit below this line
module.exports = fibonacci;
