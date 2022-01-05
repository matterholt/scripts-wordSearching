const { giveMeAlistOfToxinsFound } = require('./giveMeAlistOfToxinsFound.js');
// list of words and master list data
const { sampleIngredients } = require('./utils/storage/sampleLabel');
const { toxinMasterList } = require('./utils/storage/ingredientMl');

const possibleToxinsFound = giveMeAlistOfToxinsFound(toxinMasterList, sampleIngredients.toxic.raw)

const wordsOfToxins = possibleToxinsFound.map(x => x.toxinItems)



console.log(wordsOfToxins)