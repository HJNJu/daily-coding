/* 수(num)를 입력받아 1부터 num까지의 합을 리턴 */
function sumTo(num) {
    if ( num <= 1 ) {
      return num;
    }
    return num + sumTo(num - 1);
  }
  