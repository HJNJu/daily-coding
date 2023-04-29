// 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴

function flattenArr(arr) {
    let oneArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        oneArr.push(...flattenArr(arr[i]));
      } else {
        oneArr.push(arr[i]);
      }
    }
    return oneArr;
}