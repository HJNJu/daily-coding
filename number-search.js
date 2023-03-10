/* 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴 */
function numberSearch(str) {
    const nums = '0123456789';
    let sum = 0;
    let onlyStr = '';
  
    if (str === '') {
      return 0;
    }
    
    for (let i = 0; i < str.length; i++) {
      if (nums.includes(str[i])) {
        sum = sum + Number(str[i]);
      } else if (str[i] !== ' ') {
        onlyStr = onlyStr + str[i];
      }
    }
    return Math.round(sum / onlyStr.length);
  }
  