/* 배열을 입력받아 모든 요소의 논리곱(and)을 리턴 */

function and(arr) {
    if (arr.length === 0) {
      return true;
    } 
    return arr[0] && and(arr.slice(1));
  }