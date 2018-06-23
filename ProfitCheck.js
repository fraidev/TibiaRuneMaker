var value = 0;
exports.profitEvent = function(newvalue){
    value = value + newvalue;
    console.log("Total Value: " + value + " Gold");
    return value;
}
