// I feel bad about this after looking at the solutions T_T

const removeFromArray = function(array, ...items) {
    for (item of items) {
        let filteredItems = array.filter((itemFilter) => itemFilter === item);
        for (item of filteredItems) {
            array.splice(array.indexOf(item), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
