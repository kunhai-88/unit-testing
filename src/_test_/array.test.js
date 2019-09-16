const a = [1, 2, 3, 4];
const b = [1, 2, 3, 4];
const c = {
  a,
  o: {
    name: "hello"
  }
};
const d = {
  a,
  o: {
    name: "hello2"
  }
};

describe("Array", () => {
  test("a equal b", () => {
    expect(a).toEqual(b);
  });
  test("c deep equal d", () => {
    expect(c).toEqual(d);
  });
});
