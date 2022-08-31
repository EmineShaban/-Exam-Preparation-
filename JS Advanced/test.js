let rentCar = require('./rentCar.js')
const { assert, expect } = require('chai');


describe('rentCar', () => {
    describe('searchCar', () => {
        it('1isSym', () => {
            assert.equal(rentCar.searchCar(['Volkswagen', 'BMW'], 'BMW'), `There is 1 car of model BMW in the catalog!`)
        })

    })
    describe('calculatePriceOfCar', () => {

    })
    describe('checkBudget', () => {

    })

})

// it('1isSym', () => {
//     assert.throw(() => flowerShop.calcPriceOfFlowers('rosa', '3', 2), Error)
// })
// e.preventDefault()

// e.target.parentNode.remove();





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




let pochivka = this.listOfParticipants.find(e => e.name === name)
