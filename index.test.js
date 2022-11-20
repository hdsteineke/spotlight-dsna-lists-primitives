const { reverseWords, titleCase } = require("./index.js");

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
