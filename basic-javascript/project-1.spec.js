const helpers = require('./project-1');
// start testing!
test('run all tests', () => {});
it('runs tests using it() while running test()', () => {});

//multiplybyten
describe('multiplybyten()', () => {
  it('multiplies a number by ten', () => {
    const expected = 100;
    const actual = helpers.multiplyByTen(10);
    expect(actual).toEqual(expected);
  });

  it('gives error if its a string', () => {
    expect(() => {
      helpers.multiplyByTen('123');
    }).toThrow();
    expect;
  });

  it('should return 0 if no value', () => {
    const product = helpers.multiplyByTen();
    expect(product).toBe(0);
  });
});


//subtractbyfive
describe('subtractfive()', () => {
  it('subtracts value by five', () => {
    const expected = 6;
    const actual = helpers.subtractFive(11);
    expect(actual).toEqual(expected);
  });

  it('returns null if no value', () => {
    const actual = helpers.subtractFive(undefined);
    expect(actual).toBe(null);
  });

  it('error if a string', () => {
    expect(() => {
      helpers.subtractFive('hello');
    }).toThrow();
    expect;
  });

});

//same length strings
describe('areSameLength', () => {
  it('checks if strings are same length', () => {
    const expected = true;
    const actual = helpers.areSameLength('cat', 'cat');
  });

  it('checks if strings are not same length', () => {
    const expected = false;
    const actual = helpers.areSameLength('cat', 'cats');
  });

  it('throws error if no string is passed', () => {
    expect(() => {
      helpers.areSameLength(123, 123);
    }).toThrow();
    expect;
  });

});

//are values equal
describe('checks if values are equal', () => {
  it('checks if values are equal', () => {
    const expected = true;
    const actual = helpers.areEqual('cat', 'cat');
    expect(actual).toEqual(expected);
  });

  it('checks if values are not equal', () => {
    const expected = false;
    const actual = helpers.areEqual(3, 4);
    expect(actual).toEqual(expected);
  });

  it('throws error if values are not equal', () => {
    const expected = false;
    const actual = helpers.areEqual(3, '3');
    expect(actual).toEqual(expected);
  });
});

//less than 90
describe('lessThanNinety()', () => {
  it('checks if values are less than ninety', () => {
    const expected = true;
    const actual = helpers.lessThanNinety(80);
    expect(actual).toEqual(expected);
  });

  it('checks if values are not less than ninety', () => {
    const expected = false;
    const actual = helpers.lessThanNinety(100)
    expect(actual).toEqual(expected);
  });

  it('throws error if a string is passed', () => {
    expect(() => {
      helpers.lessThanNinety('hello');
    }).toThrow();
    expect;
  });
});

//greater than 50
describe('greaterThanFifty()', () => {
  it('checks if value is greater than fifty', () => {
    const expected = true;
    const actual = helpers.greaterThanFifty(51);
    expect(actual).toEqual(expected);
  });

  it('checks if values are less than fifty', () => {
    const expected = false;
    const actual = helpers.greaterThanFifty(40);
    expect(actual).toEqual(expected);
  });

  it('throws error if a string is passed', () => {
    expect(() => {
      helpers.greaterThanFifty('hello');
    }).toThrow();
    expect;
  });
});

//add 2 values
describe('add()', () => {
  it('adds sum of numbers', () => {
    const expected = 150;
    const actual = helpers.add(75, 75);
    expect(actual).toEqual(expected);
  });

  it('rounds to the nearest hundredth', () => {
    const expected = 149.98;
    const actual = helpers.add(100.412, 49.568);
    expect(actual).toBeCloseTo(expected);
  });

  it('throws error if a string is passed', () => {
    expect(() => {
      helpers.add('hello', 'world');
    }).toThrow();
    expect;
  });
});

//subtract 2nd value from 1st value
describe('subtract()', () => {
  it('subtracts the 2nd value from the 1st value', () => {
    const expected = 75;
    const actual = helpers.subtract(150, 75);
    expect(actual).toEqual(expected);
  });

  it('accepts decimals rounded to nearest hundredth', () => {
    const expected = 100.1;
    const actual = helpers.subtract(50.512, 50.41);
    expect(actual).toEqual(expected);
  });

  it('throws error if a string is passed', () => {
    expect(() => {
      helpers.subtract('hello', 'world');
    }).toThrow();
    expect;
  });
});

//divide
describe('divide()', () => {
  it('divides 1st value by the 2nd value', () => {
    const expected = 50;
    const actual = helpers.divide(100, 2);
    expect(actual).toEqual(expected);
  });

  it('accepts decimal values rounded to nearest tenth', () => {
    const expected = 50;
    const actual = helpers.divide(100, 2);
    expect(actual).toEqual(expected);
  });

  it('accepts fractions', () => {
    const expected = 0.44;
    const actual = helpers.divide(1/3, 6/8);
    expect(actual).toBeCloseTo(expected);
  });

  it('throws error if a string is poassed', () => {
    expect(() => {
      helpers.divide('hello', 'world');
    }).toThrow();
    expect;
  });
});

describe('multiply()', () => {
  it('multiplies two numbers given', () => {
    const expected = 100;
    const actual = helpers.multiply(50, 2);
    expect(actual).toEqual(expected);
  });
  it('will retrun NAN if not a number', () => {
    const actual = helpers.multiply(50, 'car');
    expect(actual).toBeNaN();
  });
});

describe('getRemainder()', () => {
  it('gets the remainder of the first value divided by the second', () => {
    const expected = 2;
    const actual = helpers.getRemainder(2, 1);
    expect(actual).toEqual(expected);
  });
  it('will return NAN if not a number', () => {
    const actual = helpers.getRemainder(2, 'car');
    expect(actual).toBeNaN();
  });
});

describe ('isEven()', () => {
  it('will return true if value is even', () => {
    const expected = true;
    const actual = helpers.isEven(6);
    expect(atual).toBe(expected);
  });
  it('will throm an error if a string is passed', () => {
    expect(() => {
      helpers.isEven('333')
    }).toThrow();
    expect;
  });
});