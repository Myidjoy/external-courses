const Calculator = {
  result: 0,

  add(a = 0) {
    this.result += a;

    return this;
  },

  subtract(a = 0) {
    this.result -= a;

    return this;
  },

  divide(a = 1) {
    this.result /= a;

    return this;
  },

  multiply(a = 0) {
    this.result *= a;

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
    this.callback = setTimeout(() => callback(500), 1000);

    return this;
  },
};

module.exports = Calculator;
