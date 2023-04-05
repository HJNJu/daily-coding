/* George and Fred had packed their belongings for the office move and bought some boxes to put them in. 
While the weight of each moving item is jagged, the boxes are so small that they can only put a maximum of 2 items at a time, and there is a weight limit.

For example, if the weights of the loads are [70kg, 50kg, 80kg, 50kg] and the weight limit of the box is 100kg, the 2nd and 4th loads can be put together, but the sum of the 1st and 3rd loads cannot be put together as the weight is 150kg. 

They try to move all the loads using as few boxes as possible.
Write the movingStuff function to return the minimum number of boxes required to move all loads when an array 'stuff' containing the weight of the luggage and the box weight limit 'limit' are given as parameters. */

function movingStuff(stuff, limit) {
    let sorted = stuff.sort((a, b) => a - b);
    let lightestIdx = 0;
    let heaviestIdx = sorted.length - 1;
    let totalBox = 0;
  
    while (lightestIdx < heaviestIdx) {
      if (sorted[lightestIdx] + sorted[heaviestIdx] <= limit) {
        lightestIdx ++;
        heaviestIdx --;
        totalBox ++;
      } else {
        heaviestIdx --;
      }
    }
    return stuff.length - totalBox;
}