const { sum, person, toggle, range } = require("./index");

describe("test index.js file", () => {
  it("sums 1 + 2 = 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("make person", () => {
    expect(person("kim", 20)).toEqual({
      name: "kim",
      age: 20,
    });
  });

  it("returns false", () => {
    expect(toggle(true)).toBeFalsy();
    expect(toggle(true)).not.toBeTruthy();
  });

  it("has 2", () => {
    expect(range(1, 3)).toContain(3);
  });
});
