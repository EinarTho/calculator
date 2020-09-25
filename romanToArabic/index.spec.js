const assert = require('chai').assert;
const app = require('./romanToArabic');

describe('Testing arabic to roman', () => {
    describe('Should reject types other than numbers', () => {
        it('Should reject number', () => {
            assert.equal(app.romanToArabic(123), 'Invalid input');
        })
        it('Should reject object', () => { 
            assert.equal(app.romanToArabic({}), 'Invalid input');
        })
        it('Should reject null', () => { 
            assert.equal(app.romanToArabic(null), 'Invalid input');
        })
        it('Should reject undefined', () => { 
            assert.equal(app.romanToArabic(undefined), 'Invalid input');
        })
        it('Should reject false', () => { 
            assert.equal(app.romanToArabic(false), 'Invalid input');
        })
        it('Should only be roman numbers', () => { 
            assert.equal(app.romanToArabic('bbbs'), 'Invalid input');
        })
    })
    describe('Tests if function converts correctly', () => {
        it('Should handle 3', () => {
            assert.equal(app.romanToArabic('III'), 3);
        })
        it('Should handle 4', () => {
            assert.equal(app.romanToArabic('IV'), 4);
        })
        it('Should handle 7', () => {
            assert.equal(app.romanToArabic('VII'), 7);
        })
        it('Should handle 9', () => {
            assert.equal(app.romanToArabic('IX'), 9);
        })
        it('Should handle 12', () => { 
            assert.equal(app.romanToArabic('XII'), 12);
        })
        it('Should handle 49', () => { 
            assert.equal(app.romanToArabic('XLIX'), 49);
        })
        it('Should handle 51', () => { 
            assert.equal(app.romanToArabic('LI'), 51);
        })
        it('Should handle 99', () => { 
            assert.equal(app.romanToArabic('XCIX'), 99);
        })
        it('Should handle 105', () => { 
            assert.equal(app.romanToArabic('CV'), 105);
        })
        it('Should handle 490', () => { 
            assert.equal(app.romanToArabic('CDXC'), 490);
        })
        it('Should handle 1384', () => { 
            assert.equal(app.romanToArabic('MCCCLXXXIV'), 1384);
        })
        it('Should handle 1674', () => { 
            assert.equal(app.romanToArabic('MDCLXXIV'), 1674);
        })
        it('Should handle 1754', () => { 
            assert.equal(app.romanToArabic('MDCCLIV'), 1754);
        })
        it('Should handle 2964', () => { 
            assert.equal(app.romanToArabic('MMCMLXIV'), 2964);
        })
        it('Should handle 3000', () => { 
            assert.equal(app.romanToArabic('MMM'), 3000);
        })
    })
})