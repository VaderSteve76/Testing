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