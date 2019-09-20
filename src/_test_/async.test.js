require('babel-polyfill');
let promiseHi = require("../promise-hi");


describe("testing Async/Await", () => {
  test('should get "hi world"', async () => {
    expect.assertions(1);
    const data = await promiseHi("world");
    expect(data).toBe("Hi world");
  });
  
});
