var findWord = function(inputString, inputIndex) {
  // loop that starts at the first letter, and continues until it finds a space
  var spaceIndex = inputIndex;
  for(var i=inputIndex; inputString[i]!==" " && inputString[i]!=="."; i++ ) {
    spaceIndex ++;
  }
  // return a slice of the input from 0 to the first space
  return inputString.slice(inputIndex, spaceIndex);
}

var isFirstVowel = function(word){
  if (/[aeiou]/.test(word[0])){
    return true;
  } else {
    // return false if first letter is NOT a vowel
    return false;
  }
}
