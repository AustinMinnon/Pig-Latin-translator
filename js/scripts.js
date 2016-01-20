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
  // ***Initial code
  // if (/[aeiou]/.test(word[0])) {
  //   return true;
  // } else {
  //   // return false if first letter is NOT a vowel
  //   return false;
  // }
  // *** Refractored Code
  return /[aeiou]/i.test(word[0]);
}
var addEnding = function(word){
  // ***Initial code
  // // add ay to ending of word
  // var plWord = word + "ay";
  //
  // // return word with ay added
  // return plWord;

  // ***Refractored code
  return word + "ay";
}

var moveConsonants = function(word){
  // ***Initial code
  // // copy first letter to back
  // var result = (word + word[0]);
  // // remove first letter
  // var result2 = result.slice(1);
  // // return results
  // return result2;

  // ***Refractored code
  // return (word + word[0]).slice(1);
  var sliceIndex = 0;
  // identify location of last consonant in first group of consonants
  for(var i=0; !word[i].match(/[aeiou]/i); i++){
    sliceIndex = i;
  }
  // slice off first group of consonants, put of back
  // return the result
  return word.slice(sliceIndex+1) + word.slice(0,sliceIndex+1);
}
