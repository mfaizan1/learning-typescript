"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person3 = /** @class */ (function () {
    function Person3() {
    }
    Person3 = __decorate([
        logged
    ], Person3);
    return Person3;
}());
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant2 = /** @class */ (function () {
    function Plant2() {
        this.name = 'Plum tree';
    }
    Plant2 = __decorate([
        printable
    ], Plant2);
    return Plant2;
}());
var newPlant = new Plant2();
newPlant.print();
var Project2 = /** @class */ (function () {
    function Project2(projectName) {
        this.projectName = projectName;
    }
    Project2.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        editable(false)
    ], Project2.prototype, "calcBudget", null);
    return Project2;
}());
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overrideAble(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var project = new Project2("first project");
console.log(project);
project.calcBudget();
// project.calcBudget = function(){
//     console.log(3000);
// }
project.calcBudget();
