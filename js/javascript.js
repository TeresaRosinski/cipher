/*const add = function(number1, number2) {
  return number1 + number2;
};

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = add(number1, number2);
alert(result);*/

let sentence = prompt("Type A Sentence");
  console.log(sentence);

let firstLetter = sentence.charAt(0).toUpperCase();
  alert(firstLetter);

let lastLetter  = sentence.charAt(sentence.length-1).toUpperCase();
  alert(lastLetter);

  alert (firstLetter + " " + lastLetter);
  alert (lastLetter + " " + firstLetter);

let reverseLetters = lastLetter + firstLetter;

let reverseSentence = sentence.concat(reverseLetters);
  alert (reverseSentence);
