var removeFrontWord = function(inputString) {
  // loop that starts at the first letter, and continues until it finds a space
  var spaceIndex = 0;
  for(var i=0; inputString[i]!==" "; i++ ) {
    spaceIndex ++;
  }
  // return a slice of the input from 0 to the first space
  return inputString.slice(0, spaceIndex);
}
