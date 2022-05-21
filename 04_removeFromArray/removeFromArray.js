const removeFromArray = function() {
    let array = [1,2,3,4];
    let deletion = [2,3];

    array = array.filter(item => !deletion.includes(item));

    console.log(array);
    return array;
};

removeFromArray();

// Do not edit below this line
module.exports = removeFromArray;
