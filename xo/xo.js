let cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

cells.forEach(function(cell) {
  cell.addEventListener("click", function() {
    if (cell.textContent !== "") {
      alert("Cell is already taken. Choose another cell.");
      return;
    }

    cell.textContent = currentPlayer;

    if (checkWin()) {
      alert(currentPlayer + " wins!");
      resetGame();
      return;
    }

    if (checkDraw()) {
      alert("Draw!");
      resetGame();
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some(function(combination) {
    return combination.every(function(index) {
      return cells[index].textContent === currentPlayer;
    });
  });
}

function checkDraw() {
  return Array.from(cells).every(function(cell) {
    return cell.textContent !== "";
  });
}

function resetGame() {
  cells.forEach(function(cell) {
    cell.textContent = "";
  });
  currentPlayer = "X";
}
