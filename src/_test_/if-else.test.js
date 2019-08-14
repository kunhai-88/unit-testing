import { first, last, isEmpty, size } from 'lodash/fp'
import ifElse from '../if-else';


describe('test ifElse function',()=>{
  const a = [1,2, 3, 4];
  const mockFirst = jest.fn(x => a && a[0]);
 
  test('left function',()=>{
    expect(ifElse(size,first,last)(a)).toBe(1);
  });

  test('mock left function',()=>{
    ifElse(size,mockFirst,last)(a);
    expect(mockFirst).toBeCalled();
  });

  test('right function',()=>{
    expect(ifElse(isEmpty,first,last)(a)).toBe(4);
  });
});