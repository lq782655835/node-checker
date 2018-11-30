let module1 = require('../node/module1')
let should = require('should')

describe('test/module1.test.js', function() {
    it('should equal', function() {
        module1().should.equal(1)
    })
})
