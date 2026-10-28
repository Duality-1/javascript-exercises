const removeFromArray = function(arr, ...toRemove) {
    const result = []
    
    arr.forEach((value) => {
        if (!toRemove.includes(value)) {
            result.push(value)
        }
    })

    return result
};

// Do not edit below this line
module.exports = removeFromArray;
