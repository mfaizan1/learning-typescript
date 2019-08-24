"use strict";
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    return Person;
}());
var person = new Person("faizan", "fazi");
console.log(person.name, person.username);
