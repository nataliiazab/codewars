//Task:
//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

//Examples
//pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//pigIt('Hello world !');     // elloHay orldway !

//My Solution:

function pigIt(str){
const words = str.split(" ");
const wordEnding = "ay";
let newStr = [];
  for (const word of words){
    const firstLetter = word[0];
    const wordWithoutFirstLetter = word.slice(1);
    const modifiedWord = wordWithoutFirstLetter + firstLetter + wordEnding; 
    newStr.push(modifiedWord);
  }

const result = newStr.join(" ");
return result;
}
