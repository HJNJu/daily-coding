/* 배열을 입력받아 순서가 뒤집힌 배열을 리턴 */

function reverseArr(arr) {
    if (arr.length === 0) {
      return [];
    }
    return reverseArr(arr.slice(1)).concat(arr[0]);
  }