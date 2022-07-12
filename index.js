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

function titleCase(sentence) {
  //first we want to break up each word into pieces
  //then we want to target the first letter of each word and capitalize it
  //then we want to join the words back together in the same string
  return sentence
    .split(" ")//split up the different words of the sentence
    .map(word => word.slice(0, 1)//map each word and target the first letter
      .toUpperCase() + word.slice(1).toLowerCase()) //capitalize the first letter and add it to the rest of the word lowercase
    .join(" ");//join the sentence back together
}

module.exports = { reverseWords, titleCase };
