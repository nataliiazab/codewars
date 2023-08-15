// Task:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


// Solution:

function solution(str) {
  if (!str) {
    return [];
  }
  const result = str.match(/.{1,2}/g);
  return result.map((character) =>
    character.length === 1 ? character + "_" : character
  );
}
