const { assert, expect } = require('chai');
let isSymmetric = require('./CheckforSymmetry')
// it('testing', () => {
//     expect(([1, 3])).to.be.an('array')
// })

describe('Take an array of numbers as an argument', () => {

    it('isSym', () => {
        assert.equal(isSymmetric([1, 2, 2, 1]), true)
    })
    it('isNotSym', () => {
        expect(isSymmetric([0, 1, 0])).to.be.true;
    })
    it('isNotSym', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    })
    it('isNotSym', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    })

    it('isNotSym', () => {
        expect(isSymmetric(1)).to.be.false;
    })

    it('isNotSym', () => {
        expect(isSymmetric([0, 2, '1'])).to.be.false;
    })
    it('isNotSym', () => {
        expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
    })
    it('isNotSym', () => {
        expect(isSymmetric('abba')).to.be.false;
    })
})