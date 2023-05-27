const powerSet = function (str) {

    const sorted = str.split('').sort();
  
    const deduplicated = sorted.reduce((acc, item) => {
      if (acc[acc.length - 1] === item) {
        return acc;
      } else {
        return acc.concat(item);
      }
    });
  
    let subSets = [];
    const pickOrNot = (idx, subset) => {
  
      if (idx === deduplicated.length) {
  
        subSets.push(subset);
        return;
      }
  
      pickOrNot(idx + 1, subset);
  
      pickOrNot(idx + 1, subset + deduplicated[idx]);
    };
  
    pickOrNot(0, '');
  
    return subSets.sort();
  };