const { Before, Given, When, Then } = require('cucumber')
const assert = require('assert')
const Calculator = require('../../src/calculator');

let calculator;

Given('the numbers {int} and {int}', function (int, int2, callback) {
    calculator = new Calculator(int, int2);
    callback();
});


When('they are added together', function (callback) {
    calculator.add()
    callback();
});

Then('should the result be {int}', function (int, callback) {
    assert.equal(calculator.getResult(), int)
    callback();
});