function rockPaperScissors (rounds) {
    rounds = rounds || 3;
    const type = ['rock', 'paper', 'scissors'];
    const result = [];
  
    let rsp = (num, arr) => {
      if (num === 0) {
        result.push(arr)
        return;
      } else {
        for (let i = 0; i < type.length; i++) {
          let arr2 = arr.concat(type[i])
          rsp(num - 1, arr2)
        }
      }
    }
    rsp(rounds, []);
    return result;
  };
  