/* The secret of the 'victory chicken restaurant', which has always been on the rise since its opening, lies in the sauce. 
Numerous other chicken restaurants tried to find out the secret of the sauce, but gave up.
The reason is that only the owner knows the 'secret chicken sauce ratio recipe' that has been handed down for the fifth generation. 
Recently, there is a rumor that a part of this recipe was excerpted from netizens.
The rumor is as follows.

1. It is one of all possible combinations using only M kinds of N kinds of ingredients.
2. The ingredients are encrypted with numbers consisting only of 0 and 1, and it always starts with 1 and cannot be decrypted.
    However, ingredients with three or more zeros are excluded because they are rotten.
3. Because the taste changes depending on the order of the ingredients, it is a different recipe if the order of adding the ingredients is different.
Referring to this rumor, write a function that returns the number of possible cases of 'secret winning chicken sauce'. */

function newChickenRecipe(stuffArr, choiceNum) {
  
    let result = [];
  
    for (let i = 0; i < stuffArr.length; i++) {
      let freshFilter = String(stuffArr[i]).split('').filter((el) => el === '0')
  
      if (freshFilter.length < 3) {
        result.push(stuffArr[i])
      }
    }
    result.sort((a, b) => a - b)
  
    if (result.length === 0 || result.length < choiceNum) {
      return [];
    }
  
    let possibleRecipe = [];
    function recur (arr, num, recipe) {
      if (num === 0) {
        possibleRecipe.push(recipe)
        return;
      } else {
        for (let i = 0; i < arr.length; i++) {
          let fixer = arr[i];
          let rest = arr.filter((el) => el !== fixer)
  
          recur(rest, num - 1, recipe.concat(fixer))
        }
      }
    }
    recur(result, choiceNum, []);
    return possibleRecipe;
  }
  