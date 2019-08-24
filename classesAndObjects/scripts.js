"use strict";
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = "";
        this.age = 0;
        this.name = name;
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getType = function () {
        return this.type;
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    return Person;
}());
var person = new Person("faizan", "fazi");
console.log(person.name, person.username);
console.log(person.getAge());
person.setAge(24);
console.log(person.getAge());
person.setType("wierd");
console.log(person.getType());
