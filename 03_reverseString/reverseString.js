const reverseString = function(string) {
    let stringArray = string.split("");
    stringArray.reverse();
    let result = stringArray.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
