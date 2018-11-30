let mocha_module = require('../node/mocha_module')
let should = require('should')

describe('test/mocha_module.test.js', function() {
    it('should equal', function() {
        mocha_module().should.equal(1)
    })
})
