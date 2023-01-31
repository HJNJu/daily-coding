// 2의 거듭제곱인지 여부 리턴

function powerOfTwo(num) {
    if (num === 1) {
      return true;
    }
  
    let powered = 2;
    while (powered < num) {
      powered = powered * 2;
    }
  
    return powered === num;
  }