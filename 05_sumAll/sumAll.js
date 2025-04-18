const sumAll = function(num1, num2) {
    let startNum, endNum, result = 0;

    if (
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        num1 < 0 ||
        num2 < 0
    ) {
        return "ERROR"
    }

    if (num1 > num2) {
        startNum = num2;
        endNum = num1;
    } else {
        startNum = num1;
        endNum = num2;
    }

    for (let i = startNum; i <= endNum; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
