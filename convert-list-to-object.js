/* 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴 */
function convertListToObject(arr) {
    let result = {};
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 0 && result[arr[i][0]] === undefined) {
        result[arr[i][0]] = arr[i][1];
      }
    }
  
    return result;
  }