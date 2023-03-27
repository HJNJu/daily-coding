/* 배열을 입력받아 모든 요소의 곱을 리턴 */
function arrProduct(arr) {
    if (arr.length === 0) {
      return 1;
    }
  
    return arr[0] * arrProduct(arr.slice(1));
  }