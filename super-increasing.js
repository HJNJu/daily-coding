/* 수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴 
   e.g. [1, 3, 6, 13, 54] -> true, [1, 3, 5, 9] -> false
*/

function superIncreasing(arr) {
    let acc = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= acc) {
        return false;
      }
      acc = acc + arr[i];
    }
    return true;
  }
  