const { assert, expect } = require('chai');
let isOddOrEven = require('./02EvenOrOdd.js')

describe('isoddeven', () => {

    it('isString or not', () => {
        expect(isOddOrEven('aaa')).to.be.string
    })
    it('isString or not', () => {
        expect(isOddOrEven(1)).to.be.undefined
    })
    it('isString or not', () => {
        expect(isOddOrEven([])).to.be.undefined
    })
    it('isString or not', () => {
        expect(isOddOrEven({})).to.be.undefined
    })
    it('isString or not', () => {
        expect(isOddOrEven(null)).to.be.undefined
    })
    it('isString or not', () => {
        expect(isOddOrEven(undefined)).to.be.undefined
    })
    it('isString or not', () => {
        assert.equal(isOddOrEven('hi'), 'even')
    })
    it('isString or not', () => {
        assert.equal(isOddOrEven('hii'), 'odd')
    })
})