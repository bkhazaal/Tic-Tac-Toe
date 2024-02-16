document.addEventListener("DOMContentLoaded", function() {
const cells = document.querySelectorAll(".buttons");
const statusText = document.querySelector("#statusText");
const restartButton = document.querySelector(".restart");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let options = ["", "", "", "", "", "", "", "", "",];
let currentPlayer = "X";
let running = false;

initalizeGame();

function initalizeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}

function cellClicked() {
    if (!running) {
        return;
    }

    if (this.textContent !== "") {
        return;
    }

    updateCell(this);
    checkWinner();
}

    updateCell(this, cellIndex);
    checkWinner();

function updateCell(cell) {
    cell.textContent = currentPlayer;
    changePlayer();
    }
    
function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;

}
});
