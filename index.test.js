const { reverseWords, titleCase, oddishOrEvenish, at, fizzBuzz } = require("./index.js");

describe("reverseWords", () => {
  it("should reverse the words of a sentence", () => {
    expect(reverseWords("alchemy rocks gold")).toBe("ymehcla skcor dlog");
  });
});

describe("titleCase", () => {
  it("should return a sentence with the first letter of each word capitalized)", () => {
    expect(titleCase("happy birthday to you")).toBe("Happy Birthday To You");
  });
});

describe("oddishOrEvenish", () => {
  it("should determine if sum of input digits is odd or even", () => {
    expect(oddishOrEvenish(121)).toBe("Evenish");
  });
});


describe("oddishOrEvenish", () => {
  it("should determine if sum of input digits is odd or even", () => {
    expect(oddishOrEvenish(191)).toBe("Oddish");
  });
});


describe("at", () => {
  it("should return the value at a specified index", () => {
    expect(at([1,2,3], 2)).toBe(3);
  });
});

describe("at", () => {
  it("should return the value at a specified index", () => {
    expect(at(['a','b','c','d'], 2)).toBe('c');
  });
});


describe("fizzBuzz", () => {
  it("should returns all values up to given n value, where fizz replaces multiples of 3, 5 replaces multiples of 5, and fizzBuzz multiples of 5 && 3", () => {
    expect(fizzBuzz(15)).toBe([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
  });
});


