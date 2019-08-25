"use strict";
var myMath;
(function (myMath) {
    function calcRect(length, width) {
        return width * length;
    }
    myMath.calcRect = calcRect;
})(myMath || (myMath = {}));
