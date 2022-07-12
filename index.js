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

function oddishOrEvenish(number) {
  //first turn the number into string characters so we can split it
  const newNumber = number
    .toString()
    .split('')
  //then we want to turn characters back to numbers so we can do math with them
    .map(num => {return Number(num)} );

    //here we set up the operation to add the digits inside the newNumber array
    let sum = 0;
    for (i = 0; i < newNumber.length; i++) {
      sum += newNumber[i];
    }
    //we use modulo to determine if there is a remainder. 
      //If remainder is 0, return 'Evenish'
    if (sum % 2 === 0) {
      return 'Evenish';
      //Else return 'Oddish'
    } else {
      return 'Oddish';
    }
  }

  function at(arr, index) {
    //we are given all the things, and the things do things
    //we are given the array and the index wanted, and should return the item at that index point
    //if the number is positive the index is read left to right
    //if the number is negative, the index is read right to left
    if (index >= 0 ) { //the index given is greater than or equal to 0
      return arr[index]; //returns the item in the index place
    } if (index < 0) { //the index is less than 0
      return arr[arr.length - (index * (-1))] //we take the negative index, make it a positive and subtract it from the length of the array
    }
  }

  function fizzBuzz(number) {
    //function takes in a number 'n' as an argument
    //it returns an array of numbers in order from 1 to 'n'
    const arr = [];
    for (let i = 1; i <= number; i++) {
      //if number is multiple of 5 && 3, return 'FizzBuzz'
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push('FizzBuzz');
        //if i is multiple of 3, return 'Fizz'
      } else if (i % 3 === 0) {
        arr.push('Fizz')
        //if i is multiple of 5, return 'Buzz'
      } else if (i % 5 === 0) {
        arr.push('Buzz');
        //if item is neither multiple of 3 nor 5, push the index placement into array
      } else {
        arr.push(i);
      }
    }
    return arr;
  }

  function anagrams(wordOne, wordTwo) {
    const wordOneArray = wordOne.split('').sort();//break up word one into letters, then sort the letters alphabetically
    const wordTwoArray = wordTwo.split('').sort();//break up word two into letters, then sort the letters alphabetically
    const wordOneString = wordOneArray.join('');//rejoin the letters 
    const wordTwoString = wordTwoArray.join('');//rejoin the letters
    return wordOneString === wordTwoString ? true : false;//check if the letters are the same, if true return true, if false return false
  }

module.exports = { reverseWords, titleCase, oddishOrEvenish, at, fizzBuzz, anagrams };
