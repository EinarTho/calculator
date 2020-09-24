const assert = require('chai').assert;
const app = require('./arabicToRoman');

describe('Testing arabic to roman', () => {
  describe('Should reject types other than numbers', () => {
    it('Should reject str', () => {
      assert.equal(app.arabicToRoman('str'), 'Invalid input');
    })
    it('Should reject object', () => {
      assert.equal(app.arabicToRoman({}), 'Invalid input');
    })
    it('Should reject null', () => {
      assert.equal(app.arabicToRoman(null), 'Invalid input');
    })
    it('Should reject undefined', () => {
      assert.equal(app.arabicToRoman(undefined), 'Invalid input');
    })
    it('Should reject false', () => {
      assert.equal(app.arabicToRoman(false), 'Invalid input');
    })
    it('Should reject -1', () => {
      assert.equal(app.arabicToRoman(-1), 'Invalid input');
    })
    it('Should reject 0', () => {
      assert.equal(app.arabicToRoman(0), 'Invalid input');
    })
    it('Should reject numbers over 3000', () => {
      assert.equal(app.arabicToRoman(3001), 'Invalid input');
    })


  })
  describe('Tests if function converts correctly', () => {
    it('Should handle 3', () => {
      assert.equal(app.arabicToRoman(3), 'III');
    })
    it('Should handle 4', () => {
      assert.equal(app.arabicToRoman(4), 'IV');
    })
    it('Should handle 7', () => {
      assert.equal(app.arabicToRoman(7), 'VII');
    })
    it('Should handle 9', () => {
      assert.equal(app.arabicToRoman(9), 'IX');
    })
    it('Should handle 12', () => {
      assert.equal(app.arabicToRoman(12), 'XII');
    })
    it('Should handle 49', () => {
      assert.equal(app.arabicToRoman(49), 'XLIX');
    })
    it('Should handle 51', () => {
      assert.equal(app.arabicToRoman(51), 'LI');
    })
    it('Should handle 99', () => {
      assert.equal(app.arabicToRoman(99), 'XCIX');
    })
    it('Should handle 105', () => {
      assert.equal(app.arabicToRoman(105), 'CV');
    })
    it('Should handle 490', () => {
      assert.equal(app.arabicToRoman(490), 'CDXC');
    })
    it('Should handle 1384', () => {
      assert.equal(app.arabicToRoman(1384), 'MCCCLXXXIV');
    })
    it('Should handle 1674', () => {
      assert.equal(app.arabicToRoman(1674), 'MDCLXXIV');
    })
    it('Should handle 1754', () => {
      assert.equal(app.arabicToRoman(1754), 'MDCCLIV');
    })
    it('Should handle 2964', () => {
      assert.equal(app.arabicToRoman(2964), 'MMCMLXIV');
    })
    it('Should handle 3000', () => {
      assert.equal(app.arabicToRoman(3000), 'MMM');
    })
  })
})
