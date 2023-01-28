// 문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.
// e.g '4945731' -> '4945-7-3-1'

function insertDash(str) {
    let result = str[0];
    for (let i = 1; i < str.length; i++) {
      // 이전 숫자가 홀수이고 현재 숫자도 홀수이면
      if (Number(str[i - 1]) % 2 && Number(str[i]) % 2) {
        result = result + '-';
      }
      result = result + str[i];
    }
  
    return result;
  }