const removeFromArray = function(arrayToEdit, ...args) {

    return arrayToEdit.filter(x => !args.includes(x));

};

// Do not edit below this line
module.exports = removeFromArray;
