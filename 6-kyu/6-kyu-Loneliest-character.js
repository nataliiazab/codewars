
// Task:

// Complete the function which accepts a string and return an array of character(s) that have the most spaces to their right and left.

// Notes:

// the string can have leading/trailing spaces - you should not count them
// the strings contain only unique characters from a to z
// the order of characters in the returned array doesn't matter
// Examples
// "a b  c"                        -->  ["b"]
// "a bcs           d k"           -->  ["d"]
// "    a b  sc     p     t   k"   -->  ["p"]
// "a  b  c  de"                   -->  ["b", "c"]
// "     a  b  c de        "       -->  ["b"]
// "abc"                           -->  ["a", "b", "c"]
// Good luck!



//Solution

function loneliest(str) {
  const trimmedStr = str.trim();

  let maxSpaces = 0;
  let currentSpaces = 0;
  let loneliestChars = [];

  for (let i = 0; i < trimmedStr.length; i++) {
    const currentChar = trimmedStr[i];
    if (currentChar === " ") {
      currentSpaces++;
    } else {
      let leftSpaces = currentSpaces;
      let rightSpaces = 0;

      while (
        i + rightSpaces + 1 < trimmedStr.length &&
        trimmedStr[i + rightSpaces + 1] === " "
      ) {
        rightSpaces++;
      }

      const totalSpaces = leftSpaces + rightSpaces;

      if (totalSpaces === maxSpaces) {
        loneliestChars.push(currentChar);
      } else if (totalSpaces > maxSpaces) {
        loneliestChars = [currentChar];
        maxSpaces = totalSpaces;
      }

      currentSpaces = 0;
    }
  }

  return loneliestChars;
}

