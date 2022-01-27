const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', () => {
  test("convertHandler should correctly read a whole number input.", () => {
    assert.isNumber(convertHandler.getNum("1"));
    assert.isNumber(convertHandler.getNum("0"));
    assert.isNumber(convertHandler.getNum("-15"));
  });
  test("convertHandler should correctly read a decimal number input.", () => {
    assert.fail();
  });
  test("convertHandler should correctly read a fractional input.", () => {
    assert.fail();
  });
  test("convertHandler should correctly read a fractional input with a decimal.", () => {
    assert.fail();
  });
  test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).", () => {
    assert.fail();
  });
  test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.", () => {
    assert.fail();
  });
  test("convertHandler should correctly read each valid input unit.", () => {
    assert.fail();
  });
  test("convertHandler should correctly return an error for an invalid input unit.", () => {
    assert.fail();
  });
  test("convertHandler should return the correct return unit for each valid input unit.", () => {
    assert.fail();
  });
  test("convertHandler should correctly return the spelled-out string unit for each valid input unit.", () => {
    assert.fail();
  });
  test("convertHandler should correctly convert gal to L.", () => {
    assert.fail();
  });
  test("convertHandler should correctly convert L to gal.", () => {
    assert.fail();
  });
  test("convertHandler should correctly convert mi to km.", () => {
    assert.fail();
  });
  test("convertHandler should correctly convert km to mi.", () => {
    assert.fail();
  });
  test("convertHandler should correctly convert lbs to kg.", () => {
    assert.fail();
  });
  test("convertHandler should correctly convert kg to lbs.", () => {
    assert.fail();
  });
});