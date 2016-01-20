describe('findWord', function() {
  it('return a string of characters before the first space in the input string', function() {
    expect(findWord("first word in the sentence", 0)).to.equal("first");
  });
  it('return a string of characters starting somewhere other than the beginning of the sentence', function() {
    expect(findWord("first word in the sentence", 6)).to.equal("word");
  });
  it('return the last word of a sentence, that ends with a period', function() {
    expect(findWord("first word in the sentence.", 18)).to.equal("sentence");
  });
});
describe('isFirstVowel',function(){
  it('return false if first character in string is not a vowel',function(){
    expect(isFirstVowel('first')).to.equal(false);
  });
  it('return true if first character in string IS a vowel',function(){
    expect(isFirstVowel('any')).to.equal(true);
  });
});
describe('addEnding',function(){
  it('add ay to the end of a word',function(){
    expect(addEnding("another")).to.equal("anotheray");
  });
});
