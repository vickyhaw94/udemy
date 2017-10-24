'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

var user = {
    name: 'Andrew',
    cities: ['A', 'B', 'C'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived ' + city;
        });
    }
};
console.log(user.printPlacesLived());

// Challenge area

// numbers - array of numbers
// multiplyBy - single number
// multiply - return a new array where the number have been multiplied

var multiplier = {
    number: [1, 5, 10],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.number.map(function (nums) {
            return nums * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
