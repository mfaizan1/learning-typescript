"use strict";
function echo(data) {
    return data;
}
console.log(echo('123').length);
console.log(echo(123).length);
console.log(echo({ data: '123' }).length);
