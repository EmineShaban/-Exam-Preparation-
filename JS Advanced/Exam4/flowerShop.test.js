let flowerShop = require('./flowerShop.js')
const { assert, expect } = require('chai');


describe('rentCar', () => {
    describe('searchCar', () => {
        it('1isSym', () => {
            assert.equal(flowerShop.calcPriceOfFlowers('rosa', 5, 3), `You need $15.00 to buy rosa!`)
        })
        it('1isSym', () => {
            assert.equal(flowerShop.calcPriceOfFlowers('rosa', 3, 2), `You need $6.00 to buy rosa!`)
        })
        it('1isSym', () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers('rosa', '3', 2), Error)
            assert.throw(() => flowerShop.calcPriceOfFlowers('rosa', 3, '2'), Error)
            assert.throw(() => flowerShop.calcPriceOfFlowers(5, 2, 2), Error)
        })
        it('1isSym', () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers('rosa', 3), Error)
            assert.throw(() => flowerShop.calcPriceOfFlowers('rosa'), Error)
            assert.throw(() => flowerShop.calcPriceOfFlowers(), Error)
            assert.throw(() => flowerShop.calcPriceOfFlowers('rosa', undefined, 3), Error)
        })
    })
    describe('checkFlowersAvailable', () => {
        it('1isSym', () => {
            assert.equal(flowerShop.checkFlowersAvailable('rosa', ['rosa', 'lilia']), `The rosa are available!`)
        })
        it('1isSym', () => {
            assert.equal(flowerShop.checkFlowersAvailable('os', ['rosa', 'lilia']), `The os are sold! You need to purchase more!`)
        })
    })
    describe('sellFlowers', () => {
        it('1isSym', () => {
            assert.throw(() => flowerShop.sellFlowers(['rosa', 'lilia'], 4), Error)
            assert.throw(() => flowerShop.sellFlowers(['rosa', 'lilia'], -3), Error)
            assert.throw(() => flowerShop.sellFlowers(['rosa', 'lilia']), Error)
        })
        it('1isSym', () => {
            assert.throw(() => flowerShop.sellFlowers(4), Error)
            assert.throw(() => flowerShop.sellFlowers([], -3), Error)
            assert.throw(() => flowerShop.sellFlowers([{}, 'lilia']), Error)
        })
        it('1isSym', () => {
            assert.equal(flowerShop.sellFlowers(['rosa', 'lilia'], 0), `lilia`)
        })
        it('1isSym', () => {
            assert.equal(flowerShop.sellFlowers(['rosa', 'lilia', 'Orchid'], 1), `rosa / Orchid`)
        })
    })

})