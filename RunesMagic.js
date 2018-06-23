exports.createRuneOrMagic = function(name, mana, value, qtd){
    var obj = {};
    obj.name = name;
    obj.mana = mana;
    obj.timeSec = mana;
    obj.timeMS = mana*1000;
    obj.value = value;
    obj.qtd = qtd;
    obj.valueQtd = qtd * value;
    return obj;
}
