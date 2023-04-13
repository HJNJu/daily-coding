/* 
1. You have some cards with numbers.
2. Choose 3 cards and check if the sum of the numbers of the 3 cards is prime.
3. The player with the most number of primes that can be made with the cards wins.
*/

function boringBlackjack(cards) {
    let count = 0;
  
    for (let i = 0; i < cards.length; i++) {
      for (let j = i + 1; j < cards.length; j++) {
        for (let k = j + 1; k < cards.length; k++) {
          let result = cards[i] + cards[j] + cards[k]
          if (isPrime(result)) {
            count ++;
          }
        }
      }
    }
    function isPrime(num) {
      for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
    return count;
}