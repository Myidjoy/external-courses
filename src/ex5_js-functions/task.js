const Calculator = {
  result: 0,
  add(a) {
    if (a === undefined) return Calculator.add;
    Calculator.result += a;
    return Calculator.add;
  },
  subtract(a) {
    if (a === undefined) return Calculator.subtract;
    Calculator.result -= a;
    return Calculator.subtract;
  },
  divide(a) {
    if (a === undefined) return Calculator.divide;
    Calculator.result /= a;
    return Calculator.divide;
  },
  multiply(a) {
    if (a === undefined) return Calculator.multiply;
    Calculator.result *= a;
    return Calculator.multiply;
  },
  getResult() {
    return Calculator.result;
  },
  reset() {
    Calculator.result = 0;
    return Calculator.result;
  },
};
module.exports = Calculator;
