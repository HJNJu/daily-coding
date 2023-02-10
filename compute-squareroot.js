/* 수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴, Math.sqrt 사용 금지 */

function computeSquareRoot(num) {
    const diffs = [1, 0.1, 0.01, 0.001];
    let base = 1;
    for (let i = 0; i < diffs.length; i++) {
      while (base * base < num) {         // base의 제곱이 num보다 작은 경우
        base = base + diffs[i];           // diff를 더해준다
      }
  
      if (base * base === num) {          // base의 제곱이 num과 같은 경우는 num의 제곱근이 base
        return base;                      // base 리턴
      } else {
        base = base - diffs[i];           // 마지막에 base에 diff가 한번 더 더해졌으므로 빼주기
      }
    }
    return Number(base.toFixed(2));       // 소수점 둘째자리까지 구하고 리턴
  }
  