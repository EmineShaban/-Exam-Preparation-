let rgbToHexColor = require('./RGBToHex.js')
const { assert } = require('chai');

describe('Take an array of numbers as an argument', () => {
    it('1isSym', () => {
        assert.equal(rgbToHexColor(131, 122, 123), '#837A7B')
    })
    it('2isSym', () => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000')
    })    
    it('3isSym', () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF')
    })    


    it('4isSym', () => {
        assert.equal(rgbToHexColor(255), undefined)
    })
    it('5isSym', () => {
        assert.equal(rgbToHexColor('0',0,0), undefined)
        assert.equal(rgbToHexColor(0,0,'0'), undefined)
        assert.equal(rgbToHexColor(0,'0',0), undefined)
        assert.equal(rgbToHexColor('0','0','0'), undefined)

    })    
    it('6isSym', () => {
        assert.equal(rgbToHexColor(-1,-1,-1), undefined)
        assert.equal(rgbToHexColor(0,-1,0), undefined)
        assert.equal(rgbToHexColor(0,0,-1), undefined)
        assert.equal(rgbToHexColor(-1,-0,0), undefined)

    })    
    it('7isSym', () => {
        assert.equal(rgbToHexColor(256,256,256), undefined)
        assert.equal(rgbToHexColor(0,256,0), undefined)
        assert.equal(rgbToHexColor(0,0,256), undefined)
        assert.equal(rgbToHexColor(256,0,0), undefined)
    })

})