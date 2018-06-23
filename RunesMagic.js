exports.createRuneOrMagic = function(name, mana, value){
    var obj = {};
    obj.name = name;
    obj.mana = mana;
    obj.timeSec = mana;
    obj.timeMS = mana*1000;
    obj.value = value;
    return obj;
}
