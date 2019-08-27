"use strict";
//simple generic
function echo(data) {
    return data;
}
console.log(echo('123').length);
console.log(echo(123).length);
console.log(echo({ data: '123' }).length);
//better generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('123').length);
console.log(betterEcho(123));
console.log(betterEcho({ data: '123' }));
var arr = [1, 4, 2, 5, 22];
arr.push(-222);
// arr.push('111') cannot do this now since we have made array not generic
console.log(arr);
var echo2 = betterEcho;
console.log(echo2('something'));
var simpleMath = /** @class */ (function () {
    function simpleMath() {
    }
    simpleMath.prototype.mul = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return simpleMath;
}());
var mth = new simpleMath();
mth.baseValue = "somthing";
mth.multiplyValue = 20;
console.log(mth.mul());
