function getDirections(matrix, from, to) {
    const queue = [from];
    const enqueue = (n) => queue.push(n);
    const dequeue = (n) => queue.shift();
  
    const isVisited = new Array(matrix.length).fill(false);
  
    isVisited[from] = true
  
    while (queue.length > 0) {
      const now = dequeue();
  
      if (now === to) return true;
  
      for (let next = 0; next < matrix[now].length; next++) {
        if (matrix[now][next] && !isVisited[next]){
          enqueue(next);
          isVisited[next] = true
        }
      }
    }
  
    return false;
}