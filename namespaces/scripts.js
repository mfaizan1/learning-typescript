var myMath;
(function (myMath) {
    var PI = 3.14;
    function calcCircuference(diameter) {
        return diameter * PI;
    }
    myMath.calcCircuference = calcCircuference;
})(myMath || (myMath = {}));
var myMath;
(function (myMath) {
    function calcRect(length, width) {
        return width * length;
    }
    myMath.calcRect = calcRect;
})(myMath || (myMath = {}));
/// <reference path="./circleMath.ts" /> 
/// <reference path="./rectMath.ts" /> 
console.log(myMath.calcCircuference(29));
console.log(myMath.calcRect(10, 20));
