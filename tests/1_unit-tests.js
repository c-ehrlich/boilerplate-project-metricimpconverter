const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', () => {
  test("convertHandler should correctly read a whole number input.", () => {
    assert.equal(convertHandler.getNum("1mi"), 1);
    assert.equal(convertHandler.getNum("0mi"), 0);
    assert.equal(convertHandler.getNum("-15mi"), -15);
  });
  test("convertHandler should correctly read a decimal number input.", () => {
    assert.equal(convertHandler.getNum("3.5mi"), 3.5);
    assert.equal(convertHandler.getNum("-999.999mi"), -999.999);
    assert.equal(convertHandler.getNum("0.000001mi"), 0.000001);
  });
  test("convertHandler should correctly read a fractional input.", () => {
    assert.equal(convertHandler.getNum("3/2mi"), 1.5);
    assert.equal(convertHandler.getNum("-3/2mi"), -1.5);
  });
  test("convertHandler should correctly read a fractional input with a decimal.", () => {
    assert.equal(convertHandler.getNum("3.5/1.75mi"), 2);
    assert.equal(convertHandler.getNum("-3.5/1.75mi"), -2);
  });
  test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).", () => {
    assert.isUndefined(convertHandler.getNum("3/2/3mi"));
  });
  test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.", () => {
    assert.equal(convertHandler.getNum("mi"), 1);
  });
  test("convertHandler should correctly read each valid input unit.", () => {
    assert.equal(convertHandler.getUnit("1gal"), "gal");
    assert.equal(convertHandler.getUnit("1L"), "L");
    assert.equal(convertHandler.getUnit("1kg"), "kg");
    assert.equal(convertHandler.getUnit("1lbs"), "lbs");
    assert.equal(convertHandler.getUnit("1mi"), "mi");
    assert.equal(convertHandler.getUnit("1km"), "km");
  });
  test("convertHandler should correctly return an error for an invalid input unit.", () => {
    assert.isUndefined(convertHandler.getUnit("1foo"));
  });
  test("convertHandler should return the correct return unit for each valid input unit.", () => {
    assert.equal(convertHandler.getReturnUnit("gal"), "L");
    assert.equal(convertHandler.getReturnUnit("L"), "gal");
    assert.equal(convertHandler.getReturnUnit("kg"), "lbs");
    assert.equal(convertHandler.getReturnUnit("lbs"), "kg");
    assert.equal(convertHandler.getReturnUnit("mi"), "km");
    assert.equal(convertHandler.getReturnUnit("km"), "mi");
    assert.equal(convertHandler.getReturnUnit("foo"), undefined);
  });
  test("convertHandler should correctly return the spelled-out string unit for each valid input unit.", () => {
    assert.equal(convertHandler.spellOutUnit("gal"), "gallons");
    assert.equal(convertHandler.spellOutUnit("L"), "liters");
    assert.equal(convertHandler.spellOutUnit("kg"), "kilograms");
    assert.equal(convertHandler.spellOutUnit("lbs"), "pounds");
    assert.equal(convertHandler.spellOutUnit("mi"), "miles");
    assert.equal(convertHandler.spellOutUnit("km"), "kilometers");
    assert.equal(convertHandler.spellOutUnit("foo"), undefined);
  });
  // test("convertHandler should correctly convert gal to L.", () => {
  //   assert.equal(convertHandler.convert(1, "gal"), 3.78541);
  // });
  // test("convertHandler should correctly convert L to gal.", () => {
  //   assert.fail();
  // });
  // test("convertHandler should correctly convert mi to km.", () => {
  //   assert.fail();
  // });
  // test("convertHandler should correctly convert km to mi.", () => {
  //   assert.fail();
  // });
  // test("convertHandler should correctly convert lbs to kg.", () => {
  //   assert.fail();
  // });
  // test("convertHandler should correctly convert kg to lbs.", () => {
  //   assert.fail();
  // });
});