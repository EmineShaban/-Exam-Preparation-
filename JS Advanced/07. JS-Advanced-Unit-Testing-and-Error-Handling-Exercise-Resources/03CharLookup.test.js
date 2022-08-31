const { assert, expect } = require('chai');
let lookupChar = require('./03CharLookup.js')

describe('isoddeven', () => {
    it('4isString or not', () => {
        assert(lookupChar('love', 0) === 'l')
    })
    it('2isString or not', () => {
        assert(lookupChar('love', 10) === 'Incorrect index')
    })
    it('3isString or not', () => {
        assert(lookupChar('love', -10) === 'Incorrect index')
    })
    it('2isString or not', () => {
        assert(lookupChar(100, 10) === undefined)
    })

    it('1isString or not', () => {
        expect(lookupChar(33, 'aa')).to.be.undefined
    })
    it('5isString or not', () => {
        assert(lookupChar('love', 1) === 'o')
    })
    it('2isString or not', () => {
        assert(lookupChar('love', 10.5) === undefined)
    })
    it('6isString or not', () => {
        assert(lookupChar('love', '10') === undefined)
    })
    it('6isString or not', () => {
        assert(lookupChar(13, '10') === undefined)
    })
})