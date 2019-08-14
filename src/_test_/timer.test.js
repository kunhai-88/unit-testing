import { interval } from '../timer';


describe('test interval',()=>{
  const fun = jest.fn(()=>{
    console.log(new Date());
  });
  jest.useFakeTimers();
  interval(fun,1000);
  test('function be called',()=>{
    jest.runOnlyPendingTimers();
    expect(fun).toBeCalled();
    expect(fun).toBeCalledTimes(1);
  });
});