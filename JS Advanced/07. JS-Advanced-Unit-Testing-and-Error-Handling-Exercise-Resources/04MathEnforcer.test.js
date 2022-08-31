const { assert, expect } = require('chai');
let mathEnforcer = require('./MathEnforcer.js')
describe('mathEnforcer', () => {

    describe('addFive', () => {

        it('aaddFive', () => {
            assert(mathEnforcer.addFive(1) === 6)
        })
        it('aaddFive', () => {
            assert(mathEnforcer.addFive(-5) === 0)
        })
        it('aaddFive', () => {
            assert(mathEnforcer.addFive(10.5) === 15.5)
        })
        it('isString or not', () => {
            expect(mathEnforcer.addFive([])).to.be.undefined
        })
        it('isString or not', () => {
            expect(mathEnforcer.addFive({})).to.be.undefined
        })
        it('isString or not', () => {
            expect(mathEnforcer.addFive(null)).to.be.undefined
        })
        it('isString or not', () => {
            expect(mathEnforcer.addFive(undefined)).to.be.undefined
        })
        it('isString or not', () => {
            expect(mathEnforcer.addFive('test')).to.be.undefined
        })

    })
    describe('subtractTen', () => {
        it('isString or not', () => {
            expect(mathEnforcer.subtractTen([])).to.be.undefined
        })
        it('isString or not', () => {
            expect(mathEnforcer.subtractTen({})).to.be.undefined
        })
        it('isString or not', () => {
            expect(mathEnforcer.subtractTen(null)).to.be.undefined
        })
        it('isString or not', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined
        })
        it('isString or not', () => {
            expect(mathEnforcer.subtractTen('test')).to.be.undefined
        })

        it('aaddFive', () => {
            assert(mathEnforcer.subtractTen(15) === 5)
        })
        it('aaddFive', () => {
            assert(mathEnforcer.subtractTen(-5) === -15)
        })
        it('aaddFive', () => {
            assert(mathEnforcer.subtractTen(10.5) === 0.5)
        })
    })
    describe('sum', () => {
        it('isString or not', () => {
            expect(mathEnforcer.sum('test')).to.be.undefined
        })
        it('aaddFive', () => {
            assert(mathEnforcer.sum(15, 5) === 20)
        })
        it('aaddFive', () => {
            assert(mathEnforcer.sum(-5, -10) === -15)
        })
        it('aaddFive', () => {
            assert(mathEnforcer.sum(10.5, 5.6) === 16.1)
        })
        it('aaddFive', () => {
            assert(mathEnforcer.sum('', 5.6) === undefined)
        })
        it('aaddFive', () => {
            assert(mathEnforcer.sum(5, '5.6') === undefined)
        })
    })
})
// it('isString or not', () =>{
//     expect(mathEnforcer.sum([])).to.be.undefined
// })
// it('isString or not', () => {
//     expect(mathEnforcer.sum({})).to.be.undefined
// })
// it('isString or not', () => {
//     expect(mathEnforcer.sum(null)).to.be.undefined
// })
// it('isString or not', () =>  {
//     expect(mathEnforcer.sum(undefined)).to.be.undefined
// })