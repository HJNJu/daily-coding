/* 두 수(num1, num2)를 입력받아, num1를 num2로 나눈 나머지를 리턴 
   나눗셈(/), 나머지(%) 연산자 사용은 금지 */

function modulo(num1, num2) {
    if (num2 === 0) {
      return 'Error: cannot divide by zero';
    }
  
    while (num1 >= num2) {
      num1 = num1 - num2;
    }
  
    return num1;
}
  