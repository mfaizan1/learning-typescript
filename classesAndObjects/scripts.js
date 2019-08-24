"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Faizan = /** @class */ (function (_super) {
    __extends(Faizan, _super);
    function Faizan(username) {
        var _this = _super.call(this, "faizan", username) || this;
        _this.name = "faizan";
        return _this;
    }
    return Faizan;
}(Person));
var faizan = new Faizan("fazi");
console.log(faizan);
