/* While working part-time at a convenience store, you notice that you do not have enough coins to give customers change during peak hours.
The coins you currently have are sorted in ascending order: 1 won, 5 won, 10 won, 50 won, 100 won, and 500 won, and each coin has a multiplicative relationship with each other.
You need to make change 'K' by minimizing the number of coins. 

At this time, please write a function to find the minimum number of coins required. */

function partTimeJob(k) {
    let numCoins = 0;
    const coins = [500, 100, 50, 10, 5, 1];
    for (let i = 0; i < coins.length; i++) {
      if (k > 0) {
        const sum = Math.floor(k / coins[i]);
        numCoins += sum;
        k = k - (coins[i] * sum);
      }
    }
    return numCoins
}