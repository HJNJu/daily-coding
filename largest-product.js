/* 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴 
   입력으로 주어진 배열은 중첩되지 않은 1차원 배열
   배열의 요소는 음수와 0을 포함하는 정수
   배열의 길이는 3 이상 */

   const largestProductOfThree = function (arr) {
    // arr.slice() -> 배열 그 자체
    // .sort((a, b) => a - b) -> 오름차순 정렬
    const sorted = arr.slice().sort((a, b) => a - b);
    const len = arr.length;
    // 모두 양수일 때 끝에서 3개
    const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
    // 음수가 있을 때 가장 큰 뒷자리 수와 앞 음수 두 개
    const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
    // 둘 중 큰 값 리턴
    return Math.max(candi1, candi2);
  };
  
  /* e.g. [2, 1, 3, 7] 
  sorted -> [1, 2, 3, 7]
  len -> 4
  candi1 = sorted[3] * sorted[2] * sorted[1] = 7 * 3 * 2 = 42
  condi2 = sorted[3] * sorted[0] * sorted[1] = 7 * 1 * 2 = 14
  return Math.max(42, 14) -> 42
  
  e.g. [-1, 2, -5, 7]
  sorted -> [-5, -1, 2, 7]
  len -> 4
  candi1 = sorted[3] * sorted[2] * sorted[1] = 7 * 2 * -1 = -14
  condi2 = sorted[3] * sorted[0] * sorted[1] = 7 * -5 * -1 = 35
  return Math.max(-14, 35) -> 35
  */