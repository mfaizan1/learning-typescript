"use strict";
var myMath;
(function (myMath) {
    var PI = 3.14;
    function calcCircuference(diameter) {
        return diameter * PI;
    }
    myMath.calcCircuference = calcCircuference;
})(myMath || (myMath = {}));
