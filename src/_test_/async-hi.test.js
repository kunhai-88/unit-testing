let asyncHi= require('../async-hi')

describe('testing async function',()=>{
    test('should get "Hi world"', (done) => {
        asyncHi('world', (result) => {
            expect(result).toBe('Hi world')
            done()
        });
    })
});
