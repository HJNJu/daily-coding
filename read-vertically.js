/* 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴 
   ['hello'
    'world'
   ]
  -> 'hweolrllod'
*/

function readVertically(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {      // i = 1; i < 2; i++
      let str = arr[i];                         // str = arr[1] = 'world' 
      for (let j = 0; j < str.length; j++) {    // j = 0; j < 5; j++
        if (temp.length === j) {                // if (5 === j)
          temp.push(str[j]);                    // temp = [h e l l o ]
        } else {
          temp[j] = temp[j] + str[j];           // temp[0] = h + w = hw 
        }                                       // temp[1] = e + o = eo
      }                                         // temp[2] ...
    }                                           // temp = ['hw', 'eo', 'lr', 'll', 'od']
  
    let result = '';
    for (let i = 0; i < temp.length; i++) {     // i = 0; i < 5; i++
      result = result + temp[i];                // result = hw + eo + lr + ll + od
    }
    return result;                              // result = hweolrllod                   
  }
  