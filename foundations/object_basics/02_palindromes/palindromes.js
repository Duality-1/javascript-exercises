const palindromes = function (str) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

    const validatedStr = str.toLowerCase().split('').filter((letter) => characters.includes(letter)).join('')
    const reversedStr = validatedStr.split('').reverse('').join('')

    return validatedStr === reversedStr

    /* notes
    first we create a variable for letters/numbers
    then we validate it by lowercasing it before split/filter

    and then we return if validatedstr is equal to reversedstr
    */
};

// Do not edit below this line
module.exports = palindromes;
