function isOdd(num) {
    if ( num === 0) {
      return false;
    } else if ( num === 1) {
      return true;
    }
    return isOdd(Math.abs(num) - 2);
  }