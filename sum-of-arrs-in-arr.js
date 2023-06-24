function sumOfArraysInArray(arr) {
    // 2차원 배열을 1차원으로 풀어준다 (=>리듀스)
    const oneArray = arr.reduce(function(arr1, arr2) {
      return arr1.concat(arr2);
    });
  
    // 숫자만 걸러준다 (=>필터)
    const nums = oneArray.filter(function(a) {
      return typeof a === 'number';
    });
  
    // 각 숫자 엘리먼트들의 합을 구한다 (=>리듀스)
    // 숫자 타입이 없는 경우에는 0 리턴이므로 초기값 0으로 세팅
    return nums.reduce(function(num1, num2) {
      return num1 + num2;
    }, 0)
}
  