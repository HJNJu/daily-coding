/* There is a game on a board of size N * N.
The rules of the game are as follows.

1. Place the pawn at the top left of the coordinates (0, 0).
2. The pawn can move up, down, left, and right, and can be manipulated by the player.
3. Opportunity to manipulate is given only once.
4. When operating, U, D, L, and R mean up, down, left, and right, respectively, and must be written without spaces in one line.
   (e.g. UDDLLRRDRR, RRRRR)
5. Each time you move, you move one square, and you can acquire a number, which is an element in that square.
6. You can get numbers even if you re-visit the same place.
7. If the pawn goes out of the board, it is treated as OUT.
8. The number in the cell is either 0 or 1. However, the top left coordinate (0, 0) is always 0.
9. The numbers obtained are added up, and the player with the highest number wins.

Given the 'board' containing a board and the string 'operation' that you want to manipulate, write a function that calculates the sum of the numbers obtained as the pawn passes through. */

function boardGame(board, operation) {
  const move = {
    'U': [-1, 0],
    'D': [1, 0],
    'L': [0, -1],
    'R': [0, 1]
  }

  let X = 0;
  let Y = 0;
  const onBoard = function (y, x) {
    return 0 <= y && y < board.length && 0 <= x && x < board.length;
  }

  let point = 0;
  for (let i = 0; i < operation.length; i++) {
    const [y, x] = move[operation[i]];
    Y += y;
    X += x;
    if (onBoard(Y, X) === false) {
      return 'OUT';
    }
    point += board[Y][X];
  }

  return point;
};