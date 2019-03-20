
const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
let gridNumber = 0;


// Create a grid
function createGrid(){
    for (var i = 0; i < (gridNumber*gridNumber); i++) {
        gridSquare = document.createElement('div')
        gridSquare.className = "square";
        container.appendChild(gridSquare);
    }
}

//Remove current grid
function removeGrid(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Add event listeners and change color
function colorSquares(){
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.background = 'black'
        });
    });
}

// Erase and create new grid via button
btn.addEventListener('click', () => {
    removeGrid();
    gridNumber = prompt("How many squares?");
    container.style.gridTemplateColumns = "repeat("+gridNumber+", 1fr)";
    container.style.gridTemplateRows = "repeat("+gridNumber+", 1fr)";
    createGrid();
    colorSquares();
});



