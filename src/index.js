// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0) {
        return new Object({});
    } else if (currency > 10000) {
        return new Object({ error: "You are rich, my friend! We don't have so much coins for exchange" });
    }
    var moneyObj = {};
    var calculate = function(moneyName, currentCoin) {
        var res = Math.floor(currency / currentCoin);
        if (res > 0) {
            moneyObj[moneyName] = res;
            currency %= currentCoin;
        }
    }
    calculate("H", 50);
    calculate("Q", 25);
    calculate("D", 10);
    calculate("N", 5);
    calculate("P", 1);
    return moneyObj;
}