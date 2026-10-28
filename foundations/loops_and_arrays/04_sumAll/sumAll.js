const sumAll = function(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number' ||
        n1 < 0 || n2 < 0 ||
        !Number.isInteger(n1) || !Number.isInteger(n2)
    ) {
        return 'ERROR'
    }

    if (n1 > n2) [n2, n1] = [n1, n2] // swaps values

    let result = 0

    for (let i = n1; i <= n2; i++) {
        result += i
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;
