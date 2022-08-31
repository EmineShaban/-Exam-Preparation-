let library = require('./library.js')
const { assert, expect } = require('chai');


describe('rentCar', () => {
    describe('calcPriceOfBook', () => {
        it('1isSym', () => {
            assert.throw(() => library.calcPriceOfBook('Rosa', 'a'), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.calcPriceOfBook('Rosa'), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.calcPriceOfBook('Rosa', undefined), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.calcPriceOfBook('Rosa', '5'), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.calcPriceOfBook('Rosa', []), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.calcPriceOfBook(['Rosa'], -5), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.calcPriceOfBook(undefined, 5), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.calcPriceOfBook(5), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.calcPriceOfBook(12, 5), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.calcPriceOfBook({}, 5), Error)
        })
        it('calcPriceOfBook', () => {
            assert.equal(library.calcPriceOfBook('Rosa', 1981), `Price of Rosa is 20.00`)
        })
        it('calcPriceOfBook', () => {
            assert.equal(library.calcPriceOfBook('Rosa', 1980), `Price of Rosa is 10.00`)
        })
        it('calcPriceOfBook', () => {
            assert.equal(library.calcPriceOfBook('Rosa', 1900), `Price of Rosa is 10.00`)
        })
        it('calcPriceOfBook', () => {
            assert.equal(library.calcPriceOfBook('Rosa', -1980), `Price of Rosa is 10.00`)
        })
        it('calcPriceOfBook', () => {
            assert.equal(library.calcPriceOfBook('Rosa', 0), `Price of Rosa is 10.00`)
        })
        it('calcPriceOfBook', () => {
            assert.equal(library.calcPriceOfBook('Rosa', 1000000), `Price of Rosa is 20.00`)
        })
    })
    describe('findBook', () => {
        it('1isSym', () => {
            assert.throw(() => library.findBook([], 'Troy'), Error)
        })
        it('calcPriceOfBook', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy'), `We found the book you want.`)
        })
        it('calcPriceOfBook', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Torronto'), `We found the book you want.`)
        })
        it('calcPriceOfBook', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Torronto'), `We found the book you want.`)
        })
        it('calcPriceOfBook', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'a'), `The book you are looking for is not here!`)
        })
        it('calcPriceOfBook', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 5), `The book you are looking for is not here!`)
        })
    })
    describe('arrangeTheBooks', () => {
        it('1isSym', () => {
            assert.throw(() => library.arrangeTheBooks(`1`), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.arrangeTheBooks([]), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.arrangeTheBooks({}), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.arrangeTheBooks(), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.arrangeTheBooks(undefined), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.arrangeTheBooks('NuN'), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.arrangeTheBooks(-3), Error)
        })
        it('1isSym', () => {
            assert.throw(() => library.arrangeTheBooks(1.23), Error)
        })
        it('calcPriceOfBook', () => {
            assert.equal(library.arrangeTheBooks(40), `Great job, the books are arranged.`)
        })
        it('calcPriceOfBook', () => {
            assert.equal(library.arrangeTheBooks(41), `Insufficient space, more shelves need to be purchased.`)
        })
        it('calcPriceOfBook', () => {
            assert.equal(library.arrangeTheBooks(1), `Great job, the books are arranged.`)
        })
        it('calcPriceOfBook', () => {
            assert.equal(library.arrangeTheBooks(421), `Insufficient space, more shelves need to be purchased.`)
        })
    })

})