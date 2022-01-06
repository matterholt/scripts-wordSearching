const { giveMeAlistOfToxinsFound } = require('./giveMeAlistOfToxinsFound.js');
// list of words and master list data
const { sampleIngredients } = require('./utils/storage/sampleLabel');
const { toxinMasterList } = require('./utils/storage/ingredientMl');

const {toxic,nonToxin}=sampleIngredients



const possibleToxinsFound = giveMeAlistOfToxinsFound(toxinMasterList, toxic.readLabel)
const wordsOfToxins = possibleToxinsFound.map(x => x.toxinItems)

console.log(wordsOfToxins)


const doubleTrueValues = [
    'Disodium EDTA','Tetrasodium EDTA','Trisodium EDTA','Diol','Phenoxyethanol','Propylene Glycol','PEG'
]


const dumbToMatch = "Supercalifragilisticexpialidocious"
const dumbData =  ['Zupercalifragilisticexpialidocious',
'Supercalifragilisticexpialidociouz',
'Supercalifragllisticexpialidocious',
'Supercclifragilisticexpiclidocious',
'Suparcalifragilisticexwefidocious',
'Supercaifragilisticexpiaidocious',
'Supercalifragilisticexpialidocious']