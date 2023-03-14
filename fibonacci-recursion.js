/* 수(num)를 입력받아 피보나치 수열의 num번째 요소를 리턴 */

function fibonacci(num) {
    if (num <= 1) {
      return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
}  