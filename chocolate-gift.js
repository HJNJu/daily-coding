function divideChocolateStick(M, N) {
    function gcd(m, n) {
      if (m % n === 0) {
        return n;
      } else {
        return gcd(n, m % n)
      }
    }
  
    let num = gcd(M, N)
    let result = [];
    let limit = Math.floor(Math.sqrt(num))
  
    for (let i = 0; i <= limit; i++) {
      if (num % i === 0){
        result.push([i, M / i, N / i])
        if (i * i < num) {
          let a = num / i
          result.push([a, M/a, N/a])
        }
      }
    }
    result.sort((a, b) => a[0] - b[0])
    return result
  }