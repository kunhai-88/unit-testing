import { first, last } from 'lodash/fp'
import ifElse from '../if-else';


describe('test ifElse function',()=>{
  const a = [1,2, 3, 4];
  const mockFirst = jest.fn();
  const mockTrue = jest.fn();
  mockTrue.mockReturnValue(true);
  const mockFalse = jest.fn();
  mockFalse.mockReturnValue(false); 
  test('left function',()=>{
    expect(ifElse(mockTrue,first,last)(a)).toBe(1);
  });

  test('mock left function',()=>{
    ifElse(mockTrue,mockFirst,last)(a);
    expect(mockFirst).toBeCalled();
  });

  test('right function',()=>{
    expect(ifElse(mockFalse,first,last)(a)).toBe(4);
  });
});