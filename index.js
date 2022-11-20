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
  // edge case for empty parameters
  if (!number) return 'Invalid entry';
  let sum = 0;
  //need to split number into an array of individual digits (needs to be string first)
  const numArray = number.toString().split("").map(num => {return Number(num)});
  //sum individual digits together
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  if (sum % 2 === 0) return "Evenish";
  return "Oddish";

}

//////////////////////////////////

function at(arr, index) {
  //be able to read through an array up until the given index
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      //return the value at the given index of the array
      return arr[i]
    }
  }
}

/////////////////////////////////

function fizzBuzz(number) {
  const array = [];
  //identify numbers from 0 - n
  for (let i = 1; i <= number; i++) {
    //if divisible by 3 && 5 return 'FizzBuzz'
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz');
      //if divisible by 3 return 'Fizz'
    } else if (i % 3 === 0) {
      array.push('Fizz');
      //if divisible by 5 return 'Buzz'
    } else if (i % 5 === 0) {
      array.push('Buzz');
    } else {
      array.push(i);
    }
  }
  //return an array of values from  0 to number
  return array;
}

////////////////////////////////////////////

function anagrams(wordOne, wordTwo) {
  //takes in two strings

  //reads all the letters in word one (needs to be an array)
  const newOne = wordOne.toLowerCase().split("").sort();
  const newTwo = wordTwo.toLowerCase().split("").sort();
  
  if (newOne === newTwo) {
    return true;
  } return false;

  //compares them to all the letters in word two (also needs to be an array)

  //we can achieve this by sorting the values of each array and changing them all to a like case

  //returns a boolean
}


module.exports = { reverseWords, titleCase, oddishOrEvenish, at, fizzBuzz, anagrams };
