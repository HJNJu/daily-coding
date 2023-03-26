/* 배열을 입력받아 모든 요소의 합을 리턴 */
function arrSum(arr) {
    if (arr.length === 0) {
      return 0;
    }
    return arr[0] + arrSum(arr.slice(1))
  }
  