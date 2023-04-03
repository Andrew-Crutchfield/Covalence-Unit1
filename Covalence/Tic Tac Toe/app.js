let cells = document.querySelectorAll(".row > div");
let screen = document.querySelectorAll("#board")

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}
var player1 = "X";
var player2 = "O";
var currentPlayer = "X";
var win = false;
var cellArray = Array.from(cells);

const winMessage = document.getElementById('winMessage')
const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWin(currentPlayer) {
    return winningLines.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === currentPlayer  
        })
    })
}
function isDraw() {
    return cellArray.every(cell => {
        return (cell.textContent === player1 || cell.textContent === player2);
    });     
}

function cellClicked(event) {
    event.target.textContent = currentPlayer;
    let gameOver = checkWin(currentPlayer);
    let noContest = isDraw();
        if (gameOver) {
            document.getElementById('winMessage').innerHTML = currentPlayer + " Wins!!!";
            winMessage.style.display = "block";
            win = true;
            document.addEventListener('click', () => location.reload("file:///Users/andrewcrutchfield/Desktop/Covalence/Tic%20Tac%20Toe/index.html"));
            return;
        } else if (noContest && win === false) {
            document.getElementById('winMessage').innerHTML = "It's A Draw!!!";
            winMessage.style.display = "block";
            document.addEventListener('click', () => location.reload("file:///Users/andrewcrutchfield/Desktop/Covalence/Tic%20Tac%20Toe/index.html"));
            return;
        } else {
            if (currentPlayer === player1) {
                currentPlayer = player2;
            } else (currentPlayer = player1);
        }
}
