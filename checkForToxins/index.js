var _ = require('lodash');

/**
 *
 * @param toxinKeyWords the masterlist ID and key words that are tied to the toxic ingredient
 * @param ingredients OCR results from image label
 * @returns the id of toxin key word found in OCR ingredient lable
 *
 *
 */
function searchLabelForToxins(toxinKeyWords, ingredients) {
  const _labelIngredientsFromOCR = ingredients;

  // regx looking for a toxin that may be in label
  function checkAgainstToxinMasterList(toxin) {
    const rege = new RegExp(toxin, 'ig');
    const isFound = rege.test(_labelIngredientsFromOCR);
    return { toxin, isFound };
  }

  // loop through the key words of toxins
  function theBadIngredientID(toxinKeyWords) {
    const { id, toxinWords } = toxinKeyWords;
    const toxinItems = toxinWords.map((word) =>
      checkAgainstToxinMasterList(word)
    );
    return { id, toxinItems };
  }

  /// should filter out or a ratio for searching the list,
  // the more

  return theBadIngredientID(toxinKeyWords);
}

function anyPossibleToxinFound(one) {
  const onlyTheBadToxins = one.filter((toxin) => {
    return _.find(toxin.toxinItems, ['isFound', true]);
  });
  return onlyTheBadToxins;
}

/**
 *
 * @param simpleToxinsMl key toxic word list
 * @param labelIngredients OCR string results
 * @returns Array of ids that realate to id the master toxic list
 */
exports.ingredientsSearchInMasterList = (simpleToxinsMl, labelIngredients) => {
  const lookingForTheBad = simpleToxinsMl
    .map((toxinKeyWord) => {
      const onlyTheBadIngredienst = searchLabelForToxins(
        toxinKeyWord,
        labelIngredients
      );
      return onlyTheBadIngredienst;
    })
    .filter((x) => x);

  return anyPossibleToxinFound(lookingForTheBad);
};
