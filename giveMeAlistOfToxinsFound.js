

// functions to process words
const { msrListToxinSimplised } = require('./simpleToxinList/');
const { singletonStringOfWords } = require('./cleanLabel');
const { ingredientsSearchInMasterList } = require('./checkForToxins');

// example of what is return from search
let _DUMBDATA = [
  {
    id: '151-2',
    toxinItems: [
      { toxin: 'Retinoic', isFound: false },
      { toxin: 'Acid', isFound: false },
    ],
  },
  {
    id: '151-2_456',
    toxinItems: [
      { toxin: 'Retinoic', isFound: true },
      { toxin: 'Acid', isFound: false },
    ],
  },
  {
    id: '151-2_123',
    toxinItems: [
      { toxin: 'Retinoic', isFound: false },
      { toxin: 'Acid', isFound: true },
    ],
  },
  ,
];

// quick extration of functions
// NEEDS TO BE CLEANED UP
/**
 * 
 * @param {*} mlList => masterlist of words that are being search for
 * @param {*} labelWords => words results from OCR
 * @returns  any toxin found within the label
 */
exports.giveMeAlistOfToxinsFound =(toxinMasterList,labelTox)=>{
// constructs a list of toxins found in the masterlist, return an ID and name so can be referance 
const toxinNames = msrListToxinSimplised(toxinMasterList);

// one string on teh OCR word results, whatever is return from the OCR image processing
const labelString = singletonStringOfWords(labelTox);

// check label if there any toxins are found.
const searchToxins = ingredientsSearchInMasterList(toxinNames, labelString);

return searchToxins
}