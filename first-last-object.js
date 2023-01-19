function transformFirstAndLast(arr) {
    let result = {};
    if (arr.length > 0) {
      result[arr[0]] = arr[arr.length - 1];
    }
    return result;
  }

  