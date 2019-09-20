let promiseHi = require("../promise-hi");

describe("testing promise", () => {
  test('should get "hi world"', () => {
    expect.assertions(1); // 确保至少有一个断言被调用，否则测试失败
    return promiseHi("world").then(data => {
      expect(data).toBe("Hi world");
    });
  });
});
