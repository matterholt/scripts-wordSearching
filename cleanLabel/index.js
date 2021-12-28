// label cleanup
exports.singletonStringOfWords = (foundOCR) => {
  const getAWordsFound = foundOCR.map((x) => x.text);
  const labelWordString = getAWordsFound.join();
  return labelWordString;
};
