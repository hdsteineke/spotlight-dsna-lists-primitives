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
  const array = sentence.split(" ");
  //map through each item[i] in the array and convert first letter of each item to uppercase
  for (let i = 0; i < array.length; i++) {
    i[0].toUpperCase();
  }
  return array.join(" ");

}

module.exports = { reverseWords, titleCase };
