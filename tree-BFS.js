/* 임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 너비 우선 탐색(BFS, Breadth First Search). 
이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴 */

let bfs = function (node) {
    let queue = [node];
    const values = [];
    while (queue.length > 0) {
      const head = queue[0];
      queue = queue.slice(1);
  
      values.push(head.value);
  
      head.children.forEach((child) => queue.push(child));
    }
    return values;
  };
  
  let Node = function (value) {
    this.value = value;
    this.children = [];
  };
  
  Node.prototype.addChild = function (child) {
    this.children.push(child);
    return child;
  };
  