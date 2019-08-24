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
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "don't know";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "hello";
console.log(plant.species);
plant.species = 'hi';
console.log(plant.species);
var mathHelpers = /** @class */ (function () {
    function mathHelpers() {
    }
    mathHelpers.circumference = function (diameter) {
        return this.PI * diameter;
    };
    mathHelpers.PI = 3.14;
    return mathHelpers;
}());
console.log(mathHelpers.PI);
console.log(mathHelpers.circumference(10));
