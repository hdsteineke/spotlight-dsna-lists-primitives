const { reverseWords, titleCase, oddishOrEvenish, at, fizzBuzz } = require("./index.js");

describe("reverseWords", () => {
  it("should reverse the words of a sentence", () => {
    expect(reverseWords("alchemy rocks gold")).toBe("ymehcla skcor dlog");
  });
});

describe("titleCase", () => {
  it("should return the sentence capitalizing all the first letters", () => {
    expect(titleCase("alchemy ROCKS goLD")).toBe("Alchemy Rocks Gold");
  });
});

describe("oddishOrEvenish", () => {
  it("should return a string declaring whether the number is oddish or evenish", () => {
    expect(oddishOrEvenish(121)).toBe("Evenish");
    expect(oddishOrEvenish(41)).toBe("Oddish");
    expect(oddishOrEvenish(12421)).toBe("Evenish");
  });
});

describe("at", () => {
  it("should return the item in the array from the index given", () => {
    expect(at(['a', 'b', 'c', 'd', 'e'], 1)).toBe("b");
    expect(at(['a', 'b', 'c', 'd', 'e'], -2)).toBe("d");
  });
});

describe("fizzBuzz", () => {
  it("should return an ordered array of values, displaying 'fizz' for multiples of 3, 'buzz' for multiples of 5, and 'fizzbuzz' for multiples of 3 && 5", () => {
    expect(fizzBuzz(16)).toEqual([
      1, 2, 'Fizz', 4, 'Buzz', 
      'Fizz', 7, 8, 'Fizz', 'Buzz', 
      11, 'Fizz', 13, 14, 'FizzBuzz', 
      16
    ]);
  });
});