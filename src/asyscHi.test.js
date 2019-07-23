let asyncHi= require('./asyncHi.js')

test('should get "Hi world"', (done) => {
    asyncHi('world', (result) => {
        expect(result).toBe('Hi world')
        done()
    });
})