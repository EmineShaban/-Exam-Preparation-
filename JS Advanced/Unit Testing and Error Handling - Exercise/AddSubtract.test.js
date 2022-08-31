const { assert, expect } = require('chai');
let createCalculator = require('./AddSubtract.js')

describe('summator', () => {
    let instance = null;

    beforeEach(() =>{
        instance = createCalculator();
    })
    it('has all metods', () =>{
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    })
    it('add single number', ()=>{
        instance.add(1);
        expect(instance.get()).to.equal(1);
    })
    it('add single number', ()=>{
        expect(instance.get()).to.equal(0);
    })
    it('add multiply numbers', ()=>{
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3);
    })
    it('add single number', ()=>{
        instance.subtract(1);
        expect(instance.get()).to.equal(-1);
    })
    it('add multiply numbers', ()=>{
        instance.subtract(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-3);
    })
    it('add multiply numbers', ()=>{
        instance.add(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-1);
    })
    it('add multiply numbers', ()=>{
        instance.add('1');
        instance.add('2');
        instance.subtract('4');
        expect(instance.get()).to.equal(-1);
    })
})