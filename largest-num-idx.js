function solution(array) {
    var max = 0;
    var idx = 0;
    for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
          max = array[i];
          idx = i;
      }
    }
    return [max, idx];
}