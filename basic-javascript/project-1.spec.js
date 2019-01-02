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
      helpers.subtractFive('123');
    }).toThrow();
    expect;
  });

});

//same length strings
describe('areSameLength', () => {
  it('checks if strings are same length', () => {
    const expected = true;
    const actual = helpers.areSameLength('bear', 'bear');
  });

  it('checks if strings are not same length', () => {
    const expected = false;
    const actual = helpers.areSameLength('bear', 'bears');
  });

  it('throws error if no string is passed', () => {
    expect(() => {
      helpers.areSameLength(123, 123);
    }).toThrow();
    expect;
  });

});