function toxinBreak(toxin) {
  const { id, name } = toxin;
  const regex = /\w\w\w+/gi;
  const toxinWords = name.match(regex);
  return { id, toxinWords };
}

function toxinIdwName(DBofToxins) {
  const toxinList = DBofToxins.map((x) => {
    const { id, name } = x;
    return { name, id };
  });
  return toxinList;
}

exports.msrListToxinSimplised = (masterList) => {
  const list = toxinIdwName(masterList);
  const simpleToxinsMl = list.map((x) => toxinBreak(x)).flat();
  return simpleToxinsMl;
};
