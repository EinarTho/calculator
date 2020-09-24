const assert = require('assert');
const calculator = require('./calculator.js');

describe('Function', () => {
  it('exported functions', () => {
    assert.strictEqual(typeof calculator.evaluate, 'function', 'evaluate is not exported');
  });
  it('Right type and amount of symbols:', () => {
    assert.throws(() => { calculator.evaluate('1++2'); });
  });
  it('Wrong operator', () => {
    assert.throws(() => { calculator.evaluate('1%2'); });
  });
  it('Should reject paranteses', () => {
    assert.throws(() => { calculator.evaluate('1+(2+3)'); });
  });
  it('Too many operations', () => {
    assert.throws(() => { calculator.evaluate('2+1+3'); });
  });
});

describe('Testing types', () => {
  it('Should only accept string', () => {
    assert.throws(() => { calculator.evaluate(null); });
    assert.throws(() => { calculator.evaluate(undefined); });
    assert.throws(() => { calculator.evaluate({}); });
    assert.throws(() => { calculator.evaluate(9); });
    assert.throws(() => { calculator.evaluate(true); });
  });
});

describe('should return correct value', () => {
  it('should add two numbers', () => {
    assert.strictEqual(calculator.evaluate('1+1'), '2');
  });
  it('should accept spaces', () => {
    assert.strictEqual(calculator.evaluate('   1   +    1'), '2');
  });
  it('should subtract two numbers', () => {
    assert.strictEqual(calculator.evaluate('4-2'), '2');
  });
  it('should multiply two numbers', () => {
    assert.strictEqual(calculator.evaluate('4*2'), '8');
  });
  it('should devide two numbers', () => {
    assert.strictEqual(calculator.evaluate('8/2'), '4');
  });
  it('should add two numbers where the first is negative', () => {
    assert.strictEqual(calculator.evaluate('-1+6'), '5');
  });
  it('should add two numbers where both are negative', () => {
    assert.strictEqual(calculator.evaluate('-1+-6'), '-7');
  });
  it('should NOT devide by zero', () => {
    assert.throws(() => { calculator.evaluate('5/0'); });
  });
});