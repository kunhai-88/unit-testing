let asyncHello = require('asyncHello.js')

test('should get "Hello world"', (done) => {
    asyncHello('world', (result) => {
        expect(result).toBe('Hello world')
        done()
    })
})