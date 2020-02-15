class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add() {
    this.result = this.x + this.y;
  }

  getResult() {
    return this.result;
  }

  /**
   * @param  {} p1
   */
  one(p1) {
    return p1;
  }
  /**
   * @param  {} ...args
   */
  argy(...args) {}
}

module.exports = Calculator;
