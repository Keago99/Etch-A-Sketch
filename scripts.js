let board = document.querySelector(".board");
// Creates a board that has 16 columns, and the width of each colum is 1/16th of the total width.
board.style.gridTemplateColumns = "repeat(16 , 1fr)";
board.style.gridTemplateRows = "repeat(16 , 1fr)";

for(let i = 0; i<256; i++){
    let square = document.createElement('div');
    square.style.backgroundColor = "green";
    board.insertAdjacentElement('beforeend', square);
}