/* 수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴 */

function take(num, arr) {
    if (num === 0 || arr.length === 0) {
      return [];
    }
  
    return [arr[0]].concat(take(num - 1, arr.slice(1)));
  }