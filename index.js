function reverseWords(sentence) {
  //takes in a sentence of strings
  //reverses the order of letters for each word, but words remain in same order
  //returns reversed sentence


  const newSentence = sentence
    //splits sentence into individual words
    .split(" ")
    //reverses order of words
    .reverse()
    //joins words together in string
    .join(" ");

  return newSentence
    //splits string into individual characters
    .split("")
    //reverses order of characters
    .reverse()
    //joins them back together
    .join("");
}
console.log('reverseWords', reverseWords('alchemy rocks gold'));


///////////////////////////////////

function titleCase(sentence) {
  //split sentence into array of string
  return sentence
    .split(" ")
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

//////////////////////////////////////

function oddishOrEvenish(number) {
  const initialValue = 0;
  // edge case for empty parameters
  if (!number) return "Invalid entry";
  //need to split number into an array of individual digits (needs to be string first)
  const numArray = number.toString().split("");
  //sum individual digits together
  const sum = numArray.reduce(
    (acc, currentValue) => acc + currentValue, initialValue
    );

  //if sum is even, return evenish
  if (sum % 2 === 0) return "Evenish";
  return "Oddish";

  //else return oddish
}

module.exports = { reverseWords, titleCase, oddishOrEvenish };
