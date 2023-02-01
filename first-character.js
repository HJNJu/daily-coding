// 문자열을 구성하는 각 단어의 첫 글자로 이루어진 문자열을 리턴

function firstCharacter(str) {
    if (str.length === 0) {
      return '';
    }
  
    let arr = str.split(" ");
    let result = ''
    for (let i = 0; i < arr.length; i++) {
      result = result + arr[i][0];
    }
    return result;
  }