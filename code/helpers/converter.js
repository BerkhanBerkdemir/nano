/**
 * This simple Coverter is here to convert $NANO to raw or otherwise.
 * It is not ment to validate the balance or the transaction has but
 * more a way to convert two type of values interchangeably.
 *
 * Validation process is overly simplied therefore it is advised to
 * make some validation in the amount that is put in the class.
 */
class Converter {
  constructor(amount) {
    this.amount = amount;
  }

  validationOf(amount) {
    if (typeof amount === 'number' && parseFloat(amount, 10) === amount && amount >= 0) {
      return true;
    } if (amount < 0) {
      throw Error('Amount cannot be negative');
    } else {
      throw Error('Amount is not specified as expected');
    }
  }

  toRaw() {
    if (this.validationOf(this.amount)) {
      return this.amount * Math.pow(10, 30);
    }
  }

  toNano() {
    if (this.validationOf(this.amount)) {
      return this.amount / Math.pow(10, 30);
    }
  }
}

module.exports = Converter;
