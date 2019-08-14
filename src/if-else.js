export default (
  testFunc,
  leftFunc,
  rightFunc = parmas => parmas
) => value => (testFunc(value) ? leftFunc : rightFunc)(value);
