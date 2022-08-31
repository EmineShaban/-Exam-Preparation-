let cinema = require('./cinema.js')
const { assert, expect } = require('chai');


describe('rentCar', () => {
    describe('showMovies', () => {
        it('1isSym', () => {
            assert.equal(cinema.showMovies([]), `There are currently no movies to show.`)
        })
        it('1isSym', () => {
            assert.equal(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker']), `King Kong, The Tomorrow War, Joker`)
        })
        it('1isSym', () => {
            assert.equal(cinema.showMovies(['King Kong', 'Joker']), `King Kong, Joker`)
        })
        it('1isSym', () => {
            assert.equal(cinema.showMovies(['King Kong']), `King Kong`)
        })
    })
    describe('ticketPrice', () => {
        it('1isSym', () => {
            assert.equal(cinema.ticketPrice('Premiere'), 12.00)
        })
        it('1isSym', () => {
            assert.equal(cinema.ticketPrice('Normal'), 7.50)
        })
        it('1isSym', () => {
            assert.equal(cinema.ticketPrice('Discount'), 5.50)
        })
        it('1isSym', () => {
            assert.throw(() => cinema.ticketPrice('a'), Error)
        })
        it('1isSym', () => {
            assert.throw(() => cinema.ticketPrice(), Error)
        })
        it('1isSym', () => {
            assert.throw(() => cinema.ticketPrice(5), Error)
        })
        it('1isSym', () => {
            assert.throw(() => cinema.ticketPrice([]), Error)
        })
        it('1isSym', () => {
            assert.throw(() => cinema.ticketPrice({}), Error)
        })
        it('1isSym', () => {
            assert.throw(() => cinema.ticketPrice('qq qq'), Error)
        })
    })
    describe('swapSeatsInHall', () => {
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(5), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(undefined, 5), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall((2.50), 5), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall((2.50), (2.2)), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(4, (2.2)), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(21, 0), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(21, 3), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(0, 0), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(0, 21), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(3, 21), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(21, 21), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(-2, 12), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(1, -2), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(-1, -2), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(1, 20), 'Successful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(20, 1), 'Successful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(1, 1), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(1, '1'), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall('1', 1), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall([], 1), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(1, []), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall(1, {}), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall({}, 1), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall('1', '2'), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall([], []), 'Unsuccessful change of seats in the hall.')
        })
        it('1isSym', () => {
            assert.equal(cinema.swapSeatsInHall({}, {}), 'Unsuccessful change of seats in the hall.')
        })
    })

})
//        "Normal": 7.50,
// "Discount": 5.50
// it('1isSym', () => {
//     assert.throw(() => flowerShop.calcPriceOfFlowers('rosa', '3', 2), Error)
// })
