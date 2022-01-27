function ConvertHandler() {
  const _EXCHANGE = {
    gal: { unit: "gal", verbose: "gallons", returnUnit: "L", ratio: 3.78541 },
    l: { unit: "L", verbose: "liters", returnUnit: "gal", ratio: 1 / 3.78541 },
    lbs: { unit: "lbs", verbose: "pounds", returnUnit: "kg", ratio: 0.453592 },
    kg: { unit: "kg", verbose: "kilograms", returnUnit: "lbs", ratio: 1 / 0.453592 },
    mi: { unit: "mi", verbose: "miles", returnUnit: "km", ratio: 1.60934 },
    km: { unit: "km", verbose: "kilometers", returnUnit: "mi", ratio: 1 / 1.60934 },
  };

  this.getNum = function (input) {
    const numberPortion = input.toLowerCase().replace(/[a-z]*$/, "").toString();
    if (numberPortion === "") return 1
    if (numberPortion.split("/").length > 2) return undefined;
    
    let number;
    try {
      number = eval(numberPortion);
    } catch (e) {
      return undefined;
    }
    return isNaN(number) ? undefined : number
  };

  this.getUnit = function (input) {
    const unit = input.toLowerCase().match(/[a-z]*$/);
    return _EXCHANGE[unit] ? _EXCHANGE[unit].unit : undefined;
  };

  this.getReturnUnit = function (initUnit) {
    const item = _EXCHANGE[initUnit.toLowerCase()];
    return item ? item.returnUnit : undefined;
  };

  this.spellOutUnit = function (unit) {
    const item = _EXCHANGE[unit.toLowerCase()];
    return item ? item.verbose : undefined;
  };

  /**
   * this has no error checking because we assume that to be done in getNum and getUnit
   */
  this.convert = function (initNum, initUnit) {
    return Number((_EXCHANGE[initUnit.toLowerCase()].ratio * initNum).toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    const unitIn = this.spellOutUnit(initUnit);
    const unitOut = this.spellOutUnit(returnUnit);
    return `${initNum} ${unitIn} converts to ${returnNum} ${unitOut}`;
  };
}

module.exports = ConvertHandler;
