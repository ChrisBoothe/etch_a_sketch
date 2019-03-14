
const container = document.querySelector('.container');

let gridNumber = 20;

// Create the grid
for (var i = 0; i < (gridNumber*gridNumber); i++) {
    gridSquare = document.createElement('div')
    gridSquare.className = "square";
    container.appendChild(gridSquare);
}

const squares = document.querySelectorAll('.square');

// Add event listeners and change color
squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        e.target.style.background = 'black'
    });
});




