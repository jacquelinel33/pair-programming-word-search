const wordSearch = (inputArray, givenWord) => {
  if (inputArray.length === 0) {
    return 'you\'ve inputted an empty array';
  }
  let transposedArray = transpose(inputArray);
  const horizontalWords = inputArray.map(ls => ls.join(''));
  for (let word of horizontalWords) {
    if (word.includes(givenWord)) {
      return true;
    }
  }
  const verticalWords = transposedArray.map(ls => ls.join(''));
  // console.log(transposedArray)
  for (let word of verticalWords) {
    if (word.includes(givenWord)) {
      return true;
    }
  }
  return false;
  
};
  
const transpose = function(matrix) {
  let newArray = [];
  for (let r in matrix[0]) {
    newArray.push([]);
  }
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      newArray[c][r] = matrix[r][c];
    }
  } return newArray;
  
};
  
console.log(wordSearch([], 'SEINFELD'));
  
module.exports = wordSearch;