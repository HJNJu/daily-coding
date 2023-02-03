// 문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴

function convertDoubleSpaceToSingle(str) {
    let result = '';
    let before = '';
    for (let i = 0; i < str.length; i++) {
      if (before !== ' ' || str[i] !== ' ') {
        result = result + str[i];
      }
      before = str[i];
    }
    return result;
  }