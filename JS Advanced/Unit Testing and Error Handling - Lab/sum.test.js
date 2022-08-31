const { expect } = require('chai');


let sum = require('./04. Sum of Numbers')

describe('Take an array of numbers as an argument'), () =>{
    expect(sum([1,2,3])).to.be.array()
}