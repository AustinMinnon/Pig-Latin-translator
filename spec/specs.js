describe('removeFrontWord', function() {
  it('return a string of characters before the first space in the input string', function() {
    expect(removeFrontWord("first word in the sentence")).to.equal("first");
  });
});
