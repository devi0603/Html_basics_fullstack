const cells = document.querySelectorAll('[data-cell]');
const game = document.getElementById('game');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');

let oTurn; 
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function startGame() {
  oTurn = false; 
  cells.forEach(cell => {
    cell.classList.remove('x', 'o');
    cell.textContent = '';
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true }); 
  });
  message.textContent = `Player X's turn`;
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = oTurn ? 'o' : 'x';

  placeMark(cell, currentClass);
  
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    message.textContent = `Player ${oTurn ? 'O' : 'X'}'s turn`;
  }
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
  cell.textContent = currentClass.toUpperCase();
}

function swapTurns() {
  oTurn = !oTurn;
}

function checkWin(currentClass) {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return cells[index].classList.contains(currentClass);
    });
  });
}

function isDraw() {
  return [...cells].every(cell => {
    return cell.classList.contains('x') || cell.classList.contains('o');
  });
}

function endGame(draw) {
  if (draw) {
    message.textContent = "It's a draw!";
  } else {
    message.textContent = `Player ${oTurn ? 'O' : 'X'} wins!`;
  }
  
  cells.forEach(cell => cell.removeEventListener('click', handleClick));
}

restartBtn.addEventListener('click', startGame);

startGame();

