// run `node index.js` in the terminal
const { sampleIngredients } = require('./utils/storage/sampleLabel');
const { toxinMasterList } = require('./utils/storage/ingredientMl');
const { msrListToxinSimplised } = require('./simpleToxinList/');
const { singletonStringOfWords } = require('./cleanLabel');
const { ingredientsSearchInMasterList } = require('./checkForToxins');

const { toxic, nonToxin } = sampleIngredients;

const toxinName = msrListToxinSimplised(toxinMasterList);
const labelString = singletonStringOfWords(toxic.raw);
const searchToxins = ingredientsSearchInMasterList(toxinName, labelString);

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

// maybe have some words that are not
let chck = searchToxins.map((x) => console.log(x));
console.log('NUMBER OF TOXINS FOUND', searchToxins.length);

// const findToxinInMasterlist = searchToxins.map((tox) => {
//   return toxinMasterList.find((mlTox) => mlTox.id === tox.id);
// });
// console.log('toxins string ==>\n', labelString);

// console.log('toxins found ==>\n', findToxinInMasterlist);
