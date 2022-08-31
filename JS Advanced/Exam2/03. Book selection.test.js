let bookSelection = require('./bookSelection.js')
const { assert, expect } = require('chai');


describe('book', () => {
    describe('isGenreSuitable', () => {
    it('1isSym', () => {
        assert.equal(bookSelection.isGenreSuitable('Thriller', 1), `Books with Thriller genre are not suitable for kids at 1 age`)
    })
    it('1isSym', () => {
        assert.equal(bookSelection.isGenreSuitable('Thriller', 12), `Books with Thriller genre are not suitable for kids at 12 age`)
    })
    it('1isSym', () => {
        assert.equal(bookSelection.isGenreSuitable('Thriller', 13), `Those books are suitable`)
    })
    it('1isSym', () => {
        assert.equal(bookSelection.isGenreSuitable('Horror', 1), `Books with Horror genre are not suitable for kids at 1 age`)
    })
    it('1isSym', () => {
        assert.equal(bookSelection.isGenreSuitable('Horror', 12), `Books with Horror genre are not suitable for kids at 12 age`)
    })
    it('1isSym', () => {
        assert.equal(bookSelection.isGenreSuitable('Horror', 13), `Those books are suitable`)
    })
    it('1isSym', () => {
        assert.equal(bookSelection.isGenreSuitable('Emi', 13), `Those books are suitable`)
    })
    it('1isSym', () => {
        assert.equal(bookSelection.isGenreSuitable('Emi', 1), `Those books are suitable`)
    })
    })
    describe('isItAffordable', () => {
        it('2isSym', () => {
            assert.equal(bookSelection.isItAffordable(10, 9), "You don't have enough money")
        })
        it('2isSym', () => {
            assert.equal(bookSelection.isItAffordable(9, 10), "Book bought. You have 1$ left")
        })
        it('2isSym', () => {
            assert.equal(bookSelection.isItAffordable(9, 9), "Book bought. You have 0$ left")
        })
        it('3isSym', () => {
            assert.throw(() => bookSelection.isItAffordable('s', 5), Error)
        })     
        it('3isSym', () => {
            assert.throw(() => bookSelection.isItAffordable(5, 'a'), Error)
        })  
        it('3isSym', () => {
            assert.throw(() => bookSelection.isItAffordable(3, '5'), Error)
        })  
        it('3isSym', () => {
            assert.throw(() => bookSelection.isItAffordable('3', 5), Error)
        })   
    })
    describe('suitableTitles', () => {
        it('3isSym', () => {
            assert.throw(() => bookSelection.suitableTitles('a', 5), Error)
        })   
        it('3isSym', () => {
            assert.throw(() => bookSelection.suitableTitles([], 2), Error)
        })   
        it('3isSym', () => {
            assert.throw(() => bookSelection.suitableTitles({}, 'sss'), Error)
        })   
        it('3isSym', () => {
            assert.throw(() => bookSelection.suitableTitles(2, 'sss'), Error)
        })   
        it('3isSym', () => {
            assert.throw(() => bookSelection.suitableTitles(22, 2), Error)
        })   
        it('3isSym', () => {
            assert.throw(() => bookSelection.suitableTitles(undefined, undefined), Error)
        })   
        it('3isSym', () => {
            expect(bookSelection.suitableTitles([{ title: 'The Da Vinci Code', genre: "Thriller" }], "Thriller")[0]).to.equal('The Da Vinci Code')
            // assert.throw(() => bookSelection.suitableTitles([], 2), Error)
        })   


    })


})