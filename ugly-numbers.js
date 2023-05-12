// ugly number는 2, 3, 5로만 나누어 떨어지는 수이다.
// 1은 1번째 ugly number 이다.
// 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, ...

const uglyNumbers = function (n) {
    const uglyNumbers = [1];
    let idx2 = 0,
      idx3 = 0,
      idx5 = 0;
  
    for (let i = 0; i < n; i++) {
      const nextMultipleOf2 = uglyNumbers[idx2] * 2;
      const nextMultipleOf3 = uglyNumbers[idx3] * 3;
      const nextMultipleOf5 = uglyNumbers[idx5] * 5;
      const nextUglyNum = Math.min(
        nextMultipleOf2,
        nextMultipleOf3,
        nextMultipleOf5
      );
      uglyNumbers.push(nextUglyNum);

      if (nextUglyNum === nextMultipleOf2) idx2++;
      if (nextUglyNum === nextMultipleOf3) idx3++;
      if (nextUglyNum === nextMultipleOf5) idx5++;
    }
    return uglyNumbers[n - 1];
  };