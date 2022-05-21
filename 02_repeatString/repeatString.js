const repeatString = function(string = "hey", num = Math.floor(Math.random()*1000)) {
    let result = "";

    if(num < 0){
        result = "ERROR"
    } else{
        for(i = 0; i<num;i++){
            result = result.concat(string);
        };
    }
    return result;
};

console.log(repeatString());

// Do not edit below this line
module.exports = repeatString;
