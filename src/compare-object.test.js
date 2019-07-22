const { cat, dog } = require('./compare-object');
test('Compared object', () => {
  expect(cat).toEqual(dog);
});