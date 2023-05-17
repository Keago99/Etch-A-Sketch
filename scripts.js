let color = "black";

function populateBoard(size){
    let board = document.querySelector(".board");
    let squares = document.querySelectorAll(".div");
    // Creates and executes a simple function that removes all divs before appending them
    squares.forEach((div) => div.remove());

    // Creates a Board with columns and rows equal to the size of the "size" variable
    // Each block will be one size variable.
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    // After columns and rows are set, we need to set a variable for the amount.
    let amount = size*size;
    // For loop that creates a Div until board is full, each div is colored green
    for(let i = 0; i<amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = "green";
        board.insertAdjacentElement('beforeend', square);
    }
}

// Basically just calling the populateBoard function but with user input taken from DOM.
function changeSize(input){
    // Validate input so the program doesn't crash on large inputs and doesn't receive
    // negative numbers.
    if (input >= 2 && input <= 100){
        populateBoard(input);
    }
    else{
        console.log("Too many squares");
    }
    

}

function colorSquare(){
    if ((color  === 'random')){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else{
        this.style.backgroundColor = color;
    }
    
}

function changeColor(choice){
    color = choice;
}

function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "green");

}

populateBoard(16);