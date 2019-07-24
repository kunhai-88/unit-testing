const { cat, dog } = require('../compare-object');
describe('object testing',()=>{
  test('cat equal dog', () => {
    expect(cat).toEqual(dog);
  });
  test('cat is defined', () => {
    expect(cat).toBeDefined();
  });
   
});
