let companyAdministration = require('./companyAdministration.js')
const { assert, expect } = require('chai');


describe('rentCar', () => {
    describe('searchCar', () => {
        it('1isSym', () => {
            assert.throw(() => companyAdministration.hiringEmployee('rosa', '3', 2), Error)
        })
        it('1isSym', () => {
            assert.throw(() => companyAdministration.hiringEmployee('rosa', 'prog', 2), Error)
        })
        it('hiringEmployee', () => {
            assert.equal(companyAdministration.hiringEmployee('aaa', 'Programmer', 50), `aaa was successfully hired for the position Programmer.`)
        })
        it('hiringEmployee', () => {
            assert.equal(companyAdministration.hiringEmployee('aaa', 'Programmer', 3), `aaa was successfully hired for the position Programmer.`)
        })
        it('hiringEmployee', () => {
            assert.equal(companyAdministration.hiringEmployee('aaa', 'Programmer', 2), `aaa is not approved for this position.`)
        })
        it('hiringEmployee', () => {
            assert.equal(companyAdministration.hiringEmployee('aaa', 'Programmer', 0), `aaa is not approved for this position.`)
        })
        it('hiringEmployee', () => {
            assert.equal(companyAdministration.hiringEmployee('aaa', 'Programmer', -1), `aaa is not approved for this position.`)
        })

    })
    describe('calculateSalary', () => {
        it('1isSym', () => {
            assert.throw(() => companyAdministration.calculateSalary('2'), Error)
        })
        it('1isSym', () => {
            assert.throw(() => companyAdministration.calculateSalary(-3), Error)
        })
        it('1isSym', () => {
            assert.throw(() => companyAdministration.calculateSalary(undefined), Error)
        })
        it('1isSym', () => {
            assert.throw(() => companyAdministration.calculateSalary(), Error)
        })
        it('1isSym', () => {
            assert.throw(() => companyAdministration.calculateSalary({}), Error)
        })
        it('hiringEmployee', () => {
            assert.equal(companyAdministration.calculateSalary(2), 30)
        })
        it('hiringEmployee', () => {
            assert.equal(companyAdministration.calculateSalary(1), 15)
        })
        it('hiringEmployee', () => {
            assert.equal(companyAdministration.calculateSalary(0), 0)
        })
        it('hiringEmployee', () => {
            assert.equal(companyAdministration.calculateSalary((10.1)), 151.5)
        })
        it('hiringEmployee', () => {
            assert.equal(companyAdministration.calculateSalary(160), 2400)
        })
        it('hiringEmployee', () => {
            assert.equal(companyAdministration.calculateSalary(161), 3415)
        })
    })
    describe('firedEmployee', () => {
        it('1isSym', () => {
            assert.throw(() => companyAdministration.firedEmployee(), Error)
        })
        it('1isSym', () => {
            assert.throw(() => companyAdministration.firedEmployee(['rosa', 'lilia'], 4), Error)
        })
        it('1isSym', () => {
            assert.throw(() => companyAdministration.firedEmployee(['rosa', 'lilia'], 'e'), Error)
        })
        it('1isSym', () => {
            assert.throw(() => companyAdministration.firedEmployee(['rosa', 'lilia'], -3), Error)
        })        
        it('1isSym', () => {
            assert.throw(() => companyAdministration.firedEmployee(['rosa', 'lilia']), Error)
        })        
        // it('1isSym', () => {
        //     assert.throw(() => companyAdministration.firedEmployee(['rosa', 'lilia'], []), Error)
        // })        
        it('1isSym', () => {
            assert.throw(() => companyAdministration.firedEmployee(['rosa', 'lilia'], 1.1), Error)
        })
        it('1isSym', () => {
            assert.throw(() => companyAdministration.firedEmployee(('rosa', 'lilia'), 0), Error)
            assert.throw(() => companyAdministration.firedEmployee(2), Error)
            assert.throw(() => companyAdministration.firedEmployee({}, 0), Error)
        })
        it('1isSym', () => {
            assert.equal(companyAdministration.firedEmployee(['rosa', 'lilia'], 0), `lilia`)
        })
        it('1isSym', () => {
            assert.equal(companyAdministration.firedEmployee(['rosa', 'lilia', 'Orchid'], 1), `rosa, Orchid`)
        })
        it('1isSym', () => {
            assert.equal(companyAdministration.firedEmployee(['rosa', 'lilia', 'Orchid', 'lilia', 'rosa'], 3), `rosa, lilia, Orchid, rosa`)
        })
    })

})
