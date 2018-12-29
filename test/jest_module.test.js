let mocha_module = require('../node/mocha_module')

test('should equal-jest', () => {
    // expect(mocha_module()).toBe(1)
    const element = document.createElement('div');
    expect(element).not.toBeNull();
})