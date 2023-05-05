function browserStack(actions, start) {
    if(typeof start !== 'string') return false;
  
    let prevStack = [];
    let nextStack = [];
    let current = start;
  
    for(let i = 0; i < actions.length; i++) {
     
      if(actions[i] === -1 && prevStack.length !== 0) {
  
        let prevPage = prevStack.pop();
        nextStack.push(current);
        current = prevPage;
  
      } else if(actions[i] === 1 && nextStack.length !== 0) {
  
        let nextPage = nextStack.pop();
        prevStack.push(current);
        current = nextPage;
  
      } else if(typeof actions[i] === 'string') {
  
        prevStack.push(current);
        current = actions[i];
        nextStack = [];
      }
  
    }
    return [prevStack, current, nextStack];
}