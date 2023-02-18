/* 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴 */
function letterCapitalize(str) {
    let arr = str.split(' ');
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 0) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
      }
    }
  
    str = arr.join(' ');
    return str;
  }