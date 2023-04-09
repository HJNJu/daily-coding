/* Angry that Andy took away his girlfriend, Julia, while he was in prison, George decides to rob a safe in the basement of Andy's casino with Bread and Matt. 
George and his friends finally entered the vault after passing through all kinds of traps. 
Meanwhile, George begins to calculate the number of ways to steal the target amount using the algorithm he studied in prison.

For example, when stealing $50, if there are $10, $20, and $50, he can steal $50 in four ways:
Steal one $50
Steal two of $20 and one $10
Steal one $20 and three of $10
Steal five of $10

Given the amount of target that George wants to steal and the type of money in the safe, return the number of ways he can steal target . */

function ocean(target, type) {

    const numType = type.length;
    const possibleWays = [];
  
    for (let i = 0; i <= target; i++) {
      possibleWays[i] = 0;
    }
  
    possibleWays[0] = 1;
  
    for (let typeIdx = 0; typeIdx < numType; typeIdx++) {
      for (let value = type[typeIdx]; value <= target; value ++) {
        if (type[typeIdx] <= value) {
          possibleWays[value] += possibleWays[value - type[typeIdx]];
        }
      }
    }
    return possibleWays[target];
}