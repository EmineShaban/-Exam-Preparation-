let rentCar = require('./rentCar.js')
const { assert, expect } = require('chai');


describe('rentCar', () => {
    describe('searchCar', () => {
        it('1isSym', () => {
            assert.equal(rentCar.searchCar(['Volkswagen', 'BMW'], 'BMW'), `There is 1 car of model BMW in the catalog!`)
        })
        it('1isSym', () => {
            assert.throw(() => rentCar.searchCar(['Volkswagen', 'BMW'], 'aa'), Error)
        })
        it('1isSym', () => {
            assert.throw(() => rentCar.searchCar(['Volkswagen', 'BMW'], 4), Error)
        })
        it('1isSym', () => {
            assert.throw(() => rentCar.searchCar([], 'BMW'), Error)
        })
        it('1isSym', () => {
            assert.throw(() => rentCar.searchCar({}, 'BMW'), Error)
        })
        it('1isSym', () => {
            assert.throw(() => rentCar.searchCar(['Volkswagen', 'BMW'], undefined), Error)
        })
        it('1isSym', () => {
            assert.throw(() => rentCar.searchCar(undefined, undefined), Error)
        })
        it('1isSym', () => {
            assert.throw(() => rentCar.searchCar(undefined, 'BMW'), Error)
        })
        it('1isSym', () => {
            assert.throw(() => rentCar.searchCar(5, 'BMW'), Error)
        })
        it('1isSym', () => {
            assert.throw(() => rentCar.searchCar('5', 'BMW'), Error)
        })
    })
    describe('calculatePriceOfCar', () => {
        it('2isSym', () => {
            assert.equal(rentCar.calculatePriceOfCar('BMW', 1), 'You choose BMW and it will cost $45!')
            assert.equal(rentCar.calculatePriceOfCar('Mercedes', 10), 'You choose Mercedes and it will cost $500!')
            assert.equal(rentCar.calculatePriceOfCar('Toyota', 10), 'You choose Toyota and it will cost $400!')
            assert.equal(rentCar.calculatePriceOfCar('Audi', 10), 'You choose Audi and it will cost $360!')
            assert.equal(rentCar.calculatePriceOfCar('Volkswagen', 10), 'You choose Volkswagen and it will cost $200!')

        })
        it('2isSym', () => {
            assert.throw(() => rentCar.calculatePriceOfCar('KIA', 10), Error)
        })
        it('2isSym', () => {
            assert.throw(() => rentCar.calculatePriceOfCar(10), Error)
        })
        it('2isSym', () => {
            assert.throw(() => rentCar.calculatePriceOfCar([], 10), Error)
        })
        it('2isSym', () => {
            assert.throw(() => rentCar.calculatePriceOfCar({}, 10), Error)
        })
        it('2isSym', () => {
            assert.throw(() => rentCar.calculatePriceOfCar(undefined, 10), Error)
        })
        it('2isSym', () => {
            assert.throw(() => rentCar.calculatePriceOfCar(['KIA'], 10), Error)
        })
        it('2isSym', () => {
            assert.throw(() => rentCar.calculatePriceOfCar('Audi', '10'), Error)
        })
        it('2isSym', () => {
            assert.throw(() => rentCar.calculatePriceOfCar('Audi', undefined), Error)
        })
        it('2isSym', () => {
            assert.throw(() => rentCar.calculatePriceOfCar('Audi'), Error)
        })
        it('2isSym', () => {
            assert.throw(() => rentCar.calculatePriceOfCar('Audi', [5]), Error)
        })
        it('2isSym', () => {
            assert.throw(() => rentCar.calculatePriceOfCar('Audi', {}), Error)
        })
    })
    describe('checkBudget', () => {
        // checkBudget(costPerDay, days, budget) - A function that accepts three parameters (numbers):

        it('3isSym', () => {
            assert.equal(rentCar.checkBudget(10, 2, 100), 'You rent a car!')
        })   
        it('3isSym', () => {
            assert.equal(rentCar.checkBudget(10, 2, 20), 'You rent a car!')
        })   
        it('3isSym', () => {
            assert.equal(rentCar.checkBudget(10, 2, 10), 'You need a bigger budget!')
        })  
        it('3isSym', () => {
            assert.equal(rentCar.checkBudget(100, 2, 0), 'You need a bigger budget!')
        })    
        it('2isSym', () => {
            assert.throw(() => rentCar.checkBudget('100', 2, 0), Error)
            assert.throw(() => rentCar.checkBudget(100, '2', 0), Error)
            assert.throw(() => rentCar.checkBudget(100, 2, '0'), Error)
        })
        it('2isSym', () => {
            assert.throw(() => rentCar.checkBudget(100, 2), Error)
            assert.throw(() => rentCar.checkBudget(100), Error)
        })
    })

})