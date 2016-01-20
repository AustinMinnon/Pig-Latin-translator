describe('findWord', function() {
  it('return a string of characters before the first space in the input string', function() {
    expect(findWord("first word in the sentence", 0)).to.equal("first");
  });
  it('return a string of characters starting somewhere other than the beginning of the sentence', function() {
    expect(findWord("first word in the sentence", 6)).to.equal("word");
  });
});
