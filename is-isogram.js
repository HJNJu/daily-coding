/* 문자열을 입력받아 아이소그램(isogram)인지 여부를 리턴 */

   function isIsogram(str) {
    let lowerCaseStr = str.toLowerCase(); //소문자로 변환
    let cache = {};                       // object 생성
  
    if (str === '') {
      return true;
    }
  
    for (let i = 0; i < lowerCaseStr.length; i++) {
      if (cache[lowerCaseStr[i]]) {        // cache[key] falsy 값이면 false
        return false;
      }
      cache[lowerCaseStr[i]] = true;       // cache[key] truthy 값이면 key: true로 저장
    }                                      // object는 mutable dadta structure
  
    return true;
  }
  