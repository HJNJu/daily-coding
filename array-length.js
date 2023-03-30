/* 배열을 입력받아 그 길이를 리턴 */
function arrLength(arr) {
    if (arr.isEmpty()) {
      return 0;
    }
    return 1 + arrLength(arr.slice(1))
  }