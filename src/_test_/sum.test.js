const sum = require('../sum');
describe('testing sum', ()=>{
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('adds 0 + 2 not equal 4', () => {
    expect(sum(2, 2)).not.toBe(4);
  });

});
