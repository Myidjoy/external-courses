const Calculator = {
  result: 0,

  add(a = 0) {
    Calculator.result += a;
    return this;
  },

  subtract(a = 0) {
    Calculator.result -= a;
    return this;
  },

  divide(a = 1) {
    Calculator.result /= a;
    return this;
  },

  multiply(a = 0) {
    Calculator.result *= a;
    return this;
  },

  getResult() {
    return this.result;
  },
  reset() {
    this.result = 0;
    return this;
  },
  setState(value = 0) {
    this.result = value;
    return this;
  },
  fetchData(callback) {
    const promise = new Promise((resolve) => {
      setTimeout(callback, 0, 500);
      resolve(500);
    });
    promise.then((value) => {
      this.result = value;
    });
    return this;
  },
};

module.exports = Calculator;
