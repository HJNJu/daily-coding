/* 배열을 입력받아 모든 요소의 논리합(or)을 리턴 */

function or(arr) {
    if (arr.length === 0) {
      return false;
    }
  
    return arr[0] || or(arr.slice(1));
}