const { reverseWords, titleCase, oddishOrEvenish, at, fizzBuzz, anagrams, largestEven, largestEven2, largestEven3 } = require("./index.js");

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
    expect(fizzBuzz(15)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
  });
});

describe("fizzBuzz", () => {
  it("should returns all values up to given n value, where fizz replaces multiples of 3, 5 replaces multiples of 5, and fizzBuzz multiples of 5 && 3", () => {
    expect(fizzBuzz(5)).toEqual([1,2,'Fizz',4,'Buzz']);
  });
});


describe("anagrams", () => {
  it("should return false if two word inputs contain different letters", () => {
    expect(anagrams('cat', 'dog')).toEqual(false);
  });
});


describe("anagrams", () => {
  it("should return true if two word inputs contain the exact same letters", () => {
    expect(anagrams('lone', 'noel')).toEqual(true);
  });
});


// describe("uniqueString", () => {
//   it("return the word that doesn't match", () => {
//     expect(uniqueStrings()).toEqual();
//   });
// });


describe("largestEven", () => {
  it("should return largest even number, or -1", () => {
    expect(largestEven([1,2,3,244,6,7,92,3,65])).toEqual(244);
    expect(largestEven([1,3,5,9,11])).toEqual(-1);
  });
});


describe("largestEven2", () => {
  it("should return largest even number, or -1", () => {
    expect(largestEven2([1,2,3,244,6,7,92,3,65])).toEqual(244);
    expect(largestEven2([1,3,5,9,11])).toEqual(-1);
  });
});

describe("largestEven2", () => {
  it("should return largest even number, or -1", () => {
    expect(largestEven2([1,2,3,244,6,7,92,3,65])).toEqual(244);
    expect(largestEven2([1,3,5,9,11])).toEqual(-1);
  });
});

describe("largestEven3", () => {
  it("should return largest even number, or -1", () => {
    expect(largestEven3([1,2,3,244,6,7,92,3,65])).toEqual(244);
    expect(largestEven3([1,3,5,9,11])).toEqual(-1);
  });
});


