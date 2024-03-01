const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  let testArr = [1, 2, 3]
  let shuffled = shuffle(testArr)

  test("return an array", () => {
    expect(Array.isArray(shuffled)).toBe(true);
  });

  test("return an array of the same length as the input array", () => {
    expect(shuffled.length).toBe(testArr.length);
  });
});
