let carService = require('./Carservice.js')
const { assert, expect } = require('chai');


describe('carService', () => {
    describe('isItExpensive', () => {
        it('1isSym', () => {
            assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`)
        })
        it('1isSym', () => {
            assert.equal(carService.isItExpensive('Transmission'), `The issue with the car is more severe and it will cost more money`)
        })
        it('1isSym', () => {
            assert.equal(carService.isItExpensive('aaaa'), `The overall price will be a bit cheaper`)
        })
    })
    describe('discount', () => {
        it('1isSym', () => {
            assert.throw(() => carService.discount(1, '1'), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.discount(1, []), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.discount(11, {}), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.discount(11), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.discount(11, undefined), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.discount('1', 11), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.discount([], 11), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.discount({}, 12), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.discount(undefined, undefined), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.discount(undefined, 1), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.discount('1', '1'), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.discount([], []), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.discount({}, {}), Error)
        })

        it('1isSym', () => {
            assert.equal(carService.discount(2, 7), 'You cannot apply a discount')
        })

        it('1isSym', () => {
            assert.equal(carService.discount(3, 7), `Discount applied! You saved 1.05$`)
        })
        it('1isSym', () => {
            assert.equal(carService.discount(5, 5), `Discount applied! You saved 0.75$`)
        })
        it('1isSym', () => {
            assert.equal(carService.discount(6, 5), `Discount applied! You saved 0.75$`)
        })
        it('1isSym', () => {
            assert.equal(carService.discount(8, 5), `Discount applied! You saved 1.5$`)
        })
        it('1isSym', () => {
            assert.equal(carService.discount(80, 55), `Discount applied! You saved 16.5$`)
        })
    })
    describe('partsToBuy', () => {
        it('1isSym', () => {
            assert.throw(() => carService.partsToBuy({}, {}), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.partsToBuy({}, []), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.partsToBuy([], {}), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.partsToBuy(undefined, undefined), Error)
        })        
        it('1isSym', () => {
            assert.throw(() => carService.partsToBuy([], undefined), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.partsToBuy(undefined, []), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.partsToBuy([], 'undefined'), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.partsToBuy('undefined', []), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.partsToBuy([], 1), Error)
        })
        it('1isSym', () => {
            assert.throw(() => carService.partsToBuy(11, []), Error)
        })
        it('1isSym', () => {
            assert.equal(carService.partsToBuy([], ['a', 'b']), 0)
        })
        it('1isSym', () => {
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"]), 145)
        })
    })

})
// Discount applied! You saved ${result}$