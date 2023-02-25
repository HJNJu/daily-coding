/* 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴 */
function removeExtremes(arr) {
    let shortestLen = 20;
    let longestLen = 0;
    let shortestIdx = 0;
    let longestIdx = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= longestLen) {
        longestLen = arr[i].length;
        longestIdx = i;
      }
  
      if (arr[i].length <= shortestLen) {
        shortestLen = arr[i].length;
        shortestIdx = i;
      }
    }
  
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i !== shortestIdx && i !== longestIdx) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  